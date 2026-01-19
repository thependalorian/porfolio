/**
 * Neon DB Connection
 * 
 * Purpose: Connect to Neon PostgreSQL database using serverless driver
 * Location: /lib/db/neon.ts
 * 
 * Uses @neondatabase/serverless for Vercel-compatible serverless connections
 */

import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const sql = neon(process.env.DATABASE_URL)

export { sql }
