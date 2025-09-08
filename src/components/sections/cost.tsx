"use client";

import Price3D from "@/components/ui/price-3d";

export default function CostSection() {
  return (
    <section id="costo" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow – keep style consistent with other sections */}
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-sky-600">
          Investimento
        </p>

        {/* Single horizontal card (no top gradient line) */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            {/* Text column */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Quanto costa?
              </h2>

              <p className="mt-3 text-slate-700">
                In media <strong>quanto uno stipendio mensile</strong>. Ma lavora <strong>24/7</strong> e scala senza assunzioni.
              </p>

              <ul className="mt-6 grid gap-3 text-slate-800 sm:grid-cols-2">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span><strong>Pagamento flessibile</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span><strong>Garanzia risultati o non paghi</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span><strong>Collabora con esperti</strong></span>
                </li>
              </ul>

              <p className="mt-4 text-sm text-slate-500">
                Il prezzo finale dipende da volumi, integrazioni e complessità dei flussi.
              </p>

              <div className="mt-6">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-400 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Prenota una Call Strategica
                </a>
              </div>
            </div>

            {/* Animated 3D price – replaces previous image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[520px] py-4">
                <Price3D amount={2650} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 