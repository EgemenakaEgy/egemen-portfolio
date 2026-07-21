import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Entfernt den "X-Powered-By: Next.js"-Header (kleine Sicherheits-/Performance-Hygiene).
  poweredByHeader: false,
  // Erzwingt striktere React-Checks in der Entwicklung (Standard in Next 16, hier explizit).
  reactStrictMode: true,
};

export default nextConfig;
