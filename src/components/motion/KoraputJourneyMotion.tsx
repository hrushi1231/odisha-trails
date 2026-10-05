import { useEffect } from "react";

export function KoraputJourneyMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.from(".rc-journey-reveal", {
            y: 36,
            opacity: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".rc-koraput-journey", start: "top 78%" },
          });
          gsap.fromTo(
            ".rc-route-draw",
            { strokeDashoffset: 1200 },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: { trigger: ".rc-journey-board", start: "top 82%", end: "bottom 68%", scrub: 0.7 },
            },
          );
          gsap.from(".rc-journey-stop", {
            y: 18,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
            scrollTrigger: { trigger: ".rc-journey-board", start: "top 72%" },
          });
          gsap.fromTo(
            ".rc-journey-landscape img",
            { scale: 1.03 },
            { scale: 1, duration: 1.4, ease: "power2.out", scrollTrigger: { trigger: ".rc-koraput-journey", start: "top 75%" } },
          );
        });
        cleanup = () => ctx.revert();
      },
    );
    return () => cleanup();
  }, []);
  return null;
}