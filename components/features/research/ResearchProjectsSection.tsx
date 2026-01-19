/**
 * Research Projects Section - Consistent with Featured Projects
 * 
 * Purpose: Display research and academic projects in a consistent bento grid layout
 * Location: /components/features/research/ResearchProjectsSection.tsx
 * 
 * Features:
 * - Bento grid layout matching Featured Projects
 * - Project cards with consistent styling
 * - High contrast design
 */

import { researchProjects } from '@/lib/data/professional-data'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'
import { FileText, Calendar } from 'lucide-react'

export function ResearchProjectsSection() {
  return (
    <BentoGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
      {researchProjects.map((project, index) => {
        const isFeatured = index === 0 // First project is featured
        
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
                  <FileText className="w-4 h-4 text-act-spring-green" />
                  <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                    Academic Project • {project.year}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 font-act-title tracking-act-title">
                  {project.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-sm md:text-base text-text-secondary flex-1 leading-relaxed font-act-body">
                {project.description}
              </p>
            </div>
          </BentoCard>
        )
      })}
    </BentoGrid>
  )
}
