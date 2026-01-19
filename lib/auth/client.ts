/**
 * Neon Auth Client (Client-Side)
 * 
 * Purpose: Client-side authentication helpers for React components
 * Location: /lib/auth/client.ts
 * 
 * Features:
 * - Sign in/out
 * - Get current session
 * - OAuth sign in
 * 
 * Note: Uses Neon Auth HTTP API directly
 */

'use client'

const NEON_AUTH_URL = process.env.NEXT_PUBLIC_NEON_AUTH_URL || 
  'https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth'

// Sign in with email and password
export async function signIn(email: string, password: string) {
  const response = await fetch(`${NEON_AUTH_URL}/sign-in/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Login failed' }))
    throw new Error(error.message || 'Login failed')
  }

  const data = await response.json()
  return data
}

// Sign out
export async function signOut() {
  const response = await fetch(`${NEON_AUTH_URL}/sign-out`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  return response.ok
}

// Get current session
export async function getSession() {
  try {
    const response = await fetch(`${NEON_AUTH_URL}/session`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.user || null
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}

// Sign in with OAuth (Google)
export async function signInWithGoogle() {
  // Redirect to Neon Auth OAuth endpoint
  window.location.href = `${NEON_AUTH_URL}/sign-in/social?provider=google`
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession()
  return !!session
}

// Check if user is admin
export async function isAdmin(): Promise<boolean> {
  const session = await getSession()
  return session?.email === 'george@buffr.ai'
}
