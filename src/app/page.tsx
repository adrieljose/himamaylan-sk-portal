import React from "react";
import { Hero } from "@/components/home/Hero";
import { ElectionDateBanner } from "@/components/home/ElectionDateBanner";
import { QuickCheckerEmbed } from "@/components/home/QuickCheckerEmbed";
import { HowItWorks } from "@/components/home/HowItWorks";
import { VoterAgeExplainer } from "@/components/home/VoterAgeExplainer";
import { CandidateAgeExplainer } from "@/components/home/CandidateAgeExplainer";
import { AnnouncementsBanner } from "@/components/home/AnnouncementsBanner";
import { VoterInfographicSection } from "@/components/voters/VoterInfographicSection";
import { QuickLinks } from "@/components/home/QuickLinks";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col font-sans">

      <Hero />

      <ElectionDateBanner />

      <QuickCheckerEmbed />

      <HowItWorks />

      <VoterAgeExplainer />

      <CandidateAgeExplainer />

      <AnnouncementsBanner />

      <VoterInfographicSection />

      <QuickLinks />
    </div>
  );
}
