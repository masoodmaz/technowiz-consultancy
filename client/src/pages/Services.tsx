import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SectionEyebrow, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  ["01", "Salesforce & enterprise CRM", "Bespoke Salesforce capabilities, solution design and integrations with systems including Pega and OpenText Documentum.", "/contact"],
  ["02", "Document lifecycle & BPM", "Enterprise document management, document control and automated workflows using Pega, Documentum D2 and Microsoft Power Automate.", "/contact"],
  ["03", "AI adoption strategy", "Practical AI opportunity assessment, implementation planning and adoption guidance designed around your people, processes and risk context.", "/contact"],
  ["04", "AI Test Automation", "Modern quality engineering that uses intelligent test design and automation to keep complex change release-ready.", "/ai-test-automation"],
  ["05", "OpenText + SAP SuccessFactors", "Integrated employee records and controlled content flows across OpenText platforms and SAP SuccessFactors.", "/opentext-sap-successfactors"],
] as const;

export default function Services() {
  return <div className="tw-root"><SiteHeader /><main>
    <section className="interior-hero" data-theme="dark"><div className="tw-container interior-hero__grid"><div><SectionEyebrow>Our services</SectionEyebrow><h1 className="tw-display tw-display--xl">Where ambition meets operational reality.</h1></div><p className="tw-lead">We bring product thinking, enterprise fluency and delivery discipline to the programmes that change how organisations work.</p></div></section>
    <section className="tw-band tw-section"><div className="tw-container"><div className="tw-services">{services.map(([number, title, description, href]) => <ServiceCard key={number} number={number} title={title} description={description} href={href} featured={number === "04"} />)}<article className="tw-card tw-card--prompt"><SectionEyebrow>What next?</SectionEyebrow><h3>Bring the problem. We will map the route.</h3><a href="mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry" className="tw-btn tw-btn--dark">Book a discovery call <ArrowRight /></a></article></div></div></section>
    <section className="tw-band tw-band--alt tw-section"><div className="tw-container split-heading"><div><SectionEyebrow>How we engage</SectionEyebrow><h2 className="tw-display tw-display--lg">Flexible by design. Focused on the outcome.</h2></div><div className="tw-steps tw-steps--stack"><article className="tw-step"><span>01</span><h3>Advisory</h3><p>Expert perspective for defining opportunities, untangling decisions and setting a confident direction.</p></article><article className="tw-step"><span>02</span><h3>Delivery</h3><p>Hands-on teams to design, build, integrate and quality-assure the right solution.</p></article><article className="tw-step"><span>03</span><h3>Improvement</h3><p>Ongoing optimisation for platforms that need to keep pace with changing priorities.</p></article></div></div></section>
    <section className="hp-close" data-theme="dark"><div className="tw-container"><div><SectionEyebrow>Have a platform challenge in mind?</SectionEyebrow><h2 className="tw-display tw-display--lg">Let’s make the next move clear.</h2></div><a href="mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry" className="tw-btn tw-btn--mint">Talk to Technowiz <ArrowUpRight /></a></div></section>
  </main><SiteFooter /></div>;
}
