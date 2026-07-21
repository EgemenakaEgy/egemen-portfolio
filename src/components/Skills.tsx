"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";
import { CategoryIcon, TechIcon } from "@/components/icons";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

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
      className="py-20 sm:py-24 md:py-28 lg:py-36 bg-slate-50/60 border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <SectionEyebrow label="Skills" style={revealStyle(inView)} />

          {/* Right — content */}
          <div className="transition-all duration-700" style={revealStyle(inView, 150)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-12 text-balance">
              Technologien &{" "}
              <span className="text-slate-500 font-normal">Werkzeuge</span>
            </h2>

            <div className="space-y-10">
              {skillCategories.map((category, i) => (
                <div
                  key={category.label}
                  className="transition-all duration-700"
                  style={revealStyle(inView, 200 + i * 100, 12)}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-50 text-blue-500">
                      <CategoryIcon name={category.label} className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-[11.5px] font-semibold text-slate-500 tracking-[0.14em] uppercase">
                      {category.label}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill flex items-center gap-2.5 bg-white border border-slate-200 px-3 py-2.5 rounded-lg shadow-sm hover:border-blue-300 hover:shadow-md hover:shadow-blue-50/80 hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default min-w-0"
                      >
                        <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-md bg-slate-50 text-slate-500 group-hover/skill:bg-blue-50 group-hover/skill:text-blue-600 transition-colors duration-200">
                          <TechIcon name={skill} className="w-4 h-4" />
                        </span>
                        <span className="text-[13px] font-medium text-slate-700 group-hover/skill:text-blue-700 transition-colors duration-200 truncate">
                          {skill}
                        </span>
                      </div>
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
