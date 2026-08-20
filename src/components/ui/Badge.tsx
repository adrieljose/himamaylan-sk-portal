"use client";

import React from "react";
import { clsx } from "clsx";
import { CheckCircle, XCircle, Warning, Info } from "@phosphor-icons/react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "eligible"
    | "ineligible"
    | "boundary"
    | "info"
    | "accent"
    | "neutral"
    | "success"
    | "danger"
    | "warning"
    | "gold";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  dot?: boolean;
  icon?: React.ReactNode;
}

/**
 * Square tags, not pills — pills read as consumer-app chips. Status variants
 * always ship an icon alongside the colour so meaning never depends on hue
 * alone (WCAG 1.4.1).
 */
export function Badge({
  children,
  variant = "info",
  size = "md",
  showIcon = true,
  dot = false,
  icon,
  className,
  ...props
}: BadgeProps) {
  const alias: Record<string, string> = {
    success: "eligible",
    danger: "ineligible",
    warning: "boundary",
    gold: "accent",
  };
  const v = (alias[variant] ?? variant) as
    | "eligible"
    | "ineligible"
    | "boundary"
    | "info"
    | "accent"
    | "neutral";

  const variants = {
    eligible: "bg-status-success-bg text-status-success border-status-success-line",
    ineligible: "bg-status-danger-bg text-status-danger border-status-danger-line",
    boundary: "bg-status-warning-bg text-status-warning border-status-warning-line",
    info: "bg-status-info-bg text-status-info border-status-info-line",
    accent: "bg-orange-50 text-orange-700 border-orange-200",
    neutral: "bg-surface-subtle text-ink-700 border-line-strong",
  };

  const sizes = {
    sm: "text-2xs px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  const dotColors = {
    eligible: "bg-status-success",
    ineligible: "bg-status-danger",
    boundary: "bg-status-warning",
    info: "bg-status-info",
    accent: "bg-orange-500",
    neutral: "bg-ink-600",
  };

  const renderIcon = () => {
    if (icon)
      return (
        <span className="shrink-0 flex items-center" aria-hidden="true">
          {icon}
        </span>
      );
    if (dot)
      return (
        <span
          className={clsx("w-1.5 h-1.5 rounded-full shrink-0", dotColors[v])}
          aria-hidden="true"
        />
      );
    if (!showIcon) return null;

    const s = size === "sm" ? 13 : size === "lg" ? 17 : 15;
    switch (v) {
      case "eligible":
        return <CheckCircle size={s} weight="fill" className="shrink-0" aria-hidden="true" />;
      case "ineligible":
        return <XCircle size={s} weight="fill" className="shrink-0" aria-hidden="true" />;
      case "boundary":
        return <Warning size={s} weight="fill" className="shrink-0" aria-hidden="true" />;
      case "info":
        return <Info size={s} weight="fill" className="shrink-0" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center font-display font-semibold border rounded-sm select-none",
        variants[v],
        sizes[size],
        className
      )}
      {...props}
    >
      {renderIcon()}
      <span>{children}</span>
    </span>
  );
}
