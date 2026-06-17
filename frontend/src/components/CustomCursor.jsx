import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Premium custom cursor: inner dot + outer ring, spring motion,
// scales on interactive hover. Desktop (fine pointer) only.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 900, damping: 40 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      const interactive = el.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
      );
      setHovering(Boolean(interactive));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-brand-light/70 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          opacity: 1,
          backgroundColor: hovering ? "rgba(96,165,250,0.12)" : "rgba(96,165,250,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-brand-light"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: clicking ? 0.5 : hovering ? 0.4 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}
