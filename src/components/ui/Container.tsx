import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * Single source of truth for page gutters and measure.
 * 1200px is a deliberate ceiling — wider than this and the 12-column grid
 * stops reading as a grid and starts reading as a stretched dashboard.
 */
export function Container({
  className,
  size = "lg",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-[1200px]",
    xl: "max-w-[1320px]",
    full: "max-w-full",
  };

  return (
    <div
      className={twMerge(
        clsx("w-full mx-auto px-5 sm:px-6 lg:px-8", sizes[size], className)
      )}
      {...props}
    >
      {children}
    </div>
  );
}
