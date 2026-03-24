import React from 'react';
import { COLORS } from './constants';

export default function SocialProofBar() {
  const stats = [
    { value: '16', label: 'Modules included' },
    { value: '48', label: 'Languages supported' },
    { value: '450', label: 'Employees in largest evaluation' },
    { value: '10', label: 'Countries in one deployment' },
  ];

  return (
    <section style={{
      background: COLORS.navy,
      borderTop: `1px solid ${COLORS.borderDark}`,
      padding: '20px 0',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0',
      }} className="social-proof-bar">
        {stats.map((stat, i) => (
          <React.Fragment key={i}>
            <div style={{
              textAlign: 'center',
              padding: '0 32px',
            }}>
              <div style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: COLORS.orange,
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: COLORS.textMuted,
              }}>
                {stat.label}
              </div>
            </div>
            {i < stats.length - 1 && (
              <div style={{
                width: '1px',
                height: '40px',
                background: 'rgba(255,255,255,0.08)',
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .social-proof-bar {
            flex-wrap: wrap !important;
            gap: 24px !important;
          }
          .social-proof-bar > div[style*="width: 1px"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
