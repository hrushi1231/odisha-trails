import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const desktopLinks = [
  ["Destinations", "/destinations"],
  ["Rent A Camp", "/rent-a-camp"],
  ["Tours", "/tours"],
  ["Rural Stay", "/rural-stay"],
  ["About", "/about"],
] as const;
const mobileLinks = [
  ["Ramachandi", "/destinations/ramachandi"],
  ["Koraput", "/destinations/koraput"],
  ["Rent A Camp", "/rent-a-camp"],
  ["Tours", "/tours"],
  ["Rural Stay", "/rural-stay"],
  ["About", "/about"],
  ["FAQ", "/faq"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="brand-mark" aria-label="Rural Camps home">
        <span>RURAL</span>
        <span>CAMPS</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {desktopLinks.map(([label, to]) => (
          <Link key={to} to={to} activeProps={{ className: "is-active" }}>
            {label}
          </Link>
        ))}
      </nav>
      <Button asChild size="lg" className="hidden min-[1100px]:inline-flex">
        <Link to="/plan-trip">
          Plan a trip <span aria-hidden>↗</span>
        </Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="min-[1100px]:hidden"
            aria-label="Open navigation"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="mobile-menu" side="right">
          <SheetTitle className="font-display text-3xl">Find your way out.</SheetTitle>
          <SheetDescription>Explore Rural Camps across Odisha.</SheetDescription>
          <nav aria-label="Mobile navigation" className="mt-10 flex flex-col">
            {mobileLinks.map(([label, to], index) => (
              <SheetClose asChild key={to}>
                <Link to={to} className="menu-link">
                  <span>0{index + 1}</span>
                  {label}
                </Link>
              </SheetClose>
            ))}
          </nav>
          <SheetClose asChild>
            <Button asChild size="lg" className="mt-10 w-full">
              <Link to="/plan-trip">Plan a trip</Link>
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </header>
  );
}
