import React from 'react';
import { COLORS } from './constants';

export default function SocialProofSection() {
  const stats = [
    { value: '450', label: 'Employees in largest active evaluation' },
    { value: '10', label: 'Countries supported in single deployment' },
    { value: '16', label: 'Modules. One subscription.' },
  ];

  return (
    <section style={{
      background: COLORS.navyDark,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '64px',
          textAlign: 'center',
        }} className="social-stats">
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: COLORS.orange,
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1rem',
                color: COLORS.textLight,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quote card */}
        <div style={{
          background: COLORS.white,
          borderRadius: '12px',
          padding: '48px',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        }}>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: COLORS.navy,
            lineHeight: 1.7,
            marginBottom: '24px',
            fontWeight: 500,
          }}>
            "Uplift beat every other platform in our evaluation on features,
            price, and AI capability. The combination of Nova, WRIA, and CPIA
            doesn't exist anywhere else."
          </p>
          <div style={{
            fontSize: '1rem',
            color: COLORS.textMuted,
            fontStyle: 'italic',
          }}>
            — Enterprise Manufacturing Client, 2026
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .social-stats {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
