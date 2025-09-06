import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";
import LeadForm from "./lead-form";

export default function TryItYourself() {
  return (
    <Section id="provalo">
      <Container className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <SectionHeading title="Provalo tu stesso" subtitle="Lascia i tuoi dati e facciamo partire una chiamata demo." />
          <LeadForm />
        </div>
        <div className="h-72 rounded-2xl bg-slate-100 shadow-card flex items-center justify-center text-slate-400">
          {/* Placeholder for 3D illustration image */}
          Illustrazione
        </div>
      </Container>
    </Section>
  );
} 