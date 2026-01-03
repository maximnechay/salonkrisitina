import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'nechay1996@gmail.com'
const FROM_EMAIL = process.env.EMAIL_FROM || 'Kristina & Alexandra Mastersalon <noreply@xinvestai.com>'

type BookingPayload = {
    name: string
    email: string
    phone: string
    service: string
    message?: string
}

export async function POST(request: NextRequest) {
    try {
        const payload: BookingPayload = await request.json()
        const { name, email, phone, service, message } = payload

        // 1) Email an Admin
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `🗓 Neue Terminanfrage: ${service}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            Neue Terminanfrage
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Leistung:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nachricht:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="color: #666; font-size: 14px;">
            Gesendet am ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
          </p>
        </div>
      `,
        })

        // 2) Bestätigung an Kunden
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: 'Ihre Terminanfrage bei Kristina & Alexandra Mastersalon',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            Vielen Dank für Ihre Anfrage!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Liebe/r ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            vielen Dank für Ihre Terminanfrage. Wir haben folgende Angaben erhalten:
          </p>
          
          <div style="background: #f8f6f3; padding: 20px; margin: 20px 0; border-left: 3px solid #d4af37;">
            <p style="margin: 5px 0;"><strong>Gewünschte Leistung:</strong> ${service}</p>
            <p style="margin: 5px 0;"><strong>Telefon:</strong> ${phone}</p>
            ${message ? `<p style="margin: 5px 0;"><strong>Ihre Nachricht:</strong> ${message}</p>` : ''}
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Wir melden uns in Kürze bei Ihnen, um einen passenden Termin zu vereinbaren.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Herzliche Grüße,<br>
            <strong>Kristina & Alexandra</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="font-size: 13px; color: #888;">
            Kristina & Alexandra Mastersalon<br>
            Limbergstraße 53, 38518 Gifhorn<br>
            Tel: +49 176 412 901 58
          </p>
        </div>
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}