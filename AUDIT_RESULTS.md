# Uplift Website Audit Results

**Date**: 2026-03-10
**Audited Site**: uplifthq.netlify.app
**Production Domain**: uplifthq.co.uk

---

## Competitor Research Summary

### How Competitors Present AI Features

| Competitor | AI Presentation | Key Insight |
|------------|-----------------|-------------|
| Deputy | Dedicated page (`/ai`) + integrated sections | AI is prominent in main nav as "Deputy AI" |
| Connecteam | Dedicated page marked "AI-powered New" | Marks new features clearly |
| Beekeeper | Not prominently featured | Focuses on core connectivity value |
| Rippling | Integrated into product explanations | AI as enabler, not standalone feature |
| Workday | Comprehensive dedicated AI page | Outcome-focused messaging, ROI metrics |

### Best Practices Observed

1. **Navigation**: AI/assistant features appear prominently in main nav (Deputy, Connecteam)
2. **Messaging**: Focus on outcomes ("takes action") rather than technology
3. **Structure**: Both dedicated page AND homepage section works best
4. **CTAs**: Multiple pathways - "Start free trial" and "Book demo"
5. **Footer**: 4-5 categories, 10-20 links per category, all working
6. **Demos**: Free trial signup + demo booking options

---

## Current Site Link Audit

### Navigation Links

| Link | Destination | Status |
|------|-------------|--------|
| Logo | `/` | Working |
| Platform | `#platform` | Working (anchor) |
| Industries | `#industries` | Working (anchor) |
| Pricing | `#pricing` | Working (anchor) |
| About | `/about` | Working |
| Try Live Demo | `/demo` | Working |
| Book a Call | Calendly | Working |

**Mobile Nav**: Same links, hamburger menu functional

### Footer Links - AUDIT RESULTS

#### Product Section
| Link | Destination | Status |
|------|-------------|--------|
| Features | `#` | **DEAD - Goes nowhere** |
| Pricing | `#` | **DEAD - Should link to #pricing** |
| Demo | `#` | **DEAD - Should link to /demo** |
| Integrations | `#` | **DEAD - No page exists** |
| Mobile Apps | `#` | **DEAD - No page exists** |

#### Company Section
| Link | Destination | Status |
|------|-------------|--------|
| About | `#` | **DEAD - Should link to /about** |
| Careers | `#` | **DEAD - No page exists** |
| Blog | `#` | **DEAD - No page exists** |
| Press | `#` | **DEAD - No page exists** |

#### Resources Section
| Link | Destination | Status |
|------|-------------|--------|
| Help Center | `#` | **DEAD - No page exists** |
| Documentation | `#` | **DEAD - No page exists** |
| API Reference | `#` | **DEAD - No page exists** |
| Status | `#` | **DEAD - No page exists** |

#### Legal Section
| Link | Destination | Status |
|------|-------------|--------|
| Privacy Policy | `/privacy` | Working |
| Terms of Service | `/terms` | Working |
| Cookie Policy | `#` | **DEAD - No page exists** |
| GDPR | `#` | **DEAD - No page exists** |

### Summary of Dead Links

**Total Footer Links**: 17
**Working Links**: 2 (Privacy, Terms)
**Dead Links**: 15

---

## CTA Buttons Audit

| CTA | Location | Destination | Status |
|-----|----------|-------------|--------|
| Book a Call | Hero | Calendly | Working |
| Try Live Demo | Hero | `/demo` | Working |
| See Momentum in Action | Momentum Section | `/demo` | Working |
| Try Live Demo | CTA Section | `/demo` | Working |
| Book a Call | CTA Section | Calendly | Working |
| Book a Call | Pricing Cards | Calendly | Working |

**All CTA buttons are working correctly.**

---

## Demo Page Flow

### Email Capture
- Form submits to HubSpot (Portal 147593675)
- Captures work email with consent

