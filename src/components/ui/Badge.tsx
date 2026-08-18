"use client";

import React from "react";
import { clsx } from "clsx";
import { CheckCircle, XCircle, WarningCircle, Info, Sparkle } from "@phosphor-icons/react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "eligible" | "ineligible" | "boundary" | "info" | "gold" | "neutral" | "success" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  dot?: boolean;
  icon?: React.ReactNode;
}

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
  // Normalize legacy variant names
  const normalizedVariant =
    variant === "success"
      ? "eligible"
      : variant === "danger"
      ? "ineligible"
      : variant === "warning"
      ? "boundary"
      : variant;

  const variantStyles = {
    eligible: "bg-emerald-50 text-emerald-800 border-emerald-300",
    ineligible: "bg-red-50 text-red-800 border-red-300",
    boundary: "bg-amber-50 text-amber-800 border-amber-300",
    info: "bg-blue-50 text-blue-800 border-blue-200",
    gold: "bg-gold-100 text-amber-900 border-gold-300",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
    lg: "text-sm px-4 py-1.5 gap-2",
  };

  const getIcon = () => {
    if (icon) return <span className="shrink-0 flex items-center" aria-hidden="true">{icon}</span>;
    if (dot) {
      return (
        <span
          className={clsx(
            "w-1.5 h-1.5 rounded-full shrink-0",
            normalizedVariant === "eligible" && "bg-emerald-500",
            normalizedVariant === "ineligible" && "bg-red-500",
            normalizedVariant === "boundary" && "bg-amber-500",
            normalizedVariant === "gold" && "bg-amber-600",
            normalizedVariant === "info" && "bg-blue-500",
            normalizedVariant === "neutral" && "bg-slate-500"
          )}
          aria-hidden="true"
        />
      );
    }
    if (!showIcon) return null;
    const iconSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;
    switch (normalizedVariant) {
      case "eligible":
        return <CheckCircle size={iconSize} weight="fill" className="text-emerald-600 shrink-0" aria-hidden="true" />;
      case "ineligible":
        return <XCircle size={iconSize} weight="fill" className="text-red-600 shrink-0" aria-hidden="true" />;
      case "boundary":
        return <WarningCircle size={iconSize} weight="fill" className="text-amber-600 shrink-0" aria-hidden="true" />;
      case "gold":
        return <Sparkle size={iconSize} weight="fill" className="text-amber-600 shrink-0" aria-hidden="true" />;
      case "info":
      default:
        return <Info size={iconSize} weight="fill" className="text-blue-600 shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center font-semibold border rounded-full select-none",
        variantStyles[normalizedVariant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {getIcon()}
      <span>{children}</span>
    </span>
  );
}
