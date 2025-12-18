import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Angaben gemäß § 5 TMG
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="mb-2"><strong>Beautysalon Harmonie</strong></p>
        <p className="mb-2">Inhaberin: [IHR NAME]</p>
        <p className="mb-2">Musterstraße 10</p>
        <p className="mb-4">30159 Hannover</p>
        <p className="mb-2"><strong>Telefon:</strong> +49 (511) 123-456</p>
        <p className="mb-2"><strong>E-Mail:</strong> info@harmonie-salon.de</p>
        <p className="mb-2"><strong>Website:</strong> www.harmonie-salon.de</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Vertreten durch
      </h2>
      <p className="text-gray-700 mb-6">[IHR VOLLSTÄNDIGER NAME]</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Umsatzsteuer-ID
      </h2>
      <p className="text-gray-700 mb-6">
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
        <strong>DE [IHRE UST-ID NUMMER]</strong><br />
        <span className="text-sm text-gray-500">
          (Falls Sie umsatzsteuerpflichtig sind. Bei Kleinunternehmerregelung nach § 19 UStG bitte angeben.)
        </span>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Berufsbezeichnung
      </h2>
      <p className="text-gray-700 mb-6">
        Friseurmeisterin / Kosmetikerin<br />
        (je nach Ihren Qualifikationen)<br />
        Verliehen in: Deutschland
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Zuständige Kammer
      </h2>
      <p className="text-gray-700 mb-6">
        Handwerkskammer Hannover<br />
        Berliner Allee 17<br />
        30175 Hannover<br />
        <a href="https://www.hwk-hannover.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          www.hwk-hannover.de
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Aufsichtsbehörde
      </h2>
      <p className="text-gray-700 mb-6">
        Gesundheitsamt der Region Hannover<br />
        Weinstraße 2-3<br />
        30171 Hannover
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
      </h2>
      <p className="text-gray-700 mb-6">
        [IHR VOLLSTÄNDIGER NAME]<br />
        Musterstraße 10<br />
        30159 Hannover
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        EU-Streitschlichtung
      </h2>
      <p className="text-gray-700 mb-6">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
        <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          https://ec.europa.eu/consumers/odr/
        </a><br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Verbraucher­streit­beilegung / Universal­schlichtungs­stelle
      </h2>
      <p className="text-gray-700 mb-6">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Haftung für Inhalte
      </h2>
      <p className="text-gray-700 mb-4">
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p className="text-gray-700 mb-6">
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Haftung für Links
      </h2>
      <p className="text-gray-700 mb-4">
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
        der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p className="text-gray-700 mb-6">
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
        einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
        Links umgehend entfernen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        Urheberrecht
      </h2>
      <p className="text-gray-700 mb-4">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
        bzw. Erstellers.
      </p>
      <p className="text-gray-700 mb-6">
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
        Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
        um einen entsprechenden Hinweis.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
        <p className="text-sm text-gray-700">
          <strong>Hinweis:</strong> Bitte ersetzen Sie alle Platzhalter (in [ECKIGEN KLAMMERN]) mit Ihren
          tatsächlichen Daten. Ein Impressum ist gesetzlich verpflichtend und muss vollständige und
          korrekte Angaben enthalten.
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Quelle: erstellt mit dem{' '}
        <a href="https://www.e-recht24.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          Impressum-Generator von eRecht24
        </a>
      </p>
    </LegalLayout>
  )
}
