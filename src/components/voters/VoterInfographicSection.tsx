"use client";

import React, { useState, useMemo, useId } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Select } from "@/components/ui/Field";
import { Notice } from "@/components/ui/Notice";
import { Reveal } from "@/components/motion/Reveal";
import {
  BARANGAY_VOTER_STATS,
  VOTER_STATISTICS_OVERVIEW,
} from "@/config/voterStats";

type ViewMode = "overall" | "sk" | "regular";
type SortOption = "rank" | "alpha" | "lowest" | "youthPercent";

const VIEW_MODES: { id: ViewMode; label: string; description: string }[] = [
  { id: "overall", label: "All voters", description: "Every registered voter" },
  { id: "sk", label: "SK voters", description: "Ages 15 to 30" },
  { id: "regular", label: "Barangay voters", description: "Ages 18 and above" },
];

const nf = new Intl.NumberFormat("en-PH");

export function VoterInfographicSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("overall");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("rank");
  const uid = useId();

  const valueFor = (b: (typeof BARANGAY_VOTER_STATS)[number]) =>
    viewMode === "overall" ? b.totalVoters : viewMode === "sk" ? b.skVoters : b.regularVoters;

  const processedBarangays = useMemo(() => {
    let list = [...BARANGAY_VOTER_STATS];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((b) => b.barangay.toLowerCase().includes(q));
    }

    const value = (b: (typeof BARANGAY_VOTER_STATS)[number]) =>
      viewMode === "overall" ? b.totalVoters : viewMode === "sk" ? b.skVoters : b.regularVoters;

    if (sortOption === "alpha") {
      list.sort((a, b) => a.barangay.localeCompare(b.barangay));
    } else if (sortOption === "lowest") {
      list.sort((a, b) => value(a) - value(b));
    } else if (sortOption === "youthPercent") {
      list.sort((a, b) => b.skVoters / b.totalVoters - a.skVoters / a.totalVoters);
    } else {
      list.sort((a, b) => value(b) - value(a));
    }

    return list;
  }, [viewMode, searchQuery, sortOption]);

  const maxBarValue = useMemo(() => {
    if (viewMode === "overall") return 8102;
    if (viewMode === "sk") return 2549;
    return 7811;
  }, [viewMode]);

  const o = VOTER_STATISTICS_OVERVIEW;

  const headline = [
    { label: "Registered voters", value: o.totalRegistered, note: "across 19 barangays" },
    { label: "Katipunan ng Kabataan", value: o.skRegistered, note: "ages 15 to 30" },
    { label: "Aged 15 to 17", value: o.age15to17Total, note: "SK ballot only" },
    { label: "Aged 18 to 30", value: o.age18to30Total, note: "two ballots" },
  ];

  const activeMode = VIEW_MODES.find((m) => m.id === viewMode)!;

  return (
    <section
      id="voter-infographics"
      aria-labelledby="voter-data-heading"
      className="py-14 sm:py-20 lg:py-24 bg-white border-b border-line scroll-mt-20"
    >
      <Container>
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow">Registered voter data</p>
          <h2
            id="voter-data-heading"
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950"
          >
            Who is registered in Himamaylan City
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
            Official registration figures from the Office of the Election Officer, broken
            down by barangay and age cohort.
          </p>
        </Reveal>

        <Reveal as="div" delay={80}>
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-ink-950">
          {headline.map((stat) => (
            <div
              key={stat.label}
              className="py-6 pr-6 border-b border-line lg:border-r last:lg:border-r-0 lg:pl-6 first:lg:pl-0"
            >
              <dt className="text-sm text-ink-700">{stat.label}</dt>
              <dd>
                <span className="mt-2 block font-display font-semibold text-ink-950 text-2xl sm:text-3xl">
                  {nf.format(stat.value)}
                </span>
                <span className="mt-1 block text-xs text-ink-600">{stat.note}</span>
              </dd>
            </div>
          ))}
        </dl>
        </Reveal>

        <div className="mt-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div
              role="group"
              aria-label="Choose which voter group to display"
              className="flex flex-wrap gap-2"
            >
              {VIEW_MODES.map((mode) => {
                const active = viewMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setViewMode(mode.id)}
                    aria-pressed={active}
                    className={clsx(
                      "px-4 py-2.5 min-h-[44px] rounded border font-display text-sm font-semibold transition-colors cursor-pointer",
                      active
                        ? "bg-navy-900 border-navy-900 text-white"
                        : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                    )}
                  >
                    {mode.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <div className="relative">
                <label htmlFor={`${uid}-search`} className="sr-only">
                  Search barangays by name
                </label>
                <MagnifyingGlass
                  size={17}
                  weight="bold"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-600"
                />
                <input
                  id={`${uid}-search`}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search barangay"
                  className="w-full sm:w-56 min-h-[48px] pl-10 pr-3.5 py-3 bg-white border border-line-control rounded text-[0.9375rem] text-ink-950 placeholder:text-ink-600 hover:border-ink-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor={`${uid}-sort`} className="sr-only">
                  Sort barangays
                </label>
                <Select
                  id={`${uid}-sort`}
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="sm:w-56"
                >
                  <option value="rank">Most voters first</option>
                  <option value="lowest">Fewest voters first</option>
                  <option value="alpha">Barangay name (A–Z)</option>
                  <option value="youthPercent">Highest youth share</option>
                </Select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <caption className="sr-only">
                Registered {activeMode.label.toLowerCase()} ({activeMode.description}) by
                barangay in Himamaylan City. {processedBarangays.length} barangays shown.
              </caption>
              <thead>
                <tr className="border-y border-ink-950">
                  <th
                    scope="col"
                    className="py-3.5 pr-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700 w-8"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pr-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700"
                  >
                    Barangay
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700 w-[45%]"
                  >
                    {activeMode.label}
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700 text-right"
                  >
                    Youth share
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {processedBarangays.map((b, i) => {
                  const value = valueFor(b);
                  const pct = Math.round((value / maxBarValue) * 100);
                  const youthShare = ((b.skVoters / b.totalVoters) * 100).toFixed(1);

                  return (
                    <tr key={b.barangay}>
                      <td className="py-4 pr-4 text-sm text-ink-600 align-middle">
                        {i + 1}
                      </td>
                      <th
                        scope="row"
                        className="py-4 pr-4 font-display font-semibold text-ink-950 text-[0.9375rem] align-middle whitespace-nowrap"
                      >
                        {b.barangay}
                      </th>
                      <td className="py-4 px-4 align-middle">
                        <span className="flex items-center gap-3">
                          {/*
                            The bar is decoration; the figure beside it is the data.
                            Screen readers get the number, not a meaningless graphic.
                          */}
                          <span
                            className="flex-1 h-2.5 bg-surface-sunken rounded-sm overflow-hidden min-w-[60px]"
                            aria-hidden="true"
                          >
                            <span
                              className="block h-full bg-navy-700 rounded-sm"
                              style={{ width: `${pct}%` }}
                            />
                          </span>
                          <span className="font-display font-semibold text-ink-950 text-sm w-16 text-right shrink-0">
                            {nf.format(value)}
                          </span>
                        </span>
                      </td>
                      <td className="py-4 pl-4 text-sm text-ink-700 text-right align-middle whitespace-nowrap">
                        {youthShare}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {processedBarangays.length === 0 && (
              <div className="border-b border-line py-14 text-center">
                <p className="font-display font-semibold text-ink-950">
                  No barangay matches &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-700">
                  Check the spelling, or clear the search to see all 19 barangays.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-5 px-5 py-2.5 min-h-[44px] border border-line-strong rounded font-display text-sm font-semibold text-ink-900 hover:bg-surface-subtle transition-colors cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          <p aria-live="polite" className="sr-only">
            Showing {processedBarangays.length} barangays, {activeMode.label}.
          </p>

          <Notice tone="statutory" className="mt-8">
            Figures are as published by the Office of the Election Officer and cover{" "}
            {nf.format(o.totalRegistered)} registered voters. The largest barangay,{" "}
            {o.highestBarangay.name}, has {nf.format(o.highestBarangay.total)} voters; the
            smallest, {o.lowestBarangay.name}, has {nf.format(o.lowestBarangay.total)}.
          </Notice>
        </div>
      </Container>
    </section>
  );
}
