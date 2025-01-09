export const sendMessage = async (
  phoneNumber: string,
  templateParams: string[],
) => {
  const url = `https://graph.facebook.com/v14.0/${process.env.WHATSAPP_PHONE_ID}/messages`;
  const accessToken = process.env.WHATSAPP_TOKEN!; // Asegúrate de definir esta variable en tus variables de entorno

  const messageData = {
    messaging_product: "whatsapp",
    to: phoneNumber,
    type: "template",
    template: {
      name: "confirmacion_de_turno_reservado",
      language: {
        code: "es",
      },
      components: [
        {
          type: "body",
          parameters: templateParams.map((param) => ({
            type: "text",
            text: param,
          })),
        },
      ],
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Error al enviar mensaje de WhatsApp:", error);
    throw new Error(error.message);
  }

  return await response.json();
};
