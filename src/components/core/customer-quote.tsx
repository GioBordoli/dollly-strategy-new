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
        <blockquote className="text-lg md:text-xl font-semibold text-slate-900 mb-6 leading-snug">
          “I worked with Giorgio from Dolly Strategy on finding an AI based solution to make and maintain a website for my lean startup. He didn’t just, "hey what do you want?" and then shove a cookie cutter model down my throat. He wanted to know what my business was about, what my goals were, and how I wanted my clients to feel when they visited my site. <br /><br /> Now, the website looks great and he gave me the tools I need to make my own edits whenever I want. Dolly Strategy will be top of mind for AI’ifying (that’s totally a word) future projects!”
        </blockquote>

        {/* Author */}
        <footer className="text-slate-600">
          — Brian Frister, <span className="font-medium text-slate-800">Founder/CEO of Founderi.co LLC</span>
        </footer>

        <div className="my-10 border-t border-slate-200" />
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
        <blockquote className="text-lg md:text-xl font-semibold text-slate-900 mb-6 leading-snug">
          “Giorgio e il suo team hanno capito subito i miei bisogni e hanno costruito una soluzione ai miei problemi che lavora letteralmente mentre dormo. <br /><br /> Adesso gestisco conferme ai clienti, appuntamenti e follow up in automatico, risparmio ore ogni settimana e finalmente posso concentrarmi sui miei cleti per offrire il miglior servizio possibile.<br /><br /> Se stai pensando se provarci o meno: fallo. <br /><br /> È il miglior investimento che ho fatto negli ultimi 5 anni.”
        </blockquote>

        {/* Author */}
        <footer className="text-slate-600">
          — Jason Coawette , <span className="font-medium text-slate-800">CEO Venture-Stratus LLC</span>
        </footer>
      </Container>
    </Section>
  );
} 