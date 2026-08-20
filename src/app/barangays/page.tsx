"use client";

import React, { useState, useId } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactPrompt } from "@/components/ui/ContactPrompt";
import { HIMAMAYLAN_BARANGAYS } from "@/config/barangays";

const TYPES = ["All", "Poblacion", "Rural", "Coastal", "Upland"] as const;

export default function BarangaysPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<(typeof TYPES)[number]>("All");
  const uid = useId();

  const filtered = HIMAMAYLAN_BARANGAYS.filter((b) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      b.name.toLowerCase().includes(q) ||
      (b.description?.toLowerCase().includes(q) ?? false);
    const matchesType = selectedType === "All" || b.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <>
      <PageHeader
        eyebrow="Directory"
        title="The 19 barangays of Himamaylan City"
        intro="Every barangay elects its own SK Chairperson and seven SK Kagawad. You vote and stand for office in the barangay where you are registered."
        crumbs={[{ label: "Barangays" }]}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-8">
            <div
              role="group"
              aria-label="Filter by barangay type"
              className="flex flex-wrap gap-2"
            >
              {TYPES.map((type) => {
                const active = selectedType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    aria-pressed={active}
                    className={clsx(
                      "px-4 py-2.5 min-h-[44px] rounded border font-display text-sm font-semibold transition-colors cursor-pointer",
                      active
                        ? "bg-navy-900 border-navy-900 text-white"
                        : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                    )}
                  >
                    {type}
                  </button>
                );
              })}
            </div>

            <div className="relative lg:w-72 shrink-0">
              <label htmlFor={`${uid}-search`} className="sr-only">
                Search barangays
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name"
                className="w-full min-h-[48px] pl-10 pr-3.5 py-3 bg-white border border-line-control rounded text-[0.9375rem] text-ink-950 placeholder:text-ink-600 hover:border-ink-600 transition-colors"
              />
            </div>
          </div>

          <p className="text-sm text-ink-700 pb-4" aria-live="polite">
            Showing{" "}
            <span className="font-display font-semibold text-ink-950">
              {filtered.length}
            </span>{" "}
            of {HIMAMAYLAN_BARANGAYS.length} barangays
            {selectedType !== "All" && ` in ${selectedType}`}
          </p>

          {filtered.length > 0 ? (
            <ol className="border-t border-ink-950">
              {filtered.map((b) => (
                <li key={b.id} className="border-b border-line">
                  <article className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-2">
                    <div className="sm:col-span-4">
                      <h2 className="font-display font-semibold text-ink-950 text-lg">
                        {b.name}
                      </h2>
                      <p className="mt-1 text-xs text-ink-600 uppercase tracking-[0.06em] font-display font-semibold">
                        {b.type}
                      </p>
                    </div>
                    <div className="sm:col-span-8">
                      {b.description && (
                        <p className="text-sm text-ink-700 leading-relaxed prose-civic">
                          {b.description}
                        </p>
                      )}
                      <p className="mt-2 text-xs text-ink-600">{b.district}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          ) : (
            <div className="border-y border-line py-16 text-center">
              <p className="font-display font-semibold text-ink-950 text-lg">
                No barangay matches your search
              </p>
              <p className="mt-2 text-sm text-ink-700">
                Check the spelling, or clear the filters to see all 19.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                }}
                className="mt-6 px-5 py-3 min-h-[44px] border border-line-strong rounded font-display text-sm font-semibold text-ink-900 hover:bg-surface-subtle transition-colors cursor-pointer"
              >
                Clear search and filters
              </button>
            </div>
          )}

          <div className="mt-14">
            <ContactPrompt
              title="Not sure which barangay you are registered in?"
              body="The election office can confirm the barangay on your registration record."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
