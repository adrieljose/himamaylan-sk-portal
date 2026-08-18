# 🗳️ Himamaylan City COMELEC — 2026 SK Age & Eligibility Checker
## TYPOGRAPHY & ICONS LOOP PLAN
### Skills Applied: typography-first · design-taste-frontend · frontend-design · iconsax-library · tailwind-patterns · frontend-ui-engineering

---

## Why This Loop Exists

The current website has two critical visual quality failures:

> **Problem 1 — Typography is not uniform.**
> Different font sizes, weights, and families appear inconsistently across components.
> No consistent type scale. No clear visual hierarchy. Some areas use system fonts, others override with inline styles.

> **Problem 2 — Icons are not uniform.**
> Mix of icon libraries, inconsistent stroke weights, sizes that do not match neighboring text, and icons that feel generic rather than intentional.

This loop fixes both — completely and systematically — before any visual redesign can hold.

---

## Skills Found in .gemini/config/skills

| Skill | What It Provides |
|---|---|
| design-it/typography-first | Hyper-sized typography, kinetic text, type-as-graphic, vw/vh sizing principles |
| design-it/brutalist-typography | Extreme type treatments — NOT used here (wrong aesthetic for civic-gov), referenced for contrast |
| design-taste-frontend §4.1 | Font choice rules, Inter ban, serif discipline, pairings, italic descender rules |
| frontend-design | Typography carries personality — deliberate type pairing, not neutral delivery |
| iconsax-library | Premium icon library — 6 styles, Iconsax AI, strict consistency rules |
| tailwind-patterns §8 | Font stack pattern, type scale, OKLCH tokens for text colors |
| frontend-ui-engineering §Typography | Semantic heading hierarchy — never skip levels, never style headings as non-headings |

---

## Design Read for This Project

typography-first teaches: "The words are the interface." For a civic checker tool, this is literally true — every result, every label, every instruction IS the product.

brutalist-typography is explicitly NOT appropriate here. This is a government civic-tech site.
Design dials: VARIANCE: 4 / MOTION: 4 / DENSITY: 5

Typography must be: authoritative, legible, hierarchical, modern. Not experimental. Not decorative. Not Inter.

---

## AUDIT FIRST — Current Typography Problems

### Typography Audit Checklist
- [ ] List every font family currently loaded (check link tags, next/font, inline CSS, Tailwind config)
- [ ] List every unique font size used across all components
- [ ] List every font-weight value in use (400, 500, 600, 700, 800, 900)
- [ ] List every line-height / leading-* value in use
- [ ] List every letter-spacing / tracking-* value in use
- [ ] Identify any component using hardcoded style={{ fontSize: '...' }}
- [ ] Find any component not using the Tailwind type scale (e.g., raw text-[13px] arbitrary values)
- [ ] Identify any <h1> used for styling (not as a page title)
- [ ] Identify any skipped heading levels (<h1> directly followed by <h4>)
- [ ] Check <h1> count per page — must be exactly 1
- [ ] Find any placeholder-as-label (<input placeholder="Enter your DOB"> with no <label>)

### Icon Audit Checklist
- [ ] List every icon library imported (lucide-react, heroicons, react-icons, @tabler, etc.)
- [ ] List every icon size used (w-4, w-5, w-6, w-8, arbitrary sizes)
- [ ] List every strokeWidth value used (1, 1.5, 2, 2.5, etc.)
- [ ] Find any icons used without an aria-label (icon-only buttons)
- [ ] Find any icons that do not optically align with adjacent text
- [ ] Find any icons used in 3 or more different sizes in the same context

---

## The Target System

### Font Choice (design-taste-frontend §4.1, frontend-design)

**Primary font: Geist**
- Reason: Modern, professional, highly legible, no Inter-default association, designed by Vercel (aligns with our deployment platform), government-appropriate without being dull.
- NOT Inter: design-taste-frontend §4.1 explicitly bans Inter as the AI-default font.
- NOT a serif: design-taste-frontend §4.1 — "serif is very discouraged as default."
- NOT Fraunces or Instrument_Serif: explicitly banned as LLM-favorite display serifs.

**Mono font: Geist Mono**
- Used for: election date in specific contexts, timestamps only
- Reason: stays in the same family — optical harmony with Geist

**Loading method (design-taste-frontend §3.A):**
```
// src/app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google';
// NEVER: <link href="https://fonts.googleapis.com/css2..." />
```

---

### Type Scale (Locked — All Components Must Use These)

