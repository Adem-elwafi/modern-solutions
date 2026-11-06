import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Architecture', href: '#features' },
    { label: 'Bento Grid', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        {/* Main Floating Pill Navbar */}
        <nav className="w-full rounded-full px-5 py-2.5 sm:px-6 sm:py-3 bg-obsidian-900/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 flex items-center justify-between transition-all duration-300">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-full"
            aria-label="Vanguard Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-sky-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/60 group-hover:shadow-[0_0_16px_rgba(99,102,241,0.3)] transition-all">
              <Layers className="w-4.5 h-4.5 stroke-[2] text-indigo-300 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                Vanguard
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 hover:brightness-110 shadow-md shadow-indigo-500/20 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle (Touch target min 44x44px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2]" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2 p-4 rounded-3xl bg-obsidian-900/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-3"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-2xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-800">
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-indigo-300 via-white to-sky-200 hover:brightness-105 active:scale-98 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-indigo-700" />
                  <span>Start Free Discovery</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
