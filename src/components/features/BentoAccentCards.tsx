import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  Cpu,
  Sparkles,
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'orange' | 'teal' | 'slate';
  isRTL?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', glowColor = 'slate', isRTL = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 28 });

  // Invert rotateY direction in RTL mode so the tilt feels natural
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    isRTL ? ['7deg', '-7deg'] : ['-7deg', '7deg']
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getGlowStyles = () => {
    switch (glowColor) {
      case 'orange':
        return 'hover:shadow-[0_24px_50px_-12px_rgba(249,115,22,0.45)]';
      case 'teal':
        return 'hover:shadow-[0_24px_50px_-12px_rgba(13,148,136,0.45)]';
      default:
        return 'hover:shadow-[0_24px_50px_-12px_rgba(15,23,42,0.14)]';
    }
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
        className={`relative h-full w-full transition-shadow duration-300 rounded-3xl ${getGlowStyles()} ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const BentoAccentCards: React.FC = () => {
  const { t, isRTL, rtlX } = useLanguage();
  const bentoContent = t.bento;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="features-grid"
      aria-labelledby="bento-heading"
      className="relative w-full py-20 lg:py-28 bg-[#FAFAF9] overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 start-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-brand-teal/5 to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-200/80 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
              {bentoContent.pill}
            </span>
          </motion.div>

          <motion.h2
            id="bento-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]"
          >
            {bentoContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            {bentoContent.subtitle}
          </motion.p>
        </div>

        {/* 3-Column Asymmetric / Bento Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* ========================================================================= */}
          {/* CARD 1: Warm Vibrant Orange Card (#F97316) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: rtlX(-25), y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full w-full"
          >
            <TiltCard glowColor="orange" isRTL={isRTL} className="bg-gradient-to-br from-[#F97316] via-[#FB812C] to-[#EA580C] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-orange-400/40 text-start">
              {/* Decorative background abstract radial ring */}
              <div
                className="pointer-events-none absolute -end-16 -top-16 w-52 h-52 rounded-full bg-white/10 blur-xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -start-10 -bottom-10 w-40 h-40 rounded-full bg-orange-950/20 blur-lg"
                aria-hidden="true"
              />

              {/* Card Header & Badges */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Organic Badge Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-sm" />
                  </div>

                  {/* Floating Live Badge Chip with Pulsing Green Indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span>{bentoContent.cards.orange.badge}</span>
                  </div>
                </div>

                {/* Category Tag */}
                <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-orange-100/90 mb-2">
                  {bentoContent.cards.orange.tag}
                </span>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-snug mb-3">
                  {bentoContent.cards.orange.title}
                </h3>

                {/* Card Description */}
                <p className="text-orange-50/90 text-sm sm:text-base leading-relaxed font-medium">
                  {bentoContent.cards.orange.description}
                </p>
              </div>

              {/* Card Footer Metric & Interactive Affordance */}
              <div className="relative z-10 pt-8 mt-6 border-t border-white/20 flex items-end justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                    {bentoContent.cards.orange.metric}
                  </div>
                  <div className="text-xs font-semibold text-orange-100/90 mt-0.5">
                    {bentoContent.cards.orange.metricLabel}
                  </div>
                </div>

                <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white backdrop-blur-sm cursor-pointer group">
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 2: Rich Teal Accent Card (#0D9488) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full w-full"
          >
            <TiltCard glowColor="teal" isRTL={isRTL} className="bg-gradient-to-br from-[#0D9488] via-[#0E857B] to-[#0F766E] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-teal-400/40 text-start">
              {/* Decorative background abstract glow */}
              <div
                className="pointer-events-none absolute -end-16 -top-16 w-52 h-52 rounded-full bg-white/10 blur-xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -start-10 -bottom-10 w-40 h-40 rounded-full bg-teal-950/25 blur-lg"
                aria-hidden="true"
              />

              {/* Card Header & Badges */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Organic Badge Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-7 h-7 text-white drop-shadow-sm" />
                  </div>

                  {/* Floating Live Badge Chip with Pulsing Green Dot */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span>{bentoContent.cards.teal.badge}</span>
                  </div>
                </div>

                {/* Category Tag */}
                <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-teal-100/90 mb-2">
                  {bentoContent.cards.teal.tag}
                </span>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-snug mb-3">
                  {bentoContent.cards.teal.title}
                </h3>

                {/* Card Description */}
                <p className="text-teal-50/90 text-sm sm:text-base leading-relaxed font-medium">
                  {bentoContent.cards.teal.description}
                </p>
              </div>

              {/* Card Footer Metric & Interactive Affordance */}
              <div className="relative z-10 pt-8 mt-6 border-t border-white/20 flex items-end justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                    {bentoContent.cards.teal.metric}
                  </div>
                  <div className="text-xs font-semibold text-teal-100/90 mt-0.5">
                    {bentoContent.cards.teal.metricLabel}
                  </div>
                </div>

                <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white backdrop-blur-sm cursor-pointer group">
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 3: Crisp Frosted White Surface Card (#FFFFFF) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: rtlX(25), y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full w-full md:col-span-2 lg:col-span-1"
          >
            <TiltCard glowColor="slate" isRTL={isRTL} className="bg-white text-slate-900 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-card-soft border border-slate-200/80 text-start">
              {/* Subtle top accent gradient line */}
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange via-brand-teal to-blue-600 opacity-90"
                aria-hidden="true"
              />

              {/* Card Header & Badges */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Frosted Slate Icon Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-7 h-7 text-slate-800" />
                  </div>

                  {/* Floating Live Badge Chip with Pulsing Green Dot */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                    </span>
                    <span>{bentoContent.cards.white.badge}</span>
                  </div>
                </div>

                {/* Category Tag */}
                <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-brand-teal mb-2">
                  {bentoContent.cards.white.tag}
                </span>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight leading-snug mb-3">
                  {bentoContent.cards.white.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {bentoContent.cards.white.description}
                </p>
              </div>

              {/* Card Footer Metric & Interactive Affordance */}
              <div className="relative z-10 pt-8 mt-6 border-t border-slate-100 flex items-end justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                    {bentoContent.cards.white.metric}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">
                    {bentoContent.cards.white.metricLabel}
                  </div>
                </div>

                <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-700 cursor-pointer group">
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 text-slate-900" />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Bottom Feature Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-semibold text-slate-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-teal" />
            <span>{isRTL ? 'معتمد للمؤسسات الكبرى ومعايير SOC2' : 'Enterprise Grade SOC2 Type II Certified'}</span>
          </div>

          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-orange" />
            <span>{isRTL ? 'مراقبة فورية للبنية السحابية 24/7' : '24/7 Continuous Autonomous Infrastructure Monitoring'}</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-teal" />
            <span>{isRTL ? 'تصنيف ريادي رقم 1 في كفاءة الأداء' : '#1 Ranked Performance Architecture 2026'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoAccentCards;