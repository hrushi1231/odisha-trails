import { useEffect } from "react";

export function RealRuralCampsMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.from(".rc-real-reveal", {
            y: 34,
            opacity: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: { trigger: ".rc-real-camps", start: "top 76%" },
          });
          gsap.from(".rc-moment", {
            y: 45,
            opacity: 0,
            rotate: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".rc-moment-collage", start: "top 76%" },
          });
        });
        cleanup = () => ctx.revert();
      },
    );
    return () => cleanup();
  }, []);
  return null;
}