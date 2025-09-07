import Container from "@/components/core/container";
import Section from "@/components/core/section";
import StatCards from "@/components/core/stat-cards";
import Solutions from "@/components/core/solutions";
import CaseStudies from "@/components/core/case-studies";
import TryItYourself from "@/components/core/try-it-yourself";
import ComparisonTable from "@/components/core/comparison-table";
import ProcessSteps, { type ProcessStep } from "@/components/core/process-steps";
import CustomerQuote from "@/components/core/customer-quote";
import SuccessStories from "@/components/core/success-stories";
import LogosCloud from "@/components/core/logos-cloud";
import CalendlyInline from "@/components/integrations/calendly-inline";
import { Button } from "@/components/ui/button";

const stories = [
  {
    id: "phreesia-hearing",
    logo: { src: "/case-studies/healthcare-reminders-logo.svg", alt: "Appointment Reminders" },
    cover: { src: "/case-studies/healthcare-reminders-cover.webp", alt: "Promemoria vocali per cliniche" },
    brand: "Cliniche di Audiologia — Promemoria vocali",
    blurb:
      "Promemoria vocali automatici con opzioni di conferma o riprogrammazione riducono i no-show e liberano tempo allo staff.",
    tags: ["Voice AI", "Healthcare", "Audiology", "Appointments"],
    headline: "+46% appuntamenti confermati · 1 su 3 risponde alle chiamate",
    source: { href: "https://www.phreesia.com/solutions/patient-reminders/", label: "Phreesia" },
  },
  {
    id: "dental-implants",
    logo: { src: "/case-studies/dental-plant-logo.svg", alt: "Dental Implants" },
    cover: { src: "/case-studies/dental-plant-cover.webp", alt: "Studio dentistico" },
    brand: "Studio Dentistico — Dental Implants",
    blurb:
      "Voice AI per prenotazioni, FAQ e reminder: risposte immediate, tempi più brevi e più opportunità.",
    tags: ["Voice AI", "Dental", "Appointments"],
    headline: "+20% qualificazione lead · −6h tempo di risposta · $300K pipeline",
    source: { href: "#", label: "Fonte" },
  },
  {
    id: "jili-properties",
    logo: { src: "/case-studies/jili-logo.svg", alt: "Jili Properties" },
    cover: { src: "/case-studies/jili-cover.webp", alt: "Property management" },
    brand: "Jili Properties — Property management",
    blurb:
      "Da oltre 200 chiamate inbound/mese gestite manualmente a gestione istantanea con prenotazioni e instradamento automatico.",
    tags: ["Voice AI", "Real Estate"],
    headline: "200+ chiamate automatizzate/mese · 3 ore risparmiate al giorno",
    source: { href: "#", label: "Fonte" },
  },
  {
    id: "lets-fix-it",
    logo: { src: "/case-studies/lets-fix-it-logo.svg", alt: "Let's Fix It" },
    cover: { src: "/case-studies/lets-fix-it-cover.webp", alt: "Servizi edili" },
    brand: "Let’s Fix It — Servizi edili",
    blurb:
      "L’AI risponde mentre i tecnici sono sul campo: prenota, qualifica e smista le richieste senza perdere opportunità.",
    tags: ["Voice AI", "Home Services"],
    headline: "200+ chiamate gestite/mese · 60 ore risparmiate ogni mese",
    source: { href: "#", label: "Fonte" },
  },
];

const STEPS: ProcessStep[] = [
  {
    n: 1,
    title: "Introductory Call",
    desc: "We learn about your business and figure out what kind of agent you need.",
    icon: { kind: "svg", src: "/illustrations/step1.svg", alt: "Step 1" },
  },
  {
    n: 2,
    title: "Discovery Call",
    desc: "We plan from start to finish and provide insights for a high-impact voice agent.",
    icon: { kind: "svg", src: "/illustrations/step2.svg", alt: "Step 2" },
  },
  {
    n: 3,
    title: "Development",
    desc: "Your agent & automations get built and connected to your systems.",
    icon: { kind: "svg", src: "/illustrations/step3.svg", alt: "Step 3" },
  },
  {
    n: 4,
    title: "Testing & Launch",
    desc: "Final testing, then your voice agent goes live and starts taking calls.",
    icon: { kind: "svg", src: "/illustrations/step4.svg", alt: "Step 4" },
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO stays as-is */}
      <Section className="pt-36 md:pt-40 pb-12 bg-white">
        <Container className="text-center">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs text-slate-500 mb-4">
              <div>Automatizza comunicazioni e processi con Agenti AI.</div>
              <div className="mb-1">⭐️⭐️⭐️⭐️⭐️</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Raddoppia i Profitti con <span className="text-gradient">Agenti AI </span> su Misura
            </h1>
            <p className="text-slate-600 mt-5">
              Aumenta i clienti. Semplifica il lavoro. Intelligenza su misura integrata nei tuoi sistemi.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#book" className="inline-flex">
                <Button className="btn-gradient text-white px-6">Prenota una Call</Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* STAT CARDS — with eyebrow/arrow */}
      <StatCards eyebrowLabel="cosa aspettarti" />

      {/* LOGOS — with caption text above marquee */}
      <LogosCloud caption="Portiamo i giganti dell’AI al tuo servizio." />

      {/* CASE STUDIES */}
      {/* Temporarily disabled; keep for future use. */}
      {false && <CaseStudies />}

      {/* SUCCESS STORIES */}
      {/* Temporarily disabled per legal guidance. Keep in codebase for future use. */}
      {false && <SuccessStories items={stories} />}

      {/* SOLUTIONS */}
      <Solutions />

      {/* TRY IT YOURSELF */}
      <TryItYourself />

      {/* PROCESS */}
      <ProcessSteps steps={STEPS} />

      {/* CUSTOMER QUOTE — to be added later */}
      <CustomerQuote />

      {/* COMPARISON TABLE */}
      <ComparisonTable />

      {/* INLINE CALENDLY */}
      <CalendlyInline />
    </main>
  );
} 