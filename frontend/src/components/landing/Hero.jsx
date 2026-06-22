import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Radio,
  Globe,
  Clock,
  Sunrise,
  Briefcase,
  Calendar,
  Video,
  Zap,
} from "lucide-react";
import { TRUST_INDICATORS } from "@/data/content";
import { useLead } from "@/context/LeadContext";
import { MagneticButton } from "@/components/landing/common";
import CountUp from "@/components/CountUp";

const trustIcons = [Radio, Globe, Clock, Sunrise, Briefcase];

// Static metrics (backend removed). Update these values directly,
// or wire them to a data source (e.g. Google Sheets) later.
const METRICS = { career_transitions: 420, hiring_companies: 120 };

export default function Hero() {
  const { openLead } = useLead();

  const stats = [
    { value: METRICS.career_transitions, suffix: "+", label: "Career Transitions" },
    { value: METRICS.hiring_companies, suffix: "+", label: "Hiring Companies" },
    { raw: "4–6 wk", label: "Program Duration" },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 sm:pt-32 lg:pb-16"
    >
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div className="absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[360px] w-[360px] rounded-full bg-brand-light/10 blur-[130px]" />

      <div className="max-shell container-px relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy + metrics */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              <Sparkles className="h-3.5 w-3.5" /> AI-Enhanced PM Career Accelerator
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.9rem]"
            >
              Become a <span className="text-brandgrad">Job-Ready</span> Project Manager &amp; Scrum Master in 4–6 Weeks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Master Agile execution, stakeholder management, sprint planning, AI-powered
              workflows, and interview preparation through live mentorship and real-world
              simulations.
            </motion.p>

            {/* Metrics row (3 inline stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
              className="mt-8 flex flex-wrap gap-x-10 gap-y-5 sm:mt-10"
              data-testid="hero-metrics"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    {s.raw ? (
                      <span>4–6 <span className="text-xl text-brand-light sm:text-2xl">wk</span></span>
                    ) : (
                      <CountUp to={s.value} suffix={s.suffix} />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA card (migrated from "Experience the PMAISM Difference") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-ink2 via-ink to-ink2 p-6 sm:p-8"
            data-testid="hero-cta-card"
          >
            <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/25 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-brand-light/10 blur-[110px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 text-xs font-medium text-success">
                <Zap className="h-3.5 w-3.5" /> Limited Seats · ~40 Participants
              </span>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                Experience The PMAISM Difference
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Sit in on a live session, meet a mentor, and see exactly how real Project
                Managers work — before you commit.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: Calendar, label: "Next Batch", value: "Starting Soon" },
                  { icon: Clock, label: "Timing", value: "Mornings" },
                  { icon: Video, label: "Platform", value: "Live on Zoom" },
                ].map((d) => (
                  <div key={d.label} className="glass rounded-xl p-3">
                    <d.icon className="h-5 w-5 text-brand-light" />
                    <p className="mt-2 text-[0.7rem] uppercase tracking-wider text-muted-foreground">{d.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{d.value}</p>
                  </div>
                ))}
              </div>

              <MagneticButton
                onClick={() => openLead("demo")}
                testid="hero-cta-demo"
                className="mt-7 w-full justify-center"
              >
                Reserve My Spot
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators (full width) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/5 pt-7 sm:mt-12"
        >
          {TRUST_INDICATORS.map((t, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-brand-light" />
                {t}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
