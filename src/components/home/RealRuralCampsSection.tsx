import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { realCampMoments } from "@/data/site";
import { RealRuralCampsMotion } from "@/components/motion/RealRuralCampsMotion";

export function RealRuralCampsSection() {
  return (
    <section className="rc-real-camps" aria-labelledby="real-camps-title">
      <RealRuralCampsMotion />
      <div className="rc-real-copy">
        <p className="eyebrow rc-real-reveal">06 · Real Rural Camps</p>
        <h2 className="rc-real-reveal" id="real-camps-title">Real places.<br />Real nights.<br />Real people.</h2>
        <p className="rc-real-lead rc-real-reveal">Moments from our camps, journeys,<br />and rural stays across Odisha.</p>
        <Button asChild size="lg" className="rc-cream-button rc-real-reveal">
          <a href="https://www.instagram.com/rural__camps" target="_blank" rel="noreferrer">Follow on Instagram <Instagram /></a>
        </Button>
        <Link className="rc-more-moments rc-real-reveal" to="/destinations">More moments <ArrowRight /></Link>
        <p className="rc-hand-note rc-real-reveal">Hidden trails.<br />Bigger stories.</p>
      </div>
      <div className="rc-moment-collage">
        {realCampMoments.map((moment, index) => (
          <figure className={`rc-moment rc-moment-${index + 1}`} key={moment.caption}>
            <span className="rc-photo-tape" aria-hidden />
            <img src={moment.image} alt="" loading="lazy" width="900" height="650" />
            <figcaption>{moment.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="rc-lantern-glow" aria-hidden />
    </section>
  );
}