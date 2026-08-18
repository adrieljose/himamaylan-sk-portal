# 🗳️ Himamaylan City COMELEC — 2026 SK Age & Eligibility Checker
## REDESIGN LOOP PLAN
### Skills Applied: gpt-taste · design-taste-frontend · frontend-design · frontend-ui-engineering · animejs-animation · tailwind-patterns · design-spells · mobile-design · design-spatial · ui-skills · ux-audit · ux-flow · ui-a11y · react-patterns · ux-copy · ux-feedback

---

## Design Read (design-taste-frontend §0.B)

> **"Reading this as: civic-information landing page for young residents aged 14–31, with a trust-first / modern civic-tech language, leaning toward Tailwind v4 utilities + Geist + restrained purposeful motion."**

This is a **public-sector service** with a **civic-tech overlay**. The dials from `design-taste-frontend §1.B`:

```
DESIGN_VARIANCE:  4   (trust-first / public-sector — deliberate, not chaotic)
MOTION_INTENSITY: 4   (purposeful only — result reveals, age counter, timeline slide)
VISUAL_DENSITY:   5   (information-rich — qualifications, FAQs, barangay lists)
```

**Anti-Default Discipline** (`design-taste-frontend §0.D`): This site must NOT default to:
- AI-purple gradients ❌
- Three equal feature cards ❌
- Generic glassmorphism ❌
- Infinite-loop micro-animations everywhere ❌
- Inter font ❌
- Centered hero over dark mesh (without real reason) ❌

The **signature element** (`frontend-design`): The Age Range Timeline — a bespoke, animated horizontal spectrum unique to this tool that no other government website has. Everything else serves this centerpiece.

---

## Skill Authority Map

Each loop is governed by specific skills. Agents must read the assigned skills before building.

| Loop | Primary Skills | Support Skills |
|---|---|---|
| **R1 — Shell & Tokens** | `tailwind-patterns`, `frontend-design`, `design-taste-frontend` | `frontend-ui-engineering`, `react-patterns` |
| **R2 — Checker** | `frontend-ui-engineering`, `animejs-animation`, `design-spells` | `ux-copy`, `ux-feedback`, `mobile-design` |
| **R3 — Homepage** | `gpt-taste`, `design-taste-frontend`, `frontend-design` | `design-spells`, `design-spatial` |
| **R4 — Content Pages** | `ux-flow`, `frontend-ui-engineering`, `ux-copy` | `react-patterns`, `ui-a11y` |
| **R5 — Polish** | `ui-a11y`, `ux-audit`, `design-spatial`, `mobile-design` | `tailwind-patterns`, `frontend-ui-engineering` |

---

## Universal Rules (All Loops Must Follow)

### From `design-taste-frontend`
- **One palette, locked** — COMELEC blue + gold. No warm-beige detours, no purple-gradient AI defaults.
- **One corner-radius scale** — `rounded-xl` (12px) for cards, `rounded-lg` (8px) for inputs/buttons, `rounded-full` for badges only. Never mixed arbitrarily.
- **No placeholder-as-label** — Every form input has a real `<label>` above it.
- **One CTA intent per label** — "Check My Eligibility" is the only label for the primary action everywhere. Never "Check Now" on one page and "Get Started" on another.
- **Eyebrow restraint** — Maximum 1 eyebrow per 3 sections. Count before shipping.
- **No duplicate CTAs with same intent** on any single page.
- **Theme lock** — Light theme throughout. No section-level dark/light inversion.
- **Copy audit** — Every visible string reviewed for AI-hallucination patterns before loop exit.
- **No fake stats** — Any numbers shown must come from official COMELEC data or be labeled "example."
- **Motion must be motivated** — Before any animation: "What does this communicate?" Valid: hierarchy, feedback, state change. Invalid: "it looks cool."

### From `frontend-ui-engineering`
- **No AI aesthetic** — No purple/indigo defaults, no rounded-2xl everywhere, no shadow-heavy cards, no generic hero sections.
- **Components ≤ 200 lines** — Split anything larger.
- **Full state cycles** — Every interactive component handles loading, error, empty, and success states.
- **No color as sole state indicator** — Every badge/result always pairs color + text + icon.
- **Composition over configuration** — Prefer `<Card><CardHeader>` over `<Card title="..." headerVariant="large">`.

### From `tailwind-patterns`
- **Tailwind v4 CSS-first** — Configuration via `@theme` directive in CSS, not `tailwind.config.js`.
- **OKLCH color tokens** — Colors defined as `oklch()` values in `@theme` for perceptual uniformity.
- **No arbitrary values** — Use the spacing scale. No `padding: 13px` or `margin-top: 2.3rem`.
- **No `@apply` overuse** — Prefer component extraction over `@apply` for repeated patterns.
- **Container queries** — Use `@container` for component-level responsive behavior (checker cards, barangay cards).
- **No template string classes** — No dynamic `className={`bg-${color}-500`}` (breaks Tailwind purging).

### From `frontend-design`
- **Ground it in the subject** — Every design choice is derived from Himamaylan City's civic world: official colors, formal structure, election vocabulary.
- **Structure encodes truth** — No numbered markers (01, 02) unless the content is a genuine ordered sequence.
- **Spend boldness in one place** — The Age Range Timeline is the signature. Everything else stays disciplined.
- **Two-pass planning** — Brainstorm token system first. Critique against generic defaults. Then build.

