export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Eligibility" | "Age Calculation" | "Registration" | "Candidacy" | "General";
}

export const FAQS: FAQItem[] = [
  {
    id: "what-is-sk",
    category: "General",
    question: "What is the Sangguniang Kabataan (SK)?",
    answer:
      "The Sangguniang Kabataan (SK) is the youth council in every barangay in the Philippines. It is composed of a Chairperson and seven (7) Councilors (Kagawad) elected by the youth registered voters of the Katipunan ng Kabataan. The SK leads youth-focused programs, sports, education, leadership development, and environmental protection in the barangay.",
  },
  {
    id: "sk-voter-age-range",
    category: "Eligibility",
    question: "What is the SK voter age range?",
    answer:
      "Under Republic Act No. 10742 (as amended by RA 11768), youth voters must be at least fifteen (15) but not more than thirty (30) years of age on the day of the election (November 2, 2026). If you are between 15 and 30 years old on Election Day, you are within the statutory age range to vote for SK officials.",
  },
  {
    id: "sk-candidate-age-range",
    category: "Candidacy",
    question: "What is the SK candidate age range?",
    answer:
      "To run for SK Chairperson or SK Member (Kagawad), an applicant must be at least eighteen (18) but strictly not more than twenty-four (24) years of age on the day of the election (November 2, 2026). Candidates must be at least 18 and strictly not older than 24 years old (exceeding 24 years, such as being 24 years and 1 day old, is considered overage under RA 10742).",
  },
  {
    id: "can-i-run-if-24-and-1-day",
    category: "Candidacy",
    question: "Can I run for SK if I am 24 years and 1 day old on Election Day?",
    answer:
      "No. Under Section 10(b) of Republic Act No. 10742, SK candidates must strictly be 'not more than twenty-four (24) years of age on the day of the elections.' If you have passed your 24th birthday and are 24 years and 1 day old (or older) on November 2, 2026, you exceed the statutory age limit for candidates. However, you remain fully eligible to vote in the SK election as an SK voter (which covers youth up to 30 years of age).",
  },
  {
    id: "age-basis-election-day",
    category: "Age Calculation",
    question: "Is my eligibility based on my age today or on Election Day?",
    answer:
      "All statutory age requirements are strictly calculated based on your exact age on the day of the election: November 2, 2026. Even if you are currently 14 or 17 years old today, if you reach 15 or 18 on or before November 2, 2026, you will be considered eligible on Election Day.",
  },
  {
    id: "turn-18-before-election",
    category: "Age Calculation",
    question: "What if I turn 18 on or before Election Day?",
    answer:
      "If you celebrate your 18th birthday on or before November 2, 2026, you will be eligible to run as an SK candidate (ages 18-24) and you will also be eligible to vote in both the SK election (ages 15-30) and the regular Barangay council election (ages 18+), provided you are duly registered with COMELEC.",
  },
  {
    id: "turn-25-before-election",
    category: "Age Calculation",
    question: "What if I turn 25 on or before Election Day?",
    answer:
      "If you reach the age of 25 on or before November 2, 2026, you are outside the statutory age limit for SK candidates (18-24). However, you remain fully eligible to vote as an SK voter because SK voting eligibility continues up to age 30 on Election Day.",
  },
  {
    id: "age-alone-eligibility",
    category: "Eligibility",
    question: "Does meeting the age requirement alone guarantee my eligibility?",
    answer:
      "No. Age is a primary threshold requirement, but you must also satisfy all other statutory requirements: Philippine citizenship, actual residency in the barangay for the required period, registration in the Katipunan ng Kabataan / COMELEC voter roll, literacy (for candidates), and the absence of any legal disqualifications.",
  },
  {
    id: "what-is-kk",
    category: "General",
    question: "What is the Katipunan ng Kabataan (KK)?",
    answer:
      "The Katipunan ng Kabataan is the general assembly of all Filipino citizens residing in the barangay for at least six (6) months who are 15 to 30 years old and registered in the COMELEC / SK list of voters. The KK elects the SK officials and deliberates on barangay youth affairs.",
  },
  {
    id: "residency-requirements",
    category: "Eligibility",
    question: "What residency requirements apply for SK voters and candidates?",
    answer:
      "For SK voters: Must be a resident of the barangay for at least six (6) months immediately preceding the election. For SK candidates: Must be a resident of the barangay for at least one (1) year immediately preceding the election day.",
  },
  {
    id: "registration-status",
    category: "Registration",
    question: "Do I need to register with COMELEC to vote in the SK election?",
    answer:
      "Yes. You must be registered in the official COMELEC SK voter database. If you have not registered during designated COMELEC registration periods, or if your registration is inactive/deactivated, you must visit the Himamaylan City Office of the Election Officer during official voter registration schedules.",
  },
  {
    id: "double-voting-18-to-30",
    category: "Eligibility",
    question: "Can I vote in both the regular Barangay and SK elections if I am 18 to 30 years old?",
    answer:
      "Yes! Registered voters aged 18 to 30 are entitled to vote on two (2) ballots: one for the regular Barangay officials (Punong Barangay and Barangay Kagawad) and one for the Sangguniang Kabataan officials.",
  },
  {
    id: "anti-dynasty-rules",
    category: "Candidacy",
    question: "Are there anti-political dynasty restrictions for SK candidates?",
    answer:
      "Yes. Under Section 10 of RA 10742 (as amended), an SK candidate must not be related within the second civil degree of consanguinity or affinity to any incumbent elected national official or to any incumbent elected regional, provincial, city, municipal, or barangay official in the locality where the candidate seeks to be elected.",
  },
  {
    id: "verify-official-info",
    category: "General",
    question: "Where can I verify official election resolutions and guidelines?",
    answer:
      "Official resolutions, registration notices, and calendar of activities are published on the official Commission on Elections website (comelec.gov.ph) and posted at the Himamaylan City Hall bulletin board and the Office of the Election Officer.",
  },
  {
    id: "contact-election-office",
    category: "General",
    question: "Where can I contact the Himamaylan City Election Office?",
    answer:
      "The Office of the Election Officer is located in Himamaylan City Hall Compound, Himamaylan City, Negros Occidental. You may also refer to our Contact page for updated office hours, telephone lines, and email assistance.",
  },
];
