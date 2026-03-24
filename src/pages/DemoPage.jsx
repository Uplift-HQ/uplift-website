import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import Navigation from '../components/home/Navigation';
import { COLORS, RADIUS, TYPOGRAPHY } from '../components/home/constants';

// Demo URLs - auto-login for instant access
const PORTAL_BASE = 'https://upliftportaldemo.netlify.app';
const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/gb/app/uplift-bae629/id6758172662';
const DEMO_CONFIG = {
  calendlyUrl: 'https://calendly.com/dazevedo-uplifthq/30min'
};

// Demo credentials with auto-login URLs
const CREDENTIALS = [
  {
    role: 'HR Administrator',
    description: 'Full HR dashboard, WRIA, payroll, analytics',
    url: `${PORTAL_BASE}/auto-login?role=admin`,
    color: '#8B5CF6', // purple
  },
  {
    role: 'Department Manager',
    description: 'Scheduling, team view, operations',
    url: `${PORTAL_BASE}/auto-login?role=manager`,
    color: '#3B82F6', // blue
  },
  {
    role: 'Employee',
    description: 'Career path, momentum score, shifts',
    url: `${PORTAL_BASE}/auto-login?role=worker`,
    color: '#10B981', // green
  },
];

// Credential Card Component - clickable with auto-login
const CredentialCard = ({ role, description, url, color, isHovered, onHover, onLeave }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="credential-card"
    style={{
      background: COLORS.white,
      border: `1px solid ${isHovered ? 'rgba(255,107,53,0.3)' : COLORS.slate200}`,
      borderRadius: RADIUS.card,
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      transition: 'all 0.15s',
      textDecoration: 'none',
      marginBottom: '8px',
      boxShadow: isHovered ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      {/* Role colour dot */}
      <div style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: color,
        flexShrink: 0,
      }} />
      <div>
        <div style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '14px',
          fontWeight: 600,
          color: COLORS.slate900,
          marginBottom: '2px',
        }}>
          {role}
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '12px',
          color: COLORS.slate500,
        }}>
          {description}
        </div>
      </div>
    </div>
    {/* Arrow */}
    <span style={{
      color: COLORS.orange,
      fontSize: '16px',
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
      transition: 'opacity 0.15s, transform 0.15s',
    }}>
      →
    </span>
  </a>
);

// Phone Frame Component (matching homepage style)
const IPHONE_W = 430;
const IPHONE_H = 932;
const FRAME_W = 240;
const SCALE = FRAME_W / IPHONE_W;
const FRAME_H = Math.round(IPHONE_H * SCALE);

const PhoneFrame = ({ src, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{
      fontFamily: TYPOGRAPHY.font,
      fontSize: '12px',
      fontWeight: 500,
      color: COLORS.slate500,
      textAlign: 'center',
      marginBottom: '8px',
    }}>
      {label}
    </p>
    <div style={{
      width: `${FRAME_W}px`,
      height: `${FRAME_H}px`,
      background: '#0F172A',
      borderRadius: '36px',
      padding: '8px',
      position: 'relative',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '72px',
        height: '22px',
        background: '#000',
        borderRadius: '11px',
        zIndex: 10,
      }} />
      {/* Screen */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '28px',
        overflow: 'hidden',
        background: '#fff',
      }}>
        <div style={{
          width: `${IPHONE_W}px`,
          height: `${IPHONE_H}px`,
          transform: `scale(${SCALE})`,
          transformOrigin: 'top left',
        }}>
          <iframe
            src={src}
            title={label}
            style={{
              width: `${IPHONE_W}px`,
              height: `${IPHONE_H}px`,
              border: 'none',
            }}
            allow="clipboard-write"
          />
        </div>
      </div>
      {/* Home indicator */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        background: 'rgba(255,255,255,0.3)',
        borderRadius: '2px',
      }} />
    </div>
  </div>
);

