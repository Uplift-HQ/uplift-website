import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLORS } from './constants';

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      background: COLORS.navyDark,
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient orb */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: `radial-gradient(circle, ${COLORS.orange}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid">
        {/* Left Content - 60% */}
        <div>
          {/* No pill - let the headline breathe */}

          <h1 style={{
            fontSize: 'clamp(2.6rem, 4.5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }} className="hero-title">
            <span style={{ color: COLORS.white, display: 'block' }}>
              The workforce platform that
            </span>
            <span style={{ color: COLORS.orange, display: 'block' }}>
              actually knows your people.
            </span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: COLORS.textLight,
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '500px',
          }}>
            16 modules. Nova AI. WRIA and CPIA — the only algorithms that predict who's leaving
            and show every worker their next move. One subscription. No feature gating.
          </p>

          {/* CTA Pair */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }} className="hero-buttons">
            <Link to="/demo" style={{
              padding: '14px 28px',
              background: COLORS.orange,
              color: COLORS.white,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Try the demo
              <ArrowRight size={18} />
            </Link>
            <a href="/trial" style={{
              padding: '14px 28px',
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.3)',
              color: COLORS.white,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
            }}>
              Start 14-day free trial
            </a>
          </div>

          {/* Trial info */}
          <p style={{
            fontSize: '0.8rem',
            color: COLORS.textMuted,
            marginBottom: '0',
          }}>
            No card required · 50 users · 14 days
          </p>
        </div>

        {/* Right - Portal Screenshot - 40% */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: COLORS.navyCard,
            borderRadius: '12px',
            padding: '6px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: `1px solid ${COLORS.borderDark}`,
          }} className="portal-preview">
            <div style={{
              background: COLORS.slate700,
              borderRadius: '8px 8px 0 0',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
              </div>
            </div>
            <img src="/screenshots/admin-dashboard.png" alt="Uplift Portal" style={{
              width: '100%',
              height: 'auto',
              borderRadius: '0 0 6px 6px',
              display: 'block',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-title { font-size: 2.4rem !important; }
          .portal-preview { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
