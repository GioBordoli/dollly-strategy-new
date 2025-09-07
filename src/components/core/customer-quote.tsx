import Section from "./section";
import Container from "./container";
import { Star } from "lucide-react";

export default function CustomerQuote() {
  return (
    <Section className="py-16 md:py-24 bg-white">
      <Container className="text-center max-w-3xl">
        {/* Stars row */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 leading-snug">
          “Dolly Strategy ha cambiato la traiettoria della nostra attività e migliorato la qualità del nostro servizio”
        </blockquote>

        {/* Author */}
        <footer className="text-slate-600">
          — A. Romanò, <span className="font-medium text-slate-800">Studio Dentistico Romanò & Associati</span>
        </footer>
      </Container>
    </Section>
  );
} 