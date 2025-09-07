"use client";

import Link from "next/link";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import Container from "@/components/core/container";
import Section from "@/components/core/section";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <Section className="pb-0">
        <Container>
          {/* GRID: 3 columns on desktop, stacked on mobile */}
          <div className="grid gap-10 md:grid-cols-12">
            {/* Col 1 — Brand + social + email */}
            <div className="md:col-span-4">
            <Link href="/" className="font-semibold tracking-tight text-lg">
                Dolly <span className="text-gradient">Strategy</span>
            </Link>

              <div className="mt-5 flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/in/giorgiobordoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
                >
                  <Linkedin className="w-[18px] h-[18px]" />
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@dollystrategy.com" className="hover:underline">
                  info@dollystrategy.com
                </a>
              </div>

              <p className="mt-6 text-sm text-neutral-400">
                Built for growth — AI Agents, Voice AI &amp; Automations.
              </p>
            </div>

            {/* Col 2 — Sitemap + Legal (two subcolumns) */}
            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-neutral-100">Sitemap</h4>
                <ul className="mt-3 space-y-2 text-neutral-300">
                  <li><a href="#soluzioni" className="hover:underline">Soluzioni</a></li>
                  <li><a href="#processo" className="hover:underline">Come funziona</a></li>
                  <li><a href="#book" className="hover:underline">Prenota una Call</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-100">Legal</h4>
                <ul className="mt-3 space-y-2 text-neutral-300">
                  <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Col 3 — Offices & Phones (clear grouping) */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-neutral-100">Contatti</h4>

              <div className="mt-3 grid gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-neutral-300" />
                  <div className="text-neutral-300">
                    <div className="text-neutral-100">U.S. Office</div>
                    <div>S. Terrace Rd.</div>
                    <div>Tempe, AZ, USA 85281</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-neutral-300" />
                  <div className="text-neutral-300">
                    <div className="text-neutral-100">Italy Office</div>
                    <div>Via Porta 8</div>
                    <div>Como, CO, Italy, 22100</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 shrink-0 text-neutral-300" />
                  <a href="tel:+16232715783" className="hover:underline text-neutral-300">
                    +1 623 271 5783
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 shrink-0 text-neutral-300" />
                  <a href="tel:+393333249234" className="hover:underline text-neutral-300">
                    +39 333 3249234
                  </a>
                </div>

                <div className="text-neutral-400 text-sm">Partita IVA: 04239920137</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-neutral-800" />

          {/* Bottom bar (single line, no duplicates) */}
          <div className="pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-neutral-400">
            <div>Copyright © {year} Dolly Strategy. Tutti i diritti riservati.</div>
          </div>
        </Container>
      </Section>
    </footer>
  );
} 