import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-light flex flex-col items-center justify-center px-6 text-center">
            {/* Logo */}
            <Link href="/" className="mb-12">
                <Image
                    src="/brand/ka.png"
                    alt="Kristina & Alexandra"
                    width={80}
                    height={80}
                    className="opacity-80 hover:opacity-100 transition"
                />
            </Link>

            {/* 404 */}
            <div className="relative mb-8">
                <span className="text-[150px] md:text-[200px] font-serif text-gray-200 leading-none select-none">
                    404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-px bg-secondary" />
                </div>
            </div>

            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                Seite nicht gefunden
            </h1>
            <p className="text-gray-600 font-light max-w-md mb-10 leading-relaxed">
                Die gewünschte Seite existiert leider nicht oder wurde verschoben.
                Kein Problem – wir bringen Sie zurück.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="px-8 py-3.5 bg-secondary text-primary font-semibold text-sm tracking-widest uppercase hover:bg-secondary/90 transition"
                >
                    Zur Startseite
                </Link>
                <Link
                    href="/#kontakt"
                    className="px-8 py-3.5 border border-primary/20 text-primary font-medium text-sm tracking-widest uppercase hover:border-secondary hover:text-secondary transition"
                >
                    Kontakt
                </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                    Oder direkt zu
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/#leistungen" className="text-gray-600 hover:text-secondary transition">
                        Leistungen
                    </Link>
                    <Link href="/#preise" className="text-gray-600 hover:text-secondary transition">
                        Preise
                    </Link>
                    <Link href="/#galerie" className="text-gray-600 hover:text-secondary transition">
                        Galerie
                    </Link>
                </div>
            </div>
        </main>
    )
}