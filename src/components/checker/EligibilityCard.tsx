import React from "react";
import { CheckCircle, XCircle, Warning } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";

export interface EligibilityCardProps {
  type: "voter" | "candidate";
  status: "eligible" | "ineligible" | "boundary";
  headline: string;
  reason: string;
  legalCitation: string;
}

/**
 * The single most important surface in the service: it tells someone whether
 * they may vote or stand for office.
 *
 * The status is carried by three redundant signals — a word ("Eligible"), an
 * icon, and a colour — so it survives colour blindness, greyscale printing and
 * screen readers alike. The tinted field is a left rule rather than a filled
 * gradient card, so a "no" reads as a record, not as an alarm.
 */
export function EligibilityCard({
  type,
  status,
  headline,
  reason,
  legalCitation,
}: EligibilityCardProps) {
  const isVoter = type === "voter";

  const styles = {
    eligible: {
      rule: "border-l-status-success",
      field: "bg-status-success-bg",
      text: "text-status-success",
      Icon: CheckCircle,
      word: "Eligible",
    },
    ineligible: {
      rule: "border-l-status-danger",
      field: "bg-status-danger-bg",
      text: "text-status-danger",
      Icon: XCircle,
      word: "Not eligible",
    },
    boundary: {
      rule: "border-l-status-warning",
      field: "bg-status-warning-bg",
      text: "text-status-warning",
      Icon: Warning,
      word: "Check carefully",
    },
  }[status];

  const { Icon } = styles;

  return (
    <section
      className={clsx(
        "border border-line border-l-[4px] rounded-r h-full flex flex-col",
        styles.rule
      )}
      aria-labelledby={`eligibility-${type}-heading`}
    >
      <div className="px-5 sm:px-6 py-4 border-b border-line">
        <h3
          id={`eligibility-${type}-heading`}
          className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600"
        >
          {isVoter ? "Voting in the SK election" : "Running for SK office"}
        </h3>
        <p className="mt-1 text-sm text-ink-700">
          {isVoter ? "Ages 15 to 30" : "Ages 18 to 24"}
        </p>
      </div>

      <div className={clsx("px-5 sm:px-6 py-5 flex-1", styles.field)}>
        <p className={clsx("flex items-center gap-2 font-display font-semibold", styles.text)}>
          <Icon size={20} weight="fill" aria-hidden="true" className="shrink-0" />
          <span className="text-lg">{styles.word}</span>
        </p>

        <p className="mt-3 font-display font-semibold text-ink-950 text-base leading-snug">
          {headline}
        </p>

        <p className="mt-2.5 text-sm text-ink-800 leading-relaxed">{reason}</p>
      </div>

      <div className="px-5 sm:px-6 py-4 border-t border-line">
        <p className="text-xs text-ink-600">
          <span className="font-display font-semibold uppercase tracking-[0.06em] text-ink-700">
            Statutory basis
          </span>
          <span className="mt-1 block text-ink-800">{legalCitation}</span>
        </p>
        <p className="mt-3 text-xs text-ink-600 leading-relaxed">
          Age is one criterion among several. Residency, registration and the anti-dynasty
          rule also apply.
        </p>
      </div>
    </section>
  );
}
