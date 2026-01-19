/**
 * Home Page - Hybrid Layout
 * 
 * Purpose: Main landing page with original hero and about sections, and a bento grid for the rest.
 * Location: /app/page.tsx
 * 
 * Dark Theme Adaptation: All text colors adapted for dark background (midnight-forest)
 */

import Link from 'next/link'
import { ExperienceSection } from '@/components/features/experience/ExperienceSection'
import { EducationSection } from '@/components/features/education/EducationSection'
import { AwardsSection } from '@/components/features/awards/AwardsSection'
import { SkillsSection } from '@/components/features/skills/SkillsSection'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'
import HeroSection from '@/components/features/hero/HeroSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section (New Animated Version) */}
      <HeroSection />

      {/* About Section (Original) */}
      <section id="about" className="section bg-background py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10 text-foreground font-act-title tracking-act-title">
            About
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground max-w-none">
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-act-body">
              Innovative MBA graduate and technology leader with 8+ years of experience spanning data analytics, AI/ML development, 
              system design, and international business development. My unique background combines civil engineering foundations 
              with advanced business strategy, enabling me to build scalable solutions that bridge technical innovation and 
              real-world impact.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-act-body">
              I specialize in developing AI-powered applications, designing data-driven systems, and leading cross-functional 
              teams to deliver products that solve complex challenges. My work spans fintech, healthcare, insurance, hospitality, 
              and education—from building RAG-powered AI agents and knowledge graphs to developing real-time computer vision 
              systems and voice AI platforms. As a Hassenfeld Fellow, I&apos;ve gained immersive global business experience 
              across Israel, India, Germany, and the UAE, studying cutting-edge technologies and business models in emerging markets.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-act-body">
              Beyond technical expertise, I bring strong analytical capabilities in quantitative analysis, financial modeling, 
              and market research. My entrepreneurial experience includes founding <strong className="text-primary">Buffr</strong>, a digital 
              financial inclusion platform, and leading projects that have been recognized by accelerators including MassChallenge, 
              Global Venture Labs, and Brandeis Spark.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-act-body">
              I&apos;m passionate about applying AI/ML, system design, and quantitative analysis to help organizations make 
              data-driven decisions, optimize operations, and create meaningful social impact. Whether consulting on data analytics 
              strategies, building custom AI solutions, or developing fintech innovations, I bring a holistic approach that 
              combines technical depth with business acumen.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section (Standalone) */}
      <ExperienceSection />

      {/* Skills Section (Standalone) */}
      <SkillsSection />

      {/* Education Section (Standalone) */}
      <EducationSection />

      {/* Bento Grid Sections */}
      <div className="p-4 sm:p-6 md:p-8 bg-background">
        <BentoGrid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg" className="max-w-7xl mx-auto">
          <BentoCard span={{ col: 2, row: 1 }} className="md:col-span-2" variant="default">
            <AwardsSection />
          </BentoCard>
        </BentoGrid>
      </div>
    </main>
  )
}
