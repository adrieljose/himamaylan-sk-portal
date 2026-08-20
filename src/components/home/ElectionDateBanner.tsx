"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Container } from "../ui/Container";
import { electionConfig } from "@/config/election";

const ELECTION_TARGET = new Date("2026-11-02T07:00:00+08:00").getTime();

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

export function ElectionDateBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => {
      const difference = ELECTION_TARGET - Date.now();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / 86_400_000),
          hours: Math.floor((difference % 86_400_000) / 3_600_000),
          minutes: Math.floor((difference % 3_600_000) / 60_000),
          seconds: Math.floor((difference % 60_000) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = timeLeft
    ? [
        { label: "Days", value: String(timeLeft.days) },
        { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
        { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
        { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
      ]
    : [
        { label: "Days", value: "—" },
        { label: "Hours", value: "—" },
        { label: "Minutes", value: "—" },
        { label: "Seconds", value: "—" },
      ];

  return (
    <section
      aria-labelledby="countdown-heading"
      className="bg-surface-sunken border-b border-line"
    >
      <Container>
        <div className="py-7 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
          <div>
            <p className="eyebrow">Election day countdown</p>
            <h2
              id="countdown-heading"
              className="mt-3 font-display font-semibold text-ink-950 text-lg sm:text-xl"
            >
              {electionConfig.electionName}
            </h2>
            <p className="text-sm text-ink-700 mt-1">
              Monday, {electionConfig.electionDateDisplay} &middot; Polls open 7:00 AM
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
            {/*
              The ticking figures are hidden from assistive tech and replaced by a
              single calm sentence below. A per-second live region would otherwise
              interrupt a screen reader continuously.
            */}
            <div
              className="flex items-stretch divide-x divide-line-strong border-y border-line-strong"
              aria-hidden="true"
            >
              {units.map((unit) => (
                <div key={unit.label} className="px-4 sm:px-5 py-2.5 text-center min-w-[68px]">
                  <span className="block font-display font-semibold text-2xl sm:text-[1.75rem] leading-none text-ink-950">
                    {unit.value}
                  </span>
                  <span className="block mt-1.5 text-2xs uppercase tracking-[0.08em] text-ink-600">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="sr-only">
              {timeLeft
                ? `${timeLeft.days} days remaining until election day, ${electionConfig.electionDateDisplay}.`
                : `Election day is ${electionConfig.electionDateDisplay}.`}
            </p>

            <Link
              href="/checker"
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-sm rounded transition-colors active:translate-y-px"
            >
              Check my eligibility
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
