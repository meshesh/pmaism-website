import React, { useEffect, useState } from "react";
import axios from "axios";
import { Reveal } from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { COMPANIES } from "@/data/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fallback = {
  students_trained: 850,
  career_transitions: 420,
  hiring_companies: 120,
};

export default function SocialProof() {
  const [m, setM] = useState(fallback);

  useEffect(() => {
    axios
      .get(`${API}/metrics`)
      .then((r) => setM(r.data))
      .catch(() => setM(fallback));
  }, []);

  const stats = [
    { value: m.students_trained, suffix: "+", label: "Students Trained" },
    { value: m.career_transitions, suffix: "+", label: "Career Transitions" },
    { value: m.hiring_companies, suffix: "+", label: "Hiring Companies" },
    { value: 6, prefix: "4–", suffix: " wk", label: "Program Duration", raw: true },
  ];

  return (
    <section className="relative border-y border-white/5 bg-ink2/40 py-16" data-testid="social-proof">
      <div className="max-shell container-px">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="text-4xl font-bold text-white sm:text-5xl">
                {s.raw ? (
                  <span>4–6 <span className="text-2xl text-brand-light">wk</span></span>
                ) : (
                  <CountUp to={s.value} suffix={s.suffix} prefix={s.prefix || ""} />
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
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
