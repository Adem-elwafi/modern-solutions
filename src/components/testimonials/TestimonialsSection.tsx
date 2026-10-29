import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Building2, TrendingUp, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

type Category = 'enterprise' | 'fintech' | 'globalTech';

interface Testimonial {
  id: string;
  category: Category;
  author: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  company: string;
  avatar: string;
  rating: number;
  highlightMetric: {
    en: string;
    ar: string;
  };
  quote: {
    en: string;
    ar: string;
  };
}

export const TestimonialsSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('enterprise');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories: { id: Category; labelEn: string; labelAr: string; icon: string }[] = [
    { id: 'enterprise', labelEn: 'Enterprise Cloud', labelAr: 'السحابة المؤسسية', icon: '🏢' },
    { id: 'fintech', labelEn: 'FinTech & Banking', labelAr: 'التقنية المالية والمصرفية', icon: '💳' },
    { id: 'globalTech', labelEn: 'High-Growth Tech', labelAr: 'الشركات التقنية سريعة النمو', icon: '🚀' },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 'ent-1',
      category: 'enterprise',
      author: {
        en: 'Elena Rostova',
        ar: 'إيلينا روستوفا',
      },
      role: {
        en: 'Chief Technology Officer, ApexCloud Systems',
        ar: 'الرئيس التنفيذي للتقنية، أنظمة آبيكس كلاود',
      },
      company: 'ApexCloud Global',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=85',
      rating: 5,
      highlightMetric: {
        en: '340% Higher Pipeline Conversion',
        ar: 'مضاعفة معدلات التحويل بنسبة 340%',
      },
      quote: {
        en: 'Switching to this architecture transformed our core customer journey. The performance is blisteringly fast, our enterprise lead pipeline tripled in under 60 days, and our deployment cycle dropped from weeks to hours.',
        ar: 'الانتقال إلى هذه البنية الهندسية أحدث نقلة نوعية في تجربة عملائنا. الأداء فائق السرعة، ومعدلات تحويل مسارات المبيعات المؤسسية تضاعفت ثلاث مرات في أقل من 60 يوماً.',
      },
    },
    {
      id: 'ent-2',
      category: 'enterprise',
      author: {
        en: 'Marcus Vance',
        ar: 'ماركوس فانس',
      },
      role: {
        en: 'VP of Digital Architecture, Vanguard Scale',
        ar: 'نائب رئيس البنية الرقمية، فانغارد سكيل',
      },
      company: 'Vanguard Enterprise',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=85',
      rating: 5,
      highlightMetric: {
        en: 'Zero Incident Uptime Over 18 Months',
        ar: 'استمرارية كاملة بدون أي انقطاع طوال 18 شهراً',
      },
      quote: {
        en: 'The reliability and attention to micro-interactions give our enterprise buyers the instant confidence needed to sign seven-figure multi-year agreements.',
        ar: 'الموثوقية الفائقة والعناية الدقيقة بالتفاصيل تمنح شركاءنا من كبار المستثمرين الثقة الكاملة لإبرام عقود استراتيجية متعددة السنوات.',
      },
    },
    {
      id: 'fin-1',
      category: 'fintech',
      author: {
        en: 'Sophia Al-Mansoor',
        ar: 'صوفيا المنصور',
      },
      role: {
        en: 'Head of Growth Engineering, NovaPay Solutions',
        ar: 'مديرة هندسة النمو، نوفاباي للحلول المالية',
      },
      company: 'NovaPay Global',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=85',
      rating: 5,
      highlightMetric: {
        en: '4.8x Mobile Checkout Velocity',
        ar: 'تسريع تدفقات إتمام الدفع بمقدار 4.8x',
      },
      quote: {
        en: 'In FinTech, milliseconds equal millions. The sleek responsive layouts and bulletproof validation states helped us crush cart drop-offs and achieve record conversion metrics.',
        ar: 'في قطاع التقنية المالية، الأجزاء من الثانية توازي الملايين. التصاميم التفاعلية فائقة الاستجابة وأنظمة التحقق الصارمة خفضت نسب التردد ورفعت التحويل لأرقام قياسية.',
      },
    },
    {
      id: 'tech-1',
      category: 'globalTech',
      author: {
        en: 'David Chen',
        ar: 'ديفيد تشين',
      },
      role: {
        en: 'Founder & CEO, HyperFlow Labs',
        ar: 'المؤسس والرئيس التنفيذي، هايبرفلو لابس',
      },
      company: 'HyperFlow Labs',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=85',
      rating: 5,
      highlightMetric: {
        en: '$4.2M Series-A Closed Within 45 Days',
        ar: 'إغلاق جولة استثمارية بـ 4.2M$ خلال 45 يوماً',
      },
      quote: {
        en: 'Our new landing platform immediately signaled to top-tier Silicon Valley investors that we operate at the highest technical caliber. It paid for itself a hundred times over.',
        ar: 'منصتنا الجديدة عكست على الفور للمستثمرين في وادي السيليكون أننا نعمل بأعلى المعايير الهندسية والتقنية. لقد تجاوزت عوائدها توقعاتنا بمراحل.',
      },
    },
  ];

  const filteredTestimonials = testimonials.filter((t) => t.category === activeCategory);
  const activeTestimonial = filteredTestimonials[currentIndex % filteredTestimonials.length] || testimonials[0];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#FAFAF9] text-slate-800 overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Customer Validation & Proof', 'شهادات وتجارب العملاء الموثقة')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {t('Loved by Innovators,', 'محل ثقة المبتكرين،')}
            <span className="block text-brand-orange mt-1">
              {t('Backed by Unmatched Results', 'ومدعوم بنتائج استثنائية')}
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {t(
              'Read firsthand accounts from engineering and product executives who scaled their business with our solutions.',
              'اطلع على تجارب حقيقية لقادة التقنية وتطوير الأعمال الذين نجحوا في توسيع مشاريعهم معنا.'
            )}
          </p>
        </motion.div>

        {/* Category Pill Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full flex justify-center mb-10 px-2"
        >
          <div className="w-full max-w-fit inline-flex flex-wrap sm:flex-nowrap justify-center p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm gap-1.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  type="button"
                  className={`relative min-h-[44px] px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-brand-darkNavy rounded-xl z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-sm">{cat.icon}</span>
                  <span className="relative z-10">{t(cat.labelEn, cat.labelAr)}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonial Active Display Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-full min-h-[420px] sm:min-h-[360px] lg:min-h-[320px] flex flex-col justify-between bg-white rounded-3xl p-5 sm:p-10 lg:p-12 border border-slate-200/80 shadow-card-soft relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-orange via-amber-500 to-brand-teal" />

              {/* Large quote watermark */}
              <div className="hidden sm:block absolute top-6 end-8 text-8xl font-serif text-slate-100 select-none pointer-events-none leading-none opacity-80">
                “
              </div>

              <div>
                {/* Highlight Metric Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200/60 text-teal-800 text-xs sm:text-sm font-bold mb-6">
                  <TrendingUp className="w-4 h-4 text-teal-600" />
                  <span>{t(activeTestimonial.highlightMetric.en, activeTestimonial.highlightMetric.ar)}</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ms-2 text-xs font-semibold text-slate-500">
                    {t('Verified Executive Review', 'تقييم قيادي موثق')}
                  </span>
                </div>

                {/* Main Quote */}
                <blockquote className="w-full text-base sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed mb-8 text-start">
                  “{t(activeTestimonial.quote.en, activeTestimonial.quote.ar)}”
                </blockquote>
              </div>

              {/* Author & Executive Footer Row */}
              <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-3.5 sm:gap-4 text-start">
                  <img
                    src={activeTestimonial.avatar}
                    alt={t(activeTestimonial.author.en, activeTestimonial.author.ar)}
                    width="56"
                    height="56"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover ring-2 ring-brand-orange/30 shadow-md shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                        {t(activeTestimonial.author.en, activeTestimonial.author.ar)}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {t(activeTestimonial.role.en, activeTestimonial.role.ar)}
                    </p>
                  </div>
                </div>

                {/* Navigation Chevrons if category has multiple testimonials */}
                {filteredTestimonials.length > 1 && (
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handlePrev}
                      type="button"
                      aria-label="Previous testimonial"
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={handleNext}
                      type="button"
                      aria-label="Next testimonial"
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Trust Assurance Badge */}
          <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
            <Building2 className="w-4 h-4 text-slate-400" />
            <span>
              {t(
                'All quotes verified through enterprise service level audits and customer feedback reviews.',
                'جميع الآراء والشهادات موثقة رسمياً عبر مراجعات رضا العملاء وتدقيق مستويات الخدمة.'
              )}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default TestimonialsSection;
