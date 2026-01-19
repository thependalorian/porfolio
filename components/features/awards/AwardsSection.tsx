/**
 * Awards & Honors Section - Non-Brandeis Awards Only
 * 
 * Purpose: Display awards and recognition (excluding Brandeis awards which are now in Education section)
 * Location: /components/features/awards/AwardsSection.tsx
 */

import { awards } from '@/lib/data/professional-data'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'
import { Trophy, Star, Award as AwardIcon } from 'lucide-react'

export function AwardsSection() {
  // Filter out Brandeis awards (they're now in Education section)
  const nonBrandeisAwards = awards.filter(award => 
    !award.org.includes('Brandeis')
  )

  // If no non-Brandeis awards, return null (section won't render)
  if (nonBrandeisAwards.length === 0) {
    return null
  }

  const featuredAward = nonBrandeisAwards[0]
  const otherAwards = nonBrandeisAwards.slice(1)

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2 font-act-title tracking-act-title">
          Awards & Honors
        </h2>
      </div>
      <BentoGrid columns={{ sm: 1, md: 2, lg: 2 }} gap="md">
        {/* Featured Award */}
        {featuredAward && (
          <BentoCard
            span={{ col: 2, row: 1 }}
            variant="elevated"
            hover
            className="md:col-span-2 bg-gradient-to-br from-act-spring-green/5 to-act-mint/5 border-2 border-act-spring-green/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-act-spring-green rounded-lg">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <div className="badge badge-primary badge-xs mb-1.5 bg-act-spring-green text-black">
                  Featured Award
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1 font-act-title tracking-act-title">
                  {featuredAward.award}
                </h3>
                <p className="text-sm text-text-secondary font-medium mb-1 font-act-body">
                  {featuredAward.org}
                </p>
                <p className="text-xs text-text-tertiary font-act-body">{featuredAward.year}</p>
              </div>
            </div>
          </BentoCard>
        )}

        {/* Other Awards */}
        {otherAwards.map((award, index) => (
          <BentoCard
            key={index}
            variant="default"
            hover
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 bg-bg-secondary rounded-lg">
                {index === 0 ? (
                  <Star className="w-5 h-5 text-act-spring-green" />
                ) : (
                  <AwardIcon className="w-5 h-5 text-text-tertiary" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-md text-text-primary mb-0.5 font-act-title">
                  {award.award}
                </h3>
                <p className="text-sm text-text-secondary mb-0.5 font-act-body">
                  {award.org}
                </p>
                <p className="text-xs text-text-tertiary font-act-body">{award.year}</p>
              </div>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  )
}