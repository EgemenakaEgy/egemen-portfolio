"use client";

import { useEffect, useState } from "react";
import { GitHubMarkIcon } from "@/components/icons";

const GITHUB_URL = "https://github.com/EgemenakaEgy";

const roles = [
  "Softwareentwicklung",
  "Webentwicklung",
  "Full-Stack-Entwicklung",
  "IT-Support",
  "IT-Administration",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/50 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 w-full min-w-0 pt-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 xl:gap-20 items-center py-12 sm:py-16 md:py-20 lg:py-24">

          {/* Left column */}
          <div
            className={`flex flex-col gap-6 min-w-0 transition-none ${
              mounted ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {/* Headline */}
            <h1 className="space-y-1">
              <span className="block text-[56px] sm:text-[68px] lg:text-[80px] font-bold leading-[1.0] tracking-[-0.04em] text-slate-900">
                Egemen
              </span>
              <span className="block text-[56px] sm:text-[68px] lg:text-[80px] font-bold leading-[1.0] tracking-[-0.04em]">
                <span className="text-blue-600">Demir</span>
                <span className="text-slate-300">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[18px] text-slate-500 leading-relaxed text-pretty max-w-[440px]">
              Praxiserfahrung in Webentwicklung und technischem Support.
              Aktuell suche ich eine Werkstudentenstelle in Software- und
              Webentwicklung oder IT.
            </p>

            {/* Role chips */}
            <div className="flex flex-col gap-2.5 min-w-0">
              <p className="text-[11.5px] font-semibold text-slate-400 tracking-[0.14em] uppercase">
                Tätigkeitsbereiche
              </p>
              <div className="flex flex-wrap gap-2 min-w-0">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="text-[12.5px] font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-md hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 hover:-translate-y-px transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1 min-w-0">
              <a
                href="#resume"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 sm:min-h-0 bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-[14.5px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] shadow-sm shadow-blue-200/40 hover:shadow-lg hover:shadow-blue-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              >
                Lebenslauf ansehen
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 sm:min-h-0 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-200 hover:border-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2"
              >
                Kontakt
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub ansehen (öffnet in neuem Tab)"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11 sm:min-h-0 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-200 hover:border-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2"
              >
                <GitHubMarkIcon className="w-4 h-4" />
                GitHub ansehen
              </a>
            </div>
          </div>

          {/* Right column — photo placeholder */}
          <div
            className={`hidden lg:flex justify-end ${
              mounted ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-[260px] h-[340px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-200/50 bg-gradient-to-br from-slate-50 via-blue-50/60 to-blue-100/80 flex items-center justify-center relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-300/80">
              {/* Background blobs */}
              <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-blue-200/25 blur-xl" />
              <div className="absolute bottom-10 left-6 w-20 h-20 rounded-full bg-slate-200/35 blur-lg" />

              {/* Subtle grid inside card */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Monogram */}
              <div className="relative z-10 text-center flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-white/80 border border-blue-100 shadow-md flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600 tracking-tight">
                    ED
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 tracking-[0.15em] uppercase">
                  Foto folgt
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
