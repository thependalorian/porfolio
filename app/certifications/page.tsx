/**
 * Certifications Page
 * 
 * Purpose: Dedicated page showcasing all certifications and credentials
 * Location: /app/certifications/page.tsx
 * 
 * Features:
 * - Accredible certificates (direct image URLs)
 * - Local certificates (MBA, BEng, etc.)
 * - Image modal for full-size viewing
 * - Verified credential links
 */

import { CertificationsSection } from '@/components/features/certifications/CertificationsSection'

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <span className="section-title">Certifications</span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-foreground">
            Professional <span className="text-gradient">Credentials</span>
          </h1>
          
          <CertificationsSection />
        </div>
      </div>
    </div>
  )
}
