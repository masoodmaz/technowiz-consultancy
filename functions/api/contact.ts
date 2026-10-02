type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

type PagesContext = {
  request: Request;
  env: {
    RESEND_API_KEY?: string;
    CONTACT_FROM_EMAIL?: string;
    CONTACT_TO_EMAIL?: string;
  };
};

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function validateContactPayload(input: unknown): ValidationResult {
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

async function sendWithResend(payload: ContactPayload, env: PagesContext["env"]): Promise<void> {
  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.CONTACT_FROM_EMAIL?.trim();
  const to = env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    throw new Error("Missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `Website enquiry from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(`Resend API error (${response.status}): ${errorBody}`);
  }
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  try {
    const body = await context.request.json();
    const validation = validateContactPayload(body);
    if (!validation.ok) {
      return json({ success: false, error: validation.error }, 400);
    }

    await sendWithResend(validation.data, context.env);
    return json({ success: true }, 200);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return json({ success: false, error: "Invalid JSON payload." }, 400);
    }

    console.error("Failed to send contact email from Cloudflare function:", error);
    return json(
      {
        success: false,
        error: "Email service is not configured correctly. Please try again later.",
      },
      500,
    );
  }
}
