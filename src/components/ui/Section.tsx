import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "white" | "subtle" | "sunken" | "navy";
  /** Hairline rule above the section. Section rhythm comes from rules, not colour blocks. */
  ruled?: boolean;
  headingLevel?: "h2" | "h3";
}

/**
 * Sections are separated by hairline rules and whitespace rather than by
 * alternating background colours — the "every other section is grey" pattern
 * is what makes a page read as a template.
 */
export function Section({
  className,
  eyebrow,
  title,
  subtitle,
  align = "left",
  containerSize = "lg",
  background = "white",
  ruled = false,
  headingLevel = "h2",
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    subtle: "bg-surface-subtle",
    sunken: "bg-surface-sunken",
    navy: "bg-navy-900 text-navy-100 on-dark",
  };

  const isDark = background === "navy";
  const Heading = headingLevel;

  return (
    <section
      className={twMerge(
        clsx(
          "py-14 sm:py-20 lg:py-24",
          backgrounds[background],
          ruled && !isDark && "border-t border-line",
          className
        )
      )}
      {...props}
    >
      <Container size={containerSize}>
        {(title || subtitle || eyebrow) && (
          <div
            className={clsx(
              "mb-10 sm:mb-14",
              align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
            )}
          >
            {eyebrow && (
              <p className={clsx("eyebrow mb-4", align === "center" && "justify-center")}>
                {eyebrow}
              </p>
            )}
            {title && (
              <Heading
                className={clsx(
                  "text-2xl sm:text-3xl lg:text-4xl font-display font-semibold",
                  isDark ? "text-white" : "text-ink-950"
                )}
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <p
                className={clsx(
                  "mt-4 text-base sm:text-lg leading-relaxed",
                  isDark ? "text-navy-100" : "text-ink-700"
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
