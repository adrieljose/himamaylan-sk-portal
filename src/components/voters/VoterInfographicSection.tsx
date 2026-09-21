"use client";

import React, { useId, useMemo, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { Select } from "@/components/ui/Field";
import { Notice } from "@/components/ui/Notice";
import { Reveal } from "@/components/motion/Reveal";
import { BARANGAY_VOTER_STATS, VOTER_STATISTICS_OVERVIEW } from "@/config/voterStats";

type SortOption = "rank" | "alpha" | "lowest" | "youthPercent";
const nf = new Intl.NumberFormat("en-PH");

export function VoterInfographicSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("rank");
  const uid = useId();
  const o = VOTER_STATISTICS_OVERVIEW;

  const processedBarangays = useMemo(() => {
    let list = [...BARANGAY_VOTER_STATS];
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter((item) => item.barangay.toLowerCase().includes(query));
    }
    if (sortOption === "alpha") list.sort((a, b) => a.barangay.localeCompare(b.barangay));
    else if (sortOption === "lowest") list.sort((a, b) => a.totalVoters - b.totalVoters);
    else if (sortOption === "youthPercent") list.sort((a, b) => b.skVoters / b.totalVoters - a.skVoters / a.totalVoters);
    else list.sort((a, b) => b.totalVoters - a.totalVoters);
    return list;
  }, [searchQuery, sortOption]);

  const totals = useMemo(() => processedBarangays.reduce(
    (sum, item) => ({
      age15to17: sum.age15to17 + item.age15to17,
      age18to30: sum.age18to30 + item.age18to30,
      age31above: sum.age31above + item.age31above,
      skVoters: sum.skVoters + item.skVoters,
      regularVoters: sum.regularVoters + item.regularVoters,
      totalVoters: sum.totalVoters + item.totalVoters,
    }),
    { age15to17: 0, age18to30: 0, age31above: 0, skVoters: 0, regularVoters: 0, totalVoters: 0 }
  ), [processedBarangays]);

  const headline = [
    { label: "Registered voters", value: o.totalRegistered, note: "all age groups" },
    { label: "Regular voters", value: o.regularRegistered, note: "ages 18 and above" },
    { label: "Katipunan ng Kabataan", value: o.skRegistered, note: "ages 15 to 30" },
    { label: "Aged 15 to 17", value: o.age15to17Total, note: "SK ballot only" },
    { label: "Aged 18 to 30", value: o.age18to30Total, note: "two ballots" },
    { label: "Aged 31 and above", value: o.age31aboveTotal, note: "regular ballot" },
  ];

  const headingClass = "py-3.5 px-3 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700 text-right";
  const cellClass = "py-4 px-3 text-sm text-ink-800 text-right";
  const totalClass = "py-4 px-3 font-display font-semibold text-ink-950 text-right";

  return (
    <section id="voter-infographics" aria-labelledby="voter-data-heading" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-line scroll-mt-20">
      <Container>
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow">Registered voter data</p>
          <h2 id="voter-data-heading" className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
            Who is registered in Himamaylan City
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
            Official registration figures from the Office of the Election Officer, with every age group and voter total shown by barangay.
          </p>
        </Reveal>

        <Reveal as="div" delay={80}>
          <dl className="grid grid-cols-2 lg:grid-cols-3 border-t border-ink-950">
            {headline.map((stat) => (
              <div key={stat.label} className="py-6 pr-4 sm:pr-6 border-b border-line lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:pl-6 lg:[&:nth-child(3n+1)]:pl-0">
                <dt className="text-sm text-ink-700">{stat.label}</dt>
                <dd>
                  <span className="mt-2 block font-display font-semibold text-ink-950 text-2xl sm:text-3xl">{nf.format(stat.value)}</span>
                  <span className="mt-1 block text-xs text-ink-600">{stat.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div className="max-w-2xl">
              <h3 className="font-display font-semibold text-ink-950 text-lg">Complete barangay breakdown</h3>
              <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                SK voters combine ages 15–17 and 18–30. Regular voters combine ages 18–30 and 31+. People aged 18–30 are included in both voter groups but counted only once in the all-voters total.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <div className="relative">
                <label htmlFor={`${uid}-search`} className="sr-only">Search barangays by name</label>
                <MagnifyingGlass size={17} weight="bold" aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-600" />
                <input id={`${uid}-search`} type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search barangay" className="w-full sm:w-56 min-h-[48px] pl-10 pr-3.5 py-3 bg-white border border-line-control rounded text-[0.9375rem] text-ink-950 placeholder:text-ink-600 hover:border-ink-600 transition-colors" />
              </div>
              <div>
                <label htmlFor={`${uid}-sort`} className="sr-only">Sort barangays</label>
                <Select id={`${uid}-sort`} value={sortOption} onChange={(event) => setSortOption(event.target.value as SortOption)} className="sm:w-56">
                  <option value="rank">Most voters first</option>
                  <option value="lowest">Fewest voters first</option>
                  <option value="alpha">Barangay name (A-Z)</option>
                  <option value="youthPercent">Highest youth share</option>
                </Select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[1080px] border-collapse text-left tabular-nums">
              <caption className="sr-only">Complete registered voter breakdown by barangay and age group in Himamaylan City. {processedBarangays.length} barangays shown.</caption>
              <thead>
                <tr className="border-y border-ink-950">
                  <th scope="col" className="py-3.5 pr-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700 w-8">#</th>
                  <th scope="col" className="py-3.5 pr-4 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-700">Barangay</th>
                  <th scope="col" className={headingClass}>Ages 15–17</th>
                  <th scope="col" className={headingClass}>Ages 18–30</th>
                  <th scope="col" className={headingClass}>Ages 31+</th>
                  <th scope="col" className={`${headingClass} bg-navy-50`}>SK total</th>
                  <th scope="col" className={`${headingClass} bg-surface-subtle`}>Regular 18+</th>
                  <th scope="col" className={`${headingClass} text-ink-950`}>All voters</th>
                  <th scope="col" className={headingClass}>Youth share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {processedBarangays.map((item, index) => (
                  <tr key={item.barangay}>
                    <td className="py-4 pr-4 text-sm text-ink-600">{index + 1}</td>
                    <th scope="row" className="py-4 pr-4 font-display font-semibold text-ink-950 text-[0.9375rem] whitespace-nowrap">{item.barangay}</th>
                    <td className={cellClass}>{nf.format(item.age15to17)}</td>
                    <td className={cellClass}>{nf.format(item.age18to30)}</td>
                    <td className={cellClass}>{nf.format(item.age31above)}</td>
                    <td className={`${cellClass} font-display font-semibold text-navy-800 bg-navy-50`}>{nf.format(item.skVoters)}</td>
                    <td className={`${cellClass} font-display font-semibold text-ink-900 bg-surface-subtle`}>{nf.format(item.regularVoters)}</td>
                    <td className={`${cellClass} font-display font-semibold text-ink-950`}>{nf.format(item.totalVoters)}</td>
                    <td className={cellClass}>{((item.skVoters / item.totalVoters) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
              {processedBarangays.length > 0 && (
                <tfoot>
                  <tr className="border-y-2 border-ink-950 bg-white">
                    <th scope="row" colSpan={2} className="py-4 pr-4 font-display font-semibold text-ink-950">
                      {processedBarangays.length === BARANGAY_VOTER_STATS.length ? "Himamaylan City total" : `Displayed total (${processedBarangays.length} barangay${processedBarangays.length === 1 ? "" : "s"})`}
                    </th>
                    <td className={totalClass}>{nf.format(totals.age15to17)}</td>
                    <td className={totalClass}>{nf.format(totals.age18to30)}</td>
                    <td className={totalClass}>{nf.format(totals.age31above)}</td>
                    <td className={`${totalClass} text-navy-800 bg-navy-50`}>{nf.format(totals.skVoters)}</td>
                    <td className={`${totalClass} text-ink-900 bg-surface-subtle`}>{nf.format(totals.regularVoters)}</td>
                    <td className={totalClass}>{nf.format(totals.totalVoters)}</td>
                    <td className={totalClass}>{((totals.skVoters / totals.totalVoters) * 100).toFixed(1)}%</td>
                  </tr>
                </tfoot>
              )}
            </table>

            {processedBarangays.length === 0 && (
              <div className="border-b border-line py-14 text-center">
                <p className="font-display font-semibold text-ink-950">No barangay matches &ldquo;{searchQuery}&rdquo;</p>
                <p className="mt-2 text-sm text-ink-700">Check the spelling, or clear the search to see all 19 barangays.</p>
                <button type="button" onClick={() => setSearchQuery("")} className="mt-5 px-5 py-2.5 min-h-[44px] border border-line-strong rounded font-display text-sm font-semibold text-ink-900 hover:bg-surface-subtle transition-colors cursor-pointer">Clear search</button>
              </div>
            )}
          </div>

          <p aria-live="polite" className="sr-only">Showing the complete voter breakdown for {processedBarangays.length} barangays.</p>
          <Notice tone="statutory" className="mt-8">
            Figures are as published by the Office of the Election Officer and cover {nf.format(o.totalRegistered)} registered voters. The age-group columns add up to the all-voters total; SK and regular totals overlap for voters aged 18–30.
          </Notice>
        </div>
      </Container>
    </section>
  );
}
