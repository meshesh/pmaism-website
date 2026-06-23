import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, CalendarCheck2 } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/data/content";
import { scrollToId } from "@/hooks/useLenis";
import { useLead } from "@/context/LeadContext";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openLead } = useLead();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="max-shell container-px flex h-[72px] items-center justify-between">
        <button
          onClick={() => scrollToId("hero")}
          className="flex items-center gap-2.5"
          data-testid="nav-logo"
        >
          <img
            src={BRAND.logo}
            alt="PMAISM logo"
            className="h-[5rem] w-[5rem] object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            {BRAND.name}
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              data-testid={`nav-link-${link.id}`}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-light"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openLead("demo")}
            data-testid="nav-cta-demo"
            className="btn-glow hidden items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light sm:inline-flex"
          >
            <CalendarCheck2 className="h-4 w-4" />
            Book Free Demo
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-line text-white lg:hidden"
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Scroll progress indicator */}
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-brand to-brand-light"
        style={{ scaleX: progress }}
      />

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass overflow-hidden lg:hidden"
          data-testid="nav-mobile-menu"
        >
          <div className="container-px flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="rounded-lg px-4 py-3 text-left text-base font-medium text-muted-foreground hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openLead("demo");
              }}
              className="btn-glow mt-2 rounded-xl bg-brand px-5 py-3 text-center text-base font-semibold text-white"
            >
              Book Free Demo
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
