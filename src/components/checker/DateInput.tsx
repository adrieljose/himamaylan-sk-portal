"use client";

import React from "react";
import { MONTH_NAMES, DAYS_IN_MONTHS, YEAR_RANGE } from "@/lib/eligibility";
import { WarningCircle } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Field, Select } from "../ui/Field";

export interface DateInputProps {
  month: number;
  day: number;
  year: number;
  onChangeMonth: (m: number) => void;
  onChangeDay: (d: number) => void;
  onChangeYear: (y: number) => void;
  onSelectQuickPreset: (m: number, d: number, y: number) => void;
  isValid: boolean;
  errorMessage?: string;
}

const quickPresets = [
  { label: "15", m: 11, d: 2, y: 2011, desc: "youngest voter" },
  { label: "18", m: 11, d: 2, y: 2008, desc: "youngest candidate" },
  { label: "21", m: 11, d: 2, y: 2005, desc: "mid-range" },
  { label: "24", m: 11, d: 2, y: 2002, desc: "oldest candidate" },
  { label: "25", m: 11, d: 2, y: 2001, desc: "voter only" },
  { label: "30", m: 11, d: 2, y: 1996, desc: "oldest voter" },
];

export function DateInput({
  month,
  day,
  year,
  onChangeMonth,
  onChangeDay,
  onChangeYear,
  onSelectQuickPreset,
  isValid,
  errorMessage,
}: DateInputProps) {
  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 mb-3">
          Or jump to an age
        </legend>
        <div className="flex flex-wrap gap-2">
          {quickPresets.map((preset) => {
            const isSelected =
              month === preset.m && day === preset.d && year === preset.y;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => onSelectQuickPreset(preset.m, preset.d, preset.y)}
                aria-pressed={isSelected}
                className={clsx(
                  "px-3.5 min-h-[44px] rounded border font-display text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5",
                  isSelected
                    ? "bg-navy-900 border-navy-900 text-white"
                    : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                )}
              >
                <span>{preset.label}</span>
                <span
                  className={clsx(
                    "font-normal text-xs hidden md:inline",
                    isSelected ? "text-navy-200" : "text-ink-600"
                  )}
                >
                  {preset.desc}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset
        className={clsx(
          "border rounded p-4 sm:p-5 transition-colors",
          !isValid ? "border-status-danger border-2 animate-shake" : "border-line"
        )}
      >
        <legend className="px-2 font-display text-sm font-semibold text-ink-900">
          Your date of birth
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field id="birth-month" label="Month">
            <Select
              id="birth-month"
              value={month}
              onChange={(e) => onChangeMonth(parseInt(e.target.value, 10))}
            >
              {MONTH_NAMES.map((name, i) => (
                <option key={name} value={i + 1}>
                  {name}
                </option>
              ))}
            </Select>
          </Field>

          <Field id="birth-day" label="Day">
            <Select
              id="birth-day"
              value={day}
              invalid={!isValid}
              aria-describedby={!isValid ? "dob-error" : undefined}
              onChange={(e) => onChangeDay(parseInt(e.target.value, 10))}
            >
              {DAYS_IN_MONTHS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
          </Field>

          <Field id="birth-year" label="Year">
            <Select
              id="birth-year"
              value={year}
              onChange={(e) => onChangeYear(parseInt(e.target.value, 10))}
            >
              {YEAR_RANGE.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        {!isValid && (
          <p
            id="dob-error"
            role="alert"
            className="mt-4 flex items-start gap-2 text-sm font-semibold text-status-danger"
          >
            <WarningCircle
              size={17}
              weight="fill"
              aria-hidden="true"
              className="shrink-0 mt-0.5"
            />
            <span>
              {errorMessage ||
                "That date does not exist. Check the day against the month you selected."}
            </span>
          </p>
        )}
      </fieldset>
    </div>
  );
}
