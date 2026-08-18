"use client";

import React, { useState } from "react";
import { MONTH_NAMES, DAYS_IN_MONTHS, YEAR_RANGE } from "@/lib/eligibility";
import { WarningCircle, CheckCircle, CalendarBlank } from "@phosphor-icons/react";
import { clsx } from "clsx";

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
  const quickPresets = [
    { label: "15 yo", m: 11, d: 2, y: 2011, desc: "Min Voter" },
    { label: "18 yo", m: 11, d: 2, y: 2008, desc: "Candidate Entrance" },
    { label: "21 yo", m: 11, d: 2, y: 2005, desc: "Prime SK Age" },
    { label: "24 yo", m: 11, d: 2, y: 2002, desc: "Max Candidate" },
    { label: "25 yo", m: 11, d: 2, y: 2001, desc: "Voter Only" },
    { label: "30 yo", m: 11, d: 2, y: 1996, desc: "Max Voter" },
  ];

  return (
    <div className="space-y-5">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2">
        <div className="flex items-center gap-2">
          <CalendarBlank size={16} weight="fill" aria-hidden="true" className="text-blue-600" />
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Quick Age Presets:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {quickPresets.map((preset) => {
            const isSelected = month === preset.m && day === preset.d && year === preset.y;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => onSelectQuickPreset(preset.m, preset.d, preset.y)}
                className={clsx(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer min-h-[36px] flex items-center gap-1",
                  isSelected
                    ? "bg-blue-900 text-white shadow-sm ring-2 ring-gold-400"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                )}
              >
                <span>{preset.label}</span>
                <span className="text-xs text-slate-400 font-normal hidden md:inline">
                  ({preset.desc})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border transition-all duration-200",
          !isValid
            ? "bg-red-50/50 border-red-400 animate-shake"
            : "bg-surface-subtle border-slate-200"
        )}
      >

        <div>
          <label
            htmlFor="birth-month"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Birth Month
          </label>
          <select
            id="birth-month"
            value={month}
            onChange={(e) => onChangeMonth(parseInt(e.target.value, 10))}
            className="w-full h-12 bg-white border border-slate-300 rounded-lg px-3.5 text-sm font-medium text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all cursor-pointer"
          >
            {MONTH_NAMES.map((name, i) => (
              <option key={name} value={i + 1}>
                {name} ({i + 1})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="birth-day"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Birth Day
          </label>
          <select
            id="birth-day"
            value={day}
            onChange={(e) => onChangeDay(parseInt(e.target.value, 10))}
            className="w-full h-12 bg-white border border-slate-300 rounded-lg px-3.5 text-sm font-medium text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all cursor-pointer font-mono"
          >
            {DAYS_IN_MONTHS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="birth-year"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Birth Year
          </label>
          <select
            id="birth-year"
            value={year}
            onChange={(e) => onChangeYear(parseInt(e.target.value, 10))}
            className="w-full h-12 bg-white border border-slate-300 rounded-lg px-3.5 text-sm font-medium text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all font-mono cursor-pointer"
          >
            {YEAR_RANGE.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!isValid && (
        <div
          role="alert"
          className="p-3.5 rounded-lg bg-red-50 border border-red-300 text-xs text-red-900 flex items-center gap-2"
        >
          <WarningCircle size={16} weight="fill" aria-hidden="true" className="text-red-600 shrink-0" />
          <span>{errorMessage || "That date doesn't look right. Please enter a valid date."}</span>
        </div>
      )}
    </div>
  );
}
