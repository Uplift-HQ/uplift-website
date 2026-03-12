import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Check, Calendar, ArrowLeft, Shield, Users, User } from 'lucide-react';

// ============================================================
// CONFIGURATION - Update these values
// ============================================================

// HubSpot Configuration
const HUBSPOT_CONFIG = {
  portalId: '147593675',
  formGuid: 'ffc77268-2efe-4af4-84b9-03f61b8f5672'
};

// Demo URLs - auto-login for instant access (General hospitality demo - Grand Metropolitan Hotel)
const PORTAL_BASE = 'https://upliftportaldemo.netlify.app';
const DEMO_CONFIG = {
  portalUrl: `${PORTAL_BASE}/`,
  portalAdminUrl: `${PORTAL_BASE}/auto-login?role=admin`,
  portalManagerUrl: `${PORTAL_BASE}/auto-login?role=manager`,
  portalWorkerUrl: `${PORTAL_BASE}/auto-login?role=worker`,
  calendlyUrl: 'https://calendly.com/dazevedo-uplifthq/30min'
};

// Logo component
const RisingULogo = ({ size = 40, color = "light" }) => {
  const textColor = color === "light" ? "#FFFFFF" : "#0F172A";
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill="#FF6B35"/>
        <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
        <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
      </svg>
      <span style={{ fontSize: '24px', fontWeight: 600, color: textColor, fontFamily: "'Outfit', sans-serif" }}>Uplift</span>
    </Link>
  );
};

// Phone Frame component
// Render iframe at iPhone Pro Max dimensions (430x932) then scale down to fit frame
// Larger internal resolution prevents text wrapping issues
const IPHONE_W = 430;
const IPHONE_H = 932;
const FRAME_W = 300;
const SCALE = FRAME_W / IPHONE_W; // ~0.7
const FRAME_H = Math.round(IPHONE_H * SCALE);

const PhoneFrame = ({ src, label, sublabel }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>{label}</h3>
    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>{sublabel}</p>
    <div style={{
      width: `${FRAME_W}px`,
      height: `${FRAME_H}px`,
      borderRadius: '44px',
      border: '6px solid #334155',
      background: '#000',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '28px',
        background: '#000',
        borderRadius: '0 0 16px 16px',
        zIndex: 10
      }} />
      {/* Scaled iframe wrapper */}
      <div style={{
        width: `${IPHONE_W}px`,
        height: `${IPHONE_H}px`,
        transform: `scale(${SCALE})`,
        transformOrigin: 'top left',
        borderRadius: '38px',
        overflow: 'hidden'
      }}>
        <iframe
          src={src}
          title={label}
          style={{
            width: `${IPHONE_W}px`,
            height: `${IPHONE_H}px`,
            border: 'none'
          }}
          allow="clipboard-write"
        />
      </div>
      {/* Home indicator */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '4px',
        background: 'rgba(255,255,255,0.3)',
        borderRadius: '2px',
        zIndex: 10
      }} />
    </div>
  </div>
);

export default function DemoPage() {
  const [email, setEmail] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  // Note: Removed isSubmitting/submitError - we now grant access immediately

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Log email as backup
    console.log('[Demo Access]', new Date().toISOString(), email);

    // Grant access immediately - never block the user
    setSubmittedEmail(email);
    setAccessGranted(true);

    // Fire HubSpot submission in background (fire-and-forget)
    // Don't await, don't block, don't show errors to user
    const hutk = document.cookie
      .split('; ')
      .find(row => row.startsWith('hubspotutk='))
      ?.split('=')[1];

    fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_CONFIG.portalId}/${HUBSPOT_CONFIG.formGuid}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'email', value: email }
          ],
          context: {
            hutk: hutk || undefined,
            pageUri: window.location.href,
            pageName: 'Demo Access Request'
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: 'I agree to receive demo access and follow-up communications',
              communications: [
                {
                  value: true,
                  subscriptionTypeId: 999,
                  text: 'Marketing communications'
                }
              ]
            }
          }
        })
      }
    ).then(res => {
      if (!res.ok) {
        res.text().then(t => console.warn('[HubSpot] Submission failed:', t));
      } else {
        console.log('[HubSpot] Submission successful');
      }
    }).catch(err => {
      console.warn('[HubSpot] Submission error:', err.message);
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0F172A',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <RisingULogo color="light" />
        <Link
          to="/"
          style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px 120px'
      }}>
        {!accessGranted ? (
          /* Email Capture Form */
          <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1.1
            }}>
              See Uplift for yourself.
            </h1>

            <p style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '48px'
            }}>
              Try the demo. We'll be in touch.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    fontSize: '16px',
                    border: '2px solid #334155',
                    borderRadius: '12px',
                    background: '#1E293B',
                    color: 'white',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '16px',
                  fontWeight: 600,
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Get Access <ArrowRight size={20} />
              </button>

              {/* Error display removed - we now grant access immediately */}
            </form>

            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '16px'
            }}>
              By continuing, you agree to receive demo access and follow-up communications
            </p>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid #334155'
            }}>
              Trusted by retail, hospitality, healthcare & manufacturing teams
            </p>
          </div>
        ) : (
          /* Access Granted View */
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Success Header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#10B981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Check size={32} color="white" />
              </div>

              <h1 style={{
                fontSize: '40px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '12px'
              }}>
                See What Your Team Will Experience
              </h1>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                52% of frontline workers leave because they can't see a future. This is how you show them one.
              </p>
            </div>

            {/* Three Role Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '960px',
              margin: '0 auto 48px'
            }}>
              {/* HR Administrator Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid #334155',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(255, 107, 53, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <Shield size={26} color="#FF6B35" />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  HR Administrator
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#FF6B35',
                  marginBottom: '12px',
                  fontWeight: 500
                }}>
                  Sarah Chen
                </p>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '20px',
                  lineHeight: 1.5
                }}>
                  Full platform access, analytics, payroll, and workforce management
                </p>

                <a
                  href={DEMO_CONFIG.portalAdminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: '#FF6B35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Launch as Admin <ArrowRight size={16} />
                </a>
              </div>

              {/* Manager Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid #334155',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <Users size={26} color="#3B82F6" />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  Department Manager
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#3B82F6',
                  marginBottom: '12px',
                  fontWeight: 500
                }}>
                  James Wilson
                </p>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '20px',
                  lineHeight: 1.5
                }}>
                  Team scheduling, approvals, performance reviews, and reporting
                </p>

                <a
                  href={DEMO_CONFIG.portalManagerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: '#3B82F6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Launch as Manager <ArrowRight size={16} />
                </a>
              </div>

              {/* Employee Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid #334155',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <User size={26} color="#10B981" />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  Employee
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#10B981',
                  marginBottom: '12px',
                  fontWeight: 500
                }}>
                  Sarah Mitchell
                </p>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '20px',
                  lineHeight: 1.5
                }}>
                  Momentum Score, career paths, schedule, time-off, and learning
                </p>

                <a
                  href={DEMO_CONFIG.portalWorkerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: '#10B981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Launch as Employee <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Phone Frames - Worker & Manager */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '48px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}>
              <PhoneFrame
                src="/mobile-demo/app-shell.htm?demo=worker"
                label="Employee Mobile App"
                sublabel="Sarah Mitchell"
              />
              <PhoneFrame
                src="/mobile-demo/app-shell.htm?demo=manager"
                label="Manager Mobile App"
                sublabel="James Wilson"
              />
            </div>

            {/* CTA */}
            <div style={{
              textAlign: 'center',
              padding: '40px',
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              borderRadius: '20px',
              border: '1px solid #334155'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>
                Ready to see how Uplift fits your business?
              </h3>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '24px'
              }}>
                Book a call and we'll show you how Uplift can transform your workforce
              </p>

              <a
                href={DEMO_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 28px',
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <Calendar size={20} /> Book a Call
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
