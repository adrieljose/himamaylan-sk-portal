import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  isAfter,
  isValid,
  startOfDay,
  getDaysInMonth,
} from "date-fns";

export const ELECTION_DATE = new Date(2026, 10, 2); 
export const ELECTION_DATE_STRING = "2026-11-02";
export const ELECTION_DATE_DISPLAY = "November 2, 2026";

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS_IN_MONTHS = Array.from({ length: 31 }, (_, i) => i + 1);

export const YEAR_RANGE = Array.from({ length: 50 }, (_, i) => 2015 - i);

export type AgeCategory =
  | "BELOW_SK"
  | "VOTER_ONLY"
  | "BOTH"
  | "VOTER_ABOVE_CANDIDATE"
  | "ABOVE_SK";

export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

export interface ExactAgeResult extends AgeBreakdown {
  category: AgeCategory;
  categoryLabel: string;
}

export interface EligibilityStatusDetails {
  status: "eligible" | "ineligible" | "boundary";
  headline: string;
  reason: string;
  legalCitation: string;
}

export interface EligibilityResult {
  isVoterEligible: boolean;
  isCandidateEligible: boolean;
  voterEligibility: EligibilityStatusDetails;
  candidateEligibility: EligibilityStatusDetails;
  category: AgeCategory;
}

export interface PersonalizedAdvice {
  headline: string;
  explanation: string;
  nextSteps: string[];
  statutoryNote: string;
}

export interface DateValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export function validateDateOfBirth(month: number, day: number, year: number): DateValidationResult {
  if (month < 1 || month > 12) {
    return { isValid: false, errorMessage: "Invalid month selected." };
  }
  if (year < 1900 || year > 2026) {
    return { isValid: false, errorMessage: "Birth year must be between 1900 and 2026." };
  }

  const tempDate = new Date(year, month - 1, 1);
  const maxDays = getDaysInMonth(tempDate);

  if (day < 1 || day > maxDays) {
    return {
      isValid: false,
      errorMessage: `${MONTH_NAMES[month - 1]} ${year} has only ${maxDays} days.`,
    };
  }

  const birthDate = new Date(year, month - 1, day);
  if (isAfter(birthDate, ELECTION_DATE)) {
    return {
      isValid: false,
      errorMessage: "Date of birth cannot be after the election date (Nov 2, 2026).",
    };
  }

  return { isValid: true };
}

export function formatDateOfBirth(month: number, day: number, year: number): string {
  const monthName = MONTH_NAMES[month - 1] || "";
  return `${monthName} ${day}, ${year}`;
}

