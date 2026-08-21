"use client";

import React from "react";
import { Printer } from "@phosphor-icons/react";

export interface PrintResultProps {
  dobFormatted: string;
  calculatedAgeFormatted: string;
  years: number;
  months: number;
  days: number;
  voterStatus: string;
  candidateStatus: string;
  barangay?: string | null;
}

export function PrintResult({
  dobFormatted,
  calculatedAgeFormatted,
  voterStatus,
  candidateStatus,
  barangay,
}: PrintResultProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <>
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded border border-line-strong bg-white hover:bg-surface-subtle hover:border-ink-600 text-ink-900 font-display text-sm font-semibold transition-colors cursor-pointer"
      >
        <Printer size={16} weight="bold" aria-hidden="true" />
        <span>Print result</span>
      </button>

      <div className="hidden print:block print-container p-6 bg-white text-black">
        <div className="print-certificate-warning">
          Age guide result. This is not an official COMELEC certificate
        </div>

        <div className="text-center pb-4 border-b-2 border-black">
          <p className="text-xs uppercase tracking-widest font-bold">
            Republic of the Philippines &middot; Commission on Elections
          </p>
          <h2 className="text-xl font-bold mt-1">
            Office of the Election Officer, Himamaylan City
          </h2>
          <p className="text-xs italic mt-1">
            2026 Synchronised Barangay and Sangguniang Kabataan Elections, 2 November 2026
          </p>
        </div>

        <div className="py-5 text-sm">
          <h3 className="text-base font-bold uppercase text-center">
            Age verification summary
          </h3>

          <table className="w-full mt-4 border border-black border-collapse text-xs">
            <tbody>
              <tr className="border-b border-black">
                <th scope="row" className="text-left p-2.5 border-r border-black w-1/2">
                  Date of birth entered
                </th>
                <td className="p-2.5">{dobFormatted}</td>
              </tr>
              <tr className="border-b border-black">
                <th scope="row" className="text-left p-2.5 border-r border-black">
                  Age on 2 November 2026
                </th>
                <td className="p-2.5">{calculatedAgeFormatted}</td>
              </tr>
              <tr className="border-b border-black">
                <th scope="row" className="text-left p-2.5 border-r border-black">
                  Barangay
                </th>
                <td className="p-2.5">{barangay || "Not specified"}</td>
              </tr>
              <tr className="border-b border-black">
                <th scope="row" className="text-left p-2.5 border-r border-black">
                  SK voter status
                </th>
                <td className="p-2.5">{voterStatus}</td>
              </tr>
              <tr className="border-b border-black">
                <th scope="row" className="text-left p-2.5 border-r border-black">
                  SK candidate status
                </th>
                <td className="p-2.5">{candidateStatus}</td>
              </tr>
              <tr>
                <th scope="row" className="text-left p-2.5 border-r border-black">
                  Statutory basis
                </th>
                <td className="p-2.5">RA 10742, as amended by RA 11768</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4 text-xs italic leading-snug border-l-2 border-black pl-3 py-1">
            This printout is public information guidance only. Eligibility to vote is
            determined by the Election Registration Board, and eligibility to stand for
            office is determined when a certificate of candidacy is evaluated. This sheet
            carries no official standing and cannot be presented as proof of registration
            or of qualification.
          </p>

          <p className="mt-6 text-xs">
            Printed from {""}
            <span className="font-semibold">himamaylan-comelec.vercel.app</span>. To confirm
            your registration record, contact the Office of the Election Officer.
          </p>
        </div>
      </div>
    </>
  );
}
