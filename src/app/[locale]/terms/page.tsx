import Section from "@/components/core/section";
import Container from "@/components/core/container";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Dolly Strategy",
  description: "Termini di servizio di Dolly Strategy.",
};

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <Container className="prose prose-slate max-w-3xl">
        <h1>Terms of Service</h1>
        <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}</p>

        <h2>1. Oggetto</h2>
        <p>
          I presenti Termini disciplinano l’uso del sito e dei servizi offerti da <strong>Dolly Strategy</strong>.
        </p>

        <h2>2. Servizi</h2>
        <p>
          Forniamo consulenza e sviluppo in ambito AI (AI Agents, Voice AI, automazioni, integrazioni).
          Le specifiche dei servizi vengono definite in proposte/ordini separati.
        </p>

        <h2>3. Responsabilità</h2>
        <ul>
          <li>Ci impegniamo a fornire servizi professionali secondo le migliori pratiche.</li>
          <li>Non garantiamo risultati specifici se non espressamente concordati per iscritto.</li>
          <li>Non siamo responsabili per danni indiretti o perdita di profitti.</li>
        </ul>

        <h2>4. Pagamenti</h2>
        <p>
          Modalità, scadenze e penali sono definite in contratto/proposta. Ritardi di pagamento possono
          sospendere l’erogazione dei servizi.
        </p>

        <h2>5. Proprietà intellettuale</h2>
        <p>
          Salvo diverso accordo scritto, il codice e i materiali sviluppati per il cliente vengono
          trasferiti/licenziati come da contratto specifico.
        </p>

        <h2>6. Riservatezza</h2>
        <p>
          Le parti si impegnano a mantenere riservate le informazioni confidenziali acquisite durante il rapporto.
        </p>

        <h2>7. Trattamento dei dati</h2>
        <p>
          Il trattamento dei dati personali è regolato dalla nostra <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>8. Legge applicabile e foro</h2>
        <p>
          Salvo diverso accordo, il rapporto contrattuale è regolato dalla legge italiana. Foro competente come da contratto.
        </p>

        <h2>9. Contatti</h2>
        <p>
          Email: <a href="mailto:info@dollystrategy.com">info@dollystrategy.com</a><br />
          Tel. USA: +1 623 271 5783 — Tel. IT: +39 333 3249234
        </p>

        <p className="text-sm">
          Nota: testo generico a scopo informativo. Far revisionare dal legale prima della pubblicazione definitiva.
        </p>

        <p><Link href="/">← Torna alla home</Link></p>
      </Container>
    </Section>
  );
} 