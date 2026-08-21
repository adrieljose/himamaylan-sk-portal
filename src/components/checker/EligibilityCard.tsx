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
 * The single most important surface in the service: whether you may vote, and
 * whether you may stand for office.
 *
 * Status is carried by exactly three signals, not more: a coloured left rule,
 * an icon, and the word itself. The previous version also filled the whole
 * panel with a tinted field, which made a routine "yes" read like a marketing
 * success state and made "no" read like an error page. A government result is
 * a record, so the surface stays white and the rule does the marking.
 *
 * The shared caveat about residency and registration is deliberately NOT here.
 * Two cards sit side by side, and printing the identical sentence twice is the
 * clearest tell that nobody read the page. It renders once, below both.
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
      text: "text-status-success",
      Icon: CheckCircle,
      word: "Eligible",
    },
    ineligible: {
      rule: "border-l-status-danger",
      text: "text-status-danger",
      Icon: XCircle,
      word: "Not eligible",
    },
    boundary: {
      rule: "border-l-status-warning",
      text: "text-status-warning",
      Icon: Warning,
      word: "Check carefully",
    },
  }[status];

  const { Icon } = styles;

  return (
    <section
      className={clsx(
        "h-full bg-white border border-line border-l-[4px] rounded-r px-5 sm:px-6 py-6",
        styles.rule
      )}
      aria-labelledby={`eligibility-${type}-heading`}
    >
      <h3
        id={`eligibility-${type}-heading`}
        className="font-display font-semibold text-ink-950 text-[0.9375rem]"
      >
        {isVoter ? "Voting in the SK election" : "Running for SK office"}
      </h3>
      <p className="mt-1 text-sm text-ink-600">
        {isVoter ? "Ages 15 to 30" : "Ages 18 to 24"}
      </p>

      <p
        className={clsx(
          "mt-5 flex items-center gap-2 font-display font-semibold text-lg",
          styles.text
        )}
      >
        <Icon size={19} weight="fill" aria-hidden="true" className="shrink-0" />
        {styles.word}
      </p>

      <p className="mt-4 font-display font-semibold text-ink-950 text-base leading-snug">
        {headline}
      </p>

      <p className="mt-2.5 text-sm text-ink-700 leading-relaxed">{reason}</p>

      <p className="mt-5 pt-4 border-t border-line text-xs text-ink-600">
        {legalCitation}
      </p>
    </section>
  );
}
