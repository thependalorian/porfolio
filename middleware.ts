/**
 * Next.js Middleware
 * 
 * Purpose: Protect admin routes and handle authentication
 * Location: /middleware.ts
 * 
 * Features:
 * - Admin route protection
 * - Session validation
 * - Redirect to login if not authenticated
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from '@/lib/auth/neon-auth'

// Admin routes that require authentication
const ADMIN_ROUTES = [
  '/admin',
  '/dashboard',
]

// Public routes that don't require authentication
const PUBLIC_ROUTES = [
  '/',
  '/resume',
  '/api/resume',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/session',
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public routes
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  // Check if route is admin-protected
  const isAdminRoute = ADMIN_ROUTES.some(route => pathname.startsWith(route))

  if (isAdminRoute) {
    try {
      // Get user from Neon Auth
      const user = await getCurrentUser(request)

      // Check if user is authenticated
      if (!user) {
        // Redirect to login
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('callbackUrl', pathname)
        return NextResponse.redirect(loginUrl)
      }

      // Check if user is admin (george@buffr.ai)
      if (user.email !== 'george@buffr.ai') {
        // Redirect to unauthorized page
        return NextResponse.redirect(new URL('/unauthorized', request.url))
      }

      // User is authenticated and is admin - allow access
      return NextResponse.next()
    } catch (error) {
      console.error('Middleware auth error:', error)
      // On error, redirect to login
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Allow all other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
