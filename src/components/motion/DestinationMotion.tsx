import { useEffect } from "react";

export function DestinationMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const desktop = window.matchMedia("(min-width: 1100px)").matches;
      const ctx = gsap.context(() => {
        if (desktop) {
          const tl = gsap.timeline({ scrollTrigger: { trigger: ".rc-destinations", start: "top top", end: "+=140%", scrub: 1, pin: ".rc-destination-stage", anticipatePin: 1 } });
          tl.to(".rc-place-hills", { clipPath: "polygon(26% 0, 100% 0, 100% 100%, 18% 100%, 24% 78%, 19% 61%, 28% 43%, 20% 24%)", ease: "none" }, 0)
            .to(".rc-terrain-edge", { xPercent: -126, ease: "none" }, 0)
            .to(".rc-journey-line", { xPercent: -125, ease: "none" }, 0)
            .to(".rc-coast-copy", { opacity: 0.22, x: -36, ease: "none" }, 0.22)
            .fromTo(".rc-journey-line path", { strokeDashoffset: 1200 }, { strokeDashoffset: 0, ease: "none" }, 0.15)
            .fromTo(".rc-hills-copy", { opacity: 0, x: 55 }, { opacity: 1, x: 0, ease: "none" }, 0.4)
            .to(".rc-map-label-coast", { opacity: 0 }, 0.35)
            .fromTo(".rc-map-label-hills", { opacity: 0 }, { opacity: 1 }, 0.5);
        } else {
          gsap.from(".rc-place-hills img", { scale: 1.06, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".rc-place-hills", start: "top 80%" } });
        }
      });
      cleanup = () => ctx.revert();
    });
    return () => cleanup();
  }, []);
  return null;
}