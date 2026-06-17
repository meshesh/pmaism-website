import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { stagger, staggerItem } from "@/components/Reveal";
import { BLOG } from "@/data/content";

export default function Blog() {
  return (
    <section className="relative border-t border-white/5 bg-ink2/40 py-24 sm:py-32" data-testid="blog">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="Insights"
          title="From the PMAISM blog"
          subtitle="Practical reads on transitioning into Project Management and working like a modern, AI-augmented PM."
          align="left"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG.map((b, i) => (
            <motion.a
              key={b.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`card-premium group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-brand/40 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand-light">
                  {b.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {b.read}
                </span>
              </div>
              <h3 className="relative mt-5 text-xl font-semibold text-white">{b.title}</h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <div className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-light">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
