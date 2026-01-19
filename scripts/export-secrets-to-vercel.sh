#!/bin/bash

# Export Environment Variables to Vercel
# 
# Purpose: Sync all environment variables from .env.local to Vercel
# Usage: ./scripts/export-secrets-to-vercel.sh
#
# Prerequisites:
# 1. Install Vercel CLI: npm i -g vercel
# 2. Login to Vercel: vercel login
# 3. Link your project: vercel link

set -e

echo "🚀 Exporting environment variables to Vercel..."
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
  echo "❌ Error: .env.local file not found"
  exit 1
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo "❌ Error: Vercel CLI not found"
  echo "Install it with: npm i -g vercel"
  exit 1
fi

# Check if project is linked
if [ ! -f ".vercel/project.json" ]; then
  echo "⚠️  Project not linked to Vercel"
  echo "Running: vercel link"
  vercel link
fi

echo "📋 Reading environment variables from .env.local..."
echo ""

# Counter for variables
count=0
skipped=0

# Read .env.local and export to Vercel
while IFS= read -r line || [ -n "$line" ]; do
  # Skip empty lines and comments
  if [[ -z "$line" ]] || [[ "$line" =~ ^[[:space:]]*# ]]; then
    continue
  fi
  
  # Extract key and value
  if [[ "$line" =~ ^([^=]+)=(.*)$ ]]; then
    key="${BASH_REMATCH[1]}"
    value="${BASH_REMATCH[2]}"
    
    # Remove quotes if present
    value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//")
    
    # Skip if value is empty or placeholder
    if [[ -z "$value" ]] || [[ "$value" =~ ^your-.*-here ]] || [[ "$value" =~ ^sk-your-.*-here ]]; then
      echo "⏭️  Skipping $key (empty or placeholder)"
      ((skipped++))
      continue
    fi
    
    echo "📤 Setting $key..."
    
    # Export to Vercel for production environment
    if vercel env add "$key" production <<< "$value" 2>/dev/null; then
      echo "   ✅ Added to production"
      ((count++))
    else
      # Try to update if it already exists
      if vercel env rm "$key" production --yes 2>/dev/null; then
        echo "$value" | vercel env add "$key" production
        echo "   ✅ Updated in production"
        ((count++))
      else
        echo "   ⚠️  Failed to set (may already exist)"
      fi
    fi
    
    # Also add to preview and development
    echo "$value" | vercel env add "$key" preview 2>/dev/null || true
    echo "$value" | vercel env add "$key" development 2>/dev/null || true
  fi
done < .env.local

echo ""
echo "✅ Export complete!"
echo "   - $count variables exported to production"
echo "   - $skipped variables skipped (empty or placeholder)"
echo ""
echo "📝 Next steps:"
echo "   1. Verify in Vercel Dashboard → Your Project → Settings → Environment Variables"
echo "   2. Redeploy your project to apply the new variables"
echo ""
