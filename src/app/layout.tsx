import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Domain: egemendemir.de. Per NEXT_PUBLIC_SITE_URL überschreibbar (z. B. für Preview-Deployments).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://egemendemir.de";

const title = "Egemen Demir — Digital Media Systems";
const description =
  "Portfolio von Egemen Demir — Werkstudent für IT-Support, Webentwicklung, IT-Administration und Projektmanagement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Egemen Demir",
  },
  description,
  keywords: [
    "Egemen Demir",
    "Werkstudent",
    "IT-Support",
    "Webentwicklung",
    "IT-Administration",
    "Projektmanagement",
    "Digital Media Systems",
    "THM Mittelhessen",
  ],
  authors: [{ name: "Egemen Demir" }],
  creator: "Egemen Demir",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title,
    description,
    siteName: "Egemen Demir",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${jakartaSans.variable} antialiased`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:text-[14px] focus:font-semibold focus:px-4 focus:py-2.5 focus:rounded-lg focus:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
        >
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
