import { intervalToDuration, differenceInCalendarDays } from "date-fns";
export const ELECTION_DATE_STRING = "2028-05-08";
// Calendar dates use local components; never parse a date-only string as UTC.
export const ELECTION_DATE = new Date(2028, 4, 8);
export const ELECTION_DATE_DISPLAY = "May 8, 2028";
export const NATIONAL_OFFICES = [
  {
    id: "representative",
    label: "District representative",
    minAge: 25,
    citation: "Constitution, Article VI, Section 6",
    requirements:
      "Natural-born Filipino; able to read and write; registered voter in the district and resident there for at least one year before election day.",
  },
  {
    id: "senator",
    label: "Senator",
    minAge: 35,
    citation: "Constitution, Article VI, Section 3",
    requirements:
      "Natural-born Filipino; able to read and write; registered voter; resident of the Philippines for at least two years before election day.",
  },
  {
    id: "president",
    label: "President / Vice President",
    minAge: 40,
    citation: "Constitution, Article VII, Sections 2–3",
    requirements:
      "Natural-born Filipino; able to read and write; registered voter; resident of the Philippines for at least ten years before election day. Term and other legal restrictions also apply.",
  },
] as const;
export function parseBirthDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  if (
    y < 1900 ||
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  )
    return null;
  return date;
}
export function validateBirthDate(
  value: string,
  today = new Date(),
): string | null {
  const date = parseBirthDate(value);
  if (!date) return "Enter a valid date of birth from 1900 onward.";
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (date > now) return "Date of birth cannot be in the future.";
  if (date > ELECTION_DATE)
    return "Date of birth must be on or before election day.";
  return null;
}
export function calculateAgeOnElectionDay(value: string) {
  const date = parseBirthDate(value);
  if (!date || date > ELECTION_DATE) throw new Error("Invalid date of birth");
  const duration = intervalToDuration({ start: date, end: ELECTION_DATE });
  const years = duration.years ?? 0;
  return {
    years,
    months: duration.months ?? 0,
    days: duration.days ?? 0,
    totalDays: differenceInCalendarDays(ELECTION_DATE, date),
    voterAgeMet: years >= 18,
    offices: NATIONAL_OFFICES.map((office) => ({
      ...office,
      ageMet: years >= office.minAge,
    })),
  };
}
export type Answer = "" | "yes" | "no";
export function assessVoterRequirements(ageMet: boolean, answers: Answer[]) {
  if (!ageMet || answers.includes("no")) return "Some requirements are not met";
  if (answers.length !== 5 || answers.includes(""))
    return "More information needed";
  return "Self-reported requirements met — confirm your record with COMELEC";
}
