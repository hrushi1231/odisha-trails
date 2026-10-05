import { useEffect, type RefObject } from "react";
import { loadGsap } from "@/lib/gsap";

export function PlanTripMotion({ rootRef }: { rootRef: RefObject<HTMLElement | null> }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = rootRef.current;
    if (!root) return;
    let disposed = false;
    let cleanup = () => {};
    void loadGsap().then(
      ({ gsap }) => {
        if (disposed) return;
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: root, start: "top 72%", once: true },
          });
          timeline
            .from(".rc-plan-copy .eyebrow", { y: 24, autoAlpha: 0, duration: 0.45, ease: "power3.out" })
            .from(".rc-plan-copy h2", { y: 28, autoAlpha: 0, duration: 0.65, ease: "power3.out" }, "-=0.24")
            .from(".rc-plan-copy > p:last-child", { y: 24, autoAlpha: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .from(".rc-plan-form", { x: 30, autoAlpha: 0, duration: 0.7, ease: "power3.out" }, "-=0.45")
            .from(".rc-plan-form .form-field", { y: 12, autoAlpha: 0, duration: 0.3, stagger: 0.045, ease: "power2.out" }, "-=0.38")
            .from(".rc-plan-form > button", { y: 10, autoAlpha: 0, duration: 0.35, ease: "power2.out" }, "-=0.14");
        }, root);
        cleanup = () => ctx.revert();
      },
    );
    return () => { disposed = true; cleanup(); };
  }, [rootRef]);
  return null;
}