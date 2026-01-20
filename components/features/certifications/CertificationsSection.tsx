/**
 * Certifications Section - Bento Grid Layout with Direct Certificate Images
 * 
 * Purpose: Display certifications from Accredible with direct image embeds
 * Location: /components/features/certifications/CertificationsSection.tsx
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { certificates } from '@/lib/data/professional-data'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'
import { Award, ExternalLink, Shield, X, Maximize2 } from 'lucide-react'

export function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-2 font-act-title tracking-act-title">
            Certifications
          </h2>
          <a
            href="https://www.credential.net/profile/georgenekwaya/wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-act-spring-green hover:text-act-mint transition-colors"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">View all credentials on Accredible</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <BentoGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
          {certificates.map((cert, index) => {
            const isFeatured = index === 0 && cert.credentialId === 'mba-degree'
            const hasAccredibleLink = cert.credentialUrl && cert.credentialUrl.length > 0
            
            return (
              <BentoCard
                key={cert.credentialId}
                span={isFeatured ? { col: 2, row: 2 } : undefined}
                variant={isFeatured ? 'elevated' : 'default'}
                hover
                className={isFeatured ? 'bg-gradient-to-br from-act-spring-green/10 to-act-mint/10 border-2 border-act-spring-green/30 shadow-xl' : ''}
              >
                <div className="flex flex-col h-full">
                  {/* Accredible certificates: Use only accredibleImageUrl, never local images */}
                  {hasAccredibleLink && cert.accredibleImageUrl ? (
                    <div className="relative w-full mb-3 rounded-lg overflow-hidden bg-bg-secondary border border-border-light group cursor-pointer">
                      {/* For featured certificates, use aspect ratio instead of fixed height */}
                      <div className={`relative w-full ${isFeatured ? 'aspect-[16/10] max-h-[400px]' : 'h-[200px] md:h-[250px]'}`}>
                        <Image
                          src={cert.accredibleImageUrl}
                          alt={cert.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          onClick={() => setSelectedImage(cert.accredibleImageUrl || null)}
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="bg-act-sand-gray/95 px-2 py-1 rounded-md flex items-center gap-1.5 text-xs font-medium text-act-midnight-forest shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3 h-3" />
                          <span>View</span>
                        </div>
                      </div>
                    </div>
                  ) : !hasAccredibleLink && cert.image ? (
                    <div className="relative w-full mb-3 rounded-lg overflow-hidden bg-bg-secondary border border-border-light group cursor-pointer">
                      {/* For landscape certificates (like MBA), use aspect ratio container */}
                      {isFeatured ? (
                        <div className="relative w-full aspect-[16/10] max-h-[400px]">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                            onClick={() => setSelectedImage(cert.image || null)}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          onClick={() => setSelectedImage(cert.image || null)}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex-shrink-0 p-1.5 bg-act-spring-green/10 rounded-lg">
                      <Award className="w-4 h-4 text-act-spring-green" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-md font-bold text-text-primary mb-0.5 line-clamp-2 font-act-title">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-text-secondary font-act-body">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {hasAccredibleLink && (
                    <div className="mt-auto pt-2 border-t border-border-light">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group hover:text-act-spring-green transition-colors"
                      >
                        <span className="text-xs text-text-tertiary group-hover:text-act-spring-green">
                          Verified Credential
                        </span>
                        <span className="text-xs font-medium text-act-spring-green flex items-center gap-1">
                          View
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </BentoCard>
            )
          })}
        </BentoGrid>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full bg-act-sand-gray rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Certificate"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}