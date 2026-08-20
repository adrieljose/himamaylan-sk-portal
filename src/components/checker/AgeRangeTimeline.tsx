"use client";

import React, { useMemo } from "react";
import { clsx } from "clsx";

export interface AgeRangeTimelineProps {
  currentAge: number;
}

const MIN_SCALE = 12;
const MAX_SCALE = 34;

/** The four statutory bands, drawn to scale across the same axis. */
const BANDS = [
  { from: 12, to: 15, label: "Too young", fill: "bg-surface-sunken", text: "text-ink-700" },
  { from: 15, to: 18, label: "SK voter", fill: "bg-navy-100", text: "text-navy-800" },
  { from: 18, to: 25, label: "Voter and candidate", fill: "bg-orange-200", text: "text-orange-900" },
  { from: 25, to: 31, label: "SK voter", fill: "bg-navy-100", text: "text-navy-800" },
  { from: 31, to: 34, label: "Barangay voter", fill: "bg-surface-sunken", text: "text-ink-700" },
];

const TICKS = [15, 18, 24, 30];

export function AgeRangeTimeline({ currentAge }: AgeRangeTimelineProps) {
  const toPercent = (age: number) =>
    ((Math.max(MIN_SCALE, Math.min(MAX_SCALE, age)) - MIN_SCALE) /
      (MAX_SCALE - MIN_SCALE)) *
    100;

  const positionPercent = useMemo(() => toPercent(currentAge), [currentAge]);

  const bracket = useMemo(() => {
    if (currentAge < 15)
      return {
        label: "Below the SK age range",
        desc: "The minimum age to join the Katipunan ng Kabataan is 15 on election day.",
      };
    if (currentAge <= 17)
      return {
        label: "SK voter",
        desc: "You may vote for your SK council. Standing for office opens at 18.",
      };
    if (currentAge <= 24)
      return {
        label: "SK voter and candidate",
        desc: "You are inside both the voting range and the candidate age window.",
      };
    if (currentAge <= 30)
      return {
        label: "SK voter",
        desc: "You may vote for your SK council. The candidate window closed at 24.",
      };
    return {
      label: "Barangay voter",
      desc: "You are above the Katipunan ng Kabataan range and vote the barangay ballot only.",
    };
  }, [currentAge]);

  return (
    <section aria-labelledby="timeline-heading">
      <div className="pb-4 border-b border-ink-950">
        <h3
          id="timeline-heading"
          className="font-display font-semibold text-ink-950 text-lg sm:text-xl"
        >
          Where you sit on the age scale
        </h3>
        <p className="mt-1.5 text-sm text-ink-700 prose-civic">
          Age on 2 November 2026, from {MIN_SCALE} to {MAX_SCALE}.
        </p>
      </div>

      <div className="pt-10 pb-2">
        <div className="relative">
          {/* Marker for the computed age. */}
          <div
            className="absolute -top-9 z-10 -translate-x-1/2 flex flex-col items-center"
            style={{ left: `${positionPercent}%` }}
          >
            <span className="whitespace-nowrap px-2.5 py-1 rounded-sm bg-ink-950 text-white font-display text-xs font-semibold">
              You: {currentAge}
            </span>
            <span
              className="w-px h-3 bg-ink-950"
              aria-hidden="true"
            />
          </div>

          {/* Bands drawn proportionally. */}
          <div className="flex h-11 rounded-sm overflow-hidden border border-line" aria-hidden="true">
            {BANDS.map((band) => (
              <div
                key={`${band.from}-${band.to}`}
                className={clsx(
                  "flex items-center justify-center overflow-hidden",
                  band.fill
                )}
                style={{ width: `${((band.to - band.from) / (MAX_SCALE - MIN_SCALE)) * 100}%` }}
              >
                <span
                  className={clsx(
                    "px-1 text-2xs font-display font-semibold text-center leading-tight truncate",
                    band.text
                  )}
                >
                  {band.label}
                </span>
              </div>
            ))}
          </div>

          {/* Axis ticks at the statutory boundaries. */}
          <div className="relative h-6 mt-1.5" aria-hidden="true">
            {TICKS.map((tick) => (
              <span
                key={tick}
                className="absolute -translate-x-1/2 font-display text-xs font-semibold text-ink-700"
                style={{ left: `${toPercent(tick)}%` }}
              >
                {tick}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The chart is decorative; this is the actual statement of the result. */}
      <div className="mt-4 border-l-[3px] border-l-orange-500 bg-surface-subtle rounded-r px-5 py-4">
        <p className="font-display font-semibold text-ink-950">
          At {currentAge} years old you are a {bracket.label.toLowerCase()}.
        </p>
        <p className="mt-1.5 text-sm text-ink-700 leading-relaxed prose-civic">
          {bracket.desc}
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 border-t border-line">
        {[
          { t: "15", d: "Youngest SK voter" },
          { t: "18", d: "Youngest candidate" },
          { t: "24", d: "Oldest candidate" },
          { t: "30", d: "Oldest SK voter" },
        ].map((item) => (
          <div key={item.t} className="py-4 pr-4 border-b border-line">
            <dt className="font-display font-semibold text-ink-950 text-xl">{item.t}</dt>
            <dd className="mt-0.5 text-xs text-ink-700">{item.d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
