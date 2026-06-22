import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { stagger, staggerItem } from "@/components/Reveal";
import { PLACEMENT } from "@/data/content";

export default function Placement() {
  return (
    <section id="outcomes" className="relative py-16 sm:py-24" data-testid="placement">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="max-shell container-px relative">
        <SectionHeading
          eyebrow="Placement Support"
          title="Built To Get You Interview Ready"
          subtitle="An end-to-end support system that takes you from preparation to offer, not just a finish-line certificate."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PLACEMENT.map((p) => {
            const Icon = Icons[p.icon] || Icons.Square;
            return (
              <motion.div
                key={p.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-premium group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand/40"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-base font-medium text-white">{p.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
