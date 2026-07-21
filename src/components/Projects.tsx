"use client";

import { useInView } from "@/hooks/useInView";
import { memo } from "react";
import Image from "next/image";
import type { ReactNode, RefObject } from "react";
import {
  CheckIcon,
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
  /** Kurzer Rollentitel, prominent als Badge dargestellt. */
  role: string;
  /** Problem / Aufgabe / Lösung / Ergebnis — jeweils 1 kurzer Satz. */
  problem: string;
  task: string;
  solution: string;
  result: string;
  /** Konkrete Beiträge/Ergebnisse als Stichpunkte. */
  highlights: string[];
  tech: string[];
  // TODO: Sobald verfügbar, echte Links ergänzen (keine Platzhalter-URLs).
  // Buttons erscheinen automatisch, sobald hier eine URL eingetragen ist.
  githubUrl?: string;
  demoUrl?: string;
  /** Nur setzen, wenn ein Repository grundsätzlich teilbar ist (kein Kunden-/NDA-Projekt). */
  repoOnRequest?: boolean;
  // TODO: Screenshot ergänzen — Datei unter public/images/projects/ ablegen und Pfad hier eintragen.
  // Ohne gesetztes `image` wird automatisch der bestehende Platzhalter angezeigt.
  image?: string;
};

const projects: Project[] = [
  {
    title: "YASEMED – Unternehmenswebsite",
    subtitle: "Demir IT · Kundenprojekt",
    role: "Konzeption & Umsetzung",
    problem:
      "Die Naturheilpraxis YaseMed benötigte einen professionellen Webauftritt, um Leistungen, Praxisschwerpunkte und Kontaktmöglichkeiten für Patientinnen und Patienten übersichtlich darzustellen.",
    task: "Verantwortlich für Konzeption, Seitenstruktur, Gestaltung, technische Umsetzung sowie die Optimierung der Inhalte und Texte für einen professionellen Webauftritt.",
    solution:
      "Vollständig eigenständig entwickelte Unternehmenswebsite für eine Naturheilpraxis — von der Konzeption bis zur technischen Umsetzung.",
    result:
      "Eine vollständige, live geschaltete Unternehmenswebsite für die Naturheilpraxis YaseMed mit Leistungsübersicht, Praxisvorstellung und Kontaktmöglichkeiten.",
    highlights: [
      "Konzeption der Seitenstruktur und Navigation",
      "Inhaltliche Ausarbeitung von Leistungen und Praxisvorstellung",
      "Individuelles visuelles Design",
      "Technische Umsetzung und Konfiguration",
      "Optimierung von Inhalten und Texten für einen professionellen Webauftritt",
    ],
    tech: ["Wix", "Responsive Design", "SEO", "Content-Optimierung"],
    demoUrl: "https://yasemed.de",
    image: "/images/projects/yasemed.de.png",
  },
  {
    title: "SQL Playground",
    subtitle: "Hochschulprojekt · Wirtschaftsinformatik-Praktikum",
    role: "Teammitglied",
    problem:
      "Für das Hochschulprojekt sollte eine kollaborative Webanwendung für SQL-Übungen mit gemeinsamem Editor, Kommentaren, Review-System und Versionsverwaltung entstehen.",
    task: "Schwerpunkt auf kollaborativen Funktionen, Tests und Dokumentation im Team.",
    solution:
      "Beitrag zu Echtzeit-Zusammenarbeit sowie zu Kommentar-, Review- und Versionsverlauf-Funktionen, dazu technische Dokumentation und Fehleranalyse im Team.",
    result:
      "Eine im Hochschulprojekt eingesetzte, kollaborative Webanwendung für SQL-Übungen mit gemeinsamem Editor, Kommentaren, Review-System und Versionsverwaltung.",
    highlights: [
      "Integration und Tests von Echtzeit-Zusammenarbeit",
      "Mitarbeit an Kommentaren, Review-Funktionen und Versionsverlauf",
      "Technische Dokumentation",
      "Fehleranalyse und Tests im Team",
    ],
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    repoOnRequest: true,
    image: "/images/projects/projekt.png",
  },
  {
    title: "Projekt-Homepage im UKGM-Umfeld",
    subtitle: "TransMIT GmbH",
    role: "Studentische Hilfskraft Webentwicklung",
    problem:
      "Eine bestehende Projekt-Homepage im UKGM-Umfeld sollte auf Basis eines bestehenden Templates inhaltlich und gestalterisch weiterentwickelt werden.",
    task: "Weiterentwicklung und Pflege einer bestehenden Projekt-Homepage in Abstimmung mit dem Projektteam.",
    solution:
      "Inhaltliche Pflege und gestalterische Überarbeitung einzelner Unterseiten auf Basis des bestehenden Templates.",
    result:
      "Eine inhaltlich aktualisierte, gestalterisch überarbeitete Projekt-Homepage im UKGM-Umfeld.",
    highlights: [
      "Weiterentwicklung und inhaltliche Pflege einer Projekt-Homepage auf Basis eines bestehenden Templates",
      "Gestalterische Überarbeitung einzelner Unterseiten",
      "Abstimmung mit dem Projektteam",
    ],
    tech: [],
  },
  {
    title: "Kundenwebsites für Demir IT",
    subtitle: "Selbstständig · 2016–2023",
    role: "Inhaber – IT-Dienstleistungen und Webentwicklung",
    problem:
      "Kleinere Unternehmen benötigten individuelle Websites inklusive Gestaltung, technischer Einrichtung und laufender Betreuung.",
    task:
      "Konzeption und Umsetzung mehrerer Websites für kleinere Unternehmen — verantwortlich für Gestaltung, Inhalte, technische Einrichtung, Kundenabstimmung und Betreuung.",
    solution:
      "Konzeption, Gestaltung und technische Umsetzung individueller Websites inklusive Kundenberatung, Domain-Unterstützung und technischem Support.",
    result: "Rund 6–7 realisierte Kundenwebsites über einen Zeitraum von 2016 bis 2023.",
    highlights: [
      "Konzeption, Gestaltung und Umsetzung von ca. 6–7 Kundenwebsites (überwiegend mit Wix)",
      "Kundenberatung und inhaltliche Einrichtung",
      "Unterstützung bei Domain-Themen",
      "Technischer Support und Fehlerbehebung",
    ],
    tech: ["Wix"],
  },
];

