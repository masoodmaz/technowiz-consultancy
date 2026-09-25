import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SectionEyebrow, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const principles = [
  ["01", "Intent before activity", "We begin by making the problem, the value and the decision path clear."],
  ["02", "Practical innovation", "We bring new thinking into the realities of systems, teams and delivery constraints."],
  ["03", "Collaboration that transfers", "We work with client teams in ways that build clarity and capability, not dependency."],
  ["04", "A partnership mindset", "We stay accountable to the outcome, not simply the scope."],
] as const;

export default function About() {
  return <div className="tw-root"><SiteHeader /><main>
    <section className="interior-hero" data-theme="dark"><div className="tw-container interior-hero__grid"><div><SectionEyebrow>About Technowiz</SectionEyebrow><h1 className="tw-display tw-display--xl">Technology is most powerful when people can make it their own.</h1></div><p className="tw-lead">Technowiz delivers cutting-edge, scalable solutions for organisations worldwide — combining thoughtful consulting with hands-on software and enterprise-platform delivery.</p></div></section>
    <section className="tw-band tw-band--alt tw-section"><div className="tw-container story-grid"><p>From<br /><em>idea.</em><span>TO IMPACT</span></p><div><SectionEyebrow>Our story</SectionEyebrow><h2 className="tw-display tw-display--lg">Built to turn possibility into progress.</h2><p>From humble beginnings as a simple idea, Technowiz has grown into a team that empowers dozens of clients with innovative technology. We exist to make difficult change more navigable — with the right mix of expert perspective, disciplined delivery and human focus.</p><p>Our work spans software development, enterprise information platforms, workflow automation and the practical adoption of AI.</p></div></div></section>
    <section className="tw-band tw-section"><div className="tw-container"><div className="hp-head"><div><SectionEyebrow>How we think</SectionEyebrow><h2 className="tw-display tw-display--lg">The principles behind the practice.</h2></div><p className="hp-head__copy">Good technology work is a balance of technical insight, clear communication and respect for the organisation it will serve.</p></div><div className="tw-services outcome-grid">{principles.map(([number, title, detail]) => <article className="tw-card" key={number}><span className="tw-card__num">{number}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>
    <section className="tw-band tw-section" data-theme="dark"><div className="tw-container split-heading"><div><SectionEyebrow>Our promise</SectionEyebrow><h2 className="tw-display tw-display--lg">Conceive with curiosity. Build with craft. Transform with care.</h2></div><div className="tw-steps tw-steps--stack"><article className="tw-step"><span>UK</span><h3>Based in Harrow</h3><p>Serving businesses with a consultancy mindset and a global outlook.</p></article><article className="tw-step"><span>8–8</span><h3>Available Monday to Friday</h3><p>Practical support when delivery questions need clear answers.</p></article></div></div></section>
    <section className="hp-close" data-theme="dark"><div className="tw-container"><div><SectionEyebrow>Let’s see what is possible.</SectionEyebrow><h2 className="tw-display tw-display--lg">Bring your next challenge.</h2></div><a href="mailto:info@technowizltd.com?subject=TechnoWiz%20website%20enquiry" className="tw-btn tw-btn--mint">Meet the team <ArrowUpRight /></a></div></section>
  </main><SiteFooter /></div>;
}
