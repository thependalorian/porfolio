/**
 * Email Service Exports
 * 
 * Purpose: Central export for email services
 * Location: /lib/email/index.ts
 */

export { sendEmail, formatContactEmail } from './namecheap-email'
export { sendEmailViaSMTP, testSMTPConnection } from './smtp'
