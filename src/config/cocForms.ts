/**
 * Certificate of Candidacy forms for the Sangguniang Kabataan and Barangay
 * elections.
 *
 * IMPORTANT, READ BEFORE EDITING
 *
 * Every `url` below was opened and confirmed to be a genuine PDF served
 * directly from comelec.gov.ph before it was added here. A wrong or stale
 * form is worse than no form, so nothing is linked on the strength of a
 * guessed filename or a search-result snippet.
 *
 * As of this writing, COMELEC has not yet published the 2026 BSKE Certificate
 * of Candidacy forms. https://www.comelec.gov.ph/?r=2026BSKE/COC exists as a
 * section, but the file URLs that would sit under it (following the same
 * naming pattern as the 2023 cycle) return 404. The most recently published
 * forms are from the 2023 BSKE, the last time these same positions were
 * contested, and the underlying Certificate of Candidacy requirements set by
 * RA 10742 have not changed since.
 *
 * `formCycle` records which election a given file was actually published
 * for. The page must never present a non-2026 file as though it were the
 * current one; it labels it honestly and tells the visitor to confirm with
 * the election office before filing.
 *
 * When COMELEC publishes the 2026 versions:
 *   1. Confirm the URL the same way, by opening it and checking it is a
 *      genuine PDF for the correct position and the correct election.
 *   2. Set `url` and `formCycle: "2026 BSKE"` on that entry.
 * Nothing else needs to change; the page reads this file and updates itself.
 */

export interface CocForm {
  id: string;
  /** The office the form is filed for. */
  position: string;
  /** Which council the position belongs to. */
  council: "Sangguniang Kabataan" | "Barangay";
  description: string;
  /** Verified direct link to the PDF on comelec.gov.ph. Null until confirmed. */
  url: string | null;
  /** The election cycle the linked file was actually published for. */
  formCycle: string | null;
}

/** The official COMELEC page for this election cycle. Verified to exist. */
export const COMELEC_BSKE_2026_URL = "https://www.comelec.gov.ph/?r=2026BSKE";

export const CURRENT_CYCLE = "2026 BSKE";

export const COC_FORMS: CocForm[] = [
  {
    id: "sk-chairperson",
    position: "SK Chairperson",
    council: "Sangguniang Kabataan",
    description:
      "For candidates seeking to chair the Sangguniang Kabataan of their barangay. One chairperson is elected per barangay.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2023BSKE/COC/2023BSKESKChairperson.pdf",
    formCycle: "2023 BSKE",
  },
  {
    id: "sk-kagawad",
    position: "SK Kagawad",
    council: "Sangguniang Kabataan",
    description:
      "For candidates seeking a seat as a member of the Sangguniang Kabataan. Seven kagawad are elected per barangay.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2023BSKE/COC/2023BSKESKMember.pdf",
    formCycle: "2023 BSKE",
  },
  {
    id: "punong-barangay",
    position: "Punong Barangay",
    council: "Barangay",
    description:
      "For candidates seeking to lead the barangay council. Filed under the barangay election, not the SK election.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2023BSKE/COC/2023BSKEPunongBarangay.pdf",
    formCycle: "2023 BSKE",
  },
  {
    id: "sangguniang-barangay",
    position: "Sangguniang Barangay Member",
    council: "Barangay",
    description:
      "For candidates seeking a seat on the barangay council. Seven members are elected per barangay.",
    url: null,
    formCycle: null,
  },
];

/** True once every listed form has a link, of any cycle. Drives the page's top notice. */
export const ALL_FORMS_LINKED = COC_FORMS.every((f) => f.url !== null);

/** True once at least one linked form is confirmed as the current cycle's own version. */
export const HAS_CURRENT_CYCLE_FORM = COC_FORMS.some(
  (f) => f.formCycle === CURRENT_CYCLE
);
