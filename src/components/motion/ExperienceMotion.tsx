import { useEffect } from "react";

export function ExperienceMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from(".rc-experience-heading > *", { y: 70, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".rc-experiences", start: "top 76%" } });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
          const starts = [{ x: -60 }, { y: -45 }, { y: 55 }, { x: 55 }];
          document.querySelectorAll<HTMLElement>(".rc-exp").forEach((node, index) => {
            gsap.from(node, { ...starts[index], opacity: 0, scale: 0.96, duration: 1.05, delay: index * 0.09, ease: "power3.out", scrollTrigger: { trigger: ".rc-experiences", start: "top 55%" } });
          });
        });
        mm.add("(max-width: 767px)", () => {
          document.querySelectorAll<HTMLElement>(".rc-exp").forEach((node) => {
            gsap.from(node, { y: 24, opacity: 0, duration: 0.65, ease: "power2.out", scrollTrigger: { trigger: node, start: "top 88%" } });
          });
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