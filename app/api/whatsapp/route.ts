import { NextResponse } from "next/server";

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN; // Guarda tu token en .env.local

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Recibe datos del cliente
    const { phone, message } = body;

    // Validar datos
    if (!phone || !message) {
      return NextResponse.json({ error: "Número y mensaje son requeridos" }, { status: 400 });
    }

    // Configuración del mensaje
    const response = await fetch(`${WHATSAPP_API_URL}/${process.env.WHATSAPP_PHONE_ID}/messages`, {
      method: "POST",   
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: { body: message },
      }),
    });

    const data = await response.json();

    // Verifica si hay errores
    if (!response.ok) {
      console.error("Error al enviar mensaje:", data);
      return NextResponse.json({ error: data.error.message }, { status: response.status });
    }

    return NextResponse.json({ message: "Mensaje enviado correctamente", data });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}
