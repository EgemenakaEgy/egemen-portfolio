// Zentrale, leichte Icon-Sammlung (reine Inline-SVGs, keine externe Library).
// Stil: 24x24 Viewbox, dünne Outlines, currentColor — passend zum bestehenden Design.

import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ---------- Technologie-Icons (Skills) ---------- */

const techPaths: Record<string, ReactNode> = {
  HTML: (
    <path d="M9 18l-5-6 5-6M15 6l5 6-5 6" />
  ),
  CSS: (
    <>
      <path d="M12 4l8 4.5v7L12 20l-8-4.5v-7L12 4z" />
      <path d="M12 4v16" strokeOpacity={0.45} />
    </>
  ),
  Java: (
    <>
      <path d="M5 9h13v5.5A4.5 4.5 0 0113.5 19h-4A4.5 4.5 0 015 14.5V9z" />
      <path d="M18 10.5h1a2.3 2.3 0 010 4.6h-1" />
      <path d="M9 3.5c-.6 1 .5 1.4 0 2.4M13 3.5c-.6 1 .5 1.4 0 2.4" strokeOpacity={0.6} />
    </>
  ),
  TypeScript: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight={700} fill="currentColor" stroke="none">
        TS
      </text>
    </>
  ),
  SQL: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.7" />
      <path d="M4.5 6v5.5c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7V6" />
      <path d="M4.5 11.5V17c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7v-5.5" />
    </>
  ),
  "Node.js": (
    <>
      <path d="M12 2.5l8 4.6v9.8L12 21.5l-8-4.6V7.1L12 2.5z" />
      <path d="M9 10l3 1.7L15 10M12 11.7v4.8" strokeOpacity={0.55} />
    </>
  ),
  PostgreSQL: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.4" />
      <path d="M5 5.5v6.5c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V5.5" />
      <path d="M12 14.4V19" />
      <path d="M9 19h6" />
    </>
  ),
  Redis: (
    <>
      <path d="M12 3.5l8 3.8-8 3.8-8-3.8 8-3.8z" />
      <path d="M4 11.3l8 3.8 8-3.8M4 15.1l8 3.8 8-3.8" strokeOpacity={0.55} />
    </>
  ),
  Docker: (
    <>
      <rect x="3" y="10.5" width="3.6" height="3.6" />
      <rect x="7.4" y="10.5" width="3.6" height="3.6" />
      <rect x="11.8" y="10.5" width="3.6" height="3.6" />
      <rect x="7.4" y="6.2" width="3.6" height="3.6" />
      <path d="M2 14.3c1 3.4 4.2 5.7 8.6 5.7h2.1c4.6 0 8.4-2.4 10-6.2-1-.7-2.3-.9-3.4-.4" />
    </>
  ),
  Git: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 8v8" />
      <path d="M6 12.5c0-3.2 3-5.5 6.5-5.5H16" />
    </>
  ),
  GitHub: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.2c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-1-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 1 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.3 6.8-5 6.8-9.4 0-5.5-4.5-10-10-10z"
    />
  ),
  WebStorm: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18" strokeOpacity={0.5} />
      <path d="M7.5 13l-2 2.3 2 2.3M11.5 12.3l-1.4 6.6" />
    </>
  ),
  "Visual Studio Code": (
    <>
      <path d="M16.2 3l-8 7.3L4.5 8 3 9v6l1.5 1 3.7-2.3 8 7.3 4-2V5l-4-2z" />
      <path d="M16.2 8.2L9.5 12l6.7 3.8" strokeOpacity={0.55} />
    </>
  ),
  Figma: (
    <>
      <path d="M9.5 3h3a2.75 2.75 0 010 5.5h-3z" />
      <path d="M9.5 8.5h3a2.75 2.75 0 010 5.5h-3z" />
      <path d="M9.5 14h3a2.75 2.75 0 11-2.75 2.75V14" />
      <path d="M9.5 3a2.75 2.75 0 000 5.5" />
      <path d="M9.5 8.5a2.75 2.75 0 000 5.5" />
    </>
  ),
  Canva: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="9.5" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.3" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
      <path d="M9 15c1 1.3 3.6 1.3 4.6-.3" />
    </>
  ),
  "Microsoft Office": (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.3" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.3" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.3" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.3" />
    </>
  ),
  LaTeX: (
    <>
      <rect x="4.5" y="3" width="15" height="18" rx="2" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="8.5" fontWeight={700} fill="currentColor" stroke="none">
        &#931;
      </text>
    </>
  ),
  Wix: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight={700} fill="currentColor" stroke="none">
        W
      </text>
    </>
  ),
};

const defaultTechPath = (
  <path d="M9 18l-5-6 5-6M15 6l5 6-5 6" />
);

export function TechIcon({ name, className = "w-4.5 h-4.5" }: IconProps & { name: string }) {
  return <Svg className={className}>{techPaths[name] ?? defaultTechPath}</Svg>;
}

/* ---------- Kategorie-Icons (Skills-Sektion) ---------- */

const categoryPaths: Record<string, ReactNode> = {
  "Sprachen & Web": <path d="M9 18l-5-6 5-6M15 6l5 6-5 6" />,
  "Datenbanken & Infrastruktur": (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.7" />
      <path d="M4.5 6v5.5c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7V6" />
      <path d="M4.5 11.5V17c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7v-5.5" />
    </>
  ),
  Tools: (
    <path d="M14.5 6.5a3.5 3.5 0 00-4.6 4.2L4 16.6V20h3.4l5.9-5.9a3.5 3.5 0 004.2-4.6l-2.6 2.6-2-2 2.6-2.6z" />
  ),
};

export function CategoryIcon({ name, className = "w-4 h-4" }: IconProps & { name: string }) {
  return <Svg className={className}>{categoryPaths[name] ?? <circle cx="12" cy="12" r="7" />}</Svg>;
}

/* ---------- Erfahrung-Icons (Timeline) ---------- */

const experiencePaths: Record<string, ReactNode> = {
  web: <path d="M9 18l-5-6 5-6M15 6l5 6-5 6" />,
  teaching: (
    <>
      <path d="M12 4L2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V17c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5v-5.5" />
      <path d="M22 9v6" strokeOpacity={0.55} />
    </>
  ),
  business: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="1.5" />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
      <path d="M4 13h16" strokeOpacity={0.5} />
    </>
  ),
  event: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9.5h16" />
      <path d="M8 3v3.5M16 3v3.5" />
      <circle cx="9.3" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.7" cy="14" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

export function ExperienceIcon({
  type,
  className = "w-4.5 h-4.5",
}: IconProps & { type: keyof typeof experiencePaths }) {
  return <Svg className={className}>{experiencePaths[type]}</Svg>;
}

/* ---------- Projekt-Icons ---------- */

export function ExternalLinkIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h5" />
    </Svg>
  );
}

export function GitHubMarkIcon({ className = "w-4 h-4" }: IconProps) {
  return <Svg className={className}>{techPaths.GitHub}</Svg>;
}

export function ImagePlaceholderIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M3 16l5-4.5 4 3.5 3-2.5 6 5" />
    </Svg>
  );
}

/* ---------- Sonstige UI-Icons ---------- */

export function ArrowUpRightIcon({ className = "w-3.5 h-3.5" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </Svg>
  );
}
