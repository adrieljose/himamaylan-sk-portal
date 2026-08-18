# 🗳️ Himamaylan City COMELEC
## 2026 SK Age & Eligibility Checker — Loop Engineer Plan

**Project Root:** `D:\HIMAMAYLAN SK WEBSITE`
**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel
**Election Date:** November 2, 2026

---

## Loop Flow

```
┌─────────────────────────────────────────────────────────────┐
│  LOOP 1: Foundation & Configuration                         │
│  → Scaffold project, design system, all config data         │
│  → EXIT: npm run build ✅                                    │
└────────────────────────────┬────────────────────────────────┘
                             ↓ baton pass
┌─────────────────────────────────────────────────────────────┐
│  LOOP 2: Core Calculator Engine                             │
│  → All eligibility logic + checker components               │
│  → EXIT: npm run build ✅ + all boundary cases verified      │
└────────────────────────────┬────────────────────────────────┘
                             ↓ baton pass
┌─────────────────────────────────────────────────────────────┐
│  LOOP 3: Homepage & UI Shell                                │
│  → Branded homepage, navigation, footer                     │
│  → EXIT: npm run build ✅ + responsive on 375/768/1280px    │
└────────────────────────────┬────────────────────────────────┘
                             ↓ baton pass
┌─────────────────────────────────────────────────────────────┐
│  LOOP 4: Content Pages                                      │
│  → 7 supporting information pages                           │
│  → EXIT: npm run build ✅ + all nav links verified           │
└────────────────────────────┬────────────────────────────────┘
                             ↓ baton pass
┌─────────────────────────────────────────────────────────────┐
│  LOOP 5: Polish, SEO, Accessibility & Vercel Readiness      │
│  → Production quality pass                                  │
│  → EXIT: npm run build ✅ + npm run lint ✅ + zero errors    │
└─────────────────────────────────────────────────────────────┘
                             ↓
                    🚀 Production Ready
```

---

## LOOP 1 — Foundation & Configuration

**Goal:** Initialize the Next.js project with complete design system, configuration files, and shared layout components. No page content yet — only the foundation every other loop builds upon.

**Entry Condition:** Empty project folder at `D:\HIMAMAYLAN SK WEBSITE`
**Exit Condition:** `npm run build` passes with zero errors

### Tasks

#### Project Initialization
- [ ] Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` in `D:\HIMAMAYLAN SK WEBSITE`
- [ ] Install additional dependencies: `date-fns`, `lucide-react`, `clsx`, `tailwind-merge`
- [ ] Configure `next.config.ts` with image domains and production settings
- [ ] Configure `tailwind.config.ts` with custom design tokens (COMELEC blue, gold, neutral palette)
- [ ] Set up `src/app/globals.css` with base typography and utility classes

#### Central Configuration Files
- [ ] Create `src/config/election.ts` — election config object (date, age ranges, city, province, SEO)
- [ ] Create `src/config/barangays.ts` — all 63 barangays of Himamaylan City (name, district)
- [ ] Create `src/config/faqs.ts` — 12+ FAQ items with question + answer
- [ ] Create `src/config/references.ts` — official references (RA 10742, COMELEC resolutions)
- [ ] Create `src/config/contact.ts` — election office contact info (address, phone, email, hours)
- [ ] Create `src/config/announcements.ts` — announcements array (empty for V1, future-ready)

#### Core Eligibility Library
- [ ] Create `src/lib/eligibility.ts` with:
  - `calculateAgeOnElectionDay(dob: Date): { years: number; months: number; days: number }`
  - `checkSKVoterEligibility(years: number): { eligible: boolean; status: string }`
  - `checkSKCandidateEligibility(years: number): { eligible: boolean; status: string }`
  - `getAgeCategory(years: number): AgeCategory` (enum: BELOW_SK, VOTER_ONLY, BOTH, VOTER_ABOVE_CANDIDATE, ABOVE_SK)
  - `getPersonalizedMessage(years: number): string`
  - All 9 boundary cases documented with comments

#### Design System — Base UI Components
- [ ] Create `src/components/ui/Button.tsx` — primary, secondary, ghost variants
- [ ] Create `src/components/ui/Card.tsx` — base card with optional header, border, shadow
- [ ] Create `src/components/ui/Badge.tsx` — eligible/ineligible/pending status badges
- [ ] Create `src/components/ui/Container.tsx` — max-width responsive wrapper
- [ ] Create `src/components/ui/Section.tsx` — section with optional title + description
- [ ] Create `src/components/ui/Accordion.tsx` — expandable FAQ accordion
- [ ] Create `src/components/ui/index.ts` — barrel export

#### Site Layout Components
- [ ] Create `src/components/layout/Navigation.tsx` — desktop nav + mobile hamburger menu
  - Links: Home, Eligibility Checker, SK Qualifications, 2026 Election Info, Barangays, FAQs, Contact
  - Highlighted CTA: "Check My Eligibility" button
- [ ] Create `src/components/layout/Footer.tsx` — COMELEC logo, quick links, disclaimer snippet, last updated date, copyright
- [ ] Create `src/components/layout/DisclaimerBanner.tsx` — inline disclaimer for calculator pages

#### Root Layout
- [ ] Update `src/app/layout.tsx`:
  - Import Inter font via `next/font/google`
  - Set full metadata (title, description, Open Graph, Twitter Card)
  - Include Navigation + Footer
  - Set `lang="en"`

#### Assets
- [ ] Add COMELEC logo to `public/images/comelec-logo.png` (placeholder SVG if not provided)
- [ ] Add Himamaylan City seal to `public/images/himamaylan-seal.png` (placeholder SVG if not provided)
- [ ] Create `.env.example` with documented variables

#### Verification
- [ ] Run `npm run build` → must pass with zero errors
- [ ] Run `npm run lint` → must pass with zero warnings
- [ ] Confirm `http://localhost:3000` renders without errors

