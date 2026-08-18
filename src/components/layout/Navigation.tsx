"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { List, X, Calendar, CaretRight, Sparkle } from "@phosphor-icons/react";
import { electionConfig } from "@/config/election";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/checker", label: "SK Checker" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/election-info", label: "2026 Election" },
  { href: "/barangays", label: "Barangays" },
  { href: "/voters", label: "Voters Infographic" },
  { href: "/faq", label: "FAQs" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-200">
      {/* Official Republic of the Philippines Banner */}
      <div className="bg-blue-950 text-slate-200 text-xs border-b border-blue-900 select-none py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs tracking-wider uppercase">
            <span className="text-gold-300 font-bold">Republic of the Philippines</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">Himamaylan City, Negros Occidental</span>
          </div>

          <div className="flex items-center justify-center sm:justify-end text-[11px] sm:text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-blue-900/90 text-gold-300 px-2.5 py-0.5 rounded-full border border-blue-800 font-medium">
              <Calendar size={13} weight="fill" className="text-gold-400 shrink-0" aria-hidden="true" />
              <span>Election Day: <strong className="text-white font-semibold">Nov 2, 2026</strong></span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar (Max height ≤ 72px) */}
      <nav
        className={`w-full transition-all duration-200 h-16 sm:h-[72px] flex items-center border-b ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-slate-200"
          : "bg-white border-slate-200"
          }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center justify-between gap-3">
            {/* COMELEC & Himamaylan Brand Identity */}
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -m-1"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-blue-900 p-1 flex items-center justify-center border border-blue-800 shadow-sm">
                <Image
                  src="/images/comelec-logo.svg"
                  alt="COMELEC — Commission on Elections"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm sm:text-base text-blue-950 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                    HIMAMAYLAN CITY
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium tracking-normal mt-0.5">
                  2026 SK Age &amp; Eligibility Portal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-wrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`relative text-xs xl:text-sm font-semibold px-2.5 py-1.5 rounded-lg transition-colors select-none ${isActive
                      ? "text-blue-900 bg-blue-50 font-bold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Single CTA Intent in Nav */}
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/checker"
                prefetch={true}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all border border-blue-500"
              >
                <Sparkle size={16} weight="fill" className="text-gold-300" aria-hidden="true" />
                <span>Check My Eligibility</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer border border-slate-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={20} weight="fill" aria-hidden="true" />
              ) : (
                <List size={20} weight="fill" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-floating p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors min-h-[44px] ${isActive
                  ? "bg-blue-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
                  }`}
              >
                <span>{link.label}</span>
                <CaretRight size={16} weight="fill" className={isActive ? "text-gold-300" : "text-slate-400"} aria-hidden="true" />
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/checker"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-sm min-h-[44px]"
            >
              <Sparkle size={16} weight="fill" className="text-gold-300" aria-hidden="true" />
              <span>Check My Eligibility</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
