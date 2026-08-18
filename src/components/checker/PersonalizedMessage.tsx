import React from "react";
import { Info, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { AgeCategory } from "@/lib/eligibility";
import { clsx } from "clsx";

export interface PersonalizedMessageProps {
  category: AgeCategory;
  ageYears?: number;
  message?: string;
  headline?: string;
  explanation?: string;
  nextSteps?: string[];
  statutoryNote?: string;
}

export function PersonalizedMessage({
  category,
  ageYears,
  message,
  headline,
  explanation,
  nextSteps,
  statutoryNote,
}: PersonalizedMessageProps) {
  const getOfficialCopy = () => {
    switch (category) {
      case "BELOW_SK":
        return {
          title: "Future Youth Voter (Under 15)",
          copy: "You are below the applicable SK youth age range for the 2026 elections. The minimum age for SK voter registration is 15.",
          bg: "bg-slate-50 border-slate-200",
          accent: "text-slate-900",
        };
      case "VOTER_ONLY":
        return {
          title: "SK Youth Voter (Age 15–17)",
          copy: "You are within the applicable SK voter age range. You are below the SK candidate age range of 18–24.",
          bg: "bg-blue-50/80 border-blue-200",
          accent: "text-blue-950",
        };
      case "BOTH":
        return {
          title: "Full Youth Electoral & Candidacy Eligibility (Age 18–24)",
          copy: "You are within both the applicable SK voter and candidate age ranges. Other qualifications also apply.",
          bg: "bg-emerald-50/80 border-emerald-300",
          accent: "text-emerald-950",
        };
      case "VOTER_ABOVE_CANDIDATE":
        return {
          title: "Senior Youth Voter (Age 25–30)",
          copy: "You are within the applicable SK voter age range. You are above the SK candidate age range, which ends at 24.",
          bg: "bg-blue-50/80 border-blue-200",
          accent: "text-blue-950",
        };
      case "ABOVE_SK":
        return {
          title: "Regular Barangay Voter (Age 31+)",
          copy: "You are above the applicable SK youth age range for the 2026 elections.",
          bg: "bg-slate-50 border-slate-200",
          accent: "text-slate-900",
        };
    }
  };

  const official = getOfficialCopy();

  return (
    <div className={clsx("p-6 sm:p-7 rounded-xl border shadow-card space-y-3", official.bg)}>
      <div className="flex items-start gap-3.5">
        <div className="w-8 h-8 rounded-lg bg-white shadow-subtle flex items-center justify-center text-blue-900 shrink-0 mt-0.5">
          <Info size={20} weight="regular" aria-hidden="true" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h3 className={clsx("text-base sm:text-lg font-semibold", official.accent)}>
            {headline || official.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {explanation || message || official.copy}
          </p>
        </div>
      </div>

      {nextSteps && nextSteps.length > 0 && (
        <div className="pt-3 border-t border-black/5 space-y-2">
          <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider block">
            Recommended Action Steps:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {nextSteps.map((step, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-white/80 border border-slate-200 flex items-start gap-2 text-xs text-slate-700 font-medium"
              >
                <CheckCircle size={16} weight="fill" aria-hidden="true" className="text-emerald-600 shrink-0 mt-0.5" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {statutoryNote && (
        <div className="text-xs text-slate-500 font-normal italic pt-1">
          {statutoryNote}
        </div>
      )}
    </div>
  );
}
