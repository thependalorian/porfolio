/**
 * Conferences Section
 * 
 * Purpose: Display conferences and professional events
 * Location: /components/features/conferences/ConferencesSection.tsx
 */

import { conferences } from '@/lib/data/professional-data'

export function ConferencesSection() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6">
          {conferences.map((conf, index) => (
            <div key={index} className="card bg-act-moss-green/20 border border-border-light shadow-lg backdrop-blur-sm">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-2 text-text-primary font-act-title tracking-act-title">
                  {conf.title}
                </h3>
                <p className="text-sm text-text-tertiary mb-3 font-act-body">
                  {conf.location} - {conf.year}
                </p>
                <p className="text-text-primary mb-4 whitespace-pre-line font-act-body">
                  {conf.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
