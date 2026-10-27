import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { RosetteBadge, type RosetteVariant, type RosetteIconType } from '../ui/RosetteBadge';
import { useLanguage } from '../../context/LanguageContext';
import defaultPortrait from '../../assets/portrait-professional-hd.jpg';

interface FeatureDisplayItem {
  id: string;
  variant: RosetteVariant;
  icon: RosetteIconType;
  tag: string;
  title: string;
  description: string;
  highlight: string;
}

export const SmoothModernSection: React.FC = () => {
  const { t, rtlX } = useLanguage();
  const [activeFeatureId, setActiveFeatureId] = useState<string>('rosette1');

  const { smoothSections } = t;

  const featureItems: FeatureDisplayItem[] = [
    {
      id: 'rosette1',
      variant: 'orange',
      icon: 'check',
      tag: smoothSections.rosettes.rosette1.tag,
      title: smoothSections.rosettes.rosette1.title,
      description: smoothSections.rosettes.rosette1.description,
      highlight: smoothSections.rosettes.rosette1.highlight,
    },
    {
      id: 'rosette2',
      variant: 'teal',
      icon: 'sparkles',
      tag: smoothSections.rosettes.rosette2.tag,
      title: smoothSections.rosettes.rosette2.title,
      description: smoothSections.rosettes.rosette2.description,
      highlight: smoothSections.rosettes.rosette2.highlight,
    },
    {
      id: 'rosette3',
      variant: 'accent',
      icon: 'star',
      tag: smoothSections.rosettes.rosette3.tag,
      title: smoothSections.rosettes.rosette3.title,
      description: smoothSections.rosettes.rosette3.description,
      highlight: smoothSections.rosettes.rosette3.highlight,
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full py-20 lg:py-28 bg-[#FAFAF9] overflow-hidden"
    >
      {/* Subtle organic ambient backlight orbs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
              {smoothSections.portraitBadge.status}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {smoothSections.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            {smoothSections.subtitle}
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-teal mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Split Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Media Portrait Card with RTL slide mirroring */}
          <motion.div
            initial={{ opacity: 0, x: rtlX(-32), y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient Backlight Glow */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-brand-orange/20 via-brand-teal/15 to-transparent rounded-[2.5rem] blur-2xl -z-10 transform -rotate-1"
              aria-hidden="true"
            />

            {/* Main Portrait Container */}
            <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-200/70 bg-white aspect-[4/3] sm:aspect-[4/5] group w-full">
              <img
                src={defaultPortrait}
                alt="Confident business leader"
                width="600"
                height="750"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle dark vignette overlay at bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Verified Partner Pill */}
              <div className="absolute top-4 end-4 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-white/60 text-xs font-semibold text-slate-800">
                  <ShieldCheck size={14} className="text-brand-teal" />
                  <span>{smoothSections.portraitBadge.status}</span>
                </div>
              </div>

              {/* Bottom Floating Glassmorphic Social Proof Chip */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-3 sm:bottom-6 start-3 sm:start-6 z-10 max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-3rem)]"
              >
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl shadow-slate-900/10 flex items-center gap-2.5 sm:gap-3.5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-brand-orange flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/20">
                    <Star size={18} className="fill-white sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-start">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900 text-xs sm:text-base">
                        {smoothSections.portraitBadge.rating}
                      </span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-amber-400 sm:w-3 sm:h-3" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                      {smoothSections.portraitBadge.reviews}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Rich Editorial & Rosette Features List */}
          <motion.div
            initial={{ opacity: 0, x: rtlX(32), y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center w-full"
          >
            {/* Rich Editorial Typography Paragraph */}
            <div className="mb-6 sm:mb-8 w-full">
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-start">
                {t(
                  'Engineered to deliver exceptional operational fluidity, uniting high-precision software architecture with intuitive interfaces crafted for modern enterprise leaders.',
                  'صُممت منصتنا لتمنح منشأتك مرونة تشغيلية لا تضاهى، حيث تجتمع دقة الأداء الهندسي مع سلاسة الواجهات لتوفير تجربة مستخدم استثنائية تلبي تطلعات قادة التحول الرقمي.'
                )}
              </p>
            </div>

            {/* Vertical Rosette Features Stack - Strict layout stability, zero layout shift */}
            <div className="space-y-3.5 sm:space-y-4 w-full">
              {featureItems.map((item) => {
                const isActive = activeFeatureId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveFeatureId(item.id)}
                    onMouseEnter={() => setActiveFeatureId(item.id)}
                    className={`group relative w-full p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 sm:gap-5 cursor-pointer transition-[background-color,border-color,box-shadow] duration-200 border ${
                      isActive
                        ? 'bg-white shadow-xl shadow-slate-200/70 border-slate-200/90'
                        : 'bg-white/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 border-transparent hover:border-slate-200/60'
                    }`}
                  >
                    {/* Reusable SVG Scalloped Rosette Badge */}
                    <RosetteBadge
                      variant={item.variant}
                      icon={item.icon}
                      size="md"
                      glow={isActive}
                      className="shrink-0"
                    />

                    {/* Text Block with strict width stability */}
                    <div className="flex-1 min-w-0 text-start">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                            isActive
                              ? item.variant === 'orange'
                                ? 'text-brand-orange'
                                : item.variant === 'teal'
                                ? 'text-brand-teal'
                                : 'text-rose-600'
                              : 'text-slate-900 group-hover:text-slate-950'
                          }`}
                        >
                          {item.title}
                        </h3>

                        <span
                          className={`hidden sm:inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full border transition-colors duration-200 shrink-0 ${
                            isActive
                              ? 'text-slate-700 bg-slate-100 border-slate-200/90'
                              : 'text-slate-400 bg-slate-50 border-slate-100'
                          }`}
                        >
                          {item.highlight}
                        </span>
                      </div>

                      <p className="mt-1 text-xs sm:text-sm lg:text-base text-slate-500 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Checklist items from translations */}
            {smoothSections.checklist && smoothSections.checklist.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 pt-5 border-t border-slate-200/60 space-y-2.5 text-start w-full"
              >
                {smoothSections.checklist.map((checkItem, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-brand-teal shrink-0" />
                    <span>{checkItem}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Horizontal Trust / Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6 text-start w-full"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm sm:text-base">99.9%</div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t('SLA Uptime', 'ضمان الخدمة')}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm sm:text-base">10k+</div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t('Active Teams', 'فريق نشط')}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm sm:text-base">3.4x</div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t('ROI Growth', 'نمو العائد')}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmoothModernSection;
