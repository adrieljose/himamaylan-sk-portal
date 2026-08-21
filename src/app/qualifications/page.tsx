import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Notice } from "@/components/ui/Notice";
import { ContactPrompt } from "@/components/ui/ContactPrompt";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";

export const metadata: Metadata = {
  title: "SK Qualifications",
  description:
    "The legal qualifications for SK voters (15 to 30) and SK candidates (18 to 24) under RA 10742 and RA 11768 for the 2026 Barangay and Sangguniang Kabataan Elections.",
};

interface Requirement {
  title: string;
  standard: string;
  statute: string;
  details: string;
}

const voterRequirements: Requirement[] = [
  {
    title: "Age",
    standard: "At least 15 but not more than 30 years old on 2 November 2026",
    statute: "RA 10742 s.3",
    details:
      "You must have turned 15 on or before election day, and must not have had your 31st birthday on or before election day.",
  },
  {
    title: "Philippine citizenship",
    standard: "A citizen of the Republic of the Philippines",
    statute: "1987 Constitution, Art. V",
    details:
      "Natural-born or naturalised, in full possession of civil and political rights.",
  },
  {
    title: "Barangay residency",
    standard: "At least six months of actual residence in the barangay",
    statute: "RA 10742 s.3",
    details:
      "You must physically reside in the Himamaylan City barangay where you intend to vote for at least six months immediately before election day.",
  },
  {
    title: "Katipunan ng Kabataan registration",
    standard: "Registered in the certified COMELEC list of KK voters",
    statute: "COMELEC En Banc resolution",
    details:
      "You must appear in the Precinct Book of Voters held by the Himamaylan City Office of the Election Officer.",
  },
  {
    title: "No disqualification",
    standard: "Not otherwise disqualified under election law",
    statute: "Omnibus Election Code",
    details:
      "You must not have been declared insane or incompetent by a competent authority, nor convicted by final judgment of an offence punishable by imprisonment of not less than one year.",
  },
];

const candidateRequirements: Requirement[] = [
  {
    title: "Age",
    standard: "At least 18 but not more than 24 years old on 2 November 2026",
    statute: "RA 10742 s.10(b)",
    details:
      "You must have turned 18 on or before 2 November 2026 and must not be more than 24 years of age on election day. This service applies that ceiling strictly: 24 years and one day is over the limit.",
  },
  {
    title: "Barangay residency",
    standard: "At least one continuous year of residence in the barangay",
    statute: "RA 10742 s.10(c)",
    details:
      "You must have resided in the barangay for at least one continuous year immediately before the date of the election.",
  },
  {
    title: "Katipunan ng Kabataan membership",
    standard: "A qualified, registered member of the Katipunan ng Kabataan",
    statute: "RA 10742 s.10(a)",
    details: "You must be an active registered voter in the barangay youth assembly.",
  },
  {
    title: "Literacy",
    standard: "Able to read and write Filipino, English or Hiligaynon",
    statute: "RA 10742 s.10(d)",
    details:
      "You need basic literacy to read ordinances, deliberate on youth resolutions and take part in youth governance.",
  },
  {
    title: "No relation to an incumbent official",
    standard: "Not related within the second civil degree to an incumbent elected official",
    statute: "RA 10742 s.10(e)",
    details:
      "You must not be related by consanguinity or affinity up to the second degree (spouse, parent, child, sibling, grandparent or grandchild) to any incumbent elected national, regional, provincial, city, municipal or barangay official in the locality.",
  },
  {
    title: "No conviction involving moral turpitude",
    standard: "Not convicted by final judgment of a crime involving moral turpitude",
    statute: "RA 10742 s.10(f)",
    details: "You must have no disqualifying criminal judgment against you.",
  },
];

function RequirementList({
  id,
  requirements,
}: {
  id: string;
  requirements: Requirement[];
}) {
  return (
    <ol className="border-t border-ink-950" aria-labelledby={id}>
      {requirements.map((req, i) => (
        <li key={req.title} className="border-b border-line">
          <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-3">
            <div className="lg:col-span-4 flex gap-4">
              <span
                className="font-display font-semibold text-ink-600 text-sm shrink-0 w-6 pt-0.5"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink-950 text-base">
                  {req.title}
                </h3>
                <p className="mt-1.5 text-xs text-ink-600">{req.statute}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display font-semibold text-ink-900 text-[0.9375rem] leading-snug">
                {req.standard}
              </p>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed prose-civic">
                {req.details}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function QualificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Statutory criteria"
        title="Qualifications in full"
        intro="Age is the first test, and the only one this service can compute. Everything below must also be satisfied, and is verified by the Office of the Election Officer."
        crumbs={[{ label: "Qualifications" }]}
      >
        <Link
          href="/checker"
          className="inline-flex items-center gap-2.5 px-5 py-3 min-h-[48px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-sm rounded transition-colors active:translate-y-px"
        >
          Check my age first
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="py-12 sm:py-16 lg:py-20 border-b border-line">
        <Container>
          <div className="max-w-2xl mb-10">
            <p className="eyebrow">Part one</p>
            <h2
              id="voter-requirements-heading"
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950"
            >
              To vote in the SK election
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
              Five requirements, all of which must be met on election day.
            </p>
          </div>

          <RequirementList
            id="voter-requirements-heading"
            requirements={voterRequirements}
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-subtle border-b border-line">
        <Container>
          <div className="max-w-2xl mb-10">
            <p className="eyebrow">Part two</p>
            <h2
              id="candidate-requirements-heading"
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950"
            >
              To stand for SK office
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
              Six requirements, checked when your certificate of candidacy is filed.
            </p>
          </div>

          <RequirementList
            id="candidate-requirements-heading"
            requirements={candidateRequirements}
          />

          {/*
            Reference material expanding requirement 5, not an alert. This was a
            second amber warning band, which competed with the real warning at
            the foot of the page and diluted both.
          */}
          <Notice
            tone="statutory"
            title="What the second civil degree covers"
            className="mt-8"
          >
            Your spouse, parents, children, siblings, grandparents and grandchildren. If
            any of them currently holds elected office in Himamaylan City, including as a
            barangay official, you cannot stand for SK office in this election.
          </Notice>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          {/* The single warning-tone item on this page. */}
          <DisclaimerBanner variant="prominent" />
          <div className="mt-10">
            <ContactPrompt />
          </div>
        </Container>
      </section>
    </>
  );
}