### From `mobile-design`
- **Mobile checkpoint** declared before each loop.
- Touch targets ≥ 44px on every interactive element.
- Hero uses `min-h-[100dvh]` NOT `h-screen` (iOS Safari address bar fix).
- Primary CTAs in thumb zone (lower 60% of mobile screen).
- No hover-only interactions.

### From `design-spatial`
- `body { overflow-x: clip }` — Set once in root layout. Never remove.
- Nav rows: `flex-wrap: wrap` — Never `nowrap`.
- Zero uses of `100vw`.
- Overflow gate runs at 375px, 768px, 1280px before every loop exit.

---

## REDESIGN LOOP 1 — Global Shell & Design Tokens

**Skills:** `tailwind-patterns` · `frontend-design` · `design-taste-frontend` · `frontend-ui-engineering` · `react-patterns`

**Goal:** Build the complete design foundation — tokens, typography, base components, navigation, footer. The visual identity is established here and must hold through every subsequent loop.

**Entry:** Empty Next.js scaffold
**Exit Gate:** `npm run build` ✅ · Overflow gate 375/768/1280px ✅ · No AI-default patterns ✅

---

### Token System (`tailwind-patterns §2`, `frontend-design`)

**Design Read for tokens:** Civic authority + modern approachability. Deep COMELEC blue as the dominant tone, gold as the accent of significance (election date, results), clean white as the resting state.

```css
/* src/app/globals.css — Tailwind v4 @theme block */
@theme {
  /* COMELEC Blue — Primary */
  --color-blue-950: oklch(0.13 0.04 255);
  --color-blue-900: oklch(0.18 0.06 255);
  --color-blue-800: oklch(0.25 0.08 255);
  --color-blue-700: oklch(0.32 0.10 255);
  --color-blue-600: oklch(0.40 0.13 255);
  --color-blue-500: oklch(0.50 0.15 255);
  --color-blue-100: oklch(0.93 0.03 255);
  --color-blue-50:  oklch(0.97 0.01 255);

  /* Gold — Election Accent */
  --color-gold-600: oklch(0.60 0.12 75);
  --color-gold-500: oklch(0.70 0.14 75);
  --color-gold-400: oklch(0.80 0.16 75);
  --color-gold-100: oklch(0.97 0.04 75);

  /* Semantic — Eligibility Results */
  --color-eligible:        oklch(0.52 0.14 145);  /* green-600 */
  --color-eligible-bg:     oklch(0.97 0.04 145);  /* green-50 */
  --color-ineligible:      oklch(0.52 0.18 25);   /* red-600 */
  --color-ineligible-bg:   oklch(0.97 0.04 25);   /* red-50 */
  --color-boundary:        oklch(0.60 0.15 60);   /* amber-600 */
  --color-boundary-bg:     oklch(0.98 0.04 60);   /* amber-50 */

  /* Neutral */
  --color-surface:         oklch(1.0 0 0);
  --color-surface-subtle:  oklch(0.97 0 0);
  --color-text-primary:    oklch(0.15 0 0);
  --color-text-secondary:  oklch(0.45 0 0);
  --color-text-muted:      oklch(0.65 0 0);
  --color-border:          oklch(0.88 0 0);

  /* Typography — Geist (design-taste-frontend §4.1 — Inter banned) */
  --font-sans: 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Type Scale */
  --text-display:  clamp(2.25rem, 5vw, 4rem);
  --text-h1:       clamp(1.75rem, 3.5vw, 2.5rem);
  --text-h2:       clamp(1.375rem, 2.5vw, 1.75rem);
  --text-h3:       1.25rem;
  --text-body:     1rem;
  --text-small:    0.875rem;
  --text-micro:    0.75rem;

  /* Spacing */
  --spacing-section-y:  4rem;     /* py-16 mobile */
  --spacing-section-lg: 6rem;     /* py-24 tablet */
  --spacing-section-xl: 8rem;     /* py-32 desktop */

  /* Shape — ONE consistent scale (design-taste-frontend §4.4) */
  --radius-card:   0.75rem;   /* 12px — cards */
  --radius-input:  0.5rem;    /* 8px  — inputs, buttons */
  --radius-badge:  9999px;    /* full — status badges only */
}
```

**Banned:** mixing `rounded-2xl` on some cards and `rounded-md` on others. One scale. Everywhere.

---

### Component Architecture (`frontend-ui-engineering §Component Architecture`)

All components follow colocation pattern:
```
src/components/
  ui/
    Button/
      Button.tsx          ← implementation
      Button.types.ts     ← prop types
    Card/Card.tsx
    Badge/Badge.tsx
    Section/Section.tsx
    Container/Container.tsx
    Accordion/Accordion.tsx
  layout/
    Navigation/Navigation.tsx
    Footer/Footer.tsx
    DisclaimerBanner/DisclaimerBanner.tsx
```

**Composition over configuration** (`frontend-ui-engineering`):
```tsx
// ✅ Composable
<Card>
  <CardHeader>SK Voter Age</CardHeader>
  <CardBody><EligibilityResult /></CardBody>
</Card>

// ❌ Over-configured — banned
<Card title="SK Voter Age" result="eligible" age={19} showDisclaimer />
```

