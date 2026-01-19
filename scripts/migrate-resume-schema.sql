-- ============================================
-- Database Migration: Add Default Resume Fields
-- ============================================
-- Run this script to add is_default, is_active, and updated_at columns
-- to the japanese_resume_generations table

-- Add new columns
ALTER TABLE japanese_resume_generations
ADD COLUMN IF NOT EXISTS is_default BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_japanese_resume_default 
  ON japanese_resume_generations(is_default, is_active) 
  WHERE is_default = true;

CREATE INDEX IF NOT EXISTS idx_japanese_resume_active 
  ON japanese_resume_generations(is_active) 
  WHERE is_active = true;

-- Update existing records to be active by default
UPDATE japanese_resume_generations
SET is_active = true
WHERE is_active IS NULL;

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_japanese_resume_updated_at 
  BEFORE UPDATE ON japanese_resume_generations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Verify migration
SELECT 
  column_name, 
  data_type, 
  column_default
FROM information_schema.columns
WHERE table_name = 'japanese_resume_generations'
  AND column_name IN ('is_default', 'is_active', 'updated_at')
ORDER BY column_name;
