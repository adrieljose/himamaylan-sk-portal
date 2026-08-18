"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkle,
  CalendarBlank,
  ShieldCheck,
  CheckCircle,
  ShareNetwork,
  CaretDown,
  Info,
  Buildings,
  FileText,
} from "@phosphor-icons/react";
import { DateInput } from "./DateInput";
import { AgeDisplay } from "./AgeDisplay";
import { EligibilityCard } from "./EligibilityCard";
import { AgeRangeTimeline } from "./AgeRangeTimeline";
import { PersonalizedMessage } from "./PersonalizedMessage";
import { EligibilitySummary } from "./EligibilitySummary";
import { ExampleScenarios } from "./ExampleScenarios";
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

export function EligibilityChecker() {
  const searchParams = useSearchParams();

  // State
  const [month, setMonth] = useState<number>(11);
  const [day, setDay] = useState<number>(2);
  const [year, setYear] = useState<number>(2005); // Default to a prime 21-year-old on Nov 2, 2026
  const [selectedBarangay, setSelectedBarangay] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"summary" | "timeline" | "questionnaire" | "barangay">("summary");

  // Read URL search params on mount
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

    if (bgyParam) {
      setSelectedBarangay(bgyParam);
    }
  }, [searchParams]);

  // Validation
  const validation = validateDateOfBirth(month, day, year);
  const isValid = validation.isValid;

  // Calculation (guaranteed safe fallback if invalid)
  const ageResult = isValid
    ? calculateExactAge(month, day, year)
    : calculateExactAge(11, 2, 2005);

  const eligibilityResult = isValid
    ? checkEligibility(month, day, year)
    : checkEligibility(11, 2, 2005);

  const advice = getPersonalizedAdvice(ageResult.category, ageResult.years);

  const dobIso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const handleSelectScenario = (scenarioDob: string) => {
    const parsed = parseDateString(scenarioDob);
    if (parsed) {
      setMonth(parsed.month);
      setDay(parsed.day);
      setYear(parsed.year);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Centerpiece Double-Bezel Card */}
      <div className="bezel-outer">
        <div className="bezel-inner p-6 sm:p-10 space-y-8">
          {/* Card Title & Authority Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-comelec-blue-700 bg-comelec-blue-50 px-3 py-1 rounded-full border border-comelec-blue-200/80 mb-2">
                <Sparkle size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-500" />
                Official Statutory Calculator
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                2026 Sangguniang Kabataan Age Checker
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Enter your exact birthdate to evaluate youth voting and candidacies under RA 10742 &amp; RA 11768.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <span className="text-xs text-slate-400 font-normal block">Election Target</span>
                <span className="text-xs font-semibold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  November 2, 2026
                </span>
              </div>
            </div>
          </div>

          {/* Prominent Statutory Notice & Dual Ballot Explainer */}
          <CheckerNoticeBox />

          {/* Date of Birth Input Component */}
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

          {/* Results Area (When Date is Valid) */}
          <AnimatePresence mode="wait">
            {isValid && (
              <motion.div
                key={`${month}-${day}-${year}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 pt-4 border-t border-slate-100"
              >
                {/* 1. Large Animated Age Breakdown */}
                <AgeDisplay
                  years={ageResult.years}
                  months={ageResult.months}
                  days={ageResult.days}
                  totalDays={ageResult.totalDays}
                  category={ageResult.category}
                  categoryLabel={ageResult.categoryLabel}
                />

                {/* 2. Dual Status Cards (Voter & Candidate) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* 3. Personalized Civic Advice Banner */}
                <PersonalizedMessage
                  category={ageResult.category}
                  headline={advice.headline}
                  explanation={advice.explanation}
                  nextSteps={advice.nextSteps}
                  statutoryNote={advice.statutoryNote}
                />

                {/* 4. Interactive Tabs for In-Depth Exploration */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setActiveTab("summary")}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                          activeTab === "summary"
                            ? "bg-white text-comelec-blue-950 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Criteria Table
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveTab("timeline")}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                          activeTab === "timeline"
                            ? "bg-white text-comelec-blue-950 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Visual Spectrum
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveTab("questionnaire")}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                          activeTab === "questionnaire"
                            ? "bg-white text-comelec-blue-950 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Legal Questionnaire
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveTab("barangay")}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                          activeTab === "barangay"
                            ? "bg-white text-comelec-blue-950 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Barangay {selectedBarangay ? `(${selectedBarangay})` : "Selector"}
                      </button>
                    </div>

                    {/* Share Action */}
                    <div className="flex items-center gap-2">
                      <ShareResult
                        dobString={dobIso}
                        calculatedAge={ageResult.years}
                        voterEligible={eligibilityResult.isVoterEligible}
                        candidateEligible={eligibilityResult.isCandidateEligible}
                        barangay={selectedBarangay}
                      />
                    </div>
                  </div>

                  {/* Tab Contents — all panels pre-rendered; CSS toggles visibility for instant switching */}
                  <div className="pt-2">
                    <div style={{ display: activeTab === "summary" ? "block" : "none" }}>
                      <EligibilitySummary
                        years={ageResult.years}
                        isVoterEligible={eligibilityResult.isVoterEligible}
                        isCandidateEligible={eligibilityResult.isCandidateEligible}
                      />
                    </div>

                    <div style={{ display: activeTab === "timeline" ? "block" : "none" }}>
                      <AgeRangeTimeline currentAge={ageResult.years} />
                    </div>

                    <div style={{ display: activeTab === "questionnaire" ? "block" : "none" }}>
                      <ExpandedQuestionnaire calculatedAge={ageResult.years} />
                    </div>

                    <div style={{ display: activeTab === "barangay" ? "block" : "none" }}>
                      <BarangaySelector
                        selectedBarangay={selectedBarangay}
                        onSelect={setSelectedBarangay}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 8 Official Boundary Test Scenarios */}
      <ExampleScenarios onSelectScenario={handleSelectScenario} />
    </div>
  );
}
