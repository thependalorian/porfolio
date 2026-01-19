/**
 * Login API Route
 * 
 * Purpose: Handle user login using Neon Auth
 * Location: /app/api/auth/login/route.ts
 * 
 * Features:
 * - Email/password authentication
 * - Admin check (george@buffr.ai only)
 * - JWT session creation
 */

import { NextRequest, NextResponse } from 'next/server'
import { signInWithNeonAuth } from '@/lib/auth/neon-auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Only allow george@buffr.ai to login
    if (email !== 'george@buffr.ai') {
      return NextResponse.json(
        { error: 'Access restricted. Only george@buffr.ai can login.' },
        { status: 403 }
      )
    }

    // Sign in using Neon Auth API
    const result = await signInWithNeonAuth(email, password)

    if (!result || !result.user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Create response with user data
    const response = NextResponse.json({
      success: true,
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
      },
    })

    // Set auth cookies from Neon Auth response
    if (result.cookies) {
      response.headers.set('Set-Cookie', result.cookies)
    }

    return response
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: error.message || 'Login failed' },
      { status: 500 }
    )
  }
}
