"use client";

import React, { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Fraction of scroll distance the layer travels. 0 is pinned to the page,
   * 1 would be motionless relative to the viewport. Values above ~0.35 stop
   * reading as depth and start reading as a bug.
   */
  speed?: number;
  /** Hard cap on travel in px, so a long page cannot drift the layer away. */
  maxShift?: number;
  children: React.ReactNode;
}

/**
 * Offsets its children against page scroll to suggest depth.
 *
 * Three things keep this cheap enough for a government site on a low-end phone:
 *
 * 1. Scroll events are coalesced into one requestAnimationFrame callback, so
 *    a burst of events produces a single write per frame at most.
 * 2. That write is a CSS custom property consumed by a `translate3d` in the
 *    stylesheet — a compositor-only change. No layout, no paint.
 * 3. An IntersectionObserver gates the listener entirely: scrolled past the
 *    hero, the handler is removed and the page costs nothing.
 *
 * Under reduced motion nothing is attached at all and the layer stays at zero.
 */
export function Parallax({
  speed = 0.18,
  maxShift = 120,
  className,
  children,
  ...props
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    // Respect coarse pointers with small viewports: parallax on a phone costs
    // battery for an effect that is barely perceptible at that size.
    if (window.matchMedia("(max-width: 640px)").matches) return;

    let frame = 0;
    let active = false;
    let anchor = el.getBoundingClientRect().top + window.scrollY;

    const apply = () => {
      frame = 0;
      const travelled = window.scrollY - anchor;
      const shift = Math.max(-maxShift, Math.min(maxShift, travelled * speed));
      el.style.setProperty("--parallax-y", `${shift.toFixed(2)}px`);
    };

    const onScroll = () => {
      // Coalesce: extra scroll events inside one frame are dropped.
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    const onResize = () => {
      el.style.setProperty("--parallax-y", "0px");
      anchor = el.getBoundingClientRect().top + window.scrollY;
      onScroll();
    };

    const attach = () => {
      if (active) return;
      active = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      apply();
    };

    const detach = () => {
      if (!active) return;
      active = false;
      window.removeEventListener("scroll", onScroll);
    };

    // Only pay for the listener while the layer can actually be seen.
    const gate = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? attach() : detach()),
      { rootMargin: "120px 0px 120px 0px" }
    );
    gate.observe(el);

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      gate.disconnect();
      detach();
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [prefersReduced, speed, maxShift]);

  return (
    <div ref={ref} className={clsx("parallax-layer", className)} {...props}>
      {children}
    </div>
  );
}
