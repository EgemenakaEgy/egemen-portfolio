"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Über mich", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Erfahrung", href: "#experience" },
  { label: "Projekte", href: "#projects" },
  { label: "Lebenslauf", href: "#resume" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100/80 shadow-sm shadow-slate-100/60"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between"
        style={{ height: "68px" }}
      >
        {/* Wordmark */}
        <a
          href="#home"
          className="text-[16px] font-semibold text-slate-900 tracking-[-0.02em] hover:text-blue-600 transition-colors duration-200"
        >
          Egemen Demir
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          <div className="w-[22px] flex flex-col gap-[5px]">
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-slate-100`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
