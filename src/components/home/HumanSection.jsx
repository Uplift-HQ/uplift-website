import React from 'react';
import { COLORS } from './constants';

export default function HumanSection() {
  return (
    <section style={{
      background: COLORS.lightBg,
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '64px',
        alignItems: 'start',
        position: 'relative',
        zIndex: 1,
      }} className="human-grid">
        {/* Left column - 55% - Stat + Photo */}
        <div>
          {/* Large stat */}
          <div style={{
            fontSize: '5.5rem',
            fontWeight: 800,
            color: COLORS.orange,
            lineHeight: 1,
            marginBottom: '16px',
            letterSpacing: '-0.04em',
          }}>
            80%
          </div>

          <div style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            color: COLORS.navy,
            marginBottom: '12px',
            lineHeight: 1.3,
          }}>
            of the global workforce doesn't sit at a desk.
          </div>

          <div style={{
            fontSize: '1rem',
            color: COLORS.textMuted,
            fontStyle: 'italic',
            marginBottom: '32px',
          }}>
            Only 1% of enterprise software was built for them. Uplift is.
          </div>

          {/* Real photograph of frontline worker */}
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop&q=80"
            alt="Hotel worker using mobile phone"
            style={{
              borderRadius: '12px',
              maxWidth: '440px',
              width: '100%',
              display: 'block',
              boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            }}
          />
        </div>

        {/* Right column - 45% - Quote card */}
        <div style={{
          background: COLORS.white,
          borderRadius: '12px',
          padding: '36px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
          border: `1px solid ${COLORS.border}`,
          borderLeft: `4px solid ${COLORS.orange}`,
          position: 'relative',
          marginTop: '40px',
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '24px',
            fontSize: '4rem',
            color: COLORS.orange,
            opacity: 0.3,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}>
            "
          </div>

          <div style={{
            fontSize: '1.1rem',
            color: COLORS.navy,
            fontStyle: 'italic',
            lineHeight: 1.9,
            paddingTop: '32px',
          }}>
            <p style={{ marginBottom: '20px' }}>
              Most organisations find out someone is leaving on the day they hand in their notice.
            </p>
            <p style={{ marginBottom: '20px' }}>
              The signals were always there.<br />
              Nobody was reading them.
            </p>
            <p style={{
              color: COLORS.orange,
              fontWeight: 600,
              fontStyle: 'italic',
              marginBottom: 0,
            }}>
              WRIA reads them. 90 days out.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .human-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .human-grid > div:last-child {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
