import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { IntroBand, SplitFeature, MediaGrid } from "@/components/site/ContentPage";
import { EditorialCTA } from "@/components/site/EditorialCTA";
import { experiences, koraputStops, media } from "@/data/site";
export const Route = createFileRoute("/destinations/koraput")({
  head: () => ({
    meta: [
      { title: "Koraput Camping, Rural Stay & Tours | Rural Camps" },
      {
        name: "description",
        content:
          "Explore Koraput through camping, portable camps, rural stays and curated journeys.",
      },
      { property: "og:title", content: "Explore Koraput with Rural Camps" },
      {
        property: "og:description",
        content: "Highlands, waterfalls, roads and rural experiences across Koraput.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/destinations/koraput" }],
  }),
  component: Page,
});
function Page() {
  return (
    <main>
      <PageHero
        eyebrow="KORAPUT · EASTERN GHATS"
        title={
          <>
            GO HIGHER.
            <br />
            <em>STAY LONGER.</em>
          </>
        }
        copy="Hills, valleys, rural stays and journeys across a region—not a single campsite."
        image={media.koraput}
      />
      <IntroBand
        eyebrow="WAYS TO EXPERIENCE KORAPUT"
        title={
          <>
            ONE REGION.
            <br />
            <em>FOUR WAYS IN.</em>
          </>
        }
        copy="Camp, bring a portable setup to a suitable place, follow a curated route, or enquire about staying closer to village life."
      />
      <section className="experience-lines">
        {experiences.map((e, i) => (
          <Link key={e.slug} to={e.href}>
            <span>0{i + 1}</span>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
            <ArrowUpRight />
          </Link>
        ))}
      </section>
      <SplitFeature
        title="TALAMALI × DEOMALI"
        copy="Two names inside the wider Koraput journey: highland landscapes, roads, weather and changing light. They are experiences within the regional hub—not separate Rural Camps branches."
        image={media.koraput}
      />
      <section className="highlight-band">
        <p className="eyebrow">REGIONAL HIGHLIGHTS</p>
        {koraputStops.map((s, i) => (
          <span key={s}>
            <small>0{i + 1}</small>
            {s}
          </span>
        ))}
      </section>
      <MediaGrid
        images={[media.koraput, media.rentCamp, media.koraput]}
        labels={[
          "Koraput highlands · temporary visual",
          "Outdoor night · temporary visual",
          "Road journey · temporary visual",
        ]}
      />
      <EditorialCTA title="PLAN YOUR KORAPUT JOURNEY." />
    </main>
  );
}
