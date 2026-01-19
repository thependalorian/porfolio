/**
 * Get Specific Japanese Resume
 * 
 * Purpose: Fetch a specific resume by ID
 * Location: /app/api/resume/japanese/[id]/route.ts
 */

import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db/neon'

export const dynamic = 'force-dynamic' // This route uses dynamic data

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resumes = await sql`
      SELECT 
        id,
        resume_type,
        job_title,
        company_name,
        job_description,
        generated_sections,
        is_default,
        created_at
      FROM japanese_resume_generations
      WHERE id = ${params.id}::uuid AND is_active = true
    ` as Array<{
      id: string
      resume_type: string
      job_title: string | null
      company_name: string | null
      job_description: string | null
      generated_sections: any
      is_default: boolean
      created_at: Date
    }>

    if (resumes.length === 0) {
      return NextResponse.json(
        { error: 'Resume not found' },
        { status: 404 }
      )
    }

    const resume = resumes[0]

    return NextResponse.json({
      resume: {
        id: resume.id,
        resumeType: resume.resume_type,
        jobTitle: resume.job_title,
        companyName: resume.company_name,
        jobDescription: resume.job_description,
        sections: resume.generated_sections,
        isDefault: resume.is_default,
        createdAt: resume.created_at,
        pdfUrl: `/api/resume/japanese/${resume.id}/pdf`,
      },
    })
  } catch (error) {
    console.error('Error fetching resume:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resume' },
      { status: 500 }
    )
  }
}
