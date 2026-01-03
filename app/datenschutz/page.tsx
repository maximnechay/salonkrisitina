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

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Vercel
      </h3>
      <p className="mb-4">
        Wir hosten unsere Website bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
        Vercel ist ein Cloud-Plattform-Anbieter, der die Infrastruktur für unsere Website bereitstellt.
      </p>
      <p className="mb-4">
        Wenn Sie unsere Website besuchen, werden automatisch Informationen in Server-Log-Dateien gespeichert,
        die Ihr Browser übermittelt. Dies umfasst Ihre IP-Adresse, Browsertyp, Betriebssystem und Zeitpunkt des Zugriffs.
      </p>
      <p className="mb-4">
        Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
        Interesse an einer zuverlässigen Darstellung unserer Website. Weitere Informationen:{' '}
        <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          https://vercel.com/legal/privacy-policy
        </a>
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
        <p className="mb-2"><strong>Kristina & Alexandra Mastersalon</strong></p>
        <p className="mb-2">Kristina Herold & Alexandra Saltürk</p>
        <p className="mb-2">Limbergstraße 53</p>
        <p className="mb-4">38518 Gifhorn</p>
        <p className="mb-2">Telefon: +49 176 412 901 58 (Kristina)</p>
        <p className="mb-2">Telefon: +49 173 175 8457 (Alexandra)</p>
        <p>E-Mail: john_lidia@gmx.de</p>
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
        Terminanfrage / Kontaktformular
      </h3>
      <p className="mb-4">
        Wenn Sie über unser Terminformular eine Anfrage stellen, werden folgende Daten erhoben:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Gewünschte Leistung</li>
        <li>Ihre Nachricht (optional)</li>
      </ul>
      <p className="mb-4">
        Diese Daten werden zum Zweck der Terminvereinbarung und Bearbeitung Ihrer Anfrage verarbeitet.
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900">Supabase (Datenspeicherung)</h4>
      <p className="mb-4">
        Ihre Terminanfragen werden in einer Datenbank bei Supabase Inc., 970 Toa Payoh North #07-04,
        Singapore 318992, gespeichert. Supabase betreibt Server in der EU (Frankfurt).
        Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
        Weitere Informationen:{' '}
        <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          https://supabase.com/privacy
        </a>
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900">Resend (E-Mail-Versand)</h4>
      <p className="mb-4">
        Für den Versand von Bestätigungs-E-Mails nutzen wir den Dienst Resend (Resend Inc., USA).
        Dabei werden Ihre E-Mail-Adresse und Name an Resend übermittelt, um Ihnen eine Bestätigung
        Ihrer Terminanfrage zuzusenden. Weitere Informationen:{' '}
        <a href="https://resend.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          https://resend.com/legal/privacy-policy
        </a>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Anfrage per E-Mail, Telefon oder Telefax
      </h3>
      <p className="mb-4">
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
        hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
        bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        5. Externe Dienste
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        Google Maps
      </h3>
      <p className="mb-4">
        Diese Website nutzt Google Maps zur Darstellung interaktiver Karten. Google Maps wird von Google LLC,
        1600 Amphitheatre Parkway, Mountain View, CA 94043, USA betrieben.
      </p>
      <p className="mb-4">
        <strong>Google Maps wird erst nach Ihrer ausdrücklichen Einwilligung geladen.</strong> Ohne Ihre
        Zustimmung über unseren Cookie-Banner werden keine Daten an Google übertragen.
      </p>
      <p className="mb-4">
        Wenn Sie der Nutzung von Google Maps zustimmen, wird eine Verbindung zu den Servern von Google
        hergestellt. Dabei kann Ihre IP-Adresse an Google übermittelt werden. Weitere Informationen zum
        Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{' '}
        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          https://policies.google.com/privacy
        </a>
      </p>
      <p className="mb-4">
        Die Nutzung von Google Maps erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 font-serif">
        WhatsApp
      </h3>
      <p className="mb-4">
        Auf unserer Website befindet sich ein Link zur Kontaktaufnahme über WhatsApp. Wenn Sie diesen
        Link anklicken, werden Sie zu WhatsApp weitergeleitet. Die Nutzung von WhatsApp erfolgt freiwillig
        und unterliegt den Datenschutzbestimmungen von Meta Platforms Ireland Limited:{' '}
        <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
          https://www.whatsapp.com/legal/privacy-policy
        </a>
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Stand: Januar 2025
      </p>
    </LegalLayout>
  )
}