import React from 'react';
import { COLORS, SPACING } from './constants';
import { Shield, Award, Clock, Users } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    { icon: Shield, text: 'SOC 2 Type II Compliant' },
    { icon: Award, text: 'GDPR & UK DPA Certified' },
    { icon: Clock, text: '99.9% Uptime SLA' },
    { icon: Users, text: 'Trusted by 50+ UK Companies' },
  ];

  return (
    <section style={{
      background: COLORS.warmGrey,
      padding: `${SPACING.md} ${SPACING.lg}`,
      borderTop: `1px solid ${COLORS.border}`,
      borderBottom: `1px solid ${COLORS.border}`,
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '32px',
      }}>
        {signals.map((signal, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <signal.icon
              size={18}
              color={COLORS.muted}
              strokeWidth={2}
            />
            <span style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              color: COLORS.muted,
              letterSpacing: '-0.01em',
            }}>
              {signal.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
