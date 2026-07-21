import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LegalSection } from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Egemen Demir gemäß § 5 TMG.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-24 sm:pt-36 sm:pb-28 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-12">
            Impressum
          </h1>

          <LegalSection title="Angaben gemäß § 5 TMG">
            <p>
              Egemen Demir
              <br />
              Marktplatz 13
              <br />
              35390 Gießen
              <br />
              Deutschland
            </p>
          </LegalSection>

          <LegalSection title="Kontakt">
            <p>
              E-Mail:{" "}
              <a
                href="mailto:egemen.demir@mni.thm.de"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                egemen.demir@mni.thm.de
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV">
            <p>
              Egemen Demir
              <br />
              Marktplatz 13
              <br />
              35390 Gießen
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf dieser
              Website nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte
              umgehend entfernen.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Links">
            <p>
              Diese Website enthält Links zu externen Websites Dritter (u. a. GitHub und
              LinkedIn), auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
              nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
              von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>
          </LegalSection>

          <LegalSection title="Urheberrecht">
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
              bedürfen der schriftlichen Zustimmung des jeweiligen Erstellers.
            </p>
          </LegalSection>

          <p className="text-[13px] text-slate-400 mt-4">
            Diese Website ist ein privates, nicht-kommerzielles Portfolio-Projekt.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
