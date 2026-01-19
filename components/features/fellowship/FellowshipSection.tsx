/**
 * Hassenfeld Fellowship Section
 * 
 * Purpose: Display Hassenfeld Fellowship details
 * Location: /components/features/fellowship/FellowshipSection.tsx
 */

import { hassenfeldFellowship } from '@/lib/data/professional-data'

export function FellowshipSection() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="card bg-act-moss-green/20 border border-border-light shadow-lg backdrop-blur-sm">
          <div className="card-body">
            <h3 className="text-2xl font-semibold mb-4 text-text-primary font-act-title tracking-act-title">
              {hassenfeldFellowship.title}
            </h3>
            <p className="text-text-primary mb-6 font-act-body">{hassenfeldFellowship.description}</p>
            
            <div className="space-y-6">
              {hassenfeldFellowship.locations.map((location, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-3 text-text-primary font-act-title">
                    {location.name}:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-text-primary ml-4 font-act-body">
                    {location.points.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
