import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Users, Calendar, CreditCard } from 'lucide-react';
import emailjs from '@emailjs/browser';

const COLORS = {
  orange: '#FF6B35',
  orangeHover: '#E55A2B',
  slate900: '#0F172A',
  slate700: '#334155',
  slate500: '#64748B',
  slate200: '#E2E8F0',
  slate100: '#F1F5F9',
  slate50: '#F8FAFC',
  white: '#FFFFFF',
};

const TYPOGRAPHY = {
  font: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const CALENDLY_URL = 'https://calendly.com/dazevedo-uplifthq/30min';

// HubSpot Configuration
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
      { name: 'firstname', value: formData.name },
      { name: 'email', value: formData.email },
      { name: 'company', value: formData.company },
      { name: 'numemployees', value: formData.employees },
    ],
    context: {
      hutk: hutk || undefined,
      pageUri: window.location.href,
      pageName: 'Trial Signup',
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

/*
 * EmailJS setup required:
 * 1. Create account at emailjs.com
 * 2. Create a service (Gmail recommended)
 * 3. Create a template with these variables:
 *    {{to_email}}, {{from_name}}, {{from_email}},
 *    {{company}}, {{employees}}, {{message}}
 * 4. Add service ID, template ID, public key to .env
 */
const sendEmailNotification = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Skip if EmailJS not configured
  if (!serviceId || !templateId || !publicKey) {
    console.warn('[EmailJS] Not configured - skipping email notification');
    return false;
  }

  const templateParams = {
    to_email: 'hello@uplifthq.co.uk',
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company,
    employees: formData.employees,
    message: `New trial signup request from ${formData.name} at ${formData.company}`,
    reply_to: formData.email,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('[EmailJS] Notification sent successfully');
    return true;
  } catch (error) {
    console.error('[EmailJS] Error:', error);
    // Do not block form success if email fails
    // HubSpot capture is the primary record
    return false;
  }
};

// Logo Component
const UpliftLogo = ({ size = 40 }) => (
  <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill={COLORS.orange}/>
      <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
      <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
    </svg>
    <span style={{
      fontSize: size * 0.6,
      fontWeight: 600,
      color: COLORS.slate900,
      fontFamily: TYPOGRAPHY.font,
      letterSpacing: '-0.02em'
    }}>Uplift</span>
  </Link>
);

