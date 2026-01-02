import type { Metadata } from "next"
import LegalLayout from "@/components/LegalLayout"

export const metadata: Metadata = {
  title: "AGB",
  robots: { index: false, follow: false },
}

export default function AGB() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p className="mb-6 text-sm text-gray-600">Stand: Januar 2026</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 1 Geltungsbereich
      </h2>
      <p className="mb-4">
        (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) gelten für alle Dienstleistungen, die
        Kristina &amp; Alexandra Mastersalon (nachfolgend &quot;Salon&quot;) gegenüber seinen Kunden erbringt.
      </p>
      <p className="mb-4">
        (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Salon stimmt ihrer
        Geltung ausdrücklich schriftlich zu.
      </p>
      <p className="mb-6">
        (3) Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals
        ausdrücklich vereinbart werden.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 2 Terminvereinbarung und Buchung
      </h2>
      <p className="mb-4">
        (1) Termine können telefonisch, per E-Mail, über ein Online-Buchungssystem oder persönlich im Salon
        vereinbart werden.
      </p>
      <p className="mb-4">
        (2) Mit der Terminvereinbarung kommt ein verbindlicher Dienstleistungsvertrag zustande.
      </p>
      <p className="mb-4">
        (3) Der Kunde ist verpflichtet, pünktlich zum vereinbarten Termin zu erscheinen. Bei einer
        Verspätung von mehr als 15 Minuten behält sich der Salon das Recht vor, den Termin abzusagen und die
        in § 3 geregelten Stornierungsgebühren zu erheben.
      </p>
      <p className="mb-6">
        (4) Online-Buchungen werden erst nach Bestätigung durch den Salon verbindlich.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 3 Absage und Stornierung
      </h2>
      <p className="mb-4">
        (1) Terminabsagen durch den Kunden müssen mindestens 24 Stunden vor dem vereinbarten Termin
        erfolgen.
      </p>
      <p className="mb-4">
        (2) Bei Absagen oder Änderungen innerhalb von 24 Stunden vor dem Termin oder bei Nichterscheinen
        behält sich der Salon das Recht vor, eine Ausfallgebühr in Höhe von 50% des vereinbarten Preises zu
        berechnen.
      </p>
      <p className="mb-4">
        (3) Bei wiederholtem Nichterscheinen ohne Absage behält sich der Salon das Recht vor, zukünftige
        Termine nur noch gegen Vorauszahlung zu vereinbaren.
      </p>
      <p className="mb-6">
        (4) Der Salon behält sich das Recht vor, Termine aus wichtigem Grund (z.B. Krankheit) abzusagen. In
        diesem Fall wird dem Kunden unverzüglich ein Alternativtermin angeboten.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 4 Preise und Zahlung
      </h2>
      <p className="mb-4">
        (1) Es gelten die am Tag der Terminvereinbarung aktuellen Preise laut Preisliste des Salons.
      </p>
      <p className="mb-4">
        (2) Alle Preise verstehen sich als Endpreise. Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine
        Umsatzsteuer ausgewiesen.
      </p>
      <p className="mb-4">
        (3) Die Zahlung erfolgt unmittelbar nach Erbringung der Dienstleistung. Akzeptiert werden Barzahlung
        und EC-Karte (weitere Zahlungsarten nach Absprache).
      </p>
      <p className="mb-4">
        (4) Der Salon behält sich das Recht vor, die Preise anzupassen. Bereits vereinbarte Termine sind von
        Preisänderungen nicht betroffen.
      </p>
      <p className="mb-6">
        (5) Bei umfangreichen Behandlungen kann eine Anzahlung von bis zu 50% verlangt werden.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 5 Beratung und Durchführung
      </h2>
      <p className="mb-4">
        (1) Vor jeder Behandlung findet eine individuelle Beratung statt. Der Kunde ist verpflichtet, den
        Mitarbeiter über relevante gesundheitliche Einschränkungen, Allergien oder Vorerkrankungen zu
        informieren.
      </p>
      <p className="mb-4">
        (2) Die Behandlung erfolgt nach bestem Wissen und Gewissen unter Verwendung hochwertiger Produkte
        und professioneller Techniken.
      </p>
      <p className="mb-4">
        (3) Der Kunde hat das Recht, die Behandlung jederzeit abzubrechen. In diesem Fall ist der anteilige
        Preis für die bereits erbrachte Leistung zu zahlen.
      </p>
      <p className="mb-6">
        (4) Besondere Wünsche des Kunden werden nach Möglichkeit berücksichtigt. Der Salon behält sich
        jedoch das Recht vor, bestimmte Behandlungen oder Farbdienstleistungen abzulehnen, wenn diese nach
        professioneller Einschätzung nicht zum gewünschten Ergebnis führen oder schädlich sein könnten.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 6 Gewährleistung und Haftung
      </h2>
      <p className="mb-4">
        (1) Der Salon haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.
      </p>
      <p className="mb-4">
        (2) Reklamationen sind unverzüglich, spätestens jedoch innerhalb von 7 Tagen nach der Behandlung,
        schriftlich oder persönlich im Salon vorzubringen.
      </p>
      <p className="mb-4">
        (3) Bei berechtigten Beanstandungen wird der Salon nach eigener Wahl Nachbesserung leisten oder eine
        angemessene Preisminderung gewähren.
      </p>
      <p className="mb-4">
        (4) Für mitgebrachte Produkte, die vom Kunden zur Verwendung bei der Behandlung bereitgestellt
        werden, übernimmt der Salon keine Haftung.
      </p>
      <p className="mb-6">
        (5) Für allergische Reaktionen auf verwendete Produkte haftet der Salon nicht, sofern der Kunde
        nicht vor der Behandlung auf bekannte Allergien hingewiesen hat.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 7 Gutscheine
      </h2>
      <p className="mb-4">
        (1) Im Salon erhältliche Gutscheine sind ab Ausstellungsdatum 3 Jahre gültig.
      </p>
      <p className="mb-4">
        (2) Gutscheine sind übertragbar und können für alle Dienstleistungen des Salons eingelöst werden.
      </p>
      <p className="mb-4">
        (3) Eine Barauszahlung von Gutscheinen ist ausgeschlossen.
      </p>
      <p className="mb-6">
        (4) Bei Verlust eines Gutscheins besteht kein Anspruch auf Ersatz.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 8 Hausordnung
      </h2>
      <p className="mb-4">
        (1) Der Kunde ist verpflichtet, sich während seines Aufenthalts im Salon angemessen zu verhalten.
      </p>
      <p className="mb-4">
        (2) Das Rauchen ist im gesamten Salon nicht gestattet.
      </p>
      <p className="mb-4">
        (3) Für mitgebrachte Wertsachen übernimmt der Salon keine Haftung.
      </p>
      <p className="mb-6">
        (4) Der Salon behält sich das Recht vor, Kunden bei Verstößen gegen die Hausordnung oder bei
        unangemessenem Verhalten von den Dienstleistungen auszuschließen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 9 Datenschutz
      </h2>
      <p className="mb-4">
        (1) Der Salon erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden ausschließlich zur
        Vertragsabwicklung und gemäß den Bestimmungen der Datenschutz-Grundverordnung (DSGVO).
      </p>
      <p className="mb-6">
        (2) Weitere Informationen finden Sie in unserer Datenschutzerklärung.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 10 Fotos und Bildrechte
      </h2>
      <p className="mb-4">
        (1) Der Salon kann von Behandlungsergebnissen Fotos anfertigen, sofern der Kunde dem ausdrücklich
        zugestimmt hat.
      </p>
      <p className="mb-4">
        (2) Die Verwendung dieser Fotos zu Werbezwecken erfolgt nur mit separater schriftlicher Einwilligung
        des Kunden.
      </p>
      <p className="mb-6">
        (3) Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 11 Salvatorische Klausel
      </h2>
      <p className="mb-4">
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit
        der übrigen Bestimmungen nicht.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 font-serif">
        § 12 Gerichtsstand und anzuwendendes Recht
      </h2>
      <p className="mb-4">
        (1) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
      </p>
      <p className="mb-6">
        (2) Für Verbraucher gilt der gesetzliche Gerichtsstand. Ist der Kunde Kaufmann, juristische Person
        des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand Gifhorn.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <p className="text-sm font-semibold mb-2">Kontakt:</p>
        <p className="text-sm mb-2">Kristina &amp; Alexandra Mastersalon</p>
        <p className="text-sm mb-2">Limbergstraße 53, 38518 Gifhorn</p>
        <p className="text-sm mb-2">
          Telefon:{" "}
          <a className="hover:underline" href="tel:+4917641290158">
            +49 176 412 901 58
          </a>
          {", "}
          <a className="hover:underline" href="tel:+491731758457">
            +49 173 175 8457
          </a>
        </p>
        <p className="text-sm">
          E-Mail:{" "}
          <a className="hover:underline" href="mailto:john_lidia@gmx.de">
            john_lidia@gmx.de
          </a>
        </p>
      </div>
    </LegalLayout>
  )
}
