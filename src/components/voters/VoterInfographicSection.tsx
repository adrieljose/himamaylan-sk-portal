"use client";

import React, { useState, useMemo } from "react";
import {
  Users,
  ChartBar,
  CaretUp,
  CaretDown,
  TrendUp,
  TrendDown,
  Info,
  MagnifyingGlass,
  Sparkle,
  ShieldCheck,
  CheckCircle,
  MapPin,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import {
  BARANGAY_VOTER_STATS,
  VOTER_STATISTICS_OVERVIEW,
  BarangayVoterStat,
} from "@/config/voterStats";

type ViewMode = "overall" | "sk" | "regular";

export function VoterInfographicSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("overall");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<"rank" | "alpha" | "lowest" | "youthPercent">("rank");

  const processedBarangays = useMemo(() => {
    let list = [...BARANGAY_VOTER_STATS];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((b) => b.barangay.toLowerCase().includes(q));
    }

    if (sortOption === "alpha") {
      list.sort((a, b) => a.barangay.localeCompare(b.barangay));
    } else if (sortOption === "lowest") {
      list.sort((a, b) => {
        const valA = viewMode === "overall" ? a.totalVoters : viewMode === "sk" ? a.skVoters : a.regularVoters;
        const valB = viewMode === "overall" ? b.totalVoters : viewMode === "sk" ? b.skVoters : b.regularVoters;
        return valA - valB;
      });
    } else if (sortOption === "youthPercent") {
      list.sort((a, b) => {
        const pctA = (a.skVoters / a.totalVoters) * 100;
        const pctB = (b.skVoters / b.totalVoters) * 100;
        return pctB - pctA;
      });
    } else {

      list.sort((a, b) => {
        const valA = viewMode === "overall" ? a.totalVoters : viewMode === "sk" ? a.skVoters : a.regularVoters;
        const valB = viewMode === "overall" ? b.totalVoters : viewMode === "sk" ? b.skVoters : b.regularVoters;
        return valB - valA;
      });
    }

    return list;
  }, [viewMode, searchQuery, sortOption]);

  const maxBarValue = useMemo(() => {
    if (viewMode === "overall") return 8102;
    if (viewMode === "sk") return 2549;
    return 7811;
  }, [viewMode]);

  return (
    <section id="voter-infographics" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80 font-sans">
      <Container size="xl">
        <div className="space-y-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-comelec-blue-700 uppercase tracking-wider">
                <span className="px-2.5 py-0.5 rounded-full bg-comelec-blue-100 text-comelec-blue-900 font-bold border border-comelec-blue-200">
                  COMELEC Official Statistics
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 font-serif italic">
                  &ldquo;Ready kana ba sa pala-abuton nga election?&rdquo;
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                Himamaylan City Registered Voters Infographic
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Official municipal voter demographics and statistics across all 19 barangays categorized by statutory age brackets: <strong>Ages 15–17</strong>, <strong>18–30 (SK)</strong>, and <strong>31 &amp; Above</strong>.
              </p>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300/80 self-start md:self-auto shrink-0 shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode("overall")}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  viewMode === "overall"
                    ? "bg-white text-comelec-blue-950 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Overall ({VOTER_STATISTICS_OVERVIEW.totalRegistered.toLocaleString()})
              </button>
              <button
                type="button"
                onClick={() => setViewMode("sk")}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  viewMode === "sk"
                    ? "bg-comelec-blue-900 text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                SK Voters ({VOTER_STATISTICS_OVERVIEW.skRegistered.toLocaleString()})
              </button>
              <button
                type="button"
                onClick={() => setViewMode("regular")}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  viewMode === "regular"
                    ? "bg-white text-comelec-blue-950 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Regular ({VOTER_STATISTICS_OVERVIEW.regularRegistered.toLocaleString()})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            <div className="md:col-span-5 lg:col-span-4 bg-gradient-to-br from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-card border border-comelec-blue-800 space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-comelec-gold-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <span className="text-xs uppercase font-bold tracking-widest text-comelec-gold-400">
                  {viewMode === "overall"
                    ? "Total Registered Voters"
                    : viewMode === "sk"
                    ? "Total SK Youth Voters (15–30)"
                    : "Total Regular Voters (18+)"}
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {viewMode === "overall"
                      ? VOTER_STATISTICS_OVERVIEW.totalRegistered.toLocaleString()
                      : viewMode === "sk"
                      ? VOTER_STATISTICS_OVERVIEW.skRegistered.toLocaleString()
                      : VOTER_STATISTICS_OVERVIEW.regularRegistered.toLocaleString()}
                  </span>
                  <span className="text-xs text-blue-200 font-medium">voters</span>
                </div>

                <p className="text-xs text-blue-100/80 leading-relaxed font-normal">
                  {viewMode === "overall"
                    ? "Combined voter count across all 19 official barangays of Himamaylan City spanning all three age brackets."
                    : viewMode === "sk"
                    ? "Youth voters aged 15 to 30 eligible to vote in the Sangguniang Kabataan Elections."
                    : "Adult and regular voters aged 18 and above registered for synchronized barangay & local elections."}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10 relative z-10 text-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block">
                  Demographic Breakdown
                </span>

                {viewMode === "overall" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-amber-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                        Ages 15–17 (SK-Exclusive)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">3,003</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(3.7%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-emerald-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                        Ages 18–30 (Dual SK &amp; Regular)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">25,365</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(31.0%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-sky-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0" />
                        Ages 31 &amp; Above (Regular Only)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">53,453</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(65.3%)</span>
                      </div>
                    </div>
                  </div>
                )}

                {viewMode === "sk" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-amber-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                        Ages 15–17 (SK-Only Voters)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">3,003</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(10.6%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-emerald-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                        Ages 18–30 (Dual SK Voters)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">25,365</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(89.4%)</span>
                      </div>
                    </div>
                  </div>
                )}

                {viewMode === "regular" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-emerald-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                        Ages 18–30 (Young Regulars)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">25,365</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(32.2%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2 text-sky-300 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0" />
                        Ages 31 &amp; Above (Adult Regulars)
                      </span>
                      <div className="text-right">
                        <span className="font-bold text-white">53,453</span>
                        <span className="text-[11px] text-slate-300 ml-1.5">(67.8%)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider flex items-center gap-1.5">
                    <TrendUp size={16} weight="fill" className="text-emerald-600" />
                    Highest Barangay
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    #1 Rank
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Aguisan</h4>
                  <p className="text-2xl font-black text-emerald-950 mt-1">
                    {viewMode === "overall"
                      ? "8,102"
                      : viewMode === "sk"
                      ? "2,549"
                      : "7,811"}{" "}
                    <span className="text-xs text-slate-500 font-normal">voters</span>
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 font-normal">
                  Largest voter population in the 5th District of Negros Occidental.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-rose-700 tracking-wider flex items-center gap-1.5">
                    <TrendDown size={16} weight="fill" className="text-rose-600" />
                    Lowest Barangay
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-800 border border-rose-200">
                    #19 Rank
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">I-Poblacion</h4>
                  <p className="text-2xl font-black text-rose-950 mt-1">
                    {viewMode === "overall"
                      ? "1,668"
                      : viewMode === "sk"
                      ? "460"
                      : "1,631"}{" "}
                    <span className="text-xs text-slate-500 font-normal">voters</span>
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 font-normal">
                  Smallest registered electoral base within the city proper.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-comelec-blue-700 tracking-wider flex items-center gap-1.5">
                    <ChartBar size={16} weight="fill" className="text-comelec-blue-600" />
                    City Average
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    19 Barangays
                  </span>
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-medium">Mean Voters per Barangay</h4>
                  <p className="text-2xl font-black text-comelec-blue-950 mt-1">
                    {viewMode === "overall"
                      ? "4,306"
                      : viewMode === "sk"
                      ? "1,493"
                      : "4,148"}{" "}
                    <span className="text-xs text-slate-500 font-normal">avg voters</span>
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 font-normal">
                  Standard baseline across all local polling precincts.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 text-white shadow-sm space-y-2 sm:col-span-2 lg:col-span-2 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-comelec-gold-400 uppercase tracking-wider">
                  <Sparkle size={16} weight="fill" />
                  <span>Demographic Disparity Ratio</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {viewMode === "overall" ? "4.9×" : viewMode === "sk" ? "5.5×" : "4.8×"}
                  </span>
                  <p className="text-xs text-slate-300 font-normal">
                    Aguisan has about{" "}
                    <strong>
                      {viewMode === "overall" ? "4.9×" : viewMode === "sk" ? "5.5×" : "4.8×"}
                    </strong>{" "}
                    more registered voters than I-Poblacion, representing the widest demographic gap between any two barangays.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-comelec-blue-900 text-white shadow-sm space-y-2 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-comelec-gold-300 uppercase tracking-wider">
                  <ShieldCheck size={16} weight="fill" />
                  <span>Top 7 of 19 Barangays</span>
                </div>
                <p className="text-xs text-blue-100 font-normal leading-relaxed">
                  The top 7 largest barangays account for roughly <strong>50% (half)</strong> of all registered voters municipality-wide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-6">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  Barangay Ranking — {viewMode === "overall" ? "Overall Voters" : viewMode === "sk" ? "SK Youth Voters" : "Regular Voters"}
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  Interactive breakdown per barangay showing statutory cohort distribution.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                <div className="relative w-full sm:w-56">
                  <MagnifyingGlass
                    size={16}
                    weight="fill"
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search barangay..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-comelec-blue-600"
                  />
                </div>

                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-comelec-blue-600"
                >
                  <option value="rank">Highest Voters</option>
                  <option value="lowest">Lowest Voters</option>
                  <option value="alpha">Alphabetical</option>
                  <option value="youthPercent">Highest Youth %</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-150">
              <span className="text-slate-400 uppercase text-[11px] font-bold tracking-wider">Legend:</span>
              {(viewMode === "overall" || viewMode === "sk") && (
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-amber-500 shrink-0" />
                  <span>Ages 15–17</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-600 shrink-0" />
                <span>Ages 18–30 (SK &amp; Regular)</span>
              </div>
              {(viewMode === "overall" || viewMode === "regular") && (
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-blue-950 shrink-0" />
                  <span>Ages 31 &amp; Above</span>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-2">
              {processedBarangays.map((b, index) => {
                const totalInMode =
                  viewMode === "overall"
                    ? b.totalVoters
                    : viewMode === "sk"
                    ? b.skVoters
                    : b.regularVoters;

                const barWidthPct = (totalInMode / maxBarValue) * 100;

                const p15to17 = totalInMode > 0 ? (b.age15to17 / totalInMode) * 100 : 0;
                const p18to30 = totalInMode > 0 ? (b.age18to30 / totalInMode) * 100 : 0;
                const p31above = totalInMode > 0 ? (b.age31above / totalInMode) * 100 : 0;

                return (
                  <div key={b.barangay} className="space-y-1.5 group">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 text-xs font-bold text-slate-400 font-mono">
                          {String(b.rank).padStart(2, "0")}
                        </span>
                        <span className="font-bold text-slate-900 group-hover:text-comelec-blue-700 transition-colors">
                          {b.barangay}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">

                        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500">
                          {viewMode !== "regular" && (
                            <span className="text-amber-700">15–17: {b.age15to17.toLocaleString()}</span>
                          )}
                          <span className="text-emerald-700">18–30: {b.age18to30.toLocaleString()}</span>
                          {viewMode !== "sk" && (
                            <span className="text-blue-900">31+: {b.age31above.toLocaleString()}</span>
                          )}
                        </div>

                        <span className="font-black text-slate-900 min-w-[54px] text-right">
                          {totalInMode.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-3 sm:h-3.5 overflow-hidden flex shadow-inner">
                      <div
                        className="h-full flex transition-all duration-500 rounded-full overflow-hidden"
                        style={{ width: `${barWidthPct}%` }}
                      >

                        {viewMode !== "regular" && (
                          <div
                            style={{ width: `${p15to17}%` }}
                            className="h-full bg-amber-500 transition-all hover:opacity-90"
                            title={`${b.barangay} Ages 15-17: ${b.age15to17} (${p15to17.toFixed(1)}%)`}
                          />
                        )}

                        <div
                          style={{ width: `${p18to30}%` }}
                          className="h-full bg-emerald-600 transition-all hover:opacity-90"
                          title={`${b.barangay} Ages 18-30: ${b.age18to30} (${p18to30.toFixed(1)}%)`}
                        />

                        {viewMode !== "sk" && (
                          <div
                            style={{ width: `${p31above}%` }}
                            className="h-full bg-blue-950 transition-all hover:opacity-90"
                            title={`${b.barangay} Ages 31+: ${b.age31above} (${p31above.toFixed(1)}%)`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Info size={16} weight="fill" className="text-comelec-blue-700" />
                Source: <strong>COMELEC — Number of Voters per Barangay by Age Bracket</strong>
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                Himamaylan City, Negros Occidental • 5th District
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
