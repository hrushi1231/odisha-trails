import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/site/PageHero";
import { EditorialCTA } from "@/components/site/EditorialCTA";
import { faqs, media } from "@/data/site";
export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Rural Camps Odisha" },
      {
        name: "description",
        content:
          "Answers about camping, Rent A Camp, Koraput tours, Rural Stay, pricing and policies.",
      },
      { property: "og:title", content: "Rural Camps FAQ" },
      {
        property: "og:description",
        content: "Plan an Odisha outdoor experience with clear, current information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Page,
});
function Page() {
  return (
    <main>
      <PageHero
        eyebrow="GOOD TO KNOW"
        title={
          <>
            QUESTIONS
            <br />
            <em>BEFORE THE ROAD.</em>
          </>
        }
        copy="The useful details we can confirm now—and a clear path to ask about everything else."
        image={media.rentCamp}
      />
      <section className="faq-section">
        <div>
          <p className="eyebrow">FREQUENTLY ASKED</p>
          <h2>
            ASK NOW.
            <br />
            <em>PACK LATER.</em>
          </h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={f.question}>
              <AccordionTrigger>
                <span>
                  <small>{f.group}</small>
                  {f.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <EditorialCTA title="STILL HAVE A QUESTION?" />
    </main>
  );
}
