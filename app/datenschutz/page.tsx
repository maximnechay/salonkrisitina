import { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        1. Datenschutz auf einen Blick
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Allgemeine Hinweise
      </h3>
      <p className="mb-4">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
        Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
        Sie persönlich identifiziert werden können.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Datenerfassung auf dieser Website
      </h3>
      <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
      <p className="mb-4">
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
        können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung
        entnehmen.
      </p>

      <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
      <p className="mb-4">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.
        B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
      </p>
      <p className="mb-4">
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
        IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
        Uhrzeit des Seitenaufrufs).
      </p>

      <p className="mb-2"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
      <p className="mb-4">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
        Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
      </p>

      <p className="mb-2"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
      <p className="mb-4">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
        gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
        oder Löschung dieser Daten zu verlangen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        2. Hosting
      </h2>
      <p className="mb-4">
        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Externes Hosting
      </h3>
      <p className="mb-4">
        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
        werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
        Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
        und sonstige Daten, die über eine Website generiert werden, handeln.
      </p>
      <p className="mb-4">
        Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
        effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs.
        1 lit. f DSGVO).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        3. Allgemeine Hinweise und Pflicht­informationen
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Datenschutz
      </h3>
      <p className="mb-4">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
        Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
        sowie dieser Datenschutzerklärung.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Hinweis zur verantwortlichen Stelle
      </h3>
      <p className="mb-4">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
      </p>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="mb-2"><strong>Beautysalon Harmonie</strong></p>
        <p className="mb-2">[IHR NAME]</p>
        <p className="mb-2">Musterstraße 10</p>
        <p className="mb-4">30159 Hannover</p>
        <p className="mb-2">Telefon: +49 (511) 123-456</p>
        <p>E-Mail: info@harmonie-salon.de</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Speicherdauer
      </h3>
      <p className="mb-4">
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
        verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </h3>
      <p className="mb-4">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
        eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Beschwerderecht bei der zuständigen Aufsichtsbehörde
      </h3>
      <p className="mb-4">
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
        Aufsichtsbehörde zu.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <p className="mb-2"><strong>Zuständige Aufsichtsbehörde:</strong></p>
        <p className="mb-2">Die Landesbeauftragte für den Datenschutz Niedersachsen</p>
        <p className="mb-2">Prinzenstraße 5</p>
        <p className="mb-2">30159 Hannover</p>
        <p>
          Website:{' '}
          <a href="https://lfd.niedersachsen.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
            https://lfd.niedersachsen.de
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        4. Datenerfassung auf dieser Website
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Server-Log-Dateien
      </h3>
      <p className="mb-4">
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
        Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p className="mb-4">
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Kontaktformular
      </h3>
      <p className="mb-4">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
        und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </p>
      <p className="mb-4">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
        Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
        Maßnahmen erforderlich ist.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Anfrage per E-Mail, Telefon oder Telefax
      </h3>
      <p className="mb-4">
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
        hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
        bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
        <p className="text-sm text-gray-700">
          <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Basistemplate. Bitte passen Sie
          diese an Ihre tatsächliche Datenverarbeitung an. Wenn Sie weitere Dienste nutzen (Google
          Analytics, Social Media Plugins, etc.), müssen diese ergänzt werden. Lassen Sie die
          Datenschutzerklärung im Zweifel von einem Anwalt prüfen.
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Quelle: erstellt mit dem{' '}
        <a href="https://www.e-recht24.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          Datenschutz-Generator von eRecht24
        </a>
      </p>
    </LegalLayout>
  )
}
