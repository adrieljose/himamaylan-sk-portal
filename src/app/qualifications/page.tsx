import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "Who can vote or run in 2028?" };
export default function Page() {
  return (
    <Article
      title="Who can vote or run in 2028?"
      intro="The national election has different rules from the SK election. Start with the requirements for the role you are considering."
    >
      <InfoSection title="Voting in the Philippines">
        <p>
          You must be a Filipino citizen, at least 18 on election day, resident
          in the Philippines for at least one year and in the place where you
          propose to vote for at least six months immediately before the
          election, and not disqualified by law. You also need active voter
          registration.
        </p>
        <p>
          There is no upper voting age. Literacy, property ownership and payment
          of tax are not voting requirements. Overseas voters follow a separate
          registration framework.
        </p>
      </InfoSection>
      <InfoSection title="National elective offices">
        <div className="space-y-6">
          {NATIONAL_OFFICES.map((o) => (
            <div key={o.id} className="border-l-4 border-orange-500 pl-5">
              <h3 className="text-xl">
                {o.label}: {o.minAge} and above
              </h3>
              <p className="mt-2">{o.requirements}</p>
              <p className="text-sm mt-2">{o.citation}</p>
            </div>
          ))}
        </div>
      </InfoSection>
      <InfoSection title="Other offices and restrictions">
        <p>
          The checker covers district representatives, senators, president and
          vice president. Party-list nominees and local candidates have separate
          statutory qualifications. Ask COMELEC for the rules for the specific
          office.
        </p>
        <p>
          The SK-specific age ceiling and SK-specific anti-dynasty test are not
          applied to national candidates here. Citizenship, residence,
          registration, term limits, disqualifications and filing requirements
          still need individual review.
        </p>
      </InfoSection>
    </Article>
  );
}
