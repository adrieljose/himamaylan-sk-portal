"use client";

import React, { useState } from "react";
import { MagnifyingGlass, MapPin, Check, Buildings } from "@phosphor-icons/react";
import { HIMAMAYLAN_BARANGAYS, Barangay } from "@/config/barangays";

interface BarangaySelectorProps {
  selectedBarangay: string | null;
  onSelect: (barangayName: string) => void;
}

export function BarangaySelector({ selectedBarangay, onSelect }: BarangaySelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBarangays = HIMAMAYLAN_BARANGAYS.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-comelec-blue-700 block">
            Jurisdiction Assignment
          </span>
          <h3 className="text-xl font-semibold text-slate-900">
            Select Your Himamaylan Barangay
          </h3>
        </div>
        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          19 Barangays in 5th District
        </span>
      </div>

      {/* Search Input */}
      <div className="relative">
        <label htmlFor="barangay-search-input" className="sr-only">Filter barangays</label>
        <MagnifyingGlass size={16} aria-hidden="true" className="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" weight="fill" />
        <input
          id="barangay-search-input"
          type="text"
          placeholder="Filter barangay (e.g. Su-ay, Carabalan, Poblacion)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all font-medium"
        />
      </div>

      {/* Barangay Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
        {filteredBarangays.map((b) => {
          const isSelected = selectedBarangay === b.name;
          return (
            <button
              key={b.name}
              type="button"
              onClick={() => onSelect(b.name)}
              className={`p-2.5 rounded-lg text-left text-xs font-semibold transition-all flex items-center justify-between gap-1 cursor-pointer min-h-[44px] ${
                isSelected
                  ? "bg-comelec-blue-900 text-white shadow-sm ring-2 ring-comelec-gold-400"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/80"
              }`}
            >
              <span className="truncate">{b.name}</span>
              {isSelected ? (
                <Check size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400 shrink-0" />
              ) : (
                <span className="text-xs text-slate-400 font-normal shrink-0">{b.type}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Barangay Details View */}
      {selectedBarangay && (
        <div className="p-4 rounded-lg bg-comelec-blue-50 border border-comelec-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-comelec-blue-900">
          <div className="flex items-center gap-2">
            <MapPin size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-600 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-slate-900">Selected: Barangay {selectedBarangay}</p>
              <p className="text-slate-600 text-xs">
                Himamaylan City, 5th District of Negros Occidental • Region VI (Western Visayas)
              </p>
            </div>
          </div>
          <a
            href={`/barangays?selected=${encodeURIComponent(selectedBarangay)}`}
            className="text-xs font-semibold text-comelec-blue-700 hover:underline shrink-0"
          >
            View Barangay Directory →
          </a>
        </div>
      )}
    </div>
  );
}
