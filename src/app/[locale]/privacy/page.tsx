import Section from "@/components/core/section";
import Container from "@/components/core/container";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Dolly Strategy",
  description:
    "Informativa sulla privacy di Dolly Strategy: come raccogliamo, utilizziamo e proteggiamo i tuoi dati.",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <Container className="prose prose-slate max-w-3xl">
        <h1>Privacy Policy</h1>
        <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}</p>

        <p>
          La presente Informativa spiega come <strong>Dolly Strategy</strong> raccoglie, utilizza,
          conserva e protegge i dati personali degli utenti che visitano il sito o utilizzano i nostri servizi.
          Per domande: <a href="mailto:info@dollystrategy.com">info@dollystrategy.com</a>.
        </p>

        <h2>Dati che raccogliamo</h2>
        <ul>
          <li>Dati di contatto (nome, email, telefono) forniti tramite form (es. prenotazioni con Calendly o Tally).</li>
          <li>Dati tecnici/di utilizzo (indirizzo IP, device, pagine visitate) tramite cookie o strumenti analitici.</li>
          <li>Eventuali dati forniti durante comunicazioni via email/telefono.</li>
        </ul>

        <h2>Finalità del trattamento</h2>
        <ul>
          <li>Rispondere a richieste, fornire preventivi e organizzare call/meeting.</li>
          <li>Migliorare il sito e l’esperienza utente.</li>
          <li>Adempimenti legali e fiscali.</li>
        </ul>

        <h2>Basi giuridiche</h2>
        <ul>
          <li>Consenso dell’utente (ad es. invio form).</li>
          <li>Esecuzione di misure precontrattuali e contrattuali.</li>
          <li>Legittimo interesse (sicurezza, prevenzione abusi, miglioramenti).</li>
        </ul>

        <h2>Conservazione dei dati</h2>
        <p>I dati sono conservati per il tempo necessario alle finalità indicate o secondo obblighi di legge.</p>

        <h2>Condivisione con terze parti</h2>
        <p>
          Possiamo condividere dati con fornitori di servizi (es. Calendly, Tally, n8n, Google, Vapi)
          esclusivamente per erogare i servizi richiesti. Non vendiamo i dati a terzi.
        </p>

        <h2>Trasferimenti extra-UE</h2>
        <p>
          Alcuni fornitori possono risiedere al di fuori dell’UE/SEE. In tal caso adottiamo misure adeguate
          per proteggere i dati (es. clausole contrattuali standard).
        </p>

        <h2>Diritti dell’interessato</h2>
        <ul>
          <li>Accesso, rettifica, cancellazione, limitazione, opposizione.</li>
          <li>Portabilità dove applicabile.</li>
          <li>Revoca del consenso in qualsiasi momento.</li>
        </ul>

        <h2>Contatti</h2>
        <p>
          Email: <a href="mailto:info@dollystrategy.com">info@dollystrategy.com</a><br />
          Sede IT: Via Porta 8, Como, CO, 22100 – Partita IVA: 04239920137<br />
          Sede US: S. Terrace Rd., Tempe, AZ, 85281
        </p>

        <p className="text-sm">
          Nota: questo testo è un modello informativo e non sostituisce consulenza legale.
        </p>

        <p><Link href="/">← Torna alla home</Link></p>
      </Container>
    </Section>
  );
} 