export function parseDateString(dobString: string): { month: number; day: number; year: number } | null {
  if (!dobString) return null;
  const parts = dobString.split("-");
  if (parts.length !== 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  return { month, day, year };
}

export function calculateAgeOnElectionDay(dobInput: Date | string): AgeBreakdown {
  const dob = typeof dobInput === "string" ? new Date(dobInput) : dobInput;
  if (!isValid(dob)) {
    throw new Error("Invalid date of birth provided.");
  }

  const birthDayNormalized = startOfDay(dob);
  const electionDayNormalized = startOfDay(ELECTION_DATE);

  if (isAfter(birthDayNormalized, electionDayNormalized)) {
    return { years: 0, months: 0, days: 0, totalDays: 0 };
  }

  const years = differenceInYears(electionDayNormalized, birthDayNormalized);

  const dateAfterYears = new Date(birthDayNormalized);
  dateAfterYears.setFullYear(birthDayNormalized.getFullYear() + years);
  const months = differenceInMonths(electionDayNormalized, dateAfterYears);

  const dateAfterMonths = new Date(dateAfterYears);
  dateAfterMonths.setMonth(dateAfterYears.getMonth() + months);
  const days = differenceInDays(electionDayNormalized, dateAfterMonths);

  const totalDays = differenceInDays(electionDayNormalized, birthDayNormalized);

  return { years, months, days, totalDays };
}

export function getAgeCategory(years: number, months: number = 0, days: number = 0): AgeCategory {
  if (years < 15) return "BELOW_SK";
  if (years >= 15 && years < 18) return "VOTER_ONLY";
  if (years >= 18 && years < 24) return "BOTH";
  if (years === 24) {
    if (months === 0 && days === 0) return "BOTH";
    return "VOTER_ABOVE_CANDIDATE";
  }
  if (years >= 25 && years <= 30) return "VOTER_ABOVE_CANDIDATE";
  return "ABOVE_SK";
}

export function getCategoryLabel(category: AgeCategory): string {
  switch (category) {
    case "BELOW_SK":
      return "Underage for Sangguniang Kabataan";
    case "VOTER_ONLY":
      return "Eligible SK Youth Voter (15–17)";
    case "BOTH":
      return "Eligible for Both SK Voter & SK Candidate (18–24)";
    case "VOTER_ABOVE_CANDIDATE":
      return "Eligible SK Voter (25–30 Youth Bracket)";
    case "ABOVE_SK":
      return "Above Statutory SK Age (31+ Regular Barangay Voter)";
  }
}

export function calculateExactAge(month: number, day: number, year: number): ExactAgeResult {
  const dob = new Date(year, month - 1, day);
  const ageBreakdown = calculateAgeOnElectionDay(dob);
  const category = getAgeCategory(ageBreakdown.years, ageBreakdown.months, ageBreakdown.days);
  const categoryLabel = getCategoryLabel(category);

  return {
    ...ageBreakdown,
    category,
    categoryLabel,
  };
}

export function checkSKVoterEligibility(years: number) {
  if (years < 15) {
    return {
      eligible: false,
      status: "below" as const,
      label: "Outside Applicable Range (Underage)",
      description: "Must be at least 15 years old on November 2, 2026.",
      minAge: 15,
      maxAge: 30,
    };
  }
  if (years > 30) {
    return {
      eligible: false,
      status: "above" as const,
      label: "Outside Applicable Range (Over statutory youth limit)",
      description: "Must not be older than 30 years of age on November 2, 2026.",
      minAge: 15,
      maxAge: 30,
    };
  }
  return {
    eligible: true,
    status: "within" as const,
    label: "Within Statutory Voting Age Range",
    description: "Meets the age criteria (15–30 years old on Election Day).",
    minAge: 15,
    maxAge: 30,
  };
}

export function checkSKCandidateEligibility(years: number, months: number = 0, days: number = 0) {
  if (years < 18) {
    return {
      eligible: false,
      status: "below" as const,
      label: "Outside Applicable Range (Below 18)",
      description: "Candidates must be at least 18 years old on November 2, 2026.",
      minAge: 18,
      maxAge: 24,
    };
  }
  if (years > 24 || (years === 24 && (months > 0 || days > 0))) {
    return {
      eligible: false,
      status: "above" as const,
      label: "Outside Applicable Range (Exceeds 24 Years Old)",
      description: "Candidates must be strictly not more than 24 years of age on November 2, 2026 (cannot be 24 and 1 day or older).",
      minAge: 18,
      maxAge: 24,
    };
  }
  return {
    eligible: true,
    status: "within" as const,
    label: "Within Statutory Candidate Age Range",
    description: "Meets the candidate age criteria (strictly 18–24 years old on Election Day).",
    minAge: 18,
    maxAge: 24,
  };
}

export function checkEligibility(month: number, day: number, year: number): EligibilityResult {
  const age = calculateExactAge(month, day, year);
  const years = age.years;
  const months = age.months;
  const days = age.days;
  const category = age.category;

  const isVoterEligible = years >= 15 && years <= 30;
  const isCandidateEligible = years >= 18 && (years < 24 || (years === 24 && months === 0 && days === 0));

  let voterEligibility: EligibilityStatusDetails;
  if (years < 15) {
    voterEligibility = {
      status: "ineligible",
      headline: "Ineligible for SK Voting (Underage)",
      reason: `You will be ${years} years old on November 2, 2026. The minimum statutory age to vote in SK elections is 15 years old.`,
      legalCitation: "RA 10742 Section 7 (Katipunan ng Kabataan Membership)",
    };
  } else if (years > 30) {
    voterEligibility = {
      status: "ineligible",
      headline: "Ineligible for SK Voting (Over Statutory Age)",
      reason: `You will be ${years} years old on November 2, 2026. The maximum age for SK voting is 30 years old. You remain eligible to vote in the regular Barangay council elections if registered.`,
      legalCitation: "RA 10742 Section 7 & RA 11768 Section 2",
    };
  } else {
    const isDualVoter = years >= 18 && years <= 30;
    voterEligibility = {
      status: "eligible",
      headline: years === 30 ? "Qualified SK & Dual Voter (Age 30 - 2 Ballots)" : (isDualVoter ? "Qualified SK & Dual Voter (2 Ballots)" : "Qualified SK Youth Voter (1 Ballot)"),
      reason: isDualVoter
        ? `You will be ${years} years old on November 2, 2026. Since you are in the 18–30 bracket (including 30-year-olds on Election Day), you receive TWO (2) BALLOTS on Election Day: one (1) SK Youth Ballot and one (1) regular Barangay Council Ballot.`
        : `You will be ${years} years old on November 2, 2026. As a youth voter aged 15–17, you will receive one (1) SK Youth Ballot.`,
      legalCitation: "RA 10742 Section 7 & RA 11768 Section 2",
    };
  }

  let candidateEligibility: EligibilityStatusDetails;
  if (years < 18) {
    candidateEligibility = {
      status: "ineligible",
      headline: "Ineligible for SK Candidate (Below 18)",
      reason: `You will be ${years} years old on November 2, 2026. Candidates for SK Chairperson and SK Kagawad must be at least 18 years of age.`,
      legalCitation: "RA 10742 Section 10(b) (Qualifications of SK Officials)",
    };
  } else if (years === 24 && (months > 0 || days > 0)) {
    const excessDesc = months > 0 ? `${months} month${months > 1 ? "s" : ""} and ${days} day${days > 1 ? "s" : ""}` : `${days} day${days > 1 ? "s" : ""}`;
    candidateEligibility = {
      status: "ineligible",
      headline: "Ineligible for SK Candidate (Exceeds 24 Years Old)",
      reason: `On November 2, 2026, you will be 24 years and ${excessDesc} old. Under Section 10(b) of RA 10742, candidates must be strictly 'not more than 24 years of age' on Election Day. Exceeding 24 years (e.g. 24 and 1 day) disqualifies candidacy.`,
      legalCitation: "RA 10742 Section 10(b) & RA 11768 Section 5",
    };
  } else if (years > 24) {
    candidateEligibility = {
      status: "ineligible",
      headline: "Ineligible for SK Candidate (25 or Older)",
      reason: `You will be ${years} years old on November 2, 2026. Candidates must strictly be not more than 24 years of age on election day.`,
      legalCitation: "RA 10742 Section 10(b) & RA 11768 Section 5",
    };
  } else {
    candidateEligibility = {
      status: "eligible",
      headline: years === 24 ? "Age-Qualified for SK Official (Strict 24-Year Limit)" : "Age-Qualified for SK Official",
      reason: `You will be ${years} years old on November 2, 2026, meeting the statutory 18–24 age window for SK Chairperson and SK Member.`,
      legalCitation: "RA 10742 Section 10 & RA 11768 Section 5",
    };
  }

  return {
    isVoterEligible,
    isCandidateEligible,
    voterEligibility,
    candidateEligibility,
    category,
  };
}

export function getPersonalizedAdvice(category: AgeCategory, years: number): PersonalizedAdvice {
  switch (category) {
    case "BELOW_SK":
      return {
        headline: "You are currently below the SK voting age threshold.",
        explanation: `On November 2, 2026, you will be ${years} years old. Under Philippine law, youth must reach at least 15 years of age on election day to register and vote in the Sangguniang Kabataan.`,
        nextSteps: [
          "Wait for upcoming registration periods for succeeding election cycles.",
          "Participate in barangay youth leadership programs and community workshops.",
          "Familiarize yourself with local governance and youth advocacies in Himamaylan City.",
        ],
        statutoryNote: "Pursuant to Section 7 of RA 10742 (SK Reform Act of 2015).",
      };

    case "VOTER_ONLY":
      return {
        headline: "You are eligible to vote as an SK Youth elector (Age 15–17).",
        explanation: `On Election Day, you will be ${years} years old. You meet the age requirement to vote for your Barangay SK Chairperson and 7 SK Kagawads, but are not yet eligible to run for office (minimum candidate age is 18).`,
        nextSteps: [
          "Register during the COMELEC voter registration period at the Himamaylan City Election Office.",
          "Bring a valid school ID or PSA Birth Certificate confirming your residence in your barangay.",
          "Cast your ballot on November 2, 2026 for youth leaders in your barangay.",
        ],
        statutoryNote: "RA 10742 Section 7: Katipunan ng Kabataan encompasses citizens aged 15 to 30.",
      };

    case "BOTH":
      return {
        headline: "You are in the prime age bracket for BOTH SK voting and running for office (Age 18–24).",
        explanation: `On Election Day, you will be ${years} years old. You are entitled to vote for SK officials AND you meet the age qualifications to run for SK Chairperson or SK Member (Kagawad).`,
        nextSteps: [
          "Ensure your active registration in both the Katipunan ng Kabataan and Regular Barangay voter registry.",
          "If considering candidacy, review the mandatory Anti-Dynasty qualifications (no relation within 2nd degree to incumbent officials).",
          "Prepare your Certificate of Candidacy (COC) during the official COMELEC filing window.",
          "Review the SK Mandatory Training Program (SKMTP) prerequisites mandated by RA 11768.",
        ],
        statutoryNote: "RA 10742 Section 10 & RA 11768 Section 5.",
      };

    case "VOTER_ABOVE_CANDIDATE":
      return {
        headline: "You are eligible to vote in the SK election as a senior youth elector (Age 25–30).",
        explanation: `On Election Day, you will be ${years} years old. While you have surpassed the statutory candidate age ceiling (not more than 24), you remain an active member of the Katipunan ng Kabataan and are entitled to vote for SK officials.`,
        nextSteps: [
          "Verify your active status in the COMELEC Precinct Finder or at the Himamaylan City Hall Election Office.",
          "Exercise your right to vote for SK leaders and regular Barangay officials on November 2, 2026.",
          "Support youth development initiatives and participate in Katipunan ng Kabataan assemblies.",
        ],
        statutoryNote: "RA 10742 Section 7 & RA 11768 Section 2.",
      };

    case "ABOVE_SK":
      return {
        headline: "You have graduated from the youth sector (Age 31+).",
        explanation: `On Election Day, you will be ${years} years old. You are above the statutory age limit for Sangguniang Kabataan electors (15–30). However, you remain fully eligible to vote in the regular Barangay council elections if you are a registered voter.`,
        nextSteps: [
          "Verify your regular voter registration at the Himamaylan City Election Office.",
          "Vote for Punong Barangay and 7 Barangay Kagawads on November 2, 2026.",
          "Encourage and mentor youth members of your household and barangay to exercise their civic duties.",
        ],
        statutoryNote: "Omnibus Election Code & RA 10742 Section 7.",
      };
  }
}

export function getPersonalizedMessage(years: number): string {
  if (years < 15) {
    return "You are below the applicable SK youth age range for the 2026 elections. On Election Day, you must be at least 15 years old to vote in the Sangguniang Kabataan.";
  }
  if (years >= 15 && years < 18) {
    return "You fall within the applicable SK voter age range (15–17 years old). You are below the statutory candidate age range (18–24).";
  }
  if (years >= 18 && years <= 24) {
    return "You fall within both the SK voter (15–30) and candidate (18–24) age ranges on Election Day, subject to all other statutory qualifications and COMELEC requirements.";
  }
  if (years >= 25 && years <= 30) {
    return "You remain within the applicable SK voter age range (15–30 years old). You are above the candidate age range (18–24), but remain entitled to vote for SK officials.";
  }
  return "You are above the statutory SK youth age range (15–30) for the 2026 elections. If you are a registered regular voter, you remain fully eligible to vote in the regular Barangay council elections.";
}

export interface EligibilityEvaluation {
  dob: Date;
  dobString: string;
  electionDate: Date;
  electionDateDisplay: string;
  age: AgeBreakdown;
  category: AgeCategory;
  voter: {
    eligible: boolean;
    status: "within" | "below" | "above";
    label: string;
    description: string;
    minAge: number;
    maxAge: number;
  };
  candidate: {
    eligible: boolean;
    status: "within" | "below" | "above";
    label: string;
    description: string;
    minAge: number;
    maxAge: number;
  };
  regularBarangayVoter: {
    eligible: boolean;
    label: string;
    description: string;
  };
  message: string;
  shortSummary: string;
}

export function evaluateEligibility(dobInput: Date | string): EligibilityEvaluation {
  const dob = typeof dobInput === "string" ? new Date(dobInput) : dobInput;
  const age = calculateAgeOnElectionDay(dob);
  const category = getAgeCategory(age.years);
  const voter = checkSKVoterEligibility(age.years);
  const candidate = checkSKCandidateEligibility(age.years);
  const message = getPersonalizedMessage(age.years);

  const regularBarangayVoter = {
    eligible: age.years >= 18,
    label: age.years >= 18 ? "Eligible (18+ Regular Voter)" : "Underage (< 18)",
    description:
      age.years >= 18
        ? "Eligible to vote in regular Barangay council elections (Punong Barangay and Barangay Kagawad)."
        : "Must be 18 years old or older on Election Day to vote in regular Barangay council elections.",
  };

  let shortSummary = "";
  if (category === "BELOW_SK") {
    shortSummary = "Underage for SK (Under 15 on Election Day)";
  } else if (category === "VOTER_ONLY") {
    shortSummary = "Eligible SK Voter (15–17 youth voter)";
  } else if (category === "BOTH") {
    shortSummary = "Eligible for Both SK Voter & SK Candidate (18–24)";
  } else if (category === "VOTER_ABOVE_CANDIDATE") {
    shortSummary = "Eligible SK Voter (25–30 senior youth voter)";
  } else {
    shortSummary = "Over Youth Age Range (31+ Regular Voter only)";
  }

  const dobYear = dob.getFullYear();
  const dobMonth = String(dob.getMonth() + 1).padStart(2, "0");
  const dobDay = String(dob.getDate()).padStart(2, "0");

  return {
    dob,
    dobString: `${dobYear}-${dobMonth}-${dobDay}`,
    electionDate: ELECTION_DATE,
    electionDateDisplay: ELECTION_DATE_DISPLAY,
    age,
    category,
    voter,
    candidate,
    regularBarangayVoter,
    message,
    shortSummary,
  };
}

export interface BoundaryScenario {
  label: string;
  targetAge: number;
  dob: string;
  expectedCategory: AgeCategory;
  notes: string;
}

export const BOUNDARY_SCENARIOS: BoundaryScenario[] = [
  {
    label: "Age 14",
    targetAge: 14,
    dob: "2012-11-03",
    expectedCategory: "BELOW_SK",
    notes: "Turns 14 years old, below 15 minimum voting threshold",
  },
  {
    label: "Age 15",
    targetAge: 15,
    dob: "2011-11-02",
    expectedCategory: "VOTER_ONLY",
    notes: "Turns exactly 15 on Nov 2, 2026 (Min SK voter threshold)",
  },
  {
    label: "Age 17",
    targetAge: 17,
    dob: "2009-05-15",
    expectedCategory: "VOTER_ONLY",
    notes: "17 years old (SK Voter only, below 18 candidate limit)",
  },
  {
    label: "Age 18",
    targetAge: 18,
    dob: "2008-11-02",
    expectedCategory: "BOTH",
    notes: "Turns exactly 18 on Nov 2, 2026 (Enters candidate & regular voter range)",
  },
  {
    label: "Age 24",
    targetAge: 24,
    dob: "2002-11-02",
    expectedCategory: "BOTH",
    notes: "Exactly 24 on Nov 2, 2026 (Maximum candidate age boundary)",
  },
  {
    label: "Age 25",
    targetAge: 25,
    dob: "2001-11-01",
    expectedCategory: "VOTER_ABOVE_CANDIDATE",
    notes: "25 on Election Day (Above candidate age, remains SK voter)",
  },
  {
    label: "Age 30",
    targetAge: 30,
    dob: "1996-11-02",
    expectedCategory: "VOTER_ABOVE_CANDIDATE",
    notes: "Turns exactly 30 on Nov 2, 2026 (Maximum SK voting boundary)",
  },
  {
    label: "Age 31",
    targetAge: 31,
    dob: "1995-11-01",
    expectedCategory: "ABOVE_SK",
    notes: "31 on Election Day (Above SK age limit, regular voter only)",
  },
];

export interface QuestionnaireCriterion {
  id: string;
  title: string;
  question: string;
  description: string;
  explanation: string;
  legalBasis: string;
  scope: "Voter & Candidate" | "Voter Requirement" | "Candidate Requirement" | "Anti-Dynasty Prohibition";
}

export interface QuestionnaireAnswers {
  isCitizen: boolean | null;
  isResidentSixMonths: boolean | null;
  isResidentOneYear: boolean | null;
  isLiterate: boolean | null;
  isRegisteredVoter: boolean | null;
  hasDynastyConflict: boolean | null;
}

export const QUESTIONNAIRE_CRITERIA: QuestionnaireCriterion[] = [
  {
    id: "isCitizen",
    title: "Philippine Citizenship",
    question: "Are you a citizen of the Republic of the Philippines?",
    description: "Filipino citizenship by birth or naturalization is mandatory for both voters and candidates.",
    explanation: "Filipino citizenship by birth or naturalization is mandatory for both voters and candidates.",
    legalBasis: "RA 10742 Sec. 7 & Sec. 10(a)",
    scope: "Voter & Candidate",
  },
  {
    id: "isResidentSixMonths",
    title: "Barangay Residency (6 Months)",
    question: "Have you resided in your barangay for at least six (6) months prior to election day?",
    description: "Minimum 6 months barangay residency is required to register as an SK voter.",
    explanation: "Minimum 6 months barangay residency is required to register as an SK voter.",
    legalBasis: "RA 10742 Sec. 7(a)",
    scope: "Voter Requirement",
  },
  {
    id: "isResidentOneYear",
    title: "Barangay Residency (1 Year for Candidates)",
    question: "Have you resided in the barangay for at least one (1) year immediately preceding the election?",
    description: "Candidates for SK Chairperson and Kagawad must meet the 1-year residency threshold.",
    explanation: "Candidates for SK Chairperson and Kagawad must meet the 1-year residency threshold.",
    legalBasis: "RA 10742 Sec. 10(c)",
    scope: "Candidate Requirement",
  },
  {
    id: "isLiterate",
    title: "Literacy & Language Ability",
    question: "Are you able to read and write in Filipino, English, or the local dialect (Hiligaynon)?",
    description: "Literacy in English, Filipino, or the local dialect is required for candidates to discharge official duties.",
    explanation: "Literacy in English, Filipino, or the local dialect is required for candidates to discharge official duties.",
    legalBasis: "RA 10742 Sec. 10(d)",
    scope: "Candidate Requirement",
  },
  {
    id: "isRegisteredVoter",
    title: "KK Voter Registration Status",
    question: "Are you a registered voter of the Katipunan ng Kabataan (KK) in your barangay?",
    description: "A candidate must be a registered member in the barangay where they are seeking elective office.",
    explanation: "A candidate must be a registered member in the barangay where they are seeking elective office.",
    legalBasis: "RA 10742 Sec. 10(b)",
    scope: "Candidate Requirement",
  },
  {
    id: "hasDynastyConflict",
    title: "Anti-Dynasty Prohibition (2nd Degree)",
    question: "Are you related within the 2nd civil degree of consanguinity or affinity to any incumbent elected official?",
    description: "Anti-dynasty prohibition covers Mayor, Vice Mayor, City Councilors, Punong Barangay, and Barangay Kagawad.",
    explanation: "Anti-dynasty prohibition covers Mayor, Vice Mayor, City Councilors, Punong Barangay, and Barangay Kagawad.",
    legalBasis: "RA 10742 Sec. 10(f)",
    scope: "Anti-Dynasty Prohibition",
  },
];

export interface QuestionnaireEvaluationResult {
  isEligibleVoter: boolean;
  isEligibleCandidate: boolean;
  voterSummary: string;
  candidateSummary: string;
  blockers: string[];
  voterNonAgePassed: boolean;
  candidateNonAgePassed: boolean;
  disqualificationReasons: string[];
}

export function evaluateQuestionnaire(
  answers: QuestionnaireAnswers,
  calculatedAge: number
): QuestionnaireEvaluationResult {
  const blockers: string[] = [];

  if (calculatedAge < 15) {
    blockers.push("Under 15 years old on Election Day (Ineligible for SK voting)");
  } else if (calculatedAge > 30) {
    blockers.push("Over 30 years old on Election Day (Ineligible for SK voting; regular voter only)");
  }

  if (answers.isCitizen === false) {
    blockers.push("Must be a Filipino citizen (Required for voter and candidate eligibility)");
  }

  if (answers.isResidentSixMonths === false) {
    blockers.push("Must have resided in the barangay for at least 6 months prior to the election");
  }

  if (answers.isResidentOneYear === false && calculatedAge >= 18 && calculatedAge <= 24) {
    blockers.push("Candidates must reside in the barangay for at least 1 full year preceding the election");
  }

  if (answers.isLiterate === false && calculatedAge >= 18 && calculatedAge <= 24) {
    blockers.push("Candidates must be able to read and write in Filipino, English, or the local dialect");
  }

  if (answers.isRegisteredVoter === false && calculatedAge >= 18 && calculatedAge <= 24) {
    blockers.push("Candidates must be registered voters of the Katipunan ng Kabataan");
  }

  if (answers.hasDynastyConflict === true && calculatedAge >= 18 && calculatedAge <= 24) {
    blockers.push("Anti-Dynasty Prohibition: Related within 2nd civil degree to an incumbent city or barangay official");
  }

  const voterNonAgePassed =
    answers.isCitizen !== false &&
    answers.isResidentSixMonths !== false;

  const candidateNonAgePassed =
    voterNonAgePassed &&
    answers.isResidentOneYear === true &&
    answers.isLiterate === true &&
    answers.isRegisteredVoter === true &&
    answers.hasDynastyConflict === false;

  const isEligibleVoter =
    calculatedAge >= 15 &&
    calculatedAge <= 30 &&
    voterNonAgePassed;

  const isEligibleCandidate =
    isEligibleVoter &&
    calculatedAge >= 18 &&
    calculatedAge <= 24 &&
    candidateNonAgePassed;

  let voterSummary = isEligibleVoter
    ? "Qualified SK Voter (Meets age, citizenship, and residency)"
    : "Disqualified / Pending Criteria for SK Voter";

  let candidateSummary = isEligibleCandidate
    ? "Fully Qualified for SK Chairperson & Kagawad"
    : calculatedAge < 18
    ? "Below Candidate Age (Must be 18–24)"
    : calculatedAge > 24
    ? "Above Candidate Age (Max 24 on Election Day)"
    : answers.hasDynastyConflict === true
    ? "Disqualified by Anti-Dynasty Provision (RA 10742)"
    : "Disqualified by statutory qualification requirements";

  return {
    isEligibleVoter,
    isEligibleCandidate,
    voterSummary,
    candidateSummary,
    blockers,
    voterNonAgePassed,
    candidateNonAgePassed,
    disqualificationReasons: blockers,
  };
}
