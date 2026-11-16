import Link from "next/link";
import { notFound } from "next/navigation";
import { Article, InfoSection } from "@/components/Article";
import { VideoPlayer } from "@/components/learning/VideoPlayer";
import { learningModules, formatDuration } from "@/config/learning";
export function generateStaticParams() {
  return learningModules.map((m) => ({ slug: m.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = learningModules.find((m) => m.slug === params.slug);
  return m
    ? { title: `Module ${m.number}: ${m.title}`, description: m.subtitle }
    : {};
}
export default function ModulePage({ params }: { params: { slug: string } }) {
  const m = learningModules.find((m) => m.slug === params.slug);
  if (!m) notFound();
  const prev = learningModules.find((x) => x.number === m.number - 1),
    next = learningModules.find((x) => x.number === m.number + 1);
  return (
    <Article title={m.title} intro={m.subtitle}>
      <Link
        href="/learn"
        className="text-sm text-navy-700 underline underline-offset-4"
      >
        ← All learning modules
      </Link>
      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <span>Module {m.number} of 8</span>
        <span aria-hidden="true">·</span>
        <span>{formatDuration(m.duration)}</span>
        <span aria-hidden="true">·</span>
        <span>{m.category}</span>
        <span className="text-orange-700">AI-generated visuals</span>
      </div>
      {m.contextNote && (
        <aside
          aria-label="Election context"
          className="border-l-4 border-orange-500 bg-orange-50 p-5 text-sm leading-relaxed"
        >
          <p className="font-semibold">
            Barangay/SK context — separate from NLE
          </p>
          <p className="mt-2">{m.contextNote}</p>
          <Link
            href="/qualifications"
            className="inline-block mt-3 text-navy-700 underline font-semibold"
          >
            Read current NLE qualifications →
          </Link>
        </aside>
      )}
      <VideoPlayer
        title={`Module ${m.number}: ${m.title}`}
        poster={m.poster}
        standard={m.standard}
        saver={m.saver}
      />
      <InfoSection title="Module overview">
        {m.summary.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="text-sm text-ink-600">
          Adapted from the supplied module writeups. This overview is a
          description, not a transcript of the narration.
        </p>
      </InfoSection>
      <InfoSection title="Things to reflect on">
        <ul className="list-disc pl-5 space-y-2">
          {m.takeaways.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </InfoSection>
      <p className="text-sm text-ink-600">
        AI-generated scenes illustrate the theme of the lesson. Verify election
        qualifications, forms and schedules through{" "}
        <Link href="/references" className="text-navy-700 underline">
          official COMELEC sources
        </Link>
        .
      </p>
      <nav
        aria-label="Module navigation"
        className="flex flex-wrap justify-between gap-5 border-t border-line pt-6"
      >
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="text-navy-700 font-semibold"
          >
            ← Module {prev.number}: {prev.title}
          </Link>
        ) : (
          <Link href="/learn" className="text-navy-700 font-semibold">
            ← Learning Hub
          </Link>
        )}
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="text-navy-700 font-semibold"
          >
            Module {next.number}: {next.title} →
          </Link>
        ) : (
          <Link href="/checker" className="text-navy-700 font-semibold">
            Check your eligibility →
          </Link>
        )}
      </nav>
    </Article>
  );
}
