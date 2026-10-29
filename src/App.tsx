import React from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { BentoAccentCards } from './components/features/BentoAccentCards';
import { SmoothModernSection } from './components/sections/SmoothModernSection';
import { MetricsSection } from './components/social-proof/MetricsSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { LeadCaptureSection } from './components/conversion/LeadCaptureSection';
import { Footer } from './components/footer/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B1329] text-slate-800 transition-colors duration-300 overflow-x-hidden">
      {/* Top Navbar Component */}
      <Navbar />

      <main id="main-content">
        {/* Hero Section (Dark Slate/Navy Theme with organic bottom transition) */}
        <Hero />

        {/* Light Canvas Sections (#FAFAF9) */}
        <div className="relative bg-[#FAFAF9] z-10">
          {/* Smooth Modern Sections (Target Screenshot Visual Match) */}
          <SmoothModernSection />

          {/* Bento Feature Accent Cards (Warm Orange, Rich Teal, Frosted White) */}
          <BentoAccentCards />
        </div>

        {/* Social Proof & Trust Metrics Bar (Dark Slate/Navy) */}
        <MetricsSection />

        {/* Interactive Testimonials (Light Canvas) */}
        <div className="relative bg-[#FAFAF9] z-10">
          <TestimonialsSection />
        </div>

        {/* High-Converting Lead Capture Block (Dark Theme) */}
        <LeadCaptureSection />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </MotionConfig>
  );
}
