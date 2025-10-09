import Link from "next/link";

export default function BookPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Prenota la tua Call Introduttiva</h1>
        <p className="text-slate-600">
          Per prenotare, usa il widget Calendly in fondo alla home.
        </p>
        <p className="mt-4">
          <Link href="/#book" className="text-blue-600 underline">Vai al widget</Link>
        </p>
      </div>
    </main>
  );
} 