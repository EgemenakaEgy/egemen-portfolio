"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";

const CV_AVAILABLE = false;
const CV_PATH = "/documents/lebenslauf-egemen-demir.pdf";

export default function Resume() {
  const { ref, inView } = useInView();

  return (
    <section
      id="resume"
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
              Lebenslauf
            </span>
            <div className="mt-3 w-6 h-[2px] bg-blue-600 rounded-full" />
          </div>

          {/* Right — content */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "150ms",
            }}
          >
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-4">
              Lebenslauf{" "}
              <span className="text-slate-400 font-normal">herunterladen</span>
            </h2>

            <p className="text-[16px] text-slate-500 leading-relaxed mb-10 max-w-lg">
              Der vollständige Lebenslauf als PDF steht in Kürze zur Verfügung.
            </p>

            <div className="flex flex-wrap gap-3">
              {CV_AVAILABLE ? (
                <>
                  <a
                    href={CV_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-[14.5px] transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-blue-200/60"
                  >
                    Lebenslauf ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={CV_PATH}
                    download
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:-translate-y-px hover:shadow-sm"
                  >
                    PDF herunterladen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </>
              ) : (
                <>
                  <button
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 bg-slate-100 text-slate-400 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] cursor-not-allowed select-none"
                  >
                    Lebenslauf ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <button
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 bg-white text-slate-300 font-semibold px-5 py-2.5 rounded-lg text-[14.5px] border border-slate-100 cursor-not-allowed select-none"
                  >
                    PDF herunterladen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {!CV_AVAILABLE && (
              <p className="mt-4 text-[13px] text-slate-400">
                Lebenslauf wird demnächst ergänzt.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
