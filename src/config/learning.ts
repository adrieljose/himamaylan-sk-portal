export interface LearningModule {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  duration: number;
  summary: string[];
  takeaways: string[];
  poster: string;
  standard: string;
  saver: string;
  contextNote: string | null;
}
export const learningModules: LearningModule[] = [
  {
    number: 1,
    slug: "opening-message",
    title: "Opening message",
    subtitle: "An invitation to learn and participate",
    category: "Getting started",
    duration: 30,
    summary: [
      "The series opens with an AI-generated presenter in a classroom-inspired setting. Bookshelves, a globe and learning materials provide a welcoming backdrop for civic learning.",
      "Use this opening segment as an invitation to listen, reflect and learn before making decisions or joining public conversations. The accompanying description focuses on the visible presentation; it does not claim to reproduce the narration.",
    ],
    takeaways: [
      "Meet the series and its presentation style.",
      "Approach civic information with curiosity and care.",
    ],
    poster: "/media/learning/module-1-poster-v1.jpg",
    standard: "/media/learning/module-1-720p-v1.mp4",
    saver: "/media/learning/module-1-480p-v1.mp4",
    contextNote: null,
  },
  {
    number: 2,
    slug: "continuing-the-discussion",
    title: "Continuing the discussion",
    subtitle: "A public-information presentation",
    category: "Getting started",
    duration: 37,
    summary: [
      "An AI-generated presenter addresses viewers in an office-like setting with files, posted information and charts. Conversational gestures give the segment the feel of a public-information briefing.",
      "This module continues the series’ approachable format and encourages active learning. Because the supplied writeup does not verify the spoken lesson, this overview describes the presentation rather than attributing specific statements to the speaker.",
    ],
    takeaways: [
      "Stay curious and seek clear information.",
      "Check claims against reliable official sources.",
    ],
    poster: "/media/learning/module-2-poster-v1.jpg",
    standard: "/media/learning/module-2-720p-v1.mp4",
    saver: "/media/learning/module-2-480p-v1.mp4",
    contextNote: null,
  },
  {
    number: 3,
    slug: "the-youth-agenda",
    title: "The youth agenda",
    subtitle: "Youth voice and barangay leadership",
    category: "Barangay & SK context",
    duration: 36,
    summary: [
      "An AI-generated presenter and an infographic introduce the Sangguniang Kabataan as a channel for youth participation in barangay affairs. The visuals connect youth leadership with community programs and responsible use of public resources.",
      "Education, environmental activities, sports and community participation appear among the illustrated priorities. View this module as broader civic background on youth leadership, alongside the separate requirements for national elections.",
    ],
    takeaways: [
      "Explore the place of youth participation in local governance.",
      "Distinguish barangay/SK topics from national election requirements.",
    ],
    poster: "/media/learning/module-3-poster-v1.jpg",
    standard: "/media/learning/module-3-720p-v1.mp4",
    saver: "/media/learning/module-3-480p-v1.mp4",
    contextNote:
      "This module uses barangay/SK election examples. For the 2028 NLE, voting age is 18 and above on election day; use the current NLE guide for qualifications, forms and schedules.",
  },
  {
    number: 4,
    slug: "step-up-stand-out",
    title: "Step up, stand out",
    subtitle: "A visual introduction to voter registration",
    category: "Barangay & SK context",
    duration: 57,
    summary: [
      "Illustrated panels introduce registration preparation, identity documents and biometric steps such as a photograph, fingerprints and signature. The module encourages viewers to follow official COMELEC announcements and check their voter records.",
      "The supplied video and writeup use barangay/SK election examples. Consult the current NLE registration guide for the rules and forms that apply to the May 8, 2028 National and Local Elections.",
    ],
    takeaways: [
      "Recognize the general steps involved in registration.",
      "Confirm current requirements and schedules with COMELEC.",
    ],
    poster: "/media/learning/module-4-poster-v1.jpg",
    standard: "/media/learning/module-4-720p-v1.mp4",
    saver: "/media/learning/module-4-480p-v1.mp4",
    contextNote:
      "This module uses barangay/SK election examples. For the 2028 NLE, voting age is 18 and above on election day; use the current NLE guide for qualifications, forms and schedules.",
  },
  {
    number: 5,
    slug: "city-hall",
    title: "City Hall",
    subtitle: "Governance closest to the community",
    category: "Local government",
    duration: 84,
    summary: [
      "AI-generated scenes of city streets, a city hall, service counters, meetings and community work illustrate how local leadership connects with everyday needs.",
      "The module invites viewers to think about public service, coordination and accountability. Understanding the responsibilities of city officials can help residents ask informed questions and participate in community affairs.",
    ],
    takeaways: [
      "Connect local leadership with community needs and public services.",
      "Consider service and accountability when assessing leaders.",
    ],
    poster: "/media/learning/module-5-poster-v1.jpg",
    standard: "/media/learning/module-5-720p-v1.mp4",
    saver: "/media/learning/module-5-480p-v1.mp4",
    contextNote: null,
  },
  {
    number: 6,
    slug: "provincial-capitol",
    title: "Provincial Capitol",
    subtitle: "Leadership and services across the province",
    category: "Local government",
    duration: 80,
    summary: [
      "AI-generated scenes of a provincial capitol, healthcare, road construction, public transactions and planning sessions introduce the wider reach of provincial government.",
      "The visuals link provincial decisions with services and projects that extend across communities. The module encourages viewers to consider public needs, coordination and results when thinking about provincial leadership.",
    ],
    takeaways: [
      "Explore the wider scope of provincial governance.",
      "Look at public programs through service, accountability and results.",
    ],
    poster: "/media/learning/module-6-poster-v1.jpg",
    standard: "/media/learning/module-6-720p-v1.mp4",
    saver: "/media/learning/module-6-480p-v1.mp4",
    contextNote: null,
  },
  {
    number: 7,
    slug: "national-executives",
    title: "National executives",
    subtitle: "From national decisions to everyday impact",
    category: "National government",
    duration: 80,
    summary: [
      "AI-generated government offices, policy discussions, official documents, classrooms and infrastructure scenes illustrate the connection between national leadership and public programs.",
      "The module invites viewers to look beyond speeches and personalities and consider how executive leadership is exercised through implementing laws, coordinating agencies and delivering services. It offers a starting point for thinking about the responsibilities attached to national office.",
    ],
    takeaways: [
      "Connect national executive leadership with implementation and services.",
      "Evaluate leadership through responsibilities as well as campaign messages.",
    ],
    poster: "/media/learning/module-7-poster-v1.jpg",
    standard: "/media/learning/module-7-720p-v1.mp4",
    saver: "/media/learning/module-7-480p-v1.mp4",
    contextNote: null,
  },
  {
    number: 8,
    slug: "congress",
    title: "Congress",
    subtitle: "The decisions behind the nation’s laws",
    category: "National government",
    duration: 80,
    summary: [
      "AI-generated legislative buildings, formal sessions, committee discussions and document reviews introduce the work of Congress. Education and infrastructure scenes connect legislative decisions with everyday concerns.",
      "The module emphasizes deliberation, representation and informed decision-making. It encourages viewers to consider legislators’ responsibilities after election day and to ask how elected representatives respond to the public.",
    ],
    takeaways: [
      "Explore lawmaking, deliberation and representation.",
      "Ask informed questions about the work of elected legislators.",
    ],
    poster: "/media/learning/module-8-poster-v1.jpg",
    standard: "/media/learning/module-8-720p-v1.mp4",
    saver: "/media/learning/module-8-480p-v1.mp4",
    contextNote: null,
  },
];
export function formatDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
export const learningGroups = [
  "National government",
  "Local government",
  "Getting started",
  "Barangay & SK context",
];
