# 📄 Japanese Resume Page Implementation
## Public Resume Display & PDF Export

**Purpose:** Dedicated page for viewing and downloading Japanese resumes  
**Route:** `/resume/japanese`  
**Features:** Display both rirekisho and shokumu-keirekisho, PDF export

---

## 📋 Overview

The Japanese resume page provides a public-facing interface where visitors can:
- View default Japanese resumes (履歴書 and 職務経歴書)
- Export resumes to PDF
- See both resume types side-by-side or in tabs
- Clean, Japan-inspired layout

**Key Features:**
- Pre-generated default resumes (stored in database)
- PDF export (server-side with Puppeteer for Japanese font support)
- Responsive design
- Print-friendly styling

---

## 🗄️ Database Schema Updates

### Updated `japanese_resume_generations` Table

```sql
-- Add columns for default resume management
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
```

**Schema Fields:**
- `is_default`: `true` for resumes shown on public page
- `is_active`: `false` to hide from public view
- `updated_at`: Track when resume was last updated

---

## 🎨 Page Structure

### Route: `/resume/japanese`

**File:** `app/resume/japanese/page.tsx`

**Layout:**
```
┌─────────────────────────────────────────┐
│     Japanese Resume (日本語履歴書)      │
│  View and download my Japanese resumes │
└─────────────────────────────────────────┘

┌──────────────────────┬──────────────────────┐
│  履歴書 (Rirekisho)  │ 職務経歴書 (Shokumu) │
│                      │                      │
│  [Export PDF Button] │  [Export PDF Button] │
│                      │                      │
│  [Resume Content]    │  [Resume Content]    │
│  - 職務要約          │  - 経歴要約          │
│  - 活用できる経験... │  - 職務内容          │
│  - 職務経歴          │  - 自己PR            │
│  - 技術スキル        │                      │
│  - 資格              │                      │
│  - 自己PR            │                      │
│  - 語学力            │                      │
│  - 志望動機          │                      │
└──────────────────────┴──────────────────────┘
```

---

## 🔌 API Endpoints

### 1. GET /api/resume/japanese

**Purpose:** Fetch all available Japanese resumes

**Query Parameters:**
- `default=true` - Only return default resumes

**Response:**
```json
{
  "resumes": [
    {
      "id": "uuid-rirekisho",
      "resumeType": "rirekisho",
      "jobTitle": null,
      "companyName": null,
      "sections": {
        "職務要約": "...",
        "活用できる経験・知識・スキル": ["...", "...", "..."],
        "職務経歴": "...",
        "技術スキル": "...",
        "資格": "...",
        "自己PR": "...",
        "語学力": "...",
        "志望動機": "..."
      },
      "isDefault": true,
      "createdAt": "2026-01-15T10:00:00Z",
      "pdfUrl": "/api/resume/japanese/uuid-rirekisho/pdf"
    },
    {
      "id": "uuid-shokumu",
      "resumeType": "shokumu-keirekisho",
      "jobTitle": null,
      "companyName": null,
      "sections": {
        "経歴要約": "...",
        "職務内容": "...",
        "活用できる経験・知識・スキル": "...",
        "自己PR": "..."
      },
      "isDefault": true,
      "createdAt": "2026-01-15T10:00:00Z",
      "pdfUrl": "/api/resume/japanese/uuid-shokumu/pdf"
    }
  ]
}
```

### 2. GET /api/resume/japanese/[id]

**Purpose:** Get specific resume by ID

**Response:**
```json
{
  "resume": {
    "id": "uuid",
    "resumeType": "rirekisho",
    "jobTitle": null,
    "companyName": null,
    "jobDescription": null,
    "sections": { /* full sections */ },
    "isDefault": true,
    "createdAt": "2026-01-15T10:00:00Z",
    "pdfUrl": "/api/resume/japanese/uuid/pdf"
  }
}
```

### 3. GET /api/resume/japanese/[id]/pdf

**Purpose:** Export resume as PDF

**Response:**
- Content-Type: `application/pdf`
- Content-Disposition: `attachment; filename="rirekisho_george_nekwaya.pdf"`
- Body: PDF file binary

**Implementation:**
- Uses Puppeteer for server-side PDF generation
- Renders HTML with Noto Sans JP font
- A4 format with proper margins
- Preserves Japanese text formatting

### 4. POST /api/resume/japanese/generate (Admin Only)

**Purpose:** Generate new Japanese resume (for custom job applications)

**Request Body:**
```json
{
  "jobTitle": "Data Analyst", // Optional
  "companyName": "Tech Company Japan", // Optional
  "jobDescription": "Job requirements...", // Optional
  "resumeType": "rirekisho", // or "shokumu-keirekisho" or "both"
  "setAsDefault": false // Admin can set as default
}
```

**Response:**
```json
{
  "success": true,
  "resumeId": "uuid",
  "resumeType": "rirekisho",
  "sections": { /* generated sections */ },
  "pdfUrl": "/api/resume/japanese/uuid/pdf"
}
```

---

## 🧩 Components

### 1. Japanese Resume Page (`app/resume/japanese/page.tsx`)

**Features:**
- Fetches default resumes on page load
- Displays both rirekisho and shokumu-keirekisho
- Loading and error states
- Responsive grid layout

