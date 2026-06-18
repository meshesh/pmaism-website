import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CalendarCheck2,
  Sparkles,
  Radio,
  Globe,
  Clock,
  Sunrise,
  Briefcase,
  TrendingUp,
  Activity,
  Bot,
  CheckCircle2,
} from "lucide-react";
import { TRUST_INDICATORS } from "@/data/content";
import { useLead } from "@/context/LeadContext";
import { MagneticButton } from "@/components/landing/common";

const trustIcons = [Radio, Globe, Clock, Sunrise, Briefcase];

export default function Hero() {
  const { openLead } = useLead();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
    my.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-20"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      ref={ref}
    >
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div className="absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[360px] w-[360px] rounded-full bg-brand-light/10 blur-[130px]" />

      <div className="max-shell container-px relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
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
            className="mt-6 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Become a <span className="text-brandgrad">Job-Ready</span> Project Manager &amp; Scrum Master in 4–6 Weeks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Master Agile execution, stakeholder management, sprint planning, AI-powered
            workflows, and interview preparation through live mentorship and real-world
            simulations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={() => openLead("demo")} testid="hero-cta-demo">
              <CalendarCheck2 className="h-4 w-4" /> Book Free Demo
            </MagneticButton>
            <MagneticButton onClick={() => openLead("apply")} variant="secondary" testid="hero-cta-apply">
              Apply Now
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
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

        {/* Dashboard visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
          style={{ perspective: 1200 }}
        >
          <HeroDashboard sx={sx} sy={sy} />
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxCard({ sx, sy, depth, className, children, float = "animate-float" }) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      <div className={float}>{children}</div>
    </motion.div>
  );
}

function HeroDashboard({ sx, sy }) {
  const rotX = useTransform(sy, (v) => v * -6);
  const rotY = useTransform(sx, (v) => v * 8);

  return (
    <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }} className="relative">
      {/* Main panel */}
      <div className="card-premium relative rounded-2xl p-5 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Project Analytics</p>
            <p className="mt-1 text-lg font-semibold text-white">Sprint 14 · Velocity</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">
            <TrendingUp className="h-3.5 w-3.5" /> +18%
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-6 flex h-32 items-end gap-2.5">
          {[42, 58, 50, 70, 64, 82, 76].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand/40 to-brand-light"
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Velocity", value: "82 pts" },
            { label: "Team Load", value: "94%" },
            { label: "On Track", value: "12/14" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl bg-white/5 p-3">
              <p className="text-xs text-muted-foreground">{m.label}</p>
              <p className="mt-0.5 text-base font-semibold text-white">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating: Agile metrics */}
      <ParallaxCard
        sx={sx}
        sy={sy}
        depth={48}
        className="absolute -left-12 top-16 hidden sm:block"
      >
        <div className="glass w-44 rounded-xl p-3.5 shadow-xl">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-brand-light" />
            <p className="text-sm font-medium text-white">Agile Metrics</p>
          </div>
          <p className="mt-2 text-2xl font-bold text-white">96%</p>
          <p className="text-xs text-muted-foreground">Sprint goal hit rate</p>
        </div>
      </ParallaxCard>

      {/* Floating: AI workflow */}
      <ParallaxCard
        sx={sx}
        sy={sy}
        depth={64}
        float="animate-float-slow"
        className="absolute -right-10 top-2 hidden sm:block"
      >
        <div className="glass w-52 rounded-xl p-3.5 shadow-xl">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-brand-light" />
            <p className="text-sm font-medium text-white">AI Workflow</p>
          </div>
          <div className="mt-2.5 space-y-1.5">
            {["Standup summary generated", "Risks flagged for review"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
              </div>
            ))}
          </div>
        </div>
      </ParallaxCard>

      {/* Floating: productivity */}
      <ParallaxCard
        sx={sx}
        sy={sy}
        depth={40}
        float="animate-float"
        className="absolute -bottom-8 left-8 hidden sm:block"
      >
        <div className="glass flex w-48 items-center gap-3 rounded-xl p-3.5 shadow-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/20 text-brand-light">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Team Productivity</p>
            <p className="text-xs text-success">+27% this sprint</p>
          </div>
        </div>
      </ParallaxCard>
    </motion.div>
  );
}
