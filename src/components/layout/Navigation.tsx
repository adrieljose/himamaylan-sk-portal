"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { List, X, CaretRight } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { electionConfig } from "@/config/election";

/**
 * Seven top-level destinations. References moved to the footer (it is a
 * citations appendix, not a task) and Contact moved to the utility bar, which
 * is where public-sector sites conventionally put it.
 */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/checker", label: "Check Eligibility", primary: true },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/election-info", label: "2026 Election" },
  { href: "/barangays", label: "Barangays" },
  { href: "/voters", label: "Voter Data" },
  { href: "/faq", label: "FAQs" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/*
        The utility bar sits outside the sticky header on purpose: it scrolls
        away and gives the viewport back, with no scroll listener, no height
        animation and no layout shift.
      */}
      <div className="on-dark bg-navy-900 text-navy-100 text-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="font-display tracking-[0.06em] uppercase text-2xs sm:text-xs">
            <span className="text-orange-400 font-semibold block sm:inline">Republic of the Philippines</span>
            <span className="text-navy-200/50 mx-2 hidden sm:inline">|</span>
            <span className="block sm:inline text-navy-200 sm:text-navy-100 text-[10px] sm:text-xs font-medium sm:font-normal mt-0.5 sm:mt-0">
              Commission on Elections
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-2xs sm:text-xs">
            <span>
              Election Day:{" "}
              <strong className="font-semibold text-white">
                {electionConfig.electionDateDisplay}
              </strong>
            </span>
            <Link
              href="/contact"
              className="font-semibold text-orange-400 hover:text-orange-300 hover:underline underline-offset-2"
            >
              Contact the Office
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-line">
        <nav aria-label="Main" className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-[68px]">
            <Link
              href="/"
              prefetch
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Himamaylan City COMELEC, home"
            >
              <Image
                src="/images/comelec-logo.svg"
                alt=""
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display font-semibold text-sm sm:text-[0.95rem] text-ink-950 tracking-tight group-hover:text-navy-700 transition-colors">
                  Himamaylan City
                </span>
                <span className="text-2xs sm:text-xs text-ink-600 mt-1">
                  Office of the Election Officer
                </span>
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        "relative block px-2.5 xl:px-3 py-2 text-[0.8125rem] xl:text-sm font-display transition-colors whitespace-nowrap",
                        isActive
                          ? "text-navy-800 font-semibold"
                          : "text-ink-700 hover:text-navy-700",
                        link.primary && !isActive && "font-semibold text-ink-900"
                      )}
                    >
                      {link.label}
                      <span
                        className={clsx(
                          "absolute left-2.5 right-2.5 xl:left-3 xl:right-3 -bottom-px h-[3px] transition-opacity",
                          isActive ? "bg-orange-500 opacity-100" : "opacity-0"
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden -mr-2 p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-ink-800 hover:text-navy-700 hover:bg-surface-subtle rounded cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <X size={22} weight="bold" aria-hidden="true" />
              ) : (
                <List size={22} weight="bold" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div className="h-[3px] w-full bg-orange-500" aria-hidden="true" />

        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden bg-white border-b border-line shadow-menu max-h-[calc(100dvh-6rem)] overflow-y-auto"
          >
            <ul className="px-5 sm:px-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="border-b border-line last:border-0">
                    <Link
                      href={link.href}
                      prefetch
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        "flex items-center justify-between gap-3 py-3.5 min-h-[44px] font-display text-[0.9375rem] transition-colors",
                        isActive
                          ? "text-navy-800 font-semibold"
                          : "text-ink-800 hover:text-navy-700"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={clsx(
                            "w-[3px] h-5 shrink-0",
                            isActive ? "bg-orange-500" : "bg-transparent"
                          )}
                          aria-hidden="true"
                        />
                        {link.label}
                      </span>
                      <CaretRight size={15} weight="bold" aria-hidden="true" className="text-ink-400" />
                    </Link>
                  </li>
                );
              })}

              <li className="border-b border-line last:border-0">
                <Link
                  href="/contact"
                  prefetch
                  aria-current={pathname === "/contact" ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "flex items-center justify-between gap-3 py-3.5 min-h-[44px] font-display text-[0.9375rem] transition-colors",
                    pathname === "/contact"
                      ? "text-navy-800 font-semibold"
                      : "text-ink-800 hover:text-navy-700"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={clsx(
                        "w-[3px] h-5 shrink-0",
                        pathname === "/contact" ? "bg-orange-500" : "bg-transparent"
                      )}
                      aria-hidden="true"
                    />
                    Contact the Office
                  </span>
                  <CaretRight size={15} weight="bold" aria-hidden="true" className="text-ink-400" />
                </Link>
              </li>
            </ul>

            <div className="p-4 mx-5 sm:mx-6 my-4 rounded-lg bg-navy-950 text-navy-100 space-y-2.5">
              <div className="text-xs">
                <span className="text-orange-400 font-semibold block text-2xs uppercase tracking-wider">
                  Official Statutory Cutoff
                </span>
                <span className="text-navy-100 text-xs">
                  Election Day: <strong className="text-white font-semibold">{electionConfig.electionDateDisplay}</strong>
                </span>
              </div>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-2xs text-navy-300">
                <span>Himamaylan City COMELEC</span>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-orange-400 hover:text-orange-300 underline underline-offset-2"
                >
                  Contact Office &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
