"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";

const projects = [
  {
    title: "Kollaborativer SQL-Playground",
    subtitle: "Hochschulprojekt · Wirtschaftsinformatik-Praktikum",
    role: "Teammitglied mit Schwerpunkt auf kollaborativen Funktionen, Tests und Dokumentation",
    description:
      "Webanwendung für SQL- und Modellierungsaufgaben, die mehreren Nutzern ermöglicht, gemeinsam in Echtzeit zu arbeiten.",
    contributions: [
      "Integration und Tests von Echtzeit-Zusammenarbeit",
      "Mitarbeit an Kommentaren, Review-Funktionen und Versionsverlauf",
      "Technische Dokumentation",
      "Fehleranalyse und Tests im Team",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Git", "WebSockets", "Yjs"],
    featured: true,
  },
  {
    title: "Projekt-Homepage im UKGM-Umfeld",
    subtitle: "TransMIT GmbH",
    role: null,
    description:
      "Weiterentwicklung und Pflege einer bestehenden Projekt-Homepage in Abstimmung mit dem Projektteam. Überarbeitung von Inhalten und einzelnen Unterseiten.",
    contributions: [] as string[],
    tech: [] as string[],
    featured: false,
  },
  {
    title: "Kundenwebsites für Demir IT",
    subtitle: "Selbstständig · 2016–2023",
    role: null,
    description:
      "Konzeption und Umsetzung mehrerer Websites für kleinere Unternehmen. Verantwortlich für Gestaltung, Inhalte, technische Einrichtung, Kundenabstimmung und Betreuung.",
    contributions: [] as string[],
    tech: ["Wix"],
    featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
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
              Projekte
            </span>
            <div className="mt-3 w-6 h-[2px] bg-blue-600 rounded-full" />
          </div>

          {/* Right — project cards */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "100ms",
            }}
          >
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-12">
              Ausgewählte{" "}
              <span className="text-slate-400 font-normal">Arbeiten</span>
            </h2>

            <div className="space-y-6">
              {projects.map((project, i) =>
                project.featured ? (
                  <div
                    key={project.title}
                    className="transition-all duration-700"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(16px)",
                      transitionDelay: `${150 + i * 100}ms`,
                    }}
                  >
                    <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50/60 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <p className="text-[11.5px] font-semibold text-blue-600 tracking-wide uppercase mb-1">
                            {project.subtitle}
                          </p>
                          <h3 className="text-[19px] font-bold text-slate-900 tracking-tight leading-snug">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {project.role && (
                        <p className="text-[13px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 inline-block mb-4">
                          {project.role}
                        </p>
                      )}

                      <p className="text-[15px] text-slate-600 leading-[1.75] mb-5">
                        {project.description}
                      </p>

                      {project.contributions.length > 0 && (
                        <ul className="space-y-1.5 mb-5">
                          {project.contributions.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-[14px] text-slate-600 leading-[1.65]"
                            >
                              <span className="mt-[8px] shrink-0 w-1 h-1 rounded-full bg-blue-300" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[12px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    key={project.title}
                    className="transition-all duration-700"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(16px)",
                      transitionDelay: `${150 + i * 100}ms`,
                    }}
                  >
                    <div className="bg-white border border-slate-100 rounded-xl p-5 hover:border-slate-200 transition-colors duration-200">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-[16px] font-semibold text-slate-800 tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-[12px] text-slate-400 shrink-0">{project.subtitle}</span>
                      </div>

                      <p className="text-[14px] text-slate-500 leading-[1.7]">
                        {project.description}
                      </p>

                      {project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[12px] font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
