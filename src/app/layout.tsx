import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

import { electionConfig } from "@/config/election";

// Bundled fonts keep builds independent of Google Fonts API responses.
const display = localFont({
  src: "./fonts/lexend-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});
const sans = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  style: "normal",
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
    default: "NLE 2028 | Himamaylan Voter Information",
    template: "%s | Himamaylan City COMELEC",
  },
  icons: {
    icon: "/images/comelec-logo.svg",
    shortcut: "/images/comelec-logo.svg",
    apple: "/images/comelec-logo.svg",
  },
  description: electionConfig.siteDescription,
  /**
   * This service is dense with bare numerals: ages, RA numbers, section numbers
   * and dates. Safari's data detectors linkify strings like "10742" and
   * "November 2, 2026" into tel: and calendar links, which recolours them
   * mid-sentence and makes statutory citations look like broken text.
   */
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  keywords: [
    "Himamaylan NLE 2028",
    "Philippine national elections",
    "Voting age checker",
    "May 8 2028",
  ],
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
    title: "Himamaylan NLE 2028 | Voter Information & Age Checker",
    description: electionConfig.siteDescription,
    siteName: "Himamaylan City COMELEC Civic Portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himamaylan NLE 2028 | Voter Information & Age Checker",
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

        {/*
          Entry notice. Rendered last so it sits above the page in source order
          as well as in stacking order, and so a screen reader reaching it does
          not have to traverse the whole document first.
        */}
      </body>
    </html>
  );
}
