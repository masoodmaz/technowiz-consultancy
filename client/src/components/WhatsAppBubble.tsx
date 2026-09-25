import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/const";

export function WhatsAppBubble() {
  return (
    <a
      className="whatsapp-bubble"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with TechnoWiz on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
