import Container from "@/components/core/container";
import Section from "@/components/core/section";
import StatCards from "@/components/core/stat-cards";
import Solutions from "@/components/core/solutions";
import CaseStudies from "@/components/core/case-studies";
import TryItYourself from "@/components/core/try-it-yourself";
import ComparisonTable from "@/components/core/comparison-table";
import ProcessSteps from "@/components/core/process-steps";
import LogosCloud from "@/components/core/logos-cloud";
import CtaBanner from "@/components/core/cta-banner";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <Section className="pt-36 md:pt-40 pb-12 bg-white">
        <Container className="text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs text-slate-500 mb-4">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <span>Automatizziamo chiamate e processi con Agenti AI.</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Raddoppia i Profitti con <span className="text-gradient">Agenti AI </span> su Misura
            </h1>
            <p className="text-slate-600 mt-5">
              Aumenta i lead qualificati e semplifica il lavoro. Agenti Voice e su misura integrati nei tuoi sistemi.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/book"><Button className="btn-gradient text-white px-6">Prenota una Call</Button></Link>
            </div>
            <p className="text-slate-500 text-sm mt-4">La nostra promessa: con gli Agenti AI puoi raddoppiare i profitti. Vediamolo insieme nella tua realtà.</p>
          </div>
        </Container>
      </Section>

      <LogosCloud />

      <StatCards />

      <Solutions />

      <CaseStudies />

      <TryItYourself />

      <ComparisonTable />

      <ProcessSteps />

      <Section><Container><CtaBanner /></Container></Section>

      <Section>
        <Container>
          <p className="text-center text-slate-500">In media, le nostre soluzioni costano meno di uno stipendio mensile.</p>
        </Container>
      </Section>
    </main>
  );
} 