---

### Icon Library (`design-taste-frontend §3.C`)

**Chosen:** `@phosphor-icons/react` — NOT `lucide-react` (which `design-taste-frontend` explicitly discourages as a default).
**Stroke weight:** `weight="regular"` globally standardized.
**One family only** — no mixing with other icon libraries.

---

### Navigation (`design-taste-frontend §4.7`)

- **Single line on desktop at 1024px** — If links don't fit, condense labels first.
- **Max height: 72px desktop** — No bloated agency nav bars.
- Sticky: `position: sticky; top: 0; z-index: 50; backdrop-blur-sm`
- `flex-wrap: wrap` on the link row — never `nowrap` (`design-spatial §4`)
- Primary CTA: `"Check My Eligibility"` — solid `bg-blue-600 text-white rounded-lg px-4 py-2`
- No duplicate CTA intent in the nav (only one primary action)

**Design Spell (`design-spells`):**
- Active page: animated underline slides to the active link via CSS `transition: left 300ms ease`
- Mobile menu: items stagger-fade via CSS `animation-delay` — 60fps, no JS needed

---

### Footer

- `bg-blue-950 text-blue-100` — dark, authoritative
- 3-column grid desktop → 1-column mobile
- Contains: COMELEC logo + city name | Quick links | Contact snippet + last updated
- Full disclaimer snippet
- **No eyebrow labels** like "QUICK LINKS" or "RESOURCES" — headings are meaningful or absent
- **Theme lock** (`design-taste-frontend §4.11`): footer is dark within an otherwise light theme. This is an intentional, single section-level exception — the only one permitted.

---

### Root Layout (`design-taste-frontend §3.A`)

```tsx
// src/app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'; // next/font — never <link> tags
// min-h-[100dvh] on body — NOT h-screen (iOS Safari address bar — mobile-design §3.E)
// overflow-x: clip on body — design-spatial §4 mandatory gate
```

**RSC Safety** (`design-taste-frontend §3.A`): Any component using motion, scroll, or pointer physics is an isolated leaf with `'use client'` at the top. Root layout is a Server Component only.

---

### R1 Exit Gate
- [ ] `npm run build` — zero errors
- [ ] `scrollWidth - clientWidth = 0` at 375px, 768px, 1280px
- [ ] Geist font loaded via `next/font` — no external `<link>` tags
- [ ] All tokens defined in `@theme` CSS block — zero `tailwind.config.js` color overrides
- [ ] Nav renders on single line at 1024px
- [ ] Nav height ≤ 72px
- [ ] `flex-wrap: wrap` on nav link row confirmed
- [ ] `overflow-x: clip` on body confirmed
- [ ] `@phosphor-icons/react` installed, `lucide-react` not used

---

## REDESIGN LOOP 2 — Core Eligibility Checker

**Skills:** `frontend-ui-engineering` · `animejs-animation` · `design-spells` · `ux-copy` · `ux-feedback` · `mobile-design`

**Goal:** Build the most important component on the site. Every animation must be purposeful, every state handled, every word reviewed.

**Entry:** Loop R1 complete
**Exit Gate:** All 9 boundary cases correct ✅ · All states handled ✅ · Overflow gate ✅ · `npm run build` ✅

---

### Mobile Checkpoint (`mobile-design §8`)
```
Platform:     Web — iOS Safari + Android Chrome (primary)
Framework:    Next.js 14 + Tailwind v4
Viewport:     375px primary

3 Principles Applied:
1. DOB input: three large dropdowns (h-12 = 48px) — well above 44px minimum
2. "Calculate" button: full-width on mobile — maximum tap target
3. Results: single column on mobile — no horizontal scroll, no side-by-side cards

Anti-Patterns Avoided:
1. No hover-only expand states
2. No swipe gestures as the only way to access info
3. No color-only eligibility indication (always text + icon + color)
```

---

### DOB Input (`ux-copy`, `ux-feedback`, `frontend-ui-engineering §4.5`)

**Label above input** — never `placeholder` as the label (`design-taste-frontend §4.6`).

**Full state cycle** (`frontend-ui-engineering §4.5`, `ux-feedback`):
- **Default:** clean, inviting input card
- **Focused:** border transitions to `border-blue-500` + subtle `ring-2 ring-blue-100`
- **Valid date entered:** border transitions to `border-blue-400` + soft glow `box-shadow: 0 0 0 3px oklch(0.40 0.13 255 / 0.12)`
- **Error:** border → `border-red-500` + shake animation + inline error message with `role="alert"`
- **Active/calculating:** button shows spinner skeleton matching button shape

**Error messages** (`ux-copy`):
- Empty: "Enter your date of birth to continue."
- Invalid date: "That date doesn't look right. Please enter a valid date."
- Future date: "Your date of birth can't be in the future."
- Incomplete: "Please fill in the month, day, and year."

**Error message rules** (`frontend-design` — writing section):
- Active voice. Specific. No apologies ("Sorry, that's wrong").
- Name what happened and how to fix it.
- Never vague ("An error occurred").

**Design Spell — DOB Input (`design-spells`):**
- On error: `@keyframes shake` — `translateX` ±4px, 3 iterations, 300ms — signals error without being punishing
- On valid: border color transition 200ms + box-shadow ring expands outward

