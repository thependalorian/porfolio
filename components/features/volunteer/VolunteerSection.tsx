/**
 * Volunteer & Community Impact Section
 * 
 * Purpose: Display volunteer work and community impact
 * Location: /components/features/volunteer/VolunteerSection.tsx
 */

import { volunteer } from '@/lib/data/professional-data'

export function VolunteerSection() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          {volunteer.map((item, index) => (
            <div key={index} className="card bg-act-moss-green/20 border border-border-light shadow-lg backdrop-blur-sm">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-3 text-text-primary font-act-title tracking-act-title">
                  {item.org}
                </h3>
                <p className="text-text-primary font-act-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
