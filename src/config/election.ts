export const electionConfig = {
  city: "Himamaylan City",
  province: "Negros Occidental",
  region: "Region VI (Western Visayas)",
  electionName: "2026 Barangay and Sangguniang Kabataan Elections",
  electionShortName: "2026 BSKE",
  electionDate: "2026-11-02",
  electionDateDisplay: "November 2, 2026",
  electionYear: 2026,
  skVoterAge: {
    min: 15,
    max: 30,
    label: "15 to 30 years old on Election Day",
    description: "Must be at least 15 but not more than 30 years of age on November 2, 2026.",
  },
  skCandidateAge: {
    min: 18,
    max: 24,
    label: "18 to 24 years old on Election Day",
    description: "Must be at least 18 but not more than 24 years of age on November 2, 2026.",
  },
  lastUpdated: "August 18, 2026",
  siteTitle: "Himamaylan City COMELEC | 2026 SK Age & Eligibility Checker",
  siteDescription:
    "Check your exact age on Election Day (November 2, 2026) and learn about applicable SK voter and candidate age requirements for the 2026 Barangay and Sangguniang Kabataan Elections in Himamaylan City, Negros Occidental.",
  siteUrl: "https://himamaylan-comelec.vercel.app",
  officialWebsite: "https://comelec.gov.ph",
  governingLaws: [
    "Republic Act No. 10742 (Sangguniang Kabataan Reform Act of 2015)",
    "Republic Act No. 11768 (Amendments to RA 10742)",
    "COMELEC Official Resolutions on 2026 BSKE",
  ],
} as const;
