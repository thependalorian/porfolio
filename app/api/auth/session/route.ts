/**
 * Session API Route
 * 
 * Purpose: Get current user session
 * Location: /app/api/auth/session/route.ts
 */

import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth/neon-auth'

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request)
    
    if (!user) {
      return NextResponse.json(
        { user: null },
        { status: 200 }
      )
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.email === 'george@buffr.ai',
      },
    })
  } catch (error: any) {
    console.error('Session error:', error)
    return NextResponse.json(
      { user: null },
      { status: 200 }
    )
  }
}
