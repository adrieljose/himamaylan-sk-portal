import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
import { EligibilityChecker } from "@/components/checker/EligibilityChecker";
export const metadata = { title: "Election-day age & eligibility checker" };
export default function Page() {
  return (
    <Article
      title="Election-day age & eligibility checker"
      intro="Check voting age and national candidate age thresholds for May 8, 2028."
    >
      <EligibilityChecker />
    </Article>
  );
}