---

## LOOP 2 — Core Calculator Engine

**Goal:** Build the complete, fully-functional SK Age & Eligibility Checker. This is the most important feature of the entire website.

**Entry Condition:** Loop 1 complete. `npm run build` passes.
**Exit Condition:** All 9 boundary age cases produce correct results. `npm run build` passes.

### Tasks

#### Date Input Component
- [ ] Create `src/components/checker/DateInput.tsx`
  - Month / Day / Year dropdown selectors (or native date input with fallback)
  - Validation: empty date, invalid date, future date, incomplete input
  - Clear error messages with ARIA labels
  - Large touch-friendly inputs (min 44px tap targets)

#### Age Display Component
- [ ] Create `src/components/checker/AgeDisplay.tsx`
  - Displays: `"Your age on November 2, 2026: X years, Y months, Z days"`
  - Prominent typography for the year count
  - Election date label clearly shown

#### Eligibility Result Cards
- [ ] Create `src/components/checker/EligibilityCard.tsx`
  - Props: type (voter | candidate), age, result (within | outside | below | above)
  - Color-coded: green (within range), red (outside), amber (boundary)
  - Shows: label, age on election day, required range, result status
  - Includes disclaimer micro-text: "Other requirements apply"

#### Visual Age Range Timeline
- [ ] Create `src/components/checker/AgeRangeTimeline.tsx`
  - Horizontal spectrum: `[Under 15] — [15–17] — [18–24] — [25–30] — [31+]`
  - Color-coded zones: gray (outside), blue (voter only), green (both ranges)
  - User's calculated age highlighted with a marker
  - Legend: voter range vs. candidate range
  - Responsive (stacks vertically on mobile)

#### Personalized Message Component
- [ ] Create `src/components/checker/PersonalizedMessage.tsx`
  - Renders context-specific human-readable explanation per age category:
    - **Under 15:** "You are below the applicable SK youth age range for the 2026 elections."
    - **15–17:** "You fall within the applicable SK voter age range. You are below the candidate age range."
    - **18–24:** "You fall within both the SK voter and candidate age ranges, subject to all other applicable requirements."
    - **25–30:** "You remain within the applicable SK voter age range. You are above the candidate age range."
    - **Above 30:** "You are above the applicable SK youth age range for the 2026 elections."
  - Language is informational, not a legal determination

#### Combined Eligibility Summary
- [ ] Create `src/components/checker/EligibilitySummary.tsx`
  - Summary table: Age on Election Day | SK Voting Age | SK Candidate Age | Other Requirements
  - Status badges: Within Range / Outside Range / Must Be Verified
  - Never implies passing the age check = full legal eligibility

#### Example Scenarios
- [ ] Create `src/components/checker/ExampleScenarios.tsx`
  - Quick-tap buttons: Age 14, Age 15, Age 17, Age 18, Age 24, Age 25, Age 30, Age 31
  - Tapping a button auto-fills a DOB that results in the selected age on Nov 2, 2026
  - Shows a "Try an Example" label above the buttons

