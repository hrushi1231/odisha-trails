import type { ReactNode } from "react";
export function PageHero({ eyebrow, title, copy, image, children }: { eyebrow: string; title: ReactNode; copy: string; image: string; children?: ReactNode }) {
 return <section className="page-hero"><img src={image} alt="" width="1600" height="1000" fetchPriority="high" /><div className="media-shade"/><div className="page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero-copy">{copy}</p>{children}</div></section>;
}
