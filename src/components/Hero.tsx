"use client";

import { useEffect, useState } from "react";
import { GitHubMarkIcon } from "@/components/icons";

const GITHUB_URL = "https://github.com/EgemenakaEgy";

const roles = [
  "IT-Support",
  "IT-Administration",
  "Webentwicklung",
  "Projektmanagement",
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
          opacity: 0.35,
        }}
      />

      {/* Fade out grid at edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white opacity-70" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 xl:gap-20 items-center py-12 sm:py-16 md:py-20 lg:py-24">

          {/* Left column */}
          <div
            className={`flex flex-col gap-6 transition-none ${
              mounted ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {/* Eyebrow */}
            <div>
              <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Digital Media Systems (Bachelor) · THM Mittelhessen
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-[56px] sm:text-[68px] lg:text-[80px] font-bold leading-[1.0] tracking-[-0.04em] text-slate-900">
                Egemen
              </h1>
              <h1 className="text-[56px] sm:text-[68px] lg:text-[80px] font-bold leading-[1.0] tracking-[-0.04em]">
                <span className="text-blue-600">Demir</span>
                <span className="text-slate-300">.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[18px] text-slate-500 font-light leading-relaxed text-pretty max-w-[440px]">
              Praxiserfahrung in Webentwicklung und technischem Support —
              Werkstudentenstelle gesucht&nbsp;in:
            </p>

            {/* Role chips */}
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="text-[12.5px] font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-md hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 hover:-translate-y-px transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#resume"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-[14.5px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] shadow-sm shadow-blue-200/40 hover:shadow-lg hover:shadow-blue-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
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
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-200 hover:border-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2"
              >
                Kontakt
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub-Profil ansehen (öffnet in neuem Tab)"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-200 hover:border-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2"
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
            <div className="group relative w-[280px] h-[370px]">
              {/* Card */}
              <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-200/50 bg-gradient-to-br from-slate-50 via-blue-50/60 to-blue-100/80 flex items-center justify-center relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-slate-300/40 group-hover:border-slate-300/80">
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

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-5 bg-white border border-slate-100/80 rounded-xl px-4 py-2.5 shadow-md shadow-slate-200/40 animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em]">
                  Verfügbar als
                </p>
                <p className="text-[13px] font-semibold text-slate-800 mt-0.5">
                  Werkstudent
                </p>
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-3 -right-4 bg-blue-600 text-white rounded-xl px-3.5 py-2 shadow-md shadow-blue-300/30 animate-float"
                style={{ animationDelay: "1.1s" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide opacity-80">
                  Standort
                </p>
                <p className="text-[12px] font-bold">Gießen · Frankfurt</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll hint — absolute within section so bottom-10 is vs. viewport bottom */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none ${
          mounted ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "800ms" }}
        aria-hidden="true"
      >
        <span className="text-[11px] font-medium text-slate-500 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  );
}
