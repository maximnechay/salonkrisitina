'use client'

import { useState, FormEvent } from 'react'
import { supabase, SUPABASE_FUNCTIONS_URL } from '@/lib/supabase'

const services = [
  { value: '', label: 'Gewünschte Leistung' },
  { value: 'Haarschnitt', label: 'Haarschnitt' },
  { value: 'Farbe', label: 'Farbe' },
  { value: 'Strähnen', label: 'Strähnen / Highlights' },
  { value: 'Balayage', label: 'Balayage' },
  { value: 'Tönung', label: 'Tönung / Glossing' },
  { value: 'Styling', label: 'Styling / Föhnen' },
  { value: 'Pflege', label: 'Pflege / Treatment' },
]


export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('Anfrage wird gesendet...')

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      source_page: window.location.href,
    }

    try {
      // 1) Save to appointments table
      const { error } = await supabase
        .from('appointments')
        .insert([payload])

      if (error) {
        console.error('Supabase insert error:', error)
        setStatus('error')
        setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.')
        return
      }

      // 2) Call edge function to send email
      const fnRes = await fetch(`${SUPABASE_FUNCTIONS_URL}/send-booking-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!fnRes.ok) {
        console.error('Function error status', fnRes.status)
        // Show success to user anyway since DB insert worked
      }

      setStatus('success')
      setMessage('Vielen Dank! Ihre Anfrage wurde gesendet.')
        ; (e.target as HTMLFormElement).reset()
    } catch (err) {
      console.error('Unexpected error:', err)
      setStatus('error')
      setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.')
    }
  }

  return (
    <div className="bg-light p-8 md:p-12 lg:p-16">
      <h3 className="text-3xl mb-8 font-semibold font-serif">Termin anfragen</h3>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="sr-only">Ihr Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ihr Name"
            className="input-luxury"
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">E-Mail Adresse</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-Mail Adresse"
            className="input-luxury"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Telefonnummer</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Telefonnummer"
            className="input-luxury"
            required
            autoComplete="tel"
          />
        </div>

        <div>
          {/* ✅ FIX: Добавлен label для screen readers */}
          <label htmlFor="service" className="sr-only">Gewünschte Leistung</label>
          <select
            id="service"
            name="service"
            className="input-luxury"
            required
            aria-label="Gewünschte Leistung auswählen"
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Ihre Nachricht</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ihre Nachricht"
            rows={4}
            className="input-luxury resize-none"
          />
        </div>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className={`text-sm ${status === 'success' ? 'text-green-600' :
              status === 'error' ? 'text-red-600' : 'text-gray-600'
              }`}
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          className="btn-luxury btn-luxury-filled w-full"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Wird gesendet...' : 'Anfrage senden'}
        </button>
      </form>
    </div>
  )
}