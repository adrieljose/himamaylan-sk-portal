import React, { Suspense } from "react";
import type { Metadata } from "next";
import { EligibilityChecker } from "@/components/checker/EligibilityChecker";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "SK Age & Eligibility Checker",
  description:
    "Work out your exact age on 2 November 2026 and whether you may vote in, or stand for, the Sangguniang Kabataan elections in Himamaylan City.",
};

export default function CheckerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Eligibility checker"
        title="Check your SK eligibility"
        intro="Enter your date of birth to see your exact age on election day, 2 November 2026, and what it entitles you to. The calculation runs in your browser — nothing is submitted or stored."
        crumbs={[{ label: "Check eligibility" }]}
      />

      <section className="py-12 sm:py-16 lg:py-20 flex-1">
        <Container>
          <Suspense
            fallback={
              <div
                className="max-w-5xl mx-auto border border-line rounded p-12"
                aria-busy="true"
              >
                {/* Skeleton matching the form's shape, not a spinner. */}
                <div className="h-4 w-40 bg-surface-sunken rounded-sm" />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="h-12 bg-surface-sunken rounded-sm" />
                  <div className="h-12 bg-surface-sunken rounded-sm" />
                  <div className="h-12 bg-surface-sunken rounded-sm" />
                </div>
                <p className="mt-6 text-sm text-ink-700">Loading the checker…</p>
              </div>
            }
          >
            <EligibilityChecker />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
