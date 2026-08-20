"use client";

import React from "react";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  /** Renders a busy state and blocks interaction. */
  loading?: boolean;
}

/**
 * Press feedback is a 1px downward nudge, not a scale bounce — it reads as a
 * physical key press rather than an animation. Every fill below is contrast-
 * verified against its own label colour.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  icon,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-semibold rounded " +
    "transition-colors duration-150 select-none cursor-pointer " +
    "active:translate-y-px " +
    "disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0";

  const sizes = {
    sm: "text-xs px-3.5 py-2 min-h-[38px] gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] gap-2",
    lg: "text-base px-6 py-3 min-h-[48px] gap-2.5",
  };

  const variants = {
    /* navy-700 fill, white label — 8.2:1 */
    primary: "bg-navy-700 hover:bg-navy-800 text-white",
    /* orange-600 fill, white label — 5.2:1. The city accent, used for one CTA per view. */
    accent: "bg-orange-600 hover:bg-orange-700 text-white",
    secondary: "bg-navy-900 hover:bg-navy-800 text-white",
    outline:
      "bg-white hover:bg-surface-subtle text-ink-900 border border-line-strong hover:border-ink-400",
    ghost: "bg-transparent hover:bg-surface-subtle text-ink-800 hover:text-ink-950",
    danger: "bg-status-danger hover:bg-red-800 text-white",
  };

  const effectiveRightIcon = rightIcon || icon;

  return (
    <button
      className={clsx(
        base,
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span
          className="w-4 h-4 shrink-0 rounded-full border-2 border-current border-r-transparent animate-spin"
          aria-hidden="true"
        />
      ) : (
        leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!loading && effectiveRightIcon && (
        <span className="shrink-0 flex items-center">{effectiveRightIcon}</span>
      )}
    </button>
  );
}
