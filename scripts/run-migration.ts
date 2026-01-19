/**
 * Run Database Migration Script
 * 
 * Purpose: Execute SQL migration to add resume_data_hash column
 * Location: /scripts/run-migration.ts
 * 
 * Usage: npx tsx scripts/run-migration.ts
 */

import { sql } from '../lib/db/neon'
import fs from 'fs'
import path from 'path'

async function runMigration() {
  try {
    console.log('🔄 Running database migration...')
    console.log('=' .repeat(50))
    
    // Execute migration statements directly
    console.log('Adding resume_data_hash column...')
    try {
      await sql`
        ALTER TABLE japanese_resume_generations
        ADD COLUMN IF NOT EXISTS resume_data_hash VARCHAR(64)
      `
      console.log('✅ Added resume_data_hash column')
    } catch (error) {
      if (error instanceof Error && error.message.includes('already exists')) {
        console.log('ℹ️  Column already exists')
      } else {
        throw error
      }
    }
    
    console.log('Creating index...')
    try {
      await sql`
        CREATE INDEX IF NOT EXISTS idx_japanese_resume_hash 
        ON japanese_resume_generations(resume_data_hash) 
        WHERE resume_data_hash IS NOT NULL
      `
      console.log('✅ Created index')
    } catch (error) {
      if (error instanceof Error && error.message.includes('already exists')) {
        console.log('ℹ️  Index already exists')
      } else {
        throw error
      }
    }
    
    // Verify migration
    console.log('')
    console.log('🔍 Verifying migration...')
    const verification = await sql`
      SELECT 
        column_name, 
        data_type, 
        character_maximum_length,
        is_nullable
      FROM information_schema.columns
      WHERE table_name = 'japanese_resume_generations'
        AND column_name = 'resume_data_hash'
    ` as Array<{ column_name: string; data_type: string; character_maximum_length: number | null; is_nullable: string }>
    
    if (verification.length > 0) {
      console.log('✅ Migration successful!')
      console.log('Column details:', verification[0])
    } else {
      console.log('⚠️  Warning: Column not found after migration')
    }
    
    console.log('')
    console.log('=' .repeat(50))
    console.log('✅ Migration complete!')
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
      console.error('Stack:', error.stack)
    }
    process.exit(1)
  }
}

runMigration()
