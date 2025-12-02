# GitHub Pages Setup Guide

## Quick Start

Your website is ready to deploy to GitHub Pages at **georgenekwaya.com**. Follow these steps:

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named: `georgenekwaya.com` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

## Step 2: Initialize Git and Push

```bash
cd georgenekwaya-website

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Personal website for georgenekwaya.com"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/georgenekwaya.com.git

# Create main branch and push
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The deployment will start automatically!

## Step 4: Configure Custom Domain

### In GitHub:
1. Still in **Settings** → **Pages**
2. Under "Custom domain", enter: `georgenekwaya.com`
3. Click **Save**
4. Wait for DNS check (may take a few minutes)
5. Once DNS is verified, check **"Enforce HTTPS"**

### At Your Domain Registrar:
Configure these DNS records at your domain provider (GoDaddy, Namecheap, Cloudflare, etc.):

#### A Records (Point to GitHub Pages):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### CNAME Record (For www subdomain):
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**Important:**
- Replace `YOUR_USERNAME` with your actual GitHub username
- DNS changes can take 24-48 hours to propagate globally
- Some providers may take longer

## Step 5: Verify Deployment

1. Check the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, visit `https://YOUR_USERNAME.github.io/georgenekwaya.com`

## Step 6: Access Your Site

After DNS propagates (24-48 hours):
- Your site will be live at: `https://georgenekwaya.com`
- And also at: `https://www.georgenekwaya.com`

## Troubleshooting

### Build Fails
- Check **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

### Custom Domain Not Working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check DNS with: `dig georgenekwaya.com` or `nslookup georgenekwaya.com`
- Ensure CNAME file exists in repository

### 404 Errors on Navigation
- Ensure `.nojekyll` file is in the repository
- Check that all links use trailing slashes (e.g., `/about/`)
- Rebuild the site

### HTTPS Not Working
- DNS must be fully propagated first
- Check "Enforce HTTPS" in GitHub Pages settings
- May take an additional 24 hours after DNS propagation

## Important Files for GitHub Pages

✅ **CNAME** - Contains your custom domain
```
georgenekwaya.com
```

✅ **.nojekyll** - Tells GitHub Pages not to use Jekyll
```
(empty file)
```

✅ **GitHub Actions Workflow** - Automates deployment
```
.github/workflows/deploy.yml
```

## Making Updates

After your site is deployed, to make updates:

```bash
# Make your changes to the code

# Stage changes
git add .

# Commit changes
git commit -m "Update content"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy!
```

## Testing Before Deployment

Always test locally before pushing:

```bash
# Development mode
npm run dev

# Production build test
npm run build
npx serve out
```

## DNS Propagation Check

Check if your DNS has propagated:
- https://www.whatsmydns.net/
- Enter: `georgenekwaya.com`
- Select: `A` record type
- Check multiple locations worldwide

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

## Support

If you encounter issues:
1. Check the [GitHub Pages status](https://www.githubstatus.com/)
2. Review GitHub Actions logs
3. Verify DNS settings with your provider
4. Contact: george@buffr.ai

---

**Quick Checklist:**
- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] GitHub Actions enabled (automatic)
- [ ] Custom domain configured in GitHub
- [ ] DNS A records added (4 records)
- [ ] DNS CNAME record added (www)
- [ ] DNS propagated (24-48 hours)
- [ ] HTTPS enabled in GitHub settings
- [ ] Site accessible at georgenekwaya.com

---

**Your site is ready to go live!** 🚀
