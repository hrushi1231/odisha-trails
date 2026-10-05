import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function EditorialCTA({
  eyebrow = "READY TO GET OUT?",
  title = "PLAN YOUR RURAL CAMPS TRIP.",
  copy = "Tell us what kind of Odisha escape you have in mind. We’ll continue the conversation on WhatsApp.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="editorial-cta">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{copy}</p>
        <Button asChild size="lg">
          <Link to="/plan-trip">
            Plan a trip <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
