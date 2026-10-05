import { useEffect } from "react";

export function HeroMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.from(".site-header", { y: -18, opacity: 0, duration: 0.7, ease: "power3.out" }, 0.2)
          .from(".rc-hero-eyebrow", { y: 18, opacity: 0, duration: 0.65, ease: "power3.out" }, 0.35)
          .from(".rc-title-mask > span", { yPercent: 110, duration: 0.9, stagger: 0.12, ease: "power4.out" }, 0.5)
          .from(".rc-hero-action > p", { y: 20, opacity: 0, duration: 0.65 }, 0.8)
          .from(".rc-hero-action .rc-cream-button", { y: 20, opacity: 0, duration: 0.65 }, 0.95)
          .from([".rc-scroll-cue", ".rc-destination-index"], { opacity: 0, duration: 0.6 }, 1.1)
          .fromTo(".rc-hero-media", { scale: 1.02 }, { scale: 1, duration: 1.4, ease: "power2.out" }, 0);
        gsap.timeline({ scrollTrigger: { trigger: ".rc-hero", start: "top top", end: "bottom top", scrub: true } })
          .to(".rc-destination-index", { opacity: 0, y: -12 }, 0)
          .to(".rc-hero-action", { opacity: 0.35, y: -22 }, 0.05)
          .to(".rc-hero-content h1", { y: -44 }, 0)
          .to(".rc-hero-media", { scale: 1.035 }, 0);
      });
      cleanup = () => ctx.revert();
    });
    return () => cleanup();
  }, []);
  return null;
}