"use client";

import React from "react";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  icon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none rounded-lg cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 min-h-[38px] gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] gap-2",
    lg: "text-base px-6 py-3.5 min-h-[48px] gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow-md border border-blue-500",
    secondary:
      "bg-blue-900 hover:bg-blue-950 text-white shadow-sm hover:shadow-md border border-blue-800",
    gold:
      "bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-slate-950 shadow-sm hover:shadow-glow-gold border border-gold-400 font-semibold",
    outline:
      "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-subtle hover:border-slate-400",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-transparent",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-sm border border-red-500",
  };

  const effectiveRightIcon = rightIcon || icon;

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
      <span>{children}</span>
      {effectiveRightIcon && <span className="shrink-0 flex items-center">{effectiveRightIcon}</span>}
    </button>
  );
}
