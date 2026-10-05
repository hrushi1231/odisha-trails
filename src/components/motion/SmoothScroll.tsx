import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1100px)").matches;
    if (reduced || !desktop) return;
    let cleanup = () => {};
    void (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"), import("gsap"), import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ smoothWheel: true, duration: 0.8 });
      lenis.on("scroll", ScrollTrigger.update);
      const ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      cleanup = () => { gsap.ticker.remove(ticker); lenis.destroy(); };
    });
    return () => cleanup();
  }, []);
  return null;
}
