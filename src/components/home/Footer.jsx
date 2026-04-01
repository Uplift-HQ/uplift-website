import React from 'react';
import { COLORS, RADIUS, TYPOGRAPHY } from './constants';
import { UpliftLogo } from './Navigation';

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Platform', href: '#platform' },
        { label: 'Intelligence', href: '#intelligence' },
        { label: 'Nova AI', href: '/nova' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '/demo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: 'mailto:hello@uplifthq.co.uk' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer style={{
      background: COLORS.slate900,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '80px 60px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">
          <div>
            <UpliftLogo size={32} color="light" />
            <p style={{
              fontFamily: TYPOGRAPHY.font,
              color: '#94A3B8',
              fontSize: '14px',
              lineHeight: 1.7,
              marginTop: '16px',
              maxWidth: '280px',
            }}>
              The complete workforce management platform for deskless teams.
              Built for workers first.
            </p>
            <a
              href="https://linkedin.com/company/uplifthq"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '14px',
                marginTop: '16px',
                fontFamily: TYPOGRAPHY.font,
              }}
            >
              LinkedIn
            </a>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{
                fontFamily: TYPOGRAPHY.font,
                color: COLORS.white,
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {section.title}
              </h4>
              <div style={{ display: 'grid', gap: '12px' }}>
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: TYPOGRAPHY.font,
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            fontFamily: TYPOGRAPHY.font,
            color: '#94A3B8',
            fontSize: '14px',
          }}>
            © {new Date().getFullYear()} Uplift Technologies Ltd. All rights reserved.
          </p>
          <p style={{
            fontFamily: TYPOGRAPHY.font,
            color: COLORS.slate500,
            fontSize: '14px',
          }}>
            Made with care in London
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          footer { padding: 60px 24px 32px !important; }
        }
      `}</style>
    </footer>
  );
}
