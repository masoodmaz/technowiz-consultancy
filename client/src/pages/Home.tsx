import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SectionEyebrow, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  ["01", "Salesforce & enterprise CRM", "Bespoke Salesforce solutions and integrations that make customer systems work harder for the business.", "/services"],
  ["02", "Content & workflow platforms", "Enterprise document management, document control and workflow automation across the information lifecycle.", "/services"],
  ["03", "AI adoption strategy", "A practical route from AI opportunity to responsible, value-led implementation.", "/services"],
  ["04", "AI Test Automation", "Intelligent test design and continuous validation for complex, fast-moving digital estates.", "/ai-test-automation"],
  ["05", "OpenText + SAP SuccessFactors", "Connected employee documents, records and processes across enterprise content and HR systems.", "/opentext-sap-successfactors"],
] as const;

const testimonials = [
  ["Technowiz transformed our business with their expertise. Their tailored IT solutions streamlined our operations, boosted efficiency and drove growth.", "FV", "Fakruddin Vattachira", "CEO, Klenko"],
  ["Their IT solutions were perfectly tailored to our needs, driving efficiency and innovation. A trusted partner we would recommend to any business.", "JC", "Jenice Clark", "CEO, JNC Associates"],
  ["Their IT consultancy helped us achieve seamless operations and measurable results. Highly professional and truly transformational.", "HR", "Helen Randell", "Senior Manager, Pensions Regulator"],
  ["Their expertise in IT consultancy and software development helped us achieve our goals faster and smarter. Professional and results-driven.", "JM", "James McQueen", "Managing Director, Stealth IT"],
] as const;

function HeroDisc() {
  return <div className="hp-visual" aria-hidden="true"><div className="hp-disc"><svg viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice"><g className="hp-floor"><path d="M0 330H520M0 365H520M0 405H520M260 330L-60 520M260 330L60 520M260 330L180 520M260 330L340 520M260 330L460 520M260 330L580 520"/></g><g className="hp-spires"><path className="dim" d="M76 330V230M112 330V150M148 330V263M184 330V120M220 330V200M256 330V272M292 330V175M328 330V238M364 330V135M400 330V250M436 330V175"/><path className="blue" d="M102 330V105M179 330V80M363 330V124M435 330V146"/><path className="mint" d="M72 330V195M145 330V230M217 330V170M289 330V210M361 330V182M433 330V228"/><g className="nodes"><circle cx="72" cy="195" r="4"/><circle cx="145" cy="230" r="4"/><circle cx="217" cy="170" r="4"/><circle cx="289" cy="210" r="4"/><circle cx="361" cy="182" r="4"/><circle cx="433" cy="228" r="4"/></g></g></svg></div><span className="tw-tag tw-tag--mint hp-chip">01 / Think in systems</span><div className="hp-chip-note"><span>CONCEIVE · BUILD · TRANSFORM</span>From strategy to software — one accountable team.</div></div>;
}

export default function Home() {
  return <div className="tw-root">
    <SiteHeader theme="light" />
    <main>
      <section className="hp-hero hp-hero--beige">
        <div className="hp-grid" aria-hidden="true" />
        <div className="tw-container hp-hero__body">
          <div>
            <SectionEyebrow>Software consultancy · London & beyond</SectionEyebrow>
            <h1 className="tw-display tw-display--xl">Make complex change <em>coherent.</em></h1>
            <p className="tw-lead">Technowiz turns ambitious digital agendas into dependable systems, thoughtful software and intelligent ways of working.</p>
            <div className="hp-actions"><a href="mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry" className="tw-btn tw-btn--mint">Talk to an expert <ArrowRight /></a><Link href="/services" className="tw-btn tw-btn--ghost">Explore capabilities <ArrowDownRight /></Link></div>
          </div>
          <HeroDisc />
        </div>
        <div className="hp-pillars"><div className="tw-container"><span><b>01</b> Enterprise platforms</span><span><b>02</b> Human-centred delivery</span><span><b>03</b> AI-ready thinking</span></div></div>
      </section>

      <section className="tw-band tw-band--alt tw-section"><div className="tw-container hp-intro"><div><SectionEyebrow>Built for meaningful progress</SectionEyebrow><h2 className="tw-display tw-display--lg">Powering transformation at the point where business, systems and people meet.</h2></div><div><p>Whether you are challenging the market as a startup or streamlining a mature enterprise, our developers, designers and consultants shape the route from intent to impact.</p><Link href="/about" className="tw-link">Meet Technowiz <ArrowUpRight /></Link></div></div></section>

      <section className="tw-band tw-section"><div className="tw-container"><div className="hp-head"><div><SectionEyebrow>What we solve</SectionEyebrow><h2 className="tw-display tw-display--lg">Capability, made useful.</h2></div><Link href="/services" className="tw-btn tw-btn--dark">View all services <ArrowRight /></Link></div><div className="tw-services">{services.map(([number, title, description, href]) => <ServiceCard key={number} number={number} title={title} description={description} href={href} featured={number === "04"} />)}<article className="tw-card tw-card--prompt"><SectionEyebrow>Not sure where to start?</SectionEyebrow><h3>Bring the problem. We will map the route.</h3><a href="mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry" className="tw-btn tw-btn--dark">Book a discovery call <ArrowRight /></a></article></div></div></section>

      <section className="tw-band tw-band--soft tw-section"><div className="tw-container"><div className="hp-cap"><div><SectionEyebrow>Not just implementation</SectionEyebrow><h2 className="tw-display tw-display--lg">We create the conditions for platforms to earn their place in the business.</h2></div><p>The right solution connects operational detail with commercial intent. Our work is designed around adoption, integration, governance and the everyday experience of the people who use it.</p></div><div className="tw-steps"><article className="tw-step"><span>01</span><h3>Conceive</h3><p>Frame the problem, clarify value and design the route forward.</p></article><article className="tw-step"><span>02</span><h3>Build</h3><p>Deliver robust solutions with the right technical depth and stakeholder focus.</p></article><article className="tw-step"><span>03</span><h3>Transform</h3><p>Embed change, optimise outcomes and prepare for what comes next.</p></article></div></div></section>

      <section className="tw-band tw-band--proof tw-section"><div className="tw-container"><div className="hp-head"><div><SectionEyebrow>Client perspective</SectionEyebrow><h2 className="tw-display tw-display--lg">Trusted when it matters.</h2></div></div><div className="hp-quotes">{testimonials.map(([quote, initials, name, role]) => <figure className="tw-quote" key={name}><blockquote>“{quote}”</blockquote><figcaption><span>{initials}</span><div><b>{name}</b><small>{role}</small></div></figcaption></figure>)}</div></div></section>

      <section className="tw-band tw-band--alt tw-section"><div className="tw-container hp-about"><p>Doing change<br />with <em>intent.</em><span>TECHNOWIZ · ABOUT US</span></p><div><h2 className="tw-display tw-display--md">Scalable technology, built from a simple belief: progress should feel possible.</h2><p>From a humble idea to a team supporting clients worldwide, Technowiz brings considered thinking and practical delivery to every engagement.</p><Link href="/about" className="tw-link">About us <ArrowUpRight /></Link></div></div></section>

      <section className="hp-close hp-close--soft"><div className="tw-container"><div><SectionEyebrow>Let’s work together</SectionEyebrow><h2 className="tw-display tw-display--lg">Ready to move from possibility to <em>progress?</em></h2></div><div><p className="tw-lead">Bring the right problem.</p><a href="mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry" className="tw-btn tw-btn--mint">Start a conversation <ArrowRight /></a></div></div></section>
    </main>
    <SiteFooter />
  </div>;
}
