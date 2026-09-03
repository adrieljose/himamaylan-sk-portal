/**
 * Certificate of Candidacy forms for the 2026 BSKE.
 *
 * IMPORTANT, READ BEFORE EDITING
 *
 * Every entry here points a prospective candidate at the paperwork they will
 * file. A wrong link is worse than no link, so `url` stays null until someone
 * has opened the PDF and confirmed two things:
 *
 *   1. It is for the 2026 Barangay and SK Elections, not an earlier cycle and
 *      not the National and Local Elections. NLE forms cover senators and
 *      mayors and are useless to an SK candidate.
 *   2. It is the position the row claims to be.
 *
 * An entry with `url: null` renders as "Not yet published" and directs the
 * visitor to the election office instead. That is the safe default.
 */

export interface CocForm {
  id: string;
  /** The office the form is filed for. */
  position: string;
  /** Which council the position belongs to. */
  council: "Sangguniang Kabataan" | "Barangay";
  /** COMELEC form number, once confirmed. */
  formNumber: string | null;
  description: string;
  /** Verified direct link to the PDF. Null until confirmed. */
  url: string | null;
}

/** The official COMELEC page for this election cycle. Verified to exist. */
export const COMELEC_BSKE_2026_URL = "https://www.comelec.gov.ph/?r=2026BSKE";

/** Where COMELEC published the equivalent forms last barangay cycle, for reference. */
export const COMELEC_BSKE_PREVIOUS_URL =
  "https://www.comelec.gov.ph/?r=2023BSKE/CertificateOfCandidacy";

export const COC_FORMS: CocForm[] = [
  {
    id: "sk-chairperson",
    position: "SK Chairperson",
    council: "Sangguniang Kabataan",
    formNumber: null,
    description:
      "For candidates seeking to chair the Sangguniang Kabataan of their barangay. One chairperson is elected per barangay.",
    url: null,
  },
  {
    id: "sk-kagawad",
    position: "SK Kagawad",
    council: "Sangguniang Kabataan",
    formNumber: null,
    description:
      "For candidates seeking a seat as a member of the Sangguniang Kabataan. Seven kagawad are elected per barangay.",
    url: null,
  },
  {
    id: "punong-barangay",
    position: "Punong Barangay",
    council: "Barangay",
    formNumber: null,
    description:
      "For candidates seeking to lead the barangay council. Filed under the barangay election, not the SK election.",
    url: null,
  },
  {
    id: "sangguniang-barangay",
    position: "Sangguniang Barangay Member",
    council: "Barangay",
    formNumber: null,
    description:
      "For candidates seeking a seat on the barangay council. Seven members are elected per barangay.",
    url: null,
  },
];

/** True once at least one form has a confirmed link. Drives the page's notice. */
export const HAS_PUBLISHED_FORMS = COC_FORMS.some((f) => f.url !== null);
