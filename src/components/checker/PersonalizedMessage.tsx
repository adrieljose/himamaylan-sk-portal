import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AgeCategory } from "@/lib/eligibility";

export interface PersonalizedMessageProps {
  category: AgeCategory;
  ageYears?: number;
  message?: string;
  headline?: string;
  explanation?: string;
  nextSteps?: string[];
  statutoryNote?: string;
}

/**
 * Copy for each age bracket.
 *
 * Editorial rule applied here: every bracket, including the two that fall
 * outside the SK range entirely, states what the person CAN do before it states
 * what they cannot. A public service that only tells a 31-year-old "no" has
 * failed them; they are still a barangay voter, and that is the useful fact.
 */
const COPY: Record<
  AgeCategory,
  { title: string; body: string; action?: { label: string; href: string } }
> = {
  BELOW_SK: {
    title: "You are not yet old enough for the 2026 SK elections",
    body: "Registration with the Katipunan ng Kabataan opens at 15. You will be eligible for a future SK election cycle. The elections are held every three years.",
    action: { label: "Read the age requirements", href: "/qualifications" },
  },
  VOTER_ONLY: {
    title: "You can vote for your SK council",
    body: "You are within the Katipunan ng Kabataan voting range. You will receive one ballot, for SK Chairperson and Kagawad. Standing as a candidate opens at 18.",
    action: { label: "See what to bring on election day", href: "/election-info" },
  },
  BOTH: {
    title: "You can both vote and stand for office",
    body: "You are within the voting range and within the candidate age window. Filing a certificate of candidacy also requires one year of barangay residency, literacy, and that you are not related to an incumbent official within the second civil degree.",
    action: { label: "Read the full candidate requirements", href: "/qualifications" },
  },
  VOTER_ABOVE_CANDIDATE: {
    title: "You can vote, but not stand for office",
    body: "You remain a member of the Katipunan ng Kabataan and will receive two ballots: one for the SK council and one for the barangay council. The candidate age window closes at 24.",
    action: { label: "See what to bring on election day", href: "/election-info" },
  },
  ABOVE_SK: {
    title: "You can vote in the barangay election",
    body: "You are above the Katipunan ng Kabataan age range, so you will not receive an SK ballot. You will receive the barangay ballot, for Punong Barangay and Sangguniang Barangay members.",
    action: { label: "Read about the 2026 elections", href: "/election-info" },
  },
};

export function PersonalizedMessage({
  category,
  message,
  headline,
  explanation,
  nextSteps,
  statutoryNote,
}: PersonalizedMessageProps) {
  const copy = COPY[category];

  return (
    <section
      aria-labelledby="what-this-means-heading"
      className="border border-line rounded"
    >
      <div className="px-5 sm:px-6 py-4 border-b border-line bg-surface-subtle">
        <p className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600">
          What this means for you
        </p>
      </div>

      <div className="px-5 sm:px-6 py-6">
        <h3
          id="what-this-means-heading"
          className="font-display font-semibold text-ink-950 text-lg sm:text-xl leading-snug"
        >
          {headline || copy.title}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-ink-700 leading-relaxed prose-civic">
          {explanation || message || copy.body}
        </p>

        {nextSteps && nextSteps.length > 0 && (
          <div className="mt-6">
            <h4 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-3 border-b border-line">
              What to do next
            </h4>
            <ol className="divide-y divide-line">
              {nextSteps.map((step, i) => (
                <li key={i} className="py-3.5 flex gap-4 text-sm text-ink-800 leading-relaxed">
                  <span
                    className="font-display font-semibold text-ink-600 shrink-0"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {copy.action && (
          <Link
            href={copy.action.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 group"
          >
            {copy.action.label}
            <ArrowRight
              size={15}
              weight="bold"
              aria-hidden="true"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        )}

        {statutoryNote && (
          <p className="mt-6 pt-4 border-t border-line text-xs text-ink-600 leading-relaxed">
            {statutoryNote}
          </p>
        )}
      </div>
    </section>
  );
}
