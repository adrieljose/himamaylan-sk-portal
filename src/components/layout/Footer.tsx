import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { electionConfig } from "@/config/election";
import { CONTACT_CONFIG } from "@/config/contact";

const sections = [
  {
    heading: "Check your eligibility",
    links: [
      { href: "/checker", label: "SK age and eligibility checker" },
      { href: "/qualifications", label: "Voter and candidate qualifications" },
      { href: "/faq", label: "Frequently asked questions" },
    ],
  },
  {
    heading: "The 2026 election",
    links: [
      { href: "/election-info", label: "Timetable and governing law" },
      { href: "/barangays", label: "The 19 barangays of Himamaylan" },
      { href: "/voters", label: "Registered voter data" },
    ],
  },
  {
    heading: "About this service",
    links: [
      { href: "/references", label: "Statutory references" },
      { href: "/contact", label: "Contact the election office" },
      { href: "/disclaimer", label: "Disclaimer and privacy" },
    ],
  },
];

export function Footer() {
  const { address, phones, emails } = CONTACT_CONFIG;

  return (
    <footer className="on-dark bg-navy-900 text-navy-100 mt-auto">
      <div className="h-[3px] w-full bg-orange-500" aria-hidden="true" />

      <Container>
        <div className="pt-14 pb-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,1fr))] gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/comelec-logo.svg"
                alt=""
                width={44}
                height={44}
                className="w-11 h-11 object-contain shrink-0"
              />
              <div>
                <p className="font-display font-semibold text-white text-[0.95rem] leading-snug">
                  Commission on Elections
                </p>
                <p className="text-xs text-navy-200 mt-0.5">
                  Himamaylan City, Negros Occidental
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-navy-100/85 max-w-sm">
              Public information service for youth voter education and statutory age
              verification ahead of the {electionConfig.electionName}.
            </p>

            <address className="mt-6 not-italic text-sm space-y-1.5 text-navy-100/85">
              <p>
                {address.building}, {address.street}
                <br />
                {address.city}, {address.province}
              </p>
              <p>
                <a
                  href={`tel:${phones[0].number.replace(/[^\d+]/g, "")}`}
                  className="hover:text-orange-300 hover:underline underline-offset-2"
                >
                  {phones[0].number}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${emails[0].address}`}
                  className="hover:text-orange-300 hover:underline underline-offset-2"
                >
                  {emails[0].address}
                </a>
              </p>
            </address>
          </div>

          {sections.map((section) => (
            <nav key={section.heading} aria-label={section.heading}>
              <h2 className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-400">
                {section.heading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch
                      className="text-navy-100/85 hover:text-white hover:underline underline-offset-4 decoration-orange-400/60"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-navy-800 py-7">
          <p className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-navy-200">
            Statutory notice
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-navy-100/80 max-w-4xl">
            This service provides general election information and an age-based
            eligibility guide computed from the date you enter. Results are not a final
            determination of voter or candidate eligibility. Official COMELEC records,
            applicable laws, rules, regulations and resolutions prevail in all cases.
          </p>
        </div>

        <div className="border-t border-navy-800 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-navy-200">
          <p>
            &copy; {electionConfig.electionYear} Commission on Elections, Office of the
            Election Officer, Himamaylan City.
          </p>
          <p>Information last reviewed {electionConfig.lastUpdated}.</p>
        </div>
      </Container>
    </footer>
  );
}
