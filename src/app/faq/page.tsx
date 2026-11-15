import { Article, InfoSection, SourceList } from "@/components/Article";
import { NATIONAL_OFFICES } from "@/lib/eligibility";
export const metadata = { title: "Frequently asked questions" };
export default function Page() {
  return (
    <Article
      title="Frequently asked questions"
      intro="Clear answers for the national elections."
    >
      {[
        {
          q: "How old must I be to vote?",
          a: "At least 18 on May 8, 2028. The birth date cutoff is May 8, 2010. Other legal and registration requirements apply.",
        },
        {
          q: "Can I still vote if I am older than 30?",
          a: "Yes, there is no upper voting age limit for NLE. The former SK youth age limit does not apply.",
        },
        {
          q: "I turn 18 the day after election day. Can I vote in 2028?",
          a: "You do not meet the age requirement for the May 8, 2028 election.",
        },
        {
          q: "Can I apply to register while I am still 17?",
          a: "You may apply during the authorized registration period if you will turn 18 by election day and satisfy the applicable COMELEC requirements.",
        },
        {
          q: "Does the checker prove that I am registered?",
          a: "No. It calculates age and offers a self-assessment. Only COMELEC can confirm your voter record.",
        },
        {
          q: "What about overseas voters or local candidates?",
          a: "Overseas registration and local candidacy follow separate rules. The checker covers domestic voters and selected national candidate age thresholds.",
        },
        {
          q: "Is my date of birth stored?",
          a: "No. The checker calculates locally in your browser. Clearing the form or leaving the page removes the entered information from the tool.",
        },
      ].map((item) => (
        <details key={item.q} className="border-b border-line pb-5">
          <summary className="font-semibold text-lg cursor-pointer py-2">
            {item.q}
          </summary>
          <p className="mt-3 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </Article>
  );
}
