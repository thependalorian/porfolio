-- ============================================
-- Create Japanese Resume Generations Table
-- ============================================

CREATE TABLE IF NOT EXISTS japanese_resume_generations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resume_type VARCHAR(50) NOT NULL CHECK (resume_type IN ('rirekisho', 'shokumu-keirekisho')),
    job_title VARCHAR(255),
    company_name VARCHAR(255),
    generated_sections JSONB NOT NULL,
    is_default BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    ai_provider VARCHAR(50) DEFAULT 'openai',
    resume_data_hash VARCHAR(64), -- SHA-256 hash of resume data file content for change detection
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_japanese_resume_type ON japanese_resume_generations(resume_type);
CREATE INDEX IF NOT EXISTS idx_japanese_resume_default ON japanese_resume_generations(is_default, is_active) WHERE is_default = true;
CREATE INDEX IF NOT EXISTS idx_japanese_resume_active ON japanese_resume_generations(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_japanese_resume_hash ON japanese_resume_generations(resume_data_hash) WHERE resume_data_hash IS NOT NULL;

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
