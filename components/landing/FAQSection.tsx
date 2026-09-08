'use client';

import { faqs } from '@/content/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQSection() {
  return (
    <section className="section section--cream" id="faq" aria-labelledby="faq-title"><div className="container-shell faq-layout"><div><p className="eyebrow">Frequently asked</p><h2 id="faq-title">Before you book.</h2><p>Jawaban singkat untuk membantu menyiapkan inquiry perjalanan Anda.</p></div><Accordion className="faq-accordion">{faqs.map((faq) => <AccordionItem key={faq.question} value={faq.question}><AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger><AccordionContent className="faq-content"><p>{faq.answer}</p></AccordionContent></AccordionItem>)}</Accordion></div></section>
  );
}
