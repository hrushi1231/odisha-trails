import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking/BookingForm";
import { HeroSection } from "@/components/home/HeroSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { DestinationTransition } from "@/components/home/DestinationTransition";
import { koraputStops, media } from "@/data/site";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <DestinationTransition />

      <section className="rent-story">
        <img
          src={media.rentCamp}
          alt="Temporary editorial visual of a portable camp setup"
          loading="lazy"
          width="1600"
          height="1000"
        />
        <div className="media-shade" />
        <div className="rent-copy">
          <p className="eyebrow">ANYWHERE SUITABLE IN ODISHA</p>
          <h2>
            YOU PICK
            <br />
            THE PLACE.
            <br />
            <em>WE BRING</em>
            <br />
            <em>THE CAMP.</em>
          </h2>
          <p>
            Portable camping for approved locations, shaped around access, conditions and your plan.
          </p>
          <Button asChild size="lg">
            <Link to="/rent-a-camp">
              Plan a Rent A Camp <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="setup-steps" aria-label="Camp setup sequence">
          {["Choose", "Confirm", "Arrive", "Set up", "Camp"].map((s, i) => (
            <span key={s}>
              <small>0{i + 1}</small>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="journey section-paper">
        <div className="journey-title">
          <p className="eyebrow">JOURNEYS, NOT JUST STAYS</p>
          <h2>
            KORAPUT
            <br />
            <em>2-DAY JOURNEY</em>
          </h2>
          <p>
            A route through highlands, waterfalls and sacred landscapes—not a checklist of branches.
          </p>
          <Link className="text-link" to="/tours/koraput-2-day">
            Explore the journey <ArrowUpRight />
          </Link>
        </div>
        <div className="route-map">
          <svg
            viewBox="0 0 600 620"
            role="img"
            aria-label="Route through Talamali, Deomali, Duduma, Gupteswar and Kolab"
          >
            <path
              className="route-path"
              d="M90 560 C 230 520, 160 400, 300 365 S 490 260, 390 180 S 270 90, 510 48"
              fill="none"
            />
            <path
              className="topo-path"
              d="M20 500 C180 430 40 320 220 240 S500 260 580 80"
              fill="none"
            />
          </svg>
          {koraputStops.map((stop, i) => (
            <div key={stop} className={`route-stop stop-${i + 1}`}>
              <span>{i + 1}</span>
              <strong>{stop}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="real-camps">
        <div className="real-title">
          <p className="eyebrow">THE REAL THING</p>
          <h2>
            REAL PLACES.
            <br />
            REAL NIGHTS.
            <br />
            <em>REAL PEOPLE.</em>
          </h2>
          <p>
            Owner-approved Rural Camps guest photographs and reels will live here. Until then, we
            leave the story honest.
          </p>
        </div>
        <div className="filmstrip">
          <figure>
            <img
              src={media.ramachandi}
              alt="Temporary editorial coastal camping visual"
              loading="lazy"
              width="1600"
              height="1000"
            />
            <figcaption>Ramachandi · coastal nights</figcaption>
          </figure>
          <figure className="film-video">
            <img
              src={media.rentCamp}
              alt="Temporary editorial campsite setup visual"
              loading="lazy"
              width="1600"
              height="1000"
            />
            <span>
              <Play /> Reel placeholder
            </span>
            <figcaption>Rent A Camp · after dark</figcaption>
          </figure>
          <figure>
            <img
              src={media.koraput}
              alt="Temporary editorial Koraput landscape visual"
              loading="lazy"
              width="1600"
              height="1000"
            />
            <figcaption>Koraput · roads into the hills</figcaption>
          </figure>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-message">
          <p className="eyebrow">READY TO GET OUT?</p>
          <h2>
            PLAN YOUR
            <br />
            <em>RURAL CAMPS</em>
            <br />
            TRIP.
          </h2>
          <p>Bring the date, the people and a rough idea. We’ll help shape the rest.</p>
        </div>
        <BookingForm compact />
      </section>
    </main>
  );
}
