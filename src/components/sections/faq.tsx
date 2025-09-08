"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type FaqItem = { id: string; q: string; a: string };

const faqs: FaqItem[] = [
  {
    id: "integrations",
    q: "Gli Agenti AI si integrano con il mio CRM e calendario?",
    a: "Sì. Collegamenti tipici: CRM, calendari, scheduler, email, WhatsApp, fogli di calcolo e n8n per automazioni. Indichiamo le integrazioni in fase di discovery.",
  },
  {
    id: "voice-quality",
    q: "La voce è naturale?",
    a: "Offriamo voci neurali con latenza bassa e gestione turn-taking; scegliamo timbro/lingua in base al caso d’uso e ottimizziamo prompt + prosodia.",
  },
  {
    id: "trust",
    q: "Posso fidarmi dell’AI per parlare con i miei clienti?",
    a: "Definiamo regole, fallback umani e limiti. L’agente qualifica, risponde a FAQ e prenota; i casi ambigui vengono passati allo staff.",
  },
  {
    id: "timeline",
    q: "Quanto tempo richiede lo sviluppo?",
    a: "MVP tipico: 1–3 settimane per un agente standard (scoping, build, test, integrazioni), con iterazioni rapide dopo il lancio.",
  },
  {
    id: "support",
    q: "Offrite supporto e ottimizzazioni?",
    a: "Sì. Monitoriamo, misuriamo KPI (tasso di automazione, booking, CSAT) e ottimizziamo continuamente prompt, flussi e integrazioni.",
  },
  {
    id: "edits",
    q: "Posso richiedere modifiche al comportamento dell’agente?",
    a: "Certo. Aggiorniamo intenti, script e routing. Possiamo esporre pannelli per gestire dataset/FAQ e regole senza codice.",
  },
  {
    id: "privacy",
    q: "Come gestite privacy e sicurezza dei dati?",
    a: "Usiamo provider affidabili, minimizzazione dati e accessi limitati. Su richiesta, log redatti/anonymizzati e controlli di conservazione.",
  },
];

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  useEffect(() => {}, []);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-sky-600">
          Domande frequenti
        </p>
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Tutto ciò che devi sapere.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
          Hai domande? Ecco le risposte essenziali prima di iniziare.
        </p>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem
                key={f.id}
                value={f.id}
                className={cn(
                  "rounded-2xl border border-slate-200 bg-white px-4 sm:px-6",
                  "data-[state=open]:shadow-sm",
                  idx !== faqs.length - 1 ? "mb-3" : ""
                )}
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-slate-900 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#book"
            className="rounded-full bg-gradient-to-r from-blue-600 to-teal-400 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Prenota una Call
          </a>
        </div>
      </div>

      <FaqJsonLd />
    </section>
  );
} 