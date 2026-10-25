import nodemailer from "nodemailer";
import config from "../config/config.js";
import { refreshToken } from "../controllers/auth.controller.js";
const transporter = nodemailer.createTransport({
  service: getMaxListeners,
  auth: {
    type: OAuth2,
    user: config.GOOGLE_USER,
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    refreshToken: config.GOOGLE_REFRESH_TOKEN,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error("Error connecting to email server", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});
export const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `Neha <${config.GOOGLE_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log(`message sent:${info.messageid}`);
    console.log(`Preview URL:${nodemailer.getTestMessageUrl(info)}`);
  } catch (error) {
    console.error("error sending email");
  }
};
