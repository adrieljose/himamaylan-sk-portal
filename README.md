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
