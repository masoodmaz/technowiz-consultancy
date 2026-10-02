import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionEyebrow, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { submitContactForm } from "@/lib/contact";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") || "");
    const email = String(values.get("email") || "");
    const message = String(values.get("message") || "");

    setSending(true);
    try {
      await submitContactForm({ name, email, message });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (submitError) {
      const submitMessage = submitError instanceof Error ? submitError.message : "Failed to send message.";
      setError(submitMessage);
    } finally {
      setSending(false);
    }
  }
  return <div className="tw-root"><SiteHeader /><main>
    <section className="interior-hero" data-theme="dark"><div className="tw-container interior-hero__grid"><div><SectionEyebrow>Contact Technowiz</SectionEyebrow><h1 className="tw-display tw-display--xl">Good conversations start with a clear question.</h1></div><p className="tw-lead">Tell us what you are trying to change, connect or improve. We will bring the right people into the conversation.</p></div></section>
    <section className="tw-band tw-section"><div className="tw-container contact-grid"><aside><p className="contact-intro">Let’s get your next move on the table.</p><div className="contact-details"><a href="tel:+441618189129"><Phone /><span><small>Call</small>+44 161 818 9129</span></a><a href="mailto:info@technowizltd.com"><Mail /><span><small>Email</small>info@technowizltd.com</span></a><div><Clock3 /><span><small>Hours</small>Mon–Fri, 8am–8pm</span></div><div><MapPin /><span><small>Office</small>15 Amba House, College Road,<br />Harrow, England, HA1 1BA</span></div></div></aside><div className="tw-contact-card" data-theme="dark"><SectionEyebrow>Send an enquiry</SectionEyebrow><h2 className="tw-display tw-display--lg">What can we help make clearer?</h2><p>Complete the form and we will send your enquiry directly to Technowiz.</p><form onSubmit={submit}><label><span>Name</span><input name="name" autoComplete="name" placeholder="Your name" required /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label><span>Message</span><textarea name="message" rows={6} placeholder="A little about the challenge, platform or project…" required /></label><button type="submit" className="tw-btn tw-btn--mint" disabled={sending}>{sending ? "Sending..." : "Send enquiry"} <ArrowRight /></button>{submitted && <p className="form-success">Thanks — your enquiry has been sent.</p>}{error && <p className="text-sm text-red-600">{error}</p>}</form></div></div></section>
  </main><SiteFooter /></div>;
}
