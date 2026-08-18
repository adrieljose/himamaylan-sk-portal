"use client";

import React from "react";
import Link from "next/link";
import { ShieldWarning, Info, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";

export interface DisclaimerBannerProps {
  variant?: "inline" | "prominent" | "card";
  className?: string;
}

export function DisclaimerBanner({
  variant = "inline",
  className,
}: DisclaimerBannerProps) {
  if (variant === "prominent") {
    return (
      <div
        className={clsx(
          "p-4 sm:p-5 rounded-xl bg-amber-50 border-2 border-amber-200 text-amber-950 text-xs sm:text-sm shadow-xs",
          className
        )}
        role="region"
        aria-label="Civic Disclaimer"
      >
        <div className="flex items-start gap-3">
          <ShieldWarning size={20} weight="fill" aria-hidden="true" className="text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-900">
              Important Civic Information &amp; Eligibility Notice
            </p>
            <p className="text-amber-900/90 leading-relaxed font-normal">
              This checker provides general age calculations based on user-entered information and prevailing statutory rules for the November 2, 2026 elections. 
              <strong className="font-semibold"> It is not an official COMELEC certificate of eligibility.</strong> Official voter registration status and candidacy approvals are determined solely by official COMELEC proceedings and records.
            </p>
            <div className="pt-1">
              <Link
                href="/disclaimer"
                className="font-semibold text-amber-900 underline hover:text-amber-950"
              >
                Read Complete Disclaimer &amp; Privacy Notice →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={clsx(
          "p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed font-normal",
          className
        )}
      >
        <div className="flex items-start gap-2.5">
          <Info size={16} aria-hidden="true" className="text-slate-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800">Civic Notice: </span>
            <span>
              Age determination is calculated for November 2, 2026. Additional statutory qualifications (citizenship, residency, registration, literacy, and absence of disqualifications) must be satisfied.
            </span>
          </div>
        </div>
      </div>
    );
  }

  // default: inline
  return (
    <div
      className={clsx(
        "flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 font-normal",
        className
      )}
    >
      <WarningCircle size={16} weight="fill" aria-hidden="true" className="text-blue-700 shrink-0" />
      <span>
        <strong className="font-semibold">Official Notice:</strong> Results are educational and informative. Official COMELEC records and resolutions prevail.
      </span>
    </div>
  );
}
