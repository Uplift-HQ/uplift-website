import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Linkedin, Mail, Calendar } from 'lucide-react';

// Demo configuration
const CALENDLY_URL = 'https://calendly.com/dazevedo-uplifthq/30min';

// Logo component
const RisingULogo = ({ size = 40, color = "dark" }) => {
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

export default function AboutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
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
        <RisingULogo color="dark" />
        <Link
          to="/"
          style={{
            color: '#64748B',
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
        maxWidth: '720px',
        margin: '0 auto',
        padding: '60px 24px 120px'
      }}>
        <h1 style={{
          fontSize: '44px',
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: '48px',
          lineHeight: 1.2
        }}>
          Why I Built Uplift
        </h1>

        {/* Story Content */}
        <div style={{
          fontSize: '19px',
          color: '#334155',
          lineHeight: 1.8
        }}>
          <p style={{ marginBottom: '32px' }}>
            I've spent 15 years inside enterprise boardrooms. Strategy decks. Transformation programmes. Multi-million pound technology decisions.
          </p>

          <p style={{ marginBottom: '32px' }}>
            And the whole time, I noticed the same blind spot: millions spent on systems for head office, almost nothing for the people actually doing the work.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The warehouse picker. The care worker. The barista. The ones who show up, do the job, and leave — because no one ever showed them where they could go.
          </p>

          <p style={{ marginBottom: '32px' }}>
            It's not that companies don't care. It's that the tools never existed.
          </p>

          <p style={{
            marginBottom: '32px',
            fontSize: '22px',
            fontWeight: 600,
            color: '#0F172A'
          }}>
            Uplift changes that.
          </p>

          <p style={{ marginBottom: '32px' }}>
            One app. Schedules, skills, and a career path they can actually see. For the first time, deskless workers get the same visibility as everyone else in the building.
          </p>

          <p style={{ marginBottom: '32px', fontWeight: 500, color: '#0F172A' }}>
            I'm not building another HR tool.
          </p>

          <p style={{ marginBottom: '48px', fontWeight: 500, color: '#0F172A' }}>
            I'm building what should have existed 20 years ago.
          </p>
        </div>

        {/* Signature */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid #E2E8F0',
          marginBottom: '64px'
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#0F172A',
            marginBottom: '4px'
          }}>
            — Diogo de Azevedo
          </p>
          <p style={{
            fontSize: '16px',
            color: '#64748B',
            marginBottom: '24px'
          }}>
            Founder & CEO
          </p>

          {/* Links */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://linkedin.com/in/diogo-de-azevedo-94b32336"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#64748B',
                textDecoration: 'none',
                fontSize: '15px'
              }}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="mailto:hello@uplifthq.co.uk"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#64748B',
                textDecoration: 'none',
                fontSize: '15px'
              }}
            >
              <Mail size={18} /> hello@uplifthq.co.uk
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: '#0F172A',
          borderRadius: '24px',
          padding: '48px 40px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '24px'
          }}>
            Ready to see Uplift?
          </h2>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              to="/demo"
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
              Try the Demo <ArrowRight size={20} />
            </Link>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 28px',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
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
      </main>

      {/* Simple Footer */}
      <footer style={{
        borderTop: '1px solid #E2E8F0',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
          <Link to="/privacy" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link>
          <span style={{ color: '#CBD5E1' }}>|</span>
          <Link to="/terms" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</Link>
        </div>
        <p style={{ color: '#94A3B8', fontSize: '14px' }}>
          &copy; 2026 Uplift. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
