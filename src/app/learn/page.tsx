import Link from "next/link";
import { Article } from "@/components/Article";
import { ModuleCard } from "@/components/learning/ModuleCard";
import { learningModules, learningGroups } from "@/config/learning";
export const metadata = {
  title: "Learning Hub — Voter education videos",
  description:
    "Watch eight short AI-assisted civic learning modules, with readable overviews covering national leadership, Congress, local government and community participation.",
};
export default function LearningHub() {
  return (
    <Article
      title="Watch. Learn. Participate."
      intro="Short videos to help you explore the work of government and prepare for informed civic participation. Watch at your own pace, then read each module’s overview."
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-navy-700">
        <span>8 short modules</span>
        <span>About 8 minutes in total</span>
        <span>720p + data saver options</span>
      </div>
      <div className="rounded-lg border border-line bg-surface-subtle p-5 sm:p-6 text-sm leading-relaxed">
        <p className="font-semibold text-ink-950">About this series</p>
        <p className="mt-2">
          These videos use AI-generated presenters or illustrative scenes. They
          are not documentary footage of actual officials or government
          activities. The written overviews describe the supplied videos and are
          not verbatim transcripts.
        </p>
        <p className="mt-2">
          Start with National government for the NLE focus. Barangay/SK modules
          provide separate civic background; their election examples do not
          replace current NLE rules.
        </p>
      </div>
      <nav aria-label="Learning categories" className="flex flex-wrap gap-3">
        {learningGroups.map((g, i) => (
          <a
            key={g}
            href={`#category-${i}`}
            className="border border-line-control rounded px-4 py-3 text-sm font-semibold hover:bg-surface-subtle"
          >
            {g}
          </a>
        ))}
      </nav>
      {learningGroups.map((group, i) => (
        <section key={group} id={`category-${i}`} className="scroll-mt-28">
          <div className="flex flex-wrap justify-between items-end gap-3 mb-5">
            <h2 className="text-2xl">{group}</h2>
            <p className="text-sm text-ink-600">
              {group === "National government"
                ? "Start here for the national election focus"
                : "Explore the wider civic context"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {learningModules
              .filter((m) => m.category === group)
              .map((m) => (
                <ModuleCard key={m.number} module={m} />
              ))}
          </div>
        </section>
      ))}
      <div className="border-t border-line pt-7">
        <h2 className="text-2xl">Ready to check your eligibility?</h2>
        <p className="mt-3">
          Use the current NLE guide for voting age, residency and registration
          requirements.
        </p>
        <Link
          href="/checker"
          className="inline-block mt-5 rounded bg-navy-700 text-white font-semibold px-5 py-3"
        >
          Check my eligibility →
        </Link>
      </div>
    </Article>
  );
}
