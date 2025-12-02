'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { label: 'Countries', value: '9+' },
    { label: 'Accelerators', value: '3' },
    { label: 'Years Experience', value: '7+' },
    { label: 'Telecom Towers', value: '10' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern-subtle overflow-hidden">
      {/* Minimal Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-slate)] to-[var(--color-charcoal)] opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 container-custom max-w-7xl px-6 py-32">
        {/* Name with Frame Corners */}
        <div className="text-center mb-12">
          <div className="frame-corners inline-block p-8 md:p-12">
            <h1 className="mb-4">
              <span className="gradient-gold">GEORGE NEKWAYA</span>
            </h1>
          </div>
        </div>

        {/* Tagline with Bracket */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="bracket-left pl-8">
            <p className="text-2xl md:text-3xl font-light text-[var(--color-text-primary)] tracking-tight">
              Fintech Founder × Data Strategist × Global Citizen
            </p>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mt-4 font-light">
              Building financial identity for the next billion
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card p-6 text-center"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className="stat-number mb-2">{stat.value}</div>
              <div className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:george@buffr.ai?subject=Resume Request"
            className="btn btn-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Request Resume
          </a>

          <Link href="/experience/" className="btn btn-outline">
            View Experience
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center text-[var(--color-text-tertiary)]">
            <span className="text-xs uppercase tracking-widest font-medium mb-2">Scroll to Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-[var(--color-gold)] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
