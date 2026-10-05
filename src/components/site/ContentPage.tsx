import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function IntroBand({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
}) {
  return (
    <section className="intro-band">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="lead">{copy}</p>
      </Reveal>
    </section>
  );
}
export function SplitFeature({
  title,
  copy,
  image,
  reverse = false,
  children,
}: {
  title: string;
  copy: string;
  image: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`split-feature ${reverse ? "reverse" : ""}`}>
      <div className="split-media">
        <img src={image} alt="" loading="lazy" width="1600" height="1000" />
      </div>
      <Reveal className="split-copy">
        <h2>{title}</h2>
        <p>{copy}</p>
        {children}
      </Reveal>
    </section>
  );
}
export function NumberedList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly { title: string; copy: string }[];
}) {
  return (
    <section className="numbered-section">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <ol>
        {items.map((item, i) => (
          <li key={item.title}>
            <span>0{i + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
export function MediaGrid({
  images,
  labels,
}: {
  images: readonly string[];
  labels?: readonly string[];
}) {
  return (
    <section className="media-grid">
      {images.map((image, i) => (
        <figure key={`${image}-${i}`}>
          <img src={image} alt="" loading="lazy" width="1600" height="1000" />
          <figcaption>{labels?.[i] ?? "Temporary editorial media placeholder"}</figcaption>
        </figure>
      ))}
    </section>
  );
}
export function ArrowLink({
  to,
  children,
}: {
  to: "/plan-trip" | "/tours/koraput-2-day" | "/destinations/ramachandi" | "/destinations/koraput";
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight />
    </Link>
  );
}
