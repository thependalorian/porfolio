# George Nekwaya Website - Complete Documentation

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** Production Ready

---

## Table of Contents

1. [Website Overview](#website-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Components](#components)
6. [Pages & Routes](#pages--routes)
7. [Accredible Certificate Integration](#accredible-certificate-integration)
8. [Configuration](#configuration)
9. [Deployment](#deployment)
10. [Features](#features)

---

## Website Overview

**Purpose:** Personal portfolio website showcasing professional experience, education, projects, and achievements.

**Theme:** Dark theme with ACT (Alliance for Climate Transition) brand colors adapted for personal branding.

**Key Features:**
- Responsive design (mobile-first)
- Bento grid layout for content sections
- Direct Accredible certificate image integration
- Japanese resume generation and viewing
- WCAG AAA compliant contrast ratios
- Optimized for Vercel deployment

**URL:** `georgenekwaya.com` / `www.georgenekwaya.com`

---

## Technology Stack

### Core Framework
- **Next.js:** 14.0.4 (App Router, SSR)
- **React:** 18.2.0
- **TypeScript:** 5.3.3

### Styling
- **Tailwind CSS:** 3.3.0
- **DaisyUI:** 4.0.0
- **Framer Motion:** 12.0.0 (animations)

### Database
- **Neon PostgreSQL:** Serverless PostgreSQL via `@neondatabase/serverless`

### Additional Libraries
- **Lucide React:** 0.400.0 (icons)
- **jsPDF:** 2.5.1 (PDF generation)
- **Puppeteer:** 21.0.0 (PDF rendering)
- **Nodemailer:** 7.0.12 (email functionality)
- **OpenAI:** 4.0.0 (AI features)
- **Zod:** 3.22.0 (validation)
- **React Query:** 5.0.0 (data fetching)

---

## Project Structure

```
georgenekwaya-website/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Homepage (Hero + About + Bento Grid)
│   ├── globals.css          # Global styles, ACT brand variables
│   └── ...
├── components/
│   ├── ui/
│   │   ├── Navigation.tsx   # Global navigation
│   │   ├── Footer.tsx       # Global footer
│   │   └── BentoGrid.tsx    # Bento grid layout system
│   └── features/
│       ├── skills/          # SkillsSection
│       ├── experience/     # ExperienceSection
│       ├── buffr/          # BuffrSection
│       ├── projects/       # ProjectsSection, BuffrProjectCard, ProjectCard
│       ├── education/      # EducationSection
│       ├── awards/         # AwardsSection
│       ├── certifications/ # CertificationsSection
│       ├── conferences/    # ConferencesSection
│       ├── fellowship/      # FellowshipSection
│       ├── hackathons/     # HackathonsSection
│       ├── research/       # ResearchProjectsSection
│       ├── volunteer/       # VolunteerSection
│       └── resume/          # JapaneseResumeViewer, ResumePDFExporter
├── lib/
│   ├── data/
│   │   └── professional-data.ts  # Centralized professional data
│   ├── db/
│   │   └── neon.ts         # Neon database connection
│   ├── services/
│   │   ├── japanese-resume-generator.ts
│   │   └── resume-data.ts
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── profile/        # Profile images
│   │   ├── buffr/          # Buffr-related images
│   │   ├── certificates/   # Local certificate images
│   │   └── logos/          # Company logos
│   └── ...
├── tailwind.config.js      # Tailwind + DaisyUI configuration
├── next.config.js          # Next.js configuration
└── package.json
```

---

## Design System

### ACT Brand Colors (Adapted)

#### Primary Colors
- **Midnight Forest:** `#001818` (background)
- **Spring Green:** `#B2DE26` (primary accent)
- **White:** `#FFFFFF` (text on dark)

#### Secondary Colors
- **Moss Green:** `#394816` / `#A9C23F` (adjusted for contrast)
- **Sand Gray:** `#EBE9E1` / `#F5F5F5` (adjusted for contrast)

#### Tertiary Colors
- **Seafoam Blue:** `#E0FFFF`
- **Mint:** `#D4E8B8` / `#E6F5D3`
- **Sage:** `#6B7D42` / `#B8C89A`
- **Silver:** `#4D5454` / `#A8A8A8` (adjusted for contrast)

### Typography

**Title Font:** Helvetica Neue / Helvetica / Arial
- Tracking: `-0.02em`
- Leading: `1.14`

**Body Font:** Inter
- Tracking: `0`
- Leading: `1.25` (body), `1.33` (body-large)

**Japanese Font:** Noto Sans JP

### Spacing System

Fluid spacing using `clamp()`:
- Base unit: `clamp(20px, 3vw, 24px)`
- Spacing scale: 0.5, 1, 1.5, 2, 3, 4, 6, 8

### Component Styling

**Cards:**
- Background: `bg-act-moss-green/20` with `backdrop-blur-sm`
- Border: `border-border-light` (rgba(235, 233, 225, 0.2))
- Shadow: ACT shadow variables

**Buttons:**
- Primary: `bg-act-spring-green text-black` (12.5:1 contrast - AAA)
- Secondary: Transparent with border
- All buttons: Minimum 44px touch target

---

## Components

### UI Components

#### Navigation (`components/ui/Navigation.tsx`)
- Fixed navigation bar
- Logo: "GN" (George Nekwaya initials)
- Links: Home, Projects, About, Contact
- Mobile hamburger menu
- Scroll detection for styling

#### Footer (`components/ui/Footer.tsx`)
- 3 sections: Brand, Quick Links, Contact
- Brand description: "AI/ML developer and data strategist"
- Contact: george@buffr.ai, Boston, MA | Windhoek, Namibia
- Copyright notice

#### BentoGrid (`components/ui/BentoGrid.tsx`)
- Japanese-inspired bento box layout
- Responsive grid system
- Card variants: default, elevated, outline
- Glassmorphism support
- Hover animations

### Feature Components

#### SkillsSection
- Displays technical skills by category
- Categories: Programming, AI/ML, Web Dev, Computer Vision, Voice AI, Data Science, Business Analytics
- Icon-based visual organization
- Badge-style skill tags

#### ExperienceSection
- Professional work experience
- Featured experience (Buffr) highlighted
- Company logos, locations, dates
- Bullet-point achievements

#### BuffrSection
- Detailed Buffr showcase
- Challenge & Approach cards
- Platform Capabilities with images
- Additional Recognition (Asper Prize)
- CTA to buffr.ai

#### ProjectsSection
- Filterable project grid
- Filters: All, Completed, Learning, Research, Hackathons
- Featured Buffr card (spans 2 columns)
- Project cards with tech stack, features, links

#### EducationSection
- Brandeis MBA (featured, spans 2 columns)
- Brandeis awards integrated
- Concentrations, courses, Hassenfeld Fellowship
- BEng - Namibia University (spans 2 columns)
- Capstone project and additional info

#### AwardsSection
- Non-Brandeis awards only
- Featured award highlighted
- Trophy/Star icons
- Year, organization, award name

#### CertificationsSection
- Accredible certificates (direct image URLs)
- Local certificates (MBA, BEng, etc.)
- Image modal for full-size viewing
- Verified credential links
- Award icons

#### Additional Sections
- ConferencesSection
- FellowshipSection
- HackathonsSection
- ResearchProjectsSection
- VolunteerSection

---

## Pages & Routes

### Homepage (`/`)
**Structure:**
1. Hero Section
   - Profile image (pendo-avatar.png)
   - Name: "GEORGE NATANGWE PENDAPALA NEKWAYA"
   - Tagline: "Fintech | AI | Data | Strategy"
   - Contact info (location, email, LinkedIn)
   - CTAs (Download Resume, Japanese Resumes, View Projects)

2. About Section
   - Professional background
   - Expertise areas
   - Global experience
   - Buffr mention

3. Bento Grid Sections
   - Skills (full width)
   - Experience (full width)
   - Buffr (full width)
   - Projects (full width)
   - Education (full width)
   - Awards (2 columns)
   - Certifications (2 columns)

### Other Routes
- `/projects` - Detailed projects page
- `/about` - Extended about page
- `/contact` - Contact form
- `/resume/japanese` - Japanese resume viewer

---

## Accredible Certificate Integration

### Complete Certificate Mapping

This section includes all Accredible certificate image URLs used in the website.

| # | Certificate Title | Credential ID | Accredible Image URL | Status |
|---|------------------|--------------|---------------------|--------|
| 1 | Rearchitecting the Financial System | `1b158799-77b9-4257-9ef3-43750f6af0df` | `certificate/106770521` | ✅ Verified |
| 2 | Online Certificate for Fintech in Africa | `e891e773-399f-4aaa-8a82-ad27d42c0cdc` | `certificate/76213120` | ✅ Verified |
| 3 | Navigating Digital Transformation | `93f935aa-dffc-48c7-8483-3ceca2981138` | `badge/66417423` | ✅ Verified |
| 4 | Open Banking & Platforms Specialisation: Technology and Security | `c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647` | `certificate/66266530` | ✅ Verified |
| 5 | Open Banking and Platforms in Finance Specialisation | `7a245f36-ca0f-433b-9285-e3935bc306bc` | `certificate/66267705` | ✅ Verified |
| 6 | Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks | `016064a7-a7e2-4125-afb5-a2e4574043ce` | `certificate/65933379` | ✅ Verified |
| 7 | Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents | `7bb20d15-4c70-4fdc-bda4-c6480dd45ac8` | `certificate/65508518` | ✅ Verified |
| 8 | Card Payment Networks Explained | `1be9c933-91fc-42c6-93fc-6a3de7015756` | `badge/65540085` | ✅ Verified |
| 9 | Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants | `b170e197-4e1d-4421-9421-ac6e186369d1` | `certificate/65292890` | ✅ Verified |
| 10 | Open Banking & Platforms Specialisation: An Industry overview of Open Banking | `bdc8f4f7-8042-4dba-988c-8e7bbdf1c666` | `certificate/65034644` | ✅ Verified |

### Full Accredible Image URLs

All URLs follow the pattern: `https://api.accredible.com/v1/frontend/credential_website_embed_image/{type}/{id}`

1. **Rearchitecting the Financial System**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/106770521`
   - Credential Page: `https://www.credential.net/1b158799-77b9-4257-9ef3-43750f6af0df#acc.LNGqF3XZ`

2. **Online Certificate for Fintech in Africa**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76213120`
   - Credential Page: `https://www.credential.net/e891e773-399f-4aaa-8a82-ad27d42c0cdc#acc.lbIY1U8X`

3. **Navigating Digital Transformation**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/66417423`
   - Credential Page: `https://www.credential.net/93f935aa-dffc-48c7-8483-3ceca2981138#acc.5jpv2gIL`

4. **Open Banking & Platforms Specialisation: Technology and Security**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66266530`
   - Credential Page: `https://www.credential.net/c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647#acc.K1yjdlm5`

5. **Open Banking and Platforms in Finance Specialisation**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66267705`
   - Credential Page: `https://www.credential.net/7a245f36-ca0f-433b-9285-e3935bc306bc#acc.EUg8lyoL`

6. **Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65933379`
   - Credential Page: `https://www.credential.net/016064a7-a7e2-4125-afb5-a2e4574043ce#acc.R5AEspZ4`

7. **Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65508518`
   - Credential Page: `https://www.credential.net/7bb20d15-4c70-4fdc-bda4-c6480dd45ac8#acc.HC7tx1qL`

8. **Card Payment Networks Explained**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/65540085`
   - Credential Page: `https://www.credential.net/1be9c933-91fc-42c6-93fc-6a3de7015756#acc.NX6mChHT`

9. **Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65292890`
   - Credential Page: `https://www.credential.net/b170e197-4e1d-4421-9421-ac6e186369d1#acc.eD7sjSB0`

10. **Open Banking & Platforms Specialisation: An Industry overview of Open Banking**
    - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65034644`
    - Credential Page: `https://www.credential.net/bdc8f4f7-8042-4dba-988c-8e7bbdf1c666#acc.kVfRCgI0`

### Implementation Notes

- All Accredible certificates use direct image URLs from the Accredible API
- Images are loaded using Next.js `Image` component with proper domain configuration
- The `next.config.js` file includes `api.accredible.com` in `images.remotePatterns`
- Each certificate has a unique Accredible image URL (no duplicates)
- Badges use `/badge/` endpoint, certificates use `/certificate/` endpoint

### Non-Accredible Certificates

The following certificates use local image files (not Accredible):

- **Master of Business Administration (MBA)** - `/images/certificates/mba-certificate.JPG`
- **Bachelor of Engineering: Civil & Environmental Engineering** - `/images/certificates/engineering-degree.JPG`
- **Operations Certificate** - `/images/certificates/operations-cert.JPG`
- **AI Bootcamp Certificate** - `/images/certificates/aibootcamp-cert.png`

---

## Configuration

### Next.js Configuration (`next.config.js`)

**Image Domains:**
- `georgenekwaya.com`
- `www.georgenekwaya.com`
- `localhost` (development)
- `api.accredible.com` (Accredible certificates)
- `images.credential.net` (Credential images)

**Security Headers:**
- X-DNS-Prefetch-Control: on
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff

**Output:** Standalone (for Vercel deployment)

### Tailwind Configuration (`tailwind.config.js`)

**Color System:**
- ACT brand colors defined
- Legacy color aliases for dark theme compatibility
- Text colors mapped for dark background
- Background colors mapped for dark theme

**Typography:**
- Inter font (body)
- Helvetica/Title font (headings)
- Noto Sans JP (Japanese)

**DaisyUI Theme:**
- Light theme only (dark theme disabled)
- ACT colors integrated
- Success, warning, error, info colors defined

### Environment Variables

Required environment variables (`.env.local`):
- `DATABASE_URL` - Neon PostgreSQL connection string
- Additional variables for email, AI services, etc.

---

## Deployment

### Platform
- **Primary:** Vercel (Free Plan)
- **Database:** Neon PostgreSQL (serverless)

### Build Configuration
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Node Version: Compatible with Next.js 14

### Domain Configuration
- Primary: `georgenekwaya.com`
- WWW: `www.georgenekwaya.com`
- SSL: Automatic (Vercel)

### Image Optimization
- Next.js Image component
- AVIF and WebP formats
- Remote image patterns configured
- Automatic optimization

---

## Features

### Core Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm (480px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
   - Fluid typography using `clamp()`
   - Touch-friendly targets (44px minimum)

2. **Bento Grid Layout**
   - Japanese-inspired card layout
   - Responsive column system
   - Card variants (default, elevated, outline)
   - Hover animations

3. **Certificate Display**
   - Direct Accredible API image integration
   - Local certificate images
   - Full-size modal viewing
   - Verified credential links

4. **Project Showcase**
   - Filterable project grid
   - Featured Buffr card
   - Tech stack badges
   - External links (GitHub, website, demo)

5. **Japanese Resume**
   - Resume generation service
   - PDF export functionality
   - Japanese language support

6. **Accessibility**
   - WCAG AAA contrast compliance
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support
   - Focus indicators

### Performance Optimizations

- Next.js Image optimization
- Server-side rendering (SSR)
- Code splitting
- Font optimization (display: swap)
- Lazy loading for images

### SEO

- Metadata in `app/layout.tsx`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Open Graph ready

---

## Content Sections

### Hero Section
- Profile image with animated border
- Full name display
- Professional tagline
- Contact information
- Call-to-action buttons

### About Section
- Professional background
- Expertise areas
- Global experience (Hassenfeld Fellowship)
- Buffr mention
- Professional philosophy

### Skills Section
- Technical skills by category
- Visual icons per category
- Badge-style skill tags
- 7 main categories

### Experience Section
- Professional work history
- Featured experience (Buffr)
- Company logos
- Locations and dates
- Achievement bullet points

### Buffr Section
- Challenge & Approach
- Platform Capabilities
- Recognition (Asper Prize)
- External link to buffr.ai

### Projects Section
- Filterable project grid
- Featured Buffr project
- Research projects
- Hackathon projects
- Tech stack and features

### Education Section
- Brandeis MBA (featured)
- Brandeis awards integrated
- Concentrations and courses
- Hassenfeld Fellowship details
- BEng - Namibia University
- Capstone project

### Awards Section
- Non-Brandeis awards
- Featured award highlighted
- Year, organization, award name

### Certifications Section
- 10 Accredible certificates
- 4 local certificates
- Direct image integration
- Verified credential links

---

## Data Management

### Centralized Data (`lib/data/professional-data.ts`)

All professional data is centralized in a single TypeScript file:
- Professional experience
- Education
- Skills
- Awards
- Certificates
- Projects
- Conferences
- Volunteer work
- Fellowship details

**Benefits:**
- Single source of truth
- Easy to update
- Type-safe
- Consistent data structure

---

## Styling Guidelines

### Color Usage
- Always use ACT color classes (`act-spring-green`, `act-midnight-forest`, etc.)
- Text colors: `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
- Backgrounds: `bg-act-moss-green/20` for cards
- Borders: `border-border-light`

### Typography
- Headings: `font-act-title tracking-act-title`
- Body: `font-act-body`
- Use responsive font sizes with `clamp()`

### Spacing
- Use ACT spacing variables
- Consistent padding: `p-4`, `p-6`
- Consistent margins: `mb-4`, `mb-6`, `mb-8`

### Components
- All components in `/components` folder
- Feature components in `/components/features`
- UI components in `/components/ui`
- Follow DaisyUI patterns where applicable

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on:
  - Mobile (320px - 767px)
  - Tablet (768px - 1023px)
  - Desktop (1024px+)

---

## Maintenance

### Updating Content
1. Edit `lib/data/professional-data.ts` for most content
2. Update component files for structural changes
3. Add new images to `/public/images/`
4. Update Accredible URLs in professional-data.ts

### Adding New Sections
1. Create component in `/components/features/[section-name]/`
2. Add to BentoGrid in `app/page.tsx`
3. Follow existing component patterns
4. Use ACT color classes

### Updating Certificates
1. Get Accredible image URL
2. Update `accredibleImageUrl` in professional-data.ts
3. Verify image loads correctly
4. Update ACCREDIBLE_IMAGE_VERIFICATION.md

---

## Contact Information

**Email:** george@buffr.ai  
**Location:** Boston, MA | Windhoek, Namibia  
**LinkedIn:** https://www.linkedin.com/in/george-nekwaya  
**Website:** https://buffr.ai

---

## Last Updated

**Documentation:** December 2024  
**Website Version:** 1.0.0  
**All components:** WCAG AAA compliant  
**All certificates:** Verified and mapped

---

## Additional Notes

- Website uses dark theme throughout
- All components follow ACT brand guidelines (adapted)
- No contact form on homepage (removed per user request)
- Footer does not include social media links
- Professional description focuses on AI/ML and data strategy (not "fintech entrepreneur")
- All images optimized for web
- Serverless-ready architecture

---

**Document Status:** Complete and up-to-date ✅
