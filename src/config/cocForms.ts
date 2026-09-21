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
 * COMELEC published the 2026 forms on September 4, 2026 as Annexes K through
 * K-3 of Resolution No. 11196. Each link below was checked against the
 * official 2026 Certificate of Candidacy page and opened as a genuine PDF for
 * the position named in the entry.
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

/** The official COMELEC page for the 2026 Certificate of Candidacy forms. */
export const COMELEC_BSKE_2026_URL =
  "https://www.comelec.gov.ph/?r=2026BSKE/CertificateOfCandidacy";

/**
 * The actual COMELEC page the forms below were obtained from. Verified
 * reachable (does not 404) before use, same as every PDF url in this file.
 */
export const COMELEC_BSKE_SOURCE_URL =
  "https://www.comelec.gov.ph/?r=2026BSKE/CertificateOfCandidacy";

export const CURRENT_CYCLE = "2026 BSKE";

export const COC_FORMS: CocForm[] = [
  {
    id: "sk-chairperson",
    position: "SK Chairperson",
    council: "Sangguniang Kabataan",
    description:
      "For candidates seeking to chair the Sangguniang Kabataan of their barangay. One chairperson is elected per barangay.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2026BSKE/Resolutions/com_res11196_annexK2.pdf",
    formCycle: "2026 BSKE",
  },
  {
    id: "sk-kagawad",
    position: "SK Kagawad",
    council: "Sangguniang Kabataan",
    description:
      "For candidates seeking a seat as a member of the Sangguniang Kabataan. Seven kagawad are elected per barangay.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2026BSKE/Resolutions/com_res11196_annexK3.pdf",
    formCycle: "2026 BSKE",
  },
  {
    id: "punong-barangay",
    position: "Punong Barangay",
    council: "Barangay",
    description:
      "For candidates seeking to lead the barangay council. Filed under the barangay election, not the SK election.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2026BSKE/Resolutions/com_res11196_annexK.pdf",
    formCycle: "2026 BSKE",
  },
  {
    id: "sangguniang-barangay",
    position: "Sangguniang Barangay Member",
    council: "Barangay",
    description:
      "For candidates seeking a seat on the barangay council. Seven members are elected per barangay.",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2026BSKE/Resolutions/com_res11196_annexK1.pdf",
    formCycle: "2026 BSKE",
  },
];

/** True once every listed form has a link, of any cycle. Drives the page's top notice. */
export const ALL_FORMS_LINKED = COC_FORMS.every((f) => f.url !== null);

/** True once at least one linked form is confirmed as the current cycle's own version. */
export const HAS_CURRENT_CYCLE_FORM = COC_FORMS.some(
  (f) => f.formCycle === CURRENT_CYCLE
);
