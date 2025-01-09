import { Payment } from "mercadopago";
import mercadoPago from "@/app/utils/mercadopago";
import { sendMessage } from "@/app/utils/sendMessage";
import { getSupabaseWithAuth } from "@lib/supabaseServer";

export const handlePaymentNotification = async (paymentId: string) => {
  const payment = await new Payment(mercadoPago).get({ id: paymentId });

  // Recupera el JWT desde tu base de datos usando la orden ID
  const supabaseAdmin = getSupabaseWithAuth(payment.metadata.access_token);
  const { data: orderData, error: orderError } = await supabaseAdmin
    .from("orders")
    .select("jwt")
    .eq("order_id", payment.metadata.order_id)
    .maybeSingle();

  if (orderError) {
    console.error("Error al verificar si la orden existe:", orderError);
    return { error: "Error al verificar la existencia de la orden" };
  }

  console.log({ 'LadoNotification':payment})

  // Si la orden ya existe, evita insertar duplicados
  if (orderData) {
    console.log("Orden ya existe en la base de datos. Ignorando duplicado.");
    return {
      success: "Notificación procesada correctamente (orden ya existente)",
    };
  }

  // Verifica el estado del pago
  if (payment.status === "approved") {
    if (!payment.metadata.user_id) {
      return { error: "Usuario no autorizado" };
    }

    // Genera un JWT para el usuario y lo guarda con la orden
    const userJwt = payment.metadata.access_token; // O usa un método para generar el JWT
    const supabaseWithAuth = getSupabaseWithAuth(userJwt);

    // Verifica si el usuario existe
    const { error: userError } = await supabaseWithAuth.auth.getUser(userJwt);

    if (userError) {
      console.error("Error al obtener el usuario:", userError);
      return { error: "Error al obtener el usuario" };
    }

    // Inserta la orden en la base de datos con el JWT
    const { error: insertError } = await supabaseAdmin.from("orders").insert({
      order_id: payment.metadata.order_id,
      fullName: payment.metadata.full_name,
      email: payment.metadata.email,
      address: payment.metadata.address,
      city: payment.metadata.city,
      state: payment.metadata.state,
      postalCode: payment.metadata.postal_code,
      phone: payment.metadata.phone,
      total: payment.transaction_amount || 0,
      user_id: payment.metadata.user_id,
      jwt: userJwt, // Guardar el JWT asociado a la orden
    });

    if (insertError) {
      console.error("Error al insertar en la base de datos:", insertError);
      return { error: "Error al insertar en la base de datos" };
    }

    // Enviar mensaje de confirmación
    await sendMessage("+542954526316", [
      "Nombre del cliente",
      "Fecha del turno",
      "Hora del turno",
      "Nombre del médico",
      "Sede del médico",
      "Teléfono de contacto",
      "Notas adicionales",
    ]);

    return { success: "Notificación procesada correctamente" };
  }

  return { error: "Estado de pago no aprobado" };
};
