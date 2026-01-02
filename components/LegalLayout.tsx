import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
}

export default function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Hauptseite
        </Link>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 font-serif break-words hyphens-auto"
          lang="de"
        >
          {title}
        </h1>

        <div
          className="prose prose-gray max-w-none break-words hyphens-auto
            prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:break-words prose-h2:hyphens-auto
            prose-h3:text-lg prose-h3:sm:text-xl prose-h3:break-words prose-h3:hyphens-auto
            prose-p:text-sm prose-p:sm:text-base
            prose-li:text-sm prose-li:sm:text-base"
          lang="de"
        >
          {children}
        </div>
      </div>
    </div>
  )
}