import React from "react";
import { CheckCircle, XCircle, WarningCircle, ShieldCheck, UserCheck, IdentificationCard } from "@phosphor-icons/react";
import { Badge } from "../ui/Badge";
import { clsx } from "clsx";

export interface EligibilityCardProps {
  type: "voter" | "candidate";
  status: "eligible" | "ineligible" | "boundary";
  headline: string;
  reason: string;
  legalCitation: string;
}

export function EligibilityCard({
  type,
  status,
  headline,
  reason,
  legalCitation,
}: EligibilityCardProps) {
  const isVoter = type === "voter";

  const getStyle = () => {
    switch (status) {
      case "eligible":
        return {
          cardBg: "bg-gradient-to-br from-emerald-50/90 via-emerald-50/40 to-white border-emerald-300 ring-1 ring-emerald-400/20",
          icon: <CheckCircle size={32} weight="fill" aria-hidden="true" className="text-emerald-600 shrink-0 mt-0.5" />,
          badgeVariant: "eligible" as const,
          badgeLabel: "Statutorily Qualified",
          accentColor: "text-emerald-950",
          statusPillBg: "bg-emerald-100 text-emerald-900",
        };
      case "ineligible":
        return {
          cardBg: "bg-gradient-to-br from-rose-50/90 via-rose-50/40 to-white border-rose-300 ring-1 ring-rose-400/20",
          icon: <XCircle size={32} weight="fill" aria-hidden="true" className="text-rose-600 shrink-0 mt-0.5" />,
          badgeVariant: "ineligible" as const,
          badgeLabel: "Outside Age Range",
          accentColor: "text-rose-950",
          statusPillBg: "bg-rose-100 text-rose-900",
        };
      case "boundary":
      default:
        return {
          cardBg: "bg-gradient-to-br from-amber-50/90 via-amber-50/40 to-white border-amber-300 ring-1 ring-amber-400/20",
          icon: <WarningCircle size={32} weight="fill" aria-hidden="true" className="text-amber-600 shrink-0 mt-0.5" />,
          badgeVariant: "boundary" as const,
          badgeLabel: "Boundary Condition",
          accentColor: "text-amber-950",
          statusPillBg: "bg-amber-100 text-amber-900",
        };
    }
  };

  const style = getStyle();

  return (
    <div className={clsx("rounded-2xl border p-6 sm:p-7 shadow-card space-y-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg", style.cardBg)}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-black/5 pb-3.5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-comelec-blue-900 text-comelec-gold-300 shadow-xs">
              {isVoter ? (
                <UserCheck size={16} weight="fill" aria-hidden="true" />
              ) : (
                <IdentificationCard size={16} weight="fill" aria-hidden="true" />
              )}
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 block">
                {isVoter ? "SK Youth Voter Status" : "SK Candidate Status"}
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                {isVoter ? "Ages 15 to 30 Range" : "Ages 18 to 24 Range"}
              </span>
            </div>
          </div>
        </div>

        {/* Status Headline with Icon */}
        <div className="flex items-start gap-3.5 pt-1">
          {style.icon}
          <div className="space-y-1.5 flex-1">
            <h3 className={clsx("text-lg sm:text-xl font-semibold leading-tight tracking-tight", style.accentColor)}>
              {headline}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {reason}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Legal Citation & Mandatory Disclaimer Micro-text */}
      <div className="pt-3.5 border-t border-black/5 space-y-1.5 text-xs">
        <div className="text-comelec-blue-950 font-semibold flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Statutory Basis:</span>
          <span className="px-2 py-0.5 rounded bg-slate-200/80 text-slate-900 font-mono text-xs font-semibold">{legalCitation}</span>
        </div>
        <p className="text-slate-500 text-xs leading-normal">
          Age is one of several statutory criteria. Residency, registration, and anti-dynasty rules also apply.
        </p>
      </div>
    </div>
  );
}
