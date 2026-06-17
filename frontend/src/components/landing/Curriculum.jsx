import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { stagger, staggerItem } from "@/components/Reveal";
import { CURRICULUM } from "@/data/content";

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 sm:py-32" data-testid="curriculum">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="max-shell container-px relative">
        <SectionHeading
          eyebrow="Curriculum"
          title="What You Will Master"
          subtitle="Nine intensive modules engineered around the real work of a modern Project Manager, each tied to a concrete outcome."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CURRICULUM.map((mod, i) => {
            const Icon = Icons[mod.icon] || Icons.Square;
            return (
              <motion.div
                key={mod.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-premium group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-brand/40"
                data-testid={`curriculum-card-${i}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium text-white/20">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-light">
                    <ArrowRight className="h-4 w-4" />
                    {mod.outcome}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
