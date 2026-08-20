import React from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../motion/Reveal";

const steps = [
  {
    title: "Enter your date of birth",
    desc: "Month, day and year. The calculation runs entirely in your browser — nothing is sent to a server and nothing is stored.",
  },
  {
    title: "Your age on 2 November 2026 is computed",
    desc: "Down to the exact year, month and day, because the candidate age ceiling is measured that precisely under RA 10742 and RA 11768.",
  },
  {
    title: "You get your voting and candidacy status",
    desc: "Whether you may vote, how many ballots you receive, whether you may file a certificate of candidacy, and which requirements still apply.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Using the checker</p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-semibold text-ink-950">
              Three steps, about ten seconds
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed">
              The checker answers one question precisely: how old will you be on election
              day, and what does that entitle you to?
            </p>
          </Reveal>

          {/*
            A numbered ruled list rather than three equal cards. Steps are
            sequential, and a horizontal card row communicates the opposite.
          */}
          <Reveal as="div" delay={90} className="lg:col-span-8 lg:pl-4">
          <ol className="border-t border-ink-950">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="py-7 border-b border-line flex flex-col sm:flex-row gap-4 sm:gap-8"
              >
                <span
                  className="font-display font-semibold text-orange-600 text-sm shrink-0 sm:w-16 sm:pt-1"
                  aria-hidden="true"
                >
                  Step {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-ink-950 text-lg sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-ink-700 leading-relaxed prose-civic">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
