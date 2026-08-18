"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CalendarBlank, ArrowRight, Clock } from "@phosphor-icons/react";
import { Container } from "../ui/Container";
import { electionConfig } from "@/config/election";

export function ElectionDateBanner() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-11-02T07:00:00+08:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-comelec-gold-500 via-amber-400 to-comelec-gold-500 text-slate-950 py-4 px-4 shadow-md border-y border-amber-500/40">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left flex-wrap">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-950 text-comelec-gold-400 shrink-0 shadow-xs">
              <CalendarBlank size={20} weight="regular" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Official Election Day Countdown &amp; Statutory Cutoff
              </p>
              <h2 className="text-base sm:text-lg font-bold text-slate-950">
                {electionConfig.electionName} — {electionConfig.electionDateDisplay}
              </h2>
            </div>
          </div>

          {/* Real-time Countdown Pills */}
          <div className="flex items-center gap-2 font-mono text-xs font-semibold">
            <div className="bg-slate-950 text-white px-2.5 py-1.5 rounded-lg shadow-xs text-center min-w-[54px]">
              <span className="block text-sm text-comelec-gold-400 font-mono font-bold">{timeLeft.days}</span>
              <span className="text-xs text-slate-400 uppercase font-sans">Days</span>
            </div>
            <div className="bg-slate-950 text-white px-2.5 py-1.5 rounded-lg shadow-xs text-center min-w-[48px]">
              <span className="block text-sm text-comelec-gold-400 font-mono font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-xs text-slate-400 uppercase font-sans">Hrs</span>
            </div>
            <div className="bg-slate-950 text-white px-2.5 py-1.5 rounded-lg shadow-xs text-center min-w-[48px]">
              <span className="block text-sm text-comelec-gold-400 font-mono font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-xs text-slate-400 uppercase font-sans">Min</span>
            </div>
            <div className="bg-slate-950 text-white px-2.5 py-1.5 rounded-lg shadow-xs text-center min-w-[48px]">
              <span className="block text-sm text-comelec-gold-400 font-mono font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="text-xs text-slate-400 uppercase font-sans">Sec</span>
            </div>

            <Link
              href="/checker"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-950 text-white hover:bg-slate-900 text-xs font-sans font-semibold transition-all shadow-xs min-h-[44px]"
            >
              <span>Check My Eligibility</span>
              <ArrowRight size={16} weight="bold" aria-hidden="true" className="text-comelec-gold-400" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
