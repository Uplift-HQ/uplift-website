# Uplift Website Codebase Notes

## Framework & Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Hosting**: Netlify (uplifthq.netlify.app)
- **Production Domain**: uplifthq.co.uk

## Directory Structure

```
uplift-website/
├── index.html              # Main HTML entry point with SEO meta tags
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel config (likely unused, deployed to Netlify)
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml         # Only lists homepage currently
│   ├── screenshots/        # Portal and app screenshots (60+ images)
│   └── mobile-demo/        # Expo web builds of mobile app
│       ├── worker/         # Worker mobile demo
│       └── manager/        # Manager mobile demo
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Router configuration
    ├── components/
    │   ├── DayInLifeWalkthrough.jsx
    │   ├── ProductTourCarousel.jsx
    │   └── UpliftMockups.jsx
    └── pages/
        ├── HomePage.jsx     # Main landing page (all sections inline)
        ├── AboutPage.jsx    # Founder story page
        ├── DemoPage.jsx     # Demo access with HubSpot form
        ├── PrivacyPage.jsx  # Privacy policy
        ├── TermsPage.jsx    # Terms of service
        └── MockupCapture.jsx # Dev tool for capturing mockups
```

## Routing (App.jsx)

| Route | Component | Status |
|-------|-----------|--------|
| `/` | HomePage | Working |
| `/about` | AboutPage | Working |
| `/demo` | DemoPage | Working |
| `/privacy` | PrivacyPage | Working |
| `/terms` | TermsPage | Working |
| `/capture` | MockupCapture | Dev tool |

## Key Components Location

### Navigation Component
- **Location**: `src/pages/HomePage.jsx` (lines 245-380)
- **Current Links**: Platform (#platform), Industries (#industries), Pricing (#pricing), About (/about)
- **CTAs**: "Try Live Demo" (/demo), "Book a Call" (Calendly)
- **Mobile**: Hamburger menu with collapsible nav

### Footer Component
- **Location**: `src/pages/HomePage.jsx` (lines 1838-1922)
- **Link Categories**: Product, Company, Resources, Legal
- **Problem**: Most links go to "#" (dead links)

### Demo Flow
- **Location**: `src/pages/DemoPage.jsx`
- **Flow**: Email capture via HubSpot → Access granted → 3 role cards (Admin/Manager/Worker)
- **Portal Demo**: Links to `upliftportaldemo.netlify.app/auto-login?role=XXX`
- **Mobile Demo**: Embedded iframes to `/mobile-demo/worker/` and `/mobile-demo/manager/`

## Design System

### Colors
- **Momentum Orange**: #FF6B35
- **Dark Slate (Navy)**: #0F172A
- **Slate 800**: #1E293B
- **Slate 700**: #334155
- **Slate 600**: #475569
- **Slate 400**: #94A3B8
- **Slate 200**: #E2E8F0

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Outfit (for headings)
- **System Stack**: -apple-system, sans-serif fallback

### Component Patterns
- All styles are inline CSS-in-JS
- Mobile breakpoints: 1024px, 768px, 640px, 480px
- Cards use border radius 12-20px
- CTAs use gradient backgrounds with box shadows

## Homepage Section Order

1. Navigation
2. HeroSection
3. ProblemSection
4. WorkersFirstSection
5. ExperiencesSection (Three Portals)
6. ModulesSection
7. MomentumSection
8. IndustriesSection
9. PricingSection
10. GlobalSection
11. CTASection
12. Footer

## External Dependencies

- **Calendly**: https://calendly.com/dazevedo-uplifthq/30min
- **HubSpot**: Portal ID 147593675, Form GUID ffc77268-2efe-4af4-84b9-03f61b8f5672
- **Portal Demo**: https://upliftportaldemo.netlify.app

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build
```

## Notes for Nova Implementation

1. Add Nova section after HeroSection or ProblemSection
2. Create new NovaPage.jsx in src/pages/
3. Add route `/nova` in App.jsx
4. Update Navigation component to include Nova link
5. Update Footer to include Nova in Product section
6. Match existing inline CSS patterns