#### Expanded Eligibility Questionnaire
- [ ] Create `src/components/checker/ExpandedQuestionnaire.tsx`
  - "Check More Requirements" expandable section (shown after age result)
  - Yes/No questions:
    - Are you a Filipino citizen?
    - Do you reside in the relevant barangay?
    - Have you met the applicable residency requirement?
    - Are you a qualified member of the Katipunan ng Kabataan?
    - Do you meet the applicable literacy requirement?
    - Are you subject to any applicable disqualification?
  - Final message: "Based on the information you provided, you appear to meet the criteria evaluated by this guide."
  - Clear disclaimer: only official COMELEC records make an official determination

#### Barangay Selector
- [ ] Create `src/components/checker/BarangaySelector.tsx`
  - Searchable dropdown of all 63 Himamaylan City barangays
  - Optional — does not affect core age calculation
  - Foundation for future location-specific features
  - Label: "Select Your Barangay (Optional)"

#### Share Result
- [ ] Create `src/components/checker/ShareResult.tsx`
  - "Share My Result" button
  - Web Share API (mobile native share sheet)
  - Copy to clipboard fallback
  - Shared text: age result + election date + site URL
  - Does NOT include full date of birth in share payload

#### Print Result
- [ ] Create `src/components/checker/PrintResult.tsx`
  - "Print Result" button triggers `window.print()`
  - Print layout includes:
    - COMELEC logo + Himamaylan City
    - "SK Age & Eligibility Guide Result" (NOT "Official Certificate")
    - Election date: November 2, 2026
    - Age on Election Day
    - SK voter age result
    - SK candidate age result
    - Full disclaimer text
    - Date generated
    - Official references note
  - `@media print` CSS hides nav, footer, buttons

#### Main Checker Orchestrator
- [ ] Create `src/components/checker/EligibilityChecker.tsx`
  - Assembles all above components
  - State: `dob`, `result`, `showQuestionnaire`, `selectedBarangay`
  - Handles form submission and resets
  - Disclaimer banner above calculator
  - Election date banner within checker

#### Checker Page Route
- [ ] Create `src/app/checker/page.tsx`
  - Page metadata (title, description)
  - Renders `<EligibilityChecker />`
  - Breadcrumb: Home → Eligibility Checker

#### Boundary Case Verification
- [ ] Manually verify all 9 boundary cases produce correct outputs:
  - DOB → Age 14 on Nov 2, 2026 → Outside both ranges
  - DOB → Age 15 on Nov 2, 2026 → Voter only
  - DOB → Age 17 on Nov 2, 2026 → Voter only
  - DOB → Age 18 on Nov 2, 2026 → Both ranges
  - DOB → Age 24 on Nov 2, 2026 → Both ranges
  - DOB → Age 25 on Nov 2, 2026 → Voter only
  - DOB → Age 30 on Nov 2, 2026 → Voter only
  - DOB → Age 31 on Nov 2, 2026 → Outside both ranges
  - Edge: Birthday on Nov 2 itself → correct age reached

#### Verification
- [ ] Run `npm run build` → must pass
- [ ] Confirm checker renders correctly on mobile viewport (375px)

---

## LOOP 3 — Homepage & UI Shell

**Goal:** Build the fully-branded, officially-styled homepage that establishes credibility and drives users to the checker.

**Entry Condition:** Loop 2 complete. Checker fully functional.
**Exit Condition:** Homepage renders on 375px, 768px, 1280px. `npm run build` passes.

### Tasks

#### Hero Section
- [ ] Create `src/components/home/Hero.tsx`
  - Official COMELEC logo (top center or top left)
  - Headline: "Check Your SK Eligibility for the 2026 Elections"
  - Subheadline: "Find out your age on Election Day and learn whether you fall within the applicable age ranges for SK voting and candidacy."
  - Primary CTA button: "Check My SK Eligibility" → `/checker`
  - Secondary CTA button: "Learn About the SK Election" → `/election-info`
  - Subtle government-appropriate background (COMELEC blue gradient or pattern)

#### Election Date Banner
- [ ] Create `src/components/home/ElectionDateBanner.tsx`
  - Prominent display: "2026 Barangay and Sangguniang Kabataan Elections"
  - Large: "November 2, 2026"
  - Official styling (gold or deep blue band)
  - Visible above the fold on mobile

#### Quick Checker Embed
- [ ] Create `src/components/home/QuickCheckerEmbed.tsx`
  - Mini DOB input card directly on the homepage
  - "Check Now" button → calculates and either shows inline result or redirects to `/checker`
  - Reduces steps for first-time users

