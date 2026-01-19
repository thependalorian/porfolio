/**
 * Generate Default Japanese Resumes Script
 * 
 * Purpose: Pre-generate default rirekisho and shokumu-keirekisho for public viewing
 * Location: /scripts/generate-default-resumes.ts
 * 
 * Usage:
 *   npx tsx scripts/generate-default-resumes.ts           # Only regenerate if resume data changed
 *   npx tsx scripts/generate-default-resumes.ts --force   # Force regeneration regardless
 * 
 * Prerequisites:
 * - DATABASE_URL environment variable set
 * - OPENAI_API_KEY, GROQ_API_KEY, or ANTHROPIC_API_KEY set
 * - Resume data file at data/resume/GEORGE_NEKWAYA_RESUME.md
 * 
 * Features:
 * - Detects resume data changes using content hash
 * - Only regenerates if resume data has been updated
 * - Supports force regeneration with --force flag
 * - Updates existing default resumes when data changes
 */

import { loadResumeData, formatResumeForPrompt } from '../lib/services/resume-data'
import { generateRirekisho, generateShokumuKeirekisho } from '../lib/services/japanese-resume-generator'
import { sql } from '../lib/db/neon'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

// Calculate hash of resume file content
function calculateResumeHash(resumePath: string): string {
  const content = fs.readFileSync(resumePath, 'utf-8')
  return crypto.createHash('sha256').update(content).digest('hex')
}

// Check if resume data has changed
async function hasResumeDataChanged(resumeType: string, currentHash: string): Promise<boolean> {
  const existing = await sql`
    SELECT resume_data_hash, updated_at
    FROM japanese_resume_generations
    WHERE resume_type = ${resumeType} AND is_default = true AND is_active = true
    LIMIT 1
  `
  
  if (existing.length === 0) {
    return true // No existing resume, needs generation
  }
  
  const storedHash = existing[0].resume_data_hash
  if (!storedHash) {
    return true // No hash stored, needs generation
  }
  
  return storedHash !== currentHash // Changed if hashes don't match
}

async function generateDefaultResumes() {
  try {
    // Check for --force flag
    const forceRegenerate = process.argv.includes('--force')
    
    console.log('📄 Resume Generation Script')
    console.log('=' .repeat(50))
    if (forceRegenerate) {
      console.log('⚠️  Force mode: Will regenerate regardless of resume data changes')
    } else {
      console.log('ℹ️  Smart mode: Will only regenerate if resume data has changed')
    }
    console.log('')
    
    // Get resume file path and calculate hash
    const resumePath = path.join(process.cwd(), 'data', 'resume', 'GEORGE_NEKWAYA_RESUME.md')
    
    if (!fs.existsSync(resumePath)) {
      throw new Error(`Resume file not found at: ${resumePath}`)
    }
    
    const resumeHash = calculateResumeHash(resumePath)
    console.log(`📋 Resume file: ${resumePath}`)
    console.log(`🔐 Resume data hash: ${resumeHash.substring(0, 16)}...`)
    console.log('')
    
    console.log('Loading resume data...')
    const resumeData = await loadResumeData()
    const resumeText = formatResumeForPrompt(resumeData)

    // Generate Rirekisho
    const shouldRegenerateRirekisho = forceRegenerate || await hasResumeDataChanged('rirekisho', resumeHash)
    
    if (!shouldRegenerateRirekisho) {
      console.log('⏭️  Skipping Rirekisho generation (resume data unchanged)')
    } else {
      console.log('🔄 Generating Rirekisho...')
      const rirekishoSections = await generateRirekisho(resumeText)

      // Check if default rirekisho already exists
      const existingRirekisho = await sql`
        SELECT id FROM japanese_resume_generations
        WHERE resume_type = 'rirekisho' AND is_default = true AND is_active = true
      `

      const aiProvider = process.env.GROQ_API_KEY ? 'groq' : process.env.ANTHROPIC_API_KEY ? 'anthropic' : 'openai'

      if (existingRirekisho.length === 0) {
        await sql`
          INSERT INTO japanese_resume_generations (
            resume_type,
            generated_sections,
            is_default,
            is_active,
            ai_provider,
            resume_data_hash
          )
          VALUES (
            'rirekisho',
            ${JSON.stringify(rirekishoSections)}::jsonb,
            true,
            true,
            ${aiProvider},
            ${resumeHash}
          )
        `
        console.log('✅ Default Rirekisho created')
      } else {
        // Update existing default rirekisho with new data
        await sql`
          UPDATE japanese_resume_generations
          SET 
            generated_sections = ${JSON.stringify(rirekishoSections)}::jsonb,
            ai_provider = ${aiProvider},
            resume_data_hash = ${resumeHash},
            updated_at = NOW()
          WHERE resume_type = 'rirekisho' AND is_default = true AND is_active = true
        `
        console.log('✅ Default Rirekisho updated with latest resume data')
      }
    }

    // Generate Shokumu-keirekisho
    const shouldRegenerateShokumu = forceRegenerate || await hasResumeDataChanged('shokumu-keirekisho', resumeHash)
    
    if (!shouldRegenerateShokumu) {
      console.log('⏭️  Skipping Shokumu-keirekisho generation (resume data unchanged)')
    } else {
      console.log('🔄 Generating Shokumu-keirekisho...')
      const shokumuKeirekishoSections = await generateShokumuKeirekisho(resumeText)

      // Check if default shokumu-keirekisho already exists
      const existingShokumu = await sql`
        SELECT id FROM japanese_resume_generations
        WHERE resume_type = 'shokumu-keirekisho' AND is_default = true AND is_active = true
      `

      const aiProvider = process.env.GROQ_API_KEY ? 'groq' : process.env.ANTHROPIC_API_KEY ? 'anthropic' : 'openai'

      if (existingShokumu.length === 0) {
        await sql`
          INSERT INTO japanese_resume_generations (
            resume_type,
            generated_sections,
            is_default,
            is_active,
            ai_provider,
            resume_data_hash
          )
          VALUES (
            'shokumu-keirekisho',
            ${JSON.stringify(shokumuKeirekishoSections)}::jsonb,
            true,
            true,
            ${aiProvider},
            ${resumeHash}
          )
        `
        console.log('✅ Default Shokumu-keirekisho created')
      } else {
        // Update existing default shokumu-keirekisho with new data
        await sql`
          UPDATE japanese_resume_generations
          SET 
            generated_sections = ${JSON.stringify(shokumuKeirekishoSections)}::jsonb,
            ai_provider = ${aiProvider},
            resume_data_hash = ${resumeHash},
            updated_at = NOW()
          WHERE resume_type = 'shokumu-keirekisho' AND is_default = true AND is_active = true
        `
        console.log('✅ Default Shokumu-keirekisho updated with latest resume data')
      }
    }

    console.log('')
    console.log('=' .repeat(50))
    console.log('✅ Resume generation complete!')
    console.log('📄 Visit /resume/japanese to view the resumes')
    console.log('')
    console.log('💡 Tip: Run with --force to regenerate even if resume data unchanged')
  } catch (error) {
    console.error('Error generating default resumes:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
      console.error('Stack:', error.stack)
    }
    process.exit(1)
  }
}

generateDefaultResumes()
