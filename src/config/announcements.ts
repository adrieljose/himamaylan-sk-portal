export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: "Notice" | "Registration" | "Calendar" | "Advisory";
  content: string;
  isUrgent?: boolean;
  linkText?: string;
  linkUrl?: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "bske-2026-date-set",
    title: "Official Election Day Set for November 2, 2026",
    date: "August 18, 2026",
    category: "Notice",
    content:
      "The Commission on Elections reminds all youth residents of Himamaylan City that the next synchronized Barangay and Sangguniang Kabataan Elections will be conducted on Monday, November 2, 2026. Age eligibility is calculated as of this date.",
    isUrgent: false,
    linkText: "Check Eligibility Guide",
    linkUrl: "/checker",
  },
  {
    id: "kk-voter-registration-reminder",
    title: "Katipunan ng Kabataan Voter Registration Schedules",
    date: "August 10, 2026",
    category: "Registration",
    content:
      "Filipino youth turning 15 to 30 years old on or before November 2, 2026 who are not yet registered with COMELEC are advised to register during official registration periods at the Office of the Election Officer in Himamaylan City Hall.",
    isUrgent: false,
    linkText: "View Qualifications",
    linkUrl: "/qualifications",
  },
];
