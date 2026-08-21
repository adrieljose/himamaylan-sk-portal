"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle, XCircle } from "@phosphor-icons/react";
import { clsx } from "clsx";
import {
  MONTH_NAMES,
  DAYS_IN_MONTHS,
  YEAR_RANGE,
  calculateExactAge,
  checkEligibility,
  validateDateOfBirth,
} from "@/lib/eligibility";
import { HIMAMAYLAN_BARANGAYS } from "@/config/barangays";
import { Container } from "../ui/Container";
import { Field, Select } from "../ui/Field";
import { CheckerNoticeBox } from "../checker/CheckerNoticeBox";
import { Reveal } from "../motion/Reveal";

const PRESET_AGES = [15, 18, 21, 24, 25, 30];

export function QuickCheckerEmbed() {
  const router = useRouter();
  const [month, setMonth] = useState(11);
  const [day, setDay] = useState(2);
  const [year, setYear] = useState(2005);
  const [selectedBarangay, setSelectedBarangay] = useState<string>("");

  const validation = useMemo(
    () => validateDateOfBirth(month, day, year),
    [month, day, year]
  );
  const isValid = validation.isValid;

  const ageResult = useMemo(
    () => (isValid ? calculateExactAge(month, day, year) : calculateExactAge(11, 2, 2005)),
    [month, day, year, isValid]
  );

  const eligibility = useMemo(
    () => (isValid ? checkEligibility(month, day, year) : checkEligibility(11, 2, 2005)),
    [month, day, year, isValid]
  );

  const handlePreset = (presetAge: number) => {
    setMonth(11);
    setDay(2);
    setYear(2026 - presetAge);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dob = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    router.push(
      selectedBarangay
        ? `/checker?dob=${dob}&barangay=${encodeURIComponent(selectedBarangay)}`
        : `/checker?dob=${dob}`
    );
  };

  const outcomes = [
    {
      label: "Voting in the SK election",
      sub: "Ages 15 to 30",
      eligible: eligibility.isVoterEligible,
      headline: eligibility.voterEligibility.headline,
    },
    {
      label: "Running for SK office",
      sub: "Ages 18 to 24",
      eligible: eligibility.isCandidateEligible,
      headline: eligibility.candidateEligibility.headline,
    },
  ];

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="py-14 sm:py-20 lg:py-24 bg-surface-subtle border-b border-line scroll-mt-20"
    >
      <Container size="md">
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow">Quick check</p>
          <h2
            id="calculator-heading"
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950"
          >
            How old will you be on election day?
          </h2>
          <p className="mt-4 text-base text-ink-700 leading-relaxed">
            Set your date of birth. Your status updates as you change it.
          </p>
        </Reveal>

        <Reveal as="div" delay={90} className="bg-white border border-line rounded">
          <div className="px-5 sm:px-8 py-6 border-b border-line">
            <fieldset>
              <legend className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 mb-3">
                Jump to an age
              </legend>
              <div className="flex flex-wrap gap-2">
                {PRESET_AGES.map((age) => {
                  const active = ageResult.years === age && month === 11 && day === 2;
                  return (
                    <button
                      key={age}
                      type="button"
                      onClick={() => handlePreset(age)}
                      aria-pressed={active}
                      className={clsx(
                        "px-4 min-h-[44px] rounded border font-display text-sm font-semibold transition-colors cursor-pointer",
                        active
                          ? "bg-navy-900 border-navy-900 text-white"
                          : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                      )}
                    >
                      {age} years old
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <form onSubmit={handleSubmit} className="px-5 sm:px-8 py-7 space-y-6">
            <fieldset>
              <legend className="font-display text-sm font-semibold text-ink-900 mb-3">
                Your date of birth
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field id="quick-month-select" label="Month">
                  <Select
                    id="quick-month-select"
                    value={month}
                    onChange={(e) => setMonth(parseInt(e.target.value, 10))}
                  >
                    {MONTH_NAMES.map((name, i) => (
                      <option key={name} value={i + 1}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field id="quick-day-select" label="Day">
                  <Select
                    id="quick-day-select"
                    value={day}
                    onChange={(e) => setDay(parseInt(e.target.value, 10))}
                    invalid={!isValid}
                  >
                    {DAYS_IN_MONTHS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field id="quick-year-select" label="Year">
                  <Select
                    id="quick-year-select"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value, 10))}
                  >
                    {YEAR_RANGE.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>

              {!isValid && validation.errorMessage && (
                <p
                  role="alert"
                  className="mt-3 text-sm font-semibold text-status-danger"
                >
                  {validation.errorMessage}
                </p>
              )}
            </fieldset>

            <Field
              id="quick-barangay-select"
              label="Your barangay"
              optional
              hint="Used only to show contact details for your barangay."
            >
              <Select
                id="quick-barangay-select"
                value={selectedBarangay}
                onChange={(e) => setSelectedBarangay(e.target.value)}
              >
                <option value="">Select a barangay</option>
                {HIMAMAYLAN_BARANGAYS.map((bgy) => (
                  <option key={bgy.id} value={bgy.name}>
                    {bgy.name}
                  </option>
                ))}
              </Select>
            </Field>

            {/*
              The result is announced politely so a screen reader user hears the
              outcome after changing a select, without the update stealing focus.
            */}
            <div aria-live="polite" aria-atomic="true">
              {isValid && (
                <div className="border border-line rounded overflow-hidden">
                  <div className="px-5 py-5 bg-navy-900 on-dark">
                    <p className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-400">
                      Your age on 2 November 2026
                    </p>
                    <p className="mt-2 font-display font-semibold text-white text-3xl">
                      {ageResult.years}
                      <span className="text-lg font-normal text-navy-100 ml-2">
                        years, {ageResult.months} months, {ageResult.days} days
                      </span>
                    </p>
                  </div>

                  <dl className="divide-y divide-line">
                    {outcomes.map((o) => (
                      <div
                        key={o.label}
                        className="px-5 py-4 flex items-start gap-3.5"
                      >
                        {o.eligible ? (
                          <CheckCircle
                            size={20}
                            weight="fill"
                            aria-hidden="true"
                            className="text-status-success shrink-0 mt-0.5"
                          />
                        ) : (
                          <XCircle
                            size={20}
                            weight="fill"
                            aria-hidden="true"
                            className="text-status-danger shrink-0 mt-0.5"
                          />
                        )}
                        <div className="min-w-0">
                          <dt className="font-display font-semibold text-ink-950 text-[0.9375rem]">
                            {o.label}
                            <span className="ml-2 font-normal text-ink-600 text-sm">
                              {o.sub}
                            </span>
                          </dt>
                          <dd className="mt-0.5 text-sm text-ink-700">
                            {/* Text label, never colour alone. */}
                            <strong
                              className={clsx(
                                "font-semibold",
                                o.eligible ? "text-status-success" : "text-status-danger"
                              )}
                            >
                              {o.eligible ? "Eligible" : "Not eligible"}
                            </strong>
                            {": "}
                            {o.headline}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            <CheckerNoticeBox />

            <button
              type="submit"
              className="w-full min-h-[52px] px-6 py-3.5 bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-base rounded transition-colors active:translate-y-px inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              See my full result
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
