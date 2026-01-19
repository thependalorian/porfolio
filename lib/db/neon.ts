/**
 * Neon DB Connection
 * 
 * Purpose: Connect to Neon PostgreSQL database using serverless driver
 * Location: /lib/db/neon.ts
 * 
 * Uses @neondatabase/serverless for Vercel-compatible serverless connections
 * 
 * Lazy initialization: Only connects when actually used, not during build time
 */

import { neon } from '@neondatabase/serverless'

let sqlInstance: ReturnType<typeof neon> | null = null

function getSql() {
  // During build time, return a dummy instance if DATABASE_URL is not set
  if (!process.env.DATABASE_URL) {
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
      // Only throw in production if not on Vercel (where env vars are set)
      throw new Error('DATABASE_URL environment variable is not set')
    }
    // For build time, return a dummy that will fail gracefully at runtime
    return neon('postgresql://dummy:dummy@dummy:5432/dummy')
  }
  
  if (!sqlInstance) {
    sqlInstance = neon(process.env.DATABASE_URL)
  }
  
  return sqlInstance
}

export const sql = new Proxy({} as ReturnType<typeof neon>, {
  get(_target, prop) {
    const instance = getSql()
    const value = (instance as any)[prop]
    return typeof value === 'function' ? value.bind(instance) : value
  }
})
