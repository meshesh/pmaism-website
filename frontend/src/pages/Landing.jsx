import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import PainVsOutcome from "@/components/landing/PainVsOutcome";
import WhoThisIsFor from "@/components/landing/WhoThisIsFor";
import Curriculum from "@/components/landing/Curriculum";
import Method from "@/components/landing/Method";
import WhyDifferent from "@/components/landing/WhyDifferent";
import Founder from "@/components/landing/Founder";
import SuccessStories from "@/components/landing/SuccessStories";
import Placement from "@/components/landing/Placement";
import FAQSection from "@/components/landing/FAQSection";
import Blog from "@/components/landing/Blog";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppFab from "@/components/landing/WhatsAppFab";
import { SectionDivider } from "@/components/landing/common";
import SEO from "@/components/SEO/SEO";
import {
  landingSEO,
  getOrganizationSchema,
  getCourseSchema,
  getFAQSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
  getSpeakableSchema,
} from "@/data/seo";
import { FAQS } from "@/data/content";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <SEO
        {...landingSEO}
        schema={[
          getOrganizationSchema(),
          getCourseSchema(),
          getFAQSchema(FAQS),
          getWebSiteSchema(),
          getBreadcrumbSchema(),
          getSpeakableSchema(),
        ]}
      />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainVsOutcome />
        <SectionDivider />
        <WhoThisIsFor />
        <SectionDivider />
        <Curriculum />
        <SectionDivider />
        <Method />
        <WhyDifferent />
        <Founder />
        <SectionDivider />
        <Placement />
        <SectionDivider />
        <SuccessStories />
        <FAQSection />
        <SectionDivider />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
