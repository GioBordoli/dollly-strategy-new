import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200">
      <Container className="py-10 text-sm text-slate-600 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>© {new Date().getFullYear()} Dolly Strategy. Tutti i diritti riservati.</div>
        <nav className="flex gap-6">
          <Link href="/privacy">Privacy</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
      </Container>
    </footer>
  );
} 