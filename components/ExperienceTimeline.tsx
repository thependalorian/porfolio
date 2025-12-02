'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Experience {
  period: string
  role: string
  company: string
  location: string
  highlights: string[]
  link: string
  accent: 'gold' | 'teal'
}

export default function ExperienceTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences: Experience[] = [
    {
      period: '2024 - 2025',
      role: 'Project Manager, DEIJ & Workforce Development',
      company: 'The Alliance for Climate Transition (ACT)',
      location: 'Massachusetts, USA',
      highlights: [
        'Led workforce development assessment with Massachusetts Clean Energy Center',
        'Conducted 14+ in-depth interviews with clean energy companies',
        'Built ACT Climate Economy Careers Platform with AI features',
      ],
      link: '/experience/',
      accent: 'gold',
    },
    {
      period: '2023 - Present',
      role: 'Founder',
      company: 'Buffr Inc.',
      location: 'Windhoek, Namibia',
      highlights: [
        'Building financial identity for Namibia\'s informal economy',
        'Won Asper Student Startup Prize',
        'Selected for MassChallenge, Global Venture Labs, Brandeis Spark',
      ],
      link: '/ventures/',
      accent: 'teal',
    },
    {
      period: '2023',
      role: 'Business Development Intern',
      company: 'Insait IO',
      location: 'Tel Aviv, Israel',
      highlights: [
        'Analyzed financial data for predictive analytics',
        'Researched EU AI Act and US regulatory compliance',
        'Developed compliance framework documentation',
      ],
      link: '/experience/',
      accent: 'gold',
    },
    {
      period: '2022 - 2024',
      role: 'MBA Candidate',
      company: 'Brandeis International Business School',
      location: 'Waltham, MA',
      highlights: [
        'Concentrations: Data Analytics, Strategy & Innovation',
        'GPA: 3.45/4.0 | VP of IBSSA, Graduate Student Senator',
      ],
      link: '/experience/',
      accent: 'teal',
    },
    {
      period: '2018 - 2019',
      role: 'Business Operations Manager / Site Engineer',
      company: 'Polar Power Inc.',
      location: 'Windhoek, Namibia',
      highlights: [
        'Constructed 10 telecommunication towers for MTC',
        'Established partnerships across Southern Africa',
        'Directed teams of 10+ employees',
      ],
      link: '/experience/',
      accent: 'gold',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <Link key={index} href={exp.link}>
          <div
            className="relative mb-12 last:mb-0 group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Connecting Line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)] ml-[7px]"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 z-10">
              <div className={`timeline-dot ${exp.accent === 'gold' ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-teal)]'}`}></div>
            </div>

            {/* Content Card */}
            <div className="ml-12">
              <div className="card p-8">
                {/* Period Badge */}
                <div className={`inline-block mb-4 ${exp.accent === 'gold' ? 'badge-gold' : 'badge-teal'} badge`}>
                  {exp.period}
                </div>

                {/* Role & Company */}
                <h3 className={`text-2xl font-bold mb-2 ${exp.accent === 'gold' ? 'text-gold' : 'text-teal'} group-hover:shimmer transition-all`}>
                  {exp.role}
                </h3>

                <div className="mb-4">
                  <p className="text-lg font-semibold text-[var(--color-text-primary)]">{exp.company}</p>
                  <p className="text-sm text-[var(--color-text-tertiary)]">{exp.location}</p>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-[var(--color-text-secondary)]">
                      <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        exp.accent === 'gold' ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-teal)]'
                      }`}></span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* View More Arrow */}
                <div className={`mt-6 flex items-center ${exp.accent === 'gold' ? 'text-gold' : 'text-teal'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm font-semibold tracking-wide uppercase mr-2">View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
