/**
 * Export Japanese Resume as PDF
 * 
 * Purpose: Generate and download PDF of Japanese resume
 * Location: /app/api/resume/japanese/[id]/pdf/route.ts
 * 
 * Uses Puppeteer for server-side PDF generation with proper Japanese font support
 */

import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db/neon'
import puppeteer from 'puppeteer'

export const dynamic = 'force-dynamic' // This route uses dynamic data

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let browser
  try {
    // Fetch resume from database
    const resumes = await sql`
      SELECT 
        id,
        resume_type,
        job_title,
        company_name,
        generated_sections,
        is_default
      FROM japanese_resume_generations
      WHERE id = ${params.id}::uuid AND is_active = true
    ` as Array<{
      id: string
      resume_type: string
      job_title: string | null
      company_name: string | null
      generated_sections: any
      is_default: boolean
    }>

    if (resumes.length === 0) {
      return NextResponse.json(
        { error: 'Resume not found' },
        { status: 404 }
      )
    }

    const resume = resumes[0]

    // Launch Puppeteer
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    
    // Set viewport for A4 size
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    })

    // Generate HTML for resume
    const html = generateResumeHTML(resume)

    // Set content
    await page.setContent(html, { waitUntil: 'networkidle0' })

    // Wait for fonts to load
    await page.waitForTimeout(1000)

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm',
      },
    })

    await browser.close()

    // Return PDF
    const filename = `${resume.resume_type}_george_nekwaya.pdf`
    return new NextResponse(pdfBuffer as any, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    if (browser) {
      await browser.close()
    }
    return NextResponse.json(
      { error: 'Failed to generate PDF', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

function generateResumeHTML(resume: any): string {
  const sections = resume.generated_sections
  const resumeType = resume.resume_type

  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resumeType === 'rirekisho' ? '履歴書' : '職務経歴書'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      padding: 20mm;
    }
    h1 {
      font-size: 24pt;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30pt;
      border-bottom: 2pt solid #000;
      padding-bottom: 10pt;
    }
    h2 {
      font-size: 14pt;
      font-weight: 700;
      margin-top: 20pt;
      margin-bottom: 8pt;
      border-bottom: 1pt solid #333;
      padding-bottom: 4pt;
    }
    p {
      margin-bottom: 8pt;
      text-align: justify;
    }
    ul {
      margin-left: 20pt;
      margin-bottom: 8pt;
    }
    li {
      margin-bottom: 4pt;
    }
    @media print {
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <h1>${resumeType === 'rirekisho' ? '履歴書' : '職務経歴書'}</h1>
  
  ${resumeType === 'rirekisho' ? generateRirekishoHTML(sections) : generateShokumuKeirekishoHTML(sections)}
  
  <div style="margin-top: 30pt; text-align: right; font-size: 9pt; color: #666;">
    Generated on ${new Date().toLocaleDateString('ja-JP')}
  </div>
</body>
</html>
  `
}

function generateRirekishoHTML(sections: any): string {
  return `
    ${sections['職務要約'] ? `<h2>職務要約</h2><p>${escapeHtml(sections['職務要約'])}</p>` : ''}
    ${sections['活用できる経験・知識・スキル'] ? `
      <h2>活用できる経験・知識・スキル</h2>
      <ul>
        ${Array.isArray(sections['活用できる経験・知識・スキル'])
          ? sections['活用できる経験・知識・スキル'].map((item: string) => `<li>${escapeHtml(item)}</li>`).join('')
          : `<li>${escapeHtml(sections['活用できる経験・知識・スキル'])}</li>`}
      </ul>
    ` : ''}
    ${sections['職務経歴'] ? `<h2>職務経歴</h2><p>${escapeHtml(sections['職務経歴'])}</p>` : ''}
    ${sections['技術スキル'] ? `<h2>技術スキル</h2><p>${escapeHtml(sections['技術スキル'])}</p>` : ''}
    ${sections['資格'] ? `<h2>資格</h2><p>${escapeHtml(sections['資格'])}</p>` : ''}
    ${sections['自己PR'] ? `<h2>自己PR</h2><p>${escapeHtml(sections['自己PR'])}</p>` : ''}
    ${sections['語学力'] ? `<h2>語学力</h2><p>${escapeHtml(sections['語学力'])}</p>` : ''}
    ${sections['志望動機'] ? `<h2>志望動機</h2><p>${escapeHtml(sections['志望動機'])}</p>` : ''}
  `
}

function generateShokumuKeirekishoHTML(sections: any): string {
  return `
    ${sections['経歴要約'] ? `<h2>経歴要約</h2><p>${escapeHtml(sections['経歴要約'])}</p>` : ''}
    ${sections['職務内容'] ? `<h2>職務内容</h2><div>${escapeHtml(sections['職務内容'])}</div>` : ''}
    ${sections['活用できる経験・知識・スキル'] ? `<h2>活用できる経験・知識・スキル</h2><p>${escapeHtml(sections['活用できる経験・知識・スキル'])}</p>` : ''}
    ${sections['自己PR'] ? `<h2>自己PR</h2><p>${escapeHtml(sections['自己PR'])}</p>` : ''}
  `
}

function escapeHtml(text: string): string {
  if (typeof text !== 'string') {
    text = String(text)
  }
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>')
}