#### How It Works
- [ ] Create `src/components/home/HowItWorks.tsx`
  - 3-step explainer:
    1. Enter your Date of Birth
    2. We calculate your age on November 2, 2026
    3. See your SK voter and candidate age results
  - Icon per step
  - Clean card grid layout

#### Voter Age Explainer
- [ ] Create `src/components/home/VoterAgeExplainer.tsx`
  - Section title: "Can I Vote in the SK Election?"
  - Visual cards for each age group:
    - Under 15 → Outside applicable SK age range
    - 15–17 → Within applicable SK voting age range
    - 18–30 → Within applicable SK voting age range
    - 31+ → Outside applicable SK youth age range
  - Note: "Age is not the only qualification"
  - CTA: "Check Full Requirements"

#### Candidate Age Explainer
- [ ] Create `src/components/home/CandidateAgeExplainer.tsx`
  - Section title: "Can I Run for SK?"
  - Visual cards:
    - 18–24 on Election Day → Potentially within statutory candidate age range
    - Outside 18–24 → Outside applicable candidate age range
  - Note: "Subject to all other applicable qualifications"

#### Announcements Banner
- [ ] Create `src/components/home/AnnouncementsBanner.tsx`
  - Displays announcements from `src/config/announcements.ts`
  - Shows "No current announcements" if empty
  - Easy to update for future election notices

#### Quick Links Grid
- [ ] Create `src/components/home/QuickLinks.tsx`
  - Grid of cards linking to all major sections
  - Icons + label + short description per card
  - Sections: Eligibility Checker, SK Qualifications, Election Info, Barangays, FAQs, References, Contact

#### Homepage Assembly
- [ ] Update `src/app/page.tsx` to compose all home components
  - Order: Hero → Election Date Banner → Quick Checker Embed → How It Works → Voter Explainer → Candidate Explainer → Announcements → Quick Links

#### Verification
- [ ] Test on 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Confirm all CTA buttons link correctly
- [ ] Run `npm run build` → must pass

---

## LOOP 4 — Content Pages

**Goal:** Build all 7 supporting information pages that give the checker context and authority.

**Entry Condition:** Loop 3 complete. Homepage built.
**Exit Condition:** All pages navigate correctly. `npm run build` passes.

### Tasks

#### Page 1: SK Qualifications (`/qualifications`)
- [ ] Create `src/app/qualifications/page.tsx` with metadata
- [ ] SK Voter Qualifications section:
  - Age (15–30 on Election Day)
  - Filipino citizen
  - Resident of the barangay
  - Registered member of the Katipunan ng Kabataan
  - Not otherwise disqualified
- [ ] SK Candidate Qualifications section:
  - Filipino citizen
  - Age (18–24 on Election Day)
  - Resident of the barangay (at least 1 year)
  - Registered member of the Katipunan ng Kabataan
  - Able to read and write
  - Not subject to applicable disqualifications
  - No family relationship restrictions (per current law)
- [ ] Visual "Can I Vote?" cards (inline)
- [ ] Visual "Can I Run?" cards (inline)
- [ ] Link to Official References

#### Page 2: 2026 Election Information (`/election-info`)
- [ ] Create `src/app/election-info/page.tsx` with metadata
- [ ] What is the Barangay and SK Election? section
- [ ] What is the Sangguniang Kabataan? section
- [ ] What does the SK do? section
- [ ] Who can vote? / Who can run? summary
- [ ] Important Dates timeline component
- [ ] Registration information section
- [ ] Filing / candidacy information section
- [ ] Official COMELEC links section
- [ ] Election-related announcements (from config)

#### Page 3: Barangays (`/barangays`)
- [ ] Create `src/app/barangays/page.tsx` with metadata
- [ ] Page title: "Barangays of Himamaylan City"
- [ ] Search input (filters barangay list in real-time)
- [ ] Total count display: "63 Barangays"
- [ ] All 63 barangay cards rendered from `src/config/barangays.ts`
- [ ] Each card: Barangay name, district (if applicable), future-ready card structure
- [ ] Filter by district/area (if data available)
- [ ] "Find Your Barangay" helper text

#### Page 4: FAQ (`/faq`)
- [ ] Create `src/app/faq/page.tsx` with metadata
- [ ] Search/filter input for FAQs
- [ ] Expandable accordion for each FAQ item from `src/config/faqs.ts`
- [ ] All required questions answered:
  - What is the Sangguniang Kabataan?
  - What is the SK voter age range?
  - What is the SK candidate age range?
  - Is my age based on my age today?
  - What if I turn 18 before Election Day?
  - What if I turn 25 before Election Day?
  - Does age alone determine eligibility?
  - What is the Katipunan ng Kabataan?
  - What residency requirements apply?
  - Do I need to be registered?
  - Where can I verify official election information?
  - Where can I contact the Himamaylan City Election Office?

