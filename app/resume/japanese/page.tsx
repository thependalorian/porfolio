/**
 * Japanese Resume Page
 * 
 * Purpose: Public page displaying default Japanese resumes (履歴書 and 職務経歴書)
 * Location: /app/resume/japanese/page.tsx
 * 
 * Features:
 * - Displays both rirekisho and shokumu-keirekisho
 * - PDF export functionality
 * - Clean, Japan-inspired layout
 * - Responsive design
 */

'use client'

import { useEffect, useState } from 'react'
import { JapaneseResumeViewer } from '@/components/features/resume/JapaneseResumeViewer'
import { ResumePDFExporter } from '@/components/features/resume/ResumePDFExporter'

interface JapaneseResume {
  id: string
  resumeType: 'rirekisho' | 'shokumu-keirekisho'
  sections: Record<string, any>
  createdAt: string
  pdfUrl: string
  jobTitle?: string | null
  companyName?: string | null
  isDefault?: boolean
}

export default function JapaneseResumePage() {
  const [rirekisho, setRirekisho] = useState<JapaneseResume | null>(null)
  const [shokumuKeirekisho, setShokumuKeirekisho] = useState<JapaneseResume | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchResumes() {
      try {
        const response = await fetch('/api/resume/japanese?default=true')
        if (!response.ok) {
          throw new Error('Failed to fetch resumes')
        }
        const data = await response.json()
        
        // Find default resumes
        const defaultRirekisho = data.resumes.find(
          (r: JapaneseResume) => r.resumeType === 'rirekisho' && r.isDefault
        )
        const defaultShokumu = data.resumes.find(
          (r: JapaneseResume) => r.resumeType === 'shokumu-keirekisho' && r.isDefault
        )
        
        setRirekisho(defaultRirekisho || null)
        setShokumuKeirekisho(defaultShokumu || null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load resumes')
      } finally {
        setLoading(false)
      }
    }

    fetchResumes()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Japanese Resume (日本語履歴書)</h1>
        <p className="text-base-content/70">
          View and download my Japanese resumes in standard format
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rirekisho (履歴書) */}
        {rirekisho && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title text-2xl">履歴書 (Rirekisho)</h2>
                <ResumePDFExporter resumeId={rirekisho.id} resumeType="rirekisho" />
              </div>
              <JapaneseResumeViewer
                resume={rirekisho}
                documentType="rirekisho"
              />
            </div>
          </div>
        )}

        {/* Shokumu-keirekisho (職務経歴書) */}
        {shokumuKeirekisho && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title text-2xl">職務経歴書 (Shokumu-keirekisho)</h2>
                <ResumePDFExporter resumeId={shokumuKeirekisho.id} resumeType="shokumu-keirekisho" />
              </div>
              <JapaneseResumeViewer
                resume={shokumuKeirekisho}
                documentType="shokumu-keirekisho"
              />
            </div>
          </div>
        )}
      </div>

      {!rirekisho && !shokumuKeirekisho && (
        <div className="alert alert-info mt-8">
          <span>Japanese resumes are being prepared. Please check back soon.</span>
        </div>
      )}
    </div>
  )
}
