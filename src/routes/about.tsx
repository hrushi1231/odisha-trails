import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IntroBand, NumberedList, SplitFeature } from "@/components/site/ContentPage";
import { EditorialCTA } from "@/components/site/EditorialCTA";
import { media } from "@/data/site";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rural Camps | Outdoor Odisha, Made Easy" },
      {
        name: "description",
        content: "The story and vision behind Rural Camps, an Odisha outdoor-experience brand.",
      },
      { property: "og:title", content: "About Rural Camps" },
      {
        property: "og:description",
        content: "Making outdoor travel across Odisha easier and more accessible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});
function Page() {
  return (
    <main>
      <PageHero
        eyebrow="OUR STORY · ODISHA"
        title={
          <>
            OUTDOORS,
            <br />
            <em>MADE EASIER.</em>
          </>
        }
        copy="Rural Camps is building more accessible ways to camp, stay and explore Odisha."
        image={media.hero}
      />
      <IntroBand
        eyebrow="WHY RURAL CAMPS"
        title={
          <>
            NOT A RESORT.
            <br />
            <em>A WAY OUT.</em>
          </>
        }
        copy="The idea begins with a simple belief: a memorable outdoor night should feel possible—not distant, overcomplicated or reserved for luxury travellers."
      />
      <SplitFeature
        title="FROM COAST TO HIGHLANDS"
        copy="The journey connects managed coastal camping on the Puri–Konark side with portable camps and regional experiences across Koraput."
        image={media.koraput}
      />
      <NumberedList
        eyebrow="THE VISION"
        title="OUTDOOR ODISHA"
        items={[
          { title: "Camp", copy: "Make real outdoor stays more approachable." },
          { title: "Move", copy: "Bring portable setups to suitable approved places." },
          { title: "Explore", copy: "Shape journeys through Odisha's lesser-seen landscapes." },
          { title: "Stay", copy: "Create respectful paths into rural experiences." },
        ]}
      />
      <EditorialCTA />
    </main>
  );
}
