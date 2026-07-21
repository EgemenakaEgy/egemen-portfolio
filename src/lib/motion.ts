import type { CSSProperties } from "react";

/**
 * Gemeinsamer Style für die "Fade + Slide up" Scroll-Reveal-Animation,
 * die von allen Sektionen (About, Skills, Experience, Projects, Resume,
 * Contact) verwendet wird. Reduziert Duplikation der immer gleichen
 * opacity/transform/transitionDelay-Objekte.
 */
export function revealStyle(
  inView: boolean,
  delayMs = 0,
  distancePx = 16
): CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : `translateY(${distancePx}px)`,
    ...(delayMs ? { transitionDelay: `${delayMs}ms` } : {}),
  };
}
