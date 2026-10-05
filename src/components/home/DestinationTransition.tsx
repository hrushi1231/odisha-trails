import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { media } from "@/data/site";
import { DestinationMotion } from "@/components/motion/DestinationMotion";
import { useRef } from "react";

export function DestinationTransition() {
  const rootRef = useRef<HTMLElement>(null);
  return (
    <section ref={rootRef} className="rc-destinations" aria-label="Ramachandi and Koraput">
      <DestinationMotion rootRef={rootRef} />
      <div className="rc-destination-desktop">
        <div className="rc-destination-stage">
          <article className="rc-place rc-place-coast">
            <img src={media.ramachandi} alt="Temporary editorial visual inspired by coastal Odisha" loading="lazy" width="1600" height="1000" />
            <div className="rc-place-shade" />
            <div className="rc-place-copy rc-coast-copy">
              <p className="eyebrow">Two worlds. Same spirit.</p>
              <h2>Ramachandi</h2>
              <p>Sea. Camp. Cooking. Night.</p>
              <Button asChild size="lg" className="rc-cream-button"><Link to="/destinations/ramachandi">Explore Ramachandi <ArrowRight /></Link></Button>
            </div>
          </article>
          <article className="rc-place rc-place-hills">
            <img src={media.koraput} alt="Temporary editorial visual inspired by the Koraput highlands" loading="lazy" width="1600" height="1000" />
            <div className="rc-place-shade" />
            <div className="rc-place-copy rc-hills-copy">
              <h2>Koraput</h2>
              <p>Hills. Valleys. Waterfalls. Roads.</p>
              <Button asChild size="lg" className="rc-cream-button"><Link to="/destinations/koraput">Explore Koraput <ArrowRight /></Link></Button>
            </div>
          </article>
          <div className="rc-terrain-edge" aria-hidden />
          <svg className="rc-journey-line" viewBox="0 0 300 900" aria-hidden>
            <path d="M32 90 C 210 160, 65 280, 205 390 S 78 615, 250 805" />
            <circle cx="32" cy="90" r="6" /><circle cx="250" cy="805" r="6" />
          </svg>
          <span className="rc-map-label rc-map-label-coast">Ramachandi</span>
          <span className="rc-map-label rc-map-label-hills">Koraput</span>
        </div>
      </div>

      <div className="rc-destination-mobile">
        <article className="rc-mobile-destination ramachandi">
          <img src={media.ramachandi} alt="Temporary editorial visual inspired by coastal Odisha" loading="lazy" width="1600" height="1000" />
          <div className="rc-mobile-destination-shade" />
          <div className="rc-mobile-destination-copy">
            <p className="eyebrow">Two worlds. Same spirit.</p>
            <h2>Ramachandi</h2>
            <p>Sea. Camp. Cooking. Night.</p>
            <Button asChild size="lg" className="rc-cream-button"><Link to="/destinations/ramachandi">Explore Ramachandi <ArrowRight /></Link></Button>
          </div>
        </article>
        <article className="rc-mobile-destination koraput">
          <img src={media.koraput} alt="Temporary editorial visual inspired by the Koraput highlands" loading="lazy" width="1600" height="1000" />
          <div className="rc-mobile-destination-shade" />
          <div className="rc-mobile-destination-copy">
            <h2>Koraput</h2>
            <p>Hills. Valleys. Waterfalls. Roads.</p>
            <Button asChild size="lg" className="rc-cream-button"><Link to="/destinations/koraput">Explore Koraput <ArrowRight /></Link></Button>
          </div>
        </article>
      </div>
    </section>
  );
}