import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";
import LeadForm from "./lead-form";
import Image from "next/image";
import ProvaloImg from "@/../public/illustrations/provalo.png";

export default function TryItYourself() {
  return (
    <Section id="provalo">
      <Container className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <SectionHeading title="Provalo tu stesso" subtitle="Lascia i tuoi dati e facciamo partire una chiamata demo." />
          <LeadForm />
        </div>
        <div>
          <Image
            src={ProvaloImg}
            alt="Illustrazione demo chiamata"
            className="w-full h-auto rounded-2xl shadow-card"
            placeholder="blur"
            sizes="(min-width: 768px) 36rem, 100vw"
          />
        </div>
      </Container>
    </Section>
  );
} 