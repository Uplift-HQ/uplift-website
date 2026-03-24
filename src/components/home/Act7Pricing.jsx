import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { COLORS, SPACING, CALENDLY_URL } from './constants';

export default function Act7Pricing() {
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

  const includedFeatures = [
    'All 16 modules included',
    'Nova AI assistant',
    'WRIA + CPIA intelligence algorithms',
    'Mobile apps (Worker + Manager)',
    'AI scheduling & demand forecasting',
    'Multi-country payroll',
    'Analytics, reporting & integrations',
  ];

  const addOns = [
    'iHASCO accredited eLearning content — POA',
    'Non-UK payroll — POA',
  ];

  const plans = [
    { name: 'Growth', employees: '0–500 users', price: '15', popular: false, enterprise: false },
    { name: 'Scale', employees: '500–1,000 users', price: '12', popular: true, enterprise: false },
    { name: 'Enterprise', employees: '1,000+ users', price: 'POA', popular: false, enterprise: true },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        background: COLORS.chalk,
        padding: `${SPACING.xl} ${SPACING.lg}`,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Headline */}
        <h2 className="reveal" style={{
          textAlign: 'center',
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: COLORS.nearBlack,
          marginBottom: SPACING.sm,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Simple, Transparent Pricing
        </h2>

        {/* Intro text */}
        <p className="reveal" style={{
          textAlign: 'center',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.95rem',
          color: COLORS.muted,
          marginBottom: SPACING.lg,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          All plans include every module, Nova AI, and Uplift Intelligence. No feature gating.
        </p>

        {/* Pricing cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: SPACING.lg,
        }} className="pricing-cards">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: plan.enterprise ? COLORS.nearBlack : COLORS.white,
                border: plan.popular ? `2px solid ${COLORS.orange}` : `1px solid ${COLORS.border}`,
                borderRadius: '16px',
                padding: '32px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: plan.popular
                  ? `0 8px 32px rgba(255, 107, 53, 0.15)`
                  : '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: COLORS.orange,
                  color: COLORS.white,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                  Most Popular
                </div>
              )}

              <h3 style={{
                fontFamily: "'Syne', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: plan.enterprise ? COLORS.white : COLORS.nearBlack,
                textAlign: 'center',
                marginBottom: '4px',
              }}>
                {plan.name}
              </h3>

              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '0.875rem',
                color: plan.enterprise ? '#94A3B8' : COLORS.muted,
                textAlign: 'center',
                marginBottom: '20px',
              }}>
                {plan.employees}
              </p>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: "'Syne', Georgia, serif",
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: plan.enterprise ? COLORS.white : COLORS.nearBlack,
                }}>
                  {plan.price === 'POA' ? 'POA' : `£${plan.price}`}
                </span>
                {plan.price !== 'POA' && (
                  <span style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '0.875rem',
                    color: plan.enterprise ? '#94A3B8' : COLORS.muted,
                  }}>
                    /user/month
                  </span>
                )}
              </div>

              <div style={{
                height: '1px',
                background: plan.enterprise ? 'rgba(255,255,255,0.1)' : COLORS.border,
                marginBottom: '24px',
              }} />

              {/* Features */}
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: plan.enterprise ? '#94A3B8' : COLORS.muted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '16px',
                }}>
                  Everything included:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {includedFeatures.map((feature, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Check size={16} color={COLORS.orange} strokeWidth={3} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.875rem',
                        color: plan.enterprise ? '#94A3B8' : COLORS.bodyText,
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                <div style={{
                  borderTop: `1px solid ${plan.enterprise ? 'rgba(255,255,255,0.1)' : COLORS.border}`,
                  paddingTop: SPACING.sm,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  {addOns.map((addon, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                        fontWeight: 600,
                      }}>
                        +
                      </span>
                      <span style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                      }}>
                        {addon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '24px',
                  padding: '14px 28px',
                  background: plan.popular ? COLORS.orange : 'transparent',
                  border: plan.popular ? 'none' : `2px solid ${plan.enterprise ? 'rgba(255,255,255,0.25)' : COLORS.border}`,
                  color: plan.popular ? COLORS.white : plan.enterprise ? COLORS.white : COLORS.nearBlack,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  transition: 'all 0.15s ease',
                }}
              >
                Book a Call
              </a>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="reveal" style={{
          textAlign: 'center',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.95rem',
          color: COLORS.muted,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Not ready to choose a plan?{' '}
          <Link to="/demo" style={{ color: COLORS.orange, textDecoration: 'none', fontWeight: 600 }}>
            Try the demo
          </Link>
          {' '}— no signup, no card, 4 minutes.
        </p>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 1024px) {
          .pricing-cards { grid-template-columns: 1fr !important; max-width: 420px !important; margin: 0 auto ${SPACING.lg} !important; }
        }
      `}</style>
    </section>
  );
}
