# Mobile Demo Improvement Recommendation

## Current State

The mobile demo currently uses Expo Web builds embedded in iframes within the demo page:
- **Worker app**: `/mobile-demo/worker/?demo=worker`
- **Manager app**: `/mobile-demo/manager/?demo=manager`

The iframes are rendered at iPhone dimensions (375x812) and scaled down to fit a 300px frame.

## Competitor Approaches

| Competitor | Mobile Demo Approach |
|------------|---------------------|
| Deputy | Interactive web demo (likely Navattic or similar) |
| Connecteam | Responsive web portal demo + app store links |
| Beekeeper | Video walkthroughs + QR codes to app stores |
| Rippling | Video tours embedded on website |

## Recommendation

### Short-Term (Implement Now)
Given the small team constraint, the current iframe approach is acceptable for initial demos. However, consider these quick wins:

1. **Add a "Best viewed on mobile" message** when users access the demo page on desktop
2. **Add QR code** linking to the actual TestFlight/Play Store demo
3. **Improve the iframe scaling** - currently scales to 0.8x which can make text hard to read

### Medium-Term (1-3 months)
1. **Video walkthrough**: Record 2-3 minute screen recordings of key workflows:
   - Worker: Checking schedule, requesting time off
   - Manager: Approving requests, building schedules

   Embed these with Vimeo/YouTube. Cost: Free. Time: 2-4 hours.

2. **Interactive demo platform** (Navattic, Storylane, Walnut):
   - Cost: $400-1000/month
   - Benefit: No code, capture real app screens, add hotspots and tours
   - Good for sales demos and website embedding

### Long-Term (6+ months)
1. **Sandbox demo environment** with pre-seeded data
2. **Self-serve trial signup** (7-day free trial)
3. **Progressive web app (PWA)** demo that works on mobile browsers

## Quick Implementation: Add QR Code to Demo

The easiest immediate improvement is adding a QR code that links to the App Store/Play Store demo:

```jsx
// Add to DemoPage.jsx after PhoneFrame components
<div style={{ textAlign: 'center', marginTop: '24px' }}>
  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '12px' }}>
    Want the full mobile experience?
  </p>
  <img
    src="/qr-demo.png"
    alt="Scan to download"
    style={{ width: '120px', height: '120px' }}
  />
  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '8px' }}>
    Scan to download the demo app
  </p>
</div>
```

## Summary

| Priority | Recommendation | Effort | Impact |
|----------|---------------|--------|--------|
| 1 | Keep current iframe demo | Done | Medium |
| 2 | Add QR code to app stores | 1 hour | Medium |
| 3 | Record video walkthroughs | 4 hours | High |
| 4 | Add "best on mobile" message | 30 min | Low |
| 5 | Interactive demo platform | 1-2 weeks | High |

The current implementation is functional. Focus on Nova implementation first, then revisit mobile demo improvements.
