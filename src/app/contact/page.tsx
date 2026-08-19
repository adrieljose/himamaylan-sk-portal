import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
  ArrowSquareOut,
  CaretRight,
  House,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { CONTACT_CONFIG } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contact Election Office",
  description:
    "Official directory for the Office of the Election Officer in Himamaylan City: address at City Hall Compound, telephone hotlines, email assistance, and office hours.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col font-sans bg-slate-50 min-h-screen">

      <div className="bg-white border-b border-slate-200/80 py-2.5 px-4 text-xs font-medium text-slate-500">
        <Container size="xl">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-comelec-blue-700 flex items-center gap-1 transition-colors text-slate-600 font-medium">
              <House size={16} aria-hidden="true" weight="fill" />
              <span>Home</span>
            </Link>
            <CaretRight size={16} aria-hidden="true" className="text-slate-400" weight="fill" />
            <span className="text-comelec-blue-950 font-semibold">Contact Election Office</span>
          </nav>
        </Container>
      </div>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border-b border-comelec-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 civic-grid-pattern opacity-30 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-comelec-gold-300 border border-white/15 text-xs font-semibold uppercase tracking-wider">
              <Phone size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
              <span>Official Civic Directory</span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Contact the Election Officer
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Get in touch with the Commission on Elections local office in Himamaylan City for voter registration assistance, Precinct Finder inquiries, and candidate filing requirements.
            </p>
          </div>
        </Container>
      </section>

      <div className="py-12 sm:py-16 flex-1">
        <Container size="xl">
          <div className="space-y-12 max-w-5xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-3">
                <div className="w-12 h-12 rounded-lg bg-comelec-blue-900 text-comelec-gold-400 flex items-center justify-center shadow-sm">
                  <MapPin size={24} weight="fill" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Office Address</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {CONTACT_CONFIG.address.building}, {CONTACT_CONFIG.address.street}
                  <br />
                  {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.province} {CONTACT_CONFIG.address.postalCode}
                  <br />
                  <span className="text-slate-400 text-xs font-medium">{CONTACT_CONFIG.address.region}</span>
                </p>
              </div>

              <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-3">
                <div className="w-12 h-12 rounded-lg bg-comelec-blue-900 text-comelec-gold-400 flex items-center justify-center shadow-sm">
                  <Clock size={24} aria-hidden="true" weight="fill" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Operating Schedule</h3>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  <strong className="text-slate-900 font-semibold">{CONTACT_CONFIG.operatingHours.days}</strong>
                  <br />
                  {CONTACT_CONFIG.operatingHours.hours}
                  <br />
                  <span className="text-xs text-slate-500 mt-1 block">
                    {CONTACT_CONFIG.operatingHours.notes}
                  </span>
                </div>
              </div>

              <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-3">
                <div className="w-12 h-12 rounded-lg bg-comelec-blue-900 text-comelec-gold-400 flex items-center justify-center shadow-sm">
                  <Phone size={24} weight="fill" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Hotlines &amp; Phones</h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {CONTACT_CONFIG.phones.map((p) => (
                    <div key={p.label}>
                      <span className="text-slate-400 text-xs block">{p.label}:</span>
                      <strong className="text-slate-900 font-semibold font-mono">{p.number}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-4 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Himamaylan City Hall Location Map
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    The Office of the Election Officer is situated within the Executive Building at the City Hall Compound.
                  </p>
                </div>

                <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden border border-slate-200 relative bg-slate-100 shadow-inner">
                  <iframe
                    title="Himamaylan City Hall Compound Map"
                    src={CONTACT_CONFIG.mapCoordinates.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
                  <span className="font-mono text-xs">Coordinates: 10.0984° N, 122.8687° E</span>
                  <a
                    href="https://maps.google.com/?q=Himamaylan+City+Hall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-comelec-blue-700 hover:underline flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowSquareOut size={16} weight="fill" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-card space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Official Email Channels
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    For official communications, voter certificate inquiries, and legal election notices:
                  </p>

                  <div className="space-y-3">
                    {CONTACT_CONFIG.emails.map((em) => (
                      <div
                        key={em.address}
                        className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 text-xs sm:text-sm"
                      >
                        <div>
                          <p className="text-xs text-slate-400 font-medium">{em.label}</p>
                          <p className="font-semibold text-slate-900 font-mono">{em.address}</p>
                        </div>
                        <a
                          href={`mailto:${em.address}`}
                          className="px-3.5 py-1.5 rounded-lg bg-comelec-blue-100 text-comelec-blue-900 font-semibold text-xs hover:bg-comelec-blue-200 transition-colors min-h-[36px] inline-flex items-center"
                        >
                          Send Email
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-7 rounded-xl bg-gradient-to-br from-comelec-blue-950 via-comelec-blue-900 to-slate-950 text-white border border-comelec-blue-700/60 shadow-floating space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    National Election Portals
                  </h3>
                  <div className="space-y-2.5">
                    {CONTACT_CONFIG.officialLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-between text-xs sm:text-sm border border-white/10 min-h-[44px]"
                      >
                        <span className="font-semibold">{link.label}</span>
                        <ArrowSquareOut size={16} weight="fill" aria-hidden="true" className="text-comelec-gold-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex items-start gap-3.5 shadow-sm">
              <WarningCircle size={20} weight="fill" aria-hidden="true" className="text-blue-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 text-sm">In-Person Voter Registration Policy</p>
                <p className="mt-1 leading-relaxed text-slate-700 font-normal">
                  Please be reminded that official voter registration, biometric capturing, and filing of Certificates of Candidacy (COC) cannot be processed entirely online and require personal appearance at the Office of the Election Officer with valid government identification.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
