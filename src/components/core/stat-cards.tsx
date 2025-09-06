import Section from "./section";
import Container from "./container";
import { Phone, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Phone, value: "~95%", label: "delle chiamate automatizzate" },
  { icon: TrendingUp, value: "~300%", label: "più appuntamenti" },
  { icon: Target, value: "+45%", label: "nel tasso di conversione" },
];

export default function StatCards() {
  return (
    <Section>
      <Container className="grid md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 shadow-card flex items-center gap-4">
            <s.icon className="text-bluebrand" />
            <div>
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="text-slate-600">{s.label}</div>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
} 