**Anime.js — NOT used here.** Shake and glow are pure CSS — no JS needed, 60fps guaranteed. Anime.js is reserved for the Age Counter and Timeline (see below).

---

### Age Display

**Design:** (`gpt-taste §3` — prominent, breathing)
- The year count is the hero of this component: `text-6xl font-bold` in COMELEC blue
- Below: "years, X months, X days" in `text-lg text-muted`
- Election label: "Age on November 2, 2026" — `text-sm text-muted uppercase tracking-wide`

**Anime.js — Age Counter** (`animejs-animation`):
```javascript
// Age number counts up from 0 → final over 700ms
// Spring easing — "spring(1, 80, 10, 0)" — feels weighted and satisfying
const tl = anime.timeline({ easing: 'spring(1, 80, 10, 0)' });
tl.add({
  targets: counterEl,
  innerHTML: [0, finalAge],
  round: 1,
  duration: 700,
}).add({
  targets: ageDisplayCard,
  opacity: [0, 1],
  translateY: [12, 0],
  duration: 400,
}, '-=400');
```
`prefers-reduced-motion`: counter jumps instantly to final value, no animation.

---

### Age Range Timeline — The Signature Element (`frontend-design`)

This is the one element this page will be remembered by. It must be executed with precision.

**Visual anatomy:**
```
[Under 15]──[15]────────────[18]──────[24]────────────[30]──[31+]
  GRAY        BLUE-100       BLUE-600 (darkest)        BLUE-100  GRAY
              ◄─── SK VOTER RANGE (15–30) ───────────────►
                    ◄── SK CANDIDATE RANGE (18–24) ──►
                                        ●  ← user's age marker
```

**Color zones** (`tailwind-patterns §7 — OKLCH`):
```css
.zone-outside  { background: oklch(0.88 0 0); }      /* gray */
.zone-voter    { background: oklch(0.85 0.04 255); }  /* blue-100 */
.zone-both     { background: oklch(0.40 0.13 255); }  /* blue-600 — darkest */
```

**User's age marker:** `w-5 h-5 rounded-full bg-white border-2 border-blue-600 shadow-md`

**Anime.js — Timeline Marker** (`animejs-animation`):
```javascript
// Marker slides from left edge to user's position with spring physics
anime({
  targets: markerEl,
  left: `${positionPercent}%`,
  duration: 600,
  easing: 'spring(1, 90, 12, 0)', // spring — satisfying overshoot
});
```
`prefers-reduced-motion`: marker snaps to position with no transition.

**Label discipline** (`design-taste-frontend §4.7 EYEBROW RESTRAINT`):
- Tick labels at 15, 18, 24, 30 only — no label clutter
- Zone labels: "SK Voter Range" and "SK Candidate Range" — meaningful, not decorative
- No eyebrow-style "AGE RANGE OVERVIEW" title above the timeline

**Container query** (`tailwind-patterns §3`): Timeline is `@container/timeline`. Tick labels shrink on small containers; the bar itself always renders.

---

### Eligibility Result Cards (`frontend-ui-engineering §4.5`, `ux-feedback`)

**Full state cycle — per card:**

| State | Visual |
|---|---|
| **Within Range** | `bg-eligible-bg border-eligible` + `CheckCircle` icon (Phosphor) + green badge |
| **Outside Range** | `bg-ineligible-bg border-ineligible` + `XCircle` icon + red badge |
| **Boundary (exact 15, 30)** | `bg-boundary-bg border-boundary` + `WarningCircle` icon + amber badge |

**Color is never the sole indicator** (`frontend-ui-engineering §Color`): Every result shows icon + label + color. A person who cannot see color still understands the result.

**Anime.js — Stagger Reveal** (`animejs-animation`):
```javascript
// Voter card first, candidate card 150ms later — stagger creates hierarchy
const tl = anime.timeline({ easing: 'spring(1, 80, 10, 0)' });
tl.add({
  targets: '.voter-card',
  opacity: [0, 1],
  translateY: [16, 0],
  duration: 500,
}).add({
  targets: '.candidate-card',
  opacity: [0, 1],
  translateY: [16, 0],
  duration: 500,
}, '-=350'); // overlap — feels natural, not mechanical
```

**Disclaimer micro-text** (`ux-copy`): "Age is one of several requirements. Other qualifications apply." — `text-micro text-muted` — always visible below each result card. Not collapsible, not hidden.

---

### Personalized Message (`frontend-design` — writing section)

Message copy follows `frontend-design` writing rules:
- Active voice, specific, plain terms
- Describes what the user's age means — not what the system calculated
- Never "You are eligible" (only COMELEC can say that)

| Age | Message |
|---|---|
| Under 15 | "You are below the applicable SK youth age range for the 2026 elections. The minimum age for SK voter registration is 15." |
| 15–17 | "You are within the applicable SK voter age range. You are below the SK candidate age range of 18–24." |
| 18–24 | "You are within both the applicable SK voter and candidate age ranges. Other qualifications also apply." |
| 25–30 | "You are within the applicable SK voter age range. You are above the SK candidate age range, which ends at 24." |
| 31+ | "You are above the applicable SK youth age range for the 2026 elections." |

**Copy self-audit** (`design-taste-frontend §4.9`): Before loop exit, every visible message string is re-read for AI-hallucination patterns, vague referents, or mock-poetic phrasing.

