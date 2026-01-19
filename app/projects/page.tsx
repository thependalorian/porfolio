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
 */

import { ProjectsSection } from '@/components/features/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProjectsSection />
    </div>
  )
}
