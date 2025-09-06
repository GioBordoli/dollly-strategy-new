import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";
import { Card } from "@/components/ui/card";

const CASES = [
  {
    logo: "LUXE/WEEK", // placeholder box
    title: "165+ prenotazioni extra al mese",
    blurb: "Leads ricontattati in pochi secondi con un Agente Voice AI.",
    tag: "Travel / Luxury",
  },
  {
    logo: "PCW Solutions",
    title: "60% dei ticket risolti automaticamente",
    blurb: "Supporto fuori orario con agente vocale. 200+ chiamate/mese gestite.",
    tag: "IT Gestito",
  },
  {
    logo: "Jili Properties",
    title: "3 ore/giorno risparmiate",
    blurb: "Prenotazioni e smistamento chiamate completamente automatizzati.",
    tag: "Property Management",
  },
];

export default function CaseStudies() {
  return (
    <Section id="casi">
      <Container>
        <SectionHeading title="Storie di successo" subtitle="Risultati reali ottenuti con l’uso di Agenti AI (crediti ai rispettivi proprietari)." />
        <div className="grid gap-6">
          {CASES.map((c, i) => (
            <Card key={i} className="rounded-2xl p-6 shadow-card grid md:grid-cols-3 gap-6 items-center">
              <div className="bg-slate-900 text-white rounded-xl h-32 flex items-center justify-center">{c.logo}</div>
              <div className="md:col-span-2">
                <div className="text-sm text-slate-500 mb-2">{c.tag}</div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="text-slate-600 mt-2">{c.blurb}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
} 