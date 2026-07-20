"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";

const skillCategories = [
  {
    label: "Sprachen & Web",
    skills: ["HTML", "CSS", "Java", "TypeScript", "SQL", "Node.js"],
  },
  {
    label: "Datenbanken & Infrastruktur",
    skills: ["PostgreSQL", "Redis", "Docker", "Git"],
  },
  {
    label: "Tools",
    skills: [
      "GitHub",
      "WebStorm",
      "Visual Studio Code",
      "Figma",
      "Canva",
      "Microsoft Office",
      "LaTeX",
      "Wix",
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as RefObject<HTMLElement>}
      className="py-24 lg:py-36 bg-slate-50/60 border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <span className="text-[11px] font-bold text-blue-600 tracking-[0.18em] uppercase">
              Skills
            </span>
            <div className="mt-3 w-6 h-[2px] bg-blue-600 rounded-full" />
          </div>

          {/* Right — content */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "150ms",
            }}
          >
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-12">
              Technologien &{" "}
              <span className="text-slate-400 font-normal">Werkzeuge</span>
            </h2>

            <div className="space-y-10">
              {skillCategories.map((category, i) => (
                <div
                  key={category.label}
                  className="transition-all duration-700"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${200 + i * 100}ms`,
                  }}
                >
                  <p className="text-[11.5px] font-semibold text-slate-400 tracking-[0.14em] uppercase mb-3">
                    {category.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[13.5px] font-medium text-slate-700 bg-white border border-slate-200 px-3.5 py-2 rounded-lg hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/60 transition-all duration-200 cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
