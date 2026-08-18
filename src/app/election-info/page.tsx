import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarBlank,
  CheckSquareOffset,
  Users,
  FileText,
  Clock,
  Sparkle,
  CaretRight,
  House,
  ArrowRight,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";
import { electionConfig } from "@/config/election";

export const metadata: Metadata = {
  title: "2026 Barangay & SK Election Information | Himamaylan City COMELEC",
  description:
    "Comprehensive guide to the 2026 Barangay and Sangguniang Kabataan Elections in Himamaylan City: election date, youth council roles, voter registration, and candidate filing.",
};

export default function ElectionInfoPage() {
  const electionMilestones = [
    {
      date: "August – September 2026",
      title: "Katipunan ng Kabataan Voter Registration",
      description: "Official period to register, reactivate, or transfer voter records at the Office of the Election Officer in Himamaylan City Hall.",
      status: "Upcoming",
    },
    {
      date: "October 2026",
      title: "Filing of Certificate of Candidacy (COC)",
      description: "Filing period for youth candidates running for SK Chairperson and SK Kagawad.",
      status: "Scheduled",
    },
    {
      date: "Late October 2026",
      title: "Official Campaign Period",
      description: "Regulated campaign window following COMELEC guidelines, fair election act, and anti-vote buying task force rules.",
      status: "Scheduled",
    },
    {
      date: "November 2, 2026 (Monday)",
      title: "Synchronized BSKE Election Day",
      description: "Polling precincts open across all 19 Himamaylan City barangays. Standard age cutoff for all voters and candidates.",
      status: "ELECTION DAY",
      highlight: true,
    },
  ];

  const skDuties = [
    {
      title: "Comprehensive Barangay Youth Development Plan (CBYDP)",
      description: "Formulates and implements the 3-year youth development agenda aligned with the Philippine Youth Development Plan.",
      icon: FileText,
    },
    {
      title: "10% Youth Budget Autonomy",
      description: "Administers 10% of the Barangay General Fund exclusively for youth development, scholarships, and health programs.",
      icon: Medal,
    },
    {
      title: "Youth Leadership & Civic Deliberation",
      description: "Convenes the Katipunan ng Kabataan assembly at least twice a year to deliberate on community issues.",
      icon: Users,
    },
    {
      title: "Anti-Drug, Environmental & Sports Programs",
      description: "Champions grassroots sports leagues, disaster risk reduction training, environmental cleanup, and anti-drug education.",
      icon: Sparkle,
    },
  ];

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
            <span className="text-comelec-blue-950 font-semibold">2026 Election Information</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 border border-white/15 text-xs font-semibold uppercase tracking-wider">
              <CalendarBlank size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Election Day: {electionConfig.electionDateDisplay}</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              2026 Barangay &amp; Sangguniang Kabataan Elections
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Official guide to the synchronized elections in Himamaylan City, Negros Occidental. Learn about youth governance, election calendars, voter registration, and candidate procedures.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Area */}
      <div className="py-12 sm:py-16 flex-1">
        <Container size="xl">
          <div className="space-y-12 max-w-5xl mx-auto">
            <DisclaimerBanner />

            {/* SECTION 1: WHAT IS THE SYNCHRONIZED ELECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-comelec-blue-700 font-semibold text-xs uppercase tracking-wider">
                  <CheckSquareOffset size={16} aria-hidden="true" />
                  <span>National Civic Event</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  What is the Barangay &amp; SK Election?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  The Barangay and Sangguniang Kabataan Elections (BSKE) are nationwide synchronized elections where grassroots community leaders are chosen.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  In Himamaylan City, voters across all 19 barangays will elect one (1) Punong Barangay, seven (7) Sangguniang Barangay Kagawad, one (1) SK Chairperson, and seven (7) SK Kagawad.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link href="/checker">
                    <Button variant="primary" size="md" icon={<ArrowRight size={16} weight="bold" />}>
                      Check My Eligibility
                    </Button>
                  </Link>
                  <Link href="/barangays">
                    <Button variant="outline" size="md">
                      View 19 Barangays
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-4">
                <h3 className="font-semibold text-slate-900 text-lg border-b border-slate-100 pb-3">
                  Electoral Structure per Barangay
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200">
                    <p className="font-semibold text-blue-950">1 Sangguniang Kabataan Chairperson</p>
                    <p className="text-blue-900/80 text-xs mt-0.5 font-normal">Ex-officio member of the Sangguniang Barangay; leads youth council.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200">
                    <p className="font-semibold text-blue-950">7 Sangguniang Kabataan Kagawad (Councilors)</p>
                    <p className="text-blue-900/80 text-xs mt-0.5 font-normal">Head standing youth committees and craft youth resolutions.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-semibold text-slate-800">Appointed SK Secretary &amp; SK Treasurer</p>
                    <p className="text-slate-500 text-xs mt-0.5 font-normal">Appointed by the Chairperson with the concurrence of the majority of SK members.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: SK DUTIES & RESPONSIBILITIES */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  What Does the Sangguniang Kabataan Do?
                </h2>
                <p className="text-sm text-slate-600 font-normal">
                  Key mandates and civic duties entrusted to elected youth officials under Republic Act No. 10742.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {skDuties.map((duty) => {
                  const Icon = duty.icon;
                  return (
                    <div
                      key={duty.title}
                      className="p-6 rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-3 hover:-translate-y-0.5"
                    >
                      <div className="w-12 h-12 rounded-lg bg-comelec-blue-900 text-comelec-gold-400 flex items-center justify-center shadow-sm">
                        <Icon size={24} aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-slate-900 text-base">{duty.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{duty.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 3: ELECTION CALENDAR & TIMELINE */}
            <div className="p-7 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-card space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-comelec-blue-700 font-semibold text-xs uppercase tracking-wider">
                    <CalendarBlank size={16} aria-hidden="true" />
                    <span>Official BSKE Roadmap</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-1">
                    Key Election Milestones &amp; Timetable
                  </h3>
                </div>
                <Badge variant="gold" size="md">
                  Target: Nov 2, 2026
                </Badge>
              </div>

              <div className="space-y-4">
                {electionMilestones.map((m) => (
                  <div
                    key={m.title}
                    className={`p-5 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      m.highlight
                        ? "bg-gradient-to-r from-comelec-blue-950 to-comelec-blue-900 text-white border-comelec-gold-400 shadow-card"
                        : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            m.highlight
                              ? "bg-comelec-gold-500 text-slate-950 font-bold"
                              : "bg-comelec-blue-100 text-comelec-blue-800"
                          }`}
                        >
                          {m.date}
                        </span>
                      </div>
                      <h4
                        className={`text-base sm:text-lg font-semibold ${
                          m.highlight ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {m.title}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-normal ${
                          m.highlight ? "text-blue-100" : "text-slate-600"
                        }`}
                      >
                        {m.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                          m.highlight
                            ? "bg-comelec-gold-400 text-slate-950"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: VOTER REGISTRATION & CANDIDATE FILING GUIDANCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white p-7 border border-slate-200 shadow-card space-y-3">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 inline-block font-semibold text-xs uppercase tracking-wider">
                  Voter Registration Guide
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  How to Register as an SK Voter
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5 list-disc list-inside leading-relaxed font-normal">
                  <li>Visit the Office of the Election Officer in Himamaylan City Hall.</li>
                  <li>Bring a valid government ID or original PSA Birth Certificate.</li>
                  <li>Have your biometric data (photo, fingerprint, signature) captured.</li>
                  <li>Ensure you are registered before the official registration deadline.</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-7 border border-slate-200 shadow-card space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 inline-block font-semibold text-xs uppercase tracking-wider">
                  Candidate Filing Guide
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  Filing a Certificate of Candidacy (COC)
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5 list-disc list-inside leading-relaxed font-normal">
                  <li>Submit 5 sworn copies of the official COMELEC COC form.</li>
                  <li>Attach an official PSA Birth Certificate proving age (18–24 on Nov 2, 2026).</li>
                  <li>Provide Barangay Certificate of Residency proving at least 1-year residency.</li>
                  <li>Execute sworn affidavit of compliance with anti-dynasty requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