### After Email Submission
- Shows 3 role cards: HR Administrator, Department Manager, Employee
- Each card links to: `upliftportaldemo.netlify.app/auto-login?role=XXX`
- **STATUS**: Auto-login URLs appear functional (external dependency)

### Mobile Demo
- Embedded iframes point to `/mobile-demo/worker/` and `/mobile-demo/manager/`
- Uses scaled iPhone frame (375x812 scaled to 300px width)
- Query params: `?demo=worker` and `?demo=manager`
- **STATUS**: Expo web builds present in public folder

---

## Mobile Responsiveness (375px Viewport)

### Issues Found
- Hero section collapses correctly
- Phone preview hidden on mobile (by design)
- Workers grid becomes single column
- Pricing cards stack vertically
- Footer becomes single column

**No critical mobile issues found.**

---

## Missing Pages Needed

Based on footer links, these pages need to be created OR links removed:

1. `/features` - OR link to `#platform`
2. `/integrations` - Could be a simple page or removed
3. `/mobile-apps` - Could link to `/demo`
4. `/careers` - Simple "We're hiring" or removed
5. `/blog` - Remove or placeholder
6. `/press` - Remove or placeholder
7. `/help` - Remove or placeholder
8. `/docs` - Remove or placeholder
9. `/api` - Remove or placeholder
10. `/status` - Remove or placeholder
11. `/cookies` - Could merge with Privacy or create simple page
12. `/gdpr` - Could merge with Privacy or create simple page

---

## Recommendations

### Must Fix (Dead Links)
1. Fix all footer links - either create pages or remove links
2. Add Nova to navigation
3. Add Nova page to sitemap

### Should Add
1. Nova homepage section (after Hero or Problem section)
2. Dedicated Nova page at `/nova`
3. Nova link in footer Product section

### Footer Restructure Suggestion
Keep it simple - only link to pages that exist:

**Product**: Platform (#platform), Demo (/demo), Pricing (#pricing), Nova (/nova)
**Company**: About (/about)
**Legal**: Privacy Policy (/privacy), Terms of Service (/terms)

Remove: Careers, Blog, Press, Help Center, Documentation, API Reference, Status, Cookie Policy, GDPR, Features, Integrations, Mobile Apps

---

## Before State Screenshots Needed

- [ ] Homepage (desktop)
- [ ] Homepage (mobile 375px)
- [ ] Footer
- [ ] Demo page
- [ ] About page

---

## Regression Checklist (Post-Implementation)

### All Pages Load ✓
- [x] Homepage loads correctly (200)
- [x] About page loads correctly (200)
- [x] Demo page loads correctly (200)
- [x] Privacy page loads correctly (200)
- [x] Terms page loads correctly (200)
- [x] **Nova page loads correctly (200)** - NEW

### Navigation ✓
- [x] Navigation works (desktop)
- [x] Navigation works (mobile)
- [x] Nova link appears in nav with highlight
- [x] Nova link uses Sparkles icon

### Demo Flow ✓
- [x] Demo auto-login URLs correct
- [x] Mobile demo iframes configured
- [x] Calendly links work

### Footer ✓
- [x] All footer links now work
- [x] Nova AI link added to Product section
- [x] Dead links removed (was 15, now 0)

### Nova Implementation ✓
- [x] Nova section added to homepage (after ProblemSection)
- [x] Nova icon with gradient glow
- [x] 3 capability cards (Takes Action, Knows Your Data, Works Everywhere)
- [x] CTA to /nova page
- [x] Dedicated /nova page with full content
- [x] Nova page has all sections: Hero, Roles, Channels, Differentiators, Trust, Stats, CTA
- [x] Route added to App.jsx
- [x] Sitemap updated with Nova page

### Build ✓
- [x] `npm run build` succeeds
- [x] No TypeScript/JavaScript errors
- [x] Production bundle: 351.59 kB (93.27 kB gzip)
