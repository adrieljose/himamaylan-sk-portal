import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "Sources & legal references" };
export default function Page() {
  return (
    <Article
      title="Sources & legal references"
      intro="Official sources behind the 2028 guide and age calculations."
    >
      <SourceList />
      <InfoSection title="How the checker works">
        <p>
          We compare your calendar birth date with May 8, 2028 and display
          completed years, months and days. Voting age has a minimum of 18 and
          no maximum. National candidate thresholds are checked separately for
          each office.
        </p>
        <p>
          Last researched November 15, 2026. Follow COMELEC amendments and
          official rulings. These sources are guidance, not an individual legal
          determination.
        </p>
      </InfoSection>
    </Article>
  );
}
