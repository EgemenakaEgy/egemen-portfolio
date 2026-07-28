import type { CSSProperties } from "react";

/**
 * Wiederverwendbares "Label + Linie"-Element der linken Spalte, das in
 * About, Skills, Experience, Projects, Resume und Contact identisch
 * verwendet wird.
 */
export function SectionEyebrow({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <div className="transition-all duration-700" style={style}>
      <span className="text-[11px] font-bold text-blue-600 tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  );
}
