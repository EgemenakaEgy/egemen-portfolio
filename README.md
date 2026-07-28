<div align="center">

# egemen-demir.de

Personal portfolio website of **Egemen Demir** — Digital Media Systems (B.Sc.) student at  
Technische Hochschule Mittelhessen, looking for a Werkstudent position in  
web development, IT support or IT administration in Gießen / Frankfurt am Main.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-egemendemir.de-0ea5e9?style=for-the-badge)](https://egemendemir.de)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-22c55e?style=for-the-badge)](https://egemendemir.de)
[![Performance](https://img.shields.io/badge/Performance-97%2F100-22c55e?style=for-the-badge)](https://egemendemir.de)

</div>

---

## Live Demo

**[egemendemir.de](https://egemendemir.de)**

---

## About

Personal portfolio website built from scratch — no templates, no UI kits.  
Showcases my education, work experience, technical skills and selected projects.

---

## Features

| Feature | Details |
|---------|---------|
| Responsive | Mobile, tablet and desktop |
| Accessibility | Lighthouse 100 · WCAG 2.1 AA |
| Performance | Lighthouse 97 · static export |
| SEO | Open Graph, Twitter Card, JSON-LD (Schema.org), sitemap.xml, robots.txt |
| Animations | IntersectionObserver-based scroll reveals · `prefers-reduced-motion` support |
| Legal | Impressum & Datenschutzerklärung (DSGVO) |

**Sections:** Hero · About · Skills · Experience · Projects · Resume · Contact

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Plus Jakarta Sans (via `next/font`) |
| Deployment | Vercel |
| Linting | ESLint |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, JSON-LD structured data
│   ├── page.tsx          # Main page
│   ├── robots.ts         # robots.txt generation
│   ├── sitemap.ts        # sitemap.xml generation
│   ├── impressum/        # Legal notice (Impressum)
│   └── datenschutz/      # Privacy policy (Datenschutz)
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── SectionEyebrow.tsx
│   ├── LegalSection.tsx
│   └── icons.tsx
├── hooks/
│   └── useInView.ts      # IntersectionObserver scroll hook
└── lib/
    └── motion.ts         # Scroll-reveal animation helpers
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/EgemenakaEgy/egemen-portfolio.git
cd egemen-portfolio
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Deployment

Deployed on **[Vercel](https://vercel.com)** — automatic deployment on every push to `main`.

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://egemendemir.de` | Canonical base URL |

---

## Contact

- Website: [egemendemir.de](https://egemendemir.de)
- LinkedIn: [linkedin.com/in/egemen-demir](https://www.linkedin.com/in/egemen-demir)
- GitHub: [@EgemenakaEgy](https://github.com/EgemenakaEgy)

---

## License

MIT — see [LICENSE](LICENSE) for details.
