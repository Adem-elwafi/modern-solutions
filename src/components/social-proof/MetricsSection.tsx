import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Users, Star, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * value;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold tabular-nums tracking-tight">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const MetricsSection: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      id: 'uptime',
      icon: ShieldCheck,
      iconColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      counter: { value: 99.9, decimals: 1, suffix: '%' },
      badge: t('Verified SLA', 'مستوى خدمة موثق'),
      label: t('Platform Reliability & Uptime', 'الجاهزية التشغيلية وموثوقية المنصة'),
      subtext: t('Zero critical incident failover across multi-cloud regions.', 'استمرارية تشغيل متواصلة دون انقطاع عبر سحابات موزعة متعددة.'),
    },
    {
      id: 'teams',
      icon: Users,
      iconColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      counter: { value: 10, decimals: 0, suffix: 'k+' },
      badge: t('Active Teams', 'فرق عمل نشطة'),
      label: t('Global Enterprise Teams', 'فرق ومؤسسات حول العالم'),
      subtext: t('Trusted by engineering and growth leaders in 48+ countries.', 'معتمد من قِبل قادة الهندسة والنمو التقني في أكثر من 48 دولة.'),
    },
    {
      id: 'rating',
      icon: Star,
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      counter: { value: 4.9, decimals: 1, suffix: '/5' },
      badge: t('2,400+ Reviews', '2,400+ تقييم'),
      label: t('Client Trust & Satisfaction', 'مؤشر رضا وثقة العملاء'),
      subtext: t('Consistently ranked #1 for velocity and technical performance.', 'تصنيف متميز باستمرار في كفاءة الأداء وسرعة التنفيذ التقني.'),
    },
    {
      id: 'revenue',
      icon: TrendingUp,
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      counter: { value: 12, decimals: 0, prefix: '$', suffix: 'M+' },
      badge: t('Net Value Added', 'قيمة مضافة محققة'),
      label: t('Pipeline & Revenue Generated', 'عوائد وتدفقات أرباح محققة للشركاء'),
      subtext: t('Average 3.4x conversion acceleration in the first 90 days.', 'تسريع لمعدلات التحويل بمعدل 3.4x خلال أول 90 يوماً من الإطلاق.'),
    },
  ];

  const clientLogos = [
    { name: 'ApexCloud', icon: '✦' },
    { name: 'NovaScale', icon: '◆' },
    { name: 'HyperFlow', icon: '▲' },
    { name: 'QuantumData', icon: '❖' },
    { name: 'Synapse', icon: '●' },
    { name: 'Vanguard', icon: '⬟' },
    { name: 'AetherSys', icon: '✷' },
    { name: 'PulseMetrics', icon: '◈' },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-brand-darkNavy text-white overflow-hidden border-t border-slate-800/80">
      {/* Background ambient radial blurs */}
      <div className="absolute top-0 start-1/4 -translate-y-1/2 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-1/4 translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Strip */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 w-full"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-brand-orange mb-4 backdrop-blur-sm">
            <Award className="w-3.5 h-3.5" />
            <span>{t('Measurable Business Impact', 'أثر تجاري ومخرجات ملموسة')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t(
              'Engineered for Scale, Proven by Results',
              'مصممة للتوسع والنمو، ومبرهنة بالأرقام'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t(
              'Explore how modern digital infrastructure and high-velocity engineering drive quantifiable market leadership.',
              'تعرف على كيفية مساهمة بنيتنا البرمجية المتقدمة في ترسيخ ريادة عملائنا ومضاعفة نموهم التقني.'
            )}
          </p>
        </motion.div>

        {/* 4 Animated Stat Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="relative group w-full p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm transition-all shadow-xl hover:shadow-2xl text-start"
              >
                {/* Glow highlight on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                    {item.badge}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 flex items-baseline">
                  <AnimatedCounter
                    value={item.counter.value}
                    decimals={item.counter.decimals}
                    prefix={item.counter.prefix}
                    suffix={item.counter.suffix}
                  />
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-1.5">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.subtext}
                </p>

                {/* Subtle bottom accent line */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-brand-teal font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('Audited Benchmark', 'معيار موثق ومدقق')}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Marquee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-slate-800/60"
        >
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8">
            {t(
              'Trusted by pioneering engineering teams and global enterprises',
              'موثوق من قِبل نخبة الشركات والمؤسسات التقنية الرائدة'
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {clientLogos.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 min-h-[44px] px-2 py-1 rounded-lg"
              >
                <span className="text-brand-orange text-lg group-hover:text-brand-teal transition-colors">
                  {client.icon}
                </span>
                <span className="text-sm sm:text-base font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default MetricsSection;
