"use client";
import CalendlyInline from "@/components/core/calendly-inline";

export default function BookPage() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Prenota la tua Call Introduttiva</h1>
        <CalendlyInline url={url} />
      </div>
    </main>
  );
} 