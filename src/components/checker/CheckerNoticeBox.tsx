"use client";

import React from "react";
import { Info, ShieldWarning, FileText, CheckCircle, WarningCircle } from "@phosphor-icons/react";

export function CheckerNoticeBox() {
  return (
    <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-amber-50/70 to-orange-50/60 p-5 sm:p-7 shadow-sm space-y-5 text-slate-800">

      <div className="flex items-start gap-3.5 sm:gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
          <ShieldWarning size={24} weight="fill" aria-hidden="true" />
        </div>
        <div className="space-y-1 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300">
              Important Advisory
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
            This Checker is for Age &amp; Qualification Verification Only
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            This tool computes your exact age and evaluates statutory eligibility under <strong>Republic Act No. 10742</strong> (as amended by <strong>RA 11768</strong>).
            <strong className="text-amber-950"> This is NOT the official COMELEC Certified List of Voters (CLOV) or Precinct Masterlist.</strong> To vote on Election Day (<strong>November 2, 2026</strong>), you must have an active voter registration record with the Office of the Election Officer — Himamaylan City COMELEC.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-white border border-amber-200/90 p-4 sm:p-5 shadow-inner space-y-3">
        <div className="flex items-center gap-2.5 text-comelec-blue-900">
          <FileText size={20} weight="fill" className="text-comelec-blue-700 shrink-0" aria-hidden="true" />
          <h4 className="text-sm sm:text-base font-bold text-slate-900">
            🗳️ Dual Ballot Privilege: Voters Aged 18 to 30 Receive 2 Separate Ballots
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          If you are between <strong>18 and 30 years old on Election Day (Nov 2, 2026)</strong> — <em>including if you are currently or will be exactly 30 years old on that day</em> — you are a dual-qualified voter and will be issued <strong>TWO (2) OFFICIAL BALLOTS</strong> at your polling precinct:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">

          <div className="p-3.5 rounded-lg bg-comelec-blue-50/80 border border-comelec-blue-200 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-comelec-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <div className="text-xs">
              <span className="font-bold text-comelec-blue-950 block text-xs sm:text-sm">
                SK Youth Ballot (Red/Blue)
              </span>
              <span className="text-slate-600 font-normal">
                Elects <strong>1 SK Chairperson</strong> and <strong>7 SK Kagawad</strong> for your barangay youth council.
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-200 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <div className="text-xs">
              <span className="font-bold text-emerald-950 block text-xs sm:text-sm">
                Barangay Ballot (Regular)
              </span>
              <span className="text-slate-600 font-normal">
                Elects <strong>1 Punong Barangay (Captain)</strong> and <strong>7 Sangguniang Barangay Members</strong>.
              </span>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-medium border-t border-slate-100">
          <span>• <strong>Ages 15–17:</strong> Receives ONLY the SK Youth Ballot (1 ballot)</span>
          <span>• <strong>Ages 18–30 (including 30):</strong> Receives BOTH SK &amp; Barangay Ballots (2 ballots)</span>
          <span>• <strong>Ages 31 &amp; Above:</strong> Receives ONLY the Regular Barangay Ballot (1 ballot)</span>
        </div>
      </div>
    </div>
  );
}
