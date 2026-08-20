import React from "react";
import Link from "next/link";
import { Notice } from "../ui/Notice";

const ballots = [
  {
    n: "1",
    name: "Sangguniang Kabataan ballot",
    detail: "Elects one SK Chairperson and seven SK Kagawad for your barangay youth council.",
  },
  {
    n: "2",
    name: "Barangay ballot",
    detail: "Elects one Punong Barangay and seven Sangguniang Barangay members.",
  },
];

const byAge = [
  { range: "15 to 17", result: "SK ballot only" },
  { range: "18 to 30", result: "Both ballots" },
  { range: "31 and above", result: "Barangay ballot only" },
];

export function CheckerNoticeBox() {
  return (
    <div className="space-y-5">
      <Notice tone="warning" title="This is not your voter registration record">
        This service computes your age under RA 10742, as amended by RA 11768. It is{" "}
        <strong className="font-semibold text-ink-900">
          not the COMELEC Certified List of Voters
        </strong>{" "}
        or the precinct masterlist. To vote on 2 November 2026 you must also hold an active
        registration record with the Office of the Election Officer.{" "}
        <Link href="/contact" className="text-navy-700 font-semibold">
          Ask the office about your registration
        </Link>
        .
      </Notice>

      <div className="border border-line rounded">
        <div className="px-5 py-4 border-b border-line">
          <h3 className="font-display font-semibold text-ink-950 text-[0.9375rem]">
            How many ballots you receive
          </h3>
          <p className="mt-1 text-sm text-ink-700">
            Voters aged 18 to 30 on election day are issued two separate ballots.
          </p>
        </div>

        <ol className="divide-y divide-line">
          {ballots.map((b) => (
            <li key={b.n} className="px-5 py-4 flex gap-4">
              <span
                className="shrink-0 w-6 h-6 rounded-sm bg-navy-900 text-white font-display text-xs font-semibold flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                {b.n}
              </span>
              <div>
                <p className="font-display font-semibold text-ink-950 text-sm">{b.name}</p>
                <p className="mt-1 text-sm text-ink-700 leading-relaxed">{b.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <table className="w-full border-t border-line text-left">
          <caption className="sr-only">Ballots issued by age on election day</caption>
          <tbody className="divide-y divide-line">
            {byAge.map((row) => (
              <tr key={row.range}>
                <th
                  scope="row"
                  className="px-5 py-3 font-display font-semibold text-ink-900 text-sm whitespace-nowrap"
                >
                  {row.range}
                </th>
                <td className="px-5 py-3 text-sm text-ink-700 text-right">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
