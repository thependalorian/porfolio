/**
 * Logout API Route
 * 
 * Purpose: Handle user logout using Neon Auth
 * Location: /app/api/auth/logout/route.ts
 */

import { NextRequest, NextResponse } from 'next/server'
import { signOutFromNeonAuth } from '@/lib/auth/neon-auth'

export async function POST(request: NextRequest) {
  try {
    await signOutFromNeonAuth(request)
    
    return NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error: any) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: error.message || 'Logout failed' },
      { status: 500 }
    )
  }
}
