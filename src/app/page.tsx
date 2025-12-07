import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillSphere',
  description: 'SkillSphere is an AI-driven micro-SaaS platform that offers personalized learning paths and micro-certifications in niche tech skills for professionals. It leverages educational technology and personal finance principles to provide value-based pricing models, making advanced skill acquisition affordable.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillSphere</h1>
      <p className="mt-4 text-lg">SkillSphere is an AI-driven micro-SaaS platform that offers personalized learning paths and micro-certifications in niche tech skills for professionals. It leverages educational technology and personal finance principles to provide value-based pricing models, making advanced skill acquisition affordable.</p>
    </main>
  )
}
