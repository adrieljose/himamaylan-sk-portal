"use client";

import React, { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { clsx } from "clsx";

export interface AccordionItemProps {
  id?: string;
  title: string;
  category?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  id,
  title,
  category,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-subtle transition-all duration-200">
      <button
        type="button"
        id={id ? `accordion-header-${id}` : undefined}
        aria-expanded={isOpen}
        aria-controls={id ? `accordion-body-${id}` : undefined}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset cursor-pointer"
      >
        <div className="space-y-1">
          {category && (
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
              {category}
            </span>
          )}
          <h3 className="font-semibold text-base sm:text-lg text-slate-900 leading-snug">
            {title}
          </h3>
        </div>

        {/* Plus rotates 45 deg to become an X */}
        <div
          className={clsx(
            "w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 transition-transform duration-300",
            isOpen && "rotate-45 bg-blue-100 text-blue-800"
          )}
        >
          <Plus size={16} weight="fill" aria-hidden="true" />
        </div>
      </button>

      {isOpen && (
        <div
          id={id ? `accordion-body-${id}` : undefined}
          role="region"
          aria-labelledby={id ? `accordion-header-${id}` : undefined}
          className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100"
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
  return <div className={clsx("space-y-3", className)}>{children}</div>;
}
