import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-navy-950 on-dark text-white print:hidden">
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <p className="font-display text-xl">Himamaylan NLE 2028</p>
        <p className="mt-3 text-navy-100 max-w-2xl">
          A voter information guide for the May 8, 2028 National and Local
          Elections. Confirm your record and current instructions with COMELEC.
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-4 mt-7"
        >
          {[
            ["/learn", "Learning Hub"],
            ["/references", "Official sources"],
            ["/contact", "Contact & assistance"],
            ["/disclaimer", "Disclaimer & privacy"],
            ["/faq", "FAQs"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="underline underline-offset-4"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-sm text-navy-200">
          Information reviewed November 15, 2026 · Age checks are not legal
          certification.
        </p>
      </div>
    </footer>
  );
}
