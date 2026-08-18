export interface LegalReference {
  id: string;
  title: string;
  authority: string;
  promulgationDate: string;
  category: "Statute" | "Resolution" | "Guidelines" | "Constitution";
  summary: string;
  keyProvisions: string[];
  externalUrl: string;
}

export const LEGAL_REFERENCES: LegalReference[] = [
  {
    id: "ra-10742",
    title: "Republic Act No. 10742",
    authority: "Congress of the Philippines",
    promulgationDate: "January 15, 2016",
    category: "Statute",
    summary:
      "The Sangguniang Kabataan Reform Act of 2015 establishes youth development mechanisms, Katipunan ng Kabataan assemblies, anti-dynasty prohibitions, and modern governance standards for SK officials across all Philippine barangays.",
    keyProvisions: [
      "Section 3: Katipunan ng Kabataan (KK) composition — Filipino citizens, resident for at least 6 months, aged 15–30.",
      "Section 10: SK Candidate Qualifications — 18 to 24 years old on election day, resident for 1 year, literate, no disqualifying relationship to incumbent officials within 2nd civil degree.",
      "Section 20: Mandatory Youth Development Plan and SK budget autonomy.",
    ],
    externalUrl: "https://www.officialgazette.gov.ph/2016/01/15/republic-act-no-10742/",
  },
  {
    id: "ra-11768",
    title: "Republic Act No. 11768",
    authority: "Congress of the Philippines",
    promulgationDate: "May 6, 2022",
    category: "Statute",
    summary:
      "An Act Strengthening the Sangguniang Kabataan by Institutionalizing Additional Reforms to RA 10742, providing honoraria for SK members, and expanding youth development councils.",
    keyProvisions: [
      "Grant of monthly honoraria to SK kagawads, secretaries, and treasurers.",
      "Exemption from National Service Training Program (NSTP) civic welfare training for active SK officials.",
      "Strengthening of Local Youth Development Councils (LYDC).",
    ],
    externalUrl: "https://www.officialgazette.gov.ph/2022/05/06/republic-act-no-11768/",
  },
  {
    id: "comelec-bske-guidelines",
    title: "COMELEC Rules and Regulations on 2026 BSKE",
    authority: "Commission on Elections En Banc",
    promulgationDate: "Official 2026 Calendar",
    category: "Resolution",
    summary:
      "General instructions governing voter registration, Katipunan ng Kabataan database updating, filing of Certificates of Candidacy (COC), campaign conduct, and polling day procedures for November 2, 2026.",
    keyProvisions: [
      "Determination of age on November 2, 2026 as standard cutoff for voters and candidates.",
      "Dual ballot distribution for registered voters aged 18 to 30.",
      "Voter biometric capture, transfer, and reactivation rules.",
    ],
    externalUrl: "https://comelec.gov.ph",
  },
  {
    id: "ph-constitution-art-ii",
    title: "1987 Constitution of the Republic of the Philippines",
    authority: "Constitutional Commission",
    promulgationDate: "February 2, 1987",
    category: "Constitution",
    summary:
      "The fundamental law recognizing the vital role of the youth in nation-building and mandating the state to promote and protect their physical, moral, spiritual, intellectual, and social well-being.",
    keyProvisions: [
      "Article II, Section 13: The State recognizes the vital role of the youth in nation-building and shall encourage their involvement in public and civic affairs.",
      "Article V, Section 1: Suffrage and voting rights of Filipino citizens.",
    ],
    externalUrl: "https://www.officialgazette.gov.ph/constitutions/1987-constitution/",
  },
  {
    id: "comelec-official-portal",
    title: "Official COMELEC Web Portal & Resolutions Archive",
    authority: "Commission on Elections (COMELEC)",
    promulgationDate: "Updated Regularly",
    category: "Guidelines",
    summary:
      "The primary digital clearinghouse for all election resolutions, advisory notices, precinct finder updates, and official guidelines published by COMELEC.",
    keyProvisions: [
      "Official election notices and press releases.",
      "Searchable database of electoral guidelines and voter education bulletins.",
      "Accredited election observer announcements.",
    ],
    externalUrl: "https://comelec.gov.ph",
  },
];
