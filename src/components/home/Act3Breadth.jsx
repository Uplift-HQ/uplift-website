import React, { useEffect, useRef } from 'react';
import { COLORS, TYPOGRAPHY } from './constants';

const modules = [
  { name: 'Shift Scheduling',        desc: 'AI-powered rotas with demand forecasting' },
  { name: 'Time & Attendance',       desc: 'GPS clock-in, breaks, and timesheets' },
  { name: 'UK Payroll',              desc: 'Native UK payroll with HMRC compliance' },
  { name: 'Global Payroll',          desc: 'Multi-country payroll in one place' },
  { name: 'HR & Employee Records',   desc: 'Single source of truth for your people' },
  { name: 'Onboarding',              desc: 'Automated workflows from offer to day one' },
  { name: 'Performance & Goals',     desc: 'Reviews, goals, and continuous feedback' },
  { name: 'Learning & Compliance',   desc: 'Courses, certifications, completion tracking' },
  { name: 'Skills & Certifications', desc: 'Track, verify, and grow team capabilities' },
  { name: 'Career Pathing',          desc: 'Show every worker their next move' },
  { name: 'Documents & e-Signatures',desc: 'Contracts, policies, signed and stored' },
  { name: 'Leave & Absence',         desc: 'Requests, approvals, and balance tracking' },
  { name: 'Recognition & Rewards',   desc: 'Peer recognition that actually lands' },
  { name: 'Communications',          desc: 'Reach every worker, in any language' },
  { name: 'Reporting & Analytics',   desc: 'Workforce insights and trend reporting' },
  { name: 'Integrations Hub',        desc: 'Connect your existing tools seamlessly' },
];

const integrations = [
  { name: 'Xero',              slug: 'xero' },
  { name: 'Sage',              slug: 'sage' },
  { name: 'QuickBooks',        slug: 'quickbooks' },
  { name: 'ADP',               slug: 'adp' },
  { name: 'BrightPay',         slug: 'brightpay' },
  { name: 'Slack',             slug: 'slack' },
  { name: 'Microsoft Teams',   slug: 'microsoftteams' },
  { name: 'WhatsApp',          slug: 'whatsapp' },
  { name: 'Google Workspace',  slug: 'googleworkspace' },
  { name: 'Workday',           slug: 'workday' },
  { name: 'BambooHR',          slug: 'bamboohr' },
  { name: 'Zapier',            slug: 'zapier' },
  { name: 'Okta',              slug: 'okta' },
  { name: 'Microsoft Azure',   slug: 'microsoftazure' },
  { name: 'Google',            slug: 'google' },
  { name: 'LinkedIn',          slug: 'linkedin' },
  { name: 'Salesforce',        slug: 'salesforce' },
  { name: 'Rippling',          slug: 'rippling' },
  { name: 'HiBob',             slug: 'hibob' },
  { name: 'Deputy',            slug: 'deputy' },
];

export default function Act3Breadth() {
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
      el.style.transitionDelay = `${i * 0.04}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="platform"
      ref={sectionRef}
      style={{
        background: COLORS.slate50,
        padding: '100px 60px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <h2 className="reveal" style={{
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
          Everything your workforce needs.
        </h2>

        <p className="reveal" style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '16px',
          color: COLORS.slate500,
          marginBottom: '52px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          One subscription. 16 modules. No per-feature charges.<br />
          Every plan gets everything.
        </p>

        {/* Module Grid */}
        <div className="module-grid">
          {modules.map((mod) => (
            <div key={mod.name} className="reveal mod-cell">
              <div className="mod-name">{mod.name}</div>
              <div className="mod-desc">{mod.desc}</div>
            </div>
          ))}
        </div>

        {/* Integrations Marquee */}
        <div className="integrations-strip">
          <div className="integrations-label">
            Connects with the tools your team already uses
          </div>
          <div className="marquee-outer">
            <div className="marquee-track">
              {[...integrations, ...integrations].map((int, i) => (
                <div key={i} className="int-item">
                  <img
                    src={`https://cdn.simpleicons.org/${int.slug}`}
                    alt={int.name}
                    className="int-logo"
                    onError={(e) => {
                      e.currentTarget.parentElement.style.display = 'none';
                    }}
                  />
                  <span className="int-name">{int.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Module Grid */
        .module-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #E2E8F0;
          border-left: 1px solid #E2E8F0;
          align-items: stretch;
        }

        .mod-cell {
          padding: 20px;
          border-bottom: 1px solid #E2E8F0;
          border-right: 1px solid #E2E8F0;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          transition: background 0.2s, opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
        }

        .mod-cell:hover {
          background: #FFF0EB;
        }

        .mod-name {
          font-size: 14px;
          font-weight: 600;
          color: #0F172A;
          line-height: 1.3;
          transition: color 0.15s;
          font-family: ${TYPOGRAPHY.font};
        }

        .mod-cell:hover .mod-name {
          color: #FF6B35;
        }

        .mod-desc {
          font-size: 12px;
          color: #94A3B8;
          line-height: 1.4;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.2s, transform 0.2s;
          font-family: ${TYPOGRAPHY.font};
        }

        .mod-cell:hover .mod-desc {
          opacity: 1;
          transform: translateY(0);
        }

        /* Integrations Strip */
        .integrations-strip {
          border-top: 1px solid #E2E8F0;
          padding: 28px 0 0;
          overflow: hidden;
        }

        .integrations-label {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94A3B8;
          font-family: ${TYPOGRAPHY.font};
          margin-bottom: 20px;
        }

        .marquee-outer {
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .int-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 28px;
          border-right: 1px solid #F1F5F9;
          white-space: nowrap;
          height: 40px;
        }

        .int-logo {
          width: 20px;
          height: 20px;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.65);
          transition: filter 0.2s;
          display: block;
        }

        .int-item:hover .int-logo {
          filter: grayscale(0%) opacity(1);
        }

        .int-name {
          font-size: 12px;
          font-weight: 500;
          color: #94A3B8;
          font-family: ${TYPOGRAPHY.font};
          transition: color 0.2s;
        }

        .int-item:hover .int-name {
          color: #64748B;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .module-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .module-grid { grid-template-columns: 1fr !important; }
          section { padding: 80px 24px !important; }
        }
        @media (max-width: 480px) {
          .mod-cell { height: auto !important; min-height: 72px; }
          .mod-desc { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
