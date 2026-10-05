import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.from(".hero-reveal", {
            y: 45,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
          });
          gsap.to(".hero-media", {
            scale: 1.04,
            ease: "none",
            scrollTrigger: { trigger: ".home-hero", start: "top top", end: "bottom top", scrub: true },
          });
          gsap.to(".route-path", {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: ".journey", start: "top 70%", end: "bottom 70%", scrub: true },
          });
          if (window.matchMedia("(min-width: 1100px)").matches) {
            gsap.fromTo(
              ".world-koraput",
              { clipPath: "inset(0 0 0 100%)" },
              {
                clipPath: "inset(0 0 0 0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: ".world-koraput",
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              },
            );
            ScrollTrigger.create({
              trigger: ".rent-story",
              start: "top top",
              end: "+=45%",
              pin: ".rent-copy",
              pinSpacing: false,
            });
          }
        });
        cleanup = () => context.revert();
      },
    );
    return () => cleanup();
  }, []);
  return null;
}