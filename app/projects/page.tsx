/**
 * Projects Page
 * 
 * Purpose: Dedicated page showcasing all projects
 * Location: /app/projects/page.tsx
 * 
 * Features:
 * - Full projects section with all featured and regular projects
 * - Research projects
 * - Hackathon projects
 * - Buffr detailed showcase
 */

import { ProjectsSection } from '@/components/features/projects'
import { BuffrSection } from '@/components/features/buffr/BuffrSection'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Buffr Section */}
      <div className="p-4 sm:p-6 md:p-8 bg-background">
        <BentoGrid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg" className="max-w-7xl mx-auto">
          <BentoCard span={{ col: 4, row: 1 }} className="md:col-span-4" variant="default">
            <BuffrSection />
          </BentoCard>
        </BentoGrid>
      </div>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  )
}
