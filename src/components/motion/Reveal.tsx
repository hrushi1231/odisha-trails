import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(
        () =>
          gsap.fromTo(
            node,
            { y: 42, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power4.out",
              scrollTrigger: { trigger: node, start: "top 88%" },
            },
          ),
        node,
      );
      cleanup = () => ctx.revert();
      },
    );
    return () => cleanup();
  }, []);
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
