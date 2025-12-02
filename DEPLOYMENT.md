# Deployment Guide

## GitHub Pages Deployment

### Initial Setup

1. **Create a GitHub Repository**
   ```bash
   cd georgenekwaya-website
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/georgenekwaya.com.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to **Pages** section
   - Under "Build and deployment":
     - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

3. **Configure Custom Domain (georgenekwaya.com)**
   - In GitHub Pages settings, add custom domain: `georgenekwaya.com`
   - In your domain registrar (e.g., GoDaddy, Namecheap):
     - Add an A record pointing to GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Add a CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Wait for DNS propagation (can take up to 48 hours)
   - Enable "Enforce HTTPS" in GitHub Pages settings

### Automatic Deployment

Every push to the `main` branch will automatically:
1. Build the Next.js site
2. Generate static files in `/out`
3. Deploy to GitHub Pages

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The static files are in /out directory
# You can deploy this directory to any static hosting service
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Testing Production Build Locally

```bash
# Build the site
npm run build

# Serve the out directory with any static server
# For example, using Python:
cd out
python3 -m http.server 8000

# Or using npx serve:
npx serve out
```

## Updating Content

1. Make changes to the source files
2. Test locally with `npm run dev`
3. Commit and push to main:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. GitHub Actions will automatically deploy the changes

## Troubleshooting

### Build Failures
- Check GitHub Actions logs in the "Actions" tab
- Ensure all dependencies are in package.json
- Verify Node version (should be 20+)

### Custom Domain Not Working
- Verify DNS records are correctly set
- Wait for DNS propagation (up to 48 hours)
- Check CNAME file exists in the out directory
- Ensure HTTPS is enforced in GitHub settings

### Pages Not Loading
- Check that all internal links use trailing slashes (e.g., `/about/`)
- Verify .nojekyll file exists in the public directory
- Clear browser cache and try again

## Contact

For issues or questions: george@buffr.ai
