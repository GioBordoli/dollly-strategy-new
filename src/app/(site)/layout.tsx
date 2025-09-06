import "@/styles/globals.css";
import "@/styles/theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/core/header";
import Footer from "@/components/core/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dolly Strategy — Agenti AI e Automazioni per PMI italiane",
  description: "Costruiamo agenti AI su misura: Voice, Custom e Integrazioni. Prenota una call.",
  metadataBase: new URL("https://www.dollystrategy.com"),
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 