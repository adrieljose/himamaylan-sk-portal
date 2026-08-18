# 🗳️ Himamaylan City COMELEC
## 2026 SK Age & Eligibility Checker — Loop Engineer README

---

## What Is This Project?

A professional, modern, mobile-first civic-technology website for the **Himamaylan City COMELEC / Office of the Election Officer**.

The primary feature is the **2026 SK Age & Eligibility Checker** — a tool that helps residents of Himamaylan City determine:

- Their exact age on **November 2, 2026** (Election Day)
- Whether they fall within the **SK voter age range** (15–30 years old)
- Whether they fall within the **SK candidate age range** (18–24 years old)
- What other requirements apply to SK participation

The website is inspired by the Silay City reference site but delivers a **more complete, polished, and extensible** civic-information experience.

---

## Project Identity

| Field | Value |
|---|---|
| **Client** | Himamaylan City COMELEC / Office of the Election Officer |
| **Primary Title** | Himamaylan City COMELEC |
| **Product Title** | 2026 SK Age & Eligibility Checker |
| **Browser Title** | Himamaylan City COMELEC \| 2026 SK Age & Eligibility Checker |
| **Election** | 2026 Barangay and Sangguniang Kabataan Elections |
| **Election Date** | November 2, 2026 |
| **City** | Himamaylan City |
| **Province** | Negros Occidental |
| **Region** | Region VI (Western Visayas) |
| **Language** | English only |
| **Last Updated** | August 18, 2026 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Date Calculations** | date-fns |
| **Icons** | lucide-react |
| **Utilities** | clsx, tailwind-merge |
| **Deployment** | Vercel |
| **Database** | None (V1 — client-side only) |

---

## Loop Build System

This project is built using the **Loop Engineer** pattern — a structured, sequential multi-agent workflow where each loop builds and verifies one complete layer of the application before passing the baton to the next loop.

### Loop Status Board

| # | Loop Name | Key Deliverable | Status |
|---|---|---|---|
| **1** | Foundation & Configuration | Project scaffold, config files, design system | ⬜ Not Started |
| **2** | Core Calculator Engine | SK Eligibility Checker, all logic & components | ⬜ Not Started |
| **3** | Homepage & UI Shell | Branded homepage, navigation, footer | ⬜ Not Started |
| **4** | Content Pages | 7 information pages | ⬜ Not Started |
| **5** | Polish, SEO & Vercel | Production readiness, accessibility, deploy | ⬜ Not Started |

> See `LOOP PLAN.MD` for the complete task-by-task breakdown of every loop.

---

## Workspace

**Project Root:** `D:\HIMAMAYLAN SK WEBSITE`

### Directory Structure (Target — After All Loops Complete)

