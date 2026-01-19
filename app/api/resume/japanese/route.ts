/**
 * Get Japanese Resumes API
 * 
 * Purpose: Fetch all available Japanese resumes (public)
 * Location: /app/api/resume/japanese/route.ts
 */

import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db/neon'

export const dynamic = 'force-dynamic' // This route uses dynamic data

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const defaultOnly = searchParams.get('default') === 'true'

    type ResumeRow = {
      id: string
      resume_type: string
      job_title: string | null
      company_name: string | null
      generated_sections: any
      is_default: boolean
      created_at: Date
    }

    let resumes: ResumeRow[]
    if (defaultOnly) {
      // Get only default resumes
      resumes = await sql`
        SELECT 
          id,
          resume_type,
          job_title,
          company_name,
          generated_sections,
          is_default,
          created_at
        FROM japanese_resume_generations
        WHERE is_default = true AND is_active = true
        ORDER BY resume_type, created_at DESC
      ` as ResumeRow[]
    } else {
      // Get all active resumes
      resumes = await sql`
        SELECT 
          id,
          resume_type,
          job_title,
          company_name,
          generated_sections,
          is_default,
          created_at
        FROM japanese_resume_generations
        WHERE is_active = true
        ORDER BY is_default DESC, created_at DESC
      ` as ResumeRow[]
    }

    return NextResponse.json({
      resumes: resumes.map((r) => ({
        id: r.id,
        resumeType: r.resume_type,
        jobTitle: r.job_title,
        companyName: r.company_name,
        sections: r.generated_sections,
        isDefault: r.is_default,
        createdAt: r.created_at,
        pdfUrl: `/api/resume/japanese/${r.id}/pdf`,
      })),
    })
  } catch (error) {
    console.error('Error fetching resumes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resumes' },
      { status: 500 }
    )
  }
}
