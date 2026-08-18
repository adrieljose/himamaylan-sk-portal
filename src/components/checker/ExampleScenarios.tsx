"use client";

import React from "react";
import { BOUNDARY_SCENARIOS } from "@/lib/eligibility";
import { Sparkle } from "@phosphor-icons/react";
import { clsx } from "clsx";

export interface ExampleScenariosProps {
  onSelectScenario: (dob: string) => void;
  selectedDob?: string;
}

export function ExampleScenarios({
  onSelectScenario,
  selectedDob,
}: ExampleScenariosProps) {
  return (
    <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-4">
      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-900">
        <Sparkle size={16} weight="fill" aria-hidden="true" className="text-gold-500" />
        <span>Quick Test: Try Boundary Age Scenarios</span>
      </div>
      <p className="text-xs text-slate-500">
        Tap any age pill below to immediately test the statutory cutoff boundary rules for November 2, 2026:
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {BOUNDARY_SCENARIOS.map((scenario) => {
          const isSelected = selectedDob === scenario.dob;
          return (
            <button
              key={scenario.dob}
              type="button"
              onClick={() => onSelectScenario(scenario.dob)}
              className={clsx(
                "rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition-all cursor-pointer select-none flex items-center gap-1.5 min-h-[44px]",
                isSelected
                  ? "bg-blue-900 text-white border-blue-950 shadow-sm ring-2 ring-gold-400"
                  : "bg-surface-subtle text-slate-700 border-slate-200 hover:bg-white hover:border-blue-400 hover:shadow-subtle active:scale-[0.98]"
              )}
            >
              <span>{scenario.label}</span>
              <span
                className={clsx(
                  "text-xs px-1.5 py-0.5 rounded-full font-mono font-semibold",
                  isSelected ? "bg-gold-400 text-slate-950" : "bg-slate-200 text-slate-600"
                )}
              >
                {scenario.targetAge}yo
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
