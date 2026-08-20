"use client";

import React, { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger, in ms, for items revealing as a group. Keep under ~240ms total. */
  delay?: number;
  /** Travel distance in px. Small numbers read as settling; large reads as sliding. */
  shift?: number;
  as?: "div" | "section" | "li" | "article";
  children: React.ReactNode;
}

/**
 * Fades and lifts its children into place the first time they enter the
 * viewport.
 *
 * Uses IntersectionObserver rather than a scroll listener: the browser
 * evaluates intersection off the main thread and only calls back at the
 * threshold, so a page with thirty of these does no per-frame work. Each
 * observer disconnects the moment it fires — the animation is one-way, so
 * there is nothing left to watch, and content never re-hides on scroll-up.
 *
 * `rootMargin` has a negative bottom so the transition begins slightly before
 * the element reaches the fold, and the element is settled by the time it is
 * comfortably in view.
 */
export function Reveal({
  delay = 0,
  shift = 14,
  as = "div",
  className,
  children,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Older browsers without IO get the content immediately rather than nothing.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    // Anything already on screen at mount should not animate in late.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setRevealed(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setRevealed(true);
      cleanup();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(el);

    /*
     * Safety net. The failure mode of this component is an invisible page, so
     * it must not depend on the observer alone.
     *
     * IntersectionObserver callbacks are tied to the rendering lifecycle, which
     * a browser may suspend — most commonly for a document in a background tab
     * (verified: with visibilityState "hidden", even a freshly constructed
     * observer never fires). If such a page is restored mid-scroll, or an
     * observer stalls for any other reason, content would stay at opacity 0.
     *
     * Both fallbacks measure the element directly and only reveal it if it is
     * genuinely on screen, so content below the fold still waits for its turn
     * and the effect is preserved.
     */
    const revealIfOnScreen = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") revealIfOnScreen();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const failsafe = window.setTimeout(revealIfOnScreen, 1500);

    function cleanup() {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(failsafe);
    }

    return cleanup;
  }, [prefersReduced]);

  /*
   * createElement rather than <Tag />: a polymorphic tag makes TypeScript
   * intersect the prop types of every allowed element (div & li & section),
   * which produces an impossible type for `ref` and event handlers. Going
   * through createElement keeps one honest cast at the boundary instead of
   * fighting that intersection at every call site.
   */
  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx("reveal", className),
      "data-revealed": revealed || undefined,
      style: {
        "--reveal-delay": `${delay}ms`,
        "--reveal-shift": `${shift}px`,
        ...style,
      } as React.CSSProperties,
    } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<HTMLElement> },
    children
  );
}