Tailwind class mapping — use these, never raw values:

| Role | Tailwind Classes |
|---|---|
| Display / Hero H1 | text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] |
| H1 — Page title | text-3xl md:text-4xl font-bold leading-[1.15] |
| H2 — Section title | text-2xl md:text-3xl font-semibold leading-[1.25] |
| H3 — Card/sub title | text-xl font-semibold leading-[1.3] |
| Body paragraph | text-base font-normal leading-relaxed text-gray-700 |
| Body — lead | text-lg font-normal leading-relaxed text-gray-600 |
| Small — labels, form helpers | text-sm font-medium text-gray-600 |
| Micro — disclaimers, dates | text-xs font-normal text-gray-500 |
| Eyebrow — sparse, uppercase | text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600 |

Anti-arbitrary rule (tailwind-patterns §11): If a class uses text-[13px] or text-[17px], it is a violation.

---

### Weight Scale (Locked)

| Weight | Tailwind | Use |
|---|---|---|
| 400 | font-normal | Body text, descriptions |
| 500 | font-medium | Labels, form inputs, small UI text |
| 600 | font-semibold | H2, H3, card titles, button labels |
| 700 | font-bold | H1, display type, result badges |
| 800 | font-extrabold | Age number counter (special only) |

Rule: No font-thin, font-light, or font-black used anywhere.

---

### Letter Spacing (Locked)

| Case | Tailwind | Use |
|---|---|---|
| Display type | tracking-tight | Hero H1 only |
| Headings | tracking-normal | H1–H3 |
| Body | tracking-normal | All body text |
| Eyebrow | tracking-[0.12em] | Sparse uppercase labels only |
| Mono / dates | tracking-wider | Election date in gold band |

Rule: No tracking-widest on body text — it destroys readability.

---

### Line Height (Locked)

| Class | Value | Use |
|---|---|---|
| leading-none | 1.0 | NEVER — clips descenders |
| leading-[1.05] | 1.05 | Display / hero H1 only |
| leading-tight | 1.25 | H1, H2 headings |
| leading-snug | 1.375 | H3, card titles |
| leading-normal | 1.5 | Form labels, small text |
| leading-relaxed | 1.625 | Body paragraphs |
| leading-loose | 2.0 | NEVER on civic content |

Italic descender clearance (design-taste-frontend §4.1): Italic display text with descender letters (y g j p q) must use leading-[1.1] minimum + pb-1 on the wrapper element.

---

### Semantic HTML Hierarchy (frontend-ui-engineering §Typography)

```
Every page: exactly ONE <h1>
  └── <h2> for major sections
      └── <h3> for cards and sub-items
          └── <p> for all body content
              └── <small> or span class text-xs for disclaimers
```

Violations to fix:
- Any <h2> used just for styling → replace with <p class="text-h2-scale">
- Any heading skipping levels → add missing intermediate levels
- Any <div> styled as heading without semantic tag → fix element

---

## TYPOGRAPHY LOOP — Task Breakdown

### T1 — Font Loading & Token Setup
- [ ] Remove all <link> tags loading Google Fonts from layout
- [ ] Install and configure next/font/google with Geist + Geist Mono
- [ ] Add @theme CSS variables for the full type scale to globals.css
- [ ] Verify font loads correctly — Network tab, confirm font-display: swap active
- [ ] Confirm NO external font requests in production build
- [ ] Add font-sans and font-mono to Tailwind @theme block

### T2 — Scale Implementation & Violations Sweep
- [ ] Replace ALL text-[arbitrary] classes with locked scale classes
- [ ] Replace ALL inline style={{ fontSize: '...' }} with Tailwind classes
- [ ] Enforce leading-relaxed on all <p> body text
- [ ] Enforce tracking-tight on display H1 only — remove from all other elements
- [ ] Enforce one <h1> per page — demote extras
- [ ] Fix all heading level skips
- [ ] Remove font-light and font-thin usages
- [ ] Remove font-black from anything except the age counter number
- [ ] Audit eyebrow count — max 1 per 3 sections

### T3 — Heading Semantics Pass
- [ ] Every page hero title wrapped in <h1>
- [ ] Every section header: <h2> with correct classes
- [ ] Every card title: <h3> with correct classes
- [ ] Every form label: <label htmlFor="..."> with text-small font-medium
- [ ] Remove all placeholder-as-label patterns
- [ ] Every eligibility result card header: <h3>
- [ ] Every FAQ question: <h3> inside accordion trigger

