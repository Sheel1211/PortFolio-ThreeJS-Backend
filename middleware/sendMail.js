import { createTransport } from "nodemailer";

//Using mailtrap.io for sending emails from our acc to our acc.
export const sendMail = async (userMessage) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    subject:"CONTACT REQUEST FROM PORTFOLIO",
    to:process.env.MYMAIL,
    from:process.env.MYMAIL,
    userMessage,
  })
};