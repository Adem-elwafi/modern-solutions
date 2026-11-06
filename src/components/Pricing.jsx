import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Building2,
  Zap,
  Lock
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Architecture',
      badge: 'Agile Teams',
      description: 'Foundational deterministic runtime for early-stage engineering teams.',
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      ctaText: 'Start 14-Day Free Trial',
      ctaVariant: 'outline',
      features: [
        'Up to 5 team collaborators',
        '50,000 monthly execution runs',
        '14-day telemetry audit traces',
        'Automatic SSL & edge routing',
        'Standard GitHub CI/CD webhooks',
        'Community Slack & docs access',
      ],
      assurance: 'No credit card required for 14 days',
    },
    {
      id: 'pro',
      name: 'Pro Flagship Scale',
      badge: 'Most Popular',
      description: 'High-throughput orchestration for fast-growing companies and distributed fleets.',
      monthlyPrice: 89,
      annualPrice: 72,
      popular: true,
      popularBadge: 'Flagship Edition',
      ctaText: 'Deploy Pro Architecture',
      ctaVariant: 'gradient',
      features: [
        'Up to 25 team collaborators',
        '500,000 monthly execution runs',
        'Sub-10ms global edge propagation',
        '90-day cold telemetry audit retention',
        'Zero-trust mTLS ephemeral certificates',
        'Automated multi-region failover',
        'Priority 24/7 technical engineering SLA',
        'Role-based granular access control (RBAC)',
      ],
      assurance: 'Instant activation with 30-day refund guarantee',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Sovereign',
      badge: 'Dedicated VPC',
      description: 'Isolated infrastructure, custom contractual SLAs, and sovereign compliance.',
      customPrice: 'Custom',
      popular: false,
      ctaText: 'Talk to Solutions Architect',
      ctaVariant: 'solid',
      features: [
        'Unlimited seats & dedicated workspaces',
        'Isolated single-tenant VPC deployment',
        'Contractual 99.999% uptime SLA',
        'SOC2 Type II, ISO 27001 & HIPAA reports',
        'Custom SSO/SAML & SCIM provisioning',
        'Dedicated Technical Account Manager',
        'Custom master service agreement & redlines',
        'Automated disaster recovery drill tooling',
      ],
      assurance: 'Tailored invoicing via PO or Wire',
    },
  ];

  const faqs = [
    {
      question: 'Can we switch plans or adjust seat allocations midway through a billing cycle?',
      answer:
        'Yes, seamlessly. When upgrading plans or adding team seats, changes take effect immediately with pro-rated billing. When scaling down, adjustments apply at the start of your subsequent billing period with zero cancellation penalties.',
    },
    {
      question: 'How does the 30-Day Money-Back Guarantee work?',
      answer:
        'If Vanguard does not tangibly elevate your deployment reliability and reduce latency within your first 30 days, simply contact our engineering support desk. We will refund 100% of your subscription immediately without bureaucratic friction.',
    },
    {
      question: 'Are there hidden surcharges for data transfer or execution bursts?',
      answer:
        'None. Quotas for execution runs, telemetry storage, and egress bandwidth are clearly stated upfront. If your infrastructure approaches 90% of your monthly allotment, you receive real-time notifications, and production traffic is never abruptly throttled.',
    },
    {
      question: 'Do you offer tailored agreements, custom SLAs, and custom SOC2 compliance reviews?',
      answer:
        'Yes. Our Enterprise Sovereign plan supports customized Master Service Agreements (MSAs), custom data processing agreements (DPAs), bespoke 99.999% uptime SLAs, vendor security questionnaires, and formal purchase order invoicing.',
    },
    {
      question: 'How does the Zero-Trust mTLS security architecture protect our workloads?',
      answer:
        'Every edge invocation runs inside a hardware-isolated micro-sandbox with short-lived ephemeral certificates rotated automatically via Curve25519 cryptography, guaranteeing complete tenant confidentiality.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="pricing" className="relative py-28 sm:py-36 bg-obsidian-950 text-slate-100 overflow-hidden border-t border-obsidian-800/60">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Predictable investment for <span className="text-gradient-accent italic font-serif">craftsmanship</span>.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Honest value, zero surprise overages, and uncompromising performance. Select the architecture calibrated for your scale.
          </p>

          {/* Animated Monthly / Annual Billing Toggle */}
          <div className="pt-6 flex items-center justify-center">
            <div className="relative flex items-center p-1.5 rounded-full bg-obsidian-900 border border-obsidian-800 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-5 py-2 text-xs font-semibold rounded-full transition-colors ${
                  billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {billingCycle === 'monthly' && (
                  <motion.div
                    layoutId="pricingBillingPill"
                    className="absolute inset-0 bg-obsidian-800 border border-obsidian-700 rounded-full"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">Billed Monthly</span>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`relative px-5 py-2 text-xs font-semibold rounded-full transition-colors flex items-center gap-2 ${
                  billingCycle === 'annual' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {billingCycle === 'annual' && (
                  <motion.div
                    layoutId="pricingBillingPill"
                    className="absolute inset-0 bg-indigo-600 rounded-full shadow-md shadow-indigo-600/30"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">Billed Annually</span>
                <span className="relative z-10 px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 shadow-sm">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3-TIER SAAS PRICING MATRIX
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-obsidian-900/95 border-2 border-indigo-500/70 shadow-glow shadow-card-dark lg:-translate-y-2'
                    : 'bg-obsidian-900/60 border border-obsidian-800 hover:border-obsidian-700 shadow-card-dark'
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold shadow-lg shadow-indigo-500/25 tracking-wide uppercase">
                    <Sparkles className="w-3 h-3 text-indigo-200" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                      <p className="text-xs text-slate-400 pt-1 leading-relaxed min-h-[34px]">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1.5 pb-2 border-b border-obsidian-800/80">
                    {plan.customPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-white tracking-tight">Custom</span>
                        <span className="text-xs text-slate-400 font-medium">/ bespoke deployment</span>
                      </div>
                    ) : (
                      <>
                        <span className="text-2xl font-bold text-slate-400 font-sans">$</span>
                        <span className="text-5xl font-extrabold text-white tracking-tight">{price}</span>
                        <span className="text-xs text-slate-400 font-medium">/ user / month</span>
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  {plan.ctaVariant === 'gradient' ? (
                    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-obsidian-950 bg-gradient-to-r from-indigo-300 via-white to-indigo-200 hover:brightness-105 shadow-lg shadow-indigo-500/20 transition-all duration-150 active:scale-[0.98]">
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : plan.ctaVariant === 'solid' ? (
                    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-obsidian-800 hover:bg-obsidian-700 border border-obsidian-700/80 transition-all active:scale-[0.98]">
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  ) : (
                    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-obsidian-950 hover:bg-obsidian-800 border border-obsidian-800 hover:border-obsidian-700 transition-all active:scale-[0.98]">
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  )}

                  {/* Feature Checklist with Lucide Stroke Checkmarks */}
                  <div className="space-y-3 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Included Capabilities
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.popular ? 'text-indigo-400' : 'text-emerald-400'
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Micro Assurance */}
                <div className="pt-6 mt-6 border-t border-obsidian-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{plan.assurance}</span>
                  <span className="font-mono text-indigo-400 font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-obsidian-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-slate-300 shadow-card-dark">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">30-Day Unconditional Money-Back Guarantee</p>
              <p className="text-slate-400 text-xs">
                Zero lock-ins. If your velocity doesn't measurably increase, receive a full refund with zero inquiries.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>SOC2 Type II Certified</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            INTEGRATED FAQ ACCORDION COMPANION
           ========================================================================= */}
        <div className="max-w-3xl mx-auto pt-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-900 border border-obsidian-800 text-slate-400 text-xs font-medium">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Conversion Objections Answered</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything you need to know about billing cadence, scaling guarantees, and enterprise compliance.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-obsidian-800/80 bg-obsidian-900/50 overflow-hidden transition-colors hover:border-obsidian-700/80 shadow-subtle"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-slate-200 hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-slate-400"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-obsidian-800/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
