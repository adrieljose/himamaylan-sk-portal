import React from "react";
import { Hero } from "@/components/home/Hero";
import { ElectionDateBanner } from "@/components/home/ElectionDateBanner";
import { VoterAwarenessJingle } from "@/components/home/VoterAwarenessJingle";
import { QuickCheckerEmbed } from "@/components/home/QuickCheckerEmbed";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CandidateAgeExplainer } from "@/components/home/CandidateAgeExplainer";
import { AnnouncementsBanner } from "@/components/home/AnnouncementsBanner";
import { QuickLinks } from "@/components/home/QuickLinks";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col font-sans">

      <Hero />

      <ElectionDateBanner />

      <VoterAwarenessJingle />

      <QuickCheckerEmbed />

      <HowItWorks />

      <CandidateAgeExplainer />

      <AnnouncementsBanner />

      <QuickLinks />
    </div>
  );
}
