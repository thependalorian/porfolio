/**
 * Test SMTP Connection
 * 
 * Purpose: Verify Namecheap Private Email SMTP configuration
 * Location: /scripts/test-smtp.ts
 * 
 * Usage: npx tsx scripts/test-smtp.ts
 * 
 * Run this after you:
 * 1. Purchase Namecheap Private Email for george@georgenekwaya.com
 * 2. Install nodemailer: npm install nodemailer @types/nodemailer
 * 3. Add SMTP credentials to .env.local
 */

import { testSMTPConnection } from '../lib/email/smtp'

async function main() {
  console.log('🧪 Testing SMTP Connection...\n')

  // Check if SMTP is configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('❌ SMTP not configured!')
    console.log('\n📝 Add these to .env.local:')
    console.log('SMTP_HOST=smtp.privateemail.com')
    console.log('SMTP_PORT=587')
    console.log('SMTP_USER=george@georgenekwaya.com')
    console.log('SMTP_PASSWORD=your-private-email-password')
    console.log('SMTP_FROM=george@georgenekwaya.com')
    console.log('\n💡 Also install: npm install nodemailer @types/nodemailer')
    process.exit(1)
  }

  try {
    await testSMTPConnection()
    console.log('\n✅ SMTP connection successful!')
    console.log('📧 You can now send emails via Namecheap Private Email')
  } catch (error: any) {
    console.error('\n❌ SMTP connection failed!')
    console.error('Error:', error.message)
    
    if (error.message.includes('nodemailer')) {
      console.log('\n💡 Install nodemailer: npm install nodemailer @types/nodemailer')
    } else if (error.message.includes('credentials')) {
      console.log('\n💡 Check your SMTP credentials in .env.local')
    } else {
      console.log('\n💡 Verify:')
      console.log('  - SMTP_HOST is correct (smtp.privateemail.com)')
      console.log('  - SMTP_PORT is correct (587 for TLS)')
      console.log('  - SMTP_USER is your email (george@georgenekwaya.com)')
      console.log('  - SMTP_PASSWORD is correct')
    }
    process.exit(1)
  }
}

main()
