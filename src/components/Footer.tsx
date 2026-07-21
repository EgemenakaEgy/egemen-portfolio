import Link from "next/link";
import { GitHubMarkIcon } from "@/components/icons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/EgemenakaEgy",
    icon: <GitHubMarkIcon className="w-4 h-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/egemen-demir",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "E-Mail",
    href: "mailto:egemen.demir@mni.thm.de",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link
            href="/"
            className="text-[14px] font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
          >
            Egemen Demir
          </Link>
          <p className="text-[12.5px] text-slate-500">
            © {year} · Gießen, Deutschland
          </p>
          <div className="flex items-center gap-3 text-[12px] text-slate-400">
            <Link
              href="/impressum"
              className="hover:text-slate-600 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              Impressum
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/datenschutz"
              className="hover:text-slate-600 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              title={social.label}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 text-slate-500 border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              {social.icon}
            </a>
          ))}

          <span className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" aria-hidden="true" />

          <Link
            href="/#home"
            className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] font-medium text-slate-500 hover:text-slate-700 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
          >
            Nach oben
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
