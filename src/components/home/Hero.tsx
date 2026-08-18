"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CalendarBlank,
  Users,
  Medal,
  MapPin,
} from "@phosphor-icons/react";
import { Container } from "../ui/Container";

export function Hero() {
  const stats = [
    {
      label: "Election Day",
      value: "Nov 2, 2026",
      desc: "Synchronized Cutoff",
      icon: <CalendarBlank size={16} aria-hidden="true" className="text-comelec-gold-400" weight="fill" />,
    },
    {
      label: "SK Youth Voter",
      value: "15 to 30 yrs",
      desc: "Katipunan ng Kabataan",
      icon: <Users size={16} aria-hidden="true" className="text-sky-400" weight="fill" />,
    },
    {
      label: "SK Candidate",
      value: "18 to 24 yrs",
      desc: "Chair & Kagawad",
      icon: <Medal size={16} aria-hidden="true" className="text-emerald-400" weight="fill" />,
    },
    {
      label: "Local Scope",
      value: "19 Barangays",
      desc: "Himamaylan City",
      icon: <MapPin size={16} aria-hidden="true" className="text-rose-400" weight="fill" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-comelec-blue-800">

      <div className="absolute inset-0 civic-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-comelec-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-comelec-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 shadow-inner-glow">
            <span className="text-comelec-gold-300 font-bold uppercase tracking-wider text-xs">
              Official COMELEC Civic Portal
            </span>
            <span className="text-white/40">•</span>
            <span>Himamaylan City, Negros Occidental</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Check Your SK Eligibility for the{" "}
            <span className="bg-gradient-to-r from-comelec-gold-300 via-comelec-gold-400 to-amber-300 bg-clip-text text-transparent underline decoration-comelec-gold-500/40 underline-offset-8">
              2026 Elections
            </span>
          </h1>

          <p className="text-base sm:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Compute your exact statutory age on <strong>November 2, 2026</strong>. Instant verification for Sangguniang Kabataan voting (15–30) and youth leadership candidacy (18–24) in Himamaylan City.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/checker"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-comelec-gold-400 via-comelec-gold-500 to-amber-500 text-slate-950 font-bold text-base shadow-glow-gold hover:shadow-xl transition-all duration-200 active:scale-[0.98] border border-comelec-gold-300 min-h-[48px]"
            >
              <Sparkle size={20} weight="fill" aria-hidden="true" className="text-slate-950" />
              <span>Check My Eligibility</span>
              <span className="w-6 h-6 rounded-full bg-slate-950/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} weight="fill" aria-hidden="true" className="text-slate-950" />
              </span>
            </Link>

            <Link
              href="/qualifications"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] min-h-[48px]"
            >
              <ShieldCheck size={20} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>View Qualifications</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 pt-8 text-left">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-4 shadow-inner-glow transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-2 mb-1.5 text-xs text-slate-300 font-semibold">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 truncate">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
