import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance = null;

export const getLenis = () => lenisInstance;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -90, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

// Initializes Lenis smooth scroll and drives the RAF loop.
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
