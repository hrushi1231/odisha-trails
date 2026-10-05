import { BookingForm } from "@/components/booking/BookingForm";
import { PlanTripMotion } from "@/components/motion/PlanTripMotion";
import { media } from "@/data/site";

export function PlanTripSection() {
  return (
    <section className="rc-plan-trip" aria-labelledby="plan-trip-title">
      <PlanTripMotion />
      <img className="rc-plan-background" src={media.hero} alt="Temporary editorial dusk camp landscape" loading="lazy" width="1600" height="1000" />
      <div className="rc-plan-shade" />
      <div className="rc-plan-copy">
        <p className="eyebrow">07 · Plan your trip</p>
        <h2 id="plan-trip-title">Ready to<br />get out?</h2>
        <p>Tell us when, where and who.<br />We’ll take it from there.</p>
      </div>
      <BookingForm compact defaultExperience="Camp With Us" defaultDestination="Ramachandi" className="rc-plan-form" />
    </section>
  );
}