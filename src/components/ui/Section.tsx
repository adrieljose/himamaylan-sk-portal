import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "white" | "slate" | "blue" | "subtle";
}

export function Section({
  className,
  title,
  subtitle,
  badge,
  align = "left",
  containerSize = "lg",
  background = "white",
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    slate: "bg-slate-50",
    blue: "bg-gradient-to-b from-comelec-blue-950 to-comelec-blue-900 text-white",
    subtle: "bg-gradient-to-b from-slate-50 to-white",
  };

  return (
    <section
      className={twMerge(
        clsx("py-12 sm:py-16 lg:py-20", backgrounds[background], className)
      )}
      {...props}
    >
      <Container size={containerSize}>
        {(title || subtitle || badge) && (
          <div
            className={clsx(
              "mb-8 sm:mb-12",
              align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
            )}
          >
            {badge && (
              <span
                className={clsx(
                  "inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider rounded-full",
                  background === "blue"
                    ? "bg-comelec-gold-500/20 text-comelec-gold-300 border border-comelec-gold-400/30"
                    : "bg-comelec-blue-100 text-comelec-blue-800 border border-comelec-blue-200"
                )}
              >
                {badge}
              </span>
            )}
            {title && (
              <h2
                className={clsx(
                  "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",
                  background === "blue" ? "text-white" : "text-slate-900"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={clsx(
                  "mt-3 text-base sm:text-lg leading-relaxed",
                  background === "blue" ? "text-blue-100/90" : "text-slate-600"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
