"use client";

import { useInView } from "@/hooks/useInView";
import { memo } from "react";
import type { RefObject } from "react";
import { ExperienceIcon } from "@/components/icons";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

type ExperienceEntry = {
  title: string;
  company: string;
  context: string;
  period: string;
  tasks: string[];
  primary: boolean;
  icon: "web" | "teaching" | "business" | "event";
};

const experiences: ExperienceEntry[] = [
  {
    title: "Studentische Hilfskraft Webentwicklung",
    company: "TransMIT GmbH",
    context: "Projektumfeld UKGM",
    period: "06/2025 – 09/2025",
    tasks: [
      "Weiterentwicklung und inhaltliche Pflege einer Projekt-Homepage auf Basis eines bestehenden Templates",
      "Gestalterische Überarbeitung einzelner Unterseiten",
      "Abstimmung mit dem Projektteam",
    ],
    primary: true,
    icon: "web",
  },
  {
    title: "Tutor für Betriebswirtschaftslehre",
    company: "Technische Hochschule Mittelhessen",
    context: "",
    period: "seit 04/2025",
    tasks: [
      "Eigenständige Durchführung von Tutorien",
      "Vermittlung von Lehrinhalten",
      "Klausurvorbereitung mit Studierenden",
      "Kontrolle und Besprechung von Abgaben",
      "Unterstützung des Professors",
      "Bei Bedarf selbstständige Leitung von Lehrveranstaltungen",
    ],
    primary: true,
    icon: "teaching",
  },
  {
    title: "Inhaber – IT-Dienstleistungen und Webentwicklung",
    company: "Demir IT",
    context: "Selbstständig",
    period: "2016 – 2023",
    tasks: [
      "Konzeption, Gestaltung und Umsetzung von ca. 6–7 Kundenwebsites (überwiegend mit Wix)",
      "Kundenberatung und inhaltliche Einrichtung",
      "Unterstützung bei Domain-Themen",
      "Technischer Support und Fehlerbehebung",
    ],
    primary: true,
    icon: "business",
  },
  {
    title: "Eventmanagement-Leiter",
    company: "Fachschaft MNI",
    context: "Studentisches Ehrenamt",
    period: "2021 – 2024",
    tasks: [
      "Planung und Organisation studentischer Veranstaltungen",
      "Koordination von Teams",
      "Abstimmung mit internen und externen Beteiligten",
      "Budget- und Ablaufplanung",
    ],
    primary: false,
    icon: "event",
  },
];

const ExperienceCard = memo(function ExperienceCard({
  entry,
  delay,
  inView,
}: {
  entry: ExperienceEntry;
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      className="relative flex gap-4 sm:gap-5 group transition-all duration-700"
      style={revealStyle(inView, delay)}
    >
      {/* Marker */}
      <div
        className={`relative z-10 shrink-0 w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 ${
          entry.primary
            ? "border-slate-200 text-slate-500 group-hover:border-blue-300 group-hover:text-blue-600 group-hover:shadow-md group-hover:shadow-blue-100/60"
            : "border-slate-100 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-500"
        }`}
      >
        <ExperienceIcon type={entry.icon} className="w-4.5 h-4.5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1.5 pb-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
          <h3
            className={
              entry.primary
                ? "text-[17px] font-semibold text-slate-900 tracking-tight leading-snug"
                : "text-[15px] font-medium text-slate-600 tracking-tight leading-snug"
            }
          >
            {entry.title}
          </h3>
          <span className="text-[12.5px] font-medium text-slate-500 shrink-0">
            {entry.period}
          </span>
        </div>

        <p
          className={
            entry.primary
              ? "text-[13.5px] font-medium text-blue-600 mb-3"
              : "text-[13px] text-slate-500 mb-2.5"
          }
        >
          {entry.company}
          {entry.context && (
            <span className={entry.primary ? "text-slate-500 font-normal" : undefined}>
              {" "}
              · {entry.context}
            </span>
          )}
        </p>

        <ul className={entry.primary ? "space-y-1.5" : "space-y-1"}>
          {entry.tasks.map((task) => (
            <li
              key={task}
              className={
                entry.primary
                  ? "flex gap-2 text-[14.5px] text-slate-600 leading-[1.65] text-pretty"
                  : "flex gap-2 text-[13.5px] text-slate-500 leading-[1.6] text-pretty"
              }
            >
              <span
                className={`mt-[7px] shrink-0 w-1 h-1 rounded-full ${
                  entry.primary ? "bg-slate-300" : "bg-slate-200"
                }`}
              />
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as RefObject<HTMLElement>}
      className="py-20 sm:py-24 md:py-28 lg:py-36 bg-white border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <SectionEyebrow label="Erfahrung" style={revealStyle(inView)} />

          {/* Right — timeline */}
          <div className="transition-all duration-700" style={revealStyle(inView, 100)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-12 text-balance">
              Berufliche{" "}
              <span className="text-slate-500 font-normal">Stationen</span>
            </h2>

            <div className="relative">
              {/* Durchgehende Timeline-Linie hinter den Markern */}
              <div
                className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-slate-100"
                aria-hidden="true"
              />

              <div className="space-y-11">
                {experiences.map((entry, i) => (
                  <ExperienceCard
                    key={entry.title}
                    entry={entry}
                    delay={150 + i * 100}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
