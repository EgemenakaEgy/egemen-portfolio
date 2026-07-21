import type { ReactNode } from "react";

/**
 * Wiederverwendbarer Abschnitt für die rechtlichen Seiten (Impressum, Datenschutz).
 */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 tracking-tight mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] text-slate-600 leading-[1.75] text-pretty">
        {children}
      </div>
    </section>
  );
}
