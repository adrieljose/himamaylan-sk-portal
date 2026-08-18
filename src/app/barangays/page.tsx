"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  MagnifyingGlass,
  CaretRight,
  House,
  ArrowRight,
  Buildings,
  Tree,
  Waves,
  Mountains,
  Compass,
  Users,
  ChartBar,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { HIMAMAYLAN_BARANGAYS } from "@/config/barangays";
import { VoterInfographicSection } from "@/components/voters/VoterInfographicSection";

export default function BarangaysPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");

  const types = ["All", "Poblacion", "Coastal", "Rural", "Upland"];

  const filteredBarangays = HIMAMAYLAN_BARANGAYS.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (b.description && b.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = selectedType === "All" || b.type === selectedType;

    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Poblacion":
        return <Buildings size={16} aria-hidden="true" className="text-comelec-blue-700" weight="fill" />;
      case "Coastal":
        return <Waves size={16} aria-hidden="true" className="text-cyan-600" weight="fill" />;
      case "Upland":
        return <Mountains size={16} aria-hidden="true" className="text-emerald-700" weight="fill" />;
      default:
        return <Tree size={16} aria-hidden="true" className="text-amber-700" weight="fill" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors text-slate-600 font-medium">
              <House size={16} aria-hidden="true" weight="fill" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" weight="fill" />
            <span className="text-comelec-blue-950 font-semibold">19 Barangays Directory</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 border border-white/15 text-xs font-semibold uppercase tracking-wider">
              <MapPin size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Himamaylan City Local Jurisdiction</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              19 Official Barangays Directory
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Explore the 19 official barangays of the City of Himamaylan, Negros Occidental (5th District). Every barangay elects 1 SK Chairperson and 7 SK Kagawad on <strong>November 2, 2026</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#voter-infographics"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-comelec-gold-400 text-slate-950 font-bold text-xs hover:bg-comelec-gold-300 transition-colors shadow-md"
              >
                <ChartBar size={16} weight="fill" aria-hidden="true" />
                <span>View Registered Voters Infographic (81,821 Voters)</span>
              </a>
              <a
                href="#barangay-directory"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-colors border border-white/20"
              >
                <MapPin size={16} weight="fill" aria-hidden="true" />
                <span>Browse 19 Barangays</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Directory Area */}
      <div id="barangay-directory" className="py-12 sm:py-16">
        <Container size="xl">
          <div className="space-y-8">
            {/* Search & Filter Controls */}
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative w-full sm:max-w-md">
                  <label htmlFor="barangay-directory-search" className="sr-only">Search barangays</label>
                  <input
                    id="barangay-directory-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Filter by barangay (e.g. Su-ay, Carabalan, Poblacion)..."
                    className="w-full h-12 pl-11 pr-4 text-sm font-medium rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all shadow-inner"
                  />
                  <MagnifyingGlass size={16} aria-hidden="true" className="text-slate-400 absolute left-4 top-4" weight="fill" />
                </div>

                {/* Counter */}
                <div className="text-xs font-semibold text-slate-700 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shrink-0">
                  Showing <span className="text-comelec-blue-700 font-bold">{filteredBarangays.length}</span> of 19 Barangays
                </div>
              </div>

              {/* District Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-500 mr-2 flex items-center gap-1">
                  <Compass size={16} aria-hidden="true" weight="fill" /> Filter District:
                </span>
                {types.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedType(t)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${selectedType === t
                        ? "bg-comelec-blue-900 text-white shadow-sm ring-2 ring-comelec-gold-400"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                      }`}
                  >
                    {t === "All" ? "All Barangays (19)" : t}
                  </button>
                ))}
              </div>
            </div>

            {/* Barangay Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBarangays.map((b) => (
                <div
                  key={b.id}
                  className="rounded-xl p-6 sm:p-7 bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-comelec-blue-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                        {getTypeIcon(b.type)}
                        <span>{b.type}</span>
                      </span>
                      <span className="text-xs font-semibold text-comelec-blue-800 bg-comelec-blue-50 px-2.5 py-0.5 rounded-full border border-comelec-blue-200">
                        8 SK Seats
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{b.name}</h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{b.district}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {b.description || "Official barangay of Himamaylan City participating in the synchronized 2026 BSKE."}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">ZIP Code: 6108</span>
                    <Link
                      href={`/checker?barangay=${encodeURIComponent(b.name)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-comelec-blue-800 hover:text-comelec-blue-600 group"
                    >
                      <span>Check in {b.name}</span>
                      <ArrowRight size={16} weight="fill" aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredBarangays.length === 0 && (
              <div className="p-12 text-center rounded-xl bg-white border border-slate-200 text-slate-500 space-y-3 shadow-sm">
                <p className="font-semibold text-base text-slate-800">No barangays matching your search criteria.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("All");
                  }}
                  className="text-xs font-semibold text-comelec-blue-700 hover:underline cursor-pointer"
                >
                  Clear Filters &amp; Show All 19 Barangays
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Official COMELEC Voter Demographics Infographics Section */}
      <section id="voter-infographics" className="border-t border-slate-200">
        <VoterInfographicSection />
      </section>
    </div>
  );
}
