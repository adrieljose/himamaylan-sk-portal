"use client";

import React from "react";
import { clsx } from "clsx";

export interface AnimatedValueProps {
  /** The value to display. When it changes, only this span replays its transition. */
  value: React.ReactNode;
  className?: string;
}

/**
 * Animates a single changing value without disturbing anything around it.
 *
 * The `key` here is deliberate and is the opposite of the mistake it replaces:
 * a key on a large wrapper tears down and rebuilds an entire subtree (losing
 * any local state inside it), whereas a key on one leaf span swaps only that
 * text node. Nothing else in the layout unmounts, so the surrounding box holds
 * completely still.
 *
 * The animation is opacity plus a transform, never a layout property, so a
 * digit changing width (9 -> 10) cannot nudge its neighbours mid-transition.
 * `inline-block` is required for the transform to apply to inline text.
 */
export function AnimatedValue({ value, className }: AnimatedValueProps) {
  return (
    <span
      key={String(value)}
      className={clsx("inline-block animate-value-in", className)}
    >
      {value}
    </span>
  );
}
