import nodemailer from "nodemailer";
import { renderContactEmailHtml, renderContactEmailText } from "@/app/templates/contact-email";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  pains: string[];
  message: string;
  persona: "compras" | "usinagem" | "direcao";
  monthlyItems: string;
  machines: string;
  revenue: string;
};

type MailEnv = {
  host: string;
  port: number;
  secure: boolean;
  requireTLS: boolean;
  user: string;
  pass: string;
  from: string;
  to: string[];
};

let cachedTransporter: nodemailer.Transporter | null = null;

function loadEnv(): MailEnv {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
    CONTACT_FORM_TO,
    SMTP_SECURE,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !CONTACT_FORM_TO) {
    throw new Error("Missing SMTP environment variables for contact form");
  }

  const port = Number(SMTP_PORT);
  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a number");
  }

  const recipients = CONTACT_FORM_TO.split(",").map((email) => email.trim()).filter(Boolean);
  if (recipients.length === 0) {
    throw new Error("CONTACT_FORM_TO must have at least one recipient");
  }

  const secure = SMTP_SECURE === "true" || port === 465;
  const requireTLS = process.env.NODE_ENV === "production" && !secure;

  return {
    host: SMTP_HOST,
    port,
    secure,
    requireTLS,
    user: SMTP_USER,
    pass: SMTP_PASS,
    from: MAIL_FROM,
    to: recipients,
  };
}

function getTransporter(env: MailEnv) {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  cachedTransporter = nodemailer.createTransport({
    host: env.host,
    port: env.port,
    secure: env.secure,
    requireTLS: env.requireTLS,
    auth: {
      user: env.user,
      pass: env.pass,
    },
    tls: env.requireTLS ? { minVersion: "TLSv1.2" } : undefined,
  });

  return cachedTransporter;
}

export async function sendContactFormMail(payload: ContactFormPayload) {
  const env = loadEnv();
  const transporter = getTransporter(env);

  const subject = `[Contato do site] ${payload.name} - ${payload.company}`;
  const html = renderContactEmailHtml(payload);
  const text = renderContactEmailText(payload);

  await transporter.sendMail({
    from: env.from,
    to: env.to,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}
