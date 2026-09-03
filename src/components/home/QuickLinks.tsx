import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Reveal } from "../motion/Reveal";

/**
 * A grouped index, not a nine-tile icon grid. Grouping by intent ("work out
 * where you stand" / "understand the election" / "get help") lets a visitor
 * skip two thirds of the list immediately.
 */
const groups = [
  {
    heading: "Work out where you stand",
    items: [
      {
        title: "Age and eligibility checker",
        href: "/checker",
        desc: "Calculate your exact age on 2 November 2026 and see your voting and candidacy status.",
      },
      {
        title: "Qualifications in full",
        href: "/qualifications",
        desc: "Citizenship, residency, literacy and the anti-dynasty requirement, set out in detail.",
      },
      {
        title: "Certificate of Candidacy forms",
        href: "/coc-forms",
        desc: "Where the official COMELEC forms come from, and what to settle before you file.",
      },
    ],
  },
  {
    heading: "Understand the election",
    items: [
      {
        title: "2026 election information",
        href: "/election-info",
        desc: "The synchronised Barangay and SK elections, key dates and what SK officials do.",
      },
      {
        title: "The 19 barangays",
        href: "/barangays",
        desc: "Directory of every barangay in Himamaylan City with its district grouping.",
      },
      {
        title: "Registered voter data",
        href: "/voters",
        desc: "Official demographics by age cohort and by barangay.",
      },
    ],
  },
  {
    heading: "Get help",
    items: [
      {
        title: "Frequently asked questions",
        href: "/faq",
        desc: "Answers on age cutoffs, dual ballots, registration and candidacy.",
      },
      {
        title: "Statutory references",
        href: "/references",
        desc: "RA 10742, RA 11768 and the COMELEC resolutions this service relies on.",
      },
      {
        title: "Contact the election office",
        href: "/contact",
        desc: "Office hours, telephone numbers, email and location.",
      },
      {
        title: "Disclaimer and privacy",
        href: "/disclaimer",
        desc: "How this service handles your data and the limits of its results.",
      },
    ],
  },
];

export function QuickLinks() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-surface-subtle">
      <Container>
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow">Index</p>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
            Everything on this site
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {groups.map((group, gi) => (
            <Reveal key={group.heading} delay={gi * 90} as="div">
            <nav aria-label={group.heading}>
              <h3 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-700 pb-4 border-b border-ink-950">
                {group.heading}
              </h3>
              <ul className="divide-y divide-line">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch
                      className="group block py-5"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-display font-semibold text-ink-950 group-hover:text-navy-700 transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight
                          size={15}
                          weight="bold"
                          aria-hidden="true"
                          className="shrink-0 mt-1 text-ink-400 group-hover:text-navy-700 group-hover:translate-x-0.5 transition-all"
                        />
                      </span>
                      <span className="mt-1.5 block text-sm text-ink-700 leading-relaxed">
                        {item.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
