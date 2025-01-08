import { Payment } from "mercadopago";
import mercadoPago from "./mercadopago";
import { sendMessage } from "./sendMessage";
import { getSupabaseWithAuth } from "@lib/supabaseServer";

export const handlePaymentNotification = async (paymentId: string) => {
  const payment = await new Payment(mercadoPago).get({ id: paymentId });
  const supabaseWithAuth = getSupabaseWithAuth(payment.metadata.access_token);

  const { error: userError } = await supabaseWithAuth.auth.getUser(
    payment.metadata.access_token,
  );

  if (userError) {
    console.error("Error al obtener el usuario:", userError);
    return { error: "Error al obtener el usuario" };
  }

  if (payment.status === "approved") {
    if (!payment.metadata.user_id) {
      return { error: "Usuario no autorizado" };
    }

    const { error: insertError } = await supabaseWithAuth
      .from("orders")
      .insert({
        order_id: payment.metadata.order_id,
        fullName: payment.metadata.fullName,
        email: payment.metadata.email,
        address: payment.metadata.address,
        city: payment.metadata.city,
        state: payment.metadata.state,
        postalCode: payment.metadata.postalCode,
        phone: payment.metadata.phone,
        total: payment.metadata.total || 0,
        user_id: payment.metadata.user_id,
      });

    if (insertError) {
      console.error("Error al insertar en la base de datos:", insertError);
      return { error: "Error al insertar en la base de datos" };
    }

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
