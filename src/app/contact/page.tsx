import React from "react";
import type { Metadata } from "next";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Notice } from "@/components/ui/Notice";
import { CONTACT_CONFIG } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact the Election Office",
  description:
    "Office hours, telephone numbers, email addresses and location of the Office of the Election Officer, Himamaylan City.",
};

export default function ContactPage() {
  const { officeName, agencyName, address, operatingHours, phones, emails, officialLinks, mapCoordinates } =
    CONTACT_CONFIG;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Office of the Election Officer"
        intro={`${agencyName}, ${address.city}. This is the office that holds your registration record and answers questions this website cannot.`}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-12 sm:py-16 lg:py-20 border-b border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-4 border-b border-ink-950">
                Visit
              </h2>
              <address className="not-italic pt-5 text-base text-ink-800 leading-relaxed">
                <span className="font-display font-semibold text-ink-950 block">
                  {officeName}
                </span>
                <span className="block mt-2">
                  {address.building}
                  <br />
                  {address.street}
                  <br />
                  {address.city}, {address.province} {address.postalCode}
                  <br />
                  {address.region}
                </span>
              </address>

              <h2 className="mt-10 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-4 border-b border-ink-950">
                Opening hours
              </h2>
              <div className="pt-5">
                <p className="font-display font-semibold text-ink-950 text-lg">
                  {operatingHours.days}
                </p>
                <p className="text-base text-ink-800 mt-1">{operatingHours.hours}</p>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed prose-civic">
                  {operatingHours.notes}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-4 border-b border-ink-950">
                Telephone
              </h2>
              <dl className="divide-y divide-line">
                {phones.map((phone) => (
                  <div
                    key={phone.number}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                  >
                    <dt className="text-sm text-ink-700">{phone.label}</dt>
                    <dd>
                      <a
                        href={`tel:${phone.number.replace(/[^\d+]/g, "")}`}
                        className="font-display font-semibold text-navy-700 hover:text-navy-800 hover:underline underline-offset-4"
                      >
                        {phone.number}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-10 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-4 border-b border-ink-950">
                Email
              </h2>
              <dl className="divide-y divide-line">
                {emails.map((email) => (
                  <div key={email.address} className="py-4">
                    <dt className="text-sm text-ink-700">{email.label}</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${email.address}`}
                        className="font-display font-semibold text-navy-700 hover:text-navy-800 hover:underline underline-offset-4"
                      >
                        {email.address}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-10 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600 pb-4 border-b border-ink-950">
                Official websites
              </h2>
              <ul className="divide-y divide-line">
                {officialLinks.map((link) => (
                  <li key={link.url} className="py-4">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display font-semibold text-navy-700 hover:text-navy-800 hover:underline underline-offset-4"
                    >
                      {link.label}
                      <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-subtle">
        <Container>
          <div className="max-w-2xl mb-8">
            <p className="eyebrow">Location</p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-semibold text-ink-950">
              Himamaylan City Hall compound
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed">
              The election office is on the ground floor of the Executive Building.
            </p>
          </div>

          <div className="border border-line rounded overflow-hidden bg-white">
            <iframe
              title="Map showing Himamaylan City Hall, Negros Occidental"
              src={mapCoordinates.embedUrl}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>

          <Notice tone="info" title="Before you travel" className="mt-8">
            Registration periods can change at short notice. Telephone the office on{" "}
            <a href={`tel:${phones[0].number.replace(/[^\d+]/g, "")}`}>
              {phones[0].number}
            </a>{" "}
            to confirm it is open before making the journey.
          </Notice>
        </Container>
      </section>
    </>
  );
}
