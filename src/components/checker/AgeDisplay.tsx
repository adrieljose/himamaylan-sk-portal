"use client";

import React, { useEffect, useState } from "react";
import { AgeCategory } from "@/lib/eligibility";
import { Badge } from "../ui/Badge";
import { Calendar, Sparkle, Clock, ShieldCheck } from "@phosphor-icons/react";

export interface AgeDisplayProps {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  category: AgeCategory;
  categoryLabel: string;
}

export function AgeDisplay({
  years,
  months,
  days,
  totalDays,
  category,
  categoryLabel,
}: AgeDisplayProps) {
  const [displayYears, setDisplayYears] = useState(years);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayYears(years);
      return;
    }

    let start = 0;
    const duration = 450;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayYears(Math.round(start + (years - start) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayYears(years);
      }
    };

    requestAnimationFrame(animateCount);
  }, [years]);

  const getBadgeVariant = (cat: AgeCategory) => {
    switch (cat) {
      case "BOTH":
      case "VOTER_ONLY":
      case "VOTER_ABOVE_CANDIDATE":
        return "eligible" as const;
      case "BELOW_SK":
      case "ABOVE_SK":
        return "boundary" as const;
    }
  };

  return (
    <div className="p-6 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-900 via-comelec-blue-950 to-slate-950 text-white border border-comelec-blue-800 text-center space-y-6 shadow-floating relative overflow-hidden">
      {/* Background civic radial light */}
      <div className="absolute inset-0 civic-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-comelec-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-comelec-gold-300 text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-inner-glow">
          <Calendar size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
          <span>Statutory Age on Election Day: Nov 2, 2026</span>
        </div>

        {/* Hero Digital Counter */}
        <div className="space-y-1.5">
          <div className="text-6xl sm:text-8xl font-extrabold text-white font-mono tracking-tight flex items-baseline justify-center gap-2">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-sm">
              {displayYears}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-comelec-gold-400 tracking-normal font-sans">
              Years Old
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 font-normal">
            Computed Statutory Age: <strong className="text-white font-mono font-semibold">{years} years, {months} months, {days} days</strong>
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto pt-1 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block font-sans">Years</span>
            <span className="text-base sm:text-lg font-bold text-comelec-gold-300">{years}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block font-sans">Months</span>
            <span className="text-base sm:text-lg font-bold text-comelec-gold-300">{months}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block font-sans">Days</span>
            <span className="text-base sm:text-lg font-bold text-comelec-gold-300">{days}</span>
          </div>
        </div>

        {/* Classification Badge Pill */}
        <div className="pt-2">
          <Badge variant={getBadgeVariant(category)} size="lg">
            {categoryLabel}
          </Badge>
        </div>
      </div>
    </div>
  );
}
