import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/landing/common";
import { METHOD } from "@/data/content";

export default function Method() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <section className="relative py-24 sm:py-32" data-testid="method">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="The Process"
          title="The PMAISM Method"
          subtitle="A deliberate six-phase progression that moves you from fundamentals to a confident career transition."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Track */}
          <div className="absolute left-[18px] top-2 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute left-[18px] top-2 h-full w-0.5 origin-top bg-gradient-to-b from-brand to-brand-light md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {METHOD.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={p.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand/40 bg-ink2 text-sm font-bold text-brand-light btn-glow md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </div>

                  <div className={`md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"} pl-14 md:pl-0`}>
                    <div className="card-premium rounded-2xl p-6">
                      <p className="text-xs uppercase tracking-wider text-brand-light">{p.phase}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
