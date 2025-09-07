import Section from "./section";
import Container from "./container";
import LogosMarquee, { type LogoItem } from "./logos-marquee";

const LOGOS: LogoItem[] = [
  { src: "/logos/google-cloud.svg", alt: "Logo Google Cloud" },
  { src: "/logos/openai.svg", alt: "Logo OpenAI" },
  { src: "/logos/whatsapp.svg", alt: "Logo whatsapp" },
  { src: "/logos/ibm-cloud.svg", alt: "Logo IBMi" },
  { src: "/logos/microsoft.svg", alt: "Logo Microsoft" },
  { src: "/logos/python.svg", alt: "Logo Python" },
];

export default function LogosCloud({ caption }: { caption?: string }) {
  return (
    <Section className="py-8">
      <Container>
        {caption && (
          <p className="text-center text-sm text-slate-500 mb-4">
            {caption}
          </p>
        )}
        <LogosMarquee items={LOGOS} height={26} gap={48} durationSec={30} />
      </Container>
    </Section>
  );
} 