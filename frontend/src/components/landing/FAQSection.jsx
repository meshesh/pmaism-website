import React from "react";
import { SectionHeading } from "@/components/landing/common";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/content";

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-16 sm:py-24" data-testid="faq">
      <div className="max-shell container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before you book your free demo."
        />

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mx-auto mt-14 max-w-3xl space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="card-premium overflow-hidden rounded-2xl border-0 px-6 transition-colors data-[state=open]:border data-[state=open]:border-brand/30"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-medium text-white hover:no-underline [&[data-state=open]>svg]:text-brand-light">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
