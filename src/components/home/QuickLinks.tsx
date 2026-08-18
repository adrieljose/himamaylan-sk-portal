"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  Shield,
  CalendarBlank,
  MapPin,
  Question,
  FileText,
  Phone,
  ShieldWarning,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { Container } from "../ui/Container";

const QUICK_SECTIONS = [
  {
    title: "Age & Eligibility Checker",
    description: "Calculate your exact age on Nov 2, 2026 and get a breakdown of voting and candidacy rights.",
    href: "/checker",
    icon: CheckCircle,
    badge: "Primary Tool",
    featured: true,
  },
  {
    title: "SK Qualifications Guide",
    description: "Detailed legal breakdown of citizenship, residency, literacy, and anti-dynasty requirements.",
    href: "/qualifications",
    icon: Shield,
    badge: "Statutory Criteria",
  },
  {
    title: "2026 Election Information",
    description: "Overview of the synchronized Barangay & SK Elections, role of youth leaders, and key calendar dates.",
    href: "/election-info",
    icon: CalendarBlank,
    badge: "Election Overview",
  },
  {
    title: "Himamaylan Barangays",
    description: "Interactive directory of all 19 official barangays across Poblacion, Coastal, and Highland districts.",
    href: "/barangays",
    icon: MapPin,
    badge: "Local Directory",
  },
  {
    title: "Frequently Asked Questions",
    description: "Official answers to 14+ common questions regarding age cutoffs, dual voting ballots, and registration.",
    href: "/faq",
    icon: Question,
    badge: "Help & FAQ",
  },
  {
    title: "Statutory References & Laws",
    description: "Direct summaries and references for RA 10742, RA 11768, and COMELEC resolutions.",
    href: "/references",
    icon: FileText,
    badge: "Legal Authorities",
  },
  {
    title: "Contact Election Office",
    description: "Office hours, phone hotlines, official emails, and interactive map of Himamaylan City Hall Compound.",
    href: "/contact",
    icon: Phone,
    badge: "Official Assistance",
  },
  {
    title: "Disclaimer & Privacy Notice",
    description: "Transparency policies, data handling safeguards, and legal notices regarding eligibility calculations.",
    href: "/disclaimer",
    icon: ShieldWarning,
    badge: "Transparency",
  },
];

export function QuickLinks() {
  return (
    <section className="py-20 bg-slate-50 font-sans border-b border-slate-200">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-comelec-blue-700 bg-comelec-blue-50 px-3.5 py-1 rounded-full border border-comelec-blue-200 inline-block">
            Civic Resources
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Explore All Election Guide Sections
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Quickly navigate to detailed civic guides, official laws, barangay directories, and direct contact channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className={`group rounded-xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-card-hover ${
                  section.featured
                    ? "bg-gradient-to-br from-comelec-blue-950 to-comelec-blue-900 text-white border-comelec-blue-700 shadow-card"
                    : "bg-white text-slate-900 border-slate-200 shadow-card"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 ${
                        section.featured
                          ? "bg-white/10 text-comelec-gold-400 border border-white/15"
                          : "bg-comelec-blue-50 text-comelec-blue-800 border border-comelec-blue-100"
                      }`}
                    >
                      <Icon size={24} weight="regular" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        section.featured
                          ? "bg-comelec-gold-400 text-slate-950"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {section.badge}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`font-semibold text-lg flex items-center gap-1.5 ${
                        section.featured ? "text-white" : "text-slate-900 group-hover:text-comelec-blue-700"
                      } transition-colors`}
                    >
                      <span>{section.title}</span>
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        aria-hidden="true"
                        className={`opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ${
                          section.featured ? "text-comelec-gold-400" : "text-comelec-blue-700"
                        }`}
                      />
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mt-1.5 ${
                        section.featured ? "text-blue-100/80" : "text-slate-600"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-5 pt-4 border-t text-xs font-semibold flex items-center justify-between ${
                    section.featured
                      ? "border-white/10 text-comelec-gold-300"
                      : "border-slate-100 text-comelec-blue-800"
                  }`}
                >
                  <span>Open Guide</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
