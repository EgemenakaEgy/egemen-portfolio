"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as RefObject<HTMLElement>}
      className="py-20 sm:py-24 md:py-28 lg:py-36 bg-white border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <SectionEyebrow label="Über mich" style={revealStyle(inView)} />

          {/* Right — content */}
          <div className="transition-all duration-700 min-w-0" style={revealStyle(inView, 150)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-8 text-balance">
              Technik verstehen.{" "}
              <span className="text-slate-500 font-normal">
                Lösungen liefern.
              </span>
            </h2>

            <div className="space-y-5 max-w-2xl">
              <p className="text-[16.5px] text-slate-600 leading-[1.8] text-pretty">
                Ich studiere Digital Media Systems (Bachelor) an der THM
                Mittelhessen mit Vertiefung Management und technischem Fokus.
                Parallel sammle ich praktische Erfahrung in Webentwicklung,
                IT-Projekten, technischem Support, Tutorentätigkeit und im
                Kundenkontakt.
              </p>
              <p className="text-[16.5px] text-slate-600 leading-[1.8] text-pretty">
                Ich arbeite strukturiert und bin dort produktiv, wo Technik und
                Kommunikation zusammenkommen. Aktuell suche ich eine
                Werkstudentenstelle in IT-Support, IT-Administration,
                Webentwicklung oder Projektmanagement — verfügbar in Gießen
                und Frankfurt am Main.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
