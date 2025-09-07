import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  src: string;
  alt: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

function ServiceCard({ src, alt, title, children, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border border-slate-200 bg-white shadow-sm",
        "flex flex-col overflow-hidden hover:shadow-md transition-shadow",
        className
      )}
    >
      {/* IMAGE: fills top of card */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
      </div>

      {/* TEXT */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{children}</p>
        <div className="mt-auto" />
      </div>
    </div>
  );
}

const SOLUTIONS = [
  {
    title: "Agenti Voice AI",
    desc: "Rispondono 24/7, qualificano i lead, fissano appuntamenti e gestiscono richieste ripetitive.",
    imageSrc: "/services-images/voiceAI.png",
    imageAlt: "Agenti Voice AI illustration",
  },
  {
    title: "Agenti AI su Misura",
    desc: "Workflow e agenti personalizzati per le tue operazioni: vendita, supporto, back-office.",
    imageSrc: "/services-images/agents%20su%20misura.png",
    imageAlt: "Agenti AI su Misura illustration",
  },
  {
    title: "Integrazioni",
    desc: "Si collega ai tuoi sistemi: CRM, calendari, scheduler, email, WhatsApp, n8n ecc.",
    imageSrc: "/services-images/integration.png",
    imageAlt: "Integrazioni illustration",
  },
  {
    title: "Formazione del personale",
    desc: "Sessioni pratiche per insegnare al tuo team come sfruttare al meglio gli agenti AI, garantendo adozione rapida e risultati concreti.",
    imageSrc: "/services-images/education.png",
    imageAlt: "Formazione del personale illustration",
  },
];

export default function Solutions() {
  return (
    <Section id="soluzioni" className="bg-white">
      <Container>
        <SectionHeading title="Come trasformiamo il tuo business" subtitle="Automazione delle chiamate, appuntamenti e processi con Agenti AI." />
        <div className={cn("mt-6 grid gap-6", "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4")}>
          {SOLUTIONS.map((s) => (
            <ServiceCard key={s.title} src={s.imageSrc} alt={s.imageAlt} title={s.title}>
              {s.desc}
            </ServiceCard>
          ))}
        </div>
      </Container>
    </Section>
  );
} 