### T4 — Italic Descender Audit
- [ ] Scan all italic text in display or H1 contexts
- [ ] Words with descender letters (y g j p q) → add leading-[1.1] + pb-1 to wrapper
- [ ] Test in browser at 375px — confirm no clipping

### T5 — Copy Register Lock
- [ ] Sentence case on all headings (not ALL CAPS)
- [ ] Sentence case on all button labels
- [ ] "Election Day" always capitalized, "Sangguniang Kabataan" always full name first use
- [ ] No marketing language (seamless, robust, powerful, comprehensive)
- [ ] Error messages: active voice, specific, no apologies
- [ ] Empty states: invitation to act

---

## Icon System — Final State

### Library Choice: Phosphor Icons

**Selected: @phosphor-icons/react**

Why Phosphor over others:
- design-taste-frontend §3.C: Phosphor is listed first in priority order — recommended choice
- Better Next.js/React ecosystem support than Iconsax for web
- Civic-appropriate icons available (government, document, vote, calendar)
- 6 weights: Thin, Light, Regular, Bold, Fill, Duotone — provides multi-style benefit
- One library, no mixing — ever

Note on Iconsax: The iconsax-library skill mandates ONE style throughout a project.
Iconsax "Two-tone" works for premium mobile/app design.
For this civic-government site, Phosphor "Regular" weight is the better fit.
If user prefers Iconsax, style choice: "Linear" throughout. Never "Two-tone" for civic context.

---

### Icon Specification (Locked)

| Context | Size | Weight | Color |
|---|---|---|---|
| Navigation icons | w-5 h-5 (20px) | Regular | text-gray-600 / text-white on dark |
| Section icons | w-6 h-6 (24px) | Regular | text-blue-600 |
| Card icons (small) | w-5 h-5 (20px) | Regular | inherits from card context |
| Result icons (eligible/ineligible) | w-6 h-6 (24px) | Fill | text-green-600 / text-red-600 / text-amber-600 |
| Button icons (inline with text) | w-4 h-4 (16px) | Regular | inherits from button text color |
| Hero decorative | w-8 h-8 (32px) | Light | text-blue-200 |
| Empty state | w-12 h-12 (48px) | Light | text-gray-300 |
| Footer | w-4 h-4 (16px) | Regular | text-blue-300 |

One weight per context — never mix Fill and Regular in the same component.
Result icons use Fill — unmistakably clear at a glance.

---

### Lucide → Phosphor Migration Table

| Lucide Icon | Phosphor Equivalent | Weight |
|---|---|---|
| CheckCircle2 | CheckCircle | Fill |
| XCircle | XCircle | Fill |
| AlertTriangle | WarningCircle | Fill |
| ChevronDown | CaretDown | Regular |
| ChevronRight | CaretRight | Regular |
| Search | MagnifyingGlass | Regular |
| Printer | Printer | Regular |
| Share2 | ShareNetwork | Regular |
| Menu | List | Regular |
| X (close) | X | Regular |
| Info | Info | Regular |
| ExternalLink | ArrowSquareOut | Regular |
| Calendar | CalendarBlank | Regular |
| MapPin | MapPin | Regular |
| Phone | Phone | Regular |
| Mail | Envelope | Regular |
| FileText | FileText | Regular |
| Users | Users | Regular |
| Vote | CheckSquare | Regular |

---

### Icon Sizing — Locked Values Only

Allowed icon sizes (no arbitrary values):
```
w-4 h-4  → 16px  — inline with button text
w-5 h-5  → 20px  — standard inline, nav, small card
w-6 h-6  → 24px  — standard standalone, result indicators
w-8 h-8  → 32px  — hero decorative, large card accent
w-12 h-12 → 48px — empty state
```

Any w-[18px] or w-[22px] arbitrary icon size = violation. Use nearest locked size.

---

### Icon Accessibility

- Icon + text: No aria-label needed (text provides context)
- Icon only (button): aria-label REQUIRED always
- Decorative icon: aria-hidden="true" — screen readers skip it
- Result indicator icons: aria-hidden="true" — text beside it already conveys meaning

---

## ICONS LOOP — Task Breakdown

### I1 — Library Migration
- [ ] npm install @phosphor-icons/react
- [ ] npm uninstall lucide-react (and any other icon libraries found in audit)
- [ ] Global find-replace: from 'lucide-react' → from '@phosphor-icons/react'
- [ ] Fix each icon name using migration table above
- [ ] npm run build — confirm zero import errors after migration

