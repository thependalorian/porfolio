/**
 * Contact Form API Route
 * 
 * Purpose: Handle contact form submissions
 * Location: /app/api/contact/route.ts
 * 
 * Features:
 * - Store submissions in database
 * - Rate limiting
 * - Input validation
 * - Optional email notification (via Namecheap email forwarding)
 */

import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db/neon'
import { z } from 'zod'
import { sendEmail, formatContactEmail } from '@/lib/email/namecheap-email'

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
})

// Simple in-memory rate limiting (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }) // 1 hour
    return true
  }

  if (limit.count >= 5) {
    return false // Too many requests
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    const userAgent = request.headers.get('user-agent') || undefined

    // Insert into Neon DB
    try {
      const result = await sql`
        INSERT INTO contact_submissions (name, email, subject, message, ip_address, user_agent, status)
        VALUES (${validatedData.name}, ${validatedData.email}, ${validatedData.subject || null}, ${validatedData.message}, ${ip}, ${userAgent}, 'pending')
        RETURNING id
      ` as Array<{ id: number }>

      const submissionId = result[0]?.id

      // Log email notification (optional - emails stored in database, view in admin dashboard)
      // If you set up Namecheap email forwarding, you can receive email notifications
      try {
        await sendEmail({
          to: process.env.CONTACT_EMAIL || 'george@buffr.ai',
          subject: `New Contact Form Submission: ${validatedData.subject || 'No Subject'}`,
          html: formatContactEmail(validatedData),
          from: 'contact@georgenekwaya.com',
        })
      } catch (emailError) {
        // Email sending is optional - don't fail the request if email fails
        console.error('Email notification failed (this is OK - submissions are stored in database):', emailError)
      }

      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        id: submissionId,
      })
    } catch (dbError: any) {
      console.error('Database error:', dbError)
      
      // Check if it's a duplicate submission (same email + message within 1 hour)
      if (dbError.code === '23505') { // Unique constraint violation
        return NextResponse.json(
          { success: false, error: 'You have already submitted this message. Please wait before submitting again.' },
          { status: 409 }
        )
      }

      throw dbError
    }
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    )
  }
}
