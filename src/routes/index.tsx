import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rural Camps Odisha | Camping, Rent A Camp, Rural Stays & Tours" },
      {
        name: "description",
        content:
          "Camp, stay and explore Odisha differently with Rural Camps in Ramachandi and Koraput.",
      },
      { property: "og:title", content: "Rural Camps Odisha | Outside the Ordinary" },
      {
        property: "og:description",
        content: "Camping, portable camp setups, rural stays and journeys across Odisha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
