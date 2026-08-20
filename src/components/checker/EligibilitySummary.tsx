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
    ? "Within range"
    : finalYears < 18
    ? "Below 18"
    : "Above 24";

  const rows = [
    {
      role: "SK voter",
      note: "Elects the SK Chairperson and seven Kagawad",
      criteria: "15 to 30 years old on 2 Nov 2026",
      userValue: `${finalYears} years, ${finalMonths} months, ${finalDays} days`,
      statusLabel: voterEligible ? "Within range" : "Outside range",
      badgeVariant: voterEligible ? ("success" as const) : ("danger" as const),
    },
    {
      role: "SK candidate",
      note: "Chairperson or Kagawad",
      criteria: "18 to 24 years old on 2 Nov 2026",
      userValue: `${finalYears} years old`,
      statusLabel: candidateStatusLabel,
      badgeVariant: candidateEligible ? ("success" as const) : ("danger" as const),
    },
    {
      role: "Barangay council voter",
      note: "Elects the Punong Barangay and seven Kagawad",
      criteria: "18 years and above on 2 Nov 2026",
      userValue: `${finalYears} years old`,
      statusLabel: regularVoterEligible ? "Eligible" : "Below 18",
      badgeVariant: regularVoterEligible ? ("success" as const) : ("neutral" as const),
    },
    {
      role: "Barangay residency",
      note: "Physical residence in Himamaylan City",
      criteria: "Voter: 6 months. Candidate: 1 year",
      userValue: "Cannot be computed from your date of birth",
      statusLabel: "Verify in person",
      badgeVariant: "warning" as const,
    },
    {
      role: "COMELEC registration",
      note: "Active record in the official list of voters",
      criteria: "Registered in your barangay",
      userValue: "Cannot be computed from your date of birth",
      statusLabel: "Verify in person",
      badgeVariant: "warning" as const,
    },
  ];

  return (
    <section aria-labelledby="summary-heading">
      <div className="mb-5">
        <h3
          id="summary-heading"
          className="font-display font-semibold text-ink-950 text-lg sm:text-xl"
        >
          Every requirement, side by side
        </h3>
        <p className="mt-1.5 text-sm text-ink-700">
          Two of these five depend on records this service cannot see.
        </p>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <caption className="sr-only">
            Statutory qualifications for the 2 November 2026 elections evaluated against
            your date of birth.
          </caption>
          <thead>
            <tr className="border-y border-ink-950">
              <th
                scope="col"
                className="py-3.5 pr-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
              >
                Role or requirement
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
              >
                What the law requires
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
              >
                Your position
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
              >
                Result
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.role}>
                <th scope="row" className="py-4 pr-4 align-top">
                  <span className="block font-display font-semibold text-ink-950 text-sm">
                    {row.role}
                  </span>
                  <span className="block mt-1 text-xs text-ink-600 font-normal">
                    {row.note}
                  </span>
                </th>
                <td className="py-4 px-4 align-top text-sm text-ink-700">{row.criteria}</td>
                <td className="py-4 px-4 align-top text-sm text-ink-800">{row.userValue}</td>
                <td className="py-4 pl-4 align-top">
                  <Badge variant={row.badgeVariant} size="sm">
                    {row.statusLabel}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-xs text-ink-600 leading-relaxed prose-civic">
        Age is computed exactly from the date of birth you entered. Residency, registration
        and citizenship must be confirmed with the Office of the Election Officer in
        Himamaylan City.
      </p>
    </section>
  );
}
