"use client";

import Section from "./section";
import Container from "./container";
import SectionHeading from "./section-heading";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type IconVariant =
  | { kind: "emoji"; value: string }
  | { kind: "svg"; src: string; alt: string }
  | { kind: "img"; src: string; alt: string };

export type ProcessStep = {
  n: number;
  title: string;
  desc: string;
  icon: IconVariant;
};

export default function ProcessSteps({
  eyebrow = "IL NOSTRO APPROCCIO",
  heading = "Cominciare è semplice!",
  steps,
  className,
}: {
  eyebrow?: string;
  heading?: string;
  steps: ProcessStep[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="processo" className={cn("bg-slate-50", className)}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              className="relative rounded-2xl bg-white shadow-card p-6"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {/* Top-right icon */}
              <div className="absolute right-4 top-4">
                {s.icon.kind === "emoji" && (
                  <span aria-hidden className="text-2xl select-none">{s.icon.value}</span>
                )}
                {s.icon.kind !== "emoji" && (
                  <Image
                    src={s.icon.src}
                    alt={s.icon.alt}
                    width={28}
                    height={28}
                    className="opacity-90"
                  />
                )}
              </div>

              <div className="text-4xl font-semibold text-slate-800">{String(s.n).padStart(2, "0")}</div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
} 