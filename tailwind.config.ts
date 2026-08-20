import type { Config } from "tailwindcss";

/**
 * Himamaylan City COMELEC — Design Tokens
 *
 * Swiss/International Typographic system. Three principles govern every token:
 *   1. Hairline rules, not shadows. Elevation is reserved for genuinely floating UI.
 *   2. Tight radii. Government documents have square corners.
 *   3. Every colour carries a verified contrast ratio and a single assigned job.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Neutral ink — one cool-grey family, no warm/cool mixing. */
        ink: {
          950: "#0B1F33", // 16.7:1 — headings
          900: "#1E293B",
          800: "#334155", // 10.4:1 — body copy
          700: "#475569", //  7.6:1 — secondary copy
          /*
           * Muted text. Verified against all three light surfaces, not just
           * white: #64748B scored 4.76 on white but only 4.48 on surface-subtle
           * and 4.20 on surface-sunken, so it failed AA everywhere it was
           * actually used. #5C6B80 clears 4.5 on all three.
           */
          600: "#5C6B80", //  5.4 white / 5.1 subtle / 4.8 sunken
          400: "#94A3B8", // decorative marks only — 2.6:1, never text
        },

        /* Institutional navy — the identity colour. */
        navy: {
          950: "#06182B",
          900: "#0A2540", // 15.5:1 — masthead, footer, official surfaces
          800: "#123A63", // 11.6:1
          700: "#14508C", //  8.2:1 — interactive: links, primary buttons
          600: "#1A5FA8", //  6.5:1 — hover
          200: "#BBD0E5",
          100: "#DCE7F2",
          50: "#EFF5FB",
        },

        /* City orange — the accent. Each step has ONE permitted use. */
        orange: {
          900: "#7C2D12",
          800: "#8A3111",
          700: "#9A3412", //  7.3:1 — orange text on orange tint
          600: "#C2410C", //  5.2:1 — action: text on white, white text on fill
          500: "#EA580C", //  3.6:1 — MARKER ONLY: rules, indicators. Never text.
          400: "#F97316", //  5.5:1 on navy — orange text on dark surfaces
          300: "#FDBA74",
          200: "#FED7AA",
          100: "#FFEDD5",
          50: "#FFF7ED",
        },

        /* Rules and borders. */
        line: {
          DEFAULT: "#E2E8F0", // decorative hairline
          strong: "#CBD5E1", // section divider
          control: "#748699", // 3.7:1 — form controls (WCAG non-text minimum)
        },

        /* Status. Always paired with an icon and a text label — never colour alone. */
        status: {
          success: "#15803D",
          "success-bg": "#F0FDF4",
          "success-line": "#BBF7D0",
          danger: "#B91C1C",
          "danger-bg": "#FEF2F2",
          "danger-line": "#FECACA",
          warning: "#B45309",
          "warning-bg": "#FFFBEB",
          "warning-line": "#FDE68A",
          info: "#14508C",
          "info-bg": "#EFF5FB",
          "info-line": "#BBD0E5",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F7F8FA",
          sunken: "#EEF1F5",
        },
      },

      fontFamily: {
        /* Lexend: engineered for reading proficiency — headings and UI labels. */
        display: ["var(--font-display)", "Lexend", "system-ui", "sans-serif"],
        /*
         * Source Sans 3: civic workhorse, excellent at small sizes — body copy.
         * The inner quotes are required: a CSS <family-name> containing spaces
         * must be quoted, and `Source Sans 3` unquoted is invalid because the
         * `3` segment is not a valid CSS identifier. An invalid family name
         * voids the WHOLE font-family declaration, silently dropping the page
         * back to the browser's default serif.
         */
        sans: ['var(--font-sans)', '"Source Sans 3"', "system-ui", "sans-serif"],
      },

      fontSize: {
        /* Deliberate scale. Ratio ~1.25, capped — no 6xl display type. */
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.04em" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.625rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.005em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.015em" }],
        "4xl": ["2.25rem", { lineHeight: "2.625rem", letterSpacing: "-0.02em" }],
        "5xl": ["2.875rem", { lineHeight: "3.125rem", letterSpacing: "-0.024em" }],
      },

      borderRadius: {
        /* Square-ish. Institutional, not consumer-app. */
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.25rem",
        lg: "0.375rem",
        xl: "0.5rem",
        full: "9999px",
      },

      boxShadow: {
        /* Only for genuinely floating UI. Flat content uses borders. */
        menu: "0 4px 16px -2px rgba(11, 31, 51, 0.12), 0 1px 3px rgba(11, 31, 51, 0.08)",
        overlay: "0 16px 40px -8px rgba(11, 31, 51, 0.18)",
        none: "none",
      },

      maxWidth: {
        prose: "68ch", // ~65-75 characters
      },

      screens: {
        xs: "375px",
      },

      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;
