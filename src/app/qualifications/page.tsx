import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  CheckCircle,
  Warning,
  Scales,
  BookOpen,
  ArrowRight,
  CaretRight,
  House,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";

export const metadata: Metadata = {
  title: "SK Qualifications & Legal Criteria | Himamaylan City COMELEC",
  description:
    "Official legal qualifications for SK voters (15–30) and SK candidates (18–24) under RA 10742 and RA 11768 for the 2026 Barangay and Sangguniang Kabataan Elections.",
};

export default function QualificationsPage() {
  const voterRequirements = [
    {
      title: "Age Requirement",
      standard: "At least 15 but not more than 30 years old on November 2, 2026",
      statute: "RA 10742 Section 3",
      details: "Must reach 15 on or before election day and must not have celebrated 31st birthday on or before election day.",
    },
    {
      title: "Philippine Citizenship",
      standard: "Citizen of the Republic of the Philippines",
      statute: "1987 Constitution Art. V",
      details: "Must be a Filipino citizen (natural-born or naturalized) in full possession of civil and political rights.",
    },
    {
      title: "Barangay Residency",
      standard: "At least six (6) months actual residence in the barangay",
      statute: "RA 10742 Section 3",
      details: "Must physically reside in the specific Himamaylan City barangay where they intend to vote for at least 6 months immediately preceding election day.",
    },
    {
      title: "Katipunan ng Kabataan Registration",
      standard: "Duly registered in the certified COMELEC KK voter list",
      statute: "COMELEC En Banc Resolution",
      details: "Must be listed in the official Precinct Book of Voters maintained by the Himamaylan City Office of the Election Officer.",
    },
    {
      title: "Absence of Disqualifications",
      standard: "Not otherwise disqualified by prevailing election laws",
      statute: "Omnibus Election Code",
      details: "Must not have been declared insane or incompetent by competent authority, nor convicted by final judgment of an offense punishable by imprisonment of not less than 1 year.",
    },
  ];

  const candidateRequirements = [
    {
      title: "Candidate Age Standard",
      standard: "At least 18 but not more than 24 years old on November 2, 2026",
      statute: "RA 10742 Section 10(b)",
      details: "Must have reached 18th birthday on or before Nov 2, 2026 and must not have turned 25 years old on or before Nov 2, 2026.",
    },
    {
      title: "Barangay Residency Duration",
      standard: "At least one (1) continuous year of residence in the barangay",
      statute: "RA 10742 Section 10(c)",
      details: "Must have resided in the barangay for at least 1 continuous year immediately preceding the date of the election.",
    },
    {
      title: "Katipunan ng Kabataan Membership",
      standard: "Qualified and registered member of the Katipunan ng Kabataan",
      statute: "RA 10742 Section 10(a)",
      details: "Must be an active registered voter in the barangay's youth assembly.",
    },
    {
      title: "Literacy Requirement",
      standard: "Able to read and write Filipino, English, or Hiligaynon",
      statute: "RA 10742 Section 10(d)",
      details: "Must possess basic literacy to read ordinances, deliberate on youth resolutions, and manage youth governance.",
    },
    {
      title: "Anti-Political Dynasty Rule",
      standard: "Must NOT be related within 2nd civil degree to incumbent officials",
      statute: "RA 10742 Section 10(e)",
      details: "Must not be related by consanguinity or affinity up to the 2nd degree (spouse, parent, child, sibling, grandparent, grandchild) to any incumbent elected national, regional, provincial, city, municipal, or barangay official in the locality.",
    },
    {
      title: "No Conviction of Moral Turpitude",
      standard: "Not convicted by final judgment of any crime involving moral turpitude",
      statute: "RA 10742 Section 10(f)",
      details: "Must possess a clean legal standing with no disqualifying criminal judgments.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors text-slate-600 font-medium">
              <House size={16} aria-hidden="true" weight="fill" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" weight="fill" />
            <span className="text-comelec-blue-950 font-semibold">SK Qualifications Guide</span>
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
              <span>Statutory Requirements under RA 10742 &amp; RA 11768</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Official SK Voter &amp; Candidate Qualifications
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Complete civic and legal guide to the statutory standards governing voting rights in the Katipunan ng Kabataan and eligibility to run for Sangguniang Kabataan elective positions in Himamaylan City.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16 flex-1">
        <Container size="xl">
          <div className="space-y-12 max-w-5xl mx-auto">
            <DisclaimerBanner />

            {/* Quick Action Checker CTA Card */}
            <div className="rounded-xl bg-gradient-to-br from-comelec-blue-950 via-comelec-blue-900 to-slate-950 p-6 sm:p-8 text-white border border-comelec-blue-700/60 shadow-floating flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Unsure if your birthdate qualifies for 2026?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/85">
                  Use our interactive calculator to compute your exact age on November 2, 2026.
                </p>
              </div>
              <Link href="/checker" className="shrink-0">
                <Button variant="gold" size="lg" icon={<ArrowRight size={16} weight="fill" />}>
                  Check My Eligibility
                </Button>
              </Link>
            </div>

            {/* SECTION 1: SK VOTER QUALIFICATIONS */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-comelec-blue-700 font-semibold text-xs uppercase tracking-wider">
                  <UserCheck size={16} aria-hidden="true" weight="fill" />
                  <span>Katipunan ng Kabataan Electorate</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
                  1. Qualifications of an SK Youth Voter (Ages 15–30)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Every Filipino citizen who meets the following criteria is eligible to vote in the Sangguniang Kabataan elections:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {voterRequirements.map((req, idx) => (
                  <div
                    key={req.title}
                    className="p-6 rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-comelec-blue-700 bg-comelec-blue-50 px-2.5 py-0.5 rounded-full border border-comelec-blue-200">
                          Criteria {idx + 1}
                        </span>
                        <span className="text-xs text-slate-400 font-normal">{req.statute}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-lg">{req.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                        {req.standard}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {req.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: SK CANDIDATE QUALIFICATIONS */}
            <div className="space-y-6 pt-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-comelec-gold-700 font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck size={16} aria-hidden="true" weight="fill" />
                  <span>Elective Office Candidacy</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
                  2. Qualifications of an SK Candidate (Ages 18–24)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  To seek election as SK Chairperson or SK Member (Kagawad) in any of the 19 Himamaylan City barangays, an applicant must satisfy all of the following statutory requirements on November 2, 2026:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {candidateRequirements.map((req, idx) => (
                  <div
                    key={req.title}
                    className="p-6 rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-comelec-gold-900 bg-comelec-gold-50 px-2.5 py-0.5 rounded-full border border-comelec-gold-300">
                          Requirement {idx + 1}
                        </span>
                        <span className="text-xs text-slate-400 font-normal">{req.statute}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-lg">{req.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 bg-amber-50/80 p-3 rounded-lg border border-amber-200">
                        {req.standard}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {req.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: ANTI-DYNASTY DEEP DIVE */}
            <div className="p-7 sm:p-8 rounded-xl bg-white border-2 border-slate-300 shadow-card space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-lg bg-rose-100 text-rose-800 shrink-0">
                  <Warning size={24} aria-hidden="true" weight="fill" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Understanding the Anti-Political Dynasty Restriction (2nd Civil Degree)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 10 of Republic Act No. 10742, candidates are legally disqualified if related within the second civil degree of consanguinity (blood) or affinity (marriage) to any incumbent elected official in the locality:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                      <p className="font-semibold text-slate-900 text-sm">Consanguinity (By Blood):</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Parents and Children (1st degree)</li>
                        <li>Brothers and Sisters (2nd degree)</li>
                        <li>Grandparents and Grandchildren (2nd degree)</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                      <p className="font-semibold text-slate-900 text-sm">Affinity (By Marriage):</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Spouse (1st degree)</li>
                        <li>Parents-in-law &amp; Sons/Daughters-in-law (1st degree)</li>
                        <li>Brothers/Sisters-in-law &amp; Grandparents-in-law (2nd degree)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Navigation Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <Link href="/references" className="text-xs font-semibold text-comelec-blue-700 hover:underline">
                ← View Statutory Reference Documents
              </Link>
              <Link href="/checker">
                <Button variant="primary" size="md" icon={<ArrowRight size={16} weight="fill" />}>
                  Check My Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
