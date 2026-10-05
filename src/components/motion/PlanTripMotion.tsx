import { useEffect } from "react";

export function PlanTripMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.from(".rc-plan-copy > *", {
            y: 32,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".rc-plan-trip", start: "top 72%" },
          });
          gsap.from(".rc-plan-form", {
            x: 36,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".rc-plan-trip", start: "top 70%" },
          });
          gsap.from(".rc-plan-form .form-field", {
            y: 14,
            opacity: 0,
            duration: 0.45,
            stagger: 0.055,
            scrollTrigger: { trigger: ".rc-plan-trip", start: "top 65%" },
          });
        });
        cleanup = () => ctx.revert();
      },
    );
    return () => cleanup();
  }, []);
  return null;
}