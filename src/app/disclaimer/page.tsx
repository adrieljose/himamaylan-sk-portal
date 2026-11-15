import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "Disclaimer & privacy" };
export default function Page() {
  return (
    <Article
      title="Disclaimer & privacy"
      intro="Understand the scope of this information service."
    >
      <InfoSection title="Information, not certification">
        <p>
          Himamaylan NLE 2028 is an informational election guide. It does not
          issue voter certification, register voters or approve candidacies.
          COMELEC and the appropriate courts or tribunals determine official
          eligibility. Verify current rules with official sources.
        </p>
      </InfoSection>
      <InfoSection title="Your information">
        <p>
          The checker processes your birth date and self-assessment answers in
          browser memory. It does not upload them, save them to browser storage,
          or put them in a URL. Printing creates a copy under your control.
          Hosting providers may retain ordinary technical access logs.
        </p>
        <p>
          External links lead to other websites with their own privacy policies.
        </p>
      </InfoSection>
    </Article>
  );
}
