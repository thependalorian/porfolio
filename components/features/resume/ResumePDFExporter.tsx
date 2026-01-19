/**
 * Resume PDF Exporter Component
 * 
 * Purpose: Export Japanese resume to PDF
 * Location: /components/features/resume/ResumePDFExporter.tsx
 * 
 * Features:
 * - Client-side PDF generation (jsPDF) - fast, no server load
 * - Server-side PDF generation (Puppeteer) - better quality, Japanese fonts
 * - Loading states
 * - Error handling
 */

'use client'

import { useState } from 'react'
import jsPDF from 'jspdf'

interface ResumePDFExporterProps {
  resumeId: string
  resumeType: 'rirekisho' | 'shokumu-keirekisho'
  method?: 'client' | 'server' // 'client' uses jsPDF, 'server' uses Puppeteer
}

export function ResumePDFExporter({
  resumeId,
  resumeType,
  method = 'server', // Default to server for better Japanese font support
}: ResumePDFExporterProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      if (method === 'server') {
        // Server-side PDF generation (better for Japanese fonts)
        const response = await fetch(`/api/resume/japanese/${resumeId}/pdf`)
        if (!response.ok) {
          throw new Error('Failed to generate PDF')
        }
        
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${resumeType}_george_nekwaya.pdf`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      } else {
        // Client-side PDF generation (jsPDF)
        await exportWithJsPDF(resumeId, resumeType)
      }
    } catch (error) {
      console.error('PDF export error:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="btn btn-outline btn-sm"
    >
      {isExporting ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Generating PDF...
        </>
      ) : (
        'Export PDF'
      )}
    </button>
  )
}

// Client-side PDF generation (optional - for faster exports)
async function exportWithJsPDF(resumeId: string, resumeType: string) {
  // Fetch resume data
  const response = await fetch(`/api/resume/japanese/${resumeId}`)
  const { resume } = await response.json()
  
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  let yPosition = margin
  const lineHeight = 7
  const maxWidth = pageWidth - 2 * margin

  // Helper to add text with word wrap
  const addText = (text: string, fontSize: number = 12, isBold: boolean = false) => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', isBold ? 'bold' : 'normal')
    
    const lines = doc.splitTextToSize(text, maxWidth)
    
    if (yPosition + (lines.length * lineHeight) > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }
    
    lines.forEach((line: string) => {
      doc.text(line, margin, yPosition)
      yPosition += lineHeight
    })
  }

  // Title
  addText(
    resumeType === 'rirekisho' ? '履歴書 (Rirekisho)' : '職務経歴書 (Shokumu-keirekisho)',
    18,
    true
  )
  yPosition += 5

  // Sections
  Object.entries(resume.sections).forEach(([key, value]) => {
    yPosition += 5
    addText(`${key}`, 14, true)
    yPosition += 3
    
    if (Array.isArray(value)) {
      value.forEach((item: string) => {
        addText(`• ${item}`, 11, false)
      })
    } else {
      addText(String(value), 11, false)
    }
  })

  // Save PDF
  const filename = `${resumeType}_george_nekwaya_${Date.now()}.pdf`
  doc.save(filename)
}
