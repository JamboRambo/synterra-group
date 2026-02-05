# Synterra Group Landing Page - Deployment Guide

## Project Structure
```
synterra-landing-page/
├── src/
│   ├── App.jsx              (Main landing page component)
│   └── index.css            (Tailwind CSS imports)
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Setup Instructions

### 1. Initialize the Project Locally

```bash
# Create new React + Vite project
npm create vite@latest synterra-landing-page -- --template react
cd synterra-landing-page

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### 2. Configure Tailwind CSS

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Replace App Component

Replace the contents of `src/App.jsx` with the provided `synterra-landing-page.jsx` code.

Update `src/main.jsx`:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 4. Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

---

## GitHub Deployment

### 1. Create GitHub Repository

```bash
# Initialize git (if not already)
git init

# Create .gitignore
echo "node_modules
dist
.env
.DS_Store" > .gitignore

# Commit code
git add .
git commit -m "Initial commit: Synterra Group landing page"

# Create repo on GitHub (via web interface or gh CLI)
gh repo create synterra-group --public --source=. --remote=origin

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Vercel Deployment

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository: `synterra-group`
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"
6. Your site will be live at: `https://synterra-group.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## GoDaddy Domain Setup (synterra.group)

### 1. Get Vercel Deployment URL
After deploying on Vercel, you'll receive a URL like:
- `synterra-group.vercel.app`
- Or a custom Vercel domain: `synterra-group-xyz.vercel.app`

### 2. Configure Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click "Add Domain"
3. Enter: `synterra.group`
4. Vercel will provide DNS records to configure

### 3. Configure DNS in GoDaddy

1. Log into your GoDaddy account
2. Go to **My Products** → **Domains** → **synterra.group** → **DNS**
3. Click "Manage DNS"

**Add the following records:**

#### A Record (for root domain)
- **Type**: A
- **Name**: @
- **Value**: `76.76.21.21` (Vercel's IP)
- **TTL**: 600 seconds

#### CNAME Record (for www subdomain)
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 600 seconds

**Alternative Configuration (if Vercel gives different instructions):**

Vercel may provide specific nameservers. If so:
1. In GoDaddy DNS settings, scroll to "Nameservers"
2. Click "Change" → "Enter my own nameservers"
3. Add Vercel's nameservers (provided in Vercel dashboard)

### 4. Verify Domain in Vercel

1. Return to Vercel → **Settings** → **Domains**
2. Wait for DNS propagation (usually 15 minutes to 48 hours)
3. Once verified, your site will be live at `https://synterra.group`

### 5. SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt. Your site will be accessible via HTTPS within minutes of domain verification.

---

## Post-Deployment Checklist

- [ ] Test all sections scroll properly
- [ ] Test contact form (opens email client)
- [ ] Verify mobile responsiveness
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Verify all contact information is correct
- [ ] Check FAQ accordion functionality
- [ ] Test all CTA buttons
- [ ] Verify domain is accessible at both `synterra.group` and `www.synterra.group`
- [ ] Check SSL certificate is active (HTTPS)

---

## Environment Variables

This project doesn't require any environment variables. The contact form uses `mailto:` links which work client-side.

---

## Continuous Deployment

Once connected to GitHub, Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create pull requests

To update the site:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel will automatically rebuild and deploy within 1-2 minutes.

---

## Support

For questions or issues:
- **Vercel Support**: https://vercel.com/support
- **GoDaddy Support**: https://www.godaddy.com/help
- **React + Vite Docs**: https://vitejs.dev/guide/

---

## Future Enhancements

Consider adding:
1. **Analytics**: Google Analytics or Vercel Analytics
2. **Form Backend**: Formspree, Netlify Forms, or custom backend
3. **CMS**: Contentful or Sanity for easy content updates
4. **SEO**: React Helmet for meta tags
5. **Performance**: Image optimization with next/image equivalent