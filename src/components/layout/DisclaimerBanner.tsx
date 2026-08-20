import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Notice } from "../ui/Notice";

export interface DisclaimerBannerProps {
  variant?: "inline" | "prominent" | "card";
  className?: string;
}

/**
 * Three intensities of the same statutory caveat, all built on Notice so the
 * disclaimer looks identical wherever it appears.
 */
export function DisclaimerBanner({
  variant = "inline",
  className,
}: DisclaimerBannerProps) {
  if (variant === "prominent") {
    return (
      <Notice
        tone="warning"
        title="This is not an official certificate of eligibility"
        className={className}
      >
        This checker computes your age from the date you enter and applies the statutory
        rules for the 2 November 2026 elections. Registration status and candidacy approval
        are determined solely by official COMELEC proceedings.{" "}
        <Link href="/disclaimer" className="text-navy-700 font-semibold">
          Read the full disclaimer and privacy notice
        </Link>
        .
      </Notice>
    );
  }

  if (variant === "card") {
    return (
      <Notice tone="statutory" className={className}>
        Age is calculated for 2 November 2026. Citizenship, residency, registration,
        literacy and the absence of disqualifications must also be satisfied.
      </Notice>
    );
  }

  return (
    <p
      className={clsx(
        "text-sm text-ink-700 border-l-[3px] border-l-line-strong pl-4 py-1",
        className
      )}
    >
      <span className="font-display font-semibold text-ink-900">Note: </span>
      Results are informational. Official COMELEC records and resolutions prevail.
    </p>
  );
}
