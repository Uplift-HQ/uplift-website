import React, { useEffect, useRef } from 'react';
import { COLORS, RADIUS, TYPOGRAPHY } from './constants';

// Nova Icon - Real component from codebase
const NovaIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill={COLORS.orange}/>
    <circle cx="32" cy="38" r="14" fill="white" opacity="0.95"/>
    <path d="M26 30 L32 8 L38 30 Z" fill="white" opacity="0.95"/>
    <circle cx="32" cy="38" r="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="38" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
  </svg>
);

const orbitNodes = [
  { label: 'Scheduling', angle: 90 },
  { label: 'Payroll', angle: 45 },
  { label: 'HR Suite', angle: 0 },
  { label: 'Compliance', angle: -45 },
  { label: 'Performance', angle: -90 },
  { label: 'Learning', angle: -135 },
  { label: 'Recognition', angle: 180 },
  { label: 'Onboarding', angle: 135 },
];

export default function Act4Intelligence() {
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
    elements?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="intelligence"
      ref={sectionRef}
      style={{
        background: COLORS.slate100,
        padding: '100px 60px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top two-column section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '72px',
        }} className="intel-header">
          <h2 className="reveal" style={{
            fontFamily: TYPOGRAPHY.font,
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: 1.15,
            color: COLORS.slate900,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            Every module powered by the same{' '}
            <span style={{ color: COLORS.orange }}>intelligence.</span>
          </h2>

          <div className="reveal" style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '16px',
              color: COLORS.slate500,
              lineHeight: 1.8,
              marginBottom: '12px',
            }}>
              Nova and Uplift Intelligence aren't add-ons. They sit at the centre of the entire platform — connecting operational data to developmental insight, and turning both into action that managers can take today.
            </p>
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '16px',
              color: COLORS.slate900,
              fontWeight: 600,
            }}>
              Included at every tier. No extra charge.
            </p>
          </div>
        </div>

        {/* Orbital Diagram Wrapper */}
        <div className="orbital-wrapper" style={{
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto 72px',
          overflow: 'hidden',
        }}>
          <div className="reveal orbital-container" style={{
            position: 'relative',
            width: '500px',
            height: '500px',
            margin: '0 auto',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
          {/* Rings - 150/270/400/490px diameter */}
          {[490, 400, 270, 150].map((size, i) => (
            <div
              key={size}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                border: `1px solid ${i === 3 ? 'rgba(255,107,53,0.25)' : COLORS.slate200}`,
              }}
            />
          ))}

          {/* Core */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            background: COLORS.orange,
            boxShadow: '0 0 0 12px rgba(255,107,53,0.08), 0 0 0 24px rgba(255,107,53,0.04)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '11px',
              fontWeight: 700,
              color: COLORS.white,
              textAlign: 'center',
              lineHeight: 1.3,
            }}>Nova +<br />Intelligence</span>
          </div>

          {/* Orbit nodes */}
          {orbitNodes.map((node, idx) => {
            const radius = 200;
            const angleRad = (node.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = -Math.sin(angleRad) * radius;

            return (
              <div
                key={node.label}
                className="orbit-node"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  background: COLORS.white,
                  border: `1px solid ${COLORS.slate200}`,
                  borderRadius: RADIUS.full,
                  padding: '7px 14px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: COLORS.slate700,
                  fontFamily: TYPOGRAPHY.font,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  whiteSpace: 'nowrap',
                }}
              >
                {node.label}
              </div>
            );
          })}
          </div>
        </div>

        {/* Three-cell grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: COLORS.slate200,
        }} className="intel-grid">
          {/* Cell 1 - WRIA */}
          <div className="reveal" style={{
            background: COLORS.white,
            padding: '40px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <span style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(255,107,53,0.1)',
              display: 'block',
              lineHeight: 1,
            }}>01</span>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: COLORS.orange,
              display: 'block',
              marginBottom: '14px',
              fontFamily: TYPOGRAPHY.font,
            }}>WRIA</span>
            <h3 style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '20px',
              fontWeight: 600,
              color: COLORS.slate900,
              marginBottom: '12px',
            }}>
              Workforce Retention Intelligence Algorithm
            </h3>
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '14px',
              color: COLORS.slate500,
              lineHeight: 1.75,
            }}>
              Predicts who is leaving up to 90 days before they hand in their notice. 7 behavioural signals. Risk score 0-100 per employee. Departure window 30, 60, or 90 days. Recommended manager actions.
            </p>
          </div>

          {/* Cell 2 - CPIA */}
          <div className="reveal" style={{
            background: COLORS.white,
            padding: '40px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <span style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '48px',
              fontWeight: 700,
              color: 'rgba(255,107,53,0.1)',
              display: 'block',
              lineHeight: 1,
            }}>02</span>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: COLORS.orange,
              display: 'block',
              marginBottom: '14px',
              fontFamily: TYPOGRAPHY.font,
            }}>CPIA</span>
            <h3 style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '20px',
              fontWeight: 600,
              color: COLORS.slate900,
              marginBottom: '12px',
            }}>
              Career Path Intelligence Algorithm
            </h3>
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '14px',
              color: COLORS.slate500,
              lineHeight: 1.75,
            }}>
              Auto-generates personalised career paths from how people in your organisation actually progress. No configuration. Readiness scores. Skill gaps. A live promotion pipeline for every manager.
            </p>
          </div>

          {/* Cell 3 - NOVA */}
          <div className="reveal" style={{
            background: COLORS.slate900,
            padding: '40px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <div style={{ marginBottom: '16px' }}>
              <NovaIcon size={48} />
            </div>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: COLORS.orange,
              display: 'block',
              marginBottom: '14px',
              fontFamily: TYPOGRAPHY.font,
            }}>NOVA</span>
            <h3 style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '20px',
              fontWeight: 600,
              color: COLORS.white,
              marginBottom: '12px',
            }}>
              Your AI workforce assistant
            </h3>
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '14px',
              color: COLORS.slate500,
              lineHeight: 1.75,
              marginBottom: '20px',
            }}>
              Not a chatbot. Nova takes real action — approves leave, builds schedules, runs payroll, generates documents. Across Slack, Teams, WhatsApp, and mobile.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              background: '#1E293B',
              borderRadius: RADIUS.button,
              padding: '12px',
            }}>
              {[
                { value: '30+', label: 'Tools' },
                { value: '48', label: 'Languages' },
                { value: '5', label: 'Channels' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <span style={{
                    fontFamily: TYPOGRAPHY.font,
                    fontSize: '18px',
                    fontWeight: 700,
                    color: COLORS.orange,
                    display: 'block',
                  }}>{stat.value}</span>
                  <span style={{
                    fontSize: '10px',
                    color: '#475569',
                    fontFamily: TYPOGRAPHY.font,
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="reveal intel-footer" style={{
          background: COLORS.white,
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <p style={{
            fontFamily: TYPOGRAPHY.font,
            fontSize: '14px',
            color: COLORS.slate500,
          }}>
            Both algorithms and Nova are{' '}
            <span style={{ fontWeight: 700, color: COLORS.slate900 }}>included at every pricing tier</span>.
            No upsell. No add-on. No extra charge.
          </p>
          <span style={{
            background: COLORS.orangeLight,
            border: '1px solid rgba(255,107,53,0.2)',
            borderRadius: RADIUS.full,
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: 600,
            color: COLORS.orange,
            fontFamily: TYPOGRAPHY.font,
          }}>
            Patent Pending · Proprietary
          </span>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 1024px) {
          .intel-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .intel-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          section#intelligence {
            overflow: hidden !important;
          }
          .orbital-wrapper {
            position: relative !important;
            width: 100% !important;
            height: 300px !important;
            margin-bottom: 20px !important;
          }
          .orbital-container.reveal.animate-in {
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) scale(0.55) !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .orbital-wrapper {
            height: 260px !important;
          }
          .orbital-container.reveal.animate-in {
            transform: translate(-50%, -50%) scale(0.48) !important;
          }
        }
        @media (max-width: 400px) {
          .orbital-wrapper {
            height: 220px !important;
          }
          .orbital-container.reveal.animate-in {
            transform: translate(-50%, -50%) scale(0.40) !important;
          }
        }
      `}</style>
    </section>
  );
}
