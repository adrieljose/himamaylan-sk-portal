"use client";

import React from "react";
import { CalendarBlank, Cpu, CheckCircle, ShieldCheck } from "@phosphor-icons/react";
import { Container } from "../ui/Container";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <CalendarBlank size={24} weight="regular" aria-hidden="true" className="text-comelec-blue-600" />,
      title: "Input Your Date of Birth",
      desc: "Select your month, day, and year of birth. All computations execute 100% locally in your browser with zero private data transmitted.",
    },
    {
      num: "02",
      icon: <Cpu size={24} weight="regular" aria-hidden="true" className="text-comelec-gold-500" />,
      title: "Exact Cutoff Computation",
      desc: "Our engine determines your precise age in years, months, and days on November 2, 2026 under Republic Act No. 10742 & RA 11768.",
    },
    {
      num: "03",
      icon: <CheckCircle size={24} weight="fill" aria-hidden="true" className="text-emerald-600" />,
      title: "Receive Legal Eligibility Status",
      desc: "Get instant status cards for Katipunan ng Kabataan voting (15–30), SK candidacy (18–24), self-assessment questionnaire, and personalized advice.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans">
      <div className="absolute inset-0 civic-light-grid opacity-60 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-comelec-blue-700 bg-comelec-blue-50 px-3.5 py-1 rounded-full border border-comelec-blue-200 inline-block">
            Simple 3-Step Verification
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            How the Official SK Checker Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Understanding your electoral rights and candidacy qualification for the 2026 Himamaylan City youth elections in under 10 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="rounded-xl bg-white p-7 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {step.icon}
                  </div>
                  <span className="font-mono text-3xl font-bold text-slate-300 group-hover:text-comelec-blue-600 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-1 text-xs font-semibold text-comelec-blue-800">
                <span>Step {idx + 1} of 3</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
