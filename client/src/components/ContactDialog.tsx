import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/contact";

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSuccess("");

    const values = new FormData(form);
    const payload = {
      name: String(values.get("name") || "").trim(),
      email: String(values.get("email") || "").trim(),
      message: String(values.get("message") || "").trim(),
    };

    setSubmitting(true);
    try {
      await submitContactForm(payload);
      setSuccess("Thanks — your message has been sent. We will be in touch soon.");
      form.reset();
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Failed to send message.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl bg-[var(--surface-card)] text-[var(--ink)] opacity-100">
        <DialogHeader>
          <DialogTitle>Start a conversation</DialogTitle>
          <DialogDescription>
            Tell us about your challenge and we will get back to you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-1.5">
            <span>Name</span>
            <Input name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label className="grid gap-1.5">
            <span>Email</span>
            <Input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </label>
          <label className="grid gap-1.5">
            <span>Message</span>
            <Textarea name="message" rows={6} placeholder="A little about the challenge, platform or project…" required />
          </label>
          <button type="submit" className="tw-btn tw-btn--mint" disabled={submitting}>
            {submitting ? "Sending..." : "Send message"} <ArrowRight />
          </button>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="form-success">{success}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}
