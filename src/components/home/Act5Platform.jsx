import React, { useState, useEffect, useRef } from 'react';
import { COLORS, RADIUS, TYPOGRAPHY } from './constants';

const portalTabs = [
  {
    id: 'hr',
    label: 'For HR & Admin',
    headline: "See what's coming — before it arrives.",
    screenshot: '/screenshots/admin-dashboard.png',
  },
  {
    id: 'manager',
    label: 'For Managers',
    headline: 'Every shift. Every site. Every compliance need.',
    screenshot: '/screenshots/manager-schedule.png',
  },
  {
    id: 'employee',
    label: 'For Employees',
    headline: 'Your career. Your next move. Your score.',
    screenshot: '/screenshots/worker-dashboard.png',
  },
];

const mobileTabs = [
  {
    id: 'manager',
    label: 'Manager view',
    headline: 'Your team, always covered.',
    screenshot: '/screenshots/manager_dashboard.jpeg',
  },
  {
    id: 'worker',
    label: 'Frontline worker',
    headline: 'Work life in your pocket.',
    screenshot: '/screenshots/worker_home.jpeg',
  },
];

// Phone Frame Component (slim version)
const PhoneFrame = ({ screenshot, alt }) => (
  <div className="phone-frame">
    <div className="phone-frame-buttons-left">
      <div className="phone-frame-btn"></div>
      <div className="phone-frame-btn"></div>
      <div className="phone-frame-btn"></div>
    </div>
    <div className="phone-frame-power"></div>
    <div className="phone-screen">
      <img src={screenshot} alt={alt} loading="lazy" />
    </div>
  </div>
);

export default function Act5Platform() {
  const [portalTab, setPortalTab] = useState('hr');
  const [mobileTab, setMobileTab] = useState('manager');
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

  const activePortal = portalTabs.find(t => t.id === portalTab);
  const activeMobile = mobileTabs.find(t => t.id === mobileTab);

  const badgeStyle = {
    display: 'inline-block',
    background: COLORS.white,
    border: `1px solid ${COLORS.slate200}`,
    borderRadius: RADIUS.button,
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: 600,
    color: COLORS.slate700,
    fontFamily: TYPOGRAPHY.font,
    marginBottom: '20px',
  };

  const tabBarStyle = {
    display: 'flex',
    gap: '24px',
    borderBottom: `1px solid ${COLORS.slate200}`,
    marginBottom: '24px',
  };

  const tabStyle = (isActive) => ({
    background: 'none',
    border: 'none',
    padding: '12px 0',
    marginBottom: '-1px',
    fontFamily: TYPOGRAPHY.font,
    fontSize: '14px',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? COLORS.slate900 : COLORS.slate500,
    cursor: 'pointer',
    borderBottom: isActive ? `2px solid ${COLORS.orange}` : '2px solid transparent',
    transition: 'all 0.15s ease',
  });

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#F8FAFC',
        padding: '100px 60px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <h2 className="reveal" style={{
          textAlign: 'center',
          fontFamily: TYPOGRAPHY.font,
          fontWeight: 700,
          fontSize: '32px',
          letterSpacing: '-0.02em',
          color: COLORS.slate900,
          marginBottom: '12px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          One platform. Every role.
        </h2>

        <p className="reveal" style={{
          textAlign: 'center',
          fontFamily: TYPOGRAPHY.font,
          fontSize: '16px',
          color: COLORS.slate500,
          marginBottom: '52px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          Tailored for HR, managers, and employees.<br />
          One subscription covers all three.
        </p>

        {/* Two Product Switchers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
        }} className="platform-switchers">

          {/* SWITCHER 1 — Portal (web) */}
          <div className="reveal" style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <span style={badgeStyle}>Portal</span>

            <div style={tabBarStyle}>
              {portalTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPortalTab(tab.id)}
                  style={tabStyle(portalTab === tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <h3 style={{
              fontFamily: TYPOGRAPHY.font,
              fontSize: '20px',
              fontWeight: 600,
              color: COLORS.slate900,
              marginBottom: '20px',
              lineHeight: 1.3,
            }}>
              {activePortal.headline}
            </h3>

            <div style={{
              borderRadius: RADIUS.cardLarge,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            }}>
              <img
                src={activePortal.screenshot}
                alt={activePortal.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* SWITCHER 2 — Mobile App */}
          <div className="reveal" style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <span style={badgeStyle}>Mobile App</span>

            <div style={tabBarStyle}>
              {mobileTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMobileTab(tab.id)}
                  style={tabStyle(mobileTab === tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile content: text left, phone right */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '60px',
              alignItems: 'center',
            }} className="mobile-content">
              <h3 style={{
                fontFamily: TYPOGRAPHY.font,
                fontSize: '20px',
                fontWeight: 600,
                color: COLORS.slate900,
                lineHeight: 1.4,
              }}>
                {activeMobile.headline}
              </h3>

              <div style={{ width: '240px', flexShrink: 0 }}>
                <PhoneFrame
                  screenshot={activeMobile.screenshot}
                  alt={`Uplift mobile app - ${activeMobile.label}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Phone Frame — slim version */
        .phone-frame {
          position: relative;
          width: 240px;
          margin: 0 auto;
          background: #1A1A1A;
          border-radius: 36px;
          padding: 8px;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.1),
            0 0 0 1px rgba(0,0,0,0.3),
            0 20px 48px rgba(0,0,0,0.25),
            0 4px 12px rgba(0,0,0,0.15);
        }

        /* Dynamic island — smaller and tighter */
        .phone-frame::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 72px;
          height: 22px;
          background: #1A1A1A;
          border-radius: 14px;
          z-index: 10;
        }

        /* Volume buttons on left */
        .phone-frame-buttons-left {
          position: absolute;
          left: -3px;
          top: 72px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .phone-frame-btn {
          width: 3px;
          height: 28px;
          background: #2A2A2A;
          border-radius: 0 0 0 2px;
        }
        .phone-frame-btn:first-child {
          height: 20px;
        }

        /* Power button on right */
        .phone-frame-power {
          position: absolute;
          right: -3px;
          top: 88px;
          width: 3px;
          height: 44px;
          background: #2A2A2A;
          border-radius: 0 2px 2px 0;
        }

        .phone-screen {
          border-radius: 28px;
          overflow: hidden;
          width: 100%;
          display: block;
          background: #000;
        }

        .phone-screen img {
          width: 100%;
          display: block;
        }

        @media (max-width: 900px) {
          .platform-switchers {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          .mobile-content {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .mobile-content > div:last-child {
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
