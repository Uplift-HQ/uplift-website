import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { COLORS, RADIUS, TYPOGRAPHY, CALENDLY_URL } from './constants';

// PRICING IS LOCKED - DO NOT CHANGE THESE VALUES
const plans = [
  { name: 'Growth', employees: '0–500 users', price: '15', popular: false, enterprise: false },
  { name: 'Scale', employees: '500–1,000 users', price: '12', popular: true, enterprise: false },
  { name: 'Enterprise', employees: '1,000+ users', price: 'POA', popular: false, enterprise: true },
];

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

export default function Act6Pricing() {
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
      id="pricing"
      ref={sectionRef}
      style={{
        background: COLORS.slate100,
        padding: '100px 60px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Intro text */}
        <p className="reveal" style={{
          textAlign: 'center',
          fontFamily: TYPOGRAPHY.font,
          fontSize: '14px',
          color: COLORS.slate500,
          fontStyle: 'italic',
          marginBottom: '32px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          All plans include every module, Nova AI, and Uplift Intelligence. No extra charge.
        </p>

        {/* Pricing cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="reveal"
              style={{
                background: plan.enterprise ? COLORS.slate900 : COLORS.white,
                border: plan.popular ? `2px solid ${COLORS.orange}` : `1px solid ${COLORS.slate200}`,
                borderRadius: RADIUS.cardLarge,
                padding: '32px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: plan.popular
                  ? '0 8px 32px rgba(255, 107, 53, 0.15)'
                  : '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
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
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: RADIUS.full,
                  fontFamily: TYPOGRAPHY.font,
                }}>
                  Most Popular
                </div>
              )}

              <h3 style={{
                fontFamily: TYPOGRAPHY.font,
                fontSize: '24px',
                fontWeight: 700,
                color: plan.enterprise ? COLORS.white : COLORS.slate900,
                textAlign: 'center',
                marginBottom: '4px',
              }}>
                {plan.name}
              </h3>

              <p style={{
                fontFamily: TYPOGRAPHY.font,
                fontSize: '14px',
                color: plan.enterprise ? '#94A3B8' : COLORS.slate500,
                textAlign: 'center',
                marginBottom: '20px',
              }}>
                {plan.employees}
              </p>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: TYPOGRAPHY.font,
                  fontSize: '48px',
                  fontWeight: 700,
                  color: plan.enterprise ? COLORS.white : COLORS.slate900,
                }}>
                  {plan.price === 'POA' ? 'POA' : `£${plan.price}`}
                </span>
                {plan.price !== 'POA' && (
                  <span style={{
                    fontFamily: TYPOGRAPHY.font,
                    fontSize: '14px',
                    color: plan.enterprise ? '#94A3B8' : COLORS.slate500,
                  }}>
                    /user/month
                  </span>
                )}
              </div>

              <div style={{
                height: '1px',
                background: plan.enterprise ? 'rgba(255,255,255,0.1)' : COLORS.slate200,
                marginBottom: '24px',
              }} />

              {/* Features */}
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: TYPOGRAPHY.font,
                  fontSize: '11px',
                  fontWeight: 600,
                  color: plan.enterprise ? '#94A3B8' : COLORS.slate500,
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
                        fontFamily: TYPOGRAPHY.font,
                        fontSize: '14px',
                        color: plan.enterprise ? '#94A3B8' : COLORS.slate700,
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                <div style={{
                  borderTop: `1px solid ${plan.enterprise ? 'rgba(255,255,255,0.1)' : COLORS.slate200}`,
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  {addOns.map((addon, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{
                        fontFamily: TYPOGRAPHY.font,
                        fontSize: '14px',
                        color: '#94A3B8',
                        fontWeight: 600,
                      }}>
                        +
                      </span>
                      <span style={{
                        fontFamily: TYPOGRAPHY.font,
                        fontSize: '14px',
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
                  border: plan.popular ? 'none' : `2px solid ${plan.enterprise ? 'rgba(255,255,255,0.25)' : COLORS.slate200}`,
                  color: plan.popular ? COLORS.white : plan.enterprise ? COLORS.white : COLORS.slate900,
                  borderRadius: RADIUS.button,
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: TYPOGRAPHY.font,
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
          fontFamily: TYPOGRAPHY.font,
          fontSize: '14px',
          color: COLORS.slate500,
          marginTop: '48px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
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
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px !important; margin: 0 auto !important; }
        }
        @media (max-width: 640px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
