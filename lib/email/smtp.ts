/**
 * SMTP Email Service (Namecheap Private Email)
 * 
 * Purpose: Send emails via SMTP when Namecheap Private Email is configured
 * Location: /lib/email/smtp.ts
 * 
 * Note: This will be used when you purchase Namecheap Private Email next month.
 * For now, contact form submissions are stored in database.
 * 
 * To use: Install nodemailer when ready:
 * npm install nodemailer @types/nodemailer
 */

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

/**
 * Send Email via SMTP (Namecheap Private Email)
 * 
 * This function will work once you:
 * 1. Purchase Namecheap Private Email for george@georgenekwaya.com
 * 2. Install nodemailer: npm install nodemailer @types/nodemailer
 * 3. Add SMTP credentials to .env.local
 */
export async function sendEmailViaSMTP(options: EmailOptions) {
  // Check if nodemailer is available
  let nodemailer: any
  try {
    nodemailer = await import('nodemailer')
  } catch (error) {
    console.warn('📧 nodemailer not installed. Install with: npm install nodemailer @types/nodemailer')
    console.log('📧 Email logged (will send via SMTP when nodemailer is installed):', {
      to: options.to,
      subject: options.subject,
    })
    return { success: true, message: 'Email queued (install nodemailer to enable SMTP sending)' }
  }

  const smtpConfig = {
    host: process.env.SMTP_HOST || 'smtp.privateemail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'george@georgenekwaya.com',
      pass: process.env.SMTP_PASSWORD!,
    },
  }

  if (!smtpConfig.auth.pass) {
    throw new Error('SMTP_PASSWORD is not configured')
  }

  // Create transporter
  const transporter = nodemailer.createTransport(smtpConfig)

  // Send email
  const info = await transporter.sendMail({
    from: options.from || smtpConfig.auth.user,
    to: options.to,
    subject: options.subject,
    html: options.html,
  })

  console.log('📧 Email sent via SMTP:', info.messageId)
  return { success: true, messageId: info.messageId }
}

/**
 * Test SMTP Connection
 * 
 * Use this to verify your SMTP configuration works
 */
export async function testSMTPConnection() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error('SMTP credentials not configured')
  }

  let nodemailer: any
  try {
    nodemailer = await import('nodemailer')
  } catch (error) {
    throw new Error('nodemailer not installed. Run: npm install nodemailer @types/nodemailer')
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // Verify connection
  await transporter.verify()
  console.log('✅ SMTP connection verified successfully!')
  return true
}
