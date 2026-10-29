import React, { useState } from 'react';
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  const navColumns = [
    {
      titleEn: 'Product',
      titleAr: 'المنتج',
      links: [
        { nameEn: 'Architecture Overview', nameAr: 'نظرة عامة على البنية', badge: null },
        { nameEn: 'High Velocity Engine', nameAr: 'محرك السرعة الفائقة', badge: t('v2.4', 'إصدار 2.4') },
        { nameEn: 'Conversion Components', nameAr: 'مكونات تعزيز التحويل', badge: null },
        { nameEn: 'Enterprise Security', nameAr: 'أمان المؤسسات والبيانات', badge: null },
        { nameEn: 'Global Edge Network', nameAr: 'شبكة الحوسبة السحابية الموزعة', badge: null },
      ],
    },
    {
      titleEn: 'Solutions',
      titleAr: 'الحلول',
      links: [
        { nameEn: 'FinTech & Banking', nameAr: 'التقنية المالية والمصرفية', badge: null },
        { nameEn: 'SaaS & Cloud Platforms', nameAr: 'منصات البرمجيات السحابية', badge: null },
        { nameEn: 'E-Commerce Infrastructure', nameAr: 'البنية الرقمية للتجارة', badge: null },
        { nameEn: 'Enterprise Replatforming', nameAr: 'إعادة بناء منصات المؤسسات', badge: t('Popular', 'الأكثر طلباً') },
        { nameEn: 'Custom Micro-Frontends', nameAr: 'واجهات الأنظمة المعيارية', badge: null },
      ],
    },
    {
      titleEn: 'Resources',
      titleAr: 'المصادر',
      links: [
        { nameEn: 'Engineering Documentation', nameAr: 'التوثيق الهندسي والتقني', badge: null },
        { nameEn: 'Interactive API Reference', nameAr: 'مرجع واجهات البرمجة API', badge: null },
        { nameEn: 'Design Tokens & System', nameAr: 'نظام ومحددات التصميم', badge: null },
        { nameEn: 'Case Studies & Benchmarks', nameAr: 'دراسات الحالة ومؤشرات الأداء', badge: null },
        { nameEn: 'Architecture Playbook', nameAr: 'دليل أفضل الممارسات', badge: t('New', 'جديد') },
      ],
    },
    {
      titleEn: 'Company',
      titleAr: 'الشركة',
      links: [
        { nameEn: 'About Our Mission', nameAr: 'عن الشركة ورؤيتنا', badge: null },
        { nameEn: 'Executive Leadership', nameAr: 'القيادة التنفيذية', badge: null },
        { nameEn: 'Global Careers', nameAr: 'فرص التوظيف العالمية', badge: t('Hiring', 'نوظف الآن') },
        { nameEn: 'Press & Media Kit', nameAr: 'المركز الإعلامي والأخبار', badge: null },
        { nameEn: 'Contact Support', nameAr: 'تواصل مع الدعم الفني', badge: null },
      ],
    },
  ];

  const complianceBadges = [
    { labelEn: 'SOC2 Type II Certified', labelAr: 'معتمد SOC2 Type II' },
    { labelEn: 'ISO 27001 Security', labelAr: 'معيار ISO 27001' },
    { labelEn: 'GDPR & Privacy Ready', labelAr: 'متوافق مع GDPR والخصوصية' },
    { labelEn: '99.99% Uptime Guarantee', labelAr: 'ضمان تشغيل 99.99%' },
  ];

  return (
    <footer className="relative bg-[#070D1F] text-slate-300 border-t border-slate-800/80 overflow-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
      <div className="absolute top-0 start-1/3 -translate-y-1/2 w-96 h-32 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter & Brand Header Bar */}
        <div className="pb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-3 text-start">
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-2 group">
                <span className="text-2xl font-black tracking-tight text-white">
                  Business<span className="text-brand-orange">.</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                  Modern
                </span>
              </a>

              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t('All Systems Operational 99.99%', 'جميع الأنظمة تعمل بكفاءة 99.99%')}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {t(
                'Next-generation digital infrastructure, performant software architecture, and high-converting landing pages built for modern scale.',
                'بنية رقمية متطورة، وهندسة برمجية فائقة الكفاءة، وصفحات هبوط مصممة خصيصاً لمضاعفة نمو الأعمال التقنية الحديثة.'
              )}
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 lg:text-end">
            <h4 className="text-sm font-bold text-white mb-1.5">
              {t('Subscribe to Architecture Insights', 'اشترك في النشرة الهندسية المتخصصة')}
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              {t(
                'Quarterly deep-dives on high-load scaling, frontend speed, and conversion design.',
                'تحليلات ربع سنوية في معايير التوسع وسرعة الواجهات وهندسة التحويل.'
              )}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full sm:w-auto gap-2.5">
              <div className="relative flex-grow sm:w-72">
                <Mail className="absolute top-1/2 start-3 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t('Enter your work email', 'أدخل بريدك المهني')}
                  className="w-full min-h-[44px] ps-9 pe-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-brand-orange focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="min-h-[44px] py-2.5 px-5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-bold shadow-glow-orange animate-glow-orange hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('Subscribed!', 'تم الاشتراك!')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('Join', 'انضمام')}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* 4 Navigation Columns */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
          {navColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {t(col.titleEn, col.titleAr)}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                        {t(link.nameEn, link.nameAr)}
                      </span>
                      {link.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise Compliance Strip */}
        <div className="pt-8 pb-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
            {complianceBadges.map((badge, bIdx) => (
              <div key={bIdx} className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                <span>{t(badge.labelEn, badge.labelAr)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('Global Multi-Region CDN', 'شبكة توزيع سحابية موزعة عالمياً')}</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {CURRENT_YEAR} Business Modern Inc. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs">
            <a href="#" className="hover:text-slate-300 transition-colors">
              {t('Privacy Policy', 'سياسة الخصوصية')}
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              {t('Terms of Service', 'شروط الخدمة')}
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              {t('Security Safeguards', 'معايير الحماية والأمان')}
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              {t('Cookie Preferences', 'تفضيلات ملفات تعريف الارتباط')}
            </a>
          </div>

          {/* Social Icons (SVGs with zero external dependencies) */}
          <div className="flex items-center gap-2.5">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
