"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  XCircle,
  MapPin,
  FileText,
} from "@phosphor-icons/react";
import {
  MONTH_NAMES,
  DAYS_IN_MONTHS,
  YEAR_RANGE,
  calculateExactAge,
  checkEligibility,
  validateDateOfBirth,
} from "@/lib/eligibility";
import { HIMAMAYLAN_BARANGAYS } from "@/config/barangays";

export function QuickCheckerEmbed() {
  const router = useRouter();
  const [month, setMonth] = useState(11);
  const [day, setDay] = useState(2);
  const [year, setYear] = useState(2005); // Defaults to age 21
  const [selectedBarangay, setSelectedBarangay] = useState<string>("");

  const validation = useMemo(() => validateDateOfBirth(month, day, year), [month, day, year]);
  const isValid = validation.isValid;

  const ageResult = useMemo(() => {
    return isValid ? calculateExactAge(month, day, year) : calculateExactAge(11, 2, 2005);
  }, [month, day, year, isValid]);

  const eligibility = useMemo(() => {
    return isValid ? checkEligibility(month, day, year) : checkEligibility(11, 2, 2005);
  }, [month, day, year, isValid]);

  const handlePreset = (presetAge: number) => {
    const targetYear = 2026 - presetAge;
    setMonth(11);
    setDay(2);
    setYear(targetYear);
  };

  const handleLaunchFullChecker = (e: React.FormEvent) => {
    e.preventDefault();
    const dobString = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const query = selectedBarangay
      ? `/checker?dob=${dobString}&barangay=${encodeURIComponent(selectedBarangay)}`
      : `/checker?dob=${dobString}`;
    router.push(query);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-slate-50 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-comelec-blue-100 text-comelec-blue-900 text-xs font-semibold uppercase tracking-wider border border-comelec-blue-200">
            <Sparkle size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-600" />
            Interactive Civic Tool
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Instant SK Age &amp; Eligibility Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Select your exact birth date below. The calculator immediately computes your statutory age on <strong>November 2, 2026</strong>.
          </p>
        </div>

        {/* Double Bezel Hardware Container */}
        <div className="bezel-outer shadow-floating">
          <div className="bezel-inner p-6 sm:p-9 space-y-6">
            {/* Header with Live Status Eyebrow */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Test Presets:
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {[15, 18, 21, 24, 25, 30].map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => handlePreset(age)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${ageResult.years === age && month === 11 && day === 2
                        ? "bg-comelec-blue-900 text-comelec-gold-300 ring-2 ring-comelec-gold-400 shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                    >
                      {age} yo
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Date Inputs Form */}
            <form onSubmit={handleLaunchFullChecker} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label htmlFor="quick-month-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Birth Month
                  </label>
                  <select
                    id="quick-month-select"
                    value={month}
                    onChange={(e) => setMonth(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all cursor-pointer min-h-[48px]"
                  >
                    {MONTH_NAMES.map((name, i) => (
                      <option key={name} value={i + 1}>
                        {name} ({i + 1})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quick-day-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Birth Day
                  </label>
                  <select
                    id="quick-day-select"
                    value={day}
                    onChange={(e) => setDay(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all cursor-pointer font-mono min-h-[48px]"
                  >
                    {DAYS_IN_MONTHS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quick-year-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Birth Year
                  </label>
                  <select
                    id="quick-year-select"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all font-mono cursor-pointer min-h-[48px]"
                  >
                    {YEAR_RANGE.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Barangay Selection */}
              <div>
                <label htmlFor="quick-barangay-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <MapPin size={16} aria-hidden="true" className="text-comelec-blue-700" weight="fill" />
                  <span>Your Himamaylan Barangay (Optional)</span>
                </label>
                <select
                  id="quick-barangay-select"
                  value={selectedBarangay}
                  onChange={(e) => setSelectedBarangay(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all cursor-pointer min-h-[48px]"
                >
                  <option value="">-- Select Your Barangay (All 19 Barangays) --</option>
                  {HIMAMAYLAN_BARANGAYS.map((bgy) => (
                    <option key={bgy.id} value={bgy.name}>
                      {bgy.name} ({bgy.type})
                    </option>
                  ))}
                </select>
              </div>

              {/* Real-time Computed Result Preview Card */}
              {isValid && (
                <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border border-comelec-blue-800 shadow-card space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <span className="text-xs text-comelec-gold-300 font-semibold uppercase tracking-wider block">
                        Statutory Age on Nov 2, 2026
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                        {ageResult.years} <span className="text-base text-slate-300 font-normal">Years Old</span>{" "}
                        <span className="text-xs text-slate-400 font-normal font-sans">
                          ({ageResult.months}m, {ageResult.days}d)
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-comelec-gold-300 border border-white/15">
                      {ageResult.categoryLabel}
                    </span>
                  </div>

                  {/* Dual Status Indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-lg bg-white/10 border border-white/10 flex items-start gap-2.5">
                      {eligibility.isVoterEligible ? (
                        <CheckCircle size={20} weight="fill" aria-hidden="true" className="text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle size={20} weight="fill" aria-hidden="true" className="text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="text-xs text-slate-300 font-medium block">
                          SK Voter (15–30 yrs):
                        </span>
                        <strong className="text-sm text-white font-semibold block">
                          {eligibility.voterEligibility.headline}
                        </strong>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/10 border border-white/10 flex items-start gap-2.5">
                      {eligibility.isCandidateEligible ? (
                        <CheckCircle size={20} weight="fill" aria-hidden="true" className="text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle size={20} weight="fill" aria-hidden="true" className="text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="text-xs text-slate-300 font-medium block">
                          SK Candidate (18–24 yrs):
                        </span>
                        <strong className="text-sm text-white font-semibold block">
                          {eligibility.candidateEligibility.headline}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-comelec-gold-400 via-comelec-gold-500 to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-card hover:shadow-glow-gold transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-[0.99] cursor-pointer border border-comelec-gold-300 min-h-[48px]"
              >
                <FileText size={20} weight="fill" aria-hidden="true" className="text-slate-950" />
                <span>Check My Eligibility</span>
                <ArrowRight size={16} weight="fill" aria-hidden="true" className="text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
