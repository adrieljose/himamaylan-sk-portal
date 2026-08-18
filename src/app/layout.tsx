import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { electionConfig } from "@/config/election";

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(electionConfig.siteUrl),
  title: {
    default: "Himamaylan City COMELEC | 2026 SK Age & Eligibility Checker",
    template: "%s | Himamaylan City COMELEC",
  },
  description: electionConfig.siteDescription,
  keywords: [
    "Himamaylan City COMELEC",
    "SK Age Checker 2026",
    "Sangguniang Kabataan Eligibility",
    "Himamaylan SK Elections",
    "Negros Occidental SK",
    "November 2 2026 Election Day",
    "Katipunan ng Kabataan",
    "COMELEC Region VI",
  ],
  authors: [{ name: "Office of the Election Officer — Himamaylan City" }],
  creator: "Himamaylan City COMELEC",
  publisher: "Commission on Elections (COMELEC)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: electionConfig.siteUrl,
    title: "Himamaylan City COMELEC | 2026 SK Age & Eligibility Checker",
    description: electionConfig.siteDescription,
    siteName: "Himamaylan City COMELEC Civic Portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himamaylan City COMELEC | 2026 SK Age & Eligibility Checker",
    description: electionConfig.siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-[100dvh] flex flex-col font-sans overflow-x-clip bg-white text-slate-900 selection:bg-amber-100 selection:text-slate-950">
        {/* Skip to Main Content Link for WCAG AAA Accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 px-4 py-2 bg-blue-900 text-white rounded-lg font-bold shadow-lg ring-2 ring-white"
        >
          Skip to main content
        </a>

        <Navigation />
        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
