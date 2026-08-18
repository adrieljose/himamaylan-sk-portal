import React from "react";
import { Hero } from "@/components/home/Hero";
import { ElectionDateBanner } from "@/components/home/ElectionDateBanner";
import { QuickCheckerEmbed } from "@/components/home/QuickCheckerEmbed";
import { HowItWorks } from "@/components/home/HowItWorks";
import { VoterAgeExplainer } from "@/components/home/VoterAgeExplainer";
import { CandidateAgeExplainer } from "@/components/home/CandidateAgeExplainer";
import { AnnouncementsBanner } from "@/components/home/AnnouncementsBanner";
import { QuickLinks } from "@/components/home/QuickLinks";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col font-sans">
      {/* 1. Official Hero Section */}
      <Hero />

      {/* 2. Official Election Gold Countdown Banner */}
      <ElectionDateBanner />

      {/* 3. Live Centerpiece Interactive Calculator */}
      <QuickCheckerEmbed />

      {/* 4. How It Works 3-Step Process */}
      <HowItWorks />

      {/* 5. Voter Age & Dual Ballot Explainer */}
      <VoterAgeExplainer />

      {/* 6. Candidate Age & Anti-Dynasty Explainer */}
      <CandidateAgeExplainer />

      {/* 7. Official Election Bulletins & Advisories */}
      <AnnouncementsBanner />

      {/* 8. Civic Resources Quick Navigation Grid */}
      <QuickLinks />
    </div>
  );
}
