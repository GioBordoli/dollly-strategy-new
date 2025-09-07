import "@/styles/globals.css";
import "@/styles/theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/core/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dolly Strategy — Agenti AI e Automazioni per PMI italiane",
  description: "Costruiamo agenti AI su misura: Voice, Custom e Integrazioni. Prenota una call.",
  metadataBase: new URL("https://www.dollystrategy.com"),
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  );
} 