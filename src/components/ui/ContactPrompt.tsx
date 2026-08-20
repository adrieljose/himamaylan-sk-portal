import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_CONFIG } from "@/config/contact";

export interface ContactPromptProps {
  title?: string;
  body?: string;
}

/**
 * The "still need help" band that closes most pages. Extracted because it
 * appeared four times with four different visual treatments.
 */
export function ContactPrompt({
  title = "Still not sure where you stand?",
  body = "The Office of the Election Officer can confirm your registration record and answer questions the checker cannot.",
}: ContactPromptProps) {
  return (
    <aside className="on-dark bg-navy-900 text-navy-100 rounded">
      <div className="px-6 sm:px-10 py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
        <div className="max-w-xl">
          <h2 className="font-display font-semibold text-white text-xl sm:text-2xl">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-navy-100">{body}</p>
          <p className="mt-3 text-sm text-navy-200">
            {CONTACT_CONFIG.operatingHours.days},{" "}
            {CONTACT_CONFIG.operatingHours.hours}.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] bg-orange-600 hover:bg-orange-700 text-white font-display font-semibold text-base rounded transition-colors active:translate-y-px shrink-0"
        >
          Contact the election office
          <ArrowRight size={17} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
