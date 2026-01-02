'use client'

import { useState } from 'react'
import { useCookieConsent } from './CookieContext'
import { Cookie } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
    const { showBanner, acceptAll, acceptSelected, rejectAll } = useCookieConsent()
    const [showDetails, setShowDetails] = useState(false)
    const [selected, setSelected] = useState({
        analytics: false,
        marketing: false,
        maps: true, // По умолчанию включаем карты
    })

    if (!showBanner) return null

    const handleToggle = (key: keyof typeof selected) => {
        setSelected(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const handleAcceptSelected = () => {
        acceptSelected(selected)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Banner */}
            <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <Cookie className="w-6 h-6 text-secondary" aria-hidden="true" />
                        <h2 className="text-lg font-semibold text-gray-900">
                            Cookie-Einstellungen
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    {!showDetails ? (
                        // Простой вид
                        <div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website
                                zu bieten. Einige sind notwendig, andere helfen uns, die Website zu
                                verbessern und Karten anzuzeigen.
                            </p>
                            <p className="text-gray-600 text-xs">
                                Mehr dazu in unserer{' '}
                                {/* ✅ FIX: underline всегда видно, не только по цвету */}
                                <Link
                                    href="/datenschutz"
                                    className="text-secondary-dark underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
                                >
                                    Datenschutzerklärung
                                </Link>
                                .
                            </p>
                        </div>
                    ) : (
                        // Детальный вид
                        <div className="space-y-4">
                            {/* Necessary - always on */}
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Notwendig</p>
                                    <p className="text-xs text-gray-600">
                                        Erforderlich für die Grundfunktionen der Website
                                    </p>
                                </div>
                                <div className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded">
                                    Immer aktiv
                                </div>
                            </div>

                            {/* Maps */}
                            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Karten (Google Maps)</p>
                                    <p className="text-xs text-gray-600">
                                        Ermöglicht die Anzeige interaktiver Karten
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={selected.maps}
                                    onChange={() => handleToggle('maps')}
                                    className="w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary"
                                    aria-label="Google Maps aktivieren"
                                />
                            </label>

                            {/* Analytics */}
                            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Analyse</p>
                                    <p className="text-xs text-gray-600">
                                        Hilft uns, die Nutzung der Website zu verstehen
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={selected.analytics}
                                    onChange={() => handleToggle('analytics')}
                                    className="w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary"
                                    aria-label="Analyse-Cookies aktivieren"
                                />
                            </label>

                            {/* Marketing */}
                            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Marketing</p>
                                    <p className="text-xs text-gray-600">
                                        Für personalisierte Werbung
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={selected.marketing}
                                    onChange={() => handleToggle('marketing')}
                                    className="w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary"
                                    aria-label="Marketing-Cookies aktivieren"
                                />
                            </label>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="p-5 bg-gray-50 border-t border-gray-100">
                    {!showDetails ? (
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <button
                                    onClick={rejectAll}
                                    className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                >
                                    Ablehnen
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="flex-1 px-4 py-2.5 text-sm font-medium text-primary bg-secondary rounded-lg hover:bg-secondary/90 transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                >
                                    Alle akzeptieren
                                </button>
                            </div>
                            <button
                                onClick={() => setShowDetails(true)}
                                className="text-sm text-gray-600 hover:text-gray-900 underline transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
                            >
                                Einstellungen anpassen
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <button
                                    onClick={rejectAll}
                                    className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                >
                                    Alle ablehnen
                                </button>
                                <button
                                    onClick={handleAcceptSelected}
                                    className="flex-1 px-4 py-2.5 text-sm font-medium text-primary bg-secondary rounded-lg hover:bg-secondary/90 transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                >
                                    Auswahl speichern
                                </button>
                            </div>
                            <button
                                onClick={() => setShowDetails(false)}
                                className="text-sm text-gray-600 hover:text-gray-900 underline transition focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
                            >
                                ← Zurück
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}