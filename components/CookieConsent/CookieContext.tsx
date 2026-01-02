'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type CookieConsent = {
    necessary: boolean    // Всегда true
    analytics: boolean    // Google Analytics и т.д.
    marketing: boolean    // Маркетинговые куки
    maps: boolean         // Google Maps, YouTube и т.д.
}

type CookieContextType = {
    consent: CookieConsent | null
    showBanner: boolean
    acceptAll: () => void
    acceptSelected: (selected: Partial<CookieConsent>) => void
    rejectAll: () => void
    openSettings: () => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

const COOKIE_KEY = 'cookie-consent'

const defaultConsent: CookieConsent = {
    necessary: true,
    analytics: false,
    marketing: false,
    maps: false,
}

export function CookieProvider({ children }: { children: ReactNode }) {
    const [consent, setConsent] = useState<CookieConsent | null>(null)
    const [showBanner, setShowBanner] = useState(false)

    // Загрузка согласия из localStorage
    useEffect(() => {
        const stored = localStorage.getItem(COOKIE_KEY)
        if (stored) {
            try {
                setConsent(JSON.parse(stored))
                setShowBanner(false)
            } catch {
                setShowBanner(true)
            }
        } else {
            setShowBanner(true)
        }
    }, [])

    // Сохранение согласия
    const saveConsent = (newConsent: CookieConsent) => {
        setConsent(newConsent)
        localStorage.setItem(COOKIE_KEY, JSON.stringify(newConsent))
        setShowBanner(false)
    }

    const acceptAll = () => {
        saveConsent({
            necessary: true,
            analytics: true,
            marketing: true,
            maps: true,
        })
    }

    const acceptSelected = (selected: Partial<CookieConsent>) => {
        saveConsent({
            ...defaultConsent,
            ...selected,
            necessary: true, // Всегда true
        })
    }

    const rejectAll = () => {
        saveConsent(defaultConsent)
    }

    const openSettings = () => {
        setShowBanner(true)
    }

    return (
        <CookieContext.Provider
            value={{
                consent,
                showBanner,
                acceptAll,
                acceptSelected,
                rejectAll,
                openSettings,
            }}
        >
            {children}
        </CookieContext.Provider>
    )
}

export function useCookieConsent() {
    const context = useContext(CookieContext)
    if (!context) {
        throw new Error('useCookieConsent must be used within CookieProvider')
    }
    return context
}