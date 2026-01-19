/**
 * Namecheap Email Service
 * 
 * Purpose: Handle email notifications using Namecheap email forwarding
 * Location: /lib/email/namecheap-email.ts
 * 
 * Note: Namecheap email forwarding forwards emails to your configured address.
 * For contact form submissions, we store them in the database and you can
 * view them in the admin dashboard. Email forwarding can be set up in Namecheap
 * to forward contact@georgenekwaya.com to george@buffr.ai
 */

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

/**
 * Send Email via Namecheap Email Forwarding
 * 
 * If SMTP credentials are provided, sends email via SMTP.
 * Otherwise, just logs the email (submissions stored in database, view in admin dashboard).
 * 
 * Note: Set up email forwarding in Namecheap:
 * 1. Go to Namecheap → Domain List → georgenekwaya.com → Email Forwarding
 * 2. Forward contact@georgenekwaya.com → george@buffr.ai
 * 3. Contact form submissions are stored in database (view in admin dashboard)
 */
export async function sendEmail(options: EmailOptions) {
  // If SMTP is configured, use it
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    return await sendEmailViaSMTP(options)
  }

  // Otherwise, just log (emails will be stored in database and can be viewed in admin)
  console.log('📧 Email logged (submissions stored in database):', {
    to: options.to,
    subject: options.subject,
    from: options.from || 'contact@georgenekwaya.com',
  })
  console.log('💡 Tip: Set up email forwarding in Namecheap to receive email notifications')

  return { success: true, message: 'Email logged (configure Namecheap email forwarding for actual delivery)' }
}

/**
 * Send Email via SMTP (Namecheap Private Email)
 * 
 * This will be used when you purchase Namecheap Private Email for george@georgenekwaya.com
 * For now, imports from smtp.ts which handles the actual SMTP sending
 */
async function sendEmailViaSMTP(options: EmailOptions) {
  // Import SMTP function (will use nodemailer when installed)
  const { sendEmailViaSMTP: sendSMTP } = await import('./smtp')
  return await sendSMTP(options)
}

/**
 * Format contact form submission as email HTML
 */
export function formatContactEmail(submission: {
  name: string
  email: string
  subject?: string
  message: string
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-radius: 3px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          <p>From: georgenekwaya.com</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${escapeHtml(submission.name)}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${escapeHtml(submission.email)}</div>
          </div>
          ${submission.subject ? `
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${escapeHtml(submission.subject)}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${escapeHtml(submission.message).replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
