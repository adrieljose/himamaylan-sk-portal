"use client";

import React, { useState } from "react";
import { CheckCircle, XCircle, ArrowCounterClockwise } from "@phosphor-icons/react";
import { clsx } from "clsx";
import {
  QUESTIONNAIRE_CRITERIA,
  evaluateQuestionnaire,
  QuestionnaireAnswers,
} from "@/lib/eligibility";

interface ExpandedQuestionnaireProps {
  calculatedAge: number;
}

const EMPTY: QuestionnaireAnswers = {
  isCitizen: null,
  isResidentSixMonths: null,
  isResidentOneYear: null,
  isLiterate: null,
  isRegisteredVoter: null,
  hasDynastyConflict: null,
};

export function ExpandedQuestionnaire({ calculatedAge }: ExpandedQuestionnaireProps) {
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(EMPTY);

  const handleAnswer = (key: keyof QuestionnaireAnswers, value: boolean) =>
    setAnswers((prev) => ({ ...prev, [key]: value }));

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;
  const isComplete = answeredCount === QUESTIONNAIRE_CRITERIA.length;
  const result = evaluateQuestionnaire(answers, calculatedAge);

  return (
    <section aria-labelledby="questionnaire-heading">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-4 border-b border-ink-950">
        <div>
          <h3
            id="questionnaire-heading"
            className="font-display font-semibold text-ink-950 text-lg sm:text-xl"
          >
            The requirements age cannot tell you
          </h3>
          <p className="mt-1.5 text-sm text-ink-700 prose-civic">
            Answer honestly. Nothing here is recorded or sent anywhere.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <p className="text-sm text-ink-700" aria-live="polite">
            <span className="font-display font-semibold text-ink-950">
              {answeredCount}
            </span>{" "}
            of {QUESTIONNAIRE_CRITERIA.length} answered
          </p>
          {answeredCount > 0 && (
            <button
              type="button"
              onClick={() => setAnswers(EMPTY)}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-sm font-display font-semibold text-ink-700 hover:text-navy-700 transition-colors cursor-pointer"
            >
              <ArrowCounterClockwise size={15} weight="bold" aria-hidden="true" />
              Reset
            </button>
          )}
        </div>
      </div>

      <ol className="divide-y divide-line">
        {QUESTIONNAIRE_CRITERIA.map((q, idx) => {
          const key = q.id as keyof QuestionnaireAnswers;
          const currentVal = answers[key];

          return (
            <li key={q.id} className="py-6">
              {/*
                A radio group rather than two toggle buttons: it is one question
                with two mutually exclusive answers, so arrow keys move between
                them and a screen reader announces "1 of 2 selected".
              */}
              <fieldset className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                <legend className="sr-only">{q.title}</legend>

                <div className="flex-1 flex gap-4">
                  <span
                    className="font-display font-semibold text-ink-600 text-sm shrink-0 w-6 pt-0.5"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-ink-950 text-base">
                      {q.title}
                      <span className="ml-2 font-normal text-xs text-ink-600 uppercase tracking-[0.06em]">
                        {q.scope}
                      </span>
                    </p>
                    <p className="mt-1.5 text-sm text-ink-700 leading-relaxed prose-civic">
                      {q.description}
                    </p>
                    <p className="mt-1.5 text-xs text-ink-600">{q.legalBasis}</p>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0 pl-10 lg:pl-0">
                  {[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ].map((opt) => {
                    const selected = currentVal === opt.value;
                    const inputId = `${q.id}-${opt.label.toLowerCase()}`;
                    return (
                      <label
                        key={opt.label}
                        htmlFor={inputId}
                        className={clsx(
                          "px-5 min-h-[44px] flex items-center rounded border font-display text-sm font-semibold cursor-pointer transition-colors",
                          "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-navy-700",
                          selected
                            ? "bg-navy-900 border-navy-900 text-white"
                            : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                        )}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name={q.id}
                          className="sr-only"
                          checked={selected}
                          onChange={() => handleAnswer(key, opt.value)}
                        />
                        {opt.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </li>
          );
        })}
      </ol>

      {isComplete && (
        <div className="mt-8 border border-line rounded animate-fade-rise">
          <div className="px-5 sm:px-6 py-4 border-b border-line bg-surface-subtle">
            <h4 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600">
              Based on your answers
            </h4>
          </div>

          <dl className="divide-y divide-line">
            {[
              {
                label: "Voting requirements other than age",
                passed: result.voterNonAgePassed,
                yes: "You meet all of them.",
                no: "Citizenship, six-month residency or registration is missing.",
              },
              {
                label: "Candidacy requirements other than age",
                passed: result.candidateNonAgePassed,
                yes: "You meet all of them, including the anti-dynasty rule.",
                no: "One year of residency, literacy or the anti-dynasty rule is not met.",
              },
            ].map((row) => (
              <div key={row.label} className="px-5 sm:px-6 py-4 flex items-start gap-3.5">
                {row.passed ? (
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
                <div>
                  <dt className="font-display font-semibold text-ink-950 text-[0.9375rem]">
                    {row.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink-700">
                    <strong
                      className={clsx(
                        "font-semibold",
                        row.passed ? "text-status-success" : "text-status-danger"
                      )}
                    >
                      {row.passed ? "Met" : "Not met"}
                    </strong>
                    {" — "}
                    {row.passed ? row.yes : row.no}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          {result.disqualificationReasons.length > 0 && (
            <div className="px-5 sm:px-6 py-5 border-t border-line bg-status-danger-bg">
              <p className="font-display font-semibold text-status-danger text-sm">
                What stands in the way
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {result.disqualificationReasons.map((reason, i) => (
                  <li key={i} className="text-sm text-ink-800 flex gap-2.5">
                    <span aria-hidden="true" className="text-status-danger">
                      &bull;
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="px-5 sm:px-6 py-4 border-t border-line text-xs text-ink-600 leading-relaxed">
            This self-assessment is a guide. Only the Election Registration Board and the
            evaluation of a certificate of candidacy determine eligibility.
          </p>
        </div>
      )}
    </section>
  );
}
