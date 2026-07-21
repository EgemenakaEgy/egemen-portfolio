"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Über mich", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Erfahrung", href: "/#experience" },
  { label: "Projekte", href: "/#projects" },
  { label: "Lebenslauf", href: "/#resume" },
  { label: "Kontakt", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // rAF-Throttling: Scroll-Events feuern sehr häufig, aber wir müssen
    // den Zustand höchstens einmal pro Frame aktualisieren.
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-100/80 shadow-sm shadow-slate-200/40"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Hauptnavigation"
        className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between"
        style={{ height: "68px" }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="text-[16px] font-semibold text-slate-900 tracking-[-0.02em] hover:text-blue-600 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
        >
          Egemen Demir
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13.5px] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 tracking-wide py-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-slate-900 after:transition-all after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-[22px] flex flex-col gap-[5px]" aria-hidden="true">
            <span
              className={`block h-px bg-current origin-center transition-all duration-250 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-250 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current origin-center transition-all duration-250 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-slate-100`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-slate-700 hover:text-blue-600 transition-colors py-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
