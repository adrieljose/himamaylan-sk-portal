import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

const destinations = [
  { href: "/checker", label: "Check your eligibility", desc: "Your exact age on election day." },
  { href: "/qualifications", label: "Qualifications", desc: "Every requirement, in full." },
  { href: "/faq", label: "Frequently asked questions", desc: "Age cutoffs, ballots, registration." },
  { href: "/contact", label: "Contact the election office", desc: "Speak to someone directly." },
];

export default function NotFound() {
  return (
    <section className="flex-1 py-16 sm:py-24 lg:py-28">
      <Container size="md">
        <p className="eyebrow">Error 404</p>

        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink-950">
          We cannot find that page
        </h1>

        <p className="mt-5 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
          The address may have changed, or it may have been typed incorrectly. Nothing has
          gone wrong with your eligibility check — try one of the pages below.
        </p>

        <nav aria-label="Suggested pages" className="mt-10 border-t border-ink-950">
          <ul className="divide-y divide-line">
            {destinations.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="group block py-5">
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span className="block font-display font-semibold text-ink-950 text-lg group-hover:text-navy-700 transition-colors">
                        {d.label}
                      </span>
                      <span className="block mt-1 text-sm text-ink-700">{d.desc}</span>
                    </span>
                    <ArrowRight
                      size={17}
                      weight="bold"
                      aria-hidden="true"
                      className="shrink-0 mt-1.5 text-ink-400 group-hover:text-navy-700 group-hover:translate-x-0.5 transition-all"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[48px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-base rounded transition-colors active:translate-y-px"
        >
          Return to the home page
          <ArrowRight size={17} weight="bold" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
