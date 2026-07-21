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
          <div className="transition-all duration-700" style={revealStyle(inView, 150)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-8 text-balance">
              Technik verstehen.{" "}
              <span className="text-slate-500 font-normal">
                Lösungen liefern.
              </span>
            </h2>

            <div className="space-y-5 max-w-2xl">
              <p className="text-[16.5px] text-slate-600 leading-[1.8] text-pretty">
                Ich studiere Digital Media Systems an der THM Mittelhessen —
                ein Studiengang, der technisches Engineering mit
                Medienwissenschaften verbindet. Parallel arbeite ich als
                Werkstudent und sammle Praxiserfahrung in IT-Support,
                Webentwicklung, IT-Administration und Projektmanagement.
              </p>
              <p className="text-[16.5px] text-slate-600 leading-[1.8] text-pretty">
                Ich arbeite strukturiert, lerne schnell und bin in Umgebungen
                produktiv, wo Technik und Kommunikation zusammenkommen. Aktuell
                suche ich Positionen, in denen ich Verantwortung übernehmen und
                meinen Beitrag sichtbar machen kann.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
