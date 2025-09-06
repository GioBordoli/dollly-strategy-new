import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";

const STEPS = [
  { n: "1", title: "Discovery & Strategia", desc: "Allineiamo obiettivi, mappiamo processi e identifichiamo quick wins." },
  { n: "2", title: "Creazione & Lancio", desc: "Sviluppiamo il tuo Agente AI e lo integriamo nei tuoi sistemi." },
  { n: "3", title: "Ottimizza", desc: "Monitoraggio e miglioramenti continui per massimizzare i risultati." },
];

export default function ProcessSteps() {
  return (
    <Section id="processo">
      <Container>
        <SectionHeading title="Partire è semplice" subtitle="Un processo chiaro in tre passi." />
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl bg-card shadow-card p-6">
              <div className="text-3xl font-semibold text-bluebrand">{s.n}</div>
              <h3 className="text-lg font-semibold mt-2">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
} 