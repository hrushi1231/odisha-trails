import { useEffect } from "react";

export function RentCampMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          const mm = gsap.matchMedia();
          mm.add("(min-width: 1100px)", () => {
            const steps = gsap.utils.toArray<HTMLElement>(".rc-rent-step");
            gsap.set(steps, { opacity: 0.42, y: 8 });
            gsap.set(steps[0], { opacity: 1, y: 0 });
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: ".rc-rent-desktop",
                start: "top top",
                end: "+=155%",
                pin: ".rc-rent-stage",
                scrub: 0.8,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
            timeline
              .to(".rc-rent-scene", { scale: 1.035, ease: "none", duration: 1 }, 0)
              .fromTo(".rc-rent-ready-glow", { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.35 }, 0.62);
            steps.forEach((step, index) => {
              timeline.to(step, { opacity: 1, y: 0, duration: 0.12 }, index * 0.15);
              if (index > 0) timeline.to(steps[index - 1], { opacity: 0.62, duration: 0.1 }, index * 0.15);
            });
            return () => {
              timeline.scrollTrigger?.kill();
              timeline.kill();
            };
          });
          cleanup = () => {
            mm.revert();
            ctx.revert();
          };
        });
      },
    );
    return () => cleanup();
  }, []);
  return null;
}