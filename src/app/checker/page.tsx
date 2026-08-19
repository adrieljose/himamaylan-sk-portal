import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CaretRight, House, Sparkle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { EligibilityChecker } from "@/components/checker/EligibilityChecker";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "SK Age & Eligibility Checker",
  description:
    "Interactive statutory age and eligibility calculator for youth voters and candidates in Himamaylan City for the 2026 Barangay and Sangguniang Kabataan Elections.",
};

export default function CheckerPage() {
  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">

      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link
              href="/"
              className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors font-medium text-slate-600"
            >
              <House size={16} aria-hidden="true" weight="fill" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" weight="fill" />
            <span className="text-comelec-blue-950 font-semibold">2026 SK Age &amp; Eligibility Checker</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-b from-comelec-blue-950 to-comelec-blue-900 text-white py-12 sm:py-16 border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 text-xs font-semibold border border-white/15">
              <Sparkle size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Official Statutory Verification Engine</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              2026 SK Age &amp; Eligibility Checker
            </h1>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              Determine your precise age as of <strong>November 2, 2026</strong>. Instant evaluation for Katipunan ng Kabataan voting (ages 15–30) and Sangguniang Kabataan elective candidacy (ages 18–24) in Himamaylan City.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 flex-1">
        <Container size="xl">
          <Suspense
            fallback={
              <div className="p-12 text-center text-slate-500 font-medium bg-white rounded-xl border border-slate-200 shadow-sm">
                Loading 2026 SK Eligibility Calculator...
              </div>
            }
          >
            <EligibilityChecker />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}
