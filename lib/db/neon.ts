/**
 * Neon DB Connection
 * 
 * Purpose: Connect to Neon PostgreSQL database using serverless driver
 * Location: /lib/db/neon.ts
 * 
 * Uses @neondatabase/serverless for Vercel-compatible serverless connections
 * 
 * IMPORTANT: This module should ONLY be imported in API routes (/app/api/*),
 * never in page components or client components to avoid SSR issues.
 */

import { neon } from '@neondatabase/serverless'

// Get DATABASE_URL from environment
const DATABASE_URL = process.env.DATABASE_URL

// Initialize connection - this is safe because this module should only
// be imported in API routes where DATABASE_URL is always available
if (!DATABASE_URL) {
  // In development, warn but don't throw (allows build to succeed)
  if (process.env.NODE_ENV === 'development') {
    console.warn('[lib/db/neon.ts] DATABASE_URL not set - database operations will fail')
  }
  // In production (non-Vercel), throw error
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
}

// Create connection instance
// This will only be used in API routes, so DATABASE_URL should always be set
export const sql = DATABASE_URL 
  ? neon(DATABASE_URL)
  : neon('postgresql://dummy:dummy@dummy:5432/dummy') // Fallback for build time only
