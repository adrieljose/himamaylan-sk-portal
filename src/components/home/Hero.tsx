import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Parallax } from "../motion/Parallax";
import { Reveal } from "../motion/Reveal";
import { electionConfig } from "@/config/election";

/**
 * The four facts a visitor needs before anything else. Presented as a
 * definition list rather than stat cards: these are official figures, and a
 * ruled table is how official figures are published.
 */
const atAGlance = [
  { term: "Election day", value: electionConfig.electionDateDisplay, note: "Monday" },
  { term: "Who may vote", value: "15 to 30", note: "years old on election day" },
  { term: "Who may run", value: "18 to 24", note: "years old on election day" },
  { term: "Where", value: "19 barangays", note: "Himamaylan City" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-subtle border-b border-line">
      {/* See PageHeader: the seal watermark is the parallax surface. */}
      <Parallax
        speed={0.2}
        maxShift={110}
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-32 -top-24 hidden lg:block"
      >
        <Image
          src="/images/himamaylan-seal.svg"
          alt=""
          width={560}
          height={560}
          className="w-[560px] h-[560px] opacity-[0.045]"
        />
      </Parallax>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 py-14 sm:py-20 lg:py-24">
          <Reveal className="lg:col-span-7 max-w-2xl">
            <p className="eyebrow">2026 Barangay and SK Elections</p>

            <h1 className="mt-5 text-[2.125rem] leading-[1.12] sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.08] font-display font-semibold text-ink-950 tracking-[-0.022em]">
              Find out if you can vote or run in the{" "}
              <span className="relative whitespace-nowrap">
                SK elections
                <span
                  className="absolute left-0 right-0 -bottom-1 h-[5px] bg-orange-500"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-7 text-lg text-ink-700 leading-relaxed prose-civic">
              Enter your date of birth. This service computes your exact age on{" "}
              <strong className="text-ink-900 font-semibold">
                {electionConfig.electionDateDisplay}
              </strong>{" "}
              and tells you whether you meet the age requirements set by the Sangguniang
              Kabataan Reform Act.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/checker"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[52px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-base rounded transition-colors active:translate-y-px"
              >
                Check my eligibility
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </Link>

              <Link
                href="/qualifications"
                className="inline-flex items-center justify-center px-6 py-3.5 min-h-[52px] bg-white hover:bg-surface-sunken text-ink-900 font-display font-semibold text-base border border-line-strong hover:border-ink-400 rounded transition-colors active:translate-y-px"
              >
                Read the full requirements
              </Link>
            </div>

            <p className="mt-6 text-sm text-ink-600 flex items-start gap-2.5">
              <Image
                src="/images/himamaylan-seal.svg"
                alt=""
                width={22}
                height={22}
                className="w-[22px] h-[22px] object-contain shrink-0 mt-px"
              />
              <span>
                Your date of birth is calculated in your browser. Nothing is submitted or
                stored.
              </span>
            </p>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-5">
            <div className="bg-white border border-line rounded">
              <h2 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 px-6 pt-5 pb-4 border-b border-line">
                At a glance
              </h2>
              <dl className="divide-y divide-line">
                {atAGlance.map((item) => (
                  <div
                    key={item.term}
                    className="px-6 py-4 flex items-baseline justify-between gap-4"
                  >
                    <dt className="text-sm text-ink-700 shrink-0">{item.term}</dt>
                    <dd className="text-right">
                      <span className="block font-display font-semibold text-ink-950 text-[0.9375rem]">
                        {item.value}
                      </span>
                      <span className="block text-xs text-ink-600 mt-0.5">{item.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="px-6 py-4 border-t border-line bg-surface-subtle text-xs text-ink-600 rounded-b">
                Governed by RA 10742, as amended by RA 11768.{" "}
                <Link
                  href="/references"
                  className="text-navy-700 font-semibold underline underline-offset-2 hover:text-navy-800"
                >
                  View sources
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
