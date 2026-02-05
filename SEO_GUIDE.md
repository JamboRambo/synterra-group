# SEO Optimization Guide for Synterra Group

## Current SEO Implementation

The landing page includes basic SEO optimizations:

### Meta Tags (in index.html)
```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://synterra.group" />
```

## Recommended SEO Enhancements

### 1. Add Google Analytics

```html
<!-- Add to index.html before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Add Structured Data (Schema.org)

Add this to index.html for better search engine understanding:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Synterra Group",
  "url": "https://synterra.group",
  "logo": "https://synterra.group/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-939-428-1942",
    "contactType": "Business Development",
    "email": "hello@synterra.group",
    "areaServed": "US-VA",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "VA",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/synterra-group"
  ]
}
</script>
```

### 3. Create robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://synterra.group/sitemap.xml
```

### 4. Create sitemap.xml

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://synterra.group/</loc>
    <lastmod>2025-02-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 5. Add Favicon

Create or add a favicon to `public/`:
- `favicon.ico` (16x16, 32x32)
- `favicon.svg` (scalable)
- `apple-touch-icon.png` (180x180)

Update index.html:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### 6. Add Open Graph Images

Create social media preview images:
- `public/og-image.jpg` (1200x630px)

Update meta tags:
```html
<meta property="og:image" content="https://synterra.group/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://synterra.group/og-image.jpg" />
```

## Target Keywords

### Primary Keywords
- Cannabis real estate Virginia
- Commercial cannabis leasing
- Northern Virginia dispensary locations
- Cannabis retail property partnerships
- Virginia cannabis licensing

### Long-tail Keywords
- Commercial real estate cannabis Northern Virginia
- Premium cannabis lease rates Virginia
- Cannabis property lease options
- Virginia dispensary real estate opportunities

## Content Strategy

### Blog Post Ideas (if adding a blog)
1. "Virginia Cannabis Legalization Timeline: What Landlords Need to Know"
2. "The Economics of Cannabis Retail: Why 1.5x Market Rate Makes Sense"
3. "SNDA Agreements Explained: Protecting Your Cannabis Property Investment"
4. "Northern Virginia's Best Commercial Locations for Cannabis Retail"
5. "Cannabis Real Estate: Myths vs. Reality for Property Owners"

## Local SEO

### Google Business Profile
1. Create a Google Business Profile for Synterra Group
2. Select category: "Business Consultant" or "Real Estate Consultant"
3. Add service areas: Northern Virginia counties (Fairfax, Arlington, Loudoun, Prince William)
4. Upload photos of team, facilities (Minnesota operations)
5. Collect reviews from past business partners

### Local Citations
List business on:
- Yelp for Business
- LinkedIn Company Page
- Local Virginia business directories
- Cannabis industry directories

## Performance Optimization

The site is already optimized with Vite, but consider:

1. **Image Optimization**
   - Use WebP format for images
   - Lazy load images below the fold
   - Compress all images (target <100KB per image)

2. **Code Splitting**
   - Already handled by Vite
   - Consider dynamic imports for FAQ section if it grows

3. **Caching Strategy**
   - Vercel handles this automatically
   - Set proper cache headers for static assets

## Monitoring & Analytics

### Key Metrics to Track
1. **Traffic Sources**
   - Organic search
   - Direct traffic
   - Referrals
   - Social media

2. **User Behavior**
   - Time on page
   - Scroll depth
   - CTA click-through rates
   - Form submissions

3. **Conversions**
   - Contact form submissions
   - Phone calls (use call tracking)
   - Email opens (if using email campaigns)

### Tools to Use
- Google Analytics 4
- Google Search Console
- Hotjar (heatmaps & recordings)
- Vercel Analytics (included free)

## Content Updates

Update content regularly for freshness signals:
- FAQ section (add new questions monthly)
- Expertise section (update with new achievements)
- Blog posts (if added - weekly or bi-weekly)

## Link Building Strategy

1. **Industry Partnerships**
   - Partner with cannabis industry associations
   - Collaborate with commercial real estate firms
   - Network with Virginia business groups

2. **Press Releases**
   - Announce new partnerships
   - Share success stories (with permission)
   - Comment on Virginia cannabis legislation

3. **Guest Posting**
   - Write for commercial real estate blogs
   - Contribute to cannabis industry publications
   - Virginia business journals

## Accessibility (also impacts SEO)

Ensure:
- ✅ All images have alt text
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Sufficient color contrast
- ✅ Keyboard navigation works
- ✅ ARIA labels for interactive elements

## Next Steps

1. **Week 1**: Implement Google Analytics and Search Console
2. **Week 2**: Add structured data and optimize meta tags
3. **Week 3**: Create content calendar and blog strategy
4. **Month 1**: Begin link building outreach
5. **Ongoing**: Monitor metrics and iterate

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Vercel Analytics](https://vercel.com/analytics)
- [Schema.org](https://schema.org)
- [PageSpeed Insights](https://pagespeed.web.dev)
