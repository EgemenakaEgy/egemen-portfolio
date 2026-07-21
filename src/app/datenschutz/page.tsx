import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LegalSection } from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Egemen Demir gemäß DSGVO.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-24 sm:pt-36 sm:pb-28 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-12">
            Datenschutzerklärung
          </h1>

          <LegalSection title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Egemen Demir
              <br />
              Marktplatz 13
              <br />
              35390 Gießen
              <br />
              Deutschland
              <br />
              E-Mail:{" "}
              <a
                href="mailto:egemen.demir@mni.thm.de"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                egemen.demir@mni.thm.de
              </a>
            </p>
          </LegalSection>

          <LegalSection title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Ich lege großen Wert auf den Schutz Ihrer personenbezogenen Daten. Diese Website
              erhebt und verarbeitet personenbezogene Daten nur im technisch notwendigen Umfang
              beim Aufruf der Seite sowie bei einer freiwilligen Kontaktaufnahme per E-Mail.
            </p>
          </LegalSection>

          <LegalSection title="3. Hosting bei Vercel">
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website verarbeitet
              Vercel automatisch technische Daten (Server-Logfiles), um die Website
              bereitzustellen und die Systemsicherheit zu gewährleisten. Weitere Informationen
              finden Sie in der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="4. Server-Logfiles beim Aufruf der Website">
            <p>
              Bei jedem Aufruf dieser Website werden durch den Hosting-Provider automatisch
              Informationen erfasst und in sogenannten Server-Logfiles gespeichert, z. B.
              IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, verwendeter Browser
              sowie Referrer-URL.
            </p>
            <p>
              Diese Daten dienen ausschließlich der technischen Bereitstellung und Absicherung
              der Website (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an einem stabilen
              und sicheren Betrieb) und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </LegalSection>

          <LegalSection title="5. Next.js">
            <p>
              Diese Website wurde mit dem Framework Next.js umgesetzt. Über die unter Punkt 4
              genannten Server-Logfiles hinaus erhebt Next.js bei der reinen Auslieferung der
              Seiten keine zusätzlichen personenbezogenen Daten.
            </p>
          </LegalSection>

          <LegalSection title="6. Kontaktaufnahme per E-Mail">
            <p>
              Diese Website verfügt über kein eigenes Kontaktformular. Die Kontaktaufnahme
              erfolgt ausschließlich über einen mailto-Link, der Ihr eigenes E-Mail-Programm
              öffnet. Die dabei von Ihnen mitgeteilten Daten — insbesondere Ihre E-Mail-Adresse
              sowie alle im Rahmen der Nachricht freiwillig angegebenen Informationen — werden
              ausschließlich zur Bearbeitung Ihrer Anfrage verwendet (Art. 6 Abs. 1 lit. b bzw.
              lit. f DSGVO). Der Versand der E-Mail selbst erfolgt über Ihr eigenes
              E-Mail-Programm und liegt in Ihrem eigenen Verantwortungsbereich.
            </p>
          </LegalSection>

          <LegalSection title="7. Externe Links (GitHub, LinkedIn)">
            <p>
              Diese Website enthält Links zu externen Plattformen, u. a. zu GitHub
              (github.com/EgemenakaEgy) und LinkedIn. Beim Aufruf dieser Website selbst werden
              dabei keine Daten automatisch an diese Anbieter übertragen — es handelt sich um
              reine Verlinkungen. Erst wenn Sie einem solchen Link aktiv folgen, gelten die
              Datenschutzbestimmungen des jeweiligen externen Anbieters.
            </p>
          </LegalSection>

          <LegalSection title="8. Keine Cookies, kein Tracking, keine Analyse-Tools">
            <p>
              Diese Website setzt keine eigenen Cookies und keine Tracking- oder Analyse-Tools
              ein.
            </p>
          </LegalSection>

          <LegalSection title="9. Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
              personenbezogenen Daten. Zudem steht Ihnen ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu.
            </p>
          </LegalSection>

          <LegalSection title="10. Änderung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung wird bei Bedarf an geänderte rechtliche oder technische
              Rahmenbedingungen angepasst.
            </p>
          </LegalSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