#### Page 5: Official References (`/references`)
- [ ] Create `src/app/references/page.tsx` with metadata
- [ ] Reference cards from `src/config/references.ts`
- [ ] Each card: Document name, issuing authority, date, short description, "View Official Source" button
- [ ] Initial references:
  - Republic Act No. 10742 (SK Reform Act of 2015)
  - COMELEC Resolution on 2026 SK Elections (when available)
  - Current SK registration guidelines
  - COMELEC official website
  - Official COMELEC announcements
- [ ] "Information Last Updated" date displayed prominently

#### Page 6: Contact (`/contact`)
- [ ] Create `src/app/contact/page.tsx` with metadata
- [ ] Section: "Contact the Election Office"
- [ ] Himamaylan City Election Office details from `src/config/contact.ts`:
  - Office name
  - Address
  - Telephone
  - Email
  - Official website link
  - Office hours
- [ ] Note: "All contact details should be verified against the latest official COMELEC information"
- [ ] Map embed placeholder (Google Maps iframe or static map image)
- [ ] Links to official COMELEC social channels

#### Page 7: Disclaimer (`/disclaimer`)
- [ ] Create `src/app/disclaimer/page.tsx` with metadata
- [ ] Full disclaimer text:
  > "This website provides general election information and an age-based eligibility guide based on the information entered by the user. Results generated by this tool do not constitute a final determination of voter or candidate eligibility. Official COMELEC records, applicable laws, rules, regulations, and resolutions shall prevail."
- [ ] Privacy Notice:
  - No date of birth stored or transmitted
  - Calculator operates entirely client-side
  - No account creation required
  - No cookies for calculator function
- [ ] Data handling statement
- [ ] Link back to Official References

#### Navigation & Linking
- [ ] Verify all navigation links point to correct routes
- [ ] Verify footer quick links work
- [ ] Add breadcrumbs to all inner pages
- [ ] Verify "Back to Checker" links where appropriate

#### Verification
- [ ] All 7 pages render without errors
- [ ] Navigation works from all pages
- [ ] Run `npm run build` → must pass

---

## LOOP 5 — Polish, SEO, Accessibility & Vercel Readiness

**Goal:** Final production quality pass. Every detail reviewed. Zero errors. Ready to deploy.

**Entry Condition:** Loop 4 complete. All pages built.
**Exit Condition:** `npm run build` ✅ · `npm run lint` ✅ · Zero errors · Lighthouse mobile ≥ 85

### Tasks

#### SEO
- [ ] Root layout metadata: title template, description, canonical URL
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Per-page metadata for all 8+ routes
- [ ] OG image: generate a branded `/api/og` image or static `public/og-image.png`
- [ ] `public/robots.txt` — allow all, sitemap reference
- [ ] `public/sitemap.xml` or dynamic `src/app/sitemap.ts` route
- [ ] Semantic heading hierarchy audit (h1 → h2 → h3 only, one h1 per page)
- [ ] `<title>` on every page unique and descriptive

#### Performance
- [ ] Replace all `<img>` tags with Next.js `<Image>` component
- [ ] Confirm `next/font` is used (no external font requests)
- [ ] Check bundle size — remove unused imports
- [ ] Verify no layout shift (CLS) on load
- [ ] Run Lighthouse on mobile → target ≥ 85 performance score
- [ ] Confirm calculator is immediately usable without waiting for JS hydration (progressive enhancement)

#### Accessibility (WCAG AA)
- [ ] Keyboard navigation: Tab through entire checker flow
- [ ] Focus rings visible on all interactive elements
- [ ] All images have `alt` text
- [ ] All form inputs have `<label>` elements (not just `placeholder`)
- [ ] ARIA labels on icon-only buttons
- [ ] Color contrast ratio ≥ 4.5:1 for all text
- [ ] No information conveyed by color alone (always paired with text/icon)
- [ ] Error messages announced to screen readers (`role="alert"` or `aria-live`)
- [ ] Accordion FAQ uses `aria-expanded`
- [ ] Skip-to-main-content link at top of page

#### Print Layout
- [ ] `@media print` CSS:
  - Hide: navigation, footer, share button, print button, example scenarios, questionnaire
  - Show: COMELEC logo, result content, disclaimer, date generated
- [ ] Print title: "SK Age & Eligibility Guide Result"
- [ ] Print label (large, clear): "This is NOT an official eligibility certificate"
- [ ] Page breaks handled correctly for multi-section print

#### Share Feature Polish
- [ ] Web Share API: `navigator.share()` with fallback to clipboard
- [ ] Shared text format:
  ```
  My SK Election Age Check (Nov 2, 2026):
  Age on Election Day: [X] years
  SK Voter Age Range (15–30): [Within / Outside]
  SK Candidate Age Range (18–24): [Within / Outside]
  Check yours at: [site URL]
  ```
- [ ] URL sharing: optional `?dob=YYYY-MM` param (month/year only, not full DOB)

#### Error States Polish
- [ ] Empty date → "Please enter your date of birth." (visible + ARIA)
- [ ] Invalid date → "Please enter a valid date of birth."
- [ ] Future date → "Date of birth cannot be in the future."
- [ ] Incomplete fields → "Please complete all required fields."
- [ ] All errors styled with red border + error icon + message below field
- [ ] Errors clear on correction

#### Final Content Review
- [ ] All barangay names verified correct (63 barangays)
- [ ] All FAQ answers accurate against current COMELEC rules
- [ ] All official reference links active and correct
- [ ] Contact information verified against official COMELEC records
- [ ] "Last Updated: August 18, 2026" in footer
- [ ] Disclaimer text on calculator, results, and disclaimer page
- [ ] All age ranges match official rules (15–30 voter, 18–24 candidate)

#### Vercel Deployment Readiness
- [ ] `next.config.ts` — production-ready settings
- [ ] `.env.example` — all environment variables documented
- [ ] `vercel.json` — if custom headers/redirects needed
- [ ] `README.md` — deployment instructions for Vercel
- [ ] Confirm no hardcoded localhost URLs
- [ ] Confirm all external links open `target="_blank"` with `rel="noopener noreferrer"`

#### Final Build Verification
- [ ] `npm run lint` → zero warnings, zero errors
- [ ] `npm run build` → zero errors
- [ ] `npm run start` → verify production build locally
- [ ] Mobile browser test (Chrome DevTools 375px)
- [ ] Print preview test in browser
- [ ] Share button test on mobile device

---

## Baton Pass Protocol

Each loop agent must confirm the following before triggering the next loop:

```
✅ Loop [N] Complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Files created: [count]
npm run build: PASSED
Key deliverable: [description]
Ready to start Loop [N+1]: YES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

If `npm run build` fails, the loop agent must fix the error before passing the baton.

---

## Open Questions (Answer Before Starting)

| # | Question | Status |
|---|---|---|
| 1 | Do you have the official COMELEC logo file (PNG/SVG)? | ⬜ Pending |
| 2 | Do you have the official Himamaylan City seal/logo? | ⬜ Pending |
| 3 | What is the verified address, phone, and email for the Himamaylan City Election Office? | ⬜ Pending |
| 4 | Should we cite specific 2026 COMELEC resolution numbers? | ⬜ Pending |
| 5 | Do you have the complete official list of all 63 barangays? | ⬜ Pending |
| 6 | What is the deployment URL (e.g., himamaylan-comelec.vercel.app)? | ⬜ Pending |

---

## Agent Definitions

| Agent ID | Loop | Role |
|---|---|---|
| `loop-1-foundation` | Loop 1 | Scaffolds project, installs dependencies, creates config and design system |
| `loop-2-calculator` | Loop 2 | Builds all eligibility logic and checker components |
| `loop-3-homepage` | Loop 3 | Builds homepage, hero, banners, and quick links |
| `loop-4-content` | Loop 4 | Builds all 7 content/information pages |
| `loop-5-polish` | Loop 5 | Handles SEO, accessibility, print, share, and Vercel deployment readiness |

---

## How to Start

| Command | Action |
|---|---|
| `"start"` or `"go"` | Begins Loop 1 |
| `"start loop 2"` | Jumps to Loop 2 (assumes Loop 1 done) |
| `"start loop 3"` | Jumps to Loop 3 |
| `"start loop 4"` | Jumps to Loop 4 |
| `"start loop 5"` | Jumps to Loop 5 |
| `"verify loop 1"` | Runs build check for Loop 1 only |

---

*Loop Engineer Plan — Himamaylan City COMELEC 2026 SK Age & Eligibility Checker*
*See `LOOP README.MD` for project overview and directory structure.*
