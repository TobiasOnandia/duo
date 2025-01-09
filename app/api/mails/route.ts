import * as brevo from '@getbrevo/brevo';

const apiInstance = new brevo.TransactionalEmailsApi();

// Configurar la API Key
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export async function POST(req: Request) {
  try {
    // Parsear los datos del cuerpo de la solicitud
    const { to, subject, body } = await req.json();

    // Validar los datos recibidos
    if (!to || !subject || !body) {
      return new Response(
        JSON.stringify({ success: false, message: 'Faltan campos requeridos' }),
        { status: 400 }
      );
    }

    // Configurar el correo
    const smtp = new brevo.SendSmtpEmail();
    smtp.subject = subject;
    smtp.to = [{ email: to }];
    smtp.htmlContent = body;
    smtp.sender = {
      name: 'Duo Indumentaria',
      email: 'tobiasonandia0@gmail.com',
    };

    // Enviar el correo
    const response = await apiInstance.sendTransacEmail(smtp);

    return new Response(
      JSON.stringify({ success: true, message: 'Correo enviado', response }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar correo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(
      JSON.stringify({ success: false, message: errorMessage }),
      { status: 500 }
    );
  }
}
