import { createFileRoute } from "@tanstack/react-router";
const routes = [
  "",
  "destinations",
  "destinations/ramachandi",
  "destinations/koraput",
  "rent-a-camp",
  "tours",
  "tours/koraput-2-day",
  "rural-stay",
  "about",
  "faq",
  "plan-trip",
];
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const base = (process.env["VITE_SITE_URL"] || "https://ruralcamps.lovable.app").replace(
          /\/$/,
          "",
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((r) => `<url><loc>${base}/${r}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
