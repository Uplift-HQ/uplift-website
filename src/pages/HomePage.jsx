import React from 'react';
import Navigation from '../components/home/Navigation';
import Act1Hero from '../components/home/Act1Hero';
import Act2Statement from '../components/home/Act2Statement';
import Act3Breadth from '../components/home/Act3Breadth';
import Act4Intelligence from '../components/home/Act4Intelligence';
import Act5Platform from '../components/home/Act5Platform';
import Act6Pricing from '../components/home/Act6Pricing';
import Act7Close from '../components/home/Act7Close';
import Footer from '../components/home/Footer';

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <Navigation />

      {/* Act 1: Hero — #F8FAFC */}
      <Act1Hero />

      {/* Act 2: Statement Band — #F1F5F9 */}
      <Act2Statement />

      {/* Act 3: Platform Breadth — #F8FAFC */}
      <Act3Breadth />

      {/* Act 4: Intelligence — #F1F5F9 */}
      <Act4Intelligence />

      {/* Act 5: Platform in Action — #F8FAFC */}
      <Act5Platform />

      {/* Act 6: Pricing — #F1F5F9 */}
      <Act6Pricing />

      {/* Act 7: The Close — #0F172A */}
      <Act7Close />

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #F8FAFC;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a:hover, button:hover {
          opacity: 0.95;
        }
      `}</style>
    </div>
  );
}
