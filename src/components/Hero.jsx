import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Sparkles,
  Cpu,
  Activity,
  Terminal,
  Zap,
  ShieldCheck,
  Workflow,
  Server,
  Layers,
} from 'lucide-react';

export default function Hero() {
  // Ambient twinkling stars positioned along the organic wave partition
  const ambientStars = [
    { top: '12%', right: '32%', delay: 0, size: 14, color: 'text-indigo-300' },
    { top: '24%', right: '46%', delay: 1.1, size: 10, color: 'text-sky-300' },
    { top: '44%', right: '16%', delay: 2.3, size: 12, color: 'text-violet-300' },
    { top: '62%', right: '36%', delay: 0.7, size: 16, color: 'text-sky-200' },
    { top: '76%', right: '22%', delay: 1.9, size: 11, color: 'text-indigo-200' },
    { top: '88%', right: '40%', delay: 2.8, size: 9, color: 'text-purple-300' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-obsidian-950 text-slate-100"
    >
      {/* =========================================================================
          BACKGROUND: The Organic Fluid Wave Divider (ClickUp Inspiration)
          Multi-tone gradient boundary separating content and killing the empty void
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          className="absolute -top-12 right-0 w-[150%] sm:w-[125%] lg:w-[68%] h-[125%] text-indigo-950/40 opacity-90 transition-all duration-700"
          viewBox="0 0 1000 1000"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Primary Multi-Tone Gradient: Indigo -> Violet -> Sky */}
            <linearGradient id="wave-gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.45" />
              <stop offset="48%" stopColor="#7c3aed" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.35" />
            </linearGradient>

            {/* Secondary Soft Layer Gradient for Dimensional Wave Depth */}
            <linearGradient id="wave-gradient-secondary" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#a855f7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
            </linearGradient>

            {/* Glowing Boundary Edge Line */}
            <linearGradient id="wave-stroke-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Layer 1: Secondary Background Wave Undulation */}
          <path
            d="M 220,0 C 420,240 100,520 340,780 C 440,890 620,940 1000,1000 L 1000,0 Z"
            fill="url(#wave-gradient-secondary)"
          />

          {/* Layer 2: Flagship Primary Organic Wave Divider */}
          <path
            d="M 320,0 C 510,260 210,550 420,840 C 490,920 700,960 1000,1000 L 1000,0 Z"
            fill="url(#wave-gradient-primary)"
          />

          {/* Layer 3: Organic Boundary Contour Stroke */}
          <path
            d="M 320,0 C 510,260 210,550 420,840 C 490,920 700,960 1000,1000"
            stroke="url(#wave-stroke-gradient)"
            strokeWidth="1.75"
            fill="none"
            opacity="0.8"
          />
        </svg>

        {/* Ambient Atmospheric Radial Glows */}
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-indigo-600/20 blur-[150px] rounded-full" />
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-violet-600/15 blur-[130px] rounded-full" />
        <div className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-sky-600/10 blur-[140px] rounded-full" />

        {/* Subtle Animated Ambient Stars / Twinkles in the Wave Partition */}
        {ambientStars.map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute hidden sm:block pointer-events-none"
            style={{ top: star.top, right: star.right }}
            animate={{
              opacity: [0.2, 0.95, 0.2],
              scale: [0.85, 1.25, 0.85],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
          >
            <svg
              width={star.size}
              height={star.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${star.color} drop-shadow-[0_0_10px_rgba(129,140,248,0.7)]`}
            >
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* =========================================================================
          HERO CONTENT CONTAINER: Contained envelope preventing void drift
         ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* -------------------------------------------------------------------
              LEFT COLUMN: Value Proposition & Editorial Typography
             ------------------------------------------------------------------- */}
          <motion.div
            className="lg:col-span-6 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide shadow-sm shadow-indigo-500/10">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Next-Gen Enterprise Architecture</span>
            </div>

            {/* Typographic Headline with Italic Serif Accent on ONE keyword */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Build tailored software that fits your{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-300 to-sky-300">
                ambition.
              </span>
            </h1>

            {/* Subhead with strict line length limit */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Eliminate architectural friction and empty voids. We engineer high-velocity digital products, robust distributed systems, and bespoke platforms built for uncompromising performance.
            </p>

            {/* Action Button CTA Group (Touch target >= 44px) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-full font-semibold text-sm text-slate-950 bg-gradient-to-r from-white via-slate-100 to-indigo-100 hover:brightness-105 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Start Free Discovery</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full font-medium text-sm text-slate-200 bg-obsidian-900/80 hover:bg-obsidian-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 backdrop-blur-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/30" />
                <span>See Architecture (2m)</span>
              </a>
            </div>

            {/* Trust Points (Replaces generic fake stats counter) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Sub-15ms Global FIX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Vendor Lock-In</span>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: Layered Interactive Showcase with Animatable SVG
             ------------------------------------------------------------------- */}
          <motion.div
            className="lg:col-span-6 relative mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Primary Interactive Showcase Container */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-indigo-500/25 via-slate-800/40 to-slate-900/60 shadow-2xl backdrop-blur-xl border border-white/10">
              <div className="rounded-[22px] bg-obsidian-900/90 border border-slate-800/80 overflow-hidden shadow-inner">
                
                {/* Window Header / Controls */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-obsidian-950/70">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>vanguard / orchestrator / engine.v2</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active</span>
                  </div>
                </div>

                {/* ===============================================================
                    ANIMATABLE SVG ARTWORK: High-Precision Modern Tech System
                   =============================================================== */}
                <div className="relative p-4 sm:p-6 bg-gradient-to-b from-slate-950/50 to-obsidian-900/80">
                  <svg
                    className="w-full h-auto aspect-[16/10] select-none"
                    viewBox="0 0 540 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Grid Pattern */}
                      <pattern id="grid-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.4" />
                      </pattern>

                      {/* Radial Core Glow */}
                      <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                      </radialGradient>

                      {/* Stream Line Gradients */}
                      <linearGradient id="stream-a" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>

                      <linearGradient id="stream-b" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>

                      {/* Telemetry Area Fill Gradient */}
                      <linearGradient id="telemetry-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Dotted Backdrop */}
                    <rect width="540" height="320" fill="url(#grid-dots)" />

                    {/* Telemetry Growth Fill & Curve */}
                    <path
                      d="M 30,290 C 130,280 180,250 270,230 C 360,210 430,170 510,130 L 510,290 L 30,290 Z"
                      fill="url(#telemetry-gradient)"
                    />
                    <motion.path
                      d="M 30,290 C 130,280 180,250 270,230 C 360,210 430,170 510,130"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />

                    {/* Outer Rotating Orbital Ring */}
                    <motion.g
                      style={{ transformOrigin: '270px 150px' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                      <circle
                        cx="270"
                        cy="150"
                        r="110"
                        stroke="rgba(129, 140, 248, 0.25)"
                        strokeWidth="1.5"
                        strokeDasharray="6 8"
                        fill="none"
                      />
                      {/* Satellite Node on Outer Orbit */}
                      <circle cx="380" cy="150" r="5" fill="#38bdf8" />
                      <circle cx="160" cy="150" r="4" fill="#a855f7" />
                    </motion.g>

                    {/* Inner Counter-Rotating Orbital Ring */}
                    <motion.g
                      style={{ transformOrigin: '270px 150px' }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    >
                      <circle
                        cx="270"
                        cy="150"
                        r="72"
                        stroke="rgba(56, 189, 248, 0.35)"
                        strokeWidth="1.5"
                        strokeDasharray="4 6"
                        fill="none"
                      />
                      {/* Pulse Node on Inner Orbit */}
                      <circle cx="270" cy="78" r="4.5" fill="#818cf8" />
                      <circle cx="270" cy="222" r="3.5" fill="#34d399" />
                    </motion.g>

                    {/* Bezier Data Streams connecting Core to External Nodes */}
                    <motion.path
                      d="M 270,150 C 200,90 140,110 80,80"
                      stroke="url(#stream-a)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray="6 6"
                      animate={{ strokeDashoffset: [0, -24] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />

                    <motion.path
                      d="M 270,150 C 350,90 410,100 460,70"
                      stroke="url(#stream-b)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray="6 6"
                      animate={{ strokeDashoffset: [0, -24] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                    />

                    <motion.path
                      d="M 270,150 C 240,220 180,240 100,250"
                      stroke="url(#stream-a)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray="6 6"
                      animate={{ strokeDashoffset: [0, -24] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Central Engine Core / Radiant Hub */}
                    <circle cx="270" cy="150" r="44" fill="url(#core-glow)" />

                    {/* Breathing Core Ring */}
                    <motion.circle
                      cx="270"
                      cy="150"
                      r="26"
                      stroke="#818cf8"
                      strokeWidth="2"
                      fill="#0f172a"
                      animate={{
                        r: [24, 28, 24],
                        strokeWidth: [2, 3, 2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Central Glyph */}
                    <circle cx="270" cy="150" r="12" fill="#6366f1" />
                    <circle cx="270" cy="150" r="5" fill="#ffffff" />

                    {/* Service Node A (Top Left: Edge Gateway) */}
                    <g transform="translate(45, 60)">
                      <rect
                        width="88"
                        height="34"
                        rx="10"
                        fill="#0f172a"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <circle cx="16" cy="17" r="4" fill="#34d399" />
                      <text x="28" y="16" fill="#f8fafc" fontSize="10" fontWeight="600" fontFamily="sans-serif">Edge Mesh</text>
                      <text x="28" y="26" fill="#94a3b8" fontSize="8" fontFamily="monospace">9.4ms p99</text>
                    </g>

                    {/* Service Node B (Top Right: Vector Engine) */}
                    <g transform="translate(415, 52)">
                      <rect
                        width="96"
                        height="34"
                        rx="10"
                        fill="#0f172a"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <circle cx="16" cy="17" r="4" fill="#818cf8" />
                      <text x="28" y="16" fill="#f8fafc" fontSize="10" fontWeight="600" fontFamily="sans-serif">Vector Index</text>
                      <text x="28" y="26" fill="#94a3b8" fontSize="8" fontFamily="monospace">1.2B Synced</text>
                    </g>

                    {/* Telemetry Metric Pill on Curve Apex */}
                    <g transform="translate(455, 114)">
                      <rect
                        width="70"
                        height="24"
                        rx="6"
                        fill="#10b981"
                        fillOpacity="0.15"
                        stroke="#10b981"
                        strokeWidth="1"
                      />
                      <text x="8" y="16" fill="#34d399" fontSize="10" fontWeight="700" fontFamily="sans-serif">
                        +142% Speed
                      </text>
                    </g>
                  </svg>

                  {/* Micro Telemetry Bar Below SVG */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-slate-900/50 border border-slate-800/50">
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Throughput</p>
                      <p className="text-xs font-semibold text-white mt-0.5">48.2k msg/s</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/50 border border-slate-800/50">
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Latency</p>
                      <p className="text-xs font-semibold text-emerald-400 mt-0.5">&lt; 12ms direct</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/50 border border-slate-800/50">
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Deploy Mode</p>
                      <p className="text-xs font-semibold text-indigo-300 mt-0.5">Hot-Swap</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ===================================================================
                FLOATING CARD 1: Customer Testimonial Review Card (ClickUp style)
               =================================================================== */}
            <motion.div
              className="relative mt-4 sm:mt-0 sm:absolute sm:-bottom-7 sm:-left-6 lg:-bottom-8 lg:-left-8 p-4 rounded-2xl bg-obsidian-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl max-w-full sm:max-w-[290px] space-y-2 z-20"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Partner
                </span>
              </div>
              <p className="text-xs text-slate-300 font-normal italic leading-relaxed">
                “Cut our sprint delivery cycles by 64% and eliminated architectural voids completely.”
              </p>
              <div className="flex items-center gap-2.5 pt-1 border-t border-slate-800">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  ER
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-white">Elena Rostova</p>
                  <p className="text-[10px] text-slate-400">VP of Platform, Apex Labs</p>
                </div>
              </div>
            </motion.div>

            {/* ===================================================================
                FLOATING CARD 2: Live Latency / Metric Badge (Agency style)
               =================================================================== */}
            <motion.div
              className="hidden sm:flex absolute -top-6 -right-4 sm:-top-8 sm:-right-6 p-3.5 rounded-2xl bg-obsidian-900/95 border border-indigo-500/30 shadow-2xl backdrop-blur-xl max-w-[220px] flex-col gap-1 z-20"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Edge Routing</span>
                </div>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <div className="flex items-baseline gap-1 pt-0.5">
                <span className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  9.4 ms
                </span>
                <span className="text-[10px] text-slate-400 font-mono">p99</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Direct FIX over 38 worldwide edge POPs with 99.999% SLA.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