---

### Example Scenarios (`ux-feedback`)

- Row of quick-tap pills: Age 14, 15, 17, 18, 24, 25, 30, 31
- `rounded-full px-4 py-2 text-sm bg-surface-subtle border border-border`
- On tap: fills DOB input → triggers calculation → Anime.js timeline fires

**Design Spell (`design-spells`):** Active pill gets brief `box-shadow` ring pulse via CSS `:active` — confirms selection without a separate "selected" state component.

---

### Share & Print (`ux-copy`)

**Share button label:** "Share My Result" — not "Share," not "Copy Link," not "Tell a Friend."
**Print button label:** "Print Result" — not "Print," not "Download."

Labels are consistent everywhere these actions appear (checker page, result summary).

**Print layout** (`design-taste-frontend §4.11 theme lock + design-spatial`):
```css
@media print {
  nav, footer, .no-print { display: none !important; }
  body { font-family: 'Georgia', serif; color: #000; }
  .print-certificate-warning {
    border: 2pt solid #000;
    padding: 6pt 12pt;
    font-size: 10pt;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 12pt;
    /* Content: "SK AGE & ELIGIBILITY GUIDE RESULT — NOT AN OFFICIAL CERTIFICATE" */
  }
}
```

---

### R2 Exit Gate
- [ ] All 9 boundary cases produce correct results (verified manually)
- [ ] DOB input: all 4 error states display correctly with `role="alert"`
- [ ] Age counter animation fires and respects `prefers-reduced-motion`
- [ ] Timeline marker slides with spring physics, respects `prefers-reduced-motion`
- [ ] Result cards stagger-reveal with Anime.js timeline
- [ ] All result states: color + icon + text (never color alone)
- [ ] Disclaimer visible on all result screens (not collapsible)
- [ ] Print preview: "NOT AN OFFICIAL CERTIFICATE" label visible
- [ ] Touch targets ≥ 44px on all inputs, buttons, pills
- [ ] Single-column layout at 375px — no horizontal scroll
- [ ] `npm run build` — zero errors

---

## REDESIGN LOOP 3 — Homepage & UI Shell

**Skills:** `gpt-taste` · `design-taste-frontend` · `frontend-design` · `design-spells` · `design-spatial`

**Goal:** Build the homepage that establishes the civic-tech identity. AIDA structure. No templated defaults. The hero must breathe.

**Entry:** Loop R2 complete
**Exit Gate:** H1 ≤ 3 lines at 375px ✅ · Overflow gate ✅ · AIDA structure complete ✅ · `npm run build` ✅

---

### Pre-Flight Design Plan (`gpt-taste §8`, `design-taste-frontend §0.B`)

**Python RNG simulation** (prompt character count mod logic → deterministic selection):

```
Prompt length: ~4200 chars → seed = 4200 % 4 = 0
Hero layout selected:    Option 1 — Cinematic Center (dark bg, centered, full-bleed)
Typography selected:     Geist (pre-selected by design-taste-frontend §4.1 for trust-first civic)
GSAP paradigms:          (1) Stagger text reveal on load, (2) Scroll-reveal for sections
Component arsenal:       (1) Election date gold band, (2) Age explainer cards, (3) Quick links grid
```

**AIDA Check:**
- Attention → Hero: COMELEC logo + H1 + subtext + 2 CTAs ✅
- Interest → Election Date Banner + How It Works ✅
- Desire → Voter/Candidate Age Explainer + Quick Checker Embed ✅
- Action → "Check My Eligibility" CTA + footer links ✅

**Hero Math Verification** (`gpt-taste §3`):
- H1 text: "Check Your SK Eligibility for the 2026 Elections"
- Container: `max-w-5xl mx-auto` — wide enough that 9 words flow in 2 lines at most viewports
- Font: `clamp(2.25rem, 5vw, 4rem)` — scales down on mobile without wrapping
- Guarantee: ≤ 3 lines at 375px minimum width
- BANNED: floating stamp icons, pill tags under headline, stats in hero, trust logos inside hero

**Bento Density Verification** (voter/candidate explainer section):
- 4 cards total (Under 15, 15–17, 18–30, 31+) for voter; 2 cards for candidate
- Grid: `grid-cols-2 md:grid-cols-4` with `grid-flow-dense` — zero empty cells
- All cells have content: age range label + explanation + color zone indicator

**Label Sweep** (`gpt-taste §7`):
- Zero "SECTION 01" style labels ✅
- Zero "ABOUT" labels ✅
- Section headers are content descriptions only

---

### Hero Section

**Layout:** Cinematic Center — `bg-blue-900 to-blue-950` gradient
**Background:** Subtle CSS radial glow — `radial-gradient(ellipse at 50% 0%, oklch(0.50 0.15 255 / 0.3), transparent 70%)` — no image needed, no fake screenshot, no AI mesh gradient

