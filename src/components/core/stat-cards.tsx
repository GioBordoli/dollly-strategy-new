import Section from "./section";
import Container from "./container";
import { Phone, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Phone, value: "~95%", label: "delle chiamate automatizzate" },
  { icon: TrendingUp, value: "~300%", label: "più appuntamenti" },
  { icon: Target, value: "+45%", label: "nel tasso di conversione" },
];

export default function StatCards({
  eyebrowLabel,
}: {
  eyebrowLabel?: string;
}) {
  return (
    <Section className="pt-8">
      <Container>
        {/* Eyebrow */}
        {eyebrowLabel && (
          <div className="relative mb-4 md:mb-6">
            <div className="text-xs uppercase tracking-wider text-bluebrand font-medium text-center md:text-left">
              {eyebrowLabel}
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card flex items-center gap-4">
              <s.icon className="text-bluebrand" />
              <div>
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-slate-600">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
} 