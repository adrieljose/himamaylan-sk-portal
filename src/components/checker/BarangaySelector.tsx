"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { MagnifyingGlass, Check, ArrowRight } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { HIMAMAYLAN_BARANGAYS } from "@/config/barangays";

interface BarangaySelectorProps {
  selectedBarangay: string | null;
  onSelect: (barangayName: string) => void;
}

export function BarangaySelector({ selectedBarangay, onSelect }: BarangaySelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const uid = useId();

  const filtered = HIMAMAYLAN_BARANGAYS.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section aria-labelledby={`${uid}-heading`} className="border border-line rounded">
      <div className="px-5 sm:px-6 py-5 border-b border-line">
        <h3
          id={`${uid}-heading`}
          className="font-display font-semibold text-ink-950 text-lg"
        >
          Your barangay
        </h3>
        <p className="mt-1 text-sm text-ink-700">
          Optional. All 19 barangays of Himamaylan City, 5th District of Negros Occidental.
        </p>
      </div>

      <div className="px-5 sm:px-6 py-5 space-y-4">
        <div className="relative">
          <label htmlFor={`${uid}-search`} className="sr-only">
            Filter barangays by name
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
            placeholder="Filter by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full min-h-[48px] pl-10 pr-3.5 py-3 bg-white border border-line-control rounded text-[0.9375rem] text-ink-950 placeholder:text-ink-600 hover:border-ink-600 transition-colors"
          />
        </div>

        {filtered.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
            {filtered.map((b) => {
              const isSelected = selectedBarangay === b.name;
              return (
                <li key={b.name}>
                  <button
                    type="button"
                    onClick={() => onSelect(b.name)}
                    aria-pressed={isSelected}
                    className={clsx(
                      "w-full px-3 py-2.5 min-h-[44px] rounded border text-left font-display text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between gap-2",
                      isSelected
                        ? "bg-navy-900 border-navy-900 text-white"
                        : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                    )}
                  >
                    <span className="truncate">{b.name}</span>
                    {isSelected && (
                      <Check
                        size={15}
                        weight="bold"
                        aria-hidden="true"
                        className="shrink-0 text-orange-400"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="py-10 text-center">
            <p className="font-display font-semibold text-ink-950 text-sm">
              No barangay matches &ldquo;{searchTerm}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-3 px-4 py-2 min-h-[44px] border border-line-strong rounded font-display text-sm font-semibold text-ink-900 hover:bg-surface-subtle transition-colors cursor-pointer"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>

      {selectedBarangay && (
        <div className="px-5 sm:px-6 py-4 border-t border-line bg-status-info-bg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-ink-800">
            <span className="font-display font-semibold text-ink-950">
              Barangay {selectedBarangay}
            </span>
            <span className="block text-xs text-ink-700 mt-0.5">
              Himamaylan City, Negros Occidental &middot; Region VI
            </span>
          </p>
          <Link
            href={`/barangays?selected=${encodeURIComponent(selectedBarangay)}`}
            className="inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 shrink-0 group"
          >
            View directory
            <ArrowRight
              size={15}
              weight="bold"
              aria-hidden="true"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
