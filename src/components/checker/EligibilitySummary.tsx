"use client";

import React from "react";
import { EligibilityEvaluation } from "@/lib/eligibility";
import { Badge } from "../ui/Badge";

export interface EligibilitySummaryProps {
  evaluation?: EligibilityEvaluation;
  years?: number;
  months?: number;
  days?: number;
  isVoterEligible?: boolean;
  isCandidateEligible?: boolean;
}

export function EligibilitySummary({
  evaluation,
  years = 21,
  months = 0,
  days = 0,
  isVoterEligible,
  isCandidateEligible,
}: EligibilitySummaryProps) {
  const finalYears = evaluation?.age?.years ?? years;
  const finalMonths = evaluation?.age?.months ?? months;
  const finalDays = evaluation?.age?.days ?? days;

  const voterEligible = evaluation
    ? evaluation.voter.eligible
    : isVoterEligible !== undefined
    ? isVoterEligible
    : finalYears >= 15 && finalYears <= 30;

  const candidateEligible = evaluation
    ? evaluation.candidate.eligible
    : isCandidateEligible !== undefined
    ? isCandidateEligible
    : finalYears >= 18 && finalYears <= 24;

  const regularVoterEligible = evaluation
    ? evaluation.regularBarangayVoter.eligible
    : finalYears >= 18;

  const candidateStatusLabel = candidateEligible
    ? "Within Range"
    : finalYears < 18
    ? "Below Age Limit (<18)"
    : "Above Age Limit (25+)";

  const rows = [
    {
      role: "SK Youth Voter",
      criteria: "15 to 30 years old on Nov 2, 2026",
      userValue: `${finalYears} years old (${finalMonths}m, ${finalDays}d)`,
      eligible: voterEligible,
      statusLabel: voterEligible ? "Within Range" : "Outside Range",
      badgeVariant: voterEligible ? ("success" as const) : ("danger" as const),
      note: "Elects SK Chairperson and 7 Kagawad",
    },
    {
      role: "SK Candidate (Chair / Kagawad)",
      criteria: "18 to 24 years old on Nov 2, 2026",
      userValue: `${finalYears} years old on Nov 2, 2026`,
      eligible: candidateEligible,
      statusLabel: candidateStatusLabel,
      badgeVariant: candidateEligible ? ("success" as const) : ("danger" as const),
      note: "Subject to 1-yr residency & anti-dynasty rules",
    },
    {
      role: "Regular Barangay Council Voter",
      criteria: "18 years old and above on Nov 2, 2026",
      userValue: `${finalYears} years old on Nov 2, 2026`,
      eligible: regularVoterEligible,
      statusLabel: regularVoterEligible ? "Eligible (18+)" : "Underage (<18)",
      badgeVariant: regularVoterEligible ? ("success" as const) : ("neutral" as const),
      note: "Votes for Punong Barangay & 7 Barangay Kagawad",
    },
    {
      role: "Barangay Residency Requirement",
      criteria: "Voter: 6+ months / Candidate: 1+ year",
      userValue: "Requires verification with Barangay / COMELEC",
      eligible: null,
      statusLabel: "Must Be Verified",
      badgeVariant: "warning" as const,
      note: "Actual physical residence in Himamaylan City",
    },
    {
      role: "COMELEC Voter Registration",
      criteria: "Active registration in official COMELEC book",
      userValue: "Requires active registration with Election Officer",
      eligible: null,
      statusLabel: "Must Be Verified",
      badgeVariant: "warning" as const,
      note: "Visit Himamaylan City Election Office",
    },
  ];

  return (
    <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-4">
      <div>
        <h3 className="font-semibold text-slate-900 text-lg sm:text-xl">
          Comprehensive Eligibility Summary Table
        </h3>
        <p className="text-xs text-slate-500">
          Side-by-side evaluation of statutory qualifications for the November 2, 2026 Elections.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-200 bg-slate-50/80 text-slate-700">
              <th className="py-3 px-3.5 font-semibold">Electoral Role / Requirement</th>
              <th className="py-3 px-3 font-semibold hidden sm:table-cell">Legal Requirement</th>
              <th className="py-3 px-3 font-semibold">Your Status</th>
              <th className="py-3 px-3 font-semibold text-center">Evaluation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-3.5">
                  <p className="font-semibold text-slate-900">{row.role}</p>
                  <p className="text-xs text-slate-500 sm:hidden mt-0.5">{row.criteria}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>
                </td>
                <td className="py-3.5 px-3 text-slate-600 font-medium hidden sm:table-cell">
                  {row.criteria}
                </td>
                <td className="py-3.5 px-3 font-semibold text-slate-800">
                  {row.userValue}
                </td>
                <td className="py-3.5 px-3 text-center">
                  <Badge variant={row.badgeVariant} size="sm">
                    {row.statusLabel}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
        * Note: Age qualification is mathematically computed based on your entered date of birth. Other criteria (residency, registration, and citizenship) must be confirmed with the Office of the Election Officer in Himamaylan City.
      </div>
    </div>
  );
}
