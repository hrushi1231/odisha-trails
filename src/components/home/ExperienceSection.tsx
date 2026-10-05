import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/site";
import { ExperienceMotion } from "@/components/motion/ExperienceMotion";
import { useRef } from "react";

export function ExperienceSection() {
  const rootRef = useRef<HTMLElement>(null);
  return (
    <section ref={rootRef} className="rc-experiences" aria-labelledby="experience-title">
      <ExperienceMotion rootRef={rootRef} />
      <div className="rc-paper-lines" aria-hidden />
      <header className="rc-experience-heading">
        <p className="eyebrow">Choose your experience</p>
        <h2 id="experience-title">Different ways<br />out.</h2>
        <p>Four ways to experience outdoor Odisha.</p>
      </header>
      <div className="rc-experience-composition">
        {experiences.map((item, index) => (
          <article className={`rc-exp rc-exp-${index + 1}`} key={item.slug}>
            <Link to={item.href} aria-label={`Explore ${item.name}`}>
              <div className="rc-exp-image"><img src={item.image} alt="" loading="lazy" width="1600" height="1000" /></div>
              <div className="rc-exp-copy">
                <span>0{index + 1}</span><i />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="rc-exp-arrow" aria-hidden><ArrowRight /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}