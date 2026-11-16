import Link from "next/link";
import { Article, InfoSection } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
import { EligibilityChecker } from "@/components/checker/EligibilityChecker";
import { SOURCES } from "@/config/election";

export const metadata = { title: "Election-day age & eligibility checker" };
export default function Page() {
  return (
    <Article
      title="Election-day age & eligibility checker"
      intro="Know the requirements, check your age, and prepare to vote in the May 8, 2028 National and Local Elections."
    >
      <section
        aria-label="Voting age at a glance"
        className="grid sm:grid-cols-3 gap-4"
      >
        {[
          ["18 and above", "Minimum voting age on election day"],
          [
            "May 8, 2010",
            "Born on or before this date to meet the age requirement",
          ],
          [
            "No upper limit",
            "Older adults can meet the voting age requirement too",
          ],
        ].map(([value, label]) => (
          <div
            key={value}
            className="rounded-lg border border-line bg-surface-subtle p-5 sm:p-6"
          >
            <p className="font-display text-xl font-semibold text-navy-800">
              {value}
            </p>
            <p className="mt-2 text-sm leading-relaxed">{label}</p>
          </div>
        ))}
      </section>
      <EligibilityChecker />
      <div className="grid lg:grid-cols-2 gap-8 border-t border-line pt-9">
        <InfoSection title="What else do I need to vote?">
          <p>For domestic voting, you also need to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Be a Filipino citizen.</li>
            <li>
              Have lived in the Philippines for at least one year immediately
              before election day.
            </li>
            <li>
              Have lived in the place where you intend to vote for at least six
              months immediately before election day.
            </li>
            <li>
              Have active registration in the correct locality and be free from
              legal disqualifications.
            </li>
          </ul>
          <p className="text-sm">
            Overseas voters follow separate rules. Age alone does not confirm
            your eligibility or registration.
          </p>
          <a
            className="text-sm text-navy-700 underline underline-offset-4"
            href={SOURCES[0].url}
            target="_blank"
            rel="noreferrer"
          >
            COMELEC registration rules for 2028 ↗
          </a>
        </InfoSection>
        <InfoSection title="Thinking about running for office?">
          <p>National candidate minimum ages are measured on election day:</p>
          <dl className="divide-y divide-line border-y border-line">
            {NATIONAL_OFFICES.map((office) => (
              <div key={office.id} className="flex justify-between gap-4 py-4">
                <dt>{office.label}</dt>
                <dd className="font-display font-semibold text-navy-800 whitespace-nowrap">
                  {office.minAge}+ years
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-sm">
            Citizenship, residency, literacy, registration, term limits and
            other legal restrictions also apply. Local offices and party-list
            nominees have separate rules.
          </p>
          <Link
            className="text-sm text-navy-700 underline underline-offset-4"
            href="/qualifications"
          >
            Read the full national qualifications →
          </Link>
        </InfoSection>
      </div>
      <section className="rounded-lg border border-line bg-surface-subtle p-6 sm:p-8">
        <h2 className="text-2xl">Your next steps</h2>
        <ol className="grid md:grid-cols-3 gap-6 mt-6">
          <li>
            <p className="text-sm text-orange-600 font-semibold">01 · CHECK</p>
            <h3 className="text-lg mt-2">Confirm your voter record</h3>
            <p className="text-sm mt-2 leading-relaxed">
              Already registered? Ask COMELEC to confirm your active status and
              correct address. Do not submit a duplicate registration.
            </p>
          </li>
          <li>
            <p className="text-sm text-orange-600 font-semibold">
              02 · PREPARE
            </p>
            <h3 className="text-lg mt-2">Plan your office visit</h3>
            <p className="text-sm mt-2 leading-relaxed">
              For new registration, transfer or reactivation, check the current
              schedule and accepted identification documents before visiting
              your election office.
            </p>
          </li>
          <li>
            <p className="text-sm text-orange-600 font-semibold">
              03 · FOLLOW THROUGH
            </p>
            <h3 className="text-lg mt-2">Use official guidance</h3>
            <p className="text-sm mt-2 leading-relaxed">
              Follow COMELEC announcements for registration updates, precinct
              assignments and election-day instructions.
            </p>
          </li>
        </ol>
        <div className="flex flex-wrap gap-5 mt-6 text-sm font-semibold text-navy-700">
          <Link className="underline underline-offset-4" href="/voters">
            Registration guide →
          </Link>
          <Link className="underline underline-offset-4" href="/contact">
            Contact & assistance →
          </Link>
          <Link className="underline underline-offset-4" href="/references">
            Official sources →
          </Link>
        </div>
      </section>
    </Article>
  );
}
