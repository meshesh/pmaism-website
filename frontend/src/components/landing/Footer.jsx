import React from "react";
import { Mail, Linkedin, MessageCircle, CalendarCheck2 } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/data/content";
import { scrollToId } from "@/hooks/useLenis";
import { useLead } from "@/context/LeadContext";

export default function Footer() {
  const { openLead } = useLead();
  return (
    <footer
      className="relative border-t border-white/8 bg-ink2/60 pt-16"
      data-testid="footer"
    >
      <div className="max-shell container-px">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToId("hero")}
              className="flex items-center gap-2.5"
            >
              <img
                src={BRAND.logo}
                alt="PMAISM logo"
                className="h-[9rem] w-[9rem] object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                {BRAND.name}
              </span>
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {BRAND.tagline}. Learn how real Project Managers work, through
              live mentorship and real-world execution.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToId(l.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-white"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4 text-brand-light" /> {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-white"
                  data-testid="footer-linkedin"
                >
                  <Linkedin className="h-4 w-4 text-brand-light" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-white"
                  data-testid="footer-whatsapp"
                >
                  <MessageCircle className="h-4 w-4 text-success" /> WhatsApp
                  Enquiry
                </a>
              </li>
            </ul>
            <button
              onClick={() => openLead()}
              data-testid="footer-cta-demo"
              className="btn-glow mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
            >
              <CalendarCheck2 className="h-4 w-4" /> Book Free Demo
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 py-7 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Live Online · 4–6 Week Program · Placement Support
          </p>
        </div>
      </div>
    </footer>
  );
}
