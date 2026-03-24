import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLORS } from './constants';

export default function FinalCTASection() {
  return (
    <section style={{
      background: COLORS.navyDark,
      padding: '120px 24px',
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.4rem',
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: '8px',
          letterSpacing: '-0.02em',
        }}>
          See it for yourself.
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: COLORS.textLight,
          marginBottom: '32px',
        }}>
          No sales call. No card. No commitment.
        </p>

        {/* CTA Pair */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '16px',
          flexWrap: 'wrap',
        }}>
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
          marginBottom: '32px',
        }}>
          No card required · 50 users · 14 days
        </p>

        {/* Additional context */}
        <div style={{
          fontSize: '0.85rem',
          color: COLORS.textMuted,
          lineHeight: 1.8,
        }}>
          <p style={{ margin: 0 }}>The demo takes 4 minutes.</p>
          <p style={{ margin: 0 }}>The trial gives you 50 real users for 14 days.</p>
        </div>
      </div>
    </section>
  );
}
