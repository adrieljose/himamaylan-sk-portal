import Link from "next/link";
import { SOURCES } from "@/config/election";
export function Article({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-surface-subtle border-b border-line">
        <div className="max-w-5xl mx-auto px-5 py-14 sm:py-20">
          <p className="eyebrow">Himamaylan · NLE 2028</p>
          <h1 className="text-3xl sm:text-5xl mt-4 font-display">{title}</h1>
          <p className="mt-5 text-lg max-w-3xl leading-relaxed">{intro}</p>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-5 py-12 space-y-9">
        {children}
        <p className="text-sm border-t border-line pt-6">
          Reviewed November 15, 2026. Rules and schedules may be amended.{" "}
          <Link className="underline text-navy-700" href="/references">
            Check the official sources.
          </Link>
        </p>
      </div>
    </div>
  );
}
export function SourceList() {
  return (
    <ul className="space-y-6">
      {SOURCES.map((s) => (
        <li key={s.url}>
          <a
            className="font-semibold text-navy-700 underline"
            href={s.url}
            target="_blank"
            rel="noreferrer"
          >
            {s.title} ↗
          </a>
          <p className="mt-2">{s.note}</p>
        </li>
      ))}
    </ul>
  );
}
export function InfoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl">{title}</h2>
      <div className="leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
