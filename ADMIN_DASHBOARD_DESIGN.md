# 🔐 Admin Dashboard Design
## Authentication & Analytics Management

**Purpose:** Admin dashboard for george@buffr.ai to view analytics and manage website data  
**Authentication:** NextAuth.js with email/password (only george@buffr.ai allowed)  
**Database:** Neon DB (PostgreSQL)

---

## 📋 Overview

The admin dashboard provides secure access for the site owner to:
- View analytics (page views, downloads, etc.)
- Manage consultation requests
- View contact form submissions
- Track Japanese resume generations
- Manage all website data

**Access Control:**
- Only `george@buffr.ai` can create/login
- Email-based authentication
- JWT session management (30-day expiration)
- Protected routes with middleware

---

## 🔐 Authentication System

### Database Schema

```sql
-- Users table (already in SYSTEM_DESIGN_APPLICATION.md)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true
);

CREATE INDEX idx_users_email ON users(email);
```

### Authentication Flow

```
User → /admin/login → NextAuth.js → Credentials Provider → Neon DB → JWT Token → Session
```

### Protected Routes

**Middleware Protection:**
- `/admin/*` - All admin pages require authentication
- `/api/admin/*` - All admin APIs require authentication
- Public routes remain accessible: `/api/contact`, `/api/consultation`, `/api/analytics/pageview`

---

## 📊 Admin Dashboard Pages

### 1. Login Page (`/admin/login`)

**Purpose:** Admin authentication  
**Access:** Public (but only george@buffr.ai can successfully login)

**Features:**
- Email/password form
- Error handling for invalid credentials
- Redirect to dashboard on success
- "Remember me" option (30-day session)

**Component:** `app/admin/login/page.tsx`

### 2. Dashboard Home (`/admin/dashboard`)

**Purpose:** Overview of all metrics  
**Access:** Protected (requires authentication)

**Features:**
- **Quick Stats Cards:**
  - Total page views (last 30 days)
  - Pending consultation requests
  - Unread contact submissions
  - Total resume downloads
- **Recent Activity:**
  - Latest consultation requests
  - Recent contact submissions
  - Recent resume generations
- **Charts:**
  - Page views over time (line chart)
  - Top pages (bar chart)
  - Consultation requests by service type (pie chart)

**Component:** `app/admin/dashboard/page.tsx`

### 3. Analytics View (`/admin/analytics`)

**Purpose:** Detailed analytics  
**Access:** Protected

**Features:**
- **Page Views:**
  - Filter by date range
  - Filter by page path
  - Export to CSV
  - Top referrers
  - Geographic data (if available)
- **Resume Downloads:**
  - Downloads by type (English/Japanese)
  - Downloads over time
  - Download sources
- **Traffic Sources:**
  - Referrers breakdown
  - Direct vs referral traffic

**Component:** `app/admin/analytics/page.tsx`

### 4. Consultation Management (`/admin/consultations`)

**Purpose:** Manage consultation requests  
**Access:** Protected

**Features:**
- **List View:**
  - Filter by status (pending, contacted, scheduled, completed, declined)
  - Filter by service type
  - Sort by date
  - Search by name/email/company
- **Detail View:**
  - Full request details
  - Update status
  - Add notes
  - Mark as contacted/scheduled
  - Delete request
- **Actions:**
  - Bulk status update
  - Export to CSV
  - Email response (via Resend)

**Component:** `app/admin/consultations/page.tsx`

### 5. Contact Submissions (`/admin/contact`)

**Purpose:** Manage contact form submissions  
**Access:** Protected

**Features:**
- **List View:**
  - Filter by status (pending, read, replied)
  - Sort by date
  - Search by name/email/subject
- **Detail View:**
  - Full message
  - Mark as read/replied
  - Reply via email
  - Delete submission

**Component:** `app/admin/contact/page.tsx`

### 6. Resume Generation History (`/admin/resumes`)

**Purpose:** View Japanese resume generation history  
**Access:** Protected

**Features:**
- **List View:**
  - All generated resumes
  - Filter by resume type (rirekisho, shokumu-keirekisho)
  - Filter by date
  - Search by job title/company
- **Detail View:**
  - View generated sections
  - Download PDF (if available)
  - View generation metadata (AI provider, timestamp, etc.)

**Component:** `app/admin/resumes/page.tsx`

---

## 🔌 Admin API Endpoints

### Analytics API

