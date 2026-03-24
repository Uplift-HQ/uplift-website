import React from 'react';
import {
  Calendar, Clock, Wallet, TrendingUp, GraduationCap, Award,
  Target, ClipboardList, FileText, UserCheck, PieChart, Layers,
  MessageSquare, Heart, Shield, Brain
} from 'lucide-react';
import { COLORS } from './constants';

export default function ModulesSection() {
  const modules = [
    { icon: Calendar, title: 'Scheduling', desc: 'AI-powered schedule builder with demand forecasting' },
    { icon: Clock, title: 'Time Tracking', desc: 'GPS clock-in/out, break tracking, timesheets' },
    { icon: Wallet, title: 'Payroll', desc: 'Multi-country payroll with tax calculations' },
    { icon: TrendingUp, title: 'Performance', desc: 'Goals, reviews, and continuous feedback' },
    { icon: GraduationCap, title: 'Learning', desc: 'Courses, certifications, compliance' },
    { icon: Award, title: 'Recognition', desc: 'Peer recognition and rewards' },
    { icon: Target, title: 'Momentum Score', desc: 'Unified engagement metric' },
    { icon: ClipboardList, title: 'Surveys', desc: 'Pulse surveys and eNPS' },
    { icon: FileText, title: 'Documents', desc: 'Digital signing and storage' },
    { icon: UserCheck, title: 'Onboarding', desc: 'Automated workflows and checklists' },
    { icon: PieChart, title: 'Analytics', desc: 'Workforce insights and trends' },
    { icon: Layers, title: 'Integrations', desc: 'Connect your existing tools' },
  ];

  return (
    <section style={{
      background: COLORS.lightBg,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: COLORS.navy,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Everything Included. No Feature Gating.
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: COLORS.textBody,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            Every customer gets every module. The only difference between plans is team size and support level.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }} className="modules-grid">
          {modules.map((mod, i) => (
            <div key={i} style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.border}`,
              borderRadius: '12px',
              padding: '24px 20px',
              transition: 'all 0.3s',
            }}>
              {/* Consistent orange icon on navy circle */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: COLORS.navy,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <mod.icon size={20} color={COLORS.orange} />
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: COLORS.navy,
                marginBottom: '6px',
              }}>{mod.title}</h3>
              <p style={{
                fontSize: '0.85rem',
                color: COLORS.textMuted,
                lineHeight: 1.5,
              }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .modules-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .modules-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
