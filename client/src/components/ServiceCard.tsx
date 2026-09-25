import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export function ServiceCard({ number, title, description, href, featured = false }: ServiceCardProps) {
  return (
    <article className={`tw-card ${featured ? "tw-card--feature" : ""}`}>
      <span className="tw-card__num" aria-hidden="true">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href} className="tw-link">Discover more <ArrowUpRight /></Link>
    </article>
  );
}
