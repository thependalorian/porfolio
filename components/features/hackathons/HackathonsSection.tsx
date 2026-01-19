/**
 * Hackathon Projects Section - Consistent with Featured Projects
 * 
 * Purpose: Display hackathon projects in a consistent bento grid layout
 * Location: /components/features/hackathons/HackathonsSection.tsx
 * 
 * Features:
 * - Bento grid layout matching Featured Projects
 * - Project cards with consistent styling
 * - Links to DevPost/projects
 * - High contrast design
 */

import { hackathonProjects } from '@/lib/data/professional-data'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'
import { ExternalLink, Calendar, Trophy } from 'lucide-react'

export function HackathonsSection() {
  return (
    <BentoGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
      {hackathonProjects.map((project, index) => {
        const isFeatured = index === 0 // First project (LifeCompass) is featured
        const isDevPost = project.link?.includes('devpost.com')
        
        return (
          <BentoCard
            key={index}
            span={isFeatured ? { col: 2, row: 1 } : undefined}
            variant={isFeatured ? 'elevated' : 'default'}
            hover
            className={isFeatured ? 'md:col-span-2 bg-gradient-to-br from-act-spring-green/5 to-act-mint/5 border-2 border-act-spring-green/30' : ''}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-act-spring-green" />
                  <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                    {project.event}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 font-act-title tracking-act-title">
                  {project.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-sm md:text-base text-text-secondary mb-4 flex-1 leading-relaxed font-act-body">
                {project.description}
              </p>
              
              {/* Link */}
              {project.link && (
                <div className="mt-auto pt-4 border-t border-border-light">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline gap-2 border-act-spring-green text-act-spring-green hover:bg-act-spring-green hover:text-black w-full md:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {isDevPost ? 'View on DevPost' : 'View Project'}
                  </a>
                </div>
              )}
            </div>
          </BentoCard>
        )
      })}
    </BentoGrid>
  )
}
