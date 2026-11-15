import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "Voter registration & records" };
export default function Page() {
  return (
    <Article
      title="Voter registration & records"
      intro="Prepare your registration for the 2028 NLE."
    >
      <InfoSection title="New voter or turning 18 by election day?">
        <p>
          People born on or before May 8, 2010 meet the 2028 voting age
          threshold. You may apply before turning 18 if you will reach 18 by
          election day and meet the other requirements under COMELEC rules.
        </p>
      </InfoSection>
      <InfoSection title="Already registered?">
        <p>
          Confirm your record is active and your address is correct. Ask the
          election office whether you need a transfer, correction or
          reactivation. Do not submit a duplicate registration.
        </p>
      </InfoSection>
      <InfoSection title="Visit your election office">
        <p>
          The regular domestic registration period is November 10, 2026 to July
          30, 2027 under COMELEC Resolution No. 11294, Section 3, subject to
          amendments and excluded dates. Check the current office schedule and
          accepted identification documents first. Follow the official
          application, identity verification and biometrics process. The age
          checker does not replace registration.
        </p>
      </InfoSection>
      <InfoSection title="Voter statistics">
        <p>
          No certified 2028 Himamaylan voter totals are published on this site.
          Previous SK voter counts are not presented as 2028 NLE data.
        </p>
      </InfoSection>
    </Article>
  );
}
