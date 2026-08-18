"use client";

import React from "react";
import Link from "next/link";
import { Megaphone, CalendarBlank, ArrowRight } from "@phosphor-icons/react";
import { ANNOUNCEMENTS } from "@/config/announcements";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export function AnnouncementsBanner() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <Container size="xl">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900 shadow-sm">
                <Megaphone size={20} aria-hidden="true" className="text-amber-800" weight="fill" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900 text-xl sm:text-2xl tracking-tight">
                  Official Election Advisories &amp; Notices
                </h2>
                <p className="text-xs text-slate-500 font-normal">
                  Broadcasts from the Himamaylan City Office of the Election Officer
                </p>
              </div>
            </div>

            <span className="text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs self-start sm:self-auto">
              Official Bulletin Board
            </span>
          </div>

          {ANNOUNCEMENTS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ANNOUNCEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl p-6 sm:p-7 border border-slate-200 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="gold" size="sm">
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <CalendarBlank size={16} aria-hidden="true" weight="fill" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-slate-900 text-lg leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.content}
                    </p>
                  </div>

                  {item.linkUrl && item.linkText && (
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <Link
                        href={item.linkUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-comelec-blue-800 hover:text-comelec-blue-600 group"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight size={16} weight="fill" aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center rounded-xl bg-white border border-slate-200 text-slate-500 text-sm">
              No new election advisories at this time. Check back regularly for registration calendar updates.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
