import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

export function validateContactPayload(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Request body must be an object." };
  }

  const record = input as Record<string, unknown>;
  const name = String(record.name || "").trim();
  const email = String(record.email || "").trim();
  const message = String(record.message || "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email, and message are required." };
  }

  if (name.length > MAX_FIELD_LENGTH || email.length > MAX_FIELD_LENGTH) {
    return { ok: false, error: "Name or email is too long." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: "Message is too long." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { ok: false, error: "Email format is invalid." };
  }

  return {
    ok: true,
    data: { name, email, message },
  };
}

function readRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function readSmtpConfig() {
  const host = readRequiredEnv("SMTP_HOST");
  const portRaw = readRequiredEnv("SMTP_PORT");
  const user = readRequiredEnv("SMTP_USER");
  const pass = readRequiredEnv("SMTP_PASS");
  const to = process.env.CONTACT_TO_EMAIL?.trim() || user;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || user;
  const secure = process.env.SMTP_SECURE?.trim().toLowerCase() === "true";
  const port = Number(portRaw);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a positive integer.");
  }

  return { host, port, user, pass, to, from, secure };
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const smtp = readSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await transporter.sendMail({
    from: smtp.from,
    to: smtp.to,
    replyTo: payload.email,
    subject: `Website enquiry from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
  });
}
