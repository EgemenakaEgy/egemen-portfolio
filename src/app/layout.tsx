import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Egemen Demir — Digital Media Systems",
  description:
    "Portfolio von Egemen Demir — Werkstudent für IT-Support, Webentwicklung, IT-Administration und Projektmanagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${jakartaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
