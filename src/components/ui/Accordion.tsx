"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { clsx } from "clsx";

export interface AccordionItemProps {
  id?: string;
  title: string;
  category?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/**
 * A ruled disclosure list, not a stack of floating cards. This is the pattern
 * public-sector services converge on because it keeps every question scannable
 * in one column while deferring the answers.
 */
export function AccordionItem({
  id,
  title,
  category,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          id={id ? `accordion-header-${id}` : undefined}
          aria-expanded={isOpen}
          aria-controls={id ? `accordion-body-${id}` : undefined}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-5 text-left flex items-start justify-between gap-5 group cursor-pointer"
        >
          <span className="flex-1">
            {category && (
              <span className="block text-2xs font-display font-semibold text-orange-700 uppercase tracking-[0.08em] mb-1.5">
                {category}
              </span>
            )}
            <span
              className={clsx(
                "block font-display font-semibold text-base sm:text-lg leading-snug transition-colors",
                isOpen ? "text-navy-700" : "text-ink-950 group-hover:text-navy-700"
              )}
            >
              {title}
            </span>
          </span>

          <CaretDown
            size={18}
            weight="bold"
            aria-hidden="true"
            className={clsx(
              "shrink-0 mt-1 transition-transform duration-200",
              isOpen ? "rotate-180 text-navy-700" : "text-ink-600 group-hover:text-navy-700"
            )}
          />
        </button>
      </h3>

      {isOpen && (
        <div
          id={id ? `accordion-body-${id}` : undefined}
          role="region"
          aria-labelledby={id ? `accordion-header-${id}` : undefined}
          className="pb-6 -mt-1 pr-8 text-sm sm:text-base text-ink-700 leading-relaxed prose-civic"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={clsx("border-t border-line", className)}>{children}</div>
  );
}
