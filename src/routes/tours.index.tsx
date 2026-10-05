import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { IntroBand } from "@/components/site/ContentPage";
import { EditorialCTA } from "@/components/site/EditorialCTA";
import { media, tour } from "@/data/site";
export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "Odisha Tours & Koraput Journeys | Rural Camps" },
      {
        name: "description",
        content: "Explore live and custom Rural Camps journeys through Koraput, Odisha.",
      },
      { property: "og:title", content: "Odisha Journeys | Rural Camps" },
      {
        property: "og:description",
        content: "Curated roads, highlands and waterfalls across Koraput.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: Page,
});
function Page() {
  return (
    <main>
      <PageHero
        eyebrow="EXPLORE WITH US"
        title={
          <>
            JOURNEYS,
            <br />
            <em>NOT CHECKLISTS.</em>
          </>
        }
        copy="Follow a considered route through Odisha’s changing landscapes."
        image={media.koraput}
      />
      <IntroBand
        eyebrow="LIVE JOURNEY"
        title={
          <>
            KORAPUT
            <br />
            <em>IN TWO DAYS.</em>
          </>
        }
        copy={tour.summary}
      />
      <section className="tour-card">
        <img src={media.koraput} alt="" loading="lazy" width="1600" height="1000" />
        <div>
          <p className="eyebrow">
            {tour.durationLabel} · {tour.region}
          </p>
          <h2>{tour.name}</h2>
          <p>{tour.stops.map((s) => s.name).join(" → ")}</p>
          <Link className="text-link" to="/tours/koraput-2-day">
            View journey <ArrowUpRight />
          </Link>
        </div>
      </section>
      <EditorialCTA eyebrow="YOUR ROUTE" title="ASK FOR A CUSTOM KORAPUT PLAN." />
    </main>
  );
}
