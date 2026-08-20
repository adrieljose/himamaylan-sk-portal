"use client";

import React, { useState, useId } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactPrompt } from "@/components/ui/ContactPrompt";
import { FAQS } from "@/config/faqs";

const CATEGORIES = [
  "All",
  "Eligibility",
  "Age Calculation",
  "Candidacy",
  "Registration",
  "General",
] as const;

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const uid = useId();

  const filteredFaqs = FAQS.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions"
        intro="Answers on age cutoffs, ballots, registration and standing for office in the 2026 Sangguniang Kabataan elections."
        crumbs={[{ label: "FAQs" }]}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container size="md">
          <div className="flex flex-col gap-5 pb-8">
            <div className="relative">
              <label htmlFor={`${uid}-search`} className="sr-only">
                Search the questions
              </label>
              <MagnifyingGlass
                size={18}
                weight="bold"
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600"
              />
              <input
                id={`${uid}-search`}
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions and answers"
                className="w-full min-h-[52px] pl-11 pr-4 py-3.5 bg-white border border-line-control rounded text-base text-ink-950 placeholder:text-ink-600 hover:border-ink-600 transition-colors"
              />
            </div>

            <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={active}
                    className={clsx(
                      "px-4 py-2.5 min-h-[44px] rounded border font-display text-sm font-semibold transition-colors cursor-pointer",
                      active
                        ? "bg-navy-900 border-navy-900 text-white"
                        : "bg-white border-line-strong text-ink-800 hover:border-ink-600 hover:bg-surface-subtle"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-ink-700" aria-live="polite">
              {filteredFaqs.length}{" "}
              {filteredFaqs.length === 1 ? "question" : "questions"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching “${searchTerm}”`}
            </p>
          </div>

          {filteredFaqs.length > 0 ? (
            <Accordion>
              {filteredFaqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  id={item.id}
                  title={item.question}
                  category={item.category}
                >
                  <p>{item.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="border-y border-line py-16 text-center">
              <p className="font-display font-semibold text-ink-950 text-lg">
                No questions match your search
              </p>
              <p className="mt-2 text-sm text-ink-700 max-w-md mx-auto">
                Try a different word, or clear the filters to see all {FAQS.length}{" "}
                questions.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 px-5 py-3 min-h-[44px] border border-line-strong rounded font-display text-sm font-semibold text-ink-900 hover:bg-surface-subtle transition-colors cursor-pointer"
              >
                Clear search and filters
              </button>
            </div>
          )}

          <div className="mt-14">
            <ContactPrompt
              title="Cannot find your question?"
              body="The Office of the Election Officer answers voter and candidacy enquiries directly."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
