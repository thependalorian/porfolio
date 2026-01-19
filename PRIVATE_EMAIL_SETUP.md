# 📧 Namecheap Private Email Setup (Next Month)

## Overview

You'll be purchasing **Namecheap Private Email** for `george@georgenekwaya.com` next month. This guide prepares the setup.

## ✅ Current Status

**Right Now:**
- ✅ Contact form submissions stored in database
- ✅ Email forwarding can be set up in Namecheap (free)
- ✅ No SMTP needed yet

**Next Month (When You Get Private Email):**
- 📧 Purchase Namecheap Private Email for `george@georgenekwaya.com`
- 📧 Configure SMTP credentials
- 📧 Enable programmatic email sending

## 🔧 Setup Steps (For Next Month)

### Step 1: Purchase Namecheap Private Email

1. **Go to Namecheap:**
   - Login to Namecheap
   - Go to Domain List → georgenekwaya.com
   - Click "Private Email" or "Email Hosting"

2. **Purchase Private Email:**
   - Select plan (usually $1.88/month per mailbox)
   - Create mailbox: `george@georgenekwaya.com`
   - Set password

### Step 2: Get SMTP Credentials

**Namecheap Private Email SMTP Settings:**
- **SMTP Host:** `smtp.privateemail.com`
- **SMTP Port:** `587` (TLS) or `465` (SSL)
- **Username:** `george@georgenekwaya.com`
- **Password:** Your Private Email password
- **From Address:** `george@georgenekwaya.com` or `contact@georgenekwaya.com`

### Step 3: Install Nodemailer

```bash
npm install nodemailer @types/nodemailer
```

### Step 4: Configure Environment Variables

Add to `.env.local`:

```env
# Namecheap Private Email SMTP
SMTP_HOST=smtp.privateemail.com
SMTP_PORT=587
SMTP_USER=george@georgenekwaya.com
SMTP_PASSWORD=your-private-email-password
SMTP_FROM=george@georgenekwaya.com
```

### Step 5: Test SMTP Connection

Create a test script:

```typescript
// scripts/test-smtp.ts
import { testSMTPConnection } from '@/lib/email/smtp'

testSMTPConnection()
  .then(() => console.log('✅ SMTP working!'))
  .catch((error) => console.error('❌ SMTP error:', error))
```

Run:
```bash
npx tsx scripts/test-smtp.ts
```

## 📋 What's Already Prepared

✅ **Email Service Ready:**
- `lib/email/namecheap-email.ts` - Main email service
- `lib/email/smtp.ts` - SMTP implementation (ready for nodemailer)
- `app/api/contact/route.ts` - Contact form API

✅ **Configuration Ready:**
- Environment variables documented
- SMTP code prepared
- Will automatically use SMTP when configured

## 🎯 Current vs. Future Setup

### Current (Now):
- Contact form → Database storage
- View submissions in admin dashboard
- Optional: Email forwarding (free in Namecheap)

### Future (Next Month):
- Contact form → Database + Email notification via SMTP
- Automated email sending
- Professional email address: `george@georgenekwaya.com`

## 📝 Email Addresses

**Current:**
- Contact form uses: `contact@georgenekwaya.com` (forwarding)
- Notifications go to: `george@buffr.ai`

**After Private Email:**
- Professional email: `george@georgenekwaya.com`
- Contact form can send from: `contact@georgenekwaya.com` or `george@georgenekwaya.com`
- Notifications sent via SMTP

## 🔒 Security Notes

- **SMTP Password:** Store in `.env.local` (gitignored)
- **Never commit:** SMTP credentials to git
- **Use environment variables:** For all SMTP config

## ✅ Checklist (For Next Month)

- [ ] Purchase Namecheap Private Email
- [ ] Create mailbox: `george@georgenekwaya.com`
- [ ] Install nodemailer: `npm install nodemailer @types/nodemailer`
- [ ] Add SMTP credentials to `.env.local`
- [ ] Test SMTP connection
- [ ] Update contact form to use SMTP
- [ ] Test contact form email sending

## 📚 Files Ready

- ✅ `lib/email/smtp.ts` - SMTP implementation (ready)
- ✅ `lib/email/namecheap-email.ts` - Will use SMTP when configured
- ✅ `env.example` - SMTP variables documented

---

**Status:** ✅ **Ready for Private Email setup next month!**

All code is prepared. Just purchase Private Email, add credentials, and install nodemailer.
