"use client";

import React, { useEffect, useRef, useState } from "react";
import { Scales } from "@phosphor-icons/react";

/**
 * Session key, not a persistent one. sessionStorage is cleared when the tab
 * closes, so the notice returns on the next visit and nothing survives the
 * session. This keeps the Disclaimer page accurate as written: no cookie, no
 * pixel, no fingerprint, and no record of anything the visitor entered.
 */
const ACK_KEY = "sk-portal-disclaimer-ack";

export function EntryDisclaimer() {
  /*
   * Starts closed and is opened from an effect. The server cannot know whether
   * this visitor has already acknowledged, so rendering the dialog during SSR
   * would either show it to people who dismissed it or cause a hydration
   * mismatch. One frame of the page before the dialog appears is the correct
   * trade.
   */
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    let acknowledged = false;
    try {
      acknowledged = sessionStorage.getItem(ACK_KEY) === "1";
    } catch {
      // Private browsing can throw on access. Showing the notice is the safe
      // failure: a visitor seeing it twice is better than never seeing it.
    }
    if (!acknowledged) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement;

    // Lock scrolling, compensating for the scrollbar so the page behind does
    // not shift sideways as the dialog opens.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    /*
     * Focus synchronously. Effects run after commit, so the button is already
     * in the DOM here. An earlier version deferred this to
     * requestAnimationFrame, which fails outright wherever the frame callback
     * is throttled or suspended (a backgrounded tab, for one). For a blocking
     * dialog that failure is severe: focus stays behind the scrim, so a screen
     * reader never announces the dialog and a keyboard user is stranded
     * outside it.
     */
    buttonRef.current?.focus();

    /*
     * Focus trap. This dialog has exactly one focusable control, so the trap is
     * simply "Tab keeps you on the button". Escape is intentionally inert:
     * the visitor is acknowledging a legal notice, and dismissing it by
     * accident would defeat that. WCAG 2.1.2 is still satisfied because the
     * acknowledge button is always reachable and always operable by keyboard.
     */
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [open]);

  const acknowledge = () => {
    try {
      sessionStorage.setItem(ACK_KEY, "1");
    } catch {
      // Storage unavailable. The notice will simply show again; that is fine.
    }
    setOpen(false);
    /*
     * Hand focus to the page rather than dropping it on <body>, which would
     * send a screen reader back to the very top with nothing announced. Done
     * synchronously for the same reason focus was taken synchronously.
     */
    const main = document.getElementById("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus();
    } else if (previouslyFocused.current instanceof HTMLElement) {
      previouslyFocused.current.focus();
    }
  };

  if (!open) return null;

  return (
    <div
      className="no-print fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="presentation"
    >
      {/* Scrim. Not clickable: this notice must be acknowledged, not dismissed. */}
      <div className="absolute inset-0 bg-navy-950/70" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="entry-disclaimer-title"
        aria-describedby="entry-disclaimer-body"
        className="relative w-full sm:max-w-lg bg-white border-t-[4px] sm:border sm:border-l-[4px] border-orange-500 sm:border-t-line sm:border-r-line sm:border-b-line rounded-t sm:rounded-r shadow-overlay max-h-[92dvh] overflow-y-auto animate-fade-rise"
      >
        <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-line">
          <p className="flex items-center gap-2.5 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-700">
            <Scales size={17} weight="fill" aria-hidden="true" className="shrink-0" />
            Please read before continuing
          </p>
          <h2
            id="entry-disclaimer-title"
            className="mt-3 font-display font-semibold text-ink-950 text-xl sm:text-2xl leading-snug"
          >
            This is a guide, not an official ruling
          </h2>
        </div>

        <div id="entry-disclaimer-body" className="px-6 sm:px-8 py-6 space-y-4">
          <p className="text-[0.9375rem] text-ink-800 leading-relaxed">
            This service works out your exact age on{" "}
            <strong className="font-semibold text-ink-950">2 November 2026</strong> and tells
            you whether that age meets the requirements to vote in, or stand for, the
            Sangguniang Kabataan elections.
          </p>

          <p className="text-[0.9375rem] text-ink-800 leading-relaxed">
            The result is{" "}
            <strong className="font-semibold text-ink-950">
              not an official determination of your eligibility
            </strong>
            . Age is only one requirement. Whether you may actually vote depends on your
            registration record, and whether you may actually run is decided when your
            certificate of candidacy is evaluated.
          </p>

          <p className="mt-5 pt-4 border-t border-line text-sm text-ink-700 leading-relaxed">
            Official COMELEC records, applicable laws, rules, regulations and resolutions
            prevail in all cases. To confirm your registration or your candidacy, contact the
            Office of the Election Officer, Himamaylan City.
          </p>
        </div>

        <div className="px-6 sm:px-8 pb-6 sm:pb-7">
          <button
            ref={buttonRef}
            type="button"
            onClick={acknowledge}
            className="w-full min-h-[52px] px-6 py-3.5 bg-navy-700 hover:bg-navy-800 text-white font-display font-semibold text-base rounded transition-colors active:translate-y-px cursor-pointer"
          >
            I understand, continue
          </button>
        </div>
      </div>
    </div>
  );
}
