import type { Metadata } from "next"
import LegalLayout from "@/components/LegalLayout"

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Angaben gemäß § 5 TMG
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="mb-2">
          <strong>Kristina &amp; Alexandra Mastersalon</strong>
        </p>
        <p className="mb-2">Limbergstraße 53</p>
        <p className="mb-4">38518 Gifhorn</p>

        <p className="mb-2">
          <strong>Geschäftsführer:</strong> Kristina Herold, Alexandra Saltürk
        </p>

        <p className="mb-2">
          <strong>Telefon:</strong>{" "}
          <a href="tel:+4917641290158" className="text-blue-600 hover:underline">
            +49 176 412 901 58
          </a>
          {", "}
          <a href="tel:+491731758457" className="text-blue-600 hover:underline">
            +49 173 175 8457
          </a>
        </p>

        <p className="mb-2">
          <strong>E-Mail:</strong>{" "}
          <a href="mailto:john_lidia@gmx.de" className="text-blue-600 hover:underline">
            john_lidia@gmx.de
          </a>
        </p>

        <p className="mb-2">
          <strong>Umsatzsteuer:</strong> Kleinunternehmer gemäß § 19 UStG
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        EU-Streitschlichtung
      </h2>
      <p className="text-gray-700 mb-6">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        {" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Verbraucherstreitbeilegung
      </h2>
      <p className="text-gray-700 mb-6">
        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir
        nicht verpflichtet und nicht bereit.
      </p>
    </LegalLayout>
  )
}
