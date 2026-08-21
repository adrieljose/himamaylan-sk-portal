"use client";

import React, { useState } from "react";
import { ShareNetwork, Check } from "@phosphor-icons/react";

export interface ShareResultProps {
  dobString: string;
  calculatedAge: number;
  voterEligible: boolean;
  candidateEligible: boolean;
  barangay?: string | null;
}

export function ShareResult({
  calculatedAge,
  voterEligible,
  candidateEligible,
  barangay,
}: ShareResultProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const bgyText = barangay ? ` in Barangay ${barangay}` : "";
    const title = "Himamaylan City COMELEC, 2026 SK age and eligibility checker";
    const text =
      `On 2 November 2026 I will be ${calculatedAge} years old${bgyText}. ` +
      `SK voter: ${voterEligible ? "eligible" : "not eligible"}. ` +
      `SK candidate: ${candidateEligible ? "eligible" : "not eligible"}.`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // The user dismissed the share sheet; fall through to clipboard.
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(`${text} Check yours at ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded border border-line-strong bg-white hover:bg-surface-subtle hover:border-ink-600 text-ink-900 font-display text-sm font-semibold transition-colors cursor-pointer"
      >
        {copied ? (
          <>
            <Check
              size={16}
              weight="bold"
              aria-hidden="true"
              className="text-status-success"
            />
            <span>Link copied</span>
          </>
        ) : (
          <>
            <ShareNetwork size={16} weight="bold" aria-hidden="true" />
            <span>Share result</span>
          </>
        )}
      </button>

      {/* Announced without stealing focus, since the button label also changes. */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Result link copied to clipboard." : ""}
      </span>
    </>
  );
}
