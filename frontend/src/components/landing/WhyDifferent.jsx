import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { stagger, staggerItem } from "@/components/Reveal";
import { WHY_FEATURES } from "@/data/content";

export default function WhyDifferent() {
  return (
    <section className="relative border-y border-white/5 bg-ink2/40 py-24 sm:py-32" data-testid="why-different">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="Why PMAISM"
          title="Everything is built to get you hired"
          subtitle="No filler. Every part of the program exists to move you closer to a real Project Manager role."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_FEATURES.map((f) => {
            const Icon = Icons[f.icon] || Icons.Square;
            return (
              <motion.div
                key={f.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 opacity-0 transition-opacity duration-500 group-hover:from-brand/10 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
