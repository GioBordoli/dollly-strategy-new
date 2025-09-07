import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";

const ROWS = [
  "Prompt Engineer & Automation Builders Esperti",
  "Pratiche di sviluppo innovative",
  "Sviluppo completamente su misura",
  "Approccio cliente-centrico",
  "Test e validazione rigorosi",
  "Connessioni con tutte le principali piattaforme di Agent AI",
];

export default function ComparisonTable() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Perché sceglierci" title="Perché le aziende ci scelgono" />
        <div className="rounded-2xl shadow-card overflow-hidden bg-white">
          <div className="grid grid-cols-3 text-sm font-medium text-slate-600">
            <div className="py-4 px-6 text-left">Caratteristiche</div>
            <div className="py-4 px-6 text-center">
              <span className="text-gradient-logo font-semibold">Dolly Strategy</span>
            </div>
            <div className="py-4 px-6 text-center">Altre Agenzie</div>
          </div>
          <div>
            {ROWS.map((r) => (
              <div key={r} className="grid grid-cols-3 items-center border-t border-slate-200">
                <div className="px-6 py-4 text-left text-slate-700">{r}</div>
                <div className="px-6 py-4 text-center">✔︎</div>
                <div className="px-6 py-4 text-center">✖︎</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
} 