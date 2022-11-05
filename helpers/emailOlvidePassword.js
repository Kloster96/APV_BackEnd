import nodemailer from 'nodemailer';

const emailOlvide = async (datos) => {
    var transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port:process.env.EMAIL_PORT ,
            auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
            }
      });
      
      const { email, nombre, token } = datos;

      // Enviar email

      const info = await transport.sendMail({
        from: 'APV = Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html: `<p>Hola: ${nombre}, has solicitado reestrablecer tu password.</p>

            <p>Sigue el siguiente enlace para tener un nuevo password:
            <a href="${process.env.FRONEND_URL}/olvide-password/${token}">Reestablecer Password</a> </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `,
      })

      console.log("Mensaje Enviado: %s", info.messageId);
}

export default emailOlvide