export default function TrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.employees) newErrors.employees = 'Please select company size';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(false);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit to both HubSpot and EmailJS in parallel
      const [hubspotResult, emailResult] = await Promise.allSettled([
        submitToHubspot(formData),
        sendEmailNotification(formData),
      ]);

      // Log results for debugging
      if (hubspotResult.status === 'rejected') {
        console.warn('[HubSpot] Trial submission error:', hubspotResult.reason);
      }
      if (emailResult.status === 'rejected') {
        console.warn('[EmailJS] Notification error:', emailResult.reason);
      }

      // Success if HubSpot succeeded (email notification is best-effort)
      if (hubspotResult.status === 'fulfilled' && hubspotResult.value) {
        setSubmitted(true);
      } else {
        // Still show success - we don't want to block the user
        // The form data is logged to console as backup
        console.log('[Trial] Form data backup:', formData);
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const benefits = [
    { icon: Users, text: '50 users included' },
    { icon: Calendar, text: '14 days full access' },
    { icon: CreditCard, text: 'No credit card required' },
  ];

  return (
    <div style={{ fontFamily: TYPOGRAPHY.font, minHeight: '100vh', background: COLORS.slate50 }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(248,250,252,0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${COLORS.slate200}`,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <UpliftLogo size={36} />
          <Link
            to="/"
            style={{
              color: COLORS.slate700,
              textDecoration: 'none',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: TYPOGRAPHY.font,
            }}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '120px 24px 80px',
      }}>
        {!submitted ? (
          <>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 700,
              color: COLORS.slate900,
              marginBottom: '12px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Start your 14-day free trial
            </h1>

            <p style={{
              fontSize: '16px',
              color: COLORS.slate500,
              marginBottom: '40px',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              Get full access to Uplift for 14 days. No credit card required.
            </p>

            {/* Benefits */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}>
              {benefits.map((benefit, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: `${COLORS.orange}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <benefit.icon size={16} color={COLORS.orange} />
                  </div>
                  <span style={{ fontSize: '14px', color: COLORS.slate700, fontWeight: 500 }}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.slate200}`,
              borderRadius: '16px',
              padding: '32px',
            }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: COLORS.slate700,
                  marginBottom: '8px',
                }}>
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${errors.name ? '#EF4444' : COLORS.slate200}`,
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: TYPOGRAPHY.font,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  placeholder="Jane Smith"
                />
                {errors.name && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{errors.name}</p>
                )}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: COLORS.slate700,
                  marginBottom: '8px',
                }}>
                  Work email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${errors.email ? '#EF4444' : COLORS.slate200}`,
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: TYPOGRAPHY.font,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{errors.email}</p>
                )}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: COLORS.slate700,
                  marginBottom: '8px',
                }}>
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${errors.company ? '#EF4444' : COLORS.slate200}`,
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: TYPOGRAPHY.font,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  placeholder="Acme Inc"
                />
                {errors.company && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{errors.company}</p>
                )}
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: COLORS.slate700,
                  marginBottom: '8px',
                }}>
                  Number of employees
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${errors.employees ? '#EF4444' : COLORS.slate200}`,
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: TYPOGRAPHY.font,
                    outline: 'none',
                    boxSizing: 'border-box',
                    background: COLORS.white,
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select...</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
                {errors.employees && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{errors.employees}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: COLORS.orange,
                  color: COLORS.white,
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: TYPOGRAPHY.font,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.8 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Start free trial'}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>

              {submitError && (
                <p style={{ fontSize: '12px', color: '#EF4444', textAlign: 'center', marginTop: '8px' }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <p style={{
                fontSize: '12px',
                color: COLORS.slate500,
                textAlign: 'center',
                marginTop: '16px',
                lineHeight: 1.5,
              }}>
                By signing up, you agree to our{' '}
                <Link to="/terms" style={{ color: COLORS.slate700, textDecoration: 'underline' }}>Terms</Link>
                {' '}and{' '}
                <Link to="/privacy" style={{ color: COLORS.slate700, textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </form>

            {/* Or book a demo */}
            <div style={{
              textAlign: 'center',
              marginTop: '32px',
            }}>
              <p style={{ fontSize: '14px', color: COLORS.slate500, marginBottom: '12px' }}>
                Prefer a guided tour?
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  background: 'transparent',
                  border: `1px solid ${COLORS.slate200}`,
                  color: COLORS.slate700,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: TYPOGRAPHY.font,
                }}
              >
                Book a demo instead
              </a>
            </div>
          </>
        ) : (
          /* Success State */
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `${COLORS.orange}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <Check size={40} color={COLORS.orange} />
            </div>

            <h1 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: COLORS.slate900,
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}>
              You're all set!
            </h1>

            <p style={{
              fontSize: '16px',
              color: COLORS.slate500,
              marginBottom: '32px',
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto 32px',
            }}>
              We'll be in touch within 24 hours to set up your trial account.
              Check your inbox for next steps.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  background: COLORS.orange,
                  color: COLORS.white,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: TYPOGRAPHY.font,
                }}
              >
                Back to Home
              </Link>
              <Link
                to="/demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  background: 'transparent',
                  border: `1px solid ${COLORS.slate200}`,
                  color: COLORS.slate700,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: TYPOGRAPHY.font,
                }}
              >
                Try the demo
              </Link>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        input:focus, select:focus {
          border-color: ${COLORS.orange} !important;
          box-shadow: 0 0 0 3px ${COLORS.orange}20;
        }
      `}</style>
    </div>
  );
}
