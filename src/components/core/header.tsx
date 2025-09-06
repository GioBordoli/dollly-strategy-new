"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "header-glass" : "bg-transparent"}`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Dolly <span className="text-gradient">Strategy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <Link href="#soluzioni">Soluzioni</Link>
          <Link href="#casi">Case studies</Link>
          <Link href="#processo">Come funziona</Link>
          <Link href="/book">
            <Button className="btn-gradient text-white shadow-md hover:opacity-95">Prenota una Call</Button>
          </Link>
        </nav>
      </Container>
    </motion.header>
  );
} 