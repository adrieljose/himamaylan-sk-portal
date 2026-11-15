"use client";
import { useState } from "react";
import Link from "next/link";
import {
  calculateAgeOnElectionDay,
  validateBirthDate,
  assessVoterRequirements,
  type Answer,
} from "@/lib/eligibility";
const QUESTIONS = [
  "Are you a Filipino citizen?",
  "Will you have resided in the Philippines for at least one year immediately before election day?",
  "Will you have resided in the place where you intend to vote for at least six months immediately before election day?",
  "Is your voter registration active in the correct locality?",
  "Are you free from legal disqualifications to vote? (Ask COMELEC if unsure.)",
];
export function EligibilityChecker() {
  const [dob, setDob] = useState("");
  const [answers, setAnswers] = useState<Answer[]>(["", "", "", "", ""]);
  const error = dob ? validateBirthDate(dob) : null;
  const age = dob && !error ? calculateAgeOnElectionDay(dob) : null;
  return (
    <div className="space-y-8">
      <div className="bg-white border border-line rounded-lg p-6 sm:p-8">
        <label
          htmlFor="birth-date"
          className="block text-lg font-semibold text-ink-950"
        >
          Your date of birth
        </label>
        <p id="dob-help" className="text-sm mt-2 mb-4">
          Your age is calculated on May 8, 2028. Your birth date stays in this
          browser and is not saved or included in shared links.
        </p>
        <input
          id="birth-date"
          type="date"
          min="1900-01-01"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          aria-describedby={error ? "dob-help dob-error" : "dob-help"}
          aria-invalid={!!error}
          className="border border-line-control rounded px-4 py-3 min-h-[48px] w-full sm:w-80 bg-white text-ink-950"
        />
        {error && (
          <p id="dob-error" role="alert" className="text-red-700 mt-3">
            {error}
          </p>
        )}
      </div>
      {age && (
        <>
          <div
            aria-live="polite"
            aria-atomic="true"
            className="p-6 sm:p-8 bg-navy-900 on-dark rounded-lg text-white"
          >
            <p className="text-orange-300 uppercase tracking-wider text-sm">
              Your age on election day
            </p>
            <p className="text-3xl sm:text-5xl font-display mt-3">
              {age.years} years{" "}
              <span className="text-xl sm:text-2xl">
                {age.months} months · {age.days} days
              </span>
            </p>
            <p className="mt-5 font-semibold">
              {age.voterAgeMet
                ? "You meet the minimum voting age."
                : "You do not meet the minimum voting age for 2028."}
            </p>
            <p className="mt-2">
              You must turn 18 on or before May 8, 2028 (born on or before May
              8, 2010). There is no upper voting age limit.
            </p>
          </div>
          <section>
            <h2 className="text-2xl mb-4">
              National candidate age requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {age.offices.map((o) => (
                <div key={o.id} className="p-6 border border-line rounded-lg">
                  <h3 className="text-lg">{o.label}</h3>
                  <p className="text-3xl font-display my-3">{o.minAge}+</p>
                  <p
                    className={
                      o.ageMet
                        ? "text-green-800 font-semibold"
                        : "text-red-700 font-semibold"
                    }
                  >
                    {o.ageMet ? "Age requirement met" : "Below minimum age"}
                  </p>
                  <p className="text-sm mt-3">{o.requirements}</p>
                  <p className="text-xs mt-4 text-ink-600">{o.citation}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm">
              These are age checks, not a finding of eligibility or approval of
              candidacy. Local offices and party-list nominees have separate
              rules.{" "}
              <Link className="underline text-navy-700" href="/qualifications">
                Read qualifications.
              </Link>
            </p>
          </section>
          <section className="border border-line p-6 sm:p-8 rounded-lg">
            <h2 className="text-2xl">Domestic voter self-assessment</h2>
            <p className="mt-3 mb-6">
              For residents voting in the Philippines. Overseas voting follows
              separate rules. Unanswered questions remain unconfirmed.
            </p>
            <div className="space-y-5">
              {QUESTIONS.map((q, i) => (
                <fieldset key={q}>
                  <legend className="font-semibold mb-2">{q}</legend>
                  <div className="flex flex-wrap gap-4">
                    {(
                      [
                        ["", "Not sure"],
                        ["yes", "Yes"],
                        ["no", "No"],
                      ] as const
                    ).map(([v, label]) => (
                      <label
                        key={v}
                        className="flex items-center gap-2 min-h-[44px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${i}`}
                          value={v}
                          checked={answers[i] === v}
                          onChange={() =>
                            setAnswers((prev) =>
                              prev.map((a, j) => (j === i ? v : a)),
                            )
                          }
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            <p
              role="status"
              className="mt-6 p-4 bg-surface-subtle font-semibold"
            >
              {assessVoterRequirements(age.voterAgeMet, answers)}
            </p>
          </section>
          <div className="flex flex-wrap gap-4 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="bg-navy-700 text-white rounded px-5 py-3"
            >
              Print result
            </button>
            <button
              type="button"
              onClick={() => {
                setDob("");
                setAnswers(["", "", "", "", ""]);
              }}
              className="border border-line-control rounded px-5 py-3"
            >
              Clear information
            </button>
          </div>
        </>
      )}
      <p className="text-sm">
        Age alone does not entitle you to vote. COMELEC determines registration
        and eligibility. This tool does not register you or look up your voter
        record.
      </p>
    </div>
  );
}
