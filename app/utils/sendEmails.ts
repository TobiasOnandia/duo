export const sendEmail = async (to: string, subject: string, body: string) => {
    try {
      const response = await fetch(`https://z0f1c4j8-3000.brs.devtunnels.ms/api/mails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, body }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Correo enviado con éxito:', data.message);
      } else {
        console.error('Error al enviar correo:', data.message);
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };