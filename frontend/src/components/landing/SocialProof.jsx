import React from "react";
import { Reveal } from "@/components/Reveal";
import { COMPANIES } from "@/data/content";

export default function SocialProof() {
  return (
    <section className="relative border-y border-white/5 bg-ink2/40 py-12" data-testid="social-proof">
      <div className="max-shell container-px">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Graduates now build careers at teams like
          </p>
          <div className="mask-fade-x relative mt-7 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-16">
              {[...COMPANIES, ...COMPANIES].map((c, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-xl font-semibold tracking-tight text-white/30 transition-colors hover:text-white/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
