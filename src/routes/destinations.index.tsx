import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EditorialCTA } from "@/components/site/EditorialCTA";
import { destinations, media } from "@/data/site";
export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Camping Destinations in Odisha | Rural Camps" },
      {
        name: "description",
        content: "Discover Rural Camps experiences in Ramachandi and across the Koraput region.",
      },
      { property: "og:title", content: "Rural Camps Destinations in Odisha" },
      {
        property: "og:description",
        content: "Coastal camp nights and journeys into the Eastern Ghats.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: Destinations,
});
function Destinations() {
  return (
    <main>
      <PageHero
        eyebrow="DESTINATIONS · ODISHA"
        title={
          <>
            FIND YOUR
            <br />
            <em>WAY OUT.</em>
          </>
        }
        copy="Two destination worlds. One invitation to meet Odisha outdoors."
        image={media.koraput}
      />
      <section className="destination-list">
        <div className="section-intro">
          <p className="eyebrow">LIVE DESTINATION HUBS</p>
          <h2>
            COAST.
            <br />
            <em>HIGHLANDS.</em>
          </h2>
        </div>
        {destinations.map((d, i) => (
          <article key={d.slug}>
            <img src={d.image} alt="" loading="lazy" width="1600" height="1000" />
            <div>
              <p className="eyebrow">
                0{i + 1} · {d.region}
              </p>
              <h2>{d.name}</h2>
              <p>{d.summary}</p>
              <div className="tag-row">
                {d.experiences.map((e) => (
                  <span key={e}>{e.replaceAll("-", " ")}</span>
                ))}
              </div>
              <Link
                className="text-link"
                to={d.slug === "ramachandi" ? "/destinations/ramachandi" : "/destinations/koraput"}
              >
                Explore {d.name}
                <ArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <EditorialCTA />
    </main>
  );
}
