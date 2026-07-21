"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";
import { CategoryIcon, TechIcon } from "@/components/icons";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

const COMPETENCE_LEVELS = 4;

type LeveledSkill = {
  name: string;
  /** Kompetenzstufe von 1 (Grundkenntnisse) bis 4 (sehr sicher) — keine Prozentangabe. */
  level: 1 | 2 | 3 | 4;
};

type SkillCategory =
  | { label: string; showLevel: true; skills: LeveledSkill[] }
  | { label: string; showLevel: false; skills: string[] };

const skillCategories: SkillCategory[] = [
  {
    label: "Sprachen & Web",
    showLevel: true,
    skills: [
      { name: "HTML", level: 4 },
      { name: "CSS", level: 3 },
      { name: "Java", level: 1 },
      { name: "TypeScript", level: 2 },
      { name: "SQL", level: 2 },
      { name: "Node.js", level: 2 },
    ],
  },
  {
    label: "Datenbanken & Infrastruktur",
    showLevel: true,
    skills: [
      { name: "PostgreSQL", level: 2 },
      { name: "Redis", level: 2 },
      { name: "Docker", level: 3 },
      { name: "Git", level: 3 },
    ],
  },
  {
    label: "Tools",
    showLevel: false,
    skills: [
      "GitHub",
      "WebStorm",
      "Visual Studio Code",
      "Canva",
      "Microsoft Office",
      "LaTeX",
      "Wix",
      "Figma",
    ],
  },
];

/** Dezente 4-stufige Kompetenzanzeige — bewusst ohne Prozentangabe. */
function CompetenceBar({ level }: { level: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Kompetenzstufe ${level} von ${COMPETENCE_LEVELS}`}
    >
      {Array.from({ length: COMPETENCE_LEVELS }, (_, i) => i + 1).map((segment) => (
        <span
          key={segment}
          aria-hidden="true"
          className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
            segment <= level
              ? "bg-blue-500 group-hover/skill:bg-blue-600"
              : "bg-slate-200 group-hover/skill:bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

const cardClassName =
  "group/skill h-full flex flex-col bg-white border border-slate-200 px-3 py-2.5 rounded-lg shadow-sm hover:border-blue-300 hover:shadow-md hover:shadow-blue-50/80 hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default min-w-0";

function SkillIconLabel({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-md bg-slate-50 text-slate-500 group-hover/skill:bg-blue-50 group-hover/skill:text-blue-600 transition-colors duration-200">
        <TechIcon name={name} className="w-4 h-4" />
      </span>
      <span className="text-[13px] font-medium text-slate-700 group-hover/skill:text-blue-700 transition-colors duration-200 truncate">
        {name}
      </span>
    </div>
  );
}

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
          <div className="transition-all duration-700 min-w-0" style={revealStyle(inView, 150)}>
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
                    {category.showLevel
                      ? category.skills.map((skill) => (
                          <div key={skill.name} className={cardClassName}>
                            <SkillIconLabel name={skill.name} />
                            <div className="mt-3">
                              <CompetenceBar level={skill.level} />
                            </div>
                          </div>
                        ))
                      : category.skills.map((skill) => (
                          <div key={skill} className={cardClassName}>
                            <SkillIconLabel name={skill} />
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
