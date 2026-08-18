"use client";

import React, { useMemo } from "react";
import { User, Sparkle, ShieldCheck, CheckCircle } from "@phosphor-icons/react";

export interface AgeRangeTimelineProps {
  currentAge: number;
}

export function AgeRangeTimeline({ currentAge }: AgeRangeTimelineProps) {

  const minScale = 12;
  const maxScale = 34;

  const positionPercent = useMemo(() => {
    const clamped = Math.max(minScale, Math.min(maxScale, currentAge));
    return ((clamped - minScale) / (maxScale - minScale)) * 100;
  }, [currentAge]);

  const bracketInfo = useMemo(() => {
    if (currentAge < 15) {
      return {
        label: "Under Minimum SK Age",
        desc: "Below 15 on Election Day (Ineligible for 2026)",
        badgeClass: "bg-slate-100 text-slate-700 border-slate-300",
        color: "text-slate-600",
      };
    }
    if (currentAge >= 15 && currentAge <= 17) {
      return {
        label: "SK Youth Voter Only (15–17)",
        desc: "Eligible for Katipunan ng Kabataan Voter Registration",
        badgeClass: "bg-blue-100 text-blue-900 border-blue-300",
        color: "text-blue-700",
      };
    }
    if (currentAge >= 18 && currentAge <= 24) {
      return {
        label: "Dual Eligible: Voter + Candidate (18–24)",
        desc: "Eligible for SK Voter & Elective Office (Chair/Kagawad)",
        badgeClass: "bg-gradient-to-r from-comelec-gold-400 to-amber-400 text-slate-950 border-amber-500 font-semibold shadow-sm",
        color: "text-amber-600",
      };
    }
    if (currentAge >= 25 && currentAge <= 30) {
      return {
        label: "SK Youth Voter (25–30)",
        desc: "Eligible for KK Voter (Above Candidate Age Ceiling)",
        badgeClass: "bg-blue-100 text-blue-900 border-blue-300",
        color: "text-blue-700",
      };
    }
    return {
      label: "Above SK Age Limit (31+)",
      desc: "Regular Sangguniang Barangay Voter Only",
      badgeClass: "bg-slate-100 text-slate-700 border-slate-300",
      color: "text-slate-600",
    };
  }, [currentAge]);

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-card space-y-7 @container">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900 text-base sm:text-lg tracking-tight">
              Statutory Age Spectrum &amp; Eligibility Map
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Visual comparative timeline of Republic Act 10742 &amp; RA 11768 youth electoral age brackets.
          </p>
        </div>

        <div className={`px-3.5 py-1.5 rounded-full text-xs border font-semibold self-start sm:self-auto ${bracketInfo.badgeClass}`}>
          {bracketInfo.label}
        </div>
      </div>

      <div className="space-y-6 pt-2">

        <div className="relative w-full h-8">
          <div
            className="absolute bottom-0 -ml-16 sm:-ml-20 transition-all duration-500 ease-out z-20 flex flex-col items-center pointer-events-none"
            style={{ left: `${positionPercent}%` }}
          >
            <div className="px-3 py-1 rounded-lg bg-comelec-blue-950 text-white text-xs font-semibold font-mono shadow-md border border-comelec-gold-400/60 whitespace-nowrap flex items-center gap-1.5">
              <User size={14} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>You: {currentAge} yrs</span>
            </div>
            <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-comelec-blue-950" />
          </div>
        </div>

        <div className="relative w-full h-10 rounded-xl overflow-hidden bg-slate-200 flex border-2 border-slate-300 shadow-inner">

          <div
            style={{ width: `${((15 - minScale) / (maxScale - minScale)) * 100}%` }}
            className="h-full bg-slate-200/90 flex flex-col items-center justify-center text-xs font-semibold text-slate-500 border-r border-slate-300 select-none"
            title="Under 15: Below youth voter age"
          >
            <span>&lt; 15</span>
            <span className="text-xs text-slate-400 hidden @sm:inline">Below SK</span>
          </div>

          <div
            style={{ width: `${((18 - 15) / (maxScale - minScale)) * 100}%` }}
            className={`h-full flex flex-col items-center justify-center text-xs font-semibold border-r border-blue-300 select-none transition-colors ${
              currentAge >= 15 && currentAge <= 17
                ? "bg-blue-200 text-blue-950 font-bold ring-2 ring-inset ring-blue-500"
                : "bg-blue-100 text-blue-800"
            }`}
            title="15–17: Katipunan ng Kabataan Voter"
          >
            <span>15–17</span>
            <span className="text-xs text-blue-600 hidden @sm:inline font-semibold">Voter Only</span>
          </div>

          <div
            style={{ width: `${((25 - 18) / (maxScale - minScale)) * 100}%` }}
            className={`h-full flex flex-col items-center justify-center border-r border-amber-600 select-none transition-all shadow-inner ${
              currentAge >= 18 && currentAge <= 24
                ? "bg-gradient-to-r from-comelec-blue-900 via-comelec-blue-800 to-comelec-blue-900 text-comelec-gold-300 ring-2 ring-inset ring-comelec-gold-400 font-bold"
                : "bg-comelec-blue-900 text-white font-semibold"
            }`}
            title="18–24: Voter & Candidate Eligible Range"
          >
            <div className="flex items-center gap-1">
              <Sparkle size={12} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span className="text-xs font-bold">18–24</span>
            </div>
            <span className="text-xs text-comelec-gold-300 hidden @sm:inline uppercase tracking-tighter">
              Voter &amp; Candidate
            </span>
          </div>

          <div
            style={{ width: `${((31 - 25) / (maxScale - minScale)) * 100}%` }}
            className={`h-full flex flex-col items-center justify-center text-xs font-semibold border-r border-slate-300 select-none transition-colors ${
              currentAge >= 25 && currentAge <= 30
                ? "bg-blue-200 text-blue-950 font-bold ring-2 ring-inset ring-blue-500"
                : "bg-blue-100 text-blue-800"
            }`}
            title="25–30: SK Youth Voter (Above candidate limit)"
          >
            <span>25–30</span>
            <span className="text-xs text-blue-600 hidden @sm:inline font-semibold">Voter Only</span>
          </div>

          <div
            style={{ width: `${((maxScale - 31) / (maxScale - minScale)) * 100}%` }}
            className="h-full bg-slate-200/90 flex flex-col items-center justify-center text-xs font-semibold text-slate-500 select-none"
            title="31+: Regular Barangay Voter"
          >
            <span>31+</span>
            <span className="text-xs text-slate-400 hidden @sm:inline">Regular</span>
          </div>
        </div>

        <div className="relative w-full text-xs font-mono font-semibold text-slate-500 h-5">
          <span
            className="absolute -translate-x-1/2"
            style={{ left: `${((15 - minScale) / (maxScale - minScale)) * 100}%` }}
          >
            15
          </span>
          <span
            className="absolute -translate-x-1/2 text-comelec-blue-900 font-bold text-xs"
            style={{ left: `${((18 - minScale) / (maxScale - minScale)) * 100}%` }}
          >
            18
          </span>
          <span
            className="absolute -translate-x-1/2 text-comelec-blue-900 font-bold text-xs"
            style={{ left: `${((24 - minScale) / (maxScale - minScale)) * 100}%` }}
          >
            24
          </span>
          <span
            className="absolute -translate-x-1/2"
            style={{ left: `${((30 - minScale) / (maxScale - minScale)) * 100}%` }}
          >
            30
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-950">
                <CheckCircle size={16} weight="fill" aria-hidden="true" className="text-blue-600" />
                SK Youth Voter Range
              </span>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                15 to 30 Years Old
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Katipunan ng Kabataan (KK):</strong> All youth registered in the barangay who are 15 to 30 on Election Day are legally entitled to vote for SK Chairperson and 7 Kagawads (RA 10742 §3).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50/80 to-white border border-amber-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-950">
                <ShieldCheck size={16} weight="fill" aria-hidden="true" className="text-amber-600" />
                SK Candidate Range
              </span>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                18 to 24 Years Old
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Elective Youth Officials:</strong> Must have reached 18th birthday and must NOT be 25 years old on Election Day. Candidates 25 or older are disqualified from running (RA 10742 §10).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
