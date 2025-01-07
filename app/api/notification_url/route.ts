import { supabase } from "@/app/lib/supabaseClient";
import MercadoPagoConfig, { Payment } from "mercadopago";
import { NextResponse } from "next/server";

// Configura MercadoPago con tu token de acceso
const mercadoPago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

// Función para enviar un mensaje de WhatsApp
const sendMessage = async (phoneNumber: string, templateParams: string[]) => {
  const url = `https://graph.facebook.com/v14.0/444271245440118/messages`;
  const accessToken = process.env.WHATSAPP_TOKEN!; // Asegúrate de tener el token en las variables de entorno

  const messageData = {
    messaging_product: 'whatsapp',
    to: phoneNumber,
    type: 'template',
    template: {
      name: 'confirmacion_de_turno_reservado',
      language: {
        code: 'es',
      },
      components: [
        {
          type: 'body',
          parameters: templateParams.map((param) => ({
            type: 'text',
            text: param,
          })),
        },
      ],
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Error al enviar mensaje de WhatsApp:', error);
    throw new Error(error.message);
  }

  return await response.json();
};

export async function POST(req: Request) {
  try {
    const { data, error } = await supabase.auth.getSession();
    
    if (error || !data.session) {
      return NextResponse.json({ error: "Usuario no autenticado" }, { status: 401 });
    }

    const userId = data.session.user.id;

    // Extraer parámetros enviados por MercadoPago
    const url = new URL(req.url);
    const paymentId = url.searchParams.get("data.id");
    const topic = url.searchParams.get("type");

    console.log("Notificación recibida:", { paymentId, topic });

    if (topic === "payment" && paymentId) {
      const paymentDetails = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          },
        }
      ).then((res) => res.json());

      console.log("Detalles del pago:", paymentDetails);

      const payment = await new Payment(mercadoPago).get({ id: paymentId });

      if (payment.status === "approved") {
        // Verifica si el user_id de la metadata coincide con el usuario autenticado
        if (payment.metadata.user_id !== userId) {
          return NextResponse.json({ error: "Usuario no autorizado" }, { status: 403 });
        }

        // Inserta el pedido en la base de datos
        const { error } = await supabase.from('orders').insert({
          order_id: payment.metadata.order_id,
          fullName: payment.metadata.full_name,
          email: payment.metadata.email,
          address: payment.metadata.address,
          city: payment.metadata.city,
          state: payment.metadata.state,
          postalCode: payment.metadata.postal_code,
          phone: payment.metadata.phone,
          total: payment.transaction_amount,
          user_id: userId, // Asigna el user_id al pedido
        });

        if (error) {
          console.log('Hubo un error con el insert en la base de datos: ', error);
        }

        await sendMessage('+542954526316', [
          'Nombre del cliente',
          'Fecha del turno',
          'Hora del turno',
          'Nombre del médico',
          'Sede del médico',
          'Teléfono de contacto',
          'Notas adicionales',
        ]);
      }
    }

    return NextResponse.json({ message: "Notificación procesada" });
  } catch (error) {
    console.error("Error procesando la notificación:", error);
    return NextResponse.json({ error: "Error procesando la notificación" }, { status: 500 });
  }
}