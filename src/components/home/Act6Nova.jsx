import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Lock, Globe, ArrowRight } from 'lucide-react';
import { COLORS, SPACING } from './constants';

// Nova Icon
const NovaIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill={COLORS.orange}/>
    <circle cx="32" cy="38" r="14" fill="white" opacity="0.95"/>
    <path d="M26 30 L32 8 L38 30 Z" fill="white" opacity="0.95"/>
    <circle cx="32" cy="38" r="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="38" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
  </svg>
);

export default function Act6Nova() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <section
      ref={sectionRef}
      style={{
        background: COLORS.nearBlack,
        padding: `${SPACING.xl} ${SPACING.lg}`,
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        {/* Nova icon */}
        <div className="reveal" style={{
          marginBottom: SPACING.md,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <NovaIcon size={64} />
        </div>

        {/* Headline */}
        <h2 className="reveal" style={{
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: COLORS.white,
          marginBottom: SPACING.sm,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Meet Nova.
        </h2>

        {/* Subheadline */}
        <p className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '1.1rem',
          fontWeight: 600,
          color: COLORS.orange,
          marginBottom: SPACING.sm,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          The workforce assistant that actually does things.
        </p>

        <p className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '1rem',
          color: '#94A3B8',
          maxWidth: '600px',
          margin: `0 auto ${SPACING.xl}`,
          lineHeight: 1.7,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Nova is an AI assistant built into every part of Uplift. Workers, managers, and HR
          can ask questions and take action through natural language.
        </p>

        {/* Three cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: SPACING.md,
        }} className="nova-cards">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: COLORS.navyCard,
                border: `1px solid ${COLORS.borderDark}`,
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: `rgba(255, 107, 53, 0.15)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <cap.Icon size={28} color={COLORS.orange} />
              </div>
              <h3 style={{
                fontFamily: "'Syne', Georgia, serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                color: COLORS.white,
                marginBottom: '8px',
              }}>
                {cap.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '0.875rem',
                color: '#94A3B8',
                lineHeight: 1.6,
              }}>
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats line */}
        <p className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.875rem',
          color: COLORS.muted,
          marginBottom: SPACING.md,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          30+ tools · &lt;1 second response · 5 channels · 48 languages · Confirmation before every action
        </p>

        {/* Ghost CTA */}
        <div className="reveal" style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <Link to="/nova" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.25)',
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: "'Inter', system-ui, sans-serif",
            transition: 'border-color 0.15s ease',
          }}>
            Learn more about Nova
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          .nova-cards { grid-template-columns: 1fr !important; max-width: 360px !important; margin: 0 auto 48px !important; }
        }
        @media (max-width: 640px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
