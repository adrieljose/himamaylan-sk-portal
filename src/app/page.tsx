import Link from "next/link";
import { ModuleCard } from "@/components/learning/ModuleCard";
import { learningModules } from "@/config/learning";
import { SourceList } from "@/components/Article";
export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-subtle border-b border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">
              Himamaylan City · National and Local Elections
            </p>
            <h1 className="text-4xl sm:text-6xl font-display leading-tight mt-5">
              Your vote.
              <br />
              Our future.
              <br />
              <span className="text-navy-700">Ready for 2028.</span>
            </h1>
            <p className="text-lg leading-relaxed mt-7 max-w-xl">
              Make your voice count on May 8, 2028. Check your election-day age,
              understand the requirements, and prepare to participate in the
              Philippine national elections.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/checker"
                className="bg-navy-700 text-white font-semibold px-6 py-4 rounded"
              >
                Check my eligibility →
              </Link>
              <Link
                href="/election-info"
                className="border border-line-control bg-white px-6 py-4 rounded"
              >
                Plan for election day
              </Link>
            </div>
            <p className="text-sm mt-5">
              Private by design. No birth date is uploaded or saved.
            </p>
          </div>
          <aside className="lg:col-span-5 lg:self-center bg-white border border-line rounded-lg overflow-hidden">
            <div className="bg-navy-900 on-dark text-white p-7">
              <p className="text-orange-300 text-sm uppercase tracking-wider">
                Mark your calendar
              </p>
              <p className="text-4xl font-display mt-3">08 May 2028</p>
              <p className="mt-2">Monday · National and Local Elections</p>
            </div>
            <dl className="divide-y divide-line">
              {[
                ["Voting age", "18 and above"],
                ["Birth date cutoff", "May 8, 2010"],
                ["Upper voting age", "No maximum"],
                ["Our community", "19 barangays"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 p-5">
                  <dt>{k}</dt>
                  <dd className="font-semibold text-ink-950">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="px-5 pb-5 text-xs">
              Based on COMELEC Resolution No. 11294. Other qualifications apply.
            </p>
          </aside>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 py-14">
        <p className="eyebrow">Prepare with confidence</p>
        <h2 className="text-3xl mt-3 mb-8">Three steps toward your vote</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "01",
              "Know your age",
              "Turn 18 on or before election day. Everyone 18 and older can meet the age requirement.",
              "/checker",
            ],
            [
              "02",
              "Check your registration",
              "Confirm that your registration is active and your address is current with your election office.",
              "/voters",
            ],
            [
              "03",
              "Get reliable information",
              "Read verified requirements and follow COMELEC announcements for schedules and forms.",
              "/references",
            ],
          ].map(([n, t, d, h]) => (
            <Link
              key={n}
              href={h}
              className="block border border-line p-7 rounded-lg hover:border-navy-700"
            >
              <span className="text-orange-600 font-display text-2xl">{n}</span>
              <h3 className="text-xl mt-4">{t}</h3>
              <p className="mt-3 leading-relaxed">{d}</p>
              <p className="text-navy-700 font-semibold mt-5">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 py-14 border-t border-line">
        <p className="eyebrow">The Learning Hub</p>
        <div className="flex flex-wrap items-end justify-between gap-5 mt-3 mb-7">
          <div>
            <h2 className="text-3xl">
              Understand the offices. Make informed choices.
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed">
              Explore eight short videos and readable module overviews about
              government, leadership and civic participation. Start with the
              national election focus below.
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-block rounded bg-navy-700 text-white font-semibold px-5 py-3"
          >
            Explore all 8 modules →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {learningModules
            .filter((m) => m.number >= 7)
            .map((m) => (
              <ModuleCard key={m.number} module={m} />
            ))}
        </div>
        <p className="text-xs mt-4 text-ink-600">
          AI-generated presenters and illustrative scenes. Broader barangay/SK
          topics are labeled separately in the hub.
        </p>
      </section>
      <section className="bg-surface-subtle border-t border-line">
        <div className="max-w-5xl mx-auto px-5 py-14">
          <h2 className="text-3xl mb-7">Information you can trace</h2>
          <SourceList />
        </div>
      </section>
    </>
  );
}
