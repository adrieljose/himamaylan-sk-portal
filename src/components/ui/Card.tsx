"use client";

import React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "dark" | "outline";
}

export function Card({
  children,
  variant = "default",
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white text-slate-900 border border-slate-200 shadow-card",
    subtle: "bg-surface-subtle text-slate-900 border border-slate-200 shadow-subtle",
    dark: "bg-blue-950 text-white border border-blue-800 shadow-card",
    outline: "bg-transparent text-slate-900 border-2 border-slate-200",
  };

  return (
    <div
      className={clsx(
        "rounded-xl transition-all duration-200 p-6",
        variantStyles[variant],
        className
      )}
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
      className={clsx("pb-4 border-b border-slate-100 flex flex-col space-y-1.5", className)}
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
    <div className={clsx("pt-4 space-y-3", className)} {...props}>
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
      className={clsx("pt-4 border-t border-slate-100 flex items-center justify-between gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}
