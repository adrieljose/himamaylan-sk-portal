import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Notice } from "../ui/Notice";
import { Reveal } from "../motion/Reveal";

/**
 * This was six near-identical cards. It is tabular data — age bracket, birth
 * window, entitlement — so it is now a table: scannable down a column, readable
 * by screen readers as a grid, and printable.
 */
const brackets = [
  {
    bracket: "15 to 17",
    born: "3 Nov 2008 – 2 Nov 2011",
    role: "Katipunan ng Kabataan voter",
    entitlement: "One ballot — SK only",
    tone: "info" as const,
  },
  {
    bracket: "18 to 24",
    born: "3 Nov 2001 – 2 Nov 2008",
    role: "Voter, and candidate if within the strict window",
    entitlement: "Two ballots — may file a COC",
    tone: "eligible" as const,
    emphasis: true,
  },
  {
    bracket: "25 to 30",
    born: "3 Nov 1995 – 2 Nov 2001",
    role: "Katipunan ng Kabataan voter",
    entitlement: "Two ballots — SK and barangay",
    tone: "info" as const,
  },
  {
    bracket: "31 and over",
    born: "On or before 2 Nov 1995",
    role: "Barangay voter only",
    entitlement: "One ballot — barangay",
    tone: "neutral" as const,
  },
];

export function VoterAgeExplainer() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-line">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Statutory framework</p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
              What your age entitles you to on election day
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
              Age is counted on {""}
              <strong className="text-ink-900 font-semibold">2 November 2026</strong>, not on
              the day you register. The birth windows below follow from that single cutoff.
            </p>
          </div>

          <Link
            href="/qualifications"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 shrink-0 group"
          >
            Full qualification criteria
            <ArrowRight
              size={15}
              weight="bold"
              aria-hidden="true"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </Reveal>

        {/* Wide tables scroll inside their own container; the page never scrolls sideways. */}
        <Reveal as="div" delay={80} className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Sangguniang Kabataan age brackets, corresponding birth date windows and
              ballot entitlements for the 2 November 2026 elections.
            </caption>
            <thead>
              <tr className="border-y border-ink-950">
                <th
                  scope="col"
                  className="py-3.5 pr-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
                >
                  Age on election day
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
                >
                  Date of birth
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
                >
                  Ballots received
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {brackets.map((row) => (
                <tr
                  key={row.bracket}
                  className={row.emphasis ? "bg-status-success-bg" : undefined}
                >
                  <th
                    scope="row"
                    className="py-5 pr-4 align-top font-display font-semibold text-ink-950 text-lg whitespace-nowrap"
                  >
                    {row.bracket}
                    {row.emphasis && (
                      <span className="block mt-2">
                        <Badge variant="eligible" size="sm">
                          May run for office
                        </Badge>
                      </span>
                    )}
                  </th>
                  <td className="py-5 px-4 align-top text-sm text-ink-700 whitespace-nowrap">
                    {row.born}
                  </td>
                  <td className="py-5 px-4 align-top text-sm text-ink-800">{row.role}</td>
                  <td className="py-5 pl-4 align-top text-sm text-ink-800">
                    {row.entitlement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal as="div" delay={140} className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Notice tone="statutory" title="Residency applies to every bracket">
            You must have resided in your Himamaylan barangay for at least six months
            immediately before election day, and be a registered voter of that barangay.
          </Notice>

          <Notice tone="warning" title="Candidates: the 24-year ceiling is exact">
            RA 10742 requires a candidate to be{" "}
            <strong className="font-semibold text-ink-900">not more than 24 years of age</strong>{" "}
            on election day. This service applies that strictly: being 24 years and one day
            disqualifies you. In practice the candidacy window is a date of birth between{" "}
            <strong className="font-semibold text-ink-900">2 November 2002</strong> and{" "}
            <strong className="font-semibold text-ink-900">2 November 2008</strong> inclusive.{" "}
            <Link href="/qualifications" className="text-navy-700 font-semibold">
              See the full candidate rules
            </Link>
            .
          </Notice>
        </Reveal>
      </Container>
    </section>
  );
}