**Anime.js — Hero Entry Orchestration** (`animejs-animation`):
```javascript
// Orchestrated timeline — each element has a motivated purpose:
// Logo first: establishes authority
// H1 words next: draws attention to the message
// Subtext: context after headline lands
// CTAs last: action only after context is understood
const tl = anime.timeline({ easing: 'spring(1, 80, 10, 0)' });
tl.add({ targets: '.hero-logo', opacity: [0, 1], translateY: [-8, 0], duration: 400 })
  .add({ targets: '.hero-h1 .word', opacity: [0, 1], translateY: [20, 0],
         delay: anime.stagger(60), duration: 500 }, '-=200')
  .add({ targets: '.hero-sub', opacity: [0, 1], duration: 400 }, '-=300')
  .add({ targets: '.hero-ctas', opacity: [0, 1], translateY: [8, 0], duration: 350 }, '-=300')
  .add({ targets: '.election-badge', opacity: [0, 1], scale: [0.95, 1], duration: 300 }, '-=200');
```
`prefers-reduced-motion`: all elements appear immediately, no animation.

**Hero Stack** (`design-taste-frontend §4.7 — max 4 text elements`):
1. COMELEC logo (image, not text)
2. H1: "Check Your SK Eligibility for the 2026 Elections" (≤ 2–3 lines)
3. Subtext: ≤ 20 words
4. Two CTAs

**BANNED from hero** (`design-taste-frontend §4.7`):
- Trust strip ("Used by all 63 barangays of Himamaylan City") ❌
- Pricing teaser ❌
- Feature bullet list ❌
- Social proof avatar row ❌
- Tagline below CTAs ❌

**CTA contrast** (`design-taste-frontend §4.5`): Dark hero background → Primary CTA must be `bg-white text-blue-800` (dark text on white). Secondary: `border border-blue-300 text-blue-100`. Both pass WCAG AA.

**Hero top padding cap** (`design-taste-frontend §4.7`): Max `pt-24` — content must not float halfway down the viewport.

**Design Spell — COMELEC Logo (`design-spells`):** Gentle float `@keyframes float` — `translateY(0) → translateY(-4px) → translateY(0)`, 3s infinite ease-in-out. Subtle. Civic. Not cartoonish.

---

### Election Date Banner

- Full-width gold band: `bg-gold-500 text-gray-900`
- Left: election name. Right: "November 2, 2026" in `font-bold text-xl`
- `flex-wrap: wrap` on the inner row — stacks gracefully on mobile
- `overflow-x: clip` confirmed on this section

**Design Spell (`design-spells`):** On scroll into view: date text slides from `translateX(16px) → 0` + `opacity 0 → 1` over 400ms via Intersection Observer + CSS transition. No Anime.js needed here — CSS is sufficient and cheaper.

---

### How It Works (3 Steps)

**Layout:** `grid grid-cols-1 md:grid-cols-3 gap-8` — explicit mobile collapse, no assumptions (`design-taste-frontend §4.7`).

**Section-layout-repetition rule** (`design-taste-frontend §4.7`): "How It Works" uses numbered step cards. This layout family is used ONCE on the homepage. No other section can use the same step-card pattern.

**Anime.js — Stagger Reveal** (`animejs-animation`):
```javascript
// Scroll-triggered stagger — each step enters as it becomes visible
// Motivated: communicates that steps are sequential, not simultaneous
anime({
  targets: '.step-card',
  opacity: [0, 1],
  translateY: [20, 0],
  delay: anime.stagger(120),
  easing: 'spring(1, 80, 10, 0)',
  duration: 500,
});
```

**No eyebrow above "How It Works"** if this is the second section to have one — enforce max 1 eyebrow per 3 sections (`design-taste-frontend §4.7`).

---

### Voter & Candidate Age Explainers (Bento Grid)

**Bento rules** (`gpt-taste §4`, `design-taste-frontend §4.7`):
- `grid-auto-flow: dense` — zero empty cells
- 4 voter cards + 2 candidate cards = 6 cells total — plan spans accordingly
- At least 2–3 cells have visual variation beyond plain text: color-zone tints matching timeline colors
- Background diversity: cells use `bg-blue-50`, `bg-blue-100`, `bg-blue-600 text-white` alternation — not all white-on-white

**Bento cell count rule**: Exactly 6 cells for 6 items. No filler cells.

**ZIGZAG ALTERNATION CAP**: This section uses a grid, not an alternating image+text pattern. The next section also must not use alternating left/right. Rule: max 2 consecutive image+text-split sections. Enforced.

---

### R3 Exit Gate
- [ ] H1 ≤ 3 lines at 375px (measure in browser DevTools)
- [ ] Hero top padding ≤ `pt-24`
- [ ] Hero has exactly 4 text elements (logo, H1, subtext, CTAs)
- [ ] No trust strips, bullet lists, or taglines in hero
- [ ] Primary CTA: white bg, dark text (passes WCAG AA on dark hero)
- [ ] Election date banner: `flex-wrap: wrap` confirmed
- [ ] Bento grid: zero empty cells, `grid-flow-dense` applied
- [ ] Eyebrow count ≤ ceil(sections / 3)
- [ ] No section layout repeated twice
- [ ] Anime.js hero orchestration respects `prefers-reduced-motion`
- [ ] Overflow gate 375/768/1280px ✅
- [ ] `npm run build` — zero errors

---

## REDESIGN LOOP 4 — Content Pages

**Skills:** `ux-flow` · `frontend-ui-engineering` · `ux-copy` · `react-patterns` · `ui-a11y`

**Goal:** Build all 7 supporting pages. Each page is a distinct layout family — no two pages use the same section structure (`design-taste-frontend §4.7`).

