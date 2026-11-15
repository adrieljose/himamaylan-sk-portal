import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "2028 candidacy forms & guidance" };
export default function Page() {
  return (
    <Article
      title="2028 candidacy forms & guidance"
      intro="Use the form for the correct office and election cycle."
    >
      <InfoSection title="Get forms from COMELEC">
        <p>
          Previous SK Chairperson and Kagawad forms do not apply to national
          candidates. Use only the 2028 Certificate of Candidacy and supporting
          instructions published by COMELEC for your intended office.
        </p>
        <a
          className="text-navy-700 underline"
          href="https://www.comelec.gov.ph/?r=2028NLE%2FResolutions"
        >
          Check official 2028 resolutions and filing instructions ↗
        </a>
      </InfoSection>
      <InfoSection title="Before filing">
        <p>
          Confirm the designated filing venue, filing period, required
          attachments and notarization instructions. Meeting an age threshold is
          only one part of candidacy. This site does not accept or submit COCs.
        </p>
      </InfoSection>
    </Article>
  );
}
