import React, { useState } from 'react';
import { Building2, Users, Smartphone } from 'lucide-react';
import { COLORS } from './constants';

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('hr');

  const experiences = {
    hr: {
      tabName: 'For HR & Admin',
      outcome: "See who's at risk of leaving — before they know it.",
      screenshot: '/screenshots/admin-dashboard.png',
      icon: Building2,
      color: COLORS.orange,
    },
    manager: {
      tabName: 'For Managers',
      outcome: 'Every shift, site, and compliance need. One view.',
      screenshot: '/screenshots/manager-dashboard.png',
      icon: Users,
      color: '#3B82F6',
    },
    worker: {
      tabName: 'For Employees',
      outcome: 'Your career. Your next move. Your momentum.',
      screenshot: '/screenshots/worker-dashboard.png',
      icon: Smartphone,
      color: '#10B981',
    },
  };

  const active = experiences[activeTab];

  return (
    <section id="platform" style={{
      background: COLORS.lightBg,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: COLORS.navy,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}>
            One platform. Every team.
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: COLORS.textBody,
          }}>
            Tailored for every role. One subscription covers all of them.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}>
          {Object.entries(experiences).map(([key, exp]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '14px 28px',
                background: activeTab === key ? exp.color : COLORS.white,
                border: activeTab === key ? 'none' : `1px solid ${COLORS.border}`,
                borderRadius: '12px',
                color: activeTab === key ? COLORS.white : COLORS.navy,
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.2s',
                boxShadow: activeTab === key ? `0 4px 12px ${exp.color}30` : '0 1px 4px rgba(0,0,0,0.07)',
              }}
            >
              <exp.icon size={18} />
              {exp.tabName}
            </button>
          ))}
        </div>

        {/* Screenshot with outcome */}
        <div style={{
          background: COLORS.white,
          borderRadius: '12px',
          padding: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          border: `1px solid ${COLORS.border}`,
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            background: '#F1F5F9',
            borderRadius: '8px 8px 0 0',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
            </div>
          </div>
          <img src={active.screenshot} alt={active.tabName} style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0 0 4px 4px',
            display: 'block',
          }} />
        </div>

        {/* One-line outcome */}
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: active.color,
            fontWeight: 600,
            fontStyle: 'italic',
          }}>
            {active.outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
