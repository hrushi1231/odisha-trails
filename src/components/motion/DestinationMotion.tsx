import { useEffect, type RefObject } from "react";
import { loadGsap } from "@/lib/gsap";

export function DestinationMotion({ rootRef }: { rootRef: RefObject<HTMLElement | null> }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = rootRef.current;
    if (!root) return;
    let disposed = false;
    let cleanup = () => {};
    void loadGsap().then(({ gsap }) => {
      if (disposed) return;
      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1100px)", () => {
          const desktop = root.querySelector<HTMLElement>(".rc-destination-desktop");
          const stage = root.querySelector<HTMLElement>(".rc-destination-stage");
          if (!desktop || !stage) return;
          gsap.set(".rc-coast-copy", { autoAlpha: 1, x: 0 });
          gsap.set(".rc-hills-copy", { autoAlpha: 0, x: 50 });
          gsap.set(".rc-map-label-coast", { autoAlpha: 1 });
          gsap.set(".rc-map-label-hills", { autoAlpha: 0 });
          gsap.set(".rc-place-hills", { xPercent: 44 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: desktop,
              start: "top top",
              end: "+=140%",
              pin: stage,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(".rc-place-hills", { xPercent: -12, ease: "none", duration: 1 }, 0)
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
      }, root);
    });
    return () => { disposed = true; cleanup(); };
  }, [rootRef]);
  return null;
}