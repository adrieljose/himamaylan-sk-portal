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
  years,
  months,
  days,
  voterStatus,
  candidateStatus,
  barangay,
}: PrintResultProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      {/* Screen Trigger Button */}
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-subtle hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 shadow-subtle transition-all cursor-pointer min-h-[44px]"
        title="Print official result summary slip"
      >
        <Printer size={14} weight="fill" className="text-blue-700" />
        <span>Print Result</span>
      </button>

      {/* Print Layout Document (Hidden on screen, visible during window.print()) */}
      <div className="hidden print:block print-container p-6 bg-white text-black font-serif">
        <div className="print-certificate-warning">
          SK AGE & ELIGIBILITY GUIDE RESULT — NOT AN OFFICIAL CERTIFICATE
        </div>

        <div className="text-center pb-4 border-b-2 border-black space-y-1">
          <p className="text-xs font-sans uppercase tracking-widest font-bold">
            Republic of the Philippines • Commission on Elections
          </p>
          <h2 className="text-xl font-bold font-sans">
            Office of the Election Officer — Himamaylan City
          </h2>
          <p className="text-xs italic">
            2026 Synchronized Barangay & Sangguniang Kabataan Elections (Nov 2, 2026)
          </p>
        </div>

        <div className="py-5 space-y-4 text-sm">
          <h3 className="text-base font-bold font-sans uppercase underline text-center">
            Statutory Age Verification Slip
          </h3>

          <div className="border border-black p-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <div>
                <strong>Entered Date of Birth:</strong> {dobFormatted}
              </div>
              <div>
                <strong>Barangay Jurisdiction:</strong> {barangay || "Himamaylan City (General)"}
              </div>
              <div>
                <strong>Age on Election Day (Nov 2, 2026):</strong> {calculatedAgeFormatted}
              </div>
              <div>
                <strong>Statutory Framework:</strong> RA 10742 & RA 11768
              </div>
            </div>

            <div className="pt-2 border-t border-black space-y-2 text-xs font-sans">
              <div>
                <strong>SK Youth Voter Status:</strong> {voterStatus}
              </div>
              <div>
                <strong>SK Candidate Status:</strong> {candidateStatus}
              </div>
            </div>
          </div>

          <div className="text-xs italic leading-snug border-l-2 border-black pl-3 py-1">
            &ldquo;This printed slip is generated for public informational guidance only. Final eligibility for voting or elective candidacy is determined exclusively by the COMELEC Election Registration Board (ERB) and official Certificate of Candidacy evaluation.&rdquo;
          </div>

          <div className="pt-8 flex justify-between text-xs font-sans">
            <div className="space-y-1">
              <p>Generated: {new Date().toLocaleDateString("en-PH")}</p>
              <p className="text-xs text-gray-600">Verification Hash: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
            </div>
            <div className="text-center w-48 border-t border-black pt-1">
              <p className="font-semibold">Elector / Inquirer Signature</p>
              <p className="text-xs">Himamaylan City Resident</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
