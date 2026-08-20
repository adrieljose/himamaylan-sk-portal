import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ANNOUNCEMENTS } from "@/config/announcements";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Reveal } from "../motion/Reveal";

/**
 * A dated bulletin list, not a card grid. Notices are chronological records —
 * the date is the primary axis, so it leads the row.
 */
export function AnnouncementsBanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-line">
      <Container>
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Bulletin</p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950">
              Advisories and notices
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed">
              Issued by the Office of the Election Officer, Himamaylan City.
            </p>
          </div>
        </Reveal>

        {ANNOUNCEMENTS.length > 0 ? (
          <ol className="border-t border-ink-950">
            {ANNOUNCEMENTS.map((item) => (
              <li key={item.id} className="border-b border-line">
                <article className="py-7 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3">
                  <div className="md:col-span-3">
                    <time
                      dateTime={item.date}
                      className="block font-display font-semibold text-sm text-ink-950"
                    >
                      {item.date}
                    </time>
                    <span className="mt-2 inline-block">
                      <Badge
                        variant={item.isUrgent ? "boundary" : "neutral"}
                        size="sm"
                        showIcon={item.isUrgent}
                      >
                        {item.category}
                      </Badge>
                    </span>
                  </div>

                  <div className="md:col-span-9">
                    <h3 className="font-display font-semibold text-ink-950 text-lg sm:text-xl leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-ink-700 leading-relaxed prose-civic">
                      {item.content}
                    </p>
                    {item.linkUrl && item.linkText && (
                      <Link
                        href={item.linkUrl}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800 group"
                      >
                        {item.linkText}
                        <ArrowRight
                          size={15}
                          weight="bold"
                          aria-hidden="true"
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <div className="border-y border-line py-14 text-center">
            <p className="font-display font-semibold text-ink-950">
              No advisories at this time
            </p>
            <p className="mt-2 text-sm text-ink-700">
              New notices from the election office will appear here.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-display font-semibold text-navy-700 hover:text-navy-800"
            >
              Contact the office directly
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
