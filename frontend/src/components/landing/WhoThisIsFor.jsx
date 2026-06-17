import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Repeat, TrendingUp, Check } from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { stagger, staggerItem } from "@/components/Reveal";
import { AUDIENCES } from "@/data/content";

const icons = [GraduationCap, Repeat, TrendingUp];

export default function WhoThisIsFor() {
  return (
    <section className="relative py-24 sm:py-32" data-testid="who-for">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="Who This Is For"
          title="Built for every path into Project Management"
          subtitle="Whether you're starting out, switching careers, or leveling up, the program meets you where you are."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {AUDIENCES.map((a, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={a.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-premium group relative overflow-hidden rounded-2xl p-8"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-brand/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-wider text-brand-light">{a.tag}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{a.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-base text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-success" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
