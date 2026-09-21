import React from "react";
import Image from "next/image";
import {
  Clock,
  DownloadSimple,
  MusicNotesSimple,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Reveal } from "../motion/Reveal";

const JINGLE_URL = "/audio/ara-magkanta-padayaw-cluster-4.mp3";

export function VoterAwarenessJingle() {
  return (
    <section
      aria-labelledby="jingle-heading"
      className="bg-surface-subtle border-b border-line py-14 sm:py-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-center">
          <Reveal className="lg:col-span-7 max-w-2xl">
            <p className="eyebrow">Voter awareness through music</p>
            <h2
              id="jingle-heading"
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink-950"
            >
              Listen to the winning jingle
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              The winning entry from Padayaw Cluster 4 in the{" "}
              <cite className="font-semibold not-italic text-ink-900">
                Tara, Magkanta! Voter Awareness Jingle Contest
              </cite>
              .
            </p>

            <div className="mt-7 border-t border-line-strong pt-6">
              <p className="font-display font-semibold text-ink-950">
                A BSKE Advocacy Jingle-Making Contest
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-700">
                An official Buwan ng Wika project of COMELEC Himamaylan City.
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-line pt-6">
                <Image
                  src="/images/deped-himamaylan-seal.png"
                  alt="DepEd Himamaylan City seal"
                  width={58}
                  height={58}
                  className="h-[58px] w-[58px] shrink-0 object-contain"
                />
                <div>
                  <p className="font-display text-2xs font-semibold uppercase tracking-[0.08em] text-ink-600">
                    Project partner
                  </p>
                  <p className="mt-1 font-display font-semibold text-ink-950">
                    DepEd Himamaylan City
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <article className="overflow-hidden rounded border border-navy-800 bg-navy-900 text-navy-100 on-dark">
              <div className="h-[3px] bg-orange-500" aria-hidden="true" />
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-orange-500 text-navy-950"
                    aria-hidden="true"
                  >
                    <MusicNotesSimple size={26} weight="fill" />
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-display text-2xs font-semibold uppercase tracking-[0.08em] text-orange-400">
                      <Trophy size={14} weight="fill" aria-hidden="true" />
                      Winning entry
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-white">
                      Padayaw Cluster 4
                    </h3>
                    <p className="mt-1 text-sm text-navy-200">
                      Tara, Magkanta! Voter Awareness Jingle Contest
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-navy-800 pt-6">
                  <audio
                    controls
                    preload="metadata"
                    className="block w-full"
                    aria-label="Play the winning voter awareness jingle by Padayaw Cluster 4"
                  >
                    <source src={JINGLE_URL} type="audio/mpeg" />
                    Your browser does not support audio playback. You can download the
                    jingle using the link below.
                  </audio>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm">
                    <span className="inline-flex items-center gap-2 text-navy-200">
                      <Clock size={16} weight="fill" aria-hidden="true" />
                      2 minutes 55 seconds
                    </span>
                    <a
                      href={JINGLE_URL}
                      download
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-navy-700 px-4 py-2 font-display font-semibold text-white transition-colors hover:border-orange-400 hover:text-orange-300"
                    >
                      <DownloadSimple size={17} weight="bold" aria-hidden="true" />
                      Download MP3
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
