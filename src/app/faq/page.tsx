"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Question,
  MagnifyingGlass,
  CaretRight,
  House,
  ArrowRight,
  Funnel,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FAQS } from "@/config/faqs";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Eligibility", "Age Calculation", "Candidacy", "Registration", "General"];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors text-slate-600 font-medium">
              <House size={16} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" />
            <span className="text-comelec-blue-950 font-semibold">Frequently Asked Questions</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 border border-white/15 text-xs font-semibold uppercase tracking-wider">
              <Question size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Voter &amp; Candidate Legal Assistance</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Frequently Asked Questions (FAQs)
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Find authoritative answers to inquiries regarding SK voting ages, candidate qualifications, registration deadlines, dual ballots, and residency rules in Himamaylan City.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Area */}
      <div className="py-12 sm:py-16 flex-1">
        <Container size="xl">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Search and Category Filters */}
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-4">
              <div className="relative w-full">
                <label htmlFor="faq-search-input" className="sr-only">Search FAQ questions</label>
                <input
                  id="faq-search-input"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search questions (e.g. 18 years old, anti-dynasty, registration, residency)..."
                  className="w-full h-12 pl-11 pr-4 text-sm font-medium rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-comelec-blue-600 focus:outline-none transition-all"
                />
                <MagnifyingGlass size={16} aria-hidden="true" className="text-slate-400 absolute left-4 top-4" />
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-500 mr-2 flex items-center gap-1">
                  <Funnel size={16} aria-hidden="true" /> Topic Filter:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${
                      selectedCategory === cat
                        ? "bg-comelec-blue-900 text-white shadow-sm ring-2 ring-comelec-gold-400"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion FAQ Display */}
            {filteredFaqs.length > 0 ? (
              <Accordion>
                {filteredFaqs.map((faq, idx) => (
                  <AccordionItem
                    key={faq.id}
                    title={faq.question}
                    category={faq.category}
                    defaultOpen={idx === 0 || idx === 1}
                  >
                    <div className="space-y-3 pt-2">
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">{faq.answer}</p>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-medium text-slate-600">Category: {faq.category}</span>
                        <Link href="/checker" className="text-comelec-blue-700 font-semibold hover:underline inline-flex items-center gap-1">
                          <span>Check My Eligibility</span>
                          <ArrowRight size={16} weight="bold" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="p-12 text-center rounded-xl bg-white border border-slate-200 text-slate-500 space-y-3 shadow-sm">
                <p className="font-semibold text-base text-slate-800">No questions matching &ldquo;{searchTerm}&rdquo;.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="text-xs font-semibold text-comelec-blue-700 hover:underline cursor-pointer"
                >
                  Clear search and view all FAQs
                </button>
              </div>
            )}

            {/* Support Callout Box */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border border-comelec-blue-700/60 shadow-floating space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    Need Personalized Legal Guidance on Your Eligibility?
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl leading-relaxed font-normal">
                    The Himamaylan City Office of the Election Officer provides official voter assistance Monday to Friday, 8:00 AM to 5:00 PM.
                  </p>
                </div>

                <div className="shrink-0">
                  <Link href="/contact">
                    <Button variant="gold" size="lg" icon={<ArrowRight size={16} weight="bold" />}>
                      Contact Election Officer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