function CaseStudyField({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold text-slate-500 tracking-[0.12em] uppercase mb-1">
        {label}
      </p>
      <p className="text-[14px] text-slate-600 leading-[1.7] text-pretty">{text}</p>
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
  const showRepoHint = !hasLinks && project.repoOnRequest;

  return (
    <article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm shadow-slate-200/40 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 hover:ring-1 hover:ring-blue-100/60 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Bild-Platzhalter / Screenshot */}
      <div className="relative aspect-[8/5] bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/60 border-b border-slate-100 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot der Website „${project.title}“`}
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        ) : (
          <>
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
          </>
        )}
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

        {/* Rolle — klar hervorgehoben */}
        <div className="mb-5">
          <p className="text-[11px] font-semibold text-slate-500 tracking-[0.12em] uppercase mb-1.5">
            Rolle
          </p>
          <p className="text-[13px] font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-md px-3 py-1.5 inline-block">
            {project.role}
          </p>
        </div>

        {/* Problem / Aufgabe / Lösung / Ergebnis */}
        <div className="space-y-4 mb-6">
          <CaseStudyField label="Problem" text={project.problem} />
          <CaseStudyField label="Meine Aufgabe" text={project.task} />
          <CaseStudyField label="Lösung" text={project.solution} />
          <CaseStudyField label="Ergebnis" text={project.result} />
        </div>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mb-6">
            <p className="text-[11px] font-semibold text-slate-500 tracking-[0.12em] uppercase mb-2.5">
              Highlights
            </p>
            <ul className="space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] text-slate-600 leading-[1.6]">
                  <CheckIcon className="w-4 h-4 mt-[1px] shrink-0 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologien */}
        {project.tech.length > 0 && (
          <div className="mb-6 pt-5 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-500 tracking-[0.12em] uppercase mb-2.5">
              Technologien
            </p>
            <div className="flex flex-wrap gap-2">
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
          </div>
        )}

        {/* Links — kein Button, wenn keine URL vorhanden ist */}
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
                label="Live Demo"
                ariaLabel={`Live-Demo von „${project.title}“ öffnen (neuer Tab)`}
              />
            )}
          </div>
        )}
        {showRepoHint && (
          <p className="text-[12.5px] text-slate-400 italic">Repository auf Anfrage</p>
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
