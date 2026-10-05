import { useEffect } from "react";
import { loadGsap } from "@/lib/gsap";

export function SmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1100px)");
    const motionAllowed = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let disposed = false;
    let stopLenis = () => {};

    const sync = async () => {
      stopLenis();
      stopLenis = () => {};
      if (disposed || !desktop.matches || !motionAllowed.matches) return;

      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([
        import("lenis"),
        loadGsap(),
      ]);
      if (disposed || !desktop.matches || !motionAllowed.matches) return;

      const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.09,
        wheelMultiplier: 0.9,
        syncTouch: false,
        stopInertiaOnNavigate: true,
      });
      const onScroll = () => ScrollTrigger.update();
      const ticker = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", onScroll);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      stopLenis = () => {
        gsap.ticker.remove(ticker);
        lenis.off("scroll", onScroll);
        lenis.destroy();
      };
      ScrollTrigger.refresh();
    };

    const onPreferenceChange = () => void sync();
    desktop.addEventListener("change", onPreferenceChange);
    motionAllowed.addEventListener("change", onPreferenceChange);
    void sync();

    return () => {
      disposed = true;
      desktop.removeEventListener("change", onPreferenceChange);
      motionAllowed.removeEventListener("change", onPreferenceChange);
      stopLenis();
    };
  }, []);
  return null;
}
