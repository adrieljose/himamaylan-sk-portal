"use client";

import React from "react";
import { clsx } from "clsx";
import { CaretDown, WarningCircle } from "@phosphor-icons/react";

export interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Label above, hint below the label, error below the control — the order the
 * user reads them in. The error is wired to the control with aria-describedby
 * by the caller passing the generated ids down.
 */
export function Field({
  id,
  label,
  hint,
  error,
  optional,
  children,
  className,
}: FieldProps) {
  return (
    <div className={clsx("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="font-display text-sm font-semibold text-ink-900 mb-1.5"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-normal text-ink-600">(optional)</span>
        )}
      </label>

      {hint && (
        <p id={`${id}-hint`} className="text-xs text-ink-600 mb-2">
          {hint}
        </p>
      )}

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-status-danger"
        >
          <WarningCircle size={16} weight="fill" aria-hidden="true" className="shrink-0 mt-0.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

/**
 * Native select, restyled. The caret is drawn separately because
 * `appearance: none` removes the platform one; the wrapper keeps the control's
 * 48px hit area intact on touch.
 *
 * Border is `line-control` (#748699, 3.7:1) — form controls must clear the
 * WCAG non-text contrast minimum, which the old #CBD5E1 border did not.
 */
export function Select({ className, invalid, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid || undefined}
        className={clsx(
          "w-full appearance-none bg-white rounded border px-3.5 py-3 pr-10",
          "min-h-[48px] text-[0.9375rem] text-ink-950 font-sans",
          "cursor-pointer transition-colors",
          "hover:border-ink-600",
          invalid
            ? "border-status-danger border-2"
            : "border-line-control",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <CaretDown
        size={16}
        weight="bold"
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-700"
      />
    </div>
  );
}
