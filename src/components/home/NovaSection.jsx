import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Lock, Globe, ArrowRight } from 'lucide-react';
import { COLORS } from './constants';

// Nova Icon
const NovaIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill={COLORS.orange}/>
    <circle cx="32" cy="38" r="14" fill="white" opacity="0.95"/>
    <path d="M26 30 L32 8 L38 30 Z" fill="white" opacity="0.95"/>
    <circle cx="32" cy="38" r="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="38" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
  </svg>
);

export default function NovaSection() {
  const capabilities = [
    {
      title: 'Takes Action',
      description: 'Not a FAQ bot. Nova actually does things — request time off, check payslips, build schedules.',
      Icon: Zap,
    },
    {
      title: 'Knows Your Data',
      description: 'Integrated with your real company data. Respects role-based permissions.',
      Icon: Lock,
    },
    {
      title: 'Works Everywhere',
      description: 'Portal, Mobile App, Slack, Teams, WhatsApp. 48 languages.',
      Icon: Globe,
    },
  ];

  return (
    <section style={{
      background: COLORS.navyDark,
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: `radial-gradient(circle, ${COLORS.orange}08 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}>
            <NovaIcon size={64} />
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Meet Nova.
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: COLORS.orange,
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            The workforce assistant that actually does things.
          </p>

          <p style={{
            fontSize: '1rem',
            color: COLORS.textLight,
            maxWidth: '650px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}>
            Nova is an AI assistant built into every part of Uplift. Workers, managers, and HR can ask questions
            and take action through natural language — across portal, mobile, Slack, Teams, and WhatsApp.
          </p>

          {/* Capability cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '32px',
          }} className="nova-grid">
            {capabilities.map((cap, i) => (
              <div key={i} style={{
                background: COLORS.navyCard,
                border: `1px solid ${COLORS.borderDark}`,
                borderRadius: '12px',
                padding: '28px 20px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: `${COLORS.orange}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                }}>
                  <cap.Icon size={26} color={COLORS.orange} />
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: COLORS.white,
                  marginBottom: '8px',
                }}>
                  {cap.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: COLORS.textLight,
                  lineHeight: 1.6,
                }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats line */}
          <p style={{
            fontSize: '0.875rem',
            color: COLORS.textMuted,
            marginBottom: '32px',
          }}>
            30+ tools · &lt;1 second response · 48 languages · Confirmation before every write action
          </p>

          {/* CTA - ghost button */}
          <Link to="/nova" style={{
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
            Learn more about Nova
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nova-grid { grid-template-columns: 1fr !important; max-width: 360px !important; margin: 0 auto 32px !important; }
        }
      `}</style>
    </section>
  );
}
