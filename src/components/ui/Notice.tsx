import React from "react";
import { clsx } from "clsx";
import { Info, Warning, CheckCircle, XCircle, Scales } from "@phosphor-icons/react/dist/ssr";

export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "warning" | "success" | "danger" | "statutory";
  title?: string;
  /** Renders as <aside> by default; use "div" when already inside a landmark. */
  as?: "aside" | "div";
}

/**
 * The single callout component. Statutory disclaimers, boundary-age warnings and
 * confirmations all shared near-identical markup before this existed.
 *
 * Left rule + tinted field, no icon circle and no shadow: it reads as a marked
 * passage in a document, which is what it is.
 */
export function Notice({
  tone = "info",
  title,
  as: Tag = "aside",
  className,
  children,
  ...props
}: NoticeProps) {
  const tones = {
    info: {
      box: "bg-status-info-bg border-l-status-info",
      text: "text-status-info",
      Icon: Info,
    },
    warning: {
      box: "bg-status-warning-bg border-l-status-warning",
      text: "text-status-warning",
      Icon: Warning,
    },
    success: {
      box: "bg-status-success-bg border-l-status-success",
      text: "text-status-success",
      Icon: CheckCircle,
    },
    danger: {
      box: "bg-status-danger-bg border-l-status-danger",
      text: "text-status-danger",
      Icon: XCircle,
    },
    statutory: {
      box: "bg-surface-subtle border-l-ink-600",
      text: "text-ink-800",
      Icon: Scales,
    },
  };

  const { box, text, Icon } = tones[tone];

  return (
    <Tag
      className={clsx("border-l-[3px] px-5 py-4 rounded-r", box, className)}
      {...props}
    >
      <div className="flex gap-3">
        <Icon
          size={18}
          weight="fill"
          aria-hidden="true"
          className={clsx("shrink-0 mt-0.5", text)}
        />
        <div className="flex-1 min-w-0">
          {title && (
            <p className={clsx("font-display font-semibold text-sm mb-1", text)}>
              {title}
            </p>
          )}
          <div className="text-sm text-ink-700 leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-navy-700">
            {children}
          </div>
        </div>
      </div>
    </Tag>
  );
}