**Entry:** Loop R3 complete
**Exit Gate:** All pages navigate correctly ✅ · Every page has unique layout ✅ · `npm run build` ✅

---

### User Flow (`ux-flow`)

Primary flow:
```
Home → Checker → [Result] → Qualifications → References
                          ↘ FAQ
                          ↘ Contact
```

Every page must answer: "Where am I? What can I do next?" — breadcrumb + contextual next-step link on every inner page.

**Layout in task order** (`design-spatial §5`): Controls at top, action/confirmation at bottom. Every page places its primary CTA where the user's eye lands after reading.

---

### SK Qualifications Page

**Layout family:** Icon-card grid (distinct from the bento used on homepage)
- Voter qualifications: 5 items → 2+3 card split, NOT a simple bullet list
- Candidate qualifications: 6 items → 3+3 card split
- Long lists get grouped: "Age & Citizenship," "Residency & Registration," "Disqualifications" — 3 clusters with one soft divider each
- No `<ul>` with bullets for 10+ items (`design-taste-frontend §4.9`)

---

### Barangays Page

**Layout family:** Search-first, filterable card grid
- Search input: sticky below page header on mobile
- 63 barangay cards: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- `@container/barangay-card` — each card uses container queries for internal layout
- Empty search state (`ux-feedback`): "No barangays match '[query]'. Try a shorter search." with clear button
- Real-time filter via `useState` — no route change, no debounce delay (instant for ≤63 items)

---

### FAQ Page

**Layout family:** Accordion with search filter
- Search input filters questions in real-time
- `Accordion` component from Loop R1 design system
- `aria-expanded` on each trigger (`ui-a11y`)
- `+` icon rotates 45° → `×` on expand via CSS `transition: transform 300ms` — no JS needed

**Design Spell (`design-spells`):** The `+`→`×` rotation. Cheap, elegant, memorable. Every AI FAQ uses a chevron. This site uses the more intentional rotation.

---

### Official References Page

**Layout family:** Document cards — distinct from barangay cards and qualification cards
- Each card: icon (document/book — Phosphor) + name + authority pill + date + description + "View Official Source" CTA
- CTA label: "View Official Source" — consistent everywhere (`design-taste-frontend §4.5 — no duplicate CTA intent`)
- "Information Last Updated" in a prominent `bg-gold-100 border-gold-400` banner at top

---

### Contact Page

**Layout family:** Office info card + map placeholder — no list of links
- Office name, address, phone, email, hours in a structured card
- All contact details noted as "Verify before deployment" in code comments
- Map: static `<img>` placeholder with explicit `<!-- TODO: Replace with verified map embed -->`

---

### Disclaimer Page

**Layout family:** Long-form prose — narrow `max-w-2xl` column with generous `leading-loose`
- No cards, no grids — this is the one page that is intentionally dense text
- `VISUAL_DENSITY: 7` for this page only — exception noted

---

### Copy Audit (`design-taste-frontend §4.9`, `frontend-design` — writing)

Before R4 exits, every visible string on all 7 pages is reviewed:
- [ ] Active voice throughout
- [ ] No "Sorry" in error messages
- [ ] No vague referents ("we'll fix that")
- [ ] No AI hallucination phrases ("seamless experience," "robust solution")
- [ ] Consistent vocabulary: "Election Day" always capitalized, "Katipunan ng Kabataan" always full name first use

---

### R4 Exit Gate
- [ ] 7 pages complete and navigable
- [ ] Each page uses a distinct layout family from all other pages
- [ ] Breadcrumb on every inner page
- [ ] Contextual "next step" link at bottom of each page
- [ ] FAQ: `aria-expanded` confirmed on all accordion triggers
- [ ] Barangay search: empty state present
- [ ] References: "Last Updated" banner visible
- [ ] Disclaimer: "NOT an official eligibility determination" stated clearly
- [ ] Copy audit complete — no AI-hallucination strings
- [ ] Overflow gate 375/768/1280px ✅
- [ ] `npm run build` — zero errors

---

## REDESIGN LOOP 5 — Polish, Accessibility & Vercel Readiness

**Skills:** `ui-a11y` · `ux-audit` · `design-spatial` · `mobile-design` · `tailwind-patterns` · `frontend-ui-engineering`

**Goal:** Final production quality pass. Every gate must pass. Zero regressions.

**Entry:** Loop R4 complete
**Exit Gate:** All quality gates below ✅ · Lighthouse mobile ≥ 85 ✅ · `npm run build` ✅ · `npm run lint` ✅

---

### UX Audit — Nielsen's Heuristics (`ux-audit`)

Run heuristic check on: Checker page, Homepage, FAQ page.

| Heuristic | Check |
|---|---|
| Visibility of system status | Calculation shows result immediately — no blank wait |
| Match between system and real world | "Election Day" not "target date," "age" not "temporal delta" |
| User control | "Reset / Try Again" button on result screen |
| Consistency and standards | Same button labels, same card styles across all pages |
| Error prevention | Date validation before submit, not after |
| Recognition over recall | Example scenarios remove need to know correct DOB format |
| Flexibility | Barangay selector is optional — core flow never requires it |
| Aesthetic and minimalist design | Disclaimer is necessary, not decorative. No extra chrome. |
| Help users recover from errors | Error messages say exactly what to fix |
| Help and documentation | FAQ linked prominently from checker result area |

