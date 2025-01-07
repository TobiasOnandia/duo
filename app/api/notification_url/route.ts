import { createClient } from "@lib/supabaseServer";
import MercadoPagoConfig, { Payment } from "mercadopago";
import { NextResponse } from "next/server";


// Configura MercadoPago con tu token de acceso
const mercadoPago = new  MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: Request) {

    const supabase =  await createClient()

    try {
        // Extraer parámetros enviados por MercadoPago
        const url = new URL(req.url);
        const paymentId = url.searchParams.get("data.id"); // ID del pago
        const topic = url.searchParams.get("type"); // Tipo de evento

        console.log("Notificación recibida:", { paymentId, topic });

        // Valida que es un evento de pago
        if (topic === "payment" && paymentId) {
            // Consulta los detalles del pago usando MercadoPago API
            const paymentDetails = await fetch(
                `https://api.mercadopago.com/v1/payments/${paymentId}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
                    },
                }
            ).then((res) => res.json());

            console.log("Detalles del pago:", paymentDetails);

            // Guarda los datos relevantes en la base de datos
            const payment = await new Payment(mercadoPago).get({ id: paymentId });

            if (payment.status === "approved") {
                // Inserta el pedido en la base de datos
                const { error } =  await supabase.from('orders').insert({
                    order_id: payment.metadata.order_id,
                    fullName: payment.metadata.full_name,
                    email: payment.metadata.email,
                    address: payment.metadata.address,
                    city: payment.metadata.city,
                    state: payment.metadata.state,
                    postalCode: payment.metadata.postal_code,
                    phone: payment.metadata.phone,
                    total: payment.transaction_amount,
                });

                if(error) {
                    console.log('hubo un error con insert en la base de datos: ', error)
                }
            }
        }

        return NextResponse.json({ message: "Notificación procesada" });
    } catch (error) {
        console.error("Error procesando la notificación:", error);
        return NextResponse.json({ error: "Error procesando la notificación" }, { status: 500 });
    }
}