### 2. Japanese Resume Viewer (`components/features/resume/JapaneseResumeViewer.tsx`)

**Features:**
- Formatted display of all resume sections
- Japan-inspired typography (Noto Sans JP)
- Print-friendly styling
- Handles both resume types

### 3. Resume PDF Exporter (`components/features/resume/ResumePDFExporter.tsx`)

**Features:**
- Export button with loading state
- Server-side PDF generation (default)
- Client-side PDF generation (optional, jsPDF)
- Error handling

---

## 📦 Dependencies

```bash
npm install jspdf @types/jspdf puppeteer
```

**Note:** Puppeteer requires additional system dependencies on Linux. For Vercel deployment, consider using `@sparticuz/chromium` or a serverless Puppeteer alternative.

---

## 🚀 Initial Setup

### Step 1: Generate Default Resumes

Run the script to pre-generate default resumes:

```bash
npx tsx scripts/generate-default-resumes.ts
```

This will:
1. Load resume data from `data/resume/GEORGE_NEKWAYA_RESUME.md`
2. Generate both rirekisho and shokumu-keirekisho
3. Store in database with `is_default=true`
4. Make them available on `/resume/japanese` page

### Step 2: Verify Resumes

```bash
# Check if default resumes exist
curl http://localhost:3000/api/resume/japanese?default=true
```

### Step 3: Test PDF Export

```bash
# Get resume ID from above response, then:
curl http://localhost:3000/api/resume/japanese/[id]/pdf --output test.pdf
```

---

## 🎨 Styling

### Typography

```css
/* Use Noto Sans JP for Japanese text */
.japanese-resume-viewer {
  font-family: 'Noto Sans JP', sans-serif;
}

/* Section headers */
h2 {
  font-size: 1.25rem;
  font-weight: 700;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
```

### Print Styles

```css
@media print {
  .japanese-resume-viewer {
    font-size: 11pt;
    line-height: 1.6;
  }
  
  /* Hide export buttons when printing */
  .pdf-export-button {
    display: none;
  }
}
```

---

## ✅ Implementation Checklist

- [ ] Update database schema (add `is_default`, `is_active`, `updated_at`)
- [ ] Create `app/resume/japanese/page.tsx`
- [ ] Create `components/features/resume/JapaneseResumeViewer.tsx`
- [ ] Create `components/features/resume/ResumePDFExporter.tsx`
- [ ] Create `app/api/resume/japanese/route.ts` (GET)
- [ ] Create `app/api/resume/japanese/[id]/route.ts` (GET)
- [ ] Create `app/api/resume/japanese/[id]/pdf/route.ts` (GET)
- [ ] Update `app/api/resume/japanese/generate/route.ts` (POST) to support `setAsDefault`
- [ ] Create `scripts/generate-default-resumes.ts`
- [ ] Install dependencies (`jspdf`, `puppeteer`)
- [ ] Test page load and resume display
- [ ] Test PDF export functionality
- [ ] Verify Japanese fonts render correctly in PDF
- [ ] Test responsive design
- [ ] Add navigation link to `/resume/japanese` page

---

## 🔄 Workflow

### Public User Flow

```
1. User visits /resume/japanese
   ↓
2. Page fetches default resumes
   GET /api/resume/japanese?default=true
   ↓
3. Display both resumes
   - Rirekisho (履歴書)
   - Shokumu-keirekisho (職務経歴書)
   ↓
4. User clicks "Export PDF"
   ↓
5. Request PDF generation
   GET /api/resume/japanese/[id]/pdf
   ↓
6. Server generates PDF with Puppeteer
   - Renders HTML with Japanese fonts
   - Converts to PDF
   ↓
7. Download PDF file
```

### Admin Flow (Generate Default Resumes)

```
1. Admin runs script
   npx tsx scripts/generate-default-resumes.ts
   ↓
2. Script generates both resume types
   - Calls AI service
   - Stores in database
   - Sets is_default=true
   ↓
3. Resumes available on public page
   /resume/japanese
```

---

## 🎯 Key Features

### 1. Pre-Generated Default Resumes

- Both rirekisho and shokumu-keirekisho generated once
- Stored in database with `is_default=true`
- Always available on public page
- No generation delay for visitors

### 2. PDF Export

- Server-side generation (Puppeteer) for best quality
- Proper Japanese font support (Noto Sans JP)
- A4 format with professional margins
- Print-ready output

### 3. Responsive Design

- Mobile: Stacked layout (one resume per row)
- Desktop: Side-by-side layout (two columns)
- Print-friendly styling

### 4. Error Handling

- Graceful fallback if resumes not found
- Loading states
- Error messages for failed PDF generation

---

## 📝 Notes

**Puppeteer on Vercel:**
- Vercel serverless functions have size limits
- Consider using `@sparticuz/chromium` for Vercel compatibility
- Or use client-side jsPDF as fallback

**Japanese Fonts:**
- Noto Sans JP loaded from Google Fonts
- Ensure fonts load before PDF generation
- Wait for `networkidle0` in Puppeteer

**Performance:**
- Default resumes cached in database
- PDF generation is on-demand (no pre-generation)
- Consider caching generated PDFs if needed

---

**Status:** ✅ Ready for Implementation  
**Dependencies:** jsPDF, Puppeteer, Neon DB  
**Route:** `/resume/japanese` (public)
