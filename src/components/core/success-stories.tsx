"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./section";
import Container from "./container";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Story = {
  id: string;
  logo: { src: string; alt: string };
  cover?: { src: string; alt: string };
  brand: string;
  blurb: string;
  tags: string[];
  headline: string;
  source?: { href: string; label?: string };
};

export default function SuccessStories({ items }: { items: Story[] }) {
  const reduce = useReducedMotion();

  return (
    <Section id="success-stories" className="bg-slate-50">
      <Container>
        <div className="text-center">
          <div className="text-xs uppercase tracking-wider text-bluebrand font-semibold">Testimonials</div>
          <h2 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">Success stories</h2>
        </div>

        <div className="mt-8 space-y-6">
          {items.map((s, idx) => {
            const flipped = idx % 2 === 1;

            return (
              <motion.article
                key={s.id}
                className={cn(
                  "grid rounded-3xl bg-white shadow-card p-6 md:p-8",
                  "md:grid-cols-2 gap-6 md:gap-8"
                )}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {/* Media */}
                <div className={cn("order-1", flipped && "md:order-2")}
                >
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200/70 bg-slate-50">
                    <Image
                      src={(s.cover ?? s.logo).src}
                      alt={(s.cover ?? s.logo).alt}
                      width={1200}
                      height={900}
                      className="w-full h-auto object-contain"
                      priority={idx < 2}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={cn("order-2 flex flex-col", flipped && "md:order-1")}
                >
                  {/* Brand row */}
                  <div className="flex items-center gap-3">
                    <Image src={s.logo.src} alt={s.logo.alt} width={28} height={28} />
                    <h3 className="text-lg md:text-xl font-semibold">{s.brand}</h3>
                  </div>

                  {/* Blurb */}
                  <p className="mt-2 text-slate-700">{s.blurb}</p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mt-4 h-px bg-slate-200/70" />

                  {/* Headline + Source */}
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="text-lg md:text-xl font-semibold">{s.headline}</div>
                    {s.source?.href && (
                      <Link
                        href={s.source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1"
                      >
                        {s.source.label ?? "Fonte"} <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
} 