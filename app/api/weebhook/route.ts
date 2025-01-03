import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import MercadoPagoConfig, { Payment } from "mercadopago";

// Configura MercadoPago
const mercadoPago = new  MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    // Obtenemos el cuerpo de la petición que incluye la notificación
    const body = await request.json();

    // Obtenemos el ID del pago desde la notificación
    const paymentId = body?.items?.id;

    if (!paymentId) {
      return NextResponse.json(
        { error: "No se proporcionó un ID de pago válido" },
        { status: 400 }
      );
    }

    // Obtenemos los detalles del pago
    const payment = await new Payment(mercadoPago).get({
        id: paymentId,
    });

    // Validamos el estado del pago
    if (payment.status === "approved") {
      // Lógica personalizada para actualizar tu e-commerce
      // Por ejemplo, actualizar el estado del pedido en la base de datos
      console.log("Pago aprobado:", payment);

      // Revalida la página para reflejar los cambios
      revalidatePath("/");

      return NextResponse.json({ message: "Pago procesado exitosamente" });
    } else {
      console.log("Pago no aprobado:", payment.status);
      return NextResponse.json(
        { error: "Pago no aprobado" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error al procesar el webhook:", error);
    return NextResponse.json(
      { error: "Error interno al procesar el webhook" },
      { status: 500 }
    );
  }
}
