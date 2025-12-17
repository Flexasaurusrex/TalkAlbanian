# 🚀 Quick Deployment Guide

## Deploy to Vercel (Recommended - 2 minutes)

### Method 1: GitHub + Vercel (Most Common)

1. **Create GitHub Repo**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Albanian learning app"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/albanian-app.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `albanian-app` repository
   - Click "Deploy"
   - Done! Your site is live in ~30 seconds

### Method 2: Vercel CLI (Instant)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd albanian-app
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? albanian-app
# - Directory? ./
# - Override settings? N

# Done! You'll get a live URL
```

## Deploy to Netlify (Alternative)

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd albanian-app
netlify deploy

# Follow prompts
# For production: netlify deploy --prod
```

### Using Netlify Drop

1. Zip the `albanian-app` folder
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop your zip file
4. Instant deployment!

## Deploy to GitHub Pages

```bash
# In your repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/albanian-app.git
git push -u origin main

# Then on GitHub:
# Settings → Pages → Source: main branch → Save
```

Your site will be at: `https://YOUR-USERNAME.github.io/albanian-app`

## Custom Domain (Optional)

### Vercel
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as shown

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS

## Testing Locally

Just open `index.html` in your browser. No server needed!

Or use a simple local server:

```bash
# Python
python -m http.server 8000

# Node.js (if you have npx)
npx serve

# Then visit http://localhost:8000
```

## Troubleshooting

**Tabs not working?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check browser console (F12) for errors

**Voice not working?**
- Only works in Chrome/Edge
- Requires HTTPS (which Vercel/Netlify provide)

**Need help?**
- Check browser console for errors
- Make sure all files (index.html, styles.css, app.js) are in same folder
- Try different browser

## Performance Tips

The app loads instantly because:
- ✅ No dependencies
- ✅ No build process
- ✅ No API calls (offline-first)
- ✅ Pure HTML/CSS/JS

## Next Steps After Deployment

1. Share the URL with friends
2. Install as PWA on mobile (Add to Home Screen)
3. Works offline after first visit
4. Star the repo if you find it useful!

---

**Estimated deployment time:** 2-5 minutes
**Cost:** FREE (all platforms have free tiers)
