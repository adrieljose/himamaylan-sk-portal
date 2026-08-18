# Himamaylan City SK 2026 Civic Portal — Features & Capabilities

**Live Production URL:** [https://himamaylan-sk-portal.vercel.app](https://himamaylan-sk-portal.vercel.app)  
**GitHub Repository:** [https://github.com/adrieljose/himamaylan-sk-portal](https://github.com/adrieljose/himamaylan-sk-portal)  
**Statutory Target:** November 2, 2026 Synchronized Barangay & Sangguniang Kabataan Elections (BSKE)

---

## 🏛️ 1. Core Civic Features & Interactive Tools

### ⚡ Statutory Age & Eligibility Calculator (`/checker`)
- **Precise Date-of-Birth Verification:** Accurately computes exact age in years, months, and days down to the statutory election cutoff date (**November 2, 2026**).
- **Dual Status Evaluation:**
  - **SK Youth Voter:** Evaluates eligibility for ages **15 to 30** under Republic Act No. 10742.
  - **SK Candidate (Chairperson & Kagawad):** Evaluates eligibility for ages **18 to 24** under Republic Act No. 11768.
- **Boundary Condition Detection:** Flags exact birthdate thresholds (e.g., turning 18 or 24 on Election Day) with clear explanations.
- **Fast Tab Switching:** Instant, persistent view toggling between Detailed Results, Eligibility Timeline, and Step-by-Step Questionnaire with zero reload lag.
- **19 Official Barangays Selector:** Integrated Himamaylan City barangay lookup with instant search, filtering by zone (Poblacion, Coastal, Inland/Upland), and precinct info.
- **Printable Certificate/Summary:** Clean, printable format of the user's eligibility assessment for personal reference or voter registration preparation.
- **Shareable Results:** Instant clipboard copying and web share integration with privacy-first parameters.

---

## 🗺️ 2. Official Barangays Directory (`/barangays`)
- **Complete 19 Barangays Database:** Comprehensive directory covering all official barangays in Himamaylan City (5th District, Negros Occidental):
  - *Aguisan, Buenavista, Cabadiangan, Cabanbanan, Carabalan, Caradio-an, Libacao, Mambagaton, Mahalang, Nabali-an, San Antonio, Sara-et, Su-ay, Talaban, To-oy, Poblacion 1, Poblacion 2, Poblacion 3, Poblacion 4*.
- **Interactive Search & Filter:**
  - Real-time search by barangay name.
  - Filter by geographic type: **All (19)**, **Poblacion**, **Coastal**, and **Inland / Upland**.
- **Governance Metrics:** Details the statutory positions to be elected per barangay (**1 SK Chairperson + 7 SK Kagawad**).

---

## 📜 3. Educational & Electoral Resource Pages

### ⚖️ Qualifications & Disqualifications (`/qualifications`)
- **Voter Qualifications Matrix:** Complete statutory rules for Katipunan ng Kabataan members (Philippine citizenship, 6-month residency, age requirements).
- **Candidate Qualifications & Disqualifications:** Clear breakdown of Republic Act No. 10742 as amended by RA 11768:
  - Strict **Anti-Dynasty Clause** (prohibiting relationships up to the 2nd civil degree of consanguinity or affinity to incumbent elective officials).
  - Literacy, residency, moral turpitude, and conviction disqualifications.

### 📅 Election Timetable & Roadmap (`/election-info`)
- **Official BSKE Milestones:** Chronological timeline covering Voter Registration, Certificate of Candidacy (COC) Filing, Regulated Campaign Period, and Election Day.
- **SK Organizational Structure:** Visual hierarchy showing the Sangguniang Kabataan Council (Chairperson, Kagawads, appointed Secretary & Treasurer).
- **Key Mandates & Duties:** Highlights the 4 major pillars of youth governance (CBYDP, 10% Youth Fund Autonomy, Katipunan ng Kabataan Assemblies, Socio-Civic Programs).

### ❓ Frequently Asked Questions (`/faq`)
- **Categorized Accordions:** High-priority questions for first-time voters and aspiring youth candidates.
- **Searchable Topics:** Registration requirements, voter reactivation, candidate age limits, anti-dynasty rules, and appointed officer qualifications.

### 📚 Statutory References (`/references`)
- **Legal Foundations:** Direct citations and downloadable statutory references for **Republic Act No. 10742** (SK Reform Act of 2015) and **Republic Act No. 11768** (2022 SK Amendments).

### 📞 Contact & Public Assistance (`/contact`)
- **Himamaylan City Election Office Directory:** Official physical address at Himamaylan City Hall, official contact numbers, email addresses, and public service hours.

---

## 🔒 4. Privacy, Security & Compliance

- **100% Client-Side & Private:** All birthdates, residency inputs, and calculations are computed locally inside the user's browser without database logging or server storage.
- **Comprehensive Statutory Disclaimers:** Explicit civic notices on every page clarifying that calculations serve as informational guides, with official COMELEC records and legal resolutions prevailing.
- **Automated Security Headers:** Configured with `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy` controls.

---

## 🎨 5. UI/UX & Design System

- **Official Civic Aesthetic:** Tailored color palette inspired by Philippine electoral and government standards (COMELEC Navy Blue `#0a2540`, Rich Gold, Slate, and Emerald accents).
- **Solid Filled Phosphor Icons:** Unified design language utilizing `@phosphor-icons/react` filled icon variants (`weight="fill"`) across all navigation, badges, cards, and buttons.
- **Fully Responsive & Touch-Optimized:** Mobile-first architecture with responsive headers, touch targets (minimum 44px), and adaptive typography powered by **Geist Sans** and **Geist Mono**.
- **WCAG 2.2 AAA Accessibility:** Skip-to-main-content navigation links, screen-reader semantic landmarks (`aria-hidden`, `aria-label`, `<nav>`, `<main>`, `<header>`, `<footer>`), and high-contrast color ratios.

---

## 💻 6. Technical Architecture

| Technology | Specification |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS v3.4 with custom design tokens |
| **Icons** | Phosphor Icons (`@phosphor-icons/react`) |
| **Rendering** | 100% Prerendered Static Content (SSG) |
| **Hosting & CI/CD**| Vercel Production Deployment + GitHub Repository Sync |