---

### Accessibility Pass (`ui-a11y`)

- [ ] `Tab` through entire checker — every interactive element reachable in logical order
- [ ] `:focus-visible { outline: 2px solid oklch(0.40 0.13 255); outline-offset: 2px }` — on every element, never removed without visible replacement
- [ ] `aria-live="polite"` on eligibility result area — screen reader announces result without page reload
- [ ] `aria-expanded` on all FAQ accordions
- [ ] `role="alert"` on all form error messages
- [ ] Skip-to-main link: `<a href="#main" class="sr-only focus:not-sr-only">Skip to main content</a>` — first focusable element on every page
- [ ] All `<img>`: meaningful `alt` — COMELEC logo: `alt="COMELEC — Commission on Elections"`
- [ ] All icon-only buttons: `aria-label` present
- [ ] All form inputs: `<label htmlFor>` — never `placeholder` as the only label
- [ ] Contrast audit — all text vs background ≥ 4.5:1 (3:1 for large text ≥ 18px)
- [ ] Color never the sole state indicator — confirmed on result cards

---

### Reduced Motion (`design-taste-frontend §6.B`, `mobile-design`)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

All Anime.js animations: wrapped in `if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;` guard.

---

### Performance (`frontend-ui-engineering §6.A`, `design-taste-frontend §6`)

- Animate only `transform` and `opacity` — never `top`, `left`, `width`, `height`
- `will-change: transform` only on elements that actually animate — not globally
- All `<img>` → `<Image>` (Next.js)
- `next/font` confirmed — no external `<link>` font requests
- No `window.addEventListener('scroll', ...)` — use `IntersectionObserver` or Motion's `useScroll()`
- No `useState` for continuous values (mouse position, scroll progress) — use `useMotionValue`
- Anime.js imported only in `'use client'` components, inside `useEffect`

---

### SEO

- Root layout: `title` template `%s | Himamaylan City COMELEC`
- All Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- `og:image`: static `public/og-image.png` — branded, 1200×630px
- Per-page `metadata` export on all 8+ routes
- `public/robots.txt` + dynamic `src/app/sitemap.ts`
- Semantic heading hierarchy: one `<h1>` per page, `<h2>` for sections, `<h3>` for cards — no skipped levels

---

### Final Overflow Gate (`design-spatial §4`)

Run in browser console at each width:
```js
// MUST return 0 at all three widths
document.documentElement.scrollWidth - document.documentElement.clientWidth

// If > 0, find offenders:
document.querySelectorAll('*').forEach(el => {
  const r = el.getBoundingClientRect();
  if (r.right > innerWidth + 1 || r.left < -1) console.log(Math.round(r.right), el);
});
```

---

### Final Quality Gate — All Must Pass

| Gate | Condition | Status |
|---|---|---|
| Overflow 375px | `scrollWidth - clientWidth = 0` | — |
| Overflow 768px | `scrollWidth - clientWidth = 0` | — |
| Overflow 1280px | `scrollWidth - clientWidth = 0` | — |
| Touch targets | All ≥ 44×44px | — |
| H1 line count | ≤ 3 lines at 375px | — |
| Contrast | All text ≥ 4.5:1 (large ≥ 3:1) | — |
| Color-only states | Zero — all paired with text+icon | — |
| Reduced motion | All animations respected | — |
| AI aesthetic | Zero purple gradients, no generic cards | — |
| Meta-labels | Zero "SECTION 01" style labels | — |
| CTA intent | One label per intent, consistently used | — |
| Eyebrow count | ≤ ceil(sectionCount / 3) | — |
| Corner radius | One consistent scale throughout | — |
| Font | Geist via `next/font`, no `<link>` tags | — |
| Icons | `@phosphor-icons/react` only — no mixing | — |
| Print | "NOT AN OFFICIAL CERTIFICATE" label present | — |
| Skip link | Present and functional on every page | — |
| `npm run lint` | Zero warnings, zero errors | — |
| `npm run build` | Zero errors | — |
| Lighthouse mobile | ≥ 85 performance | — |

---

## Baton Pass Protocol

Before each loop passes to the next:

```
✅ REDESIGN Loop [N] — Design Quality Confirmed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overflow gate (375 / 768 / 1280px): PASS / FAIL
Touch targets ≥ 44px:               PASS / FAIL
H1 ≤ 3 lines at 375px:              PASS / FAIL
Contrast ≥ 4.5:1:                   PASS / FAIL
No AI-aesthetic defaults:           PASS / FAIL
Reduced motion respected:           PASS / FAIL
No banned patterns:                 PASS / FAIL
npm run build:                      PASS / FAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Baton pass authorized:              YES / NO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

All gates PASS before any loop proceeds.

---

*REDESIGN LOOP PLAN — Himamaylan City COMELEC 2026 SK Age & Eligibility Checker*
*Skills: gpt-taste · design-taste-frontend · frontend-design · frontend-ui-engineering · animejs-animation · tailwind-patterns · design-spells · mobile-design · design-spatial · ui-skills · ux-audit · ux-flow · ui-a11y · react-patterns · ux-copy · ux-feedback*
*See `LOOP PLAN.MD` for the feature build plan. See `LOOP README.MD` for project overview.*
