# PMAISM — Premium Enterprise Training Platform (Landing Page)

## Original Problem Statement
Build a world-class, premium, conversion-focused landing page for PMAISM — an "AI-Enhanced Project Management Career Accelerator." It should feel like a funded SaaS company + executive training platform (inspiration: Reforge, Maven, Linear, Stripe, Vercel, Framer, Product School). Dark premium theme. No pricing anywhere. Primary conversions: Book Free Demo + Submit Application. Secondary: WhatsApp enquiry.

## Stack / Architecture
- **Frontend:** React 19 + Tailwind + Framer Motion + Lenis smooth scroll + lucide-react icons + shadcn/ui.
- **Backend:** FastAPI (`/api` prefix) + MongoDB (motor).
- **Key files:**
  - `frontend/src/pages/Landing.jsx` assembles all sections.
  - `frontend/src/components/landing/*` — Navbar, Hero, SocialProof, PainVsOutcome, WhoThisIsFor, Curriculum, Method, WhyDifferent, Founder, SuccessStories, Placement, DemoBooking, FAQSection, Blog, FinalCTA, Footer, WhatsAppFab.
  - `frontend/src/components/LeadDialog.jsx` + `context/LeadContext.jsx` — global Book Demo / Apply modal.
  - `frontend/src/components/CustomCursor.jsx`, `hooks/useLenis.js`, `components/Reveal.jsx`, `components/CountUp.jsx`.
  - `frontend/src/data/content.js` — all copy/content.
  - `backend/server.py` — `POST/GET /api/leads`, `GET /api/metrics`.

## User Choices
- Lead forms: store in DB only (no email integration).
- Logo, founder image, WhatsApp number, contact details: placeholders.
- Theme: Dark Premium (#050816) as specified.

## Implemented (2026-06-17)
- Full single-page landing with all 16 required sections, dark premium design system (Inter, brand tokens, glassmorphism, grid/radial-glow textures).
- Premium motion: custom magnetic cursor (desktop), Lenis smooth scroll, section reveals, staggered cards, count-up metrics, animated timeline fill, autoplay/swipe success-story carousel, animated FAQ accordion, floating cursor-reactive hero dashboard.
- Sticky glass navbar with active-section highlighting, scroll progress bar, animated underline, mobile menu.
- Lead capture: Book Demo / Apply toggleable modal → `POST /api/leads` (stored in MongoDB) with success state. WhatsApp floating CTA.
- `GET /api/metrics` powers count-up social proof. SEO metadata + Schema.org (EducationalOrganization/Course) + OG tags.
- No pricing anywhere. Tested 100% backend + frontend (iteration_1).

## Backlog / Next Items
- **P1:** Replace placeholders — real logo, founder photo + story, WhatsApp number, email & LinkedIn URLs (in `data/content.js`).
- **P1:** Real testimonials (structure already supports it in `STORIES`).
- **P2:** Simple admin view to browse submitted leads (`GET /api/leads` exists).
- **P2:** Email/Slack notification on new lead (needs integration).
- **P2:** Spam protection (rate limit / captcha) on public lead form.
- **P2:** Live blog articles / detail pages (currently card placeholders).
