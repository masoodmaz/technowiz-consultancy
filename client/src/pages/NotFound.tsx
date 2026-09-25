import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="tw-not-found" data-theme="dark"><div><p className="tw-eyebrow">404</p><h1 className="tw-display tw-display--xl">That route is not on the map.</h1><p className="tw-lead">Return to the Technowiz homepage to find the right next step.</p><Link href="/" className="tw-btn tw-btn--mint"><ArrowLeft /> Back to home</Link></div></main>;
}
