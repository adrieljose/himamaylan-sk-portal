import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "Contact & official assistance" };
export default function Page() {
  return (
    <Article
      title="Contact & official assistance"
      intro="For your registration record, precinct or a candidacy question, consult COMELEC directly."
    >
      <InfoSection title="Himamaylan City election office">
        <p>
          Contact the Office of the Election Officer serving Himamaylan City,
          Negros Occidental. Confirm its current location and service hours
          through COMELEC before traveling.
        </p>
        <p>
          Bring your question and relevant registration documents. Avoid sending
          birth dates, ID scans or sensitive voter information to unofficial
          social media accounts.
        </p>
      </InfoSection>
      <InfoSection title="Official channels">
        <a
          className="text-navy-700 underline"
          href="https://www.comelec.gov.ph"
        >
          Open the official COMELEC website ↗
        </a>
        <p>
          Use the official contact directory and current election advisories to
          find the appropriate office. This website cannot modify registration
          records or answer on behalf of COMELEC.
        </p>
      </InfoSection>
    </Article>
  );
}