```
D:\HIMAMAYLAN SK WEBSITE\
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout + global metadata
│   │   ├── page.tsx                  # Homepage
│   │   ├── checker/
│   │   │   └── page.tsx              # SK Eligibility Checker
│   │   ├── qualifications/
│   │   │   └── page.tsx              # SK Voter & Candidate Qualifications
│   │   ├── election-info/
│   │   │   └── page.tsx              # 2026 Election Information
│   │   ├── barangays/
│   │   │   └── page.tsx              # Barangays of Himamaylan City
│   │   ├── faq/
│   │   │   └── page.tsx              # Frequently Asked Questions
│   │   ├── references/
│   │   │   └── page.tsx              # Official References
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact / Election Office
│   │   └── disclaimer/
│   │       └── page.tsx              # Disclaimer & Privacy
│   ├── components/
│   │   ├── ui/                       # Base design system components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/                   # Site-wide layout components
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── checker/                  # Eligibility Checker components
│   │   │   ├── EligibilityChecker.tsx      # Main orchestrator
│   │   │   ├── DateInput.tsx               # DOB input with validation
│   │   │   ├── AgeDisplay.tsx              # "X years, Y months, Z days"
│   │   │   ├── EligibilityCard.tsx         # Voter / Candidate result cards
│   │   │   ├── AgeRangeTimeline.tsx        # Visual spectrum 15-18-24-30
│   │   │   ├── PersonalizedMessage.tsx     # Human-readable explanation
│   │   │   ├── ExampleScenarios.tsx        # Quick age example buttons
│   │   │   ├── ExpandedQuestionnaire.tsx   # "Check More Requirements" flow
│   │   │   ├── BarangaySelector.tsx        # Optional barangay picker
│   │   │   ├── ShareResult.tsx             # Copy / Web Share API
│   │   │   └── PrintResult.tsx             # Print-optimized layout
│   │   └── home/                     # Homepage-specific sections
│   │       ├── Hero.tsx
│   │       ├── ElectionDateBanner.tsx
│   │       ├── QuickCheckerEmbed.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── VoterAgeExplainer.tsx
│   │       ├── CandidateAgeExplainer.tsx
│   │       ├── AnnouncementsBanner.tsx
│   │       └── QuickLinks.tsx
│   ├── config/                       # ⭐ All content configuration
│   │   ├── election.ts               # Central election config object
│   │   ├── barangays.ts              # All 63 barangays of Himamaylan City
│   │   ├── faqs.ts                   # FAQ questions and answers
│   │   ├── references.ts             # Official references data
│   │   ├── contact.ts                # Election office contact info
│   │   └── announcements.ts          # Announcements (future-ready)
│   └── lib/
│       └── eligibility.ts            # ⭐ Core calculation & logic functions
├── public/
│   ├── images/
│   │   ├── comelec-logo.png          # Official COMELEC logo
│   │   └── himamaylan-seal.png       # Himamaylan City seal
│   ├── sitemap.xml
│   └── robots.txt
├── LOOP README.MD                    # ← You are here
├── LOOP PLAN.MD                      # Detailed loop task plan
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Central Election Configuration

All eligibility logic and date references trace back to a single config object:

```typescript
// src/config/election.ts
export const electionConfig = {
  city: "Himamaylan City",
  province: "Negros Occidental",
  region: "Region VI (Western Visayas)",
  electionName: "2026 Barangay and Sangguniang Kabataan Elections",
  electionDate: "2026-11-02",
  electionDateDisplay: "November 2, 2026",
  skVoterAge: { min: 15, max: 30 },
  skCandidateAge: { min: 18, max: 24 },
  lastUpdated: "August 18, 2026",
  siteTitle: "Himamaylan City COMELEC | 2026 SK Age & Eligibility Checker",
  siteDescription: "Check your age on Election Day and learn about applicable SK voter and candidate age requirements for the 2026 Barangay and Sangguniang Kabataan Elections in Himamaylan City.",
  officialWebsite: "https://comelec.gov.ph",
} as const;
```

---

## Eligibility Logic — Age Boundary Reference

All age evaluations are based on the user's **exact age on November 2, 2026**, not their current age.

| Age on Nov 2, 2026 | SK Voter (15–30) | SK Candidate (18–24) | Message |
|---|---|---|---|
| Under 15 | ❌ Outside | ❌ Outside | Below SK youth age range |
| Exactly 15 | ✅ Within | ❌ Below | Within voter range only |
| 16–17 | ✅ Within | ❌ Below | Within voter range only |
| Exactly 18 | ✅ Within | ✅ Within | Within both ranges |
| 19–23 | ✅ Within | ✅ Within | Within both ranges |
| Exactly 24 | ✅ Within | ✅ Within | Within both ranges |
| 25–29 | ✅ Within | ❌ Above | Within voter range only |
| Exactly 30 | ✅ Within | ❌ Above | Within voter range only |
| 31 and above | ❌ Outside | ❌ Outside | Above SK youth age range |

---

## P0 Feature Checklist (Absolutely Required)

- [ ] Official COMELEC branding
- [ ] Himamaylan City identity and city seal
- [ ] English-only UI throughout
- [ ] November 2, 2026 prominently displayed
- [ ] SK Age & Eligibility Checker (date-of-birth input)
- [ ] Exact Election-Day age calculation (years, months, days)
- [ ] SK voter age check (15–30)
- [ ] SK candidate age check (18–24)
- [ ] All 9 boundary-age cases correctly handled
- [ ] Personalized result message per age category
- [ ] Combined eligibility summary table
- [ ] Visual age-range timeline (15 — 18 — 24 — 30)
- [ ] Eligibility disclaimer on all result screens
- [ ] Mobile-first responsive design (375px primary)
- [ ] SK qualifications information page
- [ ] 2026 election information page
- [ ] FAQ page (expandable accordion)
- [ ] Official references page
- [ ] Barangay list with search (all 63 barangays of Himamaylan City)
- [ ] Print result (COMELEC branding, "not an official certificate")
- [ ] Share result (Web Share API + copy to clipboard)
- [ ] Contact / Election Office information
- [ ] Last Updated date in footer
- [ ] Disclaimer page / section
- [ ] Vercel deployment readiness
- [ ] Zero build errors on `npm run build`

---

## How to Start

When ready, tell the agent:

| Command | Action |
|---|---|
| `"start"` or `"go"` | Begins Loop 1 (Foundation) |
| `"start loop 2"` | Skips to Loop 2 (Calculator) |
| `"start loop 3"` | Skips to Loop 3 (Homepage) |
| `"start loop 4"` | Skips to Loop 4 (Content Pages) |
| `"start loop 5"` | Skips to Loop 5 (Polish & Deploy) |

Each loop verifies with `npm run build` before passing the baton.

---

## Important Notes

> **Privacy:** The calculator operates entirely client-side. No date of birth is stored or transmitted to any server.

> **Legal:** Results from this tool do not constitute an official COMELEC eligibility determination. A clear disclaimer appears on all result screens.

> **Content:** All eligibility criteria, age ranges, and official information must be verified against current COMELEC rules before production launch.

> **Branding:** COMELEC logo and Himamaylan City seal should be verified as officially authorized before deployment.

---

## Contact

**Himamaylan City COMELEC / Office of the Election Officer**
Himamaylan City, Negros Occidental
*(Official contact details to be verified and inserted before deployment)*

---

*Loop Engineer README — Himamaylan City COMELEC 2026 SK Age & Eligibility Checker*
*See `LOOP PLAN.MD` for the complete task-by-task execution plan.*
