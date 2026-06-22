import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { Reveal, stagger, staggerItem } from "@/components/Reveal";
import { PAIN, OUTCOME } from "@/data/content";

export default function PainVsOutcome() {
  return (
    <section id="program" className="relative py-16 sm:py-24" data-testid="pain-outcome">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="Theory vs Execution"
          title="The Difference"
          subtitle="One path hands you certificates. The other hands you the workflows, judgement and proof you need to get hired and thrive."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Traditional */}
          <Reveal>
            <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Traditional Courses</p>
              <h3 className="mt-1 text-2xl font-semibold text-white/70">Certification mills</h3>
              <ul className="mt-7 space-y-4">
                {PAIN.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-base text-muted-foreground">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/5 text-white/40">
                      <X className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* PMAISM */}
          <Reveal delay={0.1}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative h-full overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-b from-brand/[0.12] to-brand/[0.02] p-8 btn-glow"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
              <p className="text-sm uppercase tracking-wider text-brand-light">PMAISM</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Execution-first training</h3>
              <ul className="mt-7 space-y-4">
                {OUTCOME.map((o) => (
                  <motion.li
                    key={o}
                    variants={staggerItem}
                    className="flex items-center gap-3 text-base font-medium text-white"
                  >
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-success/20 text-success">
                      <Check className="h-4 w-4" />
                    </span>
                    {o}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
