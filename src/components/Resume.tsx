"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

const CV_AVAILABLE = true;
const CV_PATH = "/documents/lebenslauf-egemen-demir.pdf";

export default function Resume() {
  const { ref, inView } = useInView();

  return (
    <section
      id="resume"
      ref={ref as RefObject<HTMLElement>}
      className="py-20 sm:py-24 md:py-28 lg:py-36 bg-white border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <SectionEyebrow label="Lebenslauf" style={revealStyle(inView)} />

          {/* Right — content */}
          <div className="transition-all duration-700 min-w-0" style={revealStyle(inView, 150)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-4 text-balance">
              Lebenslauf{" "}
              <span className="text-slate-500 font-normal">herunterladen</span>
            </h2>

            <p className="text-[16px] text-slate-500 leading-relaxed text-pretty mb-10 max-w-lg">
              Der vollständige Lebenslauf steht als PDF zum Ansehen und
              Download bereit.
            </p>

            <div className="flex flex-wrap gap-3">
              {CV_AVAILABLE ? (
                <>
                  <a
                    href={CV_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lebenslauf als PDF ansehen (öffnet in neuem Tab)"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-[14.5px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98] hover:shadow-lg hover:shadow-blue-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                  >
                    Lebenslauf ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={CV_PATH}
                    download="Lebenslauf-Egemen-Demir.pdf"
                    aria-label="Lebenslauf als PDF herunterladen"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-200 hover:border-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-2"
                  >
                    PDF herunterladen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 bg-slate-100 text-slate-400 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] cursor-not-allowed select-none"
                  >
                    Lebenslauf ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 bg-white text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-100 cursor-not-allowed select-none"
                  >
                    PDF herunterladen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {!CV_AVAILABLE && (
              <p className="mt-4 text-[13px] text-slate-500">
                Lebenslauf wird demnächst ergänzt.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
