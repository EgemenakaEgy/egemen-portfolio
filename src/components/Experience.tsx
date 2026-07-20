"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";

type ExperienceEntry = {
  title: string;
  company: string;
  context: string;
  period: string;
  tasks: string[];
  primary: boolean;
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
  },
];

function ExperienceCard({
  entry,
  delay,
  inView,
}: {
  entry: ExperienceEntry;
  delay: number;
  inView: boolean;
}) {
  if (entry.primary) {
    return (
      <div
        className="transition-all duration-700 group"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <div className="relative pl-6 border-l-2 border-slate-200 group-hover:border-blue-300 transition-colors duration-300">
          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors duration-300" />

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="text-[17px] font-semibold text-slate-900 tracking-tight leading-snug">
              {entry.title}
            </h3>
            <span className="text-[12.5px] font-medium text-slate-400 shrink-0">
              {entry.period}
            </span>
          </div>

          <p className="text-[13.5px] font-medium text-blue-600 mb-3">
            {entry.company}
            {entry.context && (
              <span className="text-slate-400 font-normal"> · {entry.context}</span>
            )}
          </p>

          <ul className="space-y-1.5">
            {entry.tasks.map((task) => (
              <li key={task} className="flex gap-2 text-[14.5px] text-slate-600 leading-[1.65]">
                <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-slate-300" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative pl-6 border-l-2 border-slate-100">
        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-200" />

        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-[15px] font-medium text-slate-600 tracking-tight leading-snug">
            {entry.title}
          </h3>
          <span className="text-[12px] font-medium text-slate-400 shrink-0">
            {entry.period}
          </span>
        </div>

        <p className="text-[13px] text-slate-400 mb-2.5">
          {entry.company}
          {entry.context && <span> · {entry.context}</span>}
        </p>

        <ul className="space-y-1">
          {entry.tasks.map((task) => (
            <li key={task} className="flex gap-2 text-[13.5px] text-slate-500 leading-[1.6]">
              <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-slate-200" />
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as RefObject<HTMLElement>}
      className="py-24 lg:py-36 bg-white border-t border-slate-100 scroll-mt-[88px]"
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
              Erfahrung
            </span>
            <div className="mt-3 w-6 h-[2px] bg-blue-600 rounded-full" />
          </div>

          {/* Right — timeline */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "100ms",
            }}
          >
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-12">
              Berufliche{" "}
              <span className="text-slate-400 font-normal">Stationen</span>
            </h2>

            <div className="space-y-10">
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
    </section>
  );
}
