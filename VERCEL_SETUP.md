# Vercel Deployment Setup Guide

This project is configured to deploy to Vercel, which supports Next.js API routes and serverless functions.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Integration**: Connect your GitHub account to Vercel

## Initial Setup

### Option 1: Automatic Setup (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository (`thependalorian/porfolio`)
3. Vercel will auto-detect Next.js and configure the project
4. Add your environment variables (see below)
5. Deploy!

### Option 2: Manual Setup via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Deploy
vercel --prod
```

## Environment Variables

Add these in **Vercel Dashboard → Your Project → Settings → Environment Variables**:

### Required Variables

```
DATABASE_URL=postgresql://neondb_owner:...@ep-wispy-haze-ahvv0q32-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NEXTAUTH_SECRET=your-secret-key-here-generate-with-openssl-rand-base64-32
NEXTAUTH_URL=https://georgenekwaya.com
NEON_AUTH_URL=https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth
NEON_JWKS_URL=https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth/.well-known/jwks.json
NEXT_PUBLIC_NEON_AUTH_URL=https://ep-wispy-haze-ahvv0q32.neonauth.c-3.us-east-1.aws.neon.tech/neondb/auth
CONTACT_EMAIL=george@buffr.ai
```

### Optional Variables (for Japanese Resume Generation)

```
GROQ_API_KEY=gsk_...
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

### Email Configuration (Optional)

```
SMTP_HOST=smtp.privateemail.com
SMTP_PORT=587
SMTP_USER=george@georgenekwaya.com
SMTP_PASSWORD=your-smtp-password
SMTP_FROM=george@georgenekwaya.com
RESEND_API_KEY=re_...
```

## GitHub Actions Setup

For automatic deployments via GitHub Actions, add these secrets to your GitHub repository:

**GitHub → Settings → Secrets and variables → Actions → New repository secret**

1. `VERCEL_TOKEN` - Get from [Vercel Settings → Tokens](https://vercel.com/account/tokens)
2. `VERCEL_ORG_ID` - Found in `.vercel/project.json` after running `vercel link`
3. `VERCEL_PROJECT_ID` - Found in `.vercel/project.json` after running `vercel link`

### Getting Vercel IDs

```bash
# After running vercel link, check:
cat .vercel/project.json
```

## Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add `georgenekwaya.com`
   - Add `www.georgenekwaya.com` (optional)

2. **Update DNS Records**:
   - Vercel will provide DNS instructions
   - Typically you need to add:
     - **A Record**: `@` → Vercel IP addresses
     - **CNAME Record**: `www` → `cname.vercel-dns.com`

3. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - Wait 24-48 hours for DNS propagation

## Deployment

### Automatic (via GitHub)

- Every push to `main` branch triggers deployment
- GitHub Actions workflow handles the deployment

### Manual (via CLI)

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

## Verification

After deployment, verify:

1. ✅ Site is accessible at `https://georgenekwaya.com`
2. ✅ API routes work (e.g., `/api/contact`)
3. ✅ Database connections work
4. ✅ Environment variables are set correctly

## Troubleshooting

### Build Fails

- Check environment variables are set in Vercel
- Verify `DATABASE_URL` is correct
- Check build logs in Vercel dashboard

### Domain Not Working

- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain configuration in Vercel dashboard

### API Routes Not Working

- Ensure environment variables are set
- Check function logs in Vercel dashboard
- Verify database connection string

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Support](https://vercel.com/support)