export default function DemoPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.slate50,
      fontFamily: TYPOGRAPHY.font,
    }}>
      {/* Shared Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 60px 48px',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '16px',
        }}>
          <div style={{
            width: '28px',
            height: '2px',
            background: COLORS.orange,
          }} />
          <span style={{
            fontFamily: TYPOGRAPHY.font,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: COLORS.orange,
          }}>
            EXPLORE UPLIFT
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '32px',
          fontWeight: 700,
          color: COLORS.slate900,
          letterSpacing: '-0.02em',
          marginBottom: '8px',
        }}>
          Explore Uplift
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '16px',
          color: COLORS.slate500,
          marginBottom: '48px',
        }}>
          Real platform. Real data. No setup required.
        </p>
      </section>

      {/* Two Demo Cards */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 60px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }} className="demo-cards-grid">
          {/* Web Portal Card */}
          <div
            style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.slate200}`,
              borderRadius: RADIUS.cardLarge,
              padding: '32px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,107,53,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)';
              e.currentTarget.style.borderColor = COLORS.slate200;
            }}
          >
            {/* Card Label */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
            }}>
              <Monitor size={16} color={COLORS.orange} />
              <span style={{
                fontFamily: TYPOGRAPHY.font,
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: COLORS.orange,
              }}>
                WEB PORTAL
              </span>
            </div>

            {/* Card Heading */}
            <h2 style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '20px',
              fontWeight: 700,
              color: COLORS.slate900,
              marginBottom: '8px',
            }}>
              Desktop Experience
            </h2>

            {/* Card Body */}
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '14px',
              color: COLORS.slate500,
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              Full workforce management platform. Analytics, scheduling, payroll, and performance — all in one place.
            </p>

            {/* Credential Cards */}
            {CREDENTIALS.map((cred) => (
              <CredentialCard
                key={cred.role}
                role={cred.role}
                description={cred.description}
                url={cred.url}
                color={cred.color}
                isHovered={hoveredCard === cred.role}
                onHover={() => setHoveredCard(cred.role)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}

            {/* Helper Text */}
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '12px',
              color: '#94A3B8',
              marginTop: '8px',
            }}>
              Click any role to open the demo and log in automatically.
            </p>
          </div>

          {/* Mobile App Card */}
          <div
            style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.slate200}`,
              borderRadius: RADIUS.cardLarge,
              padding: '32px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,107,53,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)';
              e.currentTarget.style.borderColor = COLORS.slate200;
            }}
          >
            {/* Card Label */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
            }}>
              <Smartphone size={16} color={COLORS.orange} />
              <span style={{
                fontFamily: TYPOGRAPHY.font,
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: COLORS.orange,
              }}>
                MOBILE APP
              </span>
            </div>

            {/* Card Heading */}
            <h2 style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '20px',
              fontWeight: 700,
              color: COLORS.slate900,
              marginBottom: '8px',
            }}>
              Mobile Experience
            </h2>

            {/* Card Body */}
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '14px',
              color: COLORS.slate500,
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              The app your frontline team actually wants to use. Clock in, check schedules, request time off, and grow their career.
            </p>

            {/* App Store — Live */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '20px',
              background: COLORS.slate50,
              border: `1px solid ${COLORS.slate200}`,
              borderRadius: RADIUS.card,
              marginTop: '16px',
              marginBottom: '16px',
            }}>
              {/* QR Code */}
              <div style={{ flexShrink: 0 }}>
                <QRCodeSVG
                  value={APP_STORE_URL}
                  size={80}
                  bgColor={COLORS.slate50}
                  fgColor={COLORS.slate900}
                  level="M"
                />
              </div>

              {/* Text + button */}
              <div>
                <div style={{
                  fontFamily: TYPOGRAPHY.font,
                  fontSize: '13px',
                  fontWeight: 600,
                  color: COLORS.slate900,
                  marginBottom: '4px',
                }}>
                  Download on the App Store
                </div>
                <div style={{
                  fontFamily: TYPOGRAPHY.font,
                  fontSize: '12px',
                  color: COLORS.slate500,
                  lineHeight: 1.5,
                  marginBottom: '12px',
                }}>
                  Scan the QR code or tap below to download.<br />
                  Log in with the credentials above.
                </div>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0D0D0D',
                    color: 'white',
                    padding: '10px 18px',
                    borderRadius: RADIUS.button,
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: TYPOGRAPHY.font,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1E293B'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0D0D0D'}
                >
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 814 1000"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663.5 0 541c0-207.1 134.7-316.6 267.8-316.6 68.5 0 125.6 44.8 167.1 44.8 39.5 0 103.2-47.4 178.6-47.4 28.4 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                  </svg>
                  App Store
                </a>
              </div>
            </div>

            {/* Google Play — Coming soon */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              background: COLORS.slate50,
              border: `1px solid ${COLORS.slate200}`,
              borderRadius: RADIUS.button,
              marginBottom: '24px',
            }}>
              <span style={{
                fontFamily: TYPOGRAPHY.font,
                fontSize: '12px',
                color: '#94A3B8',
                fontWeight: 500,
              }}>
                Google Play — Coming soon
              </span>
            </div>

            {/* Phone Frames */}
            <div className="phone-frames-row" style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              marginTop: '8px',
            }}>
              <PhoneFrame
                src="/mobile-demo/app-shell.htm?demo=worker"
                label="Employee"
              />
              <PhoneFrame
                src="/mobile-demo/app-shell.htm?demo=manager"
                label="Manager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Help Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '48px',
        paddingTop: '48px',
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingBottom: '100px',
        borderTop: `1px solid ${COLORS.slate200}`,
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '16px',
          color: COLORS.slate500,
          marginBottom: '8px',
        }}>
          Want a guided walkthrough instead?
        </p>
        <a
          href={DEMO_CONFIG.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: TYPOGRAPHY.font,
            fontSize: '16px',
            fontWeight: 600,
            color: COLORS.orange,
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = COLORS.orangeHover}
          onMouseLeave={(e) => e.currentTarget.style.color = COLORS.orange}
        >
          Book a call with the team →
        </a>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .demo-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (max-width: 540px) {
          .phone-frames-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
