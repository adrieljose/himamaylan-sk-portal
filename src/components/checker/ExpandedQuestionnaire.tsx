"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  WarningCircle,
  Question,
  ArrowCounterClockwise,
  ShieldCheck,
  CaretRight,
} from "@phosphor-icons/react";
import { QUESTIONNAIRE_CRITERIA, evaluateQuestionnaire, QuestionnaireAnswers } from "@/lib/eligibility";

interface ExpandedQuestionnaireProps {
  calculatedAge: number;
}

export function ExpandedQuestionnaire({ calculatedAge }: ExpandedQuestionnaireProps) {
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({
    isCitizen: null,
    isResidentSixMonths: null,
    isResidentOneYear: null,
    isLiterate: null,
    isRegisteredVoter: null,
    hasDynastyConflict: null,
  });

  const handleAnswer = (key: keyof QuestionnaireAnswers, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setAnswers({
      isCitizen: null,
      isResidentSixMonths: null,
      isResidentOneYear: null,
      isLiterate: null,
      isRegisteredVoter: null,
      hasDynastyConflict: null,
    });
  };

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;
  const isComplete = answeredCount === QUESTIONNAIRE_CRITERIA.length;
  const result = evaluateQuestionnaire(answers, calculatedAge);

  return (
    <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
      {/* Questionnaire Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-comelec-blue-700 block">
            Self-Assessment Module
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Official Non-Age Legal Criteria Checklist
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
            Progress: <strong>{answeredCount} / {QUESTIONNAIRE_CRITERIA.length} answered</strong>
          </div>
          {answeredCount > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors p-2 cursor-pointer"
            >
              <ArrowCounterClockwise size={14} weight="bold" aria-hidden="true" />
              Reset
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-600">
        Age is only the primary threshold. Under Republic Act No. 10742 (as amended by RA 11768), youth voters and prospective SK officials must meet citizenship, residency, literacy, registration, and anti-dynasty requirements.
      </p>

      {/* Questions List */}
      <div className="space-y-4">
        {QUESTIONNAIRE_CRITERIA.map((q, idx) => {
          const currentVal = answers[q.id as keyof QuestionnaireAnswers];

          return (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-all ${
                currentVal === null
                  ? "bg-slate-50 border-slate-200"
                  : currentVal === true
                  ? "bg-emerald-50/40 border-emerald-200"
                  : "bg-rose-50/40 border-rose-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900">{q.title}</h4>
                    <span className="text-xs uppercase font-semibold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-full">
                      {q.scope}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7">{q.description}</p>
                  <p className="text-xs font-mono text-slate-400 pl-7">
                    Statutory Basis: {q.legalBasis}
                  </p>
                </div>

                {/* Yes/No Toggle */}
                <div className="flex items-center gap-2 pl-7 sm:pl-0 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleAnswer(q.id as keyof QuestionnaireAnswers, true)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                      currentVal === true
                        ? "bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/30"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    YES
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(q.id as keyof QuestionnaireAnswers, false)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                      currentVal === false
                        ? "bg-rose-600 text-white shadow-sm ring-2 ring-rose-600/30"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comprehensive Evaluation Results */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 border-t border-slate-200 space-y-4"
          >
            <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-comelec-gold-400">
                <ShieldCheck size={20} weight="fill" aria-hidden="true" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">
                  Questionnaire Summary Evaluation
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    {result.voterNonAgePassed ? (
                      <CheckCircle size={16} weight="fill" aria-hidden="true" className="text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle size={16} weight="fill" aria-hidden="true" className="text-rose-400 shrink-0" />
                    )}
                    <span>Youth Voter Non-Age Status</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    {result.voterNonAgePassed
                      ? "All youth voting non-age qualifications met."
                      : "Missing citizenship, 6-month residency, or registration."}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    {result.candidateNonAgePassed ? (
                      <CheckCircle size={16} weight="fill" aria-hidden="true" className="text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle size={16} weight="fill" aria-hidden="true" className="text-rose-400 shrink-0" />
                    )}
                    <span>Candidate Non-Age Status</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    {result.candidateNonAgePassed
                      ? "All candidate qualifications (1-yr residence, literacy, anti-dynasty clearance) met."
                      : "May have dynasty disqualification, literacy issue, or <1yr residency."}
                  </p>
                </div>
              </div>

              {result.disqualificationReasons.length > 0 && (
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-xs font-semibold text-rose-300 mb-1">Identified Disqualifying Flags:</p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                    {result.disqualificationReasons.map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
