import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";
import { Card } from "@/components/ui/card";

const SOLUTIONS = [
  {
    title: "Agenti Voice AI",
    desc: "Rispondono 24/7, qualificano i lead, fissano appuntamenti e gestiscono richieste ripetitive.",
    imageAlt: "Voice AI",
  },
  {
    title: "Agenti AI su Misura",
    desc: "Workflow e agenti personalizzati per le tue operazioni: vendita, supporto, back-office.",
    imageAlt: "Custom Agents",
  },
  {
    title: "Integrazioni",
    desc: "Si collega ai tuoi sistemi: CRM, calendari, scheduler, email, WhatsApp, n8n ecc.",
    imageAlt: "Integrations",
  },
];

export default function Solutions() {
  return (
    <Section id="soluzioni" className="bg-white">
      <Container>
        <SectionHeading title="Come trasformiamo il tuo business" subtitle="Automazione delle chiamate, appuntamenti e processi con Agenti AI." />
        <div className="grid md:grid-cols-3 gap-6">
          {SOLUTIONS.map((s, i) => (
            <Card key={i} className="rounded-2xl p-6 shadow-card">
              <div className="h-40 w-full bg-slate-100 rounded-xl mb-5 flex items-center justify-center text-slate-400">
                {/* Place illustration image later */}
                <span>{s.imageAlt}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
} 