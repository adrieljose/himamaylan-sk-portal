"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { electionConfig } from "@/config/election";
import { CONTACT_CONFIG } from "@/config/contact";
import { MapPin, Phone, Envelope, Calendar, ShieldCheck, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 border-t border-blue-900 pt-12 pb-8 font-sans">
      <Container size="xl">
        {/* 3-Column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-blue-900/80">
          {/* Column 1: Official COMELEC Agency Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 p-1 flex items-center justify-center border border-blue-800 shrink-0">
                <Image
                  src="/images/comelec-logo.svg"
                  alt="COMELEC — Commission on Elections"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base tracking-tight leading-snug">
                  Himamaylan City COMELEC
                </h3>
                <p className="text-xs text-blue-300">Office of the Election Officer</p>
              </div>
            </div>

            <p className="text-xs text-blue-200/80 leading-relaxed">
              Official public service portal for youth voter education, statutory age verification, and candidacy requirements for the November 2, 2026 Sangguniang Kabataan Elections.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Electoral Information
            </h3>
            <ul className="space-y-2 text-xs text-blue-200">
              <li>
                <Link href="/checker" prefetch={true} className="hover:text-gold-300 transition-colors">
                  SK Age &amp; Eligibility Checker
                </Link>
              </li>
              <li>
                <Link href="/qualifications" prefetch={true} className="hover:text-gold-300 transition-colors">
                  Voter &amp; Candidate Qualifications
                </Link>
              </li>
              <li>
                <Link href="/election-info" prefetch={true} className="hover:text-gold-300 transition-colors">
                  2026 Election Timetable &amp; Law
                </Link>
              </li>
              <li>
                <Link href="/barangays" prefetch={true} className="hover:text-gold-300 transition-colors">
                  Himamaylan City 19 Barangays
                </Link>
              </li>
              <li>
                <Link href="/voters" prefetch={true} className="hover:text-gold-300 transition-colors">
                  Registered Voters Infographic
                </Link>
              </li>
              <li>
                <Link href="/faq" prefetch={true} className="hover:text-gold-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/references" prefetch={true} className="hover:text-gold-300 transition-colors">
                  Statutory References (RA 10742 &amp; RA 11768)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Office Location */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Election Office Directory
            </h3>
            <div className="space-y-2 text-xs text-blue-200 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin size={16} weight="fill" className="text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {CONTACT_CONFIG.address.building}, {CONTACT_CONFIG.address.street},{" "}
                  {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.province}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} weight="fill" className="text-gold-400 shrink-0" aria-hidden="true" />
                <span>{CONTACT_CONFIG.phones[0].number}</span>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={16} weight="fill" className="text-gold-400 shrink-0" aria-hidden="true" />
                <span>{CONTACT_CONFIG.emails[0].address}</span>
              </div>
              <div className="pt-2 text-xs text-blue-400 font-mono">
                Last Updated: March 2026 • Statutory Cycle 2026
              </div>
            </div>
          </div>
        </div>

        {/* Full Legal Disclaimer Snippet */}
        <div className="pt-6 space-y-4 text-xs text-blue-300/80">
          <div className="p-4 rounded-xl bg-blue-900/40 border border-blue-900 text-xs leading-relaxed space-y-1">
            <p className="font-semibold text-blue-200">Official Statutory Notice:</p>
            <p>
              This civic website provides general election information and an age-based eligibility guide based on the information entered by the user. Results generated by this tool do not constitute a final determination of voter or candidate eligibility. Official COMELEC records, applicable laws, rules, regulations, and resolutions shall prevail.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
            <p>© 2026 Commission on Elections — Office of the Election Officer, Himamaylan City.</p>
            <div className="flex items-center gap-4">
              <Link href="/disclaimer" prefetch={true} className="hover:text-gold-300 underline transition-colors">
                Disclaimer &amp; Privacy Policy
              </Link>
              <Link href="/contact" prefetch={true} className="hover:text-gold-300 underline transition-colors">
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
