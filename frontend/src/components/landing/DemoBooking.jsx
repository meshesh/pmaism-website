import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/landing/common";
import { useLead } from "@/context/LeadContext";

export default function DemoBooking() {
  const { openLead } = useLead();

  const details = [
    { icon: Calendar, label: "Next Batch", value: "Starting Soon" },
    { icon: Clock, label: "Timing", value: "Weekday Mornings" },
    { icon: Video, label: "Platform", value: "Live on Zoom" },
  ];

  return (
    <section className="relative py-12 sm:py-20" data-testid="demo-booking">
      <div className="max-shell container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-ink2 via-ink to-ink2 p-8 sm:p-14">
            <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/25 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-light/10 blur-[120px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-medium text-success">
                  <Zap className="h-3.5 w-3.5" /> Limited Seats Per Batch · ~40 Participants
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Experience The PMAISM Difference
                </h2>
                <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                  Sit in on a live session, meet a mentor, and see exactly how real Project
                  Managers work, before you commit.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {details.map((d) => (
                    <div key={d.label} className="glass rounded-xl p-4">
                      <d.icon className="h-5 w-5 text-brand-light" />
                      <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{d.label}</p>
                      <p className="mt-0.5 text-base font-semibold text-white">{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <MagneticButton onClick={() => openLead("demo")} testid="demo-cta" className="w-full justify-center sm:w-auto">
                  Reserve My Spot
                </MagneticButton>
                <MagneticButton
                  onClick={() => openLead("apply")}
                  variant="secondary"
                  testid="demo-apply"
                  className="w-full justify-center sm:w-auto"
                  showArrow={false}
                >
                  Apply Now
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
