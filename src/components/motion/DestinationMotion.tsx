import { useEffect } from "react";

export function DestinationMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1100px)", () => {
          gsap.set(".rc-coast-copy", { autoAlpha: 1, x: 0 });
          gsap.set(".rc-hills-copy", { autoAlpha: 0, x: 50 });
          gsap.set(".rc-map-label-coast", { autoAlpha: 1 });
          gsap.set(".rc-map-label-hills", { autoAlpha: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".rc-destination-desktop",
              start: "top top",
              end: "+=140%",
              pin: ".rc-destination-stage",
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(".rc-place-hills", {
            clipPath: "polygon(24% 0, 100% 0, 100% 100%, 22% 100%, 18% 80%, 24% 62%, 18% 45%, 26% 25%)",
            ease: "none",
            duration: 1,
          }, 0)
            .to(".rc-terrain-edge", { x: () => window.innerWidth * -0.45, ease: "none", duration: 1 }, 0)
            .to(".rc-journey-line", { x: () => window.innerWidth * -0.45, ease: "none", duration: 1 }, 0)
            .to(".rc-coast-copy", { autoAlpha: 0, x: -50, ease: "none", duration: 0.2 }, 0.28)
            .fromTo(".rc-journey-line path", { strokeDashoffset: 1200 }, { strokeDashoffset: 0, ease: "none", duration: 0.65 }, 0.16)
            .fromTo(".rc-hills-copy", { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, ease: "none", duration: 0.34 }, 0.5)
            .to(".rc-map-label-coast", { autoAlpha: 0, duration: 0.2 }, 0.32)
            .to(".rc-map-label-hills", { autoAlpha: 1, duration: 0.22 }, 0.58);

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        });
        cleanup = () => {
          mm.revert();
          ctx.revert();
        };
      });
    });
    return () => cleanup();
  }, []);
  return null;
}