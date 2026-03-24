import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { COLORS, CALENDLY_URL } from './constants';

export default function PricingSection() {
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
    {
      name: 'Growth',
      employees: '0–500 users',
      price: '15',
      popular: false,
      enterprise: false,
    },
    {
      name: 'Scale',
      employees: '500–1,000 users',
      price: '12',
      popular: true,
      enterprise: false,
    },
    {
      name: 'Enterprise',
      employees: '1,000+ users',
      price: 'POA',
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <section id="pricing" style={{
      background: COLORS.lightBg,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: COLORS.navy,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: COLORS.textBody,
            maxWidth: '540px',
            margin: '0 auto',
          }}>
            One price. Everything included. No feature gating. No per-module charges.
          </p>
        </div>

        {/* Pre-decision text */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: COLORS.textMuted,
          fontStyle: 'italic',
          marginBottom: '48px',
        }}>
          <Link to="/demo" style={{ color: COLORS.orange, textDecoration: 'none' }}>Try the demo</Link>
          {' '}or{' '}
          <a href="/trial" style={{ color: COLORS.orange, textDecoration: 'none' }}>start your free trial</a>
          {' '}before you decide on a plan.
        </p>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '48px',
          alignItems: 'stretch',
        }} className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.popular
                ? COLORS.white
                : plan.enterprise
                  ? COLORS.navy
                  : COLORS.white,
              border: plan.popular
                ? `2px solid ${COLORS.orange}`
                : plan.enterprise
                  ? 'none'
                  : `1px solid ${COLORS.border}`,
              borderRadius: '12px',
              padding: '32px 28px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              boxShadow: plan.popular ? `0 8px 24px ${COLORS.orange}20` : '0 1px 4px rgba(0,0,0,0.07)',
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: COLORS.orange,
                  color: COLORS.white,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: '100px',
                }}>Most Popular</div>
              )}

              {/* Tier name & workers */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: plan.enterprise ? COLORS.white : COLORS.navy,
                marginBottom: '4px'
              }}>{plan.name}</h3>
              <p style={{
                fontSize: '0.9rem',
                color: plan.enterprise ? COLORS.textLight : COLORS.textMuted,
                marginBottom: '20px'
              }}>{plan.employees}</p>

              {/* Price */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: plan.enterprise ? COLORS.white : COLORS.navy
                }}>
                  {plan.price === 'POA' ? 'POA' : `£${plan.price}`}
                </span>
                {plan.price !== 'POA' && (
                  <span style={{
                    color: plan.enterprise ? COLORS.textLight : COLORS.textMuted,
                    fontSize: '0.9rem'
                  }}>/user/month</span>
                )}
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: plan.enterprise ? COLORS.slate700 : COLORS.border,
                marginBottom: '24px'
              }} />

              {/* Everything included */}
              <div style={{ textAlign: 'left' }}>
                <h4 style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: plan.enterprise ? COLORS.textLight : COLORS.textMuted,
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Everything included:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {includedFeatures.map((feature, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check
                        size={16}
                        color={COLORS.orange}
                        strokeWidth={3}
                        style={{ flexShrink: 0 }}
                      />
                      <span style={{
                        fontSize: '0.9rem',
                        color: plan.enterprise ? COLORS.textLight : COLORS.textBody
                      }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {addOns.map((addon, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        fontSize: '0.9rem',
                        color: COLORS.textMuted,
                        fontWeight: 600,
                        flexShrink: 0,
                      }}>+</span>
                      <span style={{
                        fontSize: '0.9rem',
                        color: COLORS.textMuted
                      }}>{addon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacer to push button down */}
              <div style={{ flex: 1, minHeight: '24px' }} />

              {/* CTA */}
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                padding: '14px 48px',
                background: plan.popular ? COLORS.orange : 'transparent',
                border: plan.popular ? 'none' : plan.enterprise ? `1px solid ${COLORS.textLight}` : `1px solid ${COLORS.border}`,
                color: plan.popular ? COLORS.white : plan.enterprise ? COLORS.white : COLORS.navy,
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
              }}>Book a Call</a>
            </div>
          ))}
        </div>

        {/* Summary box */}
        <div style={{
          background: COLORS.white,
          borderRadius: '12px',
          padding: '28px 40px',
          border: `1px solid ${COLORS.border}`,
          textAlign: 'center',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        }}>
          <p style={{
            fontSize: '1rem',
            color: COLORS.textBody,
            margin: 0,
          }}>
            <span style={{ color: COLORS.navy, fontWeight: 600 }}>Every plan includes everything.</span> All 16 modules, Nova AI, WRIA + CPIA, mobile apps, 48 languages, offline mode, and all integrations.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px !important; margin: 0 auto 48px !important; }
        }
      `}</style>
    </section>
  );
}
