import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "The 2028 National and Local Elections" };
export default function Page() {
  return (
    <Article
      title="The 2028 National and Local Elections"
      intro="Monday, May 8, 2028 · Philippines"
    >
      <InfoSection title="What this election covers">
        <p>
          National positions include President, Vice President, senators and
          members of the House of Representatives, including party-list
          representation. Local contests are also part of NLE. This guide
          focuses on national voting and national candidate age requirements.
        </p>
      </InfoSection>
      <InfoSection title="Registration and election announcements">
        <p>
          COMELEC Resolution No. 11294 governs continuing voter registration for
          this election. The regular domestic application period is November 10,
          2026 through July 30, 2027 (Section 3), subject to COMELEC changes.
          Confirm excluded days, office schedules and satellite activities
          directly with COMELEC before visiting.
        </p>
        <p>
          Refer to the 2028 resolutions for the official COC filing dates,
          campaign periods and voting instructions as these are issued or
          amended.
        </p>
        <a
          className="text-navy-700 underline"
          href="https://www.comelec.gov.ph/?r=2028NLE%2FResolutions"
        >
          Open 2028 COMELEC resolutions ↗
        </a>
      </InfoSection>
      <InfoSection title="Before election day">
        <p>
          Check your active registration, address and precinct assignment.
          Prepare an accepted identification document and follow official ballot
          and polling-place instructions. This site cannot confirm your precinct
          or registration record.
        </p>
      </InfoSection>
    </Article>
  );
}
