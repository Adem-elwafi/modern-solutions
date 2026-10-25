import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.links.home, href: '#home' },
    { id: 'products', label: t.nav.links.products, href: '#products' },
    { id: 'pricing', label: t.nav.links.pricing, href: '#pricing' },
    { id: 'blog', label: t.nav.links.blog, href: '#blog' },
    { id: 'contact', label: t.nav.links.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1329]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg"
          >
            <span className="text-2xl font-extrabold tracking-tight text-white transition-colors group-hover:text-slate-100">
              {t.nav.brand}
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-orange shadow-glow-orange group-hover:scale-125 transform-gpu origin-center transition-transform shrink-0" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveItem(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded ${
                    isActive
                      ? 'text-brand-orange'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              aria-label={t.nav.langSwitcher.ariaLabel}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors shadow-inner focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>{t.nav.langSwitcher.target}</span>
            </button>

            {/* Log In Button (Outline) */}
            <a
              href="#login"
              className="px-4 py-1.5 text-sm font-medium text-slate-200 hover:text-white rounded-xl border border-slate-700/80 hover:border-slate-500 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange shrink-0"
            >
              {t.nav.auth.login}
            </a>

            {/* Sign Up Button (Solid Orange Pill with rock-solid dimensions) */}
            <a
              href="#contact"
              className="group flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover active:bg-brand-orangeHover/90 rounded-xl shadow-glow-orange animate-glow-orange transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer shrink-0"
            >
              <span>{t.nav.auth.signup}</span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 shrink-0 ${
                  isRTL ? 'rotate-180' : ''
                }`}
              />
            </a>
          </div>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              aria-label={t.nav.langSwitcher.ariaLabel}
              className="flex items-center gap-1.5 min-h-[44px] px-3 py-2 rounded-full text-xs font-semibold text-slate-300 bg-slate-800/90 border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange active:scale-95 transition-all"
            >
              <Globe className="w-4 h-4 text-brand-orange" />
              <span>{t.nav.langSwitcher.target}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#0B1329]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-5 pt-3 pb-6 space-y-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`min-h-[44px] px-3 py-2.5 flex items-center rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-orange/15 text-brand-orange font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[44px] flex items-center justify-center text-center py-2.5 text-sm font-medium text-slate-200 hover:text-white rounded-xl border border-slate-700 bg-white/5 transition-colors active:scale-[0.99]"
                >
                  {t.nav.auth.login}
                </a>
                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover rounded-xl shadow-glow-orange animate-glow-orange transition-colors cursor-pointer"
                >
                  <span>{t.nav.auth.signup}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
