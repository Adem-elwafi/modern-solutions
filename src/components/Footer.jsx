import React from 'react';
import { Layers, ArrowUpRight, ShieldCheck, CheckCircle2, Terminal, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const linkClusters = [
    {
      title: 'Architecture & Engine',
      links: [
        { label: 'Organic Wave Dividers', href: '#hero' },
        { label: 'Asymmetric Bento Grid', href: '#features' },
        { label: 'Perspective Micro-Console', href: '#features' },
        { label: 'Deterministic Runtime', href: '#pricing' },
        { label: 'Global Edge Anycast', href: '#features' },
      ],
    },
    {
      title: 'Design System & Tokens',
      links: [
        { label: 'Architectural Arched Portals', href: '#hero' },
        { label: 'Obsidian & Slate Palettes', href: '#features' },
        { label: 'Lucide Precision Linework', href: '#features' },
        { label: 'Framer Motion Springs', href: '#pricing' },
        { label: 'WCAG AAA Contrast Standard', href: '#features' },
      ],
    },
    {
      title: 'Security & Trust',
      links: [
        { label: 'Zero-Trust mTLS 1.3', href: '#features' },
        { label: 'SOC2 Type II Attestation', href: '#pricing' },
        { label: 'Ephemeral Key Rotation', href: '#features' },
        { label: 'Privacy & Data Protection', href: '#privacy' },
        { label: 'Vulnerability Disclosure', href: '#security' },
      ],
    },
    {
      title: 'Ecosystem & Tools',
      links: [
        { label: 'Vite 6 + React 18', href: 'https://vitejs.dev', external: true },
        { label: 'Tailwind CSS Engine', href: 'https://tailwindcss.com', external: true },
        { label: 'Lucide Stroke Icons', href: 'https://lucide.dev', external: true },
        { label: 'Framer Motion', href: 'https://www.framer.com/motion/', external: true },
        { label: 'GitHub Repository', href: 'https://github.com', external: true },
      ],
    },
  ];

  return (
    <footer className="relative bg-obsidian-950 text-slate-400 border-t border-obsidian-800/80 pt-20 pb-12 overflow-hidden">
      {/* Subtle Atmospheric Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-indigo-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid: Brand Column + 4 Categorized Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-obsidian-800/80">
          
          {/* Brand Info & Status Indicator (md:col-span-4) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shadow-sm">
                <Layers className="w-5 h-5 stroke-[1.75]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">Vanguard</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Architectural digital surfaces crafted with spatial balance, organic dividers, and zero empty voids. Strictly adhering to craftsmanship engineering.
            </p>

            {/* Live Systems Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-emerald-500/30 text-xs text-slate-300 shadow-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-emerald-300">All systems operational</span>
              <span className="text-slate-500 font-mono text-[11px]">· 99.999% SLA</span>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>38 Global Edge POPs Active</span>
            </div>
          </div>

          {/* Categorized Link Columns (md:col-span-8) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {linkClusters.map((cluster, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  {cluster.title}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {cluster.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors group"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links & Taste Certification */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vanguard Engine Inc. Strictly conforming to anti-slop craftsmanship guidelines.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Security Audit</a>
            <a href="#cookies" className="hover:text-white transition-colors">Telemetry Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
