import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Section eyebrow + heading + optional subtext, centered or left.
export const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className = "" }) => (
  <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
    {eyebrow && (
      <Reveal>
        <span className="eyebrow" data-testid="section-eyebrow">{eyebrow}</span>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.1}>
        <p className={`mt-5 text-lg leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
);

// Subtle glow divider between major sections — low opacity, soft blend.
export const SectionDivider = () => (
  <div className="relative h-px w-full" aria-hidden="true">
    <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/40 to-transparent blur-[2px]" />
  </div>
);

// Magnetic CTA button that subtly attracts toward the cursor.
export const MagneticButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  showArrow = true,
  testid,
}) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 16 });
  const y = useSpring(my, { stiffness: 220, damping: 16 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * 0.25);
    my.set(relY * 0.35);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const styles =
    variant === "primary"
      ? "btn-glow bg-brand text-white hover:bg-brand-light"
      : "ring-line bg-white/5 text-white hover:bg-white/10";

  return (
    <motion.button
      ref={ref}
      data-testid={testid}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      style={{ x, y }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.button>
  );
};
