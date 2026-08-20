import React from "react";
import type { Metadata } from "next";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Notice } from "@/components/ui/Notice";
import { LEGAL_REFERENCES } from "@/config/references";

export const metadata: Metadata = {
  title: "Statutory References",
  description:
    "The laws, resolutions and guidelines this service relies on, including RA 10742 and RA 11768, with links to the official texts.",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sources"
        title="Statutory references"
        intro="Every rule applied by this service comes from one of the instruments below. Where the official text and this site disagree, the official text prevails."
        crumbs={[{ label: "References" }]}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container size="md">
          <ol className="border-t border-ink-950">
            {LEGAL_REFERENCES.map((ref) => (
              <li key={ref.id} className="border-b border-line">
                <article className="py-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display font-semibold text-ink-950 text-xl sm:text-2xl">
                        {ref.title}
                      </h2>
                      <p className="mt-2 text-sm text-ink-700">
                        {ref.authority} &middot; {ref.promulgationDate}
                      </p>
                    </div>
                    <Badge variant="neutral" size="sm" showIcon={false}>
                      {ref.category}
                    </Badge>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-ink-700 leading-relaxed prose-civic">
                    {ref.summary}
                  </p>

                  {ref.keyProvisions.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-3 border-b border-line">
                        Key provisions
                      </h3>
                      <ul className="divide-y divide-line">
                        {ref.keyProvisions.map((prov, i) => (
                          <li
                            key={i}
                            className="py-3.5 text-sm text-ink-800 leading-relaxed flex gap-3.5"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2"
                              aria-hidden="true"
                            />
                            <span>{prov}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={ref.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 underline underline-offset-4"
                  >
                    Read the official text
                    <ArrowSquareOut size={15} weight="bold" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </article>
              </li>
            ))}
          </ol>

          <Notice tone="statutory" title="On the strict 24-year ceiling" className="mt-10">
            RA 10742 s.10(b) requires a candidate to be &ldquo;not more than 24 years of
            age&rdquo; on election day. This service applies that literally: a person who is
            24 years and one day old on 2 November 2026 is treated as over the limit. If the
            Office of the Election Officer applies a different reading, the office&rsquo;s
            determination governs.
          </Notice>
        </Container>
      </section>
    </>
  );
}
