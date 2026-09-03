import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DownloadSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Notice } from "@/components/ui/Notice";
import { ContactPrompt } from "@/components/ui/ContactPrompt";
import {
  COC_FORMS,
  HAS_CURRENT_CYCLE_FORM,
  COMELEC_BSKE_2026_URL,
  CURRENT_CYCLE,
  type CocForm,
} from "@/config/cocForms";

export const metadata: Metadata = {
  title: "Certificate of Candidacy Forms",
  description:
    "Download the Certificate of Candidacy forms for Sangguniang Kabataan and barangay positions in Himamaylan City, and see which election cycle each form was published for.",
};

const councils = ["Sangguniang Kabataan", "Barangay"] as const;

function FormRow({ form }: { form: CocForm }) {
  const available = form.url !== null;
  const isCurrent = form.formCycle === CURRENT_CYCLE;

  return (
    <li className="border-b border-line">
      <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 items-start">
        <div className="md:col-span-5">
          <h3 className="font-display font-semibold text-ink-950 text-base">
            {form.position}
          </h3>
          {form.formCycle && (
            <span className="mt-1.5 inline-block">
              <Badge
                variant={isCurrent ? "eligible" : "neutral"}
                size="sm"
                showIcon={false}
              >
                {form.formCycle} version
              </Badge>
            </span>
          )}
        </div>

        <div className="md:col-span-4">
          <p className="text-sm text-ink-700 leading-relaxed">{form.description}</p>
          {available && !isCurrent && (
            <p className="mt-2 text-xs text-status-warning leading-relaxed">
              This is the {form.formCycle} version, the most recently published by
              COMELEC. Confirm with the election office before filing.
            </p>
          )}
        </div>

        <div className="md:col-span-3 md:text-right">
          {available ? (
            <a
              href={form.url as string}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded border border-line-strong bg-white hover:bg-surface-subtle hover:border-ink-600 text-navy-700 font-display text-sm font-semibold transition-colors"
            >
              <DownloadSimple size={16} weight="bold" aria-hidden="true" />
              Download PDF
              <span className="sr-only">
                , {form.position}, {form.formCycle} version, opens in a new tab
              </span>
            </a>
          ) : (
            /*
              Deliberately not a disabled button. There is nothing to activate,
              so this is a status, and a status should read as text rather than
              as a control the visitor is failing to operate.
            */
            <p className="text-sm text-ink-600 md:text-right">
              Not yet published by COMELEC
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default function CocFormsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Standing for office"
        title="Certificate of Candidacy forms"
        intro="To stand for SK Chairperson or Kagawad you must file a Certificate of Candidacy with the Office of the Election Officer. Download the form for your position below."
        crumbs={[{ label: "COC forms" }]}
      >
        <Link
          href="/checker"
          className="inline-flex items-center gap-2.5 px-5 py-3 min-h-[48px] bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-sm rounded transition-colors active:translate-y-px"
        >
          Check my eligibility first
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      </PageHeader>

      <section className="py-12 sm:py-16 lg:py-20 border-b border-line">
        <Container>
          {!HAS_CURRENT_CYCLE_FORM && (
            <Notice
              tone="warning"
              title={`COMELEC has not yet released the ${CURRENT_CYCLE} forms`}
              className="mb-10"
            >
              The forms below are the most recently published versions, from the 2023
              Barangay and SK Elections, the last time these positions were contested.
              The underlying requirements set by RA 10742 have not changed, but treat
              these as a preview rather than the final 2026 form. This page will switch
              to the 2026 version the moment COMELEC publishes it. Check{" "}
              <a
                href={COMELEC_BSKE_2026_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 font-semibold"
              >
                the official COMELEC 2026 BSKE page
              </a>{" "}
              or the Office of the Election Officer before filing.
            </Notice>
          )}

          <div className="max-w-2xl mb-10">
            <p className="eyebrow">The forms</p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
              One form per position
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
              Two councils are elected on the same day, and each has its own set of forms.
              A Sangguniang Kabataan candidate files under the SK election, not the
              barangay one.
            </p>
          </div>

          {councils.map((council) => {
            const forms = COC_FORMS.filter((f) => f.council === council);
            if (forms.length === 0) return null;
            return (
              <div key={council} className="mb-10 last:mb-0">
                <h3 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-700 pb-4 border-b border-ink-950">
                  {council}
                </h3>
                <ul>
                  {forms.map((form) => (
                    <FormRow key={form.id} form={form} />
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-subtle border-b border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
            <div className="lg:col-span-4">
              <p className="eyebrow">Before you file</p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-display font-semibold text-ink-950">
                Settle these first
              </h2>
              <p className="mt-4 text-base text-ink-700 leading-relaxed">
                A Certificate of Candidacy is checked against every qualification, not
                only your age. Filing without meeting one of them wastes a trip and a
                filing.
              </p>
              <Link
                href="/qualifications"
                className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 group"
              >
                Read all six requirements
                <ArrowRight
                  size={15}
                  weight="bold"
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            <ol className="lg:col-span-8 lg:pl-4 border-t border-ink-950">
              {[
                {
                  title: "Confirm your age against the ceiling",
                  body: "You must be at least 18 and not more than 24 years of age on 2 November 2026. The ceiling is exact, so check the day, not just the year.",
                  href: "/checker",
                  cta: "Use the checker",
                },
                {
                  title: "Confirm you are a registered voter of the barangay",
                  body: "You must be a registered member of the Katipunan ng Kabataan in the barangay where you intend to run. Only the election office can confirm your record.",
                  href: "/contact",
                  cta: "Contact the office",
                },
                {
                  title: "Check the anti-dynasty rule",
                  body: "You must not be related within the second civil degree to any incumbent elected official in the locality. That reaches your spouse, parents, children, siblings, grandparents and grandchildren.",
                  href: "/qualifications",
                  cta: "See the rule in full",
                },
              ].map((step, i) => (
                <li key={step.title} className="py-6 border-b border-line flex gap-5">
                  <span
                    className="font-display font-semibold text-ink-600 text-sm shrink-0 w-6 pt-0.5"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink-950 text-base">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed prose-civic">
                      {step.body}
                    </p>
                    <Link
                      href={step.href}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 group"
                    >
                      {step.cta}
                      <ArrowRight
                        size={14}
                        weight="bold"
                        aria-hidden="true"
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Notice tone="statutory" title="Where the official forms come from">
              Certificate of Candidacy forms are issued by the Commission on Elections
              and hosted on comelec.gov.ph. This page links directly to their server
              rather than keeping its own copy, so a form here is never older than the
              one COMELEC itself is serving.{" "}
              <a
                href={COMELEC_BSKE_2026_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 font-semibold"
              >
                comelec.gov.ph
              </a>{" "}
              is the authoritative source.
            </Notice>

            <Notice tone="info" title="Filing dates">
              The filing period for the 2026 Barangay and SK Elections is set by COMELEC
              resolution. Confirm the current dates with the Office of the Election
              Officer before you travel, as periods can be moved.
            </Notice>
          </div>

          <div className="mt-10">
            <ContactPrompt
              title="Ready to file, or unsure whether you qualify?"
              body="The election office issues the current forms, confirms your registration record, and answers questions this website cannot settle."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
