import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillSphere',
  description: 'SkillSphere is an AI-driven micro-SaaS platform that offers personalized learning paths and micro-certifications in niche tech skills for professionals. It leverages educational technology and personal finance principles to provide value-based pricing models, making advanced skill acquisition affordable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
