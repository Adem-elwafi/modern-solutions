import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Phone,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LeadCaptureSection: React.FC = () => {
  const { t, isRtl, rtlX } = useLanguage();

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '10-50',
    interest: 'enterprise',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = t('Please enter your full name', 'يرجى إدخال اسمك الكامل');
    }
    if (!formData.email.trim()) {
      errs.email = t('Please enter your work email', 'يرجى إدخال بريدك الإلكتروني للعمل');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t('Please provide a valid business email', 'يرجى إدخال عنوان بريد إلكتروني صحيح');
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');
    // Simulate real enterprise webhook submission
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      companySize: '10-50',
      interest: 'enterprise',
      message: '',
    });
    setFormState('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-brand-dark overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 end-10 w-80 h-80 bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container with Deep Slate & Radiant Border */}
        <div className="relative rounded-3xl bg-brand-darkNavy/90 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-16 overflow-hidden">
          
          {/* Top highlight line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-teal" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Value Prop & Trust signals */}
            <motion.div
              initial={{ opacity: 0, x: rtlX(-28), y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6 sm:space-y-8 text-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('Ready to Scale Your Platform?', 'جاهز لتطوير وتوسيع منصتك؟')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('Accelerate Your Digital Growth With Our', 'ضاعف نموك الرقمي من خلال')}
                <span className="block text-brand-orange mt-1">
                  {t('Modern Enterprise Architecture', 'بنيتنا الهندسية المتطورة')}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {t(
                  'Book a dedicated discovery session with our senior digital architects. We will evaluate your current conversion flow, audit your performance bottlenecks, and design a customized roadmap.',
                  'احجز جلسة استشارية متخصصة مع كبار مهندسينا التقنيين. سنقوم بتحليل مسارات التحويل وتدقيق كفاءة الأداء وتصميم خارطة طريق مخصصة لنمو أعمالك.'
                )}
              </p>

              {/* Enterprise Bullet Points */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {t('Rapid 15-Minute Technical Audit', 'تدقيق تقني واستشاري سريع خلال 15 دقيقة')}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t('Direct consultation with a Principal Architect, not sales reps.', 'حوار مباشر مع مهندس معماري تقني، بعيداً عن العروض التسويقية المكررة.')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {t('NDA & Privacy Guaranteed', 'اتفاقية سرية وحماية تامة للبيانات')}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t('Enterprise security standards applied to all architecture inquiries.', 'أعلى معايير الأمان المؤسسي لحماية سرية أفكارك ومشاريعك.')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {t('No Obligation, Immediate Action Plan', 'خطة عمل فورية قابلة للتنفيذ المباشر')}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t('Walk away with actionable architectural insights regardless of your decision.', 'ستحصل على رؤى تقنية وهندسية قيّمة يمكنك تطبيقها مباشرة.')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Reach Out Alternative */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>solutions@business-modern.io</span>
                </div>
                <span className="hidden sm:inline text-slate-600">•</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>+1 (800) 492-2810</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Lead Capture Form or Success State */}
            <motion.div
              initial={{ opacity: 0, x: rtlX(28), y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:col-span-6"
            >
              <div className="w-full min-h-[500px] flex flex-col justify-center bg-slate-900/90 rounded-2xl border border-slate-800 p-5 sm:p-8 relative backdrop-blur-md shadow-2xl text-start">
                
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full text-center py-4 space-y-6"
                    >
                      {/* Success Checkmark Circle */}
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-teal">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white">
                          {t('Discovery Session Confirmed!', 'تم تأكيد طلب جلستك الاستشارية!')}
                        </h3>
                        <p className="text-sm text-slate-300 max-w-md mx-auto">
                          {t(
                            `Thank you, ${formData.name || 'Partner'}. A priority confirmation has been dispatched to ${formData.email}.`,
                            `شكراً لك يا ${formData.name || 'شريكنا العزيز'}. تم إرسال رسالة التأكيد الفورية إلى بريدك ${formData.email}.`
                          )}
                        </p>
                      </div>

                      {/* Direct Calendar Booking Action */}
                      <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-start space-y-3">
                        <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                          <Calendar className="w-4 h-4" />
                          <span>{t('Instant Calendar Reservation', 'الحجز المباشر عبر التقويم')}</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          {t(
                            'Skip email wait times! Choose an exact 15-minute slot on our Lead Architect’s real-time schedule now:',
                            'تجاوز أوقات الانتظار! اختر الموعد المناسب لك مباشرة من جدول المهندس المعماري الرئيسي الآن:'
                          )}
                        </p>
                        <motion.a
                          href="https://calendar.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          className="inline-flex items-center justify-center w-full min-h-[48px] py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange animate-glow-orange transition-colors duration-200 cursor-pointer"
                        >
                          <Calendar className="w-4 h-4 me-2" />
                          <span>{t('Open Google Calendar Slot', 'فتح جدول المواعيد في تقويم جوجل')}</span>
                          {isRtl ? <ArrowLeft className="w-4 h-4 ms-2" /> : <ArrowRight className="w-4 h-4 ms-2" />}
                        </motion.a>
                      </div>

                      <button
                        onClick={resetForm}
                        type="button"
                        className="min-h-[44px] text-xs text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer transition-colors inline-flex items-center justify-center"
                      >
                        {t('Submit another inquiry', 'إرسال استفسار آخر')}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form-state"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full space-y-4"
                    >
                      <div className="mb-2">
                        <h3 className="text-xl font-black text-white">
                          {t('Request Priority Consultation', 'طلب استشارة تقنية عاجلة')}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {t('Fill out the details below. Our technical team responds within 2 hours.', 'املأ البيانات أدناه، وسيصلك رد فريقنا التقني خلال ساعتين عمل فقط.')}
                        </p>
                      </div>

                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t('Full Name *', 'الاسم الكامل *')}
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder={t('e.g. Alexander Mitchell', 'مثال: عبد الرحمن خالد')}
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                            errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700/80 focus:border-brand-orange'
                          } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t('Work Email Address *', 'البريد الإلكتروني المهني *')}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder={t('alexander@company.com', 'name@company.com')}
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                            errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700/80 focus:border-brand-orange'
                          } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                      </div>

                      {/* Two Columns: Company Size & Project Category */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t('Team / Company Size', 'حجم الفريق أو الشركة')}
                          </label>
                          <select
                            value={formData.companySize}
                            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                            className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-xs sm:text-sm focus:border-brand-orange focus:outline-none transition-colors"
                          >
                            <option value="1-10">{t('1 - 10 Members', '1 - 10 أعضاء')}</option>
                            <option value="10-50">{t('10 - 50 Members', '10 - 50 عضواً')}</option>
                            <option value="50-250">{t('50 - 250 Members', '50 - 250 عضواً')}</option>
                            <option value="250+">{t('250+ Enterprise', '250+ مؤسسة كبرى')}</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t('Primary Project Goal', 'الهدف الرئيسي للمشروع')}
                          </label>
                          <select
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-xs sm:text-sm focus:border-brand-orange focus:outline-none transition-colors"
                          >
                            <option value="enterprise">{t('Enterprise Landing & Growth', 'صفحة هبوط مؤسسية ونمو')}</option>
                            <option value="fintech">{t('FinTech High Velocity Flow', 'تدفقات مالية فائقة السرعة')}</option>
                            <option value="replatform">{t('Platform Re-architecture', 'إعادة هندسة وتطوير المنصة')}</option>
                            <option value="performance">{t('Speed & Conversion Boost', 'مضاعفة السرعة ومعدل التحويل')}</option>
                          </select>
                        </div>
                      </div>

                      {/* Optional Note Field */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t('Project Brief / Notes (Optional)', 'نبذة عن المشروع أو الملاحظات (اختياري)')}
                        </label>
                        <textarea
                          rows={2}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t('Tell us about your timeline, targets, or current stack...', 'أخبرنا عن أهدافك أو الإطار الزمني المتوقع للمشروع...')}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:border-brand-orange focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit CTA Button */}
                      <motion.button
                        type="submit"
                        disabled={formState === 'submitting'}
                        whileHover={formState === 'submitting' ? {} : { scale: 1.02 }}
                        whileTap={formState === 'submitting' ? {} : { scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orangeHover disabled:opacity-75 text-white font-extrabold text-sm shadow-glow-orange animate-glow-orange transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{t('Processing Application...', 'جارٍ معالجة الطلب...')}</span>
                          </>
                        ) : (
                          <>
                            <span>{t('Book My Discovery Call', 'حجز جلستي الاستشارية الآن')}</span>
                            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                          </>
                        )}
                      </motion.button>

                      {/* Assurance footnote */}
                      <p className="text-[11px] text-center text-slate-500">
                        {t('By submitting, you agree to our 100% confidential Enterprise Privacy Terms.', 'بإرسال الطلب، أنت توافق على شروط الخصوصية وحماية البيانات المؤسسية.')}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default LeadCaptureSection;
