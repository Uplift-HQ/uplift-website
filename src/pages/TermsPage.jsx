import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

const Section = ({ id, title, children }) => (
  <section id={id} style={{ marginBottom: '48px' }}>
    <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '16px' }}>{title}</h2>
    <div style={{ color: '#334155', lineHeight: 1.8 }}>{children}</div>
  </section>
);

const BulletList = ({ items }) => (
  <ul style={{ paddingLeft: '24px', marginTop: '12px', marginBottom: '12px' }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
    ))}
  </ul>
);

export default function TermsPage() {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'description', title: '2. Description of Service' },
    { id: 'accounts', title: '3. User Accounts' },
    { id: 'acceptable-use', title: '4. Acceptable Use' },
    { id: 'intellectual-property', title: '5. Intellectual Property' },
    { id: 'data-privacy', title: '6. Data & Privacy' },
    { id: 'employer-responsibilities', title: '7. Employer Responsibilities' },
    { id: 'disclaimers', title: '8. Disclaimers' },
    { id: 'limitation', title: '9. Limitation of Liability' },
    { id: 'termination', title: '10. Termination' },
    { id: 'changes', title: '11. Changes to Terms' },
    { id: 'governing-law', title: '12. Governing Law' },
    { id: 'contact', title: '13. Contact Us' },
  ];

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
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 24px 120px'
      }}>
        <h1 style={{
          fontSize: '44px',
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: '16px',
          lineHeight: 1.2
        }}>
          Terms of Service
        </h1>

        <p style={{ color: '#64748B', marginBottom: '48px', fontSize: '16px' }}>
          Last updated: January 2026
        </p>

        {/* Table of Contents */}
        <div style={{
          background: '#F1F5F9',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '48px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0F172A', marginBottom: '16px' }}>Contents</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {sections.map((section) => (
              <li key={section.id} style={{ marginBottom: '8px' }}>
                <a
                  href={`#${section.id}`}
                  style={{ color: '#3B82F6', textDecoration: 'none', fontSize: '14px' }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div style={{ fontSize: '16px' }}>
          <Section id="acceptance" title="1. Acceptance of Terms">
            <p>
              Welcome to Uplift. These Terms of Service ("Terms") govern your access to and use of the Uplift workforce management platform, including our mobile application, web application, and related services (collectively, the "Service").
            </p>
            <p style={{ marginTop: '16px' }}>
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>
            <p style={{ marginTop: '16px' }}>
              If you are using the Service on behalf of an organization (such as your employer), you represent that you have the authority to bind that organization to these Terms.
            </p>
          </Section>

          <Section id="description" title="2. Description of Service">
            <p>
              Uplift provides a workforce management platform designed for deskless teams. The Service includes features for:
            </p>
            <BulletList items={[
              'Work scheduling and shift management',
              'Time tracking and attendance',
              'Skills and certification tracking',
              'Career development and progression paths',
              'Team communication and notifications',
              'Workforce analytics and reporting',
              'Task management and assignments'
            ]} />
            <p style={{ marginTop: '16px' }}>
              The specific features available to you may depend on your subscription plan and your role within your organization.
            </p>
          </Section>

          <Section id="accounts" title="3. User Accounts">
            <p><strong>Account Creation</strong></p>
            <p>
              To use the Service, you must create an account or have an account created for you by your employer. You agree to provide accurate and complete information during registration and to keep your account information up to date.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Account Security</strong></p>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Account Types</strong></p>
            <p>
              The Service supports different account types (e.g., worker, manager, administrator) with varying levels of access and functionality. Your account type is determined by your employer.
            </p>
          </Section>

          <Section id="acceptable-use" title="4. Acceptable Use">
            <p>You agree not to:</p>
            <BulletList items={[
              'Use the Service for any unlawful purpose or in violation of any applicable laws',
              'Attempt to gain unauthorized access to any part of the Service or other users\' accounts',
              'Interfere with or disrupt the Service or servers connected to the Service',
              'Upload or transmit viruses, malware, or other malicious code',
              'Use the Service to harass, abuse, or harm others',
              'Impersonate any person or entity or misrepresent your affiliation',
              'Collect or harvest any information from the Service without authorization',
              'Use automated means (bots, scrapers) to access the Service without permission',
              'Circumvent or disable any security features of the Service',
              'Share your account credentials with others'
            ]} />
          </Section>

          <Section id="intellectual-property" title="5. Intellectual Property">
            <p><strong>Our Intellectual Property</strong></p>
            <p>
              The Service and its original content, features, and functionality are owned by Uplift and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Your Content</strong></p>
            <p>
              You retain ownership of any content you submit to the Service. By submitting content, you grant us a license to use, store, and display that content as necessary to provide the Service.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Feedback</strong></p>
            <p>
              If you provide feedback or suggestions about the Service, we may use such feedback without any obligation to you.
            </p>
          </Section>

          <Section id="data-privacy" title="6. Data & Privacy">
            <p>
              Your privacy is important to us. Our <Link to="/privacy" style={{ color: '#3B82F6' }}>Privacy Policy</Link> explains how we collect, use, and protect your personal information. By using the Service, you agree to our Privacy Policy.
            </p>
            <p style={{ marginTop: '16px' }}>
              The Service may require access to certain device features (such as camera, location, or notifications) to provide full functionality. You can manage these permissions through your device settings.
            </p>
          </Section>

          <Section id="employer-responsibilities" title="7. Employer Responsibilities">
            <p>
              If you are an employer using the Service to manage your workforce:
            </p>
            <BulletList items={[
              'You are responsible for obtaining appropriate consent from employees for data collection and processing',
              'You must comply with all applicable employment and data protection laws',
              'You are responsible for the accuracy of employee data you input into the Service',
              'You must not use the Service in a manner that violates employee rights',
              'You are responsible for managing user access and permissions within your organization'
            ]} />
          </Section>

          <Section id="disclaimers" title="8. Disclaimers">
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p style={{ marginTop: '16px' }}>
              We do not warrant that the Service will be uninterrupted, secure, or error-free. We do not warrant the accuracy or reliability of any information obtained through the Service.
            </p>
          </Section>

          <Section id="limitation" title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL UPLIFT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <BulletList items={[
              'Your access to or use of (or inability to access or use) the Service',
              'Any conduct or content of any third party on the Service',
              'Any content obtained from the Service',
              'Unauthorized access, use, or alteration of your transmissions or content'
            ]} />
            <p style={{ marginTop: '16px' }}>
              Our total liability for any claims arising out of or relating to these Terms or the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </Section>

          <Section id="termination" title="10. Termination">
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
            </p>
            <p style={{ marginTop: '16px' }}>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may do so by contacting us or through your account settings.
            </p>
            <p style={{ marginTop: '16px' }}>
              Provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to Terms">
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p style={{ marginTop: '16px' }}>
              By continuing to access or use the Service after those revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </Section>

          <Section id="governing-law" title="12. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
            <p style={{ marginTop: '16px' }}>
              Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p>If you have any questions about these Terms, please contact us:</p>
            <div style={{ marginTop: '16px', padding: '20px', background: '#F1F5F9', borderRadius: '8px' }}>
              <p style={{ margin: 0 }}><strong>Uplift</strong></p>
              <p style={{ margin: '8px 0 0' }}>Email: <a href="mailto:legal@uplifthq.co.uk" style={{ color: '#3B82F6' }}>legal@uplifthq.co.uk</a></p>
              <p style={{ margin: '8px 0 0' }}>Website: <a href="https://www.uplifthq.co.uk" style={{ color: '#3B82F6' }}>www.uplifthq.co.uk</a></p>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
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
