"use client";

import { useInView } from "@/hooks/useInView";
import { memo, useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  GitHubMarkIcon,
  ImagePlaceholderIcon,
  TechIcon,
} from "@/components/icons";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

type Project = {
  title: string;
  subtitle: string;
  role: string | null;
  description: string;
  contributions: string[];
  tech: string[];
  // TODO: Sobald verfügbar, echte Links ergänzen (keine Platzhalter-URLs).
  // Buttons erscheinen automatisch, sobald hier eine URL eingetragen ist.
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
  },
  {
    title: "Projekt-Homepage im UKGM-Umfeld",
    subtitle: "TransMIT GmbH",
    role: null,
    description:
      "Weiterentwicklung und Pflege einer bestehenden Projekt-Homepage in Abstimmung mit dem Projektteam. Überarbeitung von Inhalten und einzelnen Unterseiten.",
    contributions: [],
    tech: [],
  },
  {
    title: "Kundenwebsites für Demir IT",
    subtitle: "Selbstständig · 2016–2023",
    role: null,
    description:
      "Konzeption und Umsetzung mehrerer Websites für kleinere Unternehmen. Verantwortlich für Gestaltung, Inhalte, technische Einrichtung, Kundenabstimmung und Betreuung.",
    contributions: [],
    tech: ["Wix"],
  },
];

/**
 * Beschreibungstext, der auf 3 Zeilen begrenzt wird. Der "Mehr anzeigen"-
 * Toggle erscheint nur, wenn der Text tatsächlich überläuft.
 */
function ClampedDescription({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || expanded) return;

    const check = () => setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [text, expanded]);

  return (
    <div className="mb-5">
      <p
        ref={ref}
        className={`text-[15px] text-slate-600 leading-[1.75] text-pretty ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {text}
      </p>
      {isOverflowing && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
        >
          {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
          <ChevronDownIcon
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

const ProjectLinkButton = memo(function ProjectLinkButton({
  href,
  icon,
  label,
  ariaLabel,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium px-3.5 py-2 rounded-lg text-[13px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 focus-visible:ring-offset-2"
    >
      {icon}
      {label}
    </a>
  );
});

const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.githubUrl || project.demoUrl);

  return (
    <article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm shadow-slate-200/40 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 hover:ring-1 hover:ring-blue-100/60 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Bild-Platzhalter */}
      <div className="relative h-44 sm:h-52 md:h-56 bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/60 border-b border-slate-100 flex items-center justify-center overflow-hidden">
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-200/25 blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
          aria-hidden="true"
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

      <div className="p-6 sm:p-8">
        <div className="mb-4">
          <p className="text-[11.5px] font-semibold text-blue-600 tracking-wide uppercase mb-1.5">
            {project.subtitle}
          </p>
          <h3 className="text-[20px] sm:text-[21px] font-bold text-slate-900 tracking-tight leading-snug text-balance">
            {project.title}
          </h3>
        </div>

        {project.role && (
          <p className="text-[13px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-3 py-1.5 inline-block mb-4 text-pretty">
            {project.role}
          </p>
        )}

        <ClampedDescription text={project.description} />

        {project.contributions.length > 0 && (
          <ul className="space-y-2 mb-6">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-2.5 text-[14px] text-slate-600 leading-[1.6]">
                <CheckIcon className="w-4 h-4 mt-[1px] shrink-0 text-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 pt-5 border-t border-slate-100">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center h-7 gap-1.5 text-[12px] font-medium text-slate-600 bg-slate-50 border border-slate-200 pl-2 pr-2.5 rounded-md"
              >
                <TechIcon name={t} className="w-3 h-3 text-slate-400" />
                {t}
              </span>
            ))}
          </div>
        )}

        {hasLinks && (
          <div className="flex flex-wrap gap-2.5">
            {project.githubUrl && (
              <ProjectLinkButton
                href={project.githubUrl}
                icon={<GitHubMarkIcon className="w-3.5 h-3.5" />}
                label="GitHub"
                ariaLabel={`GitHub-Repository von „${project.title}“ öffnen (neuer Tab)`}
              />
            )}
            {project.demoUrl && (
              <ProjectLinkButton
                href={project.demoUrl}
                icon={<ExternalLinkIcon className="w-3.5 h-3.5" />}
                label="Live-Demo"
                ariaLabel={`Live-Demo von „${project.title}“ öffnen (neuer Tab)`}
              />
            )}
          </div>
        )}
      </div>
    </article>
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

            <div className="space-y-8">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="transition-all duration-700"
                  style={revealStyle(inView, 150 + i * 100)}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
