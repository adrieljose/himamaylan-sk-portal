"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scales, Medal, Warning, CheckCircle } from "@phosphor-icons/react";
import { Container } from "../ui/Container";

export function CandidateAgeExplainer() {
  const requirements = [
    {
      title: "1. Filipino Citizen",
      desc: "Must be a natural-born citizen of the Philippines.",
    },
    {
      title: "2. 1-Year Barangay Residency",
      desc: "Must have resided in the barangay for at least 1 continuous year prior to Election Day.",
    },
    {
      title: "3. Literacy Requirement",
      desc: "Must be able to read and write Filipino, English, or the local Hiligaynon dialect.",
    },
    {
      title: "4. Anti-Dynasty Provision",
      desc: "Must NOT be related within the 2nd civil degree of consanguinity or affinity to any incumbent elected official in the locality.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white font-sans relative overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-comelec-gold-400 bg-comelec-gold-500/20 px-3 py-1 rounded-full border border-comelec-gold-400/40 inline-block">
              Youth Leadership &amp; Candidacy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Can I Run for SK Chairperson or Kagawad?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Under Section 10 of Republic Act No. 10742, candidates must be strictly between 18 and 24 years of age on Election Day.
            </p>
          </div>

          <Link
            href="/qualifications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-comelec-gold-300 hover:text-comelec-gold-200 group"
          >
            <span>View Complete Candidate Rules</span>
            <ArrowRight size={16} weight="fill" aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dual Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Age Window (18–24) */}
          <div className="rounded-xl bg-gradient-to-br from-comelec-blue-950 to-slate-950 p-7 sm:p-8 border border-comelec-blue-700/60 shadow-floating flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                  Strict Legal Age Window
                </span>
                <span className="text-xs text-slate-400 font-mono">RA 10742 Sec. 10</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                18 to 24 Years Old on Election Day
              </h3>
              <p className="text-xs text-comelec-gold-300 font-mono mb-4">
                Born between November 3, 2001 and November 2, 2008
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                You must have reached your 18th birthday on or before November 2, 2026, and must NOT have reached your 25th birthday on Election Day. If you turn 25 on or before Nov 2, 2026, you are ineligible to file a COC for SK office.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldCheck size={20} weight="fill" aria-hidden="true" className="text-comelec-gold-400 shrink-0 mt-0.5" />
              <span>
                Under RA 11768, elected SK officials who turn 25 during their term are permitted to finish their statutory term of office without disqualification.
              </span>
            </div>
          </div>

          {/* Card 2: Essential Non-Age Qualifications */}
          <div className="rounded-xl bg-slate-950/80 p-7 sm:p-8 border border-slate-800 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-comelec-gold-400 bg-comelec-gold-500/20 px-3 py-1 rounded-full border border-comelec-gold-400/40">
                  Essential Requirements
                </span>
                <span className="text-xs text-slate-400 font-mono">Anti-Dynasty Clause</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                What Else is Required to File a COC?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {requirements.map((r) => (
                  <div key={r.title} className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="text-xs font-semibold text-comelec-gold-300 mb-1">{r.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Strictly enforced by COMELEC Himamaylan</span>
              <Link
                href="/qualifications"
                className="font-semibold text-comelec-gold-300 hover:text-white underline underline-offset-4"
              >
                Learn About Anti-Dynasty Rules →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
