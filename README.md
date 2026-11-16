# Himamaylan NLE 2028
A Next.js 14 / TypeScript / Tailwind voter guide for the May 8, 2028 Philippine National and Local Elections.

## Run
`npm ci` then `npm run dev`. Production: `npm run build` then `npm start`.
Checks: `npm test`, `npm run lint`, `npm run build`.

## Rules and scope
Domestic voting age: 18+, no upper limit. Birth date cutoff: May 8, 2010.
National candidate ages: district representative 25+, senator 35+, president / vice president 40+.
The checker only determines age thresholds. It does not certify registration or full candidacy eligibility. Party-list nominees, local candidates and overseas voting have separate rules.

Sources and review date: `src/config/election.ts`, November 15, 2026. See `/references` for official links. Dates are parsed as calendar dates to avoid UTC shifts. Birth dates and self-assessment answers stay in browser memory.

The existing deployment URL is retained for continuity. Repository renaming, pushing and deployment are separate actions.

## Learning Hub
`/learn` links to eight statically generated module pages with readable overviews adapted from the supplied writeups. National topics are featured first; barangay/SK modules carry explicit context notes.

Module content and paths live in `src/config/learning.ts`. The native player requests no video data before play (`preload="none"`), supports inline mobile playback, and offers 720p plus a 480p data-saver version. Quality changes preserve the playback position and pause until the visitor presses play again. A direct file link and retry message support playback failures.

Versioned MP4s and JPEG posters live in `public/media/learning`. Videos use H.264/yuv420p, AAC audio and MP4 fast-start metadata. Vercel serves these static files with byte-range support; versioned media paths receive immutable cache headers. Bump filenames when replacing assets. The two web variants together are approximately 87 MB; original source videos remain outside the repository.

The supplied writeups describe the visuals and are not verbatim transcripts or timed captions. Add verified WebVTT captions when those are available; do not label the overviews as transcripts.
