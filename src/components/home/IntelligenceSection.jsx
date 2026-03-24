import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLORS } from './constants';

export default function IntelligenceSection() {
  return (
    <section id="intelligence" style={{
      background: COLORS.navyDark,
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '880px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          {/* Tag */}
          <div style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            color: COLORS.orange,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            marginBottom: '16px',
          }}>
            NEW · PROPRIETARY · NOTHING LIKE THIS EXISTS
          </div>

          <h2 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}>
            Uplift Intelligence.
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: COLORS.orange,
            fontWeight: 600,
          }}>
            Two proprietary algorithms. No other platform has them.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '40px',
          marginTop: '-4px',
        }} className="intelligence-cards">
          {/* WRIA Card */}
          <div style={{
            background: COLORS.navyCard,
            borderRadius: '12px',
            padding: '32px',
            borderTop: `3px solid ${COLORS.orange}`,
          }}>
            <h3 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: COLORS.orange,
              marginBottom: '16px',
            }}>
              WRIA — Workforce Retention Intelligence Algorithm
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: COLORS.textLight,
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              Predicts who is leaving up to 90 days before they hand in their notice.
              7 behavioural signals. Risk score 0–100. Predicted departure window 30, 60, or 90 days.
              Top 3 contributing factors. Recommended manager actions.
            </p>
            <div style={{
              paddingTop: '20px',
              borderTop: `1px solid ${COLORS.borderDark}`,
            }}>
              <span style={{
                fontSize: '0.78rem',
                color: COLORS.textMuted,
              }}>
                Patent Pending · Proprietary · Included at every tier
              </span>
            </div>
          </div>

          {/* CPIA Card */}
          <div style={{
            background: COLORS.navyCard,
            borderRadius: '12px',
            padding: '32px',
            borderTop: `3px solid ${COLORS.orange}`,
          }}>
            <h3 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: COLORS.orange,
              marginBottom: '16px',
            }}>
              CPIA — Career Path Intelligence Algorithm
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: COLORS.textLight,
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              Auto-generates personalised career paths for every employee from how people
              in your organisation actually progress. No HR framework-building. No configuration.
              Readiness scores. Skill gaps. Time to ready. A live promotion pipeline for every manager.
            </p>
            <div style={{
              paddingTop: '20px',
              borderTop: `1px solid ${COLORS.borderDark}`,
            }}>
              <span style={{
                fontSize: '0.78rem',
                color: COLORS.textMuted,
              }}>
                Patent Pending · Proprietary · Included at every tier
              </span>
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{
            fontSize: '1rem',
            color: COLORS.orange,
            fontStyle: 'italic',
            fontWeight: 600,
          }}>
            "Ask your current platform to show you their at-risk report. Then ask us."
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/demo" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.3)',
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 600,
          }}>
            See Intelligence in action
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .intelligence-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
