"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Warning, Info, Users, ShieldCheck, Bank, Buildings } from "@phosphor-icons/react";
import { Container } from "../ui/Container";

export function VoterAgeExplainer() {
  return (
    <section className="py-20 bg-white font-sans border-b border-slate-200">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-comelec-blue-700 bg-comelec-blue-50 px-3.5 py-1 rounded-full border border-comelec-blue-200 inline-block">
              Statutory Civic Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              2026 Sangguniang Kabataan Age Matrix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore your statutory voting rights and candidacy qualifications across all 6 key electoral brackets under RA 10742 &amp; RA 11768.
            </p>
          </div>

          <Link
            href="/qualifications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-comelec-blue-800 hover:text-comelec-blue-600 group"
          >
            <span>Full Qualification Criteria</span>
            <ArrowRight size={16} weight="fill" aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="rounded-xl p-6 sm:p-7 border border-slate-200 bg-slate-50/70 hover:bg-slate-50 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">
                  Ages 15 to 30
                </span>
                <span className="text-xs text-slate-400 font-mono">KK Registry</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Katipunan ng Kabataan Voter</h3>
              <p className="text-xs text-slate-500 font-mono">Born Nov 3, 1995 to Nov 2, 2011</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                All Filipino citizens residing in their Himamaylan barangay for at least 6 months who are 15–30 years old on Nov 2, 2026 are entitled to vote for SK Chairperson and Kagawad.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 mt-4 flex items-center gap-1.5 text-xs font-semibold text-sky-700">
              <CheckCircle size={16} weight="fill" aria-hidden="true" />
              <span>SK Ballot Entitled</span>
            </div>
          </div>

          <div className="rounded-xl p-6 sm:p-7 border-2 border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50/70 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-600 text-white">
                  Ages 18 to 24
                </span>
                <span className="text-xs text-emerald-700 font-mono font-semibold">RA 10742 §10</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">SK Elective Candidate</h3>
              <p className="text-xs text-emerald-800 font-mono font-semibold">Born Nov 3, 2001 to Nov 2, 2008</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Qualified to run for SK Chairperson or Kagawad. Must be at least 18 and NOT 25 years old on Election Day, with 1-year residency, literacy, and anti-dynasty clearance.
              </p>
            </div>
            <div className="pt-4 border-t border-emerald-200 mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
              <CheckCircle size={16} weight="fill" aria-hidden="true" />
              <span>Eligible to File COC</span>
            </div>
          </div>

          <div className="rounded-xl p-6 sm:p-7 border border-slate-200 bg-slate-50/70 hover:bg-slate-50 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-comelec-blue-100 text-comelec-blue-900">
                  Ages 15 to 17
                </span>
                <span className="text-xs text-slate-400 font-mono">1 Ballot</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Youth-Only Ballot</h3>
              <p className="text-xs text-slate-500 font-mono">Born Nov 3, 2008 to Nov 2, 2011</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Youth aged 15–17 receive one official ballot exclusively for SK Chairperson and 7 Kagawad. Not yet eligible to vote for Punong Barangay or regular council members.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 mt-4 flex items-center gap-1.5 text-xs font-semibold text-comelec-blue-800">
              <Info size={16} weight="fill" aria-hidden="true" />
              <span>1 Ballot (SK Only)</span>
            </div>
          </div>

          <div className="rounded-xl p-6 sm:p-7 border border-slate-200 bg-slate-50/70 hover:bg-slate-50 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900">
                  Ages 18 to 30
                </span>
                <span className="text-xs text-slate-400 font-mono">2 Ballots</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Dual-Ballot Voter</h3>
              <p className="text-xs text-slate-500 font-mono">Born Nov 3, 1995 to Nov 2, 2008</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Registered youth aged 18–30 receive TWO ballots on Nov 2, 2026: (1) Sangguniang Kabataan ballot and (2) Regular Sangguniang Barangay ballot.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 mt-4 flex items-center gap-1.5 text-xs font-semibold text-indigo-800">
              <CheckCircle size={16} weight="fill" aria-hidden="true" />
              <span>Dual Ballot (SK + Barangay)</span>
            </div>
          </div>

          <div className="rounded-xl p-6 sm:p-7 border border-amber-200 bg-amber-50/40 hover:bg-amber-50/60 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-200 text-amber-900">
                  Strict Legal Rule
                </span>
                <span className="text-xs text-amber-800 font-mono">RA 10742 §10</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Anti-Dynasty Clause</h3>
              <p className="text-xs text-amber-800 font-mono">2nd Degree Consanguinity/Affinity</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                SK candidates must NOT be related within the 2nd civil degree to any incumbent elected regional, provincial, city, municipal, or barangay official in Himamaylan City.
              </p>
            </div>
            <div className="pt-4 border-t border-amber-200 mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-900">
              <Warning size={16} weight="fill" aria-hidden="true" />
              <span>Checked on COC Filing</span>
            </div>
          </div>

          <div className="rounded-xl p-6 sm:p-7 border border-comelec-blue-200 bg-comelec-blue-50/40 hover:bg-comelec-blue-50/60 flex flex-col justify-between transition-all duration-200 shadow-card hover:shadow-card-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-comelec-blue-200 text-comelec-blue-950">
                  19 Barangays
                </span>
                <span className="text-xs text-comelec-blue-800 font-mono">5th District</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Himamaylan Jurisdiction</h3>
              <p className="text-xs text-comelec-blue-800 font-mono">Negros Occidental</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Covers all 19 Himamaylan barangays (Aguisan, Buenavista, Cabadiangan, Carabalan, Mambagid, Poblacion 1–4, San Antonio, Sara-et, Su-ay, Talaban, and more).
              </p>
            </div>
            <div className="pt-4 border-t border-comelec-blue-200 mt-4 flex items-center gap-1.5 text-xs font-semibold text-comelec-blue-900">
              <Buildings size={16} weight="fill" aria-hidden="true" />
              <span>Office of the Election Officer</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
