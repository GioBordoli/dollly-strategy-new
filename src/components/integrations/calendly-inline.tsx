"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  url?: string;
  height?: number;
  pageTitle?: string;
};

export default function CalendlyInline({
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/YOUR_HANDLE/intro-call",
  height = 680,
  pageTitle = "Book Your Introductory Call",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldMount, setShouldMount] = useState(false);

  // Lazy-mount when the section enters viewport (perf)
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShouldMount(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="book" aria-label={pageTitle} className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-wider text-bluebrand font-semibold">Let’s connect</div>
          <h2 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">Book Your Introductory Call</h2>
        </div>

        <div ref={ref} className="mt-8 rounded-3xl bg-white shadow-card ring-1 ring-slate-200/70 p-3 sm:p-4">
          {shouldMount ? (
            <div className="calendly-inline-widget w-full" style={{ minWidth: 320, height }} data-url={url} />
          ) : (
            <div style={{ height }} className="w-full animate-pulse rounded-2xl bg-slate-100" aria-hidden="true" />
          )}
        </div>

        <noscript>
          <div className="mt-4 text-center text-sm text-slate-500">
            Calendly requires JavaScript. You can also book at{" "}
            <a href={url} className="underline" target="_blank" rel="noopener noreferrer">
              this link
            </a>.
          </div>
        </noscript>
      </div>
      {shouldMount && <ScriptOnce src="https://assets.calendly.com/assets/external/widget.js" id="calendly-widget-js" />}
    </section>
  );
}

function ScriptOnce({ src, id }: { src: string; id: string }) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = src;
    s.async = true;
    document.body.appendChild(s);
    return () => {};
  }, [src, id]);
  return null;
} 