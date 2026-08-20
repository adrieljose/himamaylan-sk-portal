import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/ui/PageHeader";
import { VoterInfographicSection } from "@/components/voters/VoterInfographicSection";

export const metadata: Metadata = {
  title: "Registered Voter Data",
  description:
    "Official COMELEC registered voter figures for all 19 barangays of Himamaylan City, by age cohort: 15 to 17, 18 to 30, and 31 and above.",
  keywords: [
    "Himamaylan City Registered Voters",
    "COMELEC Voters Infographic",
    "SK Registered Voters Himamaylan",
    "Barangay Voter Demographics",
    "2026 BSKE Voters Statistics",
  ],
};

export default function VotersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Registered voter data"
        title="Who is registered to vote in Himamaylan City"
        intro="Official figures from the Office of the Election Officer covering 81,821 registered voters across 19 barangays, including 28,368 members of the Katipunan ng Kabataan."
        crumbs={[{ label: "Voter data" }]}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/checker"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 min-h-[48px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-sm rounded transition-colors active:translate-y-px"
          >
            Check my eligibility
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
          <Link
            href="/barangays"
            className="inline-flex items-center justify-center px-5 py-3 min-h-[48px] bg-white hover:bg-surface-sunken text-ink-900 font-display font-semibold text-sm border border-line-strong hover:border-ink-400 rounded transition-colors active:translate-y-px"
          >
            Browse the 19 barangays
          </Link>
        </div>
      </PageHeader>

      <VoterInfographicSection />
    </>
  );
}
