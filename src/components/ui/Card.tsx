"use client";

import React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "navy" | "flush";
  padding?: "none" | "sm" | "md" | "lg";
}

/**
 * A bordered box, not an elevated one. Shadows are reserved for UI that
 * genuinely floats above the page (menus, overlays); a card sitting in normal
 * document flow has no reason to cast one.
 *
 * `flush` carries no border at all — for grouping that needs spacing only.
 */
export function Card({
  children,
  variant = "default",
  padding = "md",
  className,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white text-ink-800 border border-line",
    subtle: "bg-surface-subtle text-ink-800 border border-line",
    navy: "bg-navy-900 text-navy-100 border border-navy-800 on-dark",
    flush: "bg-transparent text-ink-800",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-5 sm:p-6",
    lg: "p-6 sm:p-8",
  };

  return (
    <div
      className={clsx("rounded", variants[variant], paddings[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("pb-4 mb-4 border-b border-line flex flex-col gap-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("space-y-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "pt-4 mt-5 border-t border-line flex items-center justify-between gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
