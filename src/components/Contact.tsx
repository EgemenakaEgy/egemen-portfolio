"use client";

import { useInView } from "@/hooks/useInView";
import type { RefObject } from "react";

const contactItems = [
  {
    label: "E-Mail",
    value: "egemen.demir@mni.thm.de",
    href: "mailto:egemen.demir@mni.thm.de",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "egemen-demir",
    href: "https://www.linkedin.com/in/egemen-demir",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Standort",
    value: "Gießen / Frankfurt am Main",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="py-24 lg:py-36 bg-slate-50/60 border-t border-slate-100 scroll-mt-[88px]"
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
              Kontakt
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
              In Kontakt{" "}
              <span className="text-slate-400 font-normal">treten</span>
            </h2>

            <p className="text-[16.5px] text-slate-500 leading-relaxed mb-10 max-w-lg">
              Ich freue mich über Anfragen zu Praktika, Werkstudentenstellen
              oder Projekten — schreib mir gerne direkt.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  className="transition-all duration-700 min-w-0"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex flex-col gap-3 bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md hover:shadow-blue-50/60 transition-all duration-200 group h-full min-w-0"
                    >
                      <span className="text-slate-400 group-hover:text-blue-500 transition-colors duration-200">
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[13px] font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-200 break-words">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col gap-3 bg-white border border-slate-100 rounded-xl p-5 h-full min-w-0">
                      <span className="text-slate-400">{item.icon}</span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-0.5">
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
