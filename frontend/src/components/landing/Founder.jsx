import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/data/content";

export default function Founder() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" data-testid="founder">
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand/10 blur-[160px]" />

      <div className="max-shell container-px relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Visual */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="card-premium relative overflow-hidden rounded-3xl p-2">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-ink2">
                <div className="absolute inset-0 grid-texture opacity-40" />
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand/30 blur-3xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-5xl font-bold text-white btn-glow">
                  PM
                </div>
                <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-4">
                  <p className="text-base font-semibold text-white">The PMAISM Founder</p>
                  <p className="text-sm text-muted-foreground">Practicing Project Leader &amp; Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div>
          <Reveal>
            <span className="eyebrow">Founder's Note</span>
          </Reveal>
          <Reveal delay={0.05}>
            <Quote className="mt-6 h-9 w-9 text-brand-light/50" />
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              "Great Project Managers aren't born. They're trained through execution."
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I built PMAISM after watching brilliant, capable people get stuck, not because they
                lacked ability, but because every course handed them theory and a certificate, then
                left them to figure out the actual job alone.
              </p>
              <p>
                The market doesn't reward certifications. It rewards people who can run a sprint,
                manage stakeholders, navigate ambiguity, and ship. That only comes from doing the
                work, with a mentor in the room.
              </p>
              <p>
                And in 2026, the best PMs aren't just organized, they're AI-augmented. We teach the
                modern systems that let you do more, faster, so you stand out the moment you walk
                into an interview.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={BRAND.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="founder-linkedin"
              className="mt-8 inline-flex items-center gap-2 rounded-xl ring-line bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-brand-light" />
              Connect on LinkedIn
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
