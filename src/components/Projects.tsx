"use client";

import { useInView } from "@/hooks/useInView";
import { memo } from "react";
import type { ReactNode, RefObject } from "react";
import { ExternalLinkIcon, GitHubMarkIcon, ImagePlaceholderIcon, TechIcon } from "@/components/icons";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

type Project = {
  title: string;
  subtitle: string;
  role: string | null;
  description: string;
  contributions: string[];
  tech: string[];
  featured: boolean;
  // TODO: Sobald verfügbar, echte Links ergänzen (keine Platzhalter-URLs).
  githubUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
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

const ProjectLinkButton = memo(function ProjectLinkButton({
  href,
  icon,
  label,
}: {
  href?: string;
  icon: ReactNode;
  label: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium px-3.5 py-2 rounded-lg text-[13px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 focus-visible:ring-offset-2"
      >
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="Link folgt in Kürze"
      className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-300 font-medium px-3.5 py-2 rounded-lg text-[13px] border border-slate-100 cursor-not-allowed select-none"
    >
      {icon}
      {label}
    </button>
  );
});

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as RefObject<HTMLElement>}
      className="py-20 sm:py-24 md:py-28 lg:py-36 bg-slate-50/60 border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <SectionEyebrow label="Projekte" style={revealStyle(inView)} />

          {/* Right — project cards */}
          <div className="transition-all duration-700" style={revealStyle(inView, 100)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-12 text-balance">
              Ausgewählte{" "}
              <span className="text-slate-500 font-normal">Arbeiten</span>
            </h2>

            <div className="space-y-7">
              {projects.map((project, i) =>
                project.featured ? (
                  <div
                    key={project.title}
                    className="transition-all duration-700"
                    style={revealStyle(inView, 150 + i * 100)}
                  >
                    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/70 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {/* Bild-Platzhalter */}
                      <div className="relative h-40 sm:h-48 md:h-52 bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/60 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-25"
                          style={{
                            backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
                            backgroundSize: "18px 18px",
                          }}
                        />
                        <div className="relative z-10 flex flex-col items-center gap-2 text-slate-400">
                          <span className="w-11 h-11 rounded-xl bg-white/80 border border-blue-100 shadow-sm flex items-center justify-center text-blue-400">
                            <ImagePlaceholderIcon className="w-5 h-5" />
                          </span>
                          <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                            Screenshot folgt
                          </span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div>
                            <p className="text-[11.5px] font-semibold text-blue-600 tracking-wide uppercase mb-1.5">
                              {project.subtitle}
                            </p>
                            <h3 className="text-[19px] font-bold text-slate-900 tracking-tight leading-snug text-balance">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {project.role && (
                          <p className="text-[13px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 inline-block mb-4 text-pretty">
                            {project.role}
                          </p>
                        )}

                        <p className="text-[15px] text-slate-600 leading-[1.75] text-pretty mb-5">
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
                          <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-100">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-600 bg-slate-50 border border-slate-200 pl-1.5 pr-2.5 py-1 rounded-md"
                              >
                                <TechIcon name={t} className="w-3 h-3 text-slate-400" />
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2.5">
                          <ProjectLinkButton
                            href={project.githubUrl}
                            icon={<GitHubMarkIcon className="w-3.5 h-3.5" />}
                            label="GitHub"
                          />
                          <ProjectLinkButton
                            href={project.demoUrl}
                            icon={<ExternalLinkIcon className="w-3.5 h-3.5" />}
                            label="Live-Demo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={project.title}
                    className="transition-all duration-700"
                    style={revealStyle(inView, 150 + i * 100)}
                  >
                    <div className="bg-white border border-slate-100 rounded-xl p-5 sm:p-6 hover:border-slate-200 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-[16px] font-semibold text-slate-800 tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-[12px] text-slate-500 shrink-0">{project.subtitle}</span>
                      </div>

                      <p className="text-[14px] text-slate-500 leading-[1.7] text-pretty">
                        {project.description}
                      </p>

                      {project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-500 bg-slate-50 border border-slate-100 pl-1.5 pr-2.5 py-1 rounded-md"
                            >
                              <TechIcon name={t} className="w-3 h-3 text-slate-400" />
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
