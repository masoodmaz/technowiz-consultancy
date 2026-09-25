import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "wouter";

const logoSrc = "/technowiz-logo.gif";
const mailto = "mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry";

const navigation = [
  ["Services", "/services"],
  ["AI Test Automation", "/ai-test-automation"],
  ["OpenText + SAP", "/opentext-sap-successfactors"],
  ["About", "/about"],
] as const;

export function Brand({ footer = false, onClick }: { footer?: boolean; onClick?: () => void }) {
  return (
    <Link href="/" className="tw-brand" onClick={onClick}>
      <img src={logoSrc} alt="TechnoWiz logo" />
      <span>
        <b>TECHNOWIZ</b>
        <small className={footer ? "tw-brand__footer-strapline" : ""}>CONCEIVE · BUILD · TRANSFORM</small>
      </span>
    </Link>
  );
}

export function SiteHeader({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-header-shell" data-theme={theme}>
      <header className="tw-header">
        <div className="tw-container tw-header__inner">
          <Brand onClick={() => setOpen(false)} />
          <nav className="tw-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <a href={mailto} className="tw-btn tw-btn--mint tw-btn--sm">Start a conversation <ArrowUpRight /></a>
            <button className="tw-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
              {open ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
        {open && (
          <div className="tw-mobile-drawer">
            <div className="tw-container">
              {navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
              <a href={mailto} className="tw-btn tw-btn--mint" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight /></a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="tw-eyebrow">{children}</p>;
}

export function SiteFooter() {
  return (
    <footer className="tw-footer" data-theme="dark">
      <div className="tw-container tw-footer__grid">
        <div>
          <Brand footer />
          <p>Software, systems and intelligent automation for organisations ready to make change stick.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/services">Services</Link>
          <Link href="/ai-test-automation">AI Test Automation</Link>
          <Link href="/opentext-sap-successfactors">OpenText + SAP</Link>
        </div>
        <div>
          <h4>Connect</h4>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:info@technowizltd.com">info@technowizltd.com</a>
        </div>
      </div>
      <div className="tw-container tw-footer__bottom">© 2026 Technowiz Limited. All rights reserved. · 15 Amba House, College Road, Harrow, England, HA1 1BA</div>
    </footer>
  );
}
