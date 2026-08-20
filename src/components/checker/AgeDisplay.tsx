import React from "react";
import { AgeCategory } from "@/lib/eligibility";
import { AnimatedValue } from "../ui/AnimatedValue";

/** "1 day" / "2 days" — the boundary cases here are exactly the interesting ones. */
const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"}`;

export interface AgeDisplayProps {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  category: AgeCategory;
  categoryLabel: string;
}

/**
 * The computed age, presented as an official figure.
 *
 * This panel is deliberately static: the surrounding chrome, rules and labels
 * never remount. Only the figures themselves transition, so recomputing an age
 * reads as values updating in place rather than as the panel reloading.
 */
export function AgeDisplay({
  years,
  months,
  days,
  totalDays,
  category,
  categoryLabel,
}: AgeDisplayProps) {
  const parts = [
    { label: "Years", value: years },
    { label: "Months", value: months },
    { label: "Days", value: days },
  ];

  return (
    <section
      aria-labelledby="age-display-heading"
      className="on-dark bg-navy-900 text-navy-100 rounded"
    >
      <div className="px-6 sm:px-8 pt-7 pb-6 border-b border-navy-800">
        <h2
          id="age-display-heading"
          className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-400"
        >
          Your age on election day, 2 November 2026
        </h2>

        {/*
          The whole figure is one polite live region. Without this the numbers
          would change silently for a screen reader user, since nothing here
          receives focus when a select changes.
        */}
        <div aria-live="polite" aria-atomic="true">
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <AnimatedValue
              value={years}
              className="font-display font-semibold text-white text-5xl sm:text-6xl leading-none tabular-nums"
            />
            <span className="font-display font-semibold text-white text-xl sm:text-2xl">
              years old
            </span>
          </p>

          <p className="mt-3 text-sm text-navy-100">
            Exactly <AnimatedValue value={plural(years, "year")} />,{" "}
            <AnimatedValue value={plural(months, "month")} /> and{" "}
            <AnimatedValue value={plural(days, "day")} />.
            <span className="block mt-0.5 text-navy-200">
              That is <AnimatedValue value={totalDays.toLocaleString("en-PH")} /> days from
              your date of birth.
            </span>
          </p>
        </div>
      </div>

      <dl className="grid grid-cols-3 divide-x divide-navy-800">
        {parts.map((part) => (
          <div key={part.label} className="px-4 sm:px-6 py-5">
            <dt className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-navy-200">
              {part.label}
            </dt>
            <dd className="mt-1.5">
              <AnimatedValue
                value={part.value}
                className="font-display font-semibold text-white text-2xl tabular-nums"
              />
            </dd>
          </div>
        ))}
      </dl>

      <p className="px-6 sm:px-8 py-4 border-t border-navy-800 text-sm">
        <span className="text-navy-200">Age bracket: </span>
        <AnimatedValue
          value={categoryLabel}
          className="font-display font-semibold text-white"
        />
      </p>
    </section>
  );
}
