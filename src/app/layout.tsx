import "@/styles/globals.css";
import "@/styles/theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dolly Strategy — Agenti AI e Automazioni per PMI italiane",
  description: "Costruiamo agenti AI su misura: Voice, Custom e Integrazioni. Prenota una call.",
  metadataBase: new URL("https://www.dollystrategy.com"),
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
