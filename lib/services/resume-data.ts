/**
 * Resume Data Service
 * 
 * Purpose: Load and parse resume data from markdown file
 * Location: /lib/services/resume-data.ts
 */

import fs from 'fs'
import path from 'path'

export interface ResumeData {
  name: string
  contactInfo: {
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
  }
  professionalSummary: string
  education: Array<{
    degree: string
    school: string
    location: string
    period: string
    gpa?: string
    concentrations?: string[]
  }>
  experience: Array<{
    role: string
    company: string
    location: string
    period: string
    description: string
    achievements?: string[]
  }>
  skills: {
    [category: string]: string[]
  }
  projects: Array<{
    title: string
    year: string
    description: string
  }>
  certifications: string[]
  awards: Array<{
    award: string
    org: string
    year: string
  }>
}

export async function loadResumeData(): Promise<ResumeData> {
  // In production, this could be from a database or API
  // For now, read from data file
  const resumePath = path.join(process.cwd(), 'data', 'resume', 'GEORGE_NEKWAYA_RESUME.md')
  
  try {
    const resumeContent = fs.readFileSync(resumePath, 'utf-8')
    // Return the full markdown content as a string for AI processing
    // The AI will parse and structure it
    return {
      name: 'George Nekwaya',
      contactInfo: {
        email: 'george@buffr.ai',
        phone: '+1 206-530-8433',
        location: 'Boston, MA / Windhoek, Namibia',
        website: 'www.georgenekwaya.com',
        linkedin: 'linkedin.com/in/george-nekwaya',
      },
      professionalSummary: resumeContent, // Pass full content for AI to parse
      education: [],
      experience: [],
      skills: {},
      projects: [],
      certifications: [],
      awards: [],
    }
  } catch (error) {
    console.error('Failed to load resume data:', error)
    throw new Error('Resume data not found. Please ensure data/resume/GEORGE_NEKWAYA_RESUME.md exists.')
  }
}

// Helper function to format resume data as text for AI prompt
export function formatResumeForPrompt(resumeData: ResumeData | string): string {
  // If it's already a string (markdown content), return it
  if (typeof resumeData === 'string') {
    return resumeData
  }

  // Otherwise format the structured data
  return `
Name: ${resumeData.name}
Contact: ${resumeData.contactInfo.email} | ${resumeData.contactInfo.phone}
Location: ${resumeData.contactInfo.location}

PROFESSIONAL SUMMARY:
${resumeData.professionalSummary}

EDUCATION:
${resumeData.education.map((e) => `${e.degree} - ${e.school} (${e.period})`).join('\n')}

EXPERIENCE:
${resumeData.experience.map((e) => `${e.role} at ${e.company} (${e.period})\n${e.description}`).join('\n\n')}

SKILLS:
${Object.entries(resumeData.skills).map(([cat, skills]) => `${cat}: ${(skills as string[]).join(', ')}`).join('\n')}
  `
}
