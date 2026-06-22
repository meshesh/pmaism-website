import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/landing/common";
import { useLead } from "@/context/LeadContext";

export default function FinalCTA() {
  const { openLead } = useLead();
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" data-testid="final-cta">
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]" />

      <div className="max-shell container-px relative text-center">
        <Reveal>
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Your Next Chapter</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Ready To Become <span className="text-brandgrad">Job Ready?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Join professionals transforming their careers through practical project management
            training, built on live mentorship and real-world execution.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton onClick={() => openLead("demo")} testid="final-cta-demo">
              <CalendarCheck2 className="h-4 w-4" /> Book Free Demo
            </MagneticButton>
            <MagneticButton onClick={() => openLead("apply")} variant="secondary" testid="final-cta-apply">
              Apply Now
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
