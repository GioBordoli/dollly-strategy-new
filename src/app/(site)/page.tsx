import Container from "@/components/core/container";
import Section from "@/components/core/section";
import StatCards from "@/components/core/stat-cards";
import Solutions from "@/components/core/solutions";
import CaseStudies from "@/components/core/case-studies";
import TryItYourself from "@/components/core/try-it-yourself";
import ComparisonTable from "@/components/core/comparison-table";
import ProcessSteps, { type ProcessStep } from "@/components/core/process-steps";
import CustomerQuote from "@/components/core/customer-quote";
import LogosCloud from "@/components/core/logos-cloud";
import CtaBanner from "@/components/core/cta-banner";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
              <Link href="/book"><Button className="btn-gradient text-white px-6">Prenota una Call</Button></Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* STAT CARDS — with eyebrow/arrow */}
      <StatCards eyebrowLabel="cosa aspettarti" />

      {/* LOGOS — with caption text above marquee */}
      <LogosCloud caption="Portiamo i giganti dell’AI al tuo servizio." />

      {/* CASE STUDIES */}
      <CaseStudies />

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
    </main>
  );
} 