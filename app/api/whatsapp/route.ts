import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { phoneNumber, templateParams } = body;

  const url = `https://graph.facebook.com/v14.0/444271245440118/messages`;
  const accessToken = 'EAAqKwdkjpU8BO1IBx4l4djYHwiVNzJuv10X85v6OaZAQyrVSgpB8NN01rVSHL60vybMXHjogJ7SfGJiaDfs1NOpIgkZBOtydcvTQhcnNxu4BS3DC2nWj90mPn0gypBVc9YqtpY83z4aoepc7X6lHPYUNEspU9Pq7p4QFfoiEIgt77qJRwZAJUect7key1ZBEi8vsl9y6Rg8xtvd8r6fJaZBfzZCXUiEr3Tyi9sQlQiocwZD';

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
          parameters: templateParams.map((param: string) => ({
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
    return NextResponse.json({ error: error.message }, { status: response.status });
  }

  return NextResponse.json({ success: true });
}
