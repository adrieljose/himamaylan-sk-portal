import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Notice } from "@/components/ui/Notice";
import { ContactPrompt } from "@/components/ui/ContactPrompt";
import { electionConfig } from "@/config/election";

export const metadata: Metadata = {
  title: "2026 Barangay & SK Election Information",
  description:
    "Key dates, governing law and the role of SK officials for the 2026 synchronised Barangay and Sangguniang Kabataan Elections in Himamaylan City.",
};

const electionMilestones = [
  {
    date: "August to September 2026",
    title: "Katipunan ng Kabataan voter registration",
    description:
      "The period to register, reactivate or transfer your voter record at the Office of the Election Officer in Himamaylan City Hall.",
    status: "Upcoming",
  },
  {
    date: "October 2026",
    title: "Filing of certificates of candidacy",
    description:
      "The filing window for youth candidates standing for SK Chairperson and SK Kagawad.",
    status: "Scheduled",
  },
  {
    date: "Late October 2026",
    title: "Campaign period",
    description:
      "A regulated campaign window under COMELEC guidelines, the Fair Election Act, and anti-vote-buying rules.",
    status: "Scheduled",
  },
  {
    date: "Monday, 2 November 2026",
    title: "Election day",
    description:
      "Polling precincts open across all 19 Himamaylan City barangays. This is the date every age requirement is measured against.",
    status: "Election day",
    highlight: true,
  },
];

const skDuties = [
  {
    title: "The Comprehensive Barangay Youth Development Plan",
    description:
      "Draws up and delivers the three-year youth development agenda, aligned with the Philippine Youth Development Plan.",
  },
  {
    title: "Ten per cent of the barangay general fund",
    description:
      "Administers a tenth of the barangay general fund, reserved exclusively for youth development, scholarships and health programmes.",
  },
  {
    title: "Convening the Katipunan ng Kabataan",
    description:
      "Calls the youth assembly at least twice a year to deliberate on issues facing the community.",
  },
  {
    title: "Community programmes",
    description:
      "Runs grassroots sports leagues, disaster risk reduction training, environmental clean-ups and anti-drug education.",
  },
];

export default function ElectionInfoPage() {
  return (
    <>
      <PageHeader
        eyebrow="The 2026 election"
        title="The 2026 Barangay and Sangguniang Kabataan Elections"
        intro={`Held on ${electionConfig.electionDateDisplay} across all 19 barangays of Himamaylan City. Two councils are elected on the same day: the barangay council and the youth council.`}
        crumbs={[{ label: "2026 Election" }]}
      >
        <Link
          href="/checker"
          className="inline-flex items-center gap-2.5 px-5 py-3 min-h-[48px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-sm rounded transition-colors active:translate-y-px"
        >
          Check my eligibility
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="py-12 sm:py-16 lg:py-20 border-b border-line">
        <Container>
          <div className="max-w-2xl mb-10">
            <p className="eyebrow">Key dates</p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
              What happens, and when
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed prose-civic">
              Dates before election day are indicative until COMELEC publishes the final
              calendar for the 2026 cycle.
            </p>
          </div>

          <ol className="border-t border-ink-950">
            {electionMilestones.map((m) => (
              <li
                key={m.title}
                className={clsx(
                  "border-b border-line",
                  m.highlight && "bg-orange-50"
                )}
              >
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3">
                  <div className="md:col-span-4">
                    <p
                      className={clsx(
                        "font-display font-semibold",
                        m.highlight ? "text-orange-800 text-lg" : "text-ink-950 text-[0.9375rem]"
                      )}
                    >
                      {m.date}
                    </p>
                    <span className="mt-2 inline-block">
                      <Badge
                        variant={m.highlight ? "accent" : "neutral"}
                        size="sm"
                        showIcon={false}
                      >
                        {m.status}
                      </Badge>
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display font-semibold text-ink-950 text-lg">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-ink-700 leading-relaxed prose-civic">
                      {m.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-subtle border-b border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
            <div className="lg:col-span-4">
              <p className="eyebrow">The office</p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-display font-semibold text-ink-950">
                What the SK actually does
              </h2>
              <p className="mt-4 text-base text-ink-700 leading-relaxed">
                An SK council is one Chairperson and seven Kagawad, elected for a three-year
                term in every barangay. It is not a ceremonial body. It controls a real budget.
              </p>
              <Link
                href="/references"
                className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 group"
              >
                Read the governing law
                <ArrowRight
                  size={15}
                  weight="bold"
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            <ol className="lg:col-span-8 lg:pl-4 border-t border-ink-950">
              {skDuties.map((duty, i) => (
                <li key={duty.title} className="py-6 border-b border-line flex gap-5">
                  <span
                    className="font-display font-semibold text-ink-600 text-sm shrink-0 w-6 pt-0.5"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink-950 text-base">
                      {duty.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed prose-civic">
                      {duty.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Notice tone="info" title="Two ballots on the same day">
              Voters aged 18 to 30 receive both the SK ballot and the barangay ballot.
              Voters aged 15 to 17 receive the SK ballot only, and voters aged 31 and above
              receive the barangay ballot only.
            </Notice>
            <Notice tone="statutory" title="Governing law">
              {electionConfig.governingLaws.join("; ")}.{" "}
              <Link href="/references" className="text-navy-700 font-semibold">
                See full citations
              </Link>
              .
            </Notice>
          </div>

          <div className="mt-10">
            <ContactPrompt />
          </div>
        </Container>
      </section>
    </>
  );
}
