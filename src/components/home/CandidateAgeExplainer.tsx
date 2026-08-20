import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Notice } from "../ui/Notice";
import { Reveal } from "../motion/Reveal";

const requirements = [
  {
    title: "Filipino citizenship",
    desc: "You must be a citizen of the Philippines.",
  },
  {
    title: "One year of barangay residency",
    desc: "You must have resided in the barangay for at least one continuous year immediately before election day.",
  },
  {
    title: "Literacy",
    desc: "You must be able to read and write Filipino, English, or Hiligaynon.",
  },
  {
    title: "Registered Katipunan ng Kabataan member",
    desc: "You must be a registered voter of the barangay where you intend to run.",
  },
  {
    title: "No relation to an incumbent official",
    desc: "You must not be related within the second civil degree of consanguinity or affinity to any incumbent elected official in the locality.",
  },
];

export function CandidateAgeExplainer() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-surface-subtle border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Standing for office</p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
              Can I run for SK Chairperson or Kagawad?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-700 leading-relaxed">
              Age is the first test, and it is the strictest. Section 10 of RA 10742 sets a
              narrow window that closes the day after your 24th birthday.
            </p>

            <div className="mt-8 bg-white border border-line rounded">
              <div className="px-6 py-5 border-b border-line">
                <p className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600">
                  Candidate age window
                </p>
                <p className="mt-3 font-display font-semibold text-ink-950 text-2xl">
                  18 to 24 years
                </p>
                <p className="mt-1.5 text-sm text-ink-700">on 2 November 2026</p>
              </div>
              <div className="px-6 py-5">
                <p className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600">
                  Which means a date of birth from
                </p>
                <p className="mt-3 font-display font-semibold text-ink-950 text-lg">
                  2 Nov 2002 &ndash; 2 Nov 2008
                </p>
                <p className="mt-1.5 text-sm text-ink-700">inclusive of both dates</p>
              </div>
            </div>

            <Link
              href="/checker"
              className="mt-7 inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[48px] bg-orange-600 hover:bg-orange-700 text-white font-display font-semibold text-base rounded transition-colors active:translate-y-px"
            >
              Check my exact age
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-7 lg:pl-4">
            <h3 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-4 border-b border-ink-950">
              And every one of these
            </h3>

            <ol className="divide-y divide-line">
              {requirements.map((req, i) => (
                <li key={req.title} className="py-5 flex gap-5">
                  <span
                    className="font-display font-semibold text-ink-600 text-sm pt-0.5 shrink-0 w-6"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-ink-950 text-base">
                      {req.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-ink-700 leading-relaxed prose-civic">
                      {req.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Notice tone="info" title="Turning 25 mid-term does not remove you" className="mt-7">
              Under RA 11768, an elected SK official who turns 25 during their term may
              serve out the full term of office.{" "}
              <Link href="/references" className="text-navy-700 font-semibold">
                Read the governing law
              </Link>
              .
            </Notice>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
