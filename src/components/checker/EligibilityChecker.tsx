"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import { DateInput } from "./DateInput";
import { AgeDisplay } from "./AgeDisplay";
import { EligibilityCard } from "./EligibilityCard";
import { AgeRangeTimeline } from "./AgeRangeTimeline";
import { PersonalizedMessage } from "./PersonalizedMessage";
import { EligibilitySummary } from "./EligibilitySummary";
import { ExpandedQuestionnaire } from "./ExpandedQuestionnaire";
import { BarangaySelector } from "./BarangaySelector";
import { ShareResult } from "./ShareResult";
import { CheckerNoticeBox } from "./CheckerNoticeBox";
import {
  calculateExactAge,
  checkEligibility,
  validateDateOfBirth,
  parseDateString,
  getPersonalizedAdvice,
} from "@/lib/eligibility";

const TABS = [
  { id: "summary", label: "All requirements" },
  { id: "timeline", label: "Age spectrum" },
  { id: "questionnaire", label: "Self-assessment" },
  { id: "barangay", label: "Your barangay" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function EligibilityChecker() {
  const searchParams = useSearchParams();

  const [month, setMonth] = useState<number>(11);
  const [day, setDay] = useState<number>(2);
  const [year, setYear] = useState<number>(2005);
  const [selectedBarangay, setSelectedBarangay] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("summary");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const dobParam = searchParams.get("dob");
    const bgyParam = searchParams.get("barangay");

    if (dobParam) {
      const parsed = parseDateString(dobParam);
      if (parsed) {
        setMonth(parsed.month);
        setDay(parsed.day);
        setYear(parsed.year);
      }
    }

    if (bgyParam) setSelectedBarangay(bgyParam);
  }, [searchParams]);

  const validation = validateDateOfBirth(month, day, year);
  const isValid = validation.isValid;

  const ageResult = isValid
    ? calculateExactAge(month, day, year)
    : calculateExactAge(11, 2, 2005);

  const eligibilityResult = isValid
    ? checkEligibility(month, day, year)
    : checkEligibility(11, 2, 2005);

  const advice = getPersonalizedAdvice(ageResult.category, ageResult.years);
  const dobIso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  /**
   * Arrow-key navigation between tabs, per the WAI-ARIA tabs pattern. The old
   * markup used plain buttons toggling `display: none`, which gave screen
   * reader users no indication that a tab set existed at all.
   */
  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = TABS.length - 1;
    let next = -1;

    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;

    e.preventDefault();
    setActiveTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <CheckerNoticeBox />

      <DateInput
        month={month}
        day={day}
        year={year}
        onChangeMonth={setMonth}
        onChangeDay={setDay}
        onChangeYear={setYear}
        onSelectQuickPreset={(m, d, y) => {
          setMonth(m);
          setDay(d);
          setYear(y);
        }}
        isValid={isValid}
        errorMessage={validation.errorMessage}
      />

      {isValid && (
        /*
         * No `key` here, deliberately. Keying this wrapper on the date made
         * React destroy and rebuild the whole results subtree on every select
         * change: the box visibly flashed, and any local state inside it —
         * notably the six questionnaire answers — was silently discarded.
         *
         * The results panel is now a stable element that simply re-renders with
         * new props. Only the individual figures animate, via AnimatedValue.
         */
        <div className="space-y-8 pt-8 border-t border-line">
          <AgeDisplay
            years={ageResult.years}
            months={ageResult.months}
            days={ageResult.days}
            totalDays={ageResult.totalDays}
            category={ageResult.category}
            categoryLabel={ageResult.categoryLabel}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <EligibilityCard
              type="voter"
              status={eligibilityResult.voterEligibility.status}
              headline={eligibilityResult.voterEligibility.headline}
              reason={eligibilityResult.voterEligibility.reason}
              legalCitation={eligibilityResult.voterEligibility.legalCitation}
            />
            <EligibilityCard
              type="candidate"
              status={eligibilityResult.candidateEligibility.status}
              headline={eligibilityResult.candidateEligibility.headline}
              reason={eligibilityResult.candidateEligibility.reason}
              legalCitation={eligibilityResult.candidateEligibility.legalCitation}
            />
          </div>

          <PersonalizedMessage
            category={ageResult.category}
            headline={advice.headline}
            explanation={advice.explanation}
            nextSteps={advice.nextSteps}
            statutoryNote={advice.statutoryNote}
          />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line">
              <div role="tablist" aria-label="More detail" className="flex flex-wrap -mb-px">
                {TABS.map((tab, i) => {
                  const selected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`tab-${tab.id}`}
                      aria-selected={selected}
                      aria-controls={`panel-${tab.id}`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActiveTab(tab.id)}
                      onKeyDown={(e) => onTabKeyDown(e, i)}
                      className={clsx(
                        "px-4 py-3 min-h-[44px] font-display text-sm font-semibold border-b-[3px] transition-colors cursor-pointer",
                        selected
                          ? "border-orange-500 text-ink-950"
                          : "border-transparent text-ink-700 hover:text-navy-700"
                      )}
                    >
                      {tab.label}
                      {tab.id === "barangay" && selectedBarangay && (
                        <span className="ml-1.5 font-normal text-ink-600">
                          ({selectedBarangay})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pb-2">
                <ShareResult
                  dobString={dobIso}
                  calculatedAge={ageResult.years}
                  voterEligible={eligibilityResult.isVoterEligible}
                  candidateEligible={eligibilityResult.isCandidateEligible}
                  barangay={selectedBarangay}
                />
              </div>
            </div>

            <div className="pt-8">
              {TABS.map((tab) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`panel-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                  tabIndex={0}
                  hidden={activeTab !== tab.id}
                >
                  {tab.id === "summary" && (
                    <EligibilitySummary
                      years={ageResult.years}
                      isVoterEligible={eligibilityResult.isVoterEligible}
                      isCandidateEligible={eligibilityResult.isCandidateEligible}
                    />
                  )}
                  {tab.id === "timeline" && (
                    <AgeRangeTimeline currentAge={ageResult.years} />
                  )}
                  {tab.id === "questionnaire" && (
                    <ExpandedQuestionnaire calculatedAge={ageResult.years} />
                  )}
                  {tab.id === "barangay" && (
                    <BarangaySelector
                      selectedBarangay={selectedBarangay}
                      onSelect={setSelectedBarangay}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
