export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as { error?: string } | null;
  if (!response.ok) {
    throw new Error(data?.error || "Failed to send message.");
  }
}
