"use client";

import React, { useState } from "react";
import { ShareNetwork, Check, Copy } from "@phosphor-icons/react";

export interface ShareResultProps {
  dobString: string;
  calculatedAge: number;
  voterEligible: boolean;
  candidateEligible: boolean;
  barangay?: string | null;
}

export function ShareResult({
  dobString,
  calculatedAge,
  voterEligible,
  candidateEligible,
  barangay,
}: ShareResultProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const bgyText = barangay ? ` for Barangay ${barangay}` : "";
    const title = "Himamaylan City COMELEC — 2026 SK Age & Eligibility Checker";
    const text = `I calculated my statutory age (${calculatedAge} years old) on November 2, 2026 for Himamaylan City SK Elections${bgyText}. Voter Eligible: ${
      voterEligible ? "YES" : "NO"
    } | Candidate Eligible: ${candidateEligible ? "YES" : "NO"}.`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {

      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(`${text} Check yours at: ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-subtle hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 shadow-subtle transition-all cursor-pointer min-h-[44px]"
      title="Share your eligibility result"
    >
      {copied ? (
        <>
          <Check size={16} weight="fill" aria-hidden="true" className="text-emerald-600" />
          <span className="text-emerald-700">Link Copied!</span>
        </>
      ) : (
        <>
          <ShareNetwork size={16} weight="fill" aria-hidden="true" className="text-blue-700" />
          <span>Share My Result</span>
        </>
      )}
    </button>
  );
}
