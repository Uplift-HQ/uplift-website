import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLORS, RADIUS, TYPOGRAPHY } from './constants';

// HubSpot Configuration
// TODO: Move to environment variables for production
const HUBSPOT_CONFIG = {
  portalId: '147593675',
  formGuid: 'ffc77268-2efe-4af4-84b9-03f61b8f5672'
};

// Submit form data to HubSpot
const submitToHubspot = async (formData) => {
  const hutk = document.cookie
    .split('; ')
    .find(row => row.startsWith('hubspotutk='))
    ?.split('=')[1];

  const payload = {
    fields: [
      { name: 'firstname', value: formData.firstName },
      { name: 'email', value: formData.email },
      { name: 'company', value: formData.company },
    ],
    context: {
      hutk: hutk || undefined,
      pageUri: window.location.href,
      pageName: document.title,
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_CONFIG.portalId}/${HUBSPOT_CONFIG.formGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  return response.ok;
};

export default function Act1Hero() {
  const [formData, setFormData] = useState({ firstName: '', email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
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

  const defaultPills = [
    'Scheduling', 'UK Payroll', 'HR Suite', 'Compliance',
    'Onboarding', 'Performance', 'Learning', 'Documents'
  ];

  const orangePills = [
    'WRIA Intelligence', 'CPIA Intelligence', 'Nova AI'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to HubSpot (fire and forget - don't block redirect)
      submitToHubspot(formData).catch(err => {
        console.warn('[HubSpot] Submission error:', err);
      });

      // Redirect to demo page immediately
      window.location.href = '/demo';
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(true);
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: `1px solid ${COLORS.slate200}`,
    borderRadius: RADIUS.button,
    fontSize: '14px',
    fontFamily: TYPOGRAPHY.font,
    background: COLORS.slate50,
    marginBottom: '10px',
    outline: 'none',
    transition: 'all 0.15s ease',
    color: COLORS.slate900,
    boxSizing: 'border-box',
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: COLORS.slate50,
        padding: '80px 60px 100px',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '80px',
        alignItems: 'start',
      }} className="hero-grid">
        {/* Left Column */}
        <div>
          {/* Eyebrow */}
          <div className="reveal" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '36px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <div style={{
              width: '28px',
              height: '2px',
              background: COLORS.orange,
            }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: COLORS.orange,
              fontFamily: TYPOGRAPHY.font,
            }}>
              WORKFORCE INTELLIGENCE PLATFORM
            </span>
          </div>

          {/* H1 - Only h1 on the page */}
          <h1 className="reveal hero-h1" style={{
            fontFamily: TYPOGRAPHY.font,
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <span style={{ color: COLORS.slate900, display: 'block' }}>
              The workforce platform that
            </span>
            <span style={{ color: COLORS.orange, display: 'block' }}>
              actually knows your people.
            </span>
          </h1>

          {/* Body paragraph */}
          <p className="reveal" style={{
            fontFamily: TYPOGRAPHY.font,
            fontSize: '16px',
            color: COLORS.slate500,
            lineHeight: 1.75,
            maxWidth: '460px',
            marginBottom: '44px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            Scheduling. Payroll. HR. Compliance. Career intelligence.
            16 modules in one platform — with AI that predicts, acts,
            and shows every worker their next move.
          </p>

          {/* Pill strip */}
          <div className="reveal" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            {defaultPills.map((pill) => (
              <span
                key={pill}
                style={{
                  padding: '5px 12px',
                  borderRadius: RADIUS.full,
                  fontSize: '12px',
                  fontFamily: TYPOGRAPHY.font,
                  background: COLORS.white,
                  border: `1px solid ${COLORS.slate200}`,
                  color: COLORS.slate700,
                }}
              >
                {pill}
              </span>
            ))}
            {orangePills.map((pill) => (
              <span
                key={pill}
                style={{
                  padding: '5px 12px',
                  borderRadius: RADIUS.full,
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: TYPOGRAPHY.font,
                  background: COLORS.orangeLight,
                  border: '1px solid rgba(255,107,53,0.2)',
                  color: COLORS.orange,
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Lead Form Panel */}
        <div className="reveal lead-form-panel" style={{
          background: COLORS.white,
          border: `1px solid ${COLORS.slate200}`,
          borderRadius: RADIUS.cardLarge,
          padding: '36px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.03), 0 16px 48px rgba(0,0,0,0.06)',
          position: 'sticky',
          top: '100px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <h2 style={{
            fontFamily: TYPOGRAPHY.font,
            fontSize: '20px',
            fontWeight: 700,
            color: COLORS.slate900,
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}>
            See Uplift in 4 minutes
          </h2>
          <p style={{
            fontSize: '13px',
            color: COLORS.slate500,
            marginBottom: '24px',
            fontFamily: TYPOGRAPHY.font,
          }}>
            No card. No sales call. Just the platform.
          </p>

          <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => {
                      setFormData({ ...formData, firstName: e.target.value });
                      if (errors.firstName) setErrors({ ...errors, firstName: '' });
                    }}
                    style={{
                      ...inputStyle,
                      marginBottom: '0',
                      borderColor: errors.firstName ? '#EF4444' : COLORS.slate200,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = errors.firstName ? '#EF4444' : COLORS.orange;
                      e.target.style.background = COLORS.white;
                      e.target.style.boxShadow = errors.firstName ? '0 0 0 3px rgba(239,68,68,0.08)' : '0 0 0 3px rgba(255,107,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.firstName ? '#EF4444' : COLORS.slate200;
                      e.target.style.background = COLORS.slate50;
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {errors.firstName && (
                    <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', fontFamily: TYPOGRAPHY.font }}>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <input
                    type="email"
                    placeholder="Work email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    style={{
                      ...inputStyle,
                      marginBottom: '0',
                      borderColor: errors.email ? '#EF4444' : COLORS.slate200,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = errors.email ? '#EF4444' : COLORS.orange;
                      e.target.style.background = COLORS.white;
                      e.target.style.boxShadow = errors.email ? '0 0 0 3px rgba(239,68,68,0.08)' : '0 0 0 3px rgba(255,107,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email ? '#EF4444' : COLORS.slate200;
                      e.target.style.background = COLORS.slate50;
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {errors.email && (
                    <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', fontFamily: TYPOGRAPHY.font }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: '' });
                    }}
                    style={{
                      ...inputStyle,
                      marginBottom: '0',
                      borderColor: errors.company ? '#EF4444' : COLORS.slate200,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = errors.company ? '#EF4444' : COLORS.orange;
                      e.target.style.background = COLORS.white;
                      e.target.style.boxShadow = errors.company ? '0 0 0 3px rgba(239,68,68,0.08)' : '0 0 0 3px rgba(255,107,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.company ? '#EF4444' : COLORS.slate200;
                      e.target.style.background = COLORS.slate50;
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {errors.company && (
                    <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', fontFamily: TYPOGRAPHY.font }}>
                      {errors.company}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '13px',
                    background: COLORS.orange,
                    color: COLORS.white,
                    border: 'none',
                    borderRadius: RADIUS.button,
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: TYPOGRAPHY.font,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    marginTop: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.15s ease',
                    opacity: isSubmitting ? 0.8 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.background = COLORS.orangeHover;
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 16px rgba(255,107,53,0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = COLORS.orange;
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'See Uplift in action'}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>

                {submitError && (
                  <p style={{ fontSize: '12px', color: '#EF4444', textAlign: 'center', marginTop: '8px', fontFamily: TYPOGRAPHY.font }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              <p style={{
                fontSize: '11px',
                color: '#CBD5E1',
                textAlign: 'center',
                marginTop: '10px',
                fontFamily: TYPOGRAPHY.font,
              }}>
                No card required · 4 minute demo
              </p>

              {/* Divider */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                margin: '14px 0',
              }}>
                <div style={{ flex: 1, height: '1px', background: COLORS.slate200 }} />
                <span style={{ fontSize: '11px', color: COLORS.slate500, fontFamily: TYPOGRAPHY.font }}>or</span>
                <div style={{ flex: 1, height: '1px', background: COLORS.slate200 }} />
              </div>

              {/* Secondary link */}
              <p style={{
                fontSize: '13px',
                color: COLORS.slate500,
                textAlign: 'center',
                fontFamily: TYPOGRAPHY.font,
              }}>
                Start a{' '}
                <Link to="/trial" style={{ color: COLORS.slate900, fontWeight: 700, textDecoration: 'none' }}>
                  14-day free trial
                </Link>
                {' '}— 50 users, no card
              </p>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .lead-form-panel {
            position: relative !important;
            top: 0 !important;
          }
        }
        @media (max-width: 640px) {
          section { padding: 60px 24px 80px !important; }
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