### I2 — Size & Weight Standardization
- [ ] Find all icon instances with non-standard sizes — replace with locked sizes
- [ ] Find all icon instances with non-standard weights — standardize per specification table
- [ ] Find all result indicator icons — confirm they use weight="fill"
- [ ] Find all navigation icons — confirm weight="regular" and w-5 h-5
- [ ] Find all empty state icons — confirm w-12 h-12 weight="light"

### I3 — Accessibility Pass
- [ ] Every icon-only <button>: aria-label present
- [ ] Every decorative icon: aria-hidden="true" present
- [ ] Every result card icon: aria-hidden="true"
- [ ] Tab through all pages — every icon button is reachable and announced correctly

### I4 — Optical Alignment Pass
- [ ] Open site in browser at 375px
- [ ] Inspect every icon+text pair — if icon floats, add translate-y-[1px] correction
- [ ] Check at 768px and 1280px — re-check same pairs
- [ ] Focus: Nav icons, FAQ +/× icons, result card icons, step icons

---

## Reusable Component Reference

Define these as shared components to guarantee uniformity everywhere:

```tsx
// EligibilityBadge — used on both result cards
<span className="flex items-center gap-1.5">
  <CheckCircle
    weight="fill"
    className="w-5 h-5 text-green-600 flex-shrink-0"
    aria-hidden="true"
  />
  <span className="text-sm font-semibold text-green-700">Within Range</span>
</span>

// SectionLabel — used on How It Works steps
<span className="flex items-center gap-2 mb-3">
  <span className="w-8 h-8 rounded-full bg-blue-600 text-white
    flex items-center justify-center text-sm font-bold flex-shrink-0">
    1
  </span>
  <h3 className="text-xl font-semibold text-gray-900">Enter Your Date of Birth</h3>
</span>

// MetaInfo — used in footer and contact page
<span className="flex items-center gap-2 text-sm text-gray-500">
  <Envelope weight="regular" className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
  <span>election@himamaylan.gov.ph</span>
</span>
```

---

## Exit Gate — Typography & Icons Loop

All must pass before this loop is closed:

| Gate | Check | Pass Condition |
|---|---|---|
| Font loading | DevTools Network tab | Only self-hosted WOFF2 — zero external font requests |
| Font family | All components | Geist everywhere — zero system font fallback rendering |
| Inter usage | Codebase search | Zero occurrences of Inter |
| Type scale | All components | Only locked scale classes — zero text-[arbitrary] |
| Heading semantics | All pages | One <h1> per page, no skipped levels |
| Labels | All forms | <label htmlFor> present — zero placeholder-as-label |
| Eyebrow count | Inspect all pages | Not more than 1 per 3 sections |
| Icon library | package.json | Only @phosphor-icons/react — no other icon packages |
| Icon sizes | All instances | Only 5 locked sizes — zero arbitrary w-[...] on icons |
| Icon weights | All instances | Regular everywhere + Fill on result indicators only |
| Aria labels | Icon-only buttons | Present on all |
| Decorative icons | All instances | aria-hidden="true" present |
| Visual alignment | Browser at 375px | All icon+text pairs optically aligned |
| npm run build | Terminal | Zero errors |
| npm run lint | Terminal | Zero warnings |

---

## Baton Pass Protocol

```
✅ TYPOGRAPHY & ICONS Loop — Quality Confirmed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Font: Geist via next/font:           PASS / FAIL
Zero external font requests:         PASS / FAIL
Zero text-[arbitrary] classes:       PASS / FAIL
One <h1> per page, no skips:         PASS / FAIL
All forms: <label htmlFor>:          PASS / FAIL
Zero lucide-react / other libs:      PASS / FAIL
Icons: only 5 locked sizes:          PASS / FAIL
Result icons: weight="fill":         PASS / FAIL
aria-hidden on decorative icons:     PASS / FAIL
aria-label on icon-only buttons:     PASS / FAIL
Optical alignment verified:          PASS / FAIL
npm run lint:                        PASS / FAIL
npm run build:                       PASS / FAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Baton pass to REDESIGN LOOP R2:      YES / NO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

TYPOGRAPHY & ICONS LOOP PLAN — Himamaylan City COMELEC 2026 SK Age & Eligibility Checker
Skills: typography-first · design-taste-frontend · frontend-design · iconsax-library · tailwind-patterns · frontend-ui-engineering
Run this loop BEFORE REDESIGN LOOP R2. Typography and icon foundations must be solid first.
