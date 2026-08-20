import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";
import { Parallax } from "../motion/Parallax";

export interface Crumb {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}

/**
 * One masthead for every interior page. Consistency here is what makes a set of
 * pages read as a single government service rather than a set of landing pages.
 * The breadcrumb doubles as the "way back" every deep page needs.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-surface-subtle border-b border-line">
      {/*
        Seal watermark. It exists to give the parallax a surface to move
        against, and it earns its place the way a watermark does on an official
        document rather than as decoration. Kept clear of the text column, held
        at 4% opacity, and bled off the right edge so it reads as a ground
        texture instead of an image.
      */}
      <Parallax
        speed={0.16}
        maxShift={90}
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 -top-16 hidden md:block"
      >
        <Image
          src="/images/himamaylan-seal.svg"
          alt=""
          width={420}
          height={420}
          priority={false}
          className="w-[420px] h-[420px] opacity-[0.04]"
        />
      </Parallax>

      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="pt-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-navy-700 hover:underline underline-offset-2"
                >
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <CaretRight size={11} weight="bold" aria-hidden="true" className="text-ink-400" />
                  {c.href && i < crumbs.length - 1 ? (
                    <Link
                      href={c.href}
                      className="hover:text-navy-700 hover:underline underline-offset-2"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink-800 font-semibold">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="py-10 sm:py-14 max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] font-display font-semibold text-ink-950">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-base sm:text-lg text-ink-700 leading-relaxed prose-civic">
              {intro}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </header>
  );
}
