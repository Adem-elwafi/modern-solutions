import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  Globe,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Layers,
  Terminal,
  Server,
  RefreshCw,
  Search,
  Check,
  Copy
} from 'lucide-react';

export default function Features() {
  // Card 1: Interactive Execution Pipeline State
  const [activePipelineStep, setActivePipelineStep] = useState(1);
  const pipelineSteps = [
    {
      id: 0,
      title: 'AST Parsing & Synthesis',
      duration: '42ms',
      status: 'Verified',
      detail: 'Deterministic syntax tree compiled with zero runtime overhead and bytecode validation.',
      metrics: 'Memory: 18.2 MB · Threads: 16',
    },
    {
      id: 1,
      title: 'Multi-Region Canary Matrix',
      duration: '118ms',
      status: 'Active',
      detail: 'Gradual zero-downtime traffic shift deployed across 38 global edge POPs simultaneously.',
      metrics: 'Rollback buffer: armed · Drift: 0.00%',
    },
    {
      id: 2,
      title: 'Zero-Trust mTLS Handshake',
      duration: '14ms',
      status: 'Enforced',
      detail: 'Hardware-backed ephemeral certificate rotation using Curve25519 cryptographic keys.',
      metrics: 'Cipher: ChaCha20-Poly1305 · TLS 1.3',
    },
    {
      id: 3,
      title: 'Real-Time Edge Ingestion',
      duration: '6ms',
      status: 'Synchronized',
      detail: 'CRDT state propagation synchronized to Tokyo, Frankfurt, and Virginia under 15ms.',
      metrics: 'Sync SLA: 99.999% · P99: 8.2ms',
    },
  ];

  // Card 2: Security & Fingerprint State
  const [copiedFingerprint, setCopiedFingerprint] = useState(false);
  const handleCopyFingerprint = () => {
    navigator.clipboard?.writeText('SHA256:7f9a2b8e4c1d03fa65e9b8821d3f0a44e');
    setCopiedFingerprint(true);
    setTimeout(() => setCopiedFingerprint(false), 2000);
  };

  // Card 3: Metrics Sparkline Timeframe State
  const [activeTimeframe, setActiveTimeframe] = useState('24H');
  const metricData = {
    '1H': {
      p99: '6.8ms',
      throughput: '164,280 req/s',
      errorRate: '0.0004%',
      points: 'M0 38 Q 25 15, 50 28 T 100 8 T 150 20 T 200 4 T 250 18 T 300 10',
      areaPoints: 'M0 38 Q 25 15, 50 28 T 100 8 T 150 20 T 200 4 T 250 18 T 300 10 L 300 50 L 0 50 Z',
    },
    '24H': {
      p99: '8.4ms',
      throughput: '142,500 req/s',
      errorRate: '0.0008%',
      points: 'M0 32 Q 30 40, 60 18 T 120 28 T 180 12 T 240 22 T 300 6',
      areaPoints: 'M0 32 Q 30 40, 60 18 T 120 28 T 180 12 T 240 22 T 300 6 L 300 50 L 0 50 Z',
    },
    '7D': {
      p99: '9.2ms',
      throughput: '138,910 req/s',
      errorRate: '0.0011%',
      points: 'M0 25 Q 40 10, 80 30 T 160 15 T 220 35 T 260 12 T 300 18',
      areaPoints: 'M0 25 Q 40 10, 80 30 T 160 15 T 220 35 T 260 12 T 300 18 L 300 50 L 0 50 Z',
    },
  };

  // Card 4: Edge Routing Matrix Filter State
  const [activeRegion, setActiveRegion] = useState('Global');
  const regions = [
    { id: 'Global', label: 'Global Mesh', nodes: 38, avgPing: '11.2ms', status: 'Optimal' },
    { id: 'Americas', label: 'US-East (IAD)', nodes: 14, avgPing: '4.1ms', status: 'Optimal' },
    { id: 'Europe', label: 'EU-Central (FRA)', nodes: 12, avgPing: '5.8ms', status: 'Optimal' },
    { id: 'Asia', label: 'AP-East (NRT)', nodes: 12, avgPing: '9.6ms', status: 'Optimal' },
  ];

  return (
    <section id="features" className="relative py-28 sm:py-36 bg-obsidian-950 text-slate-100 overflow-hidden border-t border-obsidian-800/60">
      {/* Ambient Atmospheric Lighting & Organic Wave Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-24 w-[600px] h-[600px] bg-sky-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Asymmetric Bento Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered with <span className="text-gradient-accent italic font-serif">structural</span> precision.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Eliminate hollow templates. Every module combines tactile interactive state, live telemetry indicators, and hardware-enforced isolation.
          </p>
        </div>

        {/* =========================================================================
            BENTO GRID ENGINE (4 High-Craft Asymmetric Cards)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Interactive Execution Pipeline Engine (8 cols) */}
          <div className="lg:col-span-8 rounded-bento bg-obsidian-900/90 border border-obsidian-700/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-card-dark group hover:border-indigo-500/50 transition-all duration-300">
            <div className="space-y-4 z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                  <Zap className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Deterministic Orchestration</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Continuous Autonomous Pipeline</h3>
                <p className="text-sm text-slate-300 pt-1 leading-relaxed max-w-xl">
                  Inspect every compilation lifecycle stage in real time. Switch stages below to explore verified execution traces and rollback buffers.
                </p>
              </div>
            </div>

            {/* Interactive Step Selector */}
            <div className="mt-8 pt-6 border-t border-obsidian-800/90 z-10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Execution Trace Inspector (Click to inspect)</span>
                <span className="text-indigo-400 font-mono">Stage {activePipelineStep + 1} of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pipelineSteps.map((step) => {
                  const isSelected = activePipelineStep === step.id;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActivePipelineStep(step.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs transition-all flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-obsidian-800 border-indigo-500/80 shadow-lg shadow-indigo-500/10 text-white'
                          : 'bg-obsidian-950/60 border-obsidian-800 text-slate-300 hover:bg-obsidian-800/60 hover:border-obsidian-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2 font-semibold">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-emerald-400'}`} />
                          <span className="truncate">{step.title}</span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-obsidian-900 border border-obsidian-700">
                          {step.duration}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 truncate w-full">{step.metrics}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Real-time Drawer */}
              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-obsidian-800/80 mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white font-mono">{pipelineSteps[activePipelineStep].title}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {pipelineSteps[activePipelineStep].status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {pipelineSteps[activePipelineStep].detail}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    Latency: {pipelineSteps[activePipelineStep].duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
          </div>

          {/* Card 2: Security & Zero-Trust Compliance (4 cols) */}
          <div className="lg:col-span-4 rounded-bento bg-obsidian-900/90 border border-obsidian-700/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-card-dark group hover:border-emerald-500/50 transition-all duration-300">
            <div className="space-y-4 z-10">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Zero-Trust mTLS Isolation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hardware-enforced sandboxes with automatic rotating certificates, payload confidentiality, and strict egress filtering.
              </p>
            </div>

            {/* Security Badge Visual Container */}
            <div className="mt-8 p-4 rounded-2xl bg-obsidian-950/80 border border-obsidian-800 space-y-3 z-10">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">mTLS 1.3 Strict Mode</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE
                </span>
              </div>

              {/* Animated Pulse Line */}
              <div className="h-1.5 w-full bg-obsidian-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-full animate-pulse" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400 font-mono truncate max-w-[190px]">
                  SHA-256: 7f9a...0a44e
                </span>
                <button
                  type="button"
                  onClick={handleCopyFingerprint}
                  className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-obsidian-800"
                  title="Copy Certificate Fingerprint"
                >
                  {copiedFingerprint ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Compliance Pills */}
            <div className="mt-4 pt-4 border-t border-obsidian-800 flex items-center justify-between text-[11px] text-slate-400 z-10">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> SOC2 Type II
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> ISO 27001
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> HIPAA
              </span>
            </div>

            <div className="absolute -right-16 -top-16 w-60 h-60 bg-emerald-500/10 blur-[90px] pointer-events-none rounded-full" />
          </div>

          {/* Card 3: Real-Time Metrics Sparkline with Live Telemetry (4 cols) */}
          <div className="lg:col-span-4 rounded-bento bg-obsidian-900/90 border border-obsidian-700/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-card-dark group hover:border-amber-500/50 transition-all duration-300">
            <div className="space-y-4 z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Activity className="w-5 h-5 stroke-[1.75]" />
                </div>
                {/* Timeframe Selector Pill */}
                <div className="flex items-center p-0.5 rounded-lg bg-obsidian-950 border border-obsidian-800">
                  {['1H', '24H', '7D'].map((tf) => (
                    <button
                      key={tf}
                      type="button"
                      onClick={() => setActiveTimeframe(tf)}
                      className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded transition-colors ${
                        activeTimeframe === tf
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Real-Time Telemetry</h3>
                <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                  Sub-10ms global edge propagation with continuous synthetic ping validation.
                </p>
              </div>
            </div>

            {/* Sparkline Graph Preview */}
            <div className="mt-6 p-4 rounded-2xl bg-obsidian-950/80 border border-obsidian-800 space-y-3 z-10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">P99 Edge Latency</span>
                <span className="font-mono text-amber-400 font-bold text-sm">
                  {metricData[activeTimeframe].p99}
                </span>
              </div>

              {/* Custom SVG Sparkline Curve with Area Fill */}
              <div className="w-full h-14 relative flex items-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={metricData[activeTimeframe].areaPoints}
                    fill="url(#sparklineGrad)"
                    className="transition-all duration-500"
                  />
                  <path
                    d={metricData[activeTimeframe].points}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-500"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-obsidian-800">
                <span>Throughput: {metricData[activeTimeframe].throughput}</span>
                <span className="text-emerald-400 font-mono">Err: {metricData[activeTimeframe].errorRate}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 z-10">
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Feed Active
              </span>
              <span className="font-mono text-slate-400 text-[11px]">SLA 99.999%</span>
            </div>

            <div className="absolute -left-16 -bottom-16 w-60 h-60 bg-amber-500/10 blur-[90px] pointer-events-none rounded-full" />
          </div>

          {/* Card 4: Global Edge Routing Matrix (8 cols) */}
          <div className="lg:col-span-8 rounded-bento bg-obsidian-900/90 border border-obsidian-700/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-card-dark group hover:border-sky-500/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 z-10">
              <div className="space-y-3 max-w-lg">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400">
                  <Globe className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Global Anycast Routing Matrix</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Traffic automatically resolves to the geographically nearest cluster with dynamic BGP route optimization and HTTP/3 multiplexing.
                </p>
              </div>

              {/* Regional Selector Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-obsidian-950 border border-obsidian-800 self-start">
                {regions.map((reg) => (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => setActiveRegion(reg.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeRegion === reg.id
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {reg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Edge Routing Metrics Grid */}
            <div className="mt-8 pt-6 border-t border-obsidian-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 z-10">
              {[
                { label: 'Active Edge Nodes', value: `${regions.find(r => r.id === activeRegion)?.nodes || 38} POPs`, detail: '100% Operational' },
                { label: 'Median Hop Latency', value: regions.find(r => r.id === activeRegion)?.avgPing || '8.4ms', detail: 'Sub-15ms guaranteed' },
                { label: 'Transport Protocol', value: 'HTTP/3 QUIC', detail: 'Zero RTT handshake' },
                { label: 'Failover Window', value: '< 200ms', detail: 'Automated rerouting' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-obsidian-950/70 border border-obsidian-800 space-y-1">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{item.label}</p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                  <p className="text-[10px] text-sky-400 font-mono">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-sky-500/10 blur-[100px] pointer-events-none rounded-full" />
          </div>

        </div>

        {/* =========================================================================
            PERSPECTIVE UI MICRO-SHOWCASE (SEO & Command Console Engine)
           ========================================================================= */}
        <div className="relative pt-12">
          {/* Header Badge */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
              <Terminal className="w-3.5 h-3.5" />
              <span>Perspective Command Console</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Tactile observation at every scale.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Inspect production queries, indexing velocity, and network health without context-switching.
            </p>
          </div>

          {/* Perspective Console Stage */}
          <div className="relative max-w-5xl mx-auto">
            {/* The Main Console Frame */}
            <div className="rounded-2xl border border-obsidian-700/90 bg-obsidian-900/95 shadow-arch-dark overflow-hidden backdrop-blur-md">
              {/* Window Header / Searchbar */}
              <div className="px-5 py-3.5 bg-obsidian-950/80 border-b border-obsidian-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-lg bg-obsidian-900 border border-obsidian-800 text-xs font-mono text-slate-400 w-64 sm:w-80">
                  <Search className="w-3.5 h-3.5 text-slate-500" />
                  <span className="truncate">console.vanguard.io/telemetry/nodes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">LIVE STREAM</span>
                </div>
              </div>

              {/* Console Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-obsidian-950/80 border border-obsidian-800 space-y-1">
                    <p className="text-xs text-slate-400">Indexed Edge Workloads</p>
                    <p className="text-2xl font-bold text-white font-mono">14,820</p>
                    <p className="text-[11px] text-emerald-400 font-medium">↑ 18.4% this cycle</p>
                  </div>
                  <div className="p-4 rounded-xl bg-obsidian-950/80 border border-obsidian-800 space-y-1">
                    <p className="text-xs text-slate-400">Active Ingress RPS</p>
                    <p className="text-2xl font-bold text-white font-mono">482,900</p>
                    <p className="text-[11px] text-emerald-400 font-medium">↑ 34.2% global gain</p>
                  </div>
                  <div className="p-4 rounded-xl bg-obsidian-950/80 border border-obsidian-800 space-y-1">
                    <p className="text-xs text-slate-400">Lighthouse Performance</p>
                    <p className="text-2xl font-bold text-white font-mono">99 / 100</p>
                    <p className="text-[11px] text-indigo-400 font-medium">Top 1% category SLA</p>
                  </div>
                </div>

                {/* Simulated Telemetry Query Table */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Active Production Edge Traces
                  </p>
                  {[
                    { query: "GET /api/v2/telemetry/crdt-sync", rank: "200 OK", latency: "3.2ms", region: "FRA-1" },
                    { query: "POST /v1/auth/mtls-ephemeral-handshake", rank: "201 CREATED", latency: "7.8ms", region: "IAD-2" },
                    { query: "GET /graphql/edge-catalog/cached", rank: "304 NOT_MODIFIED", latency: "1.1ms", region: "NRT-1" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-obsidian-950/60 border border-obsidian-800/80 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="font-mono text-slate-200 truncate">{row.query}</span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                        <span className="text-slate-400 font-mono text-[11px]">{row.region}</span>
                        <span className="font-mono text-indigo-300 text-[11px]">{row.latency}</span>
                        <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                          {row.rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Micro-Card 1: Verified Security Pill */}
            <div className="hidden lg:flex absolute -top-6 -right-6 items-center gap-3 p-3.5 rounded-2xl bg-obsidian-900/95 border border-indigo-500/40 shadow-2xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <ShieldCheck className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white">mTLS Validated</p>
                <p className="text-[10px] text-slate-400">0 trust violations</p>
              </div>
            </div>

            {/* Floating Micro-Card 2: Live Speed Dial */}
            <div className="hidden lg:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-obsidian-900/95 border border-emerald-500/40 shadow-2xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white">99.999% SLA</p>
                <p className="text-[10px] text-emerald-400">38 regions synced</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
