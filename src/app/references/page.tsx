import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowSquareOut,
  CaretRight,
  House,
  Scales,
  CalendarBlank,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LEGAL_REFERENCES } from "@/config/references";
import { electionConfig } from "@/config/election";

export const metadata: Metadata = {
  title: "Statutory References & Laws | Himamaylan City COMELEC",
  description:
    "Official legal authorities, Republic Acts, and COMELEC resolutions governing the 2026 Barangay and Sangguniang Kabataan Elections.",
};

export default function ReferencesPage() {
  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors text-slate-600 font-medium">
              <House size={16} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" />
            <span className="text-comelec-blue-950 font-semibold">Official Statutory References</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 border border-white/15 text-xs font-semibold uppercase tracking-wider">
              <Scales size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Legal Authorities &amp; Statutes</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Official Statutory References &amp; Governing Laws
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Explore primary legal sources, Republic Acts, constitutional provisions, and Commission on Elections resolutions that govern age thresholds and eligibility standards for the 2026 BSKE.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16 flex-1">
        <Container size="xl">
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Timestamp Strip */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CalendarBlank size={16} aria-hidden="true" className="text-comelec-blue-700" />
                <span>Information Certified &amp; Audited as of:</span>
                <strong className="text-slate-900 font-semibold">{electionConfig.lastUpdated}</strong>
              </div>
              <span className="text-slate-500 font-mono text-xs">Official Gazette &amp; COMELEC Legal Repository</span>
            </div>

            {/* Reference Cards */}
            <div className="space-y-6">
              {LEGAL_REFERENCES.map((ref) => (
                <div
                  key={ref.id}
                  className="p-7 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="gold" size="sm">
                          {ref.category}
                        </Badge>
                        <span className="text-xs text-slate-500 font-medium">
                          {ref.authority} · {ref.promulgationDate}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                        {ref.title}
                      </h2>
                    </div>

                    <a
                      href={ref.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-comelec-blue-50 text-comelec-blue-900 hover:bg-comelec-blue-100 font-semibold text-xs transition-colors shrink-0 border border-comelec-blue-200 min-h-[44px]"
                    >
                      <span>View Official Gazette</span>
                      <ArrowSquareOut size={16} weight="bold" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {ref.summary}
                  </p>

                  {/* Key Provisions */}
                  <div className="p-5 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                      Key Provisions for the 2026 Elections:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
                      {ref.keyProvisions.map((prov, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle size={16} weight="fill" aria-hidden="true" className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{prov}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="p-6 sm:p-7 rounded-xl bg-amber-50 border-2 border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2 shadow-sm">
              <h3 className="font-semibold text-amber-900 text-base">
                Statutory Supremacy Clause
              </h3>
              <p className="leading-relaxed font-normal">
                In the event of any discrepancies between informational content on this civic website and the official text of statutory enactments or officially promulgated Commission on Elections resolutions, the official laws and resolutions published in the Official Gazette or official COMELEC repository shall legally prevail.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
