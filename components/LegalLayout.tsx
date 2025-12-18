import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
}

export default function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Hauptseite
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 font-serif">
          {title}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          {children}
        </div>
      </div>
    </div>
  )
}
