import { NextResponse } from "next/server";
import { handlePaymentNotification } from "@/app/utils/handlePayment";

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const paymentId = url.searchParams.get("data.id");
    const topic = url.searchParams.get("type");

    if (topic === "payment" && paymentId) {
      const result = await handlePaymentNotification(paymentId);

      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }

      return NextResponse.json({ message: result.success });
    }

    return NextResponse.json(
      { error: "Notificación inválida" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Error procesando la notificación:", error);
    return NextResponse.json(
      { error: "Error procesando la notificación" },
      { status: 500 },
    );
  }
}
