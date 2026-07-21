"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { revealStyle } from "@/lib/motion";

const contactItems = [
  {
    label: "E-Mail",
    value: "egemen.demir@mni.thm.de",
    href: "mailto:egemen.demir@mni.thm.de",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "egemen-demir",
    href: "https://www.linkedin.com/in/egemen-demir",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Standort",
    value: "Gießen / Frankfurt am Main",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      ref={ref as RefObject<HTMLElement>}
      className="py-20 sm:py-24 md:py-28 lg:py-36 bg-slate-50/60 border-t border-slate-100 scroll-mt-[88px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-24 items-start">

          {/* Left — section label */}
          <SectionEyebrow label="Kontakt" style={revealStyle(inView)} />

          {/* Right — content */}
          <div className="transition-all duration-700" style={revealStyle(inView, 150)}>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-[-0.025em] mb-4 text-balance">
              In Kontakt{" "}
              <span className="text-slate-500 font-normal">treten</span>
            </h2>

            <p className="text-[16.5px] text-slate-500 leading-relaxed text-pretty mb-10 max-w-lg">
              Ich freue mich über Anfragen zu Praktika, Werkstudentenstellen
              oder Projekten — schreib mir gerne direkt.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  className="transition-all duration-700 min-w-0"
                  style={revealStyle(inView, 200 + i * 80, 12)}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="relative flex flex-col gap-3.5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50/70 hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group h-full min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors duration-200">
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-500 tracking-[0.12em] uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[13px] font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-200 break-words">
                          {item.value}
                        </p>
                      </div>
                      <span className="absolute top-4 right-4 text-slate-300 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-blue-400 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <ArrowUpRightIcon />
                      </span>
                    </a>
                  ) : (
                    <div className="flex flex-col gap-3.5 bg-white border border-slate-100 rounded-xl p-5 sm:p-6 h-full min-w-0">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-slate-500">
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-500 tracking-[0.12em] uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[13px] font-medium text-slate-700 break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