```typescript
// GET /api/admin/analytics
// Headers: Authorization: Bearer <jwt-token>
// Response:
{
  "pageViews": {
    "total": 1250,
    "last30Days": 450,
    "byPage": {
      "/": 500,
      "/resume": 300,
      "/consultation": 450
    },
    "byDate": [
      { "date": "2026-01-15", "count": 25 },
      { "date": "2026-01-16", "count": 30 }
    ],
    "topReferrers": [
      { "referrer": "google.com", "count": 200 },
      { "referrer": "linkedin.com", "count": 150 }
    ]
  },
  "consultationRequests": {
    "total": 45,
    "pending": 12,
    "byServiceType": {
      "ai-strategy": 15,
      "fintech": 20,
      "data-analytics": 10
    }
  },
  "resumeDownloads": {
    "total": 89,
    "byType": {
      "english": 50,
      "japanese": 39
    }
  },
  "contactSubmissions": {
    "total": 23,
    "unread": 5
  }
}
```

### Consultation Management API

```typescript
// GET /api/admin/consultations
// Query params: ?status=pending&serviceType=ai-strategy&page=1&limit=20
// Response:
{
  "consultations": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "company": "Tech Corp",
      "serviceType": "ai-strategy",
      "status": "pending",
      "createdAt": "2026-01-15T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "limit": 20,
    "totalPages": 3
  }
}

// PATCH /api/admin/consultations/[id]
// Request Body: { "status": "contacted", "notes": "Called on 2026-01-15" }
// Response: { "success": true, "consultation": {...} }
```

### Contact Submissions API

```typescript
// GET /api/admin/contact-submissions
// Query params: ?status=unread&page=1&limit=20
// Response: Similar structure to consultations

// PATCH /api/admin/contact-submissions/[id]
// Request Body: { "status": "read" }
// Response: { "success": true }
```

### Resume Generations API

```typescript
// GET /api/admin/resume-generations
// Query params: ?resumeType=rirekisho&page=1&limit=20
// Response:
{
  "resumes": [
    {
      "id": "uuid",
      "jobTitle": "Data Analyst",
      "companyName": "Tech Company",
      "resumeType": "rirekisho",
      "createdAt": "2026-01-15T10:00:00Z",
      "sections": { /* generated sections */ }
    }
  ],
  "pagination": {...}
}
```

---

## 🎨 Component Structure

```
components/
└── admin/
    ├── AdminLayout.tsx          # Layout with sidebar navigation
    ├── AdminDashboard.tsx       # Main dashboard with stats
    ├── AnalyticsView.tsx        # Analytics page
    ├── ConsultationManager.tsx  # Consultation management
    ├── ContactManager.tsx      # Contact submissions
    ├── ResumeHistory.tsx       # Resume generation history
    ├── StatsCard.tsx           # Reusable stat card
    ├── DataTable.tsx            # Reusable data table
    └── FilterBar.tsx            # Reusable filter component
```

---

## 🔒 Security Implementation

### Middleware Protection

```typescript
// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    authorized: ({ token, req }) => {
      // Only allow george@buffr.ai with admin role
      if (token?.email === 'george@buffr.ai' && token?.role === 'admin') {
        return true;
      }
      return false;
    },
  },
});

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
```

### API Route Protection

```typescript
// app/api/admin/analytics/route.ts
import { auth } from '@/lib/auth/config';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Check authentication
  const session = await auth();
  
  if (!session || session.user?.email !== 'george@buffr.ai') {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Fetch analytics from Neon DB
  const analytics = await sql`
    SELECT 
      COUNT(*) as total_page_views,
      COUNT(DISTINCT page_path) as unique_pages
    FROM page_views
    WHERE created_at >= NOW() - INTERVAL '30 days'
  `;

  return NextResponse.json({ analytics });
}
```

---

## 📝 Implementation Checklist

- [ ] Create `lib/db/neon.ts` with Neon DB connection
- [ ] Create `lib/auth/config.ts` with NextAuth.js configuration
- [ ] Create `app/api/auth/[...nextauth]/route.ts`
- [ ] Create `middleware.ts` for route protection
- [ ] Create `scripts/create-admin-user.ts` to initialize admin
- [ ] Create admin login page (`app/admin/login/page.tsx`)
- [ ] Create admin dashboard (`app/admin/dashboard/page.tsx`)
- [ ] Create analytics page (`app/admin/analytics/page.tsx`)
- [ ] Create consultation management (`app/admin/consultations/page.tsx`)
- [ ] Create contact management (`app/admin/contact/page.tsx`)
- [ ] Create resume history (`app/admin/resumes/page.tsx`)
- [ ] Create admin API routes (`app/api/admin/*`)
- [ ] Test authentication flow
- [ ] Test protected routes
- [ ] Test admin APIs

---

**Status:** ✅ Ready for Implementation  
**Authentication:** NextAuth.js (email/password, JWT)  
**Database:** Neon DB (PostgreSQL)  
**Access:** george@buffr.ai only
