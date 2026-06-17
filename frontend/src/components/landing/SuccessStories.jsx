import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/landing/common";
import { STORIES } from "@/data/content";

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const paused = useRef(false);

  const go = useCallback((d) => {
    setDir(d);
    setIndex((i) => (i + d + STORIES.length) % STORIES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setDir(1);
        setIndex((i) => (i + 1) % STORIES.length);
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const s = STORIES[index];

  return (
    <section id="stories" className="relative py-24 sm:py-32" data-testid="stories">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real transitions. Real outcomes."
          subtitle="From QA, support and engineering desks into Project Management and Scrum leadership."
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                className="card-premium relative cursor-grab rounded-3xl p-8 active:cursor-grabbing sm:p-10"
                data-testid="story-card"
              >
                <Quote className="h-10 w-10 text-brand-light/40" />
                <p className="mt-5 text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  "{s.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-lg font-bold text-white">
                    {s.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{s.name}</p>
                    <div className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{s.from}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-brand-light" />
                      <span className="text-brand-light">{s.to}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              data-testid="story-prev"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-line bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {STORIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to story ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-brand-light" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              data-testid="story-next"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-line bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
