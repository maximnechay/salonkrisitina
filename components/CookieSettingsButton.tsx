'use client'

import { useCookieConsent } from './CookieConsent'
import { Cookie } from 'lucide-react'

export default function CookieSettingsButton() {
    const { openSettings } = useCookieConsent()

    return (
        <button
            onClick={openSettings}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-secondary transition"
        >
            <Cookie className="w-4 h-4" />
            Cookie-Einstellungen
        </button>
    )
}