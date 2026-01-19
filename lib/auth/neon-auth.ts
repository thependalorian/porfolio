/**
 * Neon Auth Client Configuration
 * 
 * Purpose: Configure Neon Auth (Better Auth) for authentication
 * Location: /lib/auth/neon-auth.ts
 * 
 * Features:
 * - Email/password authentication via Neon Auth API
 * - JWT session management
 * - Server-side auth helpers
 * 
 * Note: Uses Neon Auth HTTP API directly (no SDK dependency)
 */

// Neon Auth URLs from your dashboard
const NEON_AUTH_URL = process.env.NEON_AUTH_URL || 
  'https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth'

const NEON_JWKS_URL = process.env.NEON_JWKS_URL || 
  'https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth/.well-known/jwks.json'

// Helper function to get session from request cookies
export async function getSessionFromRequest(request: Request) {
  try {
    const cookies = request.headers.get('cookie') || ''
    
    // Call Neon Auth session endpoint
    const response = await fetch(`${NEON_AUTH_URL}/session`, {
      method: 'GET',
      headers: {
        'Cookie': cookies,
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

// Helper function to get current user from request
export async function getCurrentUser(request: Request) {
  const user = await getSessionFromRequest(request)
  return user
}

// Helper function to check if user is admin
export async function isAdmin(request: Request): Promise<boolean> {
  const user = await getCurrentUser(request)
  return user?.email === 'george@buffr.ai'
}

// Helper function to require authentication
export async function requireAuth(request: Request) {
  const user = await getCurrentUser(request)
  if (!user) {
    throw new Error('Unauthorized: Authentication required')
  }
  return user
}

// Helper function to require admin
export async function requireAdmin(request: Request) {
  const user = await requireAuth(request)
  if (user.email !== 'george@buffr.ai') {
    throw new Error('Forbidden: Admin access required')
  }
  return user
}

// Sign in helper (for API routes)
export async function signInWithNeonAuth(email: string, password: string) {
  const response = await fetch(`${NEON_AUTH_URL}/sign-in/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Login failed' }))
    throw new Error(error.message || 'Login failed')
  }

  // Get cookies from response
  const setCookie = response.headers.get('set-cookie')
  
  return {
    user: await response.json(),
    cookies: setCookie,
  }
}

// Sign out helper
export async function signOutFromNeonAuth(request: Request) {
  const cookies = request.headers.get('cookie') || ''
  
  const response = await fetch(`${NEON_AUTH_URL}/sign-out`, {
    method: 'POST',
    headers: {
      'Cookie': cookies,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  return response.ok
}
