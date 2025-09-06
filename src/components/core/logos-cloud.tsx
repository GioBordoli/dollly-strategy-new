import Container from "./container";
import Section from "./section";

const LOGOS = ["Google Cloud", "OpenAI", "n8n", "Vapi", "Microsoft", "AWS"];

export default function LogosCloud() {
  return (
    <Section className="py-8">
      <Container className="flex flex-wrap items-center justify-center gap-8 opacity-70">
        {LOGOS.map((l) => (
          <div key={l} className="text-sm text-slate-500">{l}</div>
        ))}
      </Container>
    </Section>
  );
} 