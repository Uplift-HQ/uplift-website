import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';
import NovaPage from './pages/NovaPage';
import MockupCapture from './pages/MockupCapture';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/nova" element={<NovaPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/capture" element={<MockupCapture />} />
        <Route path="/capture/:mockupId" element={<MockupCapture />} />
      </Routes>
    </Router>
  );
}

export default App;
