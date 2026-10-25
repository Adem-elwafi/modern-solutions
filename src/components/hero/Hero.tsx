import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Star, TrendingUp, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import heroWorkspaceImg from '../../assets/hero-workspace-glasses.jpg';

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const visualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#0B1329] text-white pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden flex items-center"
    >
      {/* =========================================================================
          ORGANIC BACKDROP SHAPES (Directly matching the reference image)
          - Deep teal (#072E38 / #08333F) curved vectors against deep navy (#0B1329)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Left Organic Teal Curved Shape */}
        <svg
          className="absolute -left-24 bottom-0 w-[55vw] max-w-[680px] h-[75%] opacity-90 transition-all duration-700"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -50 600 C 120 600, 240 520, 260 380 C 280 240, 180 120, 100 60 C 20 0, -50 20, -100 50 Z"
            fill="#08333E"
            fillOpacity="0.85"
          />
          <path
            d="M -80 600 C 60 580, 180 480, 200 360 C 220 220, 120 120, 40 70 Z"
            fill="#06252E"
            fillOpacity="0.7"
          />
        </svg>

        {/* Right Organic Teal Curved Arc (behind hero card) */}
        <svg
          className="absolute -right-20 -top-10 w-[50vw] max-w-[620px] h-[80%] opacity-85 transition-all duration-700"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 650 -20 C 420 40, 310 180, 330 360 C 350 500, 480 580, 650 600 Z"
            fill="#08333E"
            fillOpacity="0.8"
          />
          <circle cx="500" cy="180" r="260" fill="#0A3E4B" fillOpacity="0.4" />
        </svg>

        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0D9488]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =====================================================================
              LEFT COLUMN: Headline, Subtext, Dual CTAs, and Trust Micro-line
              ===================================================================== */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-start"
          >
            {/* Headline */}
            <motion.h1
              variants={heroItemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight text-white leading-[1.12] max-w-2xl"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={heroItemVariants}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300/85 leading-relaxed max-w-xl font-normal"
            >
              {t.hero.subtext}
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA (Solid Orange with ambient glow pulse - rock-solid zero shift) */}
              <a
                href="#contact"
                className="group w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover active:bg-brand-orangeHover/90 shadow-glow-orange animate-glow-orange transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange text-base cursor-pointer shrink-0"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 shrink-0 ${
                    isRTL ? 'rotate-180' : ''
                  }`}
                />
              </a>

              {/* Secondary CTA (Ghost Outline with smooth hover color transition - zero shift) */}
              <a
                href="#features"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white border border-slate-700/90 hover:border-slate-500 bg-slate-800/20 hover:bg-slate-800/60 active:bg-slate-800/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange text-base cursor-pointer shrink-0"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </motion.div>

            {/* Trust Pill / Micro-Indicator */}
            <motion.div
              variants={heroItemVariants}
              className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center -space-x-1.5 rtl:space-x-reverse shrink-0">
                <span className="inline-block w-6 h-6 rounded-full bg-slate-700 ring-2 ring-[#0B1329] flex items-center justify-center font-bold text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </span>
                <span className="inline-block w-6 h-6 rounded-full bg-brand-teal/80 ring-2 ring-[#0B1329] text-[10px] flex items-center justify-center font-bold text-white">
                  ✓
                </span>
                <span className="inline-block w-6 h-6 rounded-full bg-brand-orange ring-2 ring-[#0B1329] text-[10px] flex items-center justify-center font-bold text-white">
                  ★
                </span>
              </div>
              <p className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 inline shrink-0" />
                <span>{t.hero.trustBanner}</span>
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================================
              RIGHT COLUMN: Rounded-3xl Card Framing with Floating Trust Badges
              ===================================================================== */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Visual Container Card */}
            <div className="relative w-full max-w-[460px] sm:max-w-[480px]">
              
              {/* Card Framing with Rounded-3xl & Soft Border */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/60 p-2 border border-white/15 shadow-2xl backdrop-blur-sm group">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square w-full max-h-[460px] bg-slate-800 relative">
                  <img
                    src={heroWorkspaceImg}
                    alt="Business professional collaborating at modern workspace"
                    width="640"
                    height="640"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 transform-gpu"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Subtle inner gradient shadow on image bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* =================================================================
                  FLOATING TRUST BADGE 1: Client Rating (Golden Stars)
                  ================================================================= */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 sm:-top-5 start-1 sm:-start-4 md:-start-6 z-20 backdrop-blur-xl bg-slate-900/95 border border-white/20 p-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl shadow-black/40 flex items-center gap-2.5 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-bold text-white ms-1">
                      4.9
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium whitespace-nowrap">
                    {t.hero.badges.rating}
                  </p>
                </div>
              </motion.div>

              {/* =================================================================
                  FLOATING TRUST BADGE 2: Conversion Speed (TrendingUp Icon)
                  ================================================================= */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-4 sm:-bottom-5 end-1 sm:-end-4 md:-end-6 z-20 backdrop-blur-xl bg-slate-900/95 border border-white/20 p-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl shadow-black/40 flex items-center gap-2.5 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white tracking-tight flex items-center gap-1.5">
                    <span>99.8%</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                      +14.2%
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium whitespace-nowrap">
                    {t.hero.badges.speed}
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          SEAMLESS ORGANIC TRANSITION TO LIGHT SECTIONS (#FAFAF9)
          - Elegant curved bottom divider eliminates harsh horizontal boundaries
          ========================================================================= */}
      <div className="absolute -bottom-px inset-x-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-14 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,54 C360,14 1080,14 1440,54 L1440,54 L0,54 Z"
            fill="#FAFAF9"
          />
        </svg>
      </div>
    </section>
  );
};
