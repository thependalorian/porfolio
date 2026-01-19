#!/usr/bin/env node

/**
 * Export Environment Variables to Vercel
 * 
 * Purpose: Sync all environment variables from .env.local to Vercel
 * Usage: node scripts/export-secrets-to-vercel.js
 * 
 * Prerequisites:
 * 1. Install Vercel CLI: npm i -g vercel
 * 2. Login to Vercel: vercel login
 * 3. Link your project: vercel link
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ENV_FILE = path.join(__dirname, '..', '.env.local');

// Check if .env.local exists
if (!fs.existsSync(ENV_FILE)) {
  console.error('❌ Error: .env.local file not found');
  process.exit(1);
}

// Check if vercel CLI is installed
try {
  execSync('vercel --version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ Error: Vercel CLI not found');
  console.error('Install it with: npm i -g vercel');
  process.exit(1);
}

// Check if project is linked
const vercelDir = path.join(__dirname, '..', '.vercel', 'project.json');
if (!fs.existsSync(vercelDir)) {
  console.log('⚠️  Project not linked to Vercel');
  console.log('Running: vercel link');
  try {
    execSync('vercel link', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  } catch (error) {
    console.error('❌ Failed to link project. Please run: vercel link');
    process.exit(1);
  }
}

console.log('📋 Reading environment variables from .env.local...\n');

// Read and parse .env.local
const envContent = fs.readFileSync(ENV_FILE, 'utf-8');
const lines = envContent.split('\n');

let count = 0;
let skipped = 0;

for (const line of lines) {
  // Skip empty lines and comments
  if (!line.trim() || line.trim().startsWith('#')) {
    continue;
  }

  // Extract key and value
  const match = line.match(/^([^=]+)=(.*)$/);
  if (!match) continue;

  const key = match[1].trim();
  let value = match[2].trim();

  // Remove quotes if present
  value = value.replace(/^["']|["']$/g, '');

  // Skip if value is empty or placeholder
  if (!value || 
      value.match(/^your-.*-here/) || 
      value.match(/^sk-your-.*-here/) ||
      value === 'your-secret-key-here-generate-with-openssl-rand-base64-32') {
    console.log(`⏭️  Skipping ${key} (empty or placeholder)`);
    skipped++;
    continue;
  }

  console.log(`📤 Setting ${key}...`);

  try {
    // Try to add to production
    try {
      execSync(`echo "${value}" | vercel env add ${key} production`, {
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
      console.log('   ✅ Added to production');
      count++;
    } catch (error) {
      // If it exists, remove and re-add
      try {
        execSync(`vercel env rm ${key} production --yes`, {
          stdio: 'pipe',
          cwd: path.join(__dirname, '..')
        });
        execSync(`echo "${value}" | vercel env add ${key} production`, {
          stdio: 'pipe',
          cwd: path.join(__dirname, '..')
        });
        console.log('   ✅ Updated in production');
        count++;
      } catch (updateError) {
        console.log('   ⚠️  Failed to set (may need manual setup)');
      }
    }

    // Also add to preview and development (silently fail if they exist)
    try {
      execSync(`echo "${value}" | vercel env add ${key} preview`, {
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
    } catch (e) {
      // Ignore errors for preview/dev
    }

    try {
      execSync(`echo "${value}" | vercel env add ${key} development`, {
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
    } catch (e) {
      // Ignore errors for preview/dev
    }
  } catch (error) {
    console.log(`   ❌ Error setting ${key}`);
  }
}

console.log('\n✅ Export complete!');
console.log(`   - ${count} variables exported to production`);
console.log(`   - ${skipped} variables skipped (empty or placeholder)\n`);
console.log('📝 Next steps:');
console.log('   1. Verify in Vercel Dashboard → Your Project → Settings → Environment Variables');
console.log('   2. Redeploy your project to apply the new variables\n');
