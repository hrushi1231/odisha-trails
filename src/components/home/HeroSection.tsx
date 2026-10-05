import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { media } from "@/data/site";
import { HeroMotion } from "@/components/motion/HeroMotion";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  return (
    <section ref={rootRef} className="rc-hero" aria-labelledby="home-title">
      <HeroMotion rootRef={rootRef} />
      <img
        className="rc-hero-media"
        src={media.hero}
        alt="Temporary editorial visual of an Odisha coastal camp at sunset"
        width="1600"
        height="1000"
        fetchPriority="high"
      />
      <div className="rc-hero-shade" aria-hidden />
      <div className="rc-hero-content">
        <p className="eyebrow rc-hero-eyebrow">RURAL CAMPS · ODISHA</p>
        <h1 id="home-title" aria-label="Outside the ordinary.">
          <span className="rc-title-mask"><span>OUTSIDE</span></span>
          <span className="rc-title-mask"><span>THE ORDINARY.</span></span>
        </h1>
        <div className="rc-hero-action">
          <p>Camp. Stay. Explore Odisha differently.</p>
          <Button asChild size="lg" className="rc-cream-button">
            <Link to="/destinations">Find your escape <ArrowRight /></Link>
          </Button>
        </div>
      </div>
      <div className="rc-scroll-cue" aria-hidden>
        <span>Scroll</span><ArrowDown />
      </div>
      <div className="rc-destination-index" aria-label="Featured destination one of four">
        <span>Ramachandi</span><i /><small>01 / 04</small>
      </div>
      <Link className="sr-only" to="/plan-trip">Plan a trip <ArrowUpRight /></Link>
    </section>
  );
}