# 🇯🇵 Japanese Resume Generation Implementation
## Direct AI Implementation (Not Yukio API)

**Purpose:** Generate Japanese resumes (履歴書) directly on the website using AI and resume data from yukio/data/japanese

---

## 📋 Overview

The website generates Japanese resumes **directly** using:
- **Resume Data**: From `yukio/data/japanese/markdown/GEORGE_NEKWAYA_RESUME.md`
- **AI Service**: OpenAI or Anthropic API (not Yukio API)
- **Prompt Structure**: Based on Yukio's proven prompts
- **Output**: Structured Japanese resume sections in business format (敬語)

---

## 🗂️ Resume Data Structure

### Source File
**Location:** `yukio/data/japanese/markdown/GEORGE_NEKWAYA_RESUME.md`

**Key Sections:**
- Professional Summary
- Education (MBA, Engineering)
- Technical Skills (Data Analysis, AI/ML, Web Development, Business Analysis)
- Professional Experience:
  - Buffr Inc. (Founder & CEO) - Jan 2023 - Present
  - ACT (Project Manager) - Oct 2024 - June 2025
  - Aquasaic Corporation (Consultant) - Oct 2024 - Mar 2025
  - Insait IO (Intern) - June 2023 - July 2023
  - Polar Power Inc. (Operations Manager) - July 2018 - April 2020
  - Etuna Guesthouse (Operations Manager) - 2010 - 2020
- Analytical Projects
- Certifications & Awards
- Global Exposure

### Website Storage
**Copy to:** `data/resume/GEORGE_NEKWAYA_RESUME.md`

```bash
# Setup command
mkdir -p data/resume
cp ../yukio/data/japanese/markdown/GEORGE_NEKWAYA_RESUME.md data/resume/
```

---

## 🤖 AI Generation Service

### Service Architecture

```
User Request
    ↓
Load Resume Data (from data/resume/GEORGE_NEKWAYA_RESUME.md)
    ↓
Build Prompt (using Yukio's structure)
    ↓
Call OpenAI/Anthropic API
    ↓
Parse JSON Response
    ↓
Store in Supabase
    ↓
Return to User
```

### Prompt Structure (Based on Yukio)

**Rirekisho (履歴書) Prompt:**
```
Based on the following resume information, create a Japanese rirekisho (履歴書) document.

RESUME INFORMATION:
[Full resume data from GEORGE_NEKWAYA_RESUME.md]

JOB CONTEXT:
Target Position: [job_title]
Target Company: [company_name]
Job Requirements: [job_description]

⚠️ CRITICAL: ALL content MUST be in JAPANESE (日本語), not English, Thai, or any other language.
Use proper business Japanese format (敬語).

Please provide the following sections in Japanese business format (敬語):
1. 職務要約 (Job Summary) - 200-300 words describing work experience, strengths, and how you can contribute
2. 活用できる経験・知識・スキル (Experience, knowledge, and skills) - 3 bullet points
3. 職務経歴 (Work History) - Succinct summary of each job
4. 技術スキル (Technical Skills) - Computer skills, software, programming languages
5. 資格 (Qualifications) - Certifications and licenses
6. 自己PR (Self-PR) - Specific examples demonstrating skills, motivation, and enthusiasm
7. 語学力 (Language Skills) - Japanese proficiency level (include JLPT if applicable)
8. 志望動機 (Motivation) - Why you want to work in Japan/for this company

Format your response as JSON with these exact keys:
{
  "職務要約": "...",
  "活用できる経験・知識・スキル": ["...", "...", "..."],
  "職務経歴": "...",
  "技術スキル": "...",
  "資格": "...",
  "自己PR": "...",
  "語学力": "...",
  "志望動機": "..."
}
```

**Shokumu-keirekisho (職務経歴書) Prompt:**
```
Based on the following resume information, create a Japanese shokumu-keirekisho (職務経歴書) document.

RESUME INFORMATION:
[Full resume data]

JOB CONTEXT:
[Job details]

⚠️ CRITICAL: ALL content MUST be in JAPANESE (日本語).

Please provide in Japanese business format (敬語):
1. 経歴要約 (Personal History Summary) - 200-300 characters, career overview, key achievements
2. 職務内容 (Work History) - Reverse chronological order, detailed responsibilities, quantifiable results
3. 活用できる経験・知識・スキル (Qualifications, Knowledge, Skills) - Organized by category
4. 自己PR (Self-PR) - Use STAR method, connect to job requirements

Format as JSON:
{
  "経歴要約": "...",
  "職務内容": "...",
  "活用できる経験・知識・スキル": "...",
  "自己PR": "..."
}
```

---

## 📝 Required Sections

### Rirekisho (履歴書) - 8 Sections

1. **職務要約 (Job Summary)**
   - 200-300 words in Japanese
   - Describe work experience, strengths, contribution potential
   - Use business Japanese (敬語)

2. **活用できる経験・知識・スキル (Experience, Knowledge, Skills)**
   - Exactly 3 bullet points in Japanese
   - Select most relevant skills/experiences for the position

3. **職務経歴 (Work History)**
   - Succinct summary in Japanese
   - List each job briefly (company, role, key achievements)

4. **技術スキル (Technical Skills)**
   - List in Japanese
   - Include: Programming languages, software, tools

5. **資格 (Qualifications)**
   - Certifications and licenses in Japanese
   - Use official names

6. **自己PR (Self-PR)**
   - Specific examples in Japanese
   - Demonstrate skills, motivation, enthusiasm

7. **語学力 (Language Skills)**
   - Languages and proficiency levels in Japanese
   - Include JLPT level if applicable

8. **志望動機 (Motivation)**
   - Why work in Japan/for this company
   - Connect personal goals with company values
   - Use business Japanese (敬語)

### Shokumu-keirekisho (職務経歴書) - 4 Sections

1. **経歴要約 (Personal History Summary)**
   - 200-300 characters in Japanese
   - Career overview, key achievements

2. **職務内容 (Work History)**
   - Reverse chronological order
   - Detailed responsibilities
   - Quantifiable results

3. **活用できる経験・知識・スキル (Qualifications, Knowledge, Skills)**
   - Organized by category
   - Proficiency levels

4. **自己PR (Self-PR)**
   - STAR method examples
   - Connect to job requirements

---

## 🔧 Implementation Files

### 1. Resume Data Service
**File:** `lib/services/resume-data.ts`
- Loads `GEORGE_NEKWAYA_RESUME.md`
- Parses markdown into structured data
- Formats for AI prompt

### 2. Japanese Resume Generator Service
**File:** `lib/services/japanese-resume-generator.ts`
- `generateRirekisho()` - Generate 履歴書
- `generateShokumuKeirekisho()` - Generate 職務経歴書
- Calls OpenAI/Anthropic API
- Returns structured JSON

### 3. API Route
**File:** `app/api/resume/japanese/generate/route.ts`
- Validates request
- Loads resume data
- Calls generator service
- Stores in Supabase
- Returns sections

### 4. Component
**File:** `components/features/resume/JapaneseResumeGenerator.tsx`
- Form for job details
- Resume type selector
- Display generated sections
- Download functionality

---

## 🎯 Key Implementation Details

### AI Model Selection
- **Recommended:** `gpt-4o` or `gpt-4-turbo` (better Japanese)
- **Alternative:** `claude-3-5-sonnet` (Anthropic)
- **Temperature:** 0.7 (balanced creativity/consistency)

### Response Format
- **JSON Mode:** Use `response_format: { type: 'json_object' }`
- **Structured Output:** All sections as JSON keys
- **Language:** ALL content in Japanese (日本語)

### Error Handling
- Resume data not found → Clear error message
- AI API failure → Retry logic (3 attempts)
- Invalid response → Fallback to manual generation

### Caching Strategy
- Cache generated resumes in Supabase
- Reuse for same job title + company
- TTL: 30 days (resumes can be updated)

---

## 📊 Database Schema

```sql
CREATE TABLE japanese_resume_generations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_title VARCHAR(255),
    company_name VARCHAR(255),
    job_description TEXT,
    resume_type VARCHAR(50) NOT NULL, -- 'rirekisho', 'shokumu-keirekisho', 'both'
    ai_provider VARCHAR(50) DEFAULT 'openai',
    generated_sections JSONB NOT NULL, -- All sections in Japanese
    pdf_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address INET,
    user_agent TEXT
);
```

**JSONB Structure:**
```json
{
  "rirekisho": {
    "職務要約": "...",
    "活用できる経験・知識・スキル": ["...", "...", "..."],
    "職務経歴": "...",
    "技術スキル": "...",
    "資格": "...",
    "自己PR": "...",
    "語学力": "...",
    "志望動機": "..."
  },
  "shokumu_keirekisho": {
    "経歴要約": "...",
    "職務内容": "...",
    "活用できる経験・知識・スキル": "...",
    "自己PR": "..."
  }
}
```

---

## ✅ Implementation Checklist

- [ ] Copy `GEORGE_NEKWAYA_RESUME.md` to `data/resume/`
- [ ] Create `lib/services/resume-data.ts`
- [ ] Create `lib/services/japanese-resume-generator.ts`
- [ ] Create `app/api/resume/japanese/generate/route.ts`
- [ ] Create `components/features/resume/JapaneseResumeGenerator.tsx`
- [ ] Set up OpenAI/Anthropic API key
- [ ] Test resume generation
- [ ] Test PDF generation (optional)
- [ ] Add error handling
- [ ] Add rate limiting
- [ ] Test with different job titles/companies

---

## 🔗 Yukio Learning Link

**Separate Component:** `components/features/resume/YukioLink.tsx`

```tsx
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Learn Japanese with Yukio</h2>
    <p>Practice Japanese conversation and improve your language skills</p>
    <a 
      href="https://yukio.georgenekwaya.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      Open Yukio AI Tutor →
    </a>
  </div>
</div>
```

**Note:** This is just a link to Yukio frontend. Resume generation is completely separate and uses direct AI.

---

## 🎨 Design Integration

The Japanese resume generator should follow Japan-inspired design:
- Clean, minimal form
- Clear section labels
- Japanese typography (Noto Sans JP)
- Subtle cultural touches
- Fast, responsive interface

---

**Status:** ✅ Ready for Implementation  
**Approach:** Direct AI (OpenAI/Anthropic) - NOT Yukio API  
**Data Source:** `yukio/data/japanese/markdown/GEORGE_NEKWAYA_RESUME.md`
