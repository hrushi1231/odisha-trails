import { Link } from "@tanstack/react-router";
import { ArrowRight, CarFront, CookingPot, Lightbulb, MapPin, Moon, TentTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { media, rentCampSteps } from "@/data/site";
import { RentCampMotion } from "@/components/motion/RentCampMotion";
import { useRef } from "react";

const stepIcons = [MapPin, CarFront, TentTree, CookingPot, Lightbulb, Moon] as const;

function RentCopy() {
  return (
    <>
      <div className="rc-rent-copy rc-rent-copy-left">
        <p className="eyebrow">04 · Rent A Camp · Odisha</p>
        <h2>You pick<br />the place.</h2>
        <p className="rc-rent-support">We bring the setup.</p>
        <Button asChild size="lg" className="rc-cream-button">
          <Link to="/rent-a-camp">Plan a Rent A Camp <ArrowRight /></Link>
        </Button>
      </div>
      <h3 className="rc-rent-copy rc-rent-copy-right">We bring<br />the camp.</h3>
    </>
  );
}

function RentSteps() {
  return (
    <ol className="rc-rent-steps" aria-label="Rent A Camp setup process">
      {rentCampSteps.map((step, index) => {
        const Icon = stepIcons[index];
        return (
          <li className="rc-rent-step" key={step.title}>
            <small>0{index + 1}</small>
            <span className="rc-rent-step-icon" aria-hidden>{Icon ? <Icon /> : null}</span>
            <strong>{step.title}</strong>
            <p>{step.detail}</p>
          </li>
        );
      })}
    </ol>
  );
}

export function RentCampSection() {
  const rootRef = useRef<HTMLElement>(null);
  const stageFrames = Array.from({ length: 6 }, (_, index) => ({
    src: media.rentCamp,
    alt: index === 5 ? "Temporary editorial visual of a completed camp setup at dusk" : "",
  }));
  return (
    <section ref={rootRef} className="rc-rent" aria-labelledby="rent-camp-title">
      <RentCampMotion rootRef={rootRef} />
      <div className="rc-rent-desktop">
        <div className="rc-rent-stage">
          <div className="rc-rent-frames">
            {stageFrames.map((frame, index) => (
              <img className="rc-rent-frame" src={frame.src} alt={frame.alt} aria-hidden={index < 5} loading="lazy" width="1600" height="1000" key={index} />
            ))}
          </div>
          <div className="rc-rent-shade" />
          <div className="rc-rent-ready-glow" aria-hidden />
          <div id="rent-camp-title"><RentCopy /></div>
          <RentSteps />
        </div>
      </div>
      <div className="rc-rent-mobile">
        <div className="rc-rent-mobile-media">
          <img src={media.rentCamp} alt="Temporary editorial visual of a camp being prepared at dusk" loading="lazy" width="1600" height="1000" />
          <div className="rc-rent-shade" />
        </div>
        <div className="rc-rent-mobile-copy" id="rent-camp-title-mobile"><RentCopy /></div>
        <RentSteps />
      </div>
    </section>
  );
}