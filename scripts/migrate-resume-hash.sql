-- ============================================
-- Database Migration: Add Resume Data Hash Tracking
-- ============================================
-- Run this script to add resume_data_hash column for tracking resume updates
-- This allows the generation script to detect when resume data has changed

-- Add resume_data_hash column to track resume file content changes
ALTER TABLE japanese_resume_generations
ADD COLUMN IF NOT EXISTS resume_data_hash VARCHAR(64);

-- Create index for efficient hash lookups
CREATE INDEX IF NOT EXISTS idx_japanese_resume_hash 
  ON japanese_resume_generations(resume_data_hash) 
  WHERE resume_data_hash IS NOT NULL;

-- Add comment to document the column
COMMENT ON COLUMN japanese_resume_generations.resume_data_hash IS 
  'SHA-256 hash of resume data file content. Used to detect when resume data has changed and regeneration is needed.';

-- Verify migration
SELECT 
  column_name, 
  data_type, 
  character_maximum_length,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'japanese_resume_generations'
  AND column_name = 'resume_data_hash';
