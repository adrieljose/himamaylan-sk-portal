import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { electionConfig } from "@/config/election";

/**
 * Lexend is designed to reduce visual stress and improve reading proficiency —
 * a substantive choice for a youth portal serving mixed digital literacy,
 * not a stylistic one. Used for headings and UI labels.
 */
const display = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Source Sans 3 — civic workhorse, holds up at small sizes in dense statutory copy. */
const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(electionConfig.siteUrl),
  title: {
    default: "SK Age & Eligibility Checker | Himamaylan City COMELEC",
    template: "%s | Himamaylan City COMELEC",
  },
  icons: {
    icon: "/images/comelec-logo.svg",
    shortcut: "/images/comelec-logo.svg",
    apple: "/images/comelec-logo.svg",
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-[100dvh] flex flex-col font-sans overflow-x-clip bg-white text-ink-800">
        {/*
          Scroll-revealed sections render at opacity 0 and are made visible by an
          IntersectionObserver. Without JavaScript that observer never runs, so
          the page would be blank. A public information service must degrade to
          readable text, so no-JS visitors get the fully settled state.
        */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2.5 focus:bg-navy-900 focus:text-white focus:font-display focus:font-semibold focus:text-sm focus:shadow-overlay"
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
