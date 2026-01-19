# 🔐 Neon Auth Setup Guide

## Overview

This project uses **Neon Auth** (powered by Better Auth) for authentication instead of NextAuth.js. Neon Auth is a serverless authentication service that integrates directly with your Neon database.

## ✅ Configuration Complete

Your Neon Auth is already configured with:
- **Auth URL:** `https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth`
- **JWKS URL:** `https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth/.well-known/jwks.json`
- **Trusted Domain:** `https://georgenekwaya.com`
- **OAuth Provider:** Google (shared keys)
- **Email Provider:** Shared (auth@mail.myneon.app)

## 📦 Dependencies

**Removed:**
- ❌ `next-auth` - Replaced with Neon Auth
- ❌ `bcryptjs` - Not needed (Neon Auth handles password hashing)

**Implementation:**
- ✅ Uses Neon Auth HTTP API directly (no SDK dependency)
- ✅ Fetch-based authentication calls
- ✅ Cookie-based session management

## 🔧 Environment Variables

Add to your `.env.local`:

```env
# Neon Auth URLs
NEON_AUTH_URL=https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth
NEON_JWKS_URL=https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth/.well-known/jwks.json
NEXT_PUBLIC_NEON_AUTH_URL=https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth
```

## 📁 File Structure

```
lib/auth/
├── neon-auth.ts      # Server-side auth helpers
└── client.ts         # Client-side auth helpers

app/api/auth/
├── login/
│   └── route.ts      # Login endpoint
├── logout/
│   └── route.ts      # Logout endpoint
└── session/
    └── route.ts      # Get current session

middleware.ts         # Route protection
```

## 🔑 Authentication Flow

### 1. Login

```typescript
// Client-side
import { signIn } from '@/lib/auth/client'

try {
  const result = await signIn('george@buffr.ai', 'password')
  // Session cookie is automatically set
  console.log('Logged in:', result)
} catch (error) {
  console.error('Login failed:', error)
}
```

### 2. Check Session

```typescript
// Server-side (API route)
import { getCurrentUser } from '@/lib/auth/neon-auth'

const user = await getCurrentUser(request)
if (!user) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
```

### 3. Admin Check

```typescript
// Server-side
import { requireAdmin } from '@/lib/auth/neon-auth'

const user = await requireAdmin(request)
// Throws error if not admin (george@buffr.ai)
```

## 🛡️ Route Protection

**Middleware** (`middleware.ts`) automatically protects:
- `/admin/*` - Requires admin authentication
- `/dashboard/*` - Requires admin authentication

**Public Routes:**
- `/` - Homepage
- `/projects` - Projects page
- `/resume` - Resume page
- `/api/resume` - Resume API (public)

## 👤 Admin Access

**Only `george@buffr.ai` can:**
- Login to admin dashboard
- Access protected routes
- Generate Japanese resumes
- View analytics

## 🔄 Migration from NextAuth

**What Changed:**
1. ✅ Removed NextAuth.js dependency
2. ✅ Added Neon Auth SDK
3. ✅ Updated auth configuration
4. ✅ Updated API routes
5. ✅ Updated middleware

**What Stayed the Same:**
- Admin-only access (george@buffr.ai)
- JWT session management
- Route protection
- API authentication

## 📚 Neon Auth Features

**Available Features:**
- ✅ Email/password authentication
- ✅ OAuth (Google) - Already configured
- ✅ JWT sessions
- ✅ User management in `neon_auth` schema
- ✅ Branch-aware auth (staging/production)

**User Data:**
- Stored in `neon_auth` schema in your Neon database
- Automatically synced across branches
- Accessible via SQL queries

## 🚀 Usage Examples

### Server-Side (API Route)

```typescript
import { requireAdmin } from '@/lib/auth/neon-auth'

export async function POST(request: Request) {
  // Require admin authentication
  const user = await requireAdmin(request)
  
  // User is authenticated and is admin
  // Proceed with admin operations
}
```

### Client-Side (React Component)

```typescript
'use client'
import { signIn, getSession, isAdmin } from '@/lib/auth/client'

// Sign in
await signIn('george@buffr.ai', 'password')

// Get session
const session = await getSession()

// Check if admin
const admin = await isAdmin()
```

## 🔒 Security Notes

1. **Credentials Never Exposed:**
   - DATABASE_URL stays server-side only
   - Auth URLs are safe to expose (public endpoints)

2. **Admin Restriction:**
   - Only `george@buffr.ai` can login
   - Enforced in login route and middleware

3. **Session Management:**
   - JWT tokens managed by Neon Auth
   - Automatic token validation
   - Secure cookie handling

## 📖 Documentation

- [Neon Auth Docs](https://neon.com/docs/neon-auth)
- [Better Auth Docs](https://www.better-auth.com/docs)

## ✅ Status

**Authentication is fully configured and ready to use!**

All files have been updated to use Neon Auth instead of NextAuth.js.

---

**Next Steps:**
1. Install dependencies: `npm install`
2. Add environment variables to `.env.local`
3. Test login: Visit `/login` and sign in with `george@buffr.ai`
