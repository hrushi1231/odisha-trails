import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IntroBand, MediaGrid, SplitFeature } from "@/components/site/ContentPage";
import { EditorialCTA } from "@/components/site/EditorialCTA";
import { media } from "@/data/site";
export const Route = createFileRoute("/rural-stay")({
  head: () => ({
    meta: [
      { title: "Rural Stay in Koraput | Rural Camps Odisha" },
      {
        name: "description",
        content: "Enquire about staying closer to the landscape and local rhythm of Koraput.",
      },
      { property: "og:title", content: "Rural Stay in Koraput | Rural Camps" },
      { property: "og:description", content: "Stay with the place, not just near it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/rural-stay" }],
  }),
  component: Page,
});
function Page() {
  return (
    <main>
      <PageHero
        eyebrow="RURAL STAY · KORAPUT"
        title={
          <>
            DON'T JUST VISIT.
            <br />
            <em>STAY WITH IT.</em>
          </>
        }
        copy="An enquiry-led way to stay closer to Koraput's landscape and daily rhythm."
        image={media.koraput}
      />
      <IntroBand
        eyebrow="THE IDEA"
        title={
          <>
            CLOSER TO PLACE.
            <br />
            <em>LIGHTER ON PERFORMANCE.</em>
          </>
        }
        copy="Rural Stay is shaped around local context rather than resort expectations. Exact live accommodation and operating details are confirmed directly."
      />
      <SplitFeature
        title="MATERIAL. MORNING. RHYTHM."
        copy="The visual system is ready for owner-supplied exteriors, interiors, food, craft and everyday-life photography. No unverified amenities are promised here."
        image={media.hero}
      />
      <MediaGrid
        images={[media.koraput, media.hero, media.koraput]}
        labels={[
          "Landscape · temporary visual",
          "Stay concept · temporary visual",
          "Morning road · temporary visual",
        ]}
      />
      <EditorialCTA title="ASK ABOUT A RURAL STAY." />
    </main>
  );
}
