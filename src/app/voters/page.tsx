import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { House, CaretRight, ChartBar, CheckCircle, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { VoterInfographicSection } from "@/components/voters/VoterInfographicSection";

export const metadata: Metadata = {
  title: "Official Registered Voters Infographic | Himamaylan City COMELEC",
  description:
    "Explore official COMELEC registered voter statistics for all 19 barangays of Himamaylan City across statutory age cohorts: 15-17, 18-30 (SK), and 31 & above.",
  keywords: [
    "Himamaylan City Registered Voters",
    "COMELEC Voters Infographic",
    "SK Registered Voters Himamaylan",
    "Barangay Voter Demographics",
    "2026 BSKE Voters Statistics",
  ],
};

export default function VotersPage() {
  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">

      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link
              href="/"
              className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors text-slate-600 font-medium"
            >
              <House size={16} aria-hidden="true" weight="fill" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" weight="fill" />
            <span className="text-comelec-blue-950 font-semibold">Voter Demographics Infographic</span>
          </nav>
        </Container>
      </div>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 border border-white/15 text-xs font-semibold uppercase tracking-wider">
              <ChartBar size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Official COMELEC Electorate Statistics</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Registered Voters Infographic
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Official voter demographics across all 19 barangays of the City of Himamaylan, Negros Occidental. Discover demographic breakdowns for the <strong>81,821 total registered voters</strong>, <strong>28,368 SK youth voters</strong>, and <strong>78,818 regular voters</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/checker"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-comelec-gold-400 text-slate-950 font-bold text-xs hover:bg-comelec-gold-300 transition-colors shadow-md"
              >
                <CheckCircle size={16} weight="fill" aria-hidden="true" />
                <span>Check Your SK Eligibility</span>
              </Link>
              <Link
                href="/barangays"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-colors border border-white/20"
              >
                <MapPin size={16} weight="fill" aria-hidden="true" />
                <span>View 19 Barangays Directory</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <main id="main-infographics" className="flex-1">
        <VoterInfographicSection />
      </main>
    </div>
  );
}
