# Responsive Architecture & Layout Rules

> **Status:** Production-Ready Standard  
> **Source of Truth:** Client Taste Dossier (`taste.docx`), Multi-Device Harmony Principles  
> **Target Breakpoints:** Mobile (<768px), Tablet (768px–1024px), Desktop (1024px–1440px), Ultrawide (1440px+)  

---

## 1. Core Philosophy: Multi-Device Intentionality

A core failure highlighted in the client's critiques (e.g. Sadek and Pepsi examples) is that desktop layouts stretched carelessly across screens, isolating headlines from visual assets and leaving huge dead voids. Conversely, when compressed naively to mobile, generic designs simply collapse into a monotonous vertical list of squares.

In our system, **every breakpoint is treated as an intentional, custom-crafted architectural composition**:

* **Desktop (1024px+):** Fluid organic wave dividers and asymmetric Bento grids connect content zones and prevent horizontal drift.
* **Tablet (768px–1024px):** As praised in the client's MK Kitchens review (*"in the tablet and phone it looks well, the styled image looks better than just square in right that doesn't feel synchronized with the vibe"*), architectural frames adapt their curvature and preserve visual balance without squeezing text.
* **Mobile (<768px):** Layered preview cards tuck neatly beneath or overlap the main visual frame. Wave dividers subtly frame the background, touch targets meet or exceed 44×44px, and typography scales fluidly without awkward line breaks.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   RESPONSIVE TRANSFORMATION PIPELINE                   │
│                                                                        │
│   DESKTOP (1024px+)             TABLET (768px - 1024px)   MOBILE (<768px)
│  ┌──────────┬──────────┐       ┌──────────┬──────────┐    ┌──────────┐ │
│  │ Text &   │ Wave &   │       │ Text &   │ Scaled   │    │ Text &   │ │
│  │ Actions  │ Arch     │  ──►  │ Actions  │ Arch     │ ──►│ Actions  │ │
│  │          │ Frame    │       │ (tight)  │ Frame    │    ├──────────┤ │
│  └──────────┴──────────┘       └──────────┴──────────┘    │ Inset    │ │
│                                                           │ Arch     │ │
│                                                           │ Frame    │ │
│                                                           └──────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Breakpoint Definitions & Constraints

We adhere to Tailwind's canonical breakpoint scale, with strict layout rules enforced for each tier:

| Breakpoint Tier | Pixel Range | Tailwind Prefix | Layout Grid & Spacing Constraints |
| :--- | :--- | :--- | :--- |
| **Mobile Compact** | `< 640px` | `base` | 1 Column. Container padding `px-4`. Touch target min `44px`. Arch radius `rounded-t-[64px]`. |
| **Mobile Large** | `640px – 767px` | `sm:` | 1 Column with elevated padding `px-6`. Arch radius `rounded-t-[80px]`. |
| **Tablet Portrait**| `768px – 1023px` | `md:` | 2 Column (50/50 or 55/45). Container padding `px-8`. Arch radius `rounded-t-[96px]`. |
| **Desktop Standard**| `1024px – 1279px`| `lg:` | Multi-column (e.g. 7-col / 5-col split). Bento grids active. Arch radius `rounded-t-[120px]`. |
| **Desktop Wide** | `1280px – 1535px`| `xl:` | Full Bento / Wave divider spanning. Arch radius `rounded-t-[140px]`. Max width `max-w-7xl`. |
| **Ultrawide** | `1536px+` | `2xl:` | Hard canvas containment (`max-w-7xl mx-auto`). Eliminates horizontal void stretching. |

---

## 3. The Anti-Void Rule: Max-Width Containment

### Why the Pepsi / Sadek Layouts Failed:
Without strict max-width constraints, wide screens (1440px+) push the left headline block to the far left edge and the right image to the far right edge. The resulting 800px+ middle gulf is a dead negative space void.

### The Standard Fix:
Every hero, bento grid, and feature section must be wrapped in a triple-layered safety container:

```tsx
<section className="relative w-full overflow-hidden bg-obsidian-950">
  {/* Layer 1: Ambient background waves / gradients that bleed to 100% viewport */}
  <div className="absolute inset-0 pointer-events-none">
    {/* SVG Wave Canvas */}
  </div>

  {/* Layer 2: Contained content envelope (Prevents void drift) */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Layer 3: Grid / Flex architecture */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Content */}
    </div>
  </div>
</section>
```

---

## 4. Breakpoint-Specific Rules

### 4.1 Mobile (<768px) Execution Rules
1. **Never Cram Horizontal Pill Counters:** Never squeeze 3 stat pills side-by-side horizontally. Use a vertical 2-point value stack or integrated micro-badges.
2. **Arch Scaling:** Scale top arch borders down to `rounded-t-[64px] sm:rounded-t-[80px]`. Standard desktop `rounded-t-[140px]` on a 360px wide screen eats too much vertical media height.
3. **Offset Card Repositioning:** Floating preview cards positioned `-left-8` on desktop must be pinned to `bottom-3 inset-x-3` or `relative mt-4` on mobile to prevent horizontal viewport blowout (`overflow-x`).
4. **Touch Ergonomics:**
   - Buttons must have `min-h-[48px]` and full-width or half-width tap bounds (`w-full sm:w-auto`).
   - Sticky frosted-glass navbars should condense links into a mobile slide-out drawer or compact pill trigger.

### 4.2 Tablet (768px – 1024px) Execution Rules
1. **Balanced Proportions:** The headline column should occupy 55% width (`md:col-span-7`), and the media frame 45% width (`md:col-span-5`).
2. **Font Damping:** Headline typography must drop from desktop `text-6xl` down to `md:text-4xl lg:text-5xl` so titles do not wrap onto 5 lines and push the visual below the fold.
3. **Card Inset Preservation:** Secondary floating badges should remain visible but scale down (`scale-90 origin-bottom-left`) to maintain visual harmony.

### 4.3 Desktop (1024px+) Execution Rules
1. **Asymmetric Grid Power:** Deploy 12-column grid architectures with staggered offsets (`lg:col-span-7` and `lg:col-span-5`).
2. **Interactive Micro-Cards:** Display full fidelity floating UI cards (e.g. SEO metrics, verified customer quote card, code preview) with soft drop-shadows and spring hover interactions.
3. **Wave Divider Flow:** SVG organic wave dividers span continuously across the viewport, providing physical rhythm behind the text and visual columns.

---

## 5. Touch vs. Pointer Interaction Rules

To avoid sticky hover states on touch screens (iOS/Android) where elements stay hovered after a tap:

* Always isolate hover animations inside pointer-capable queries:
  ```css
  @media (hover: hover) and (pointer: fine) {
    .interactive-card:hover {
      transform: translateY(-4px);
    }
  }
  ```
* In Tailwind CSS, pair hover utilities with smooth active states:
  ```tsx
  className="transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
  ```

---

## 6. Complete Production Templates

### Pattern A: Fluid SVG Wave Hero (ClickUp Inspired)
*Handles mobile stack, tablet harmony, and desktop wave span.*

```tsx
import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

export const FluidWaveHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-obsidian-950 text-slate-100 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      
      {/* Background Organic Wave Divider (Spans across all viewports) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-24 right-0 w-[140%] md:w-[110%] lg:w-[65%] h-full text-indigo-950/40 opacity-70 transition-all duration-700"
          viewBox="0 0 700 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M200 0 C350 150, 100 400, 300 600 C450 750, 600 700, 700 800 L700 0 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4338CA" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Subtle twinkling stars pinned to background (Not floating confetti) */}
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-twinkle opacity-70 hidden sm:block" />
        <div className="absolute top-1/3 right-1/6 w-2 h-2 rounded-full bg-indigo-300 animate-twinkle opacity-60 hidden md:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Responsive Editorial Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Fluid Spatial Architecture</span>
            </div>

            {/* Responsive Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Eliminate empty space with{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent italic font-serif">
                organic harmony.
              </span>
            </h1>

            {/* Responsive Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Every screen width adapts with purposeful structure. We replace sterile voids with fluid multi-tone wave dividers, architectural frames, and authentic UI cards.
            </p>

            {/* Action Buttons: Full width on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-obsidian-950 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                <span>Start Exploring</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-sm text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-all">
                <span>See Case Studies</span>
              </button>
            </div>

            {/* Responsive Value Props (Replaces fake 3-stat counter) */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Layout Jitter</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Touch-Engineered Targets</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Showcase Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Primary Architectural Showcase Card */}
              <div className="relative rounded-t-[64px] sm:rounded-t-[96px] lg:rounded-t-[130px] rounded-b-3xl overflow-hidden border border-slate-700/60 bg-slate-900/90 shadow-arch-dark p-2 sm:p-3">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                  alt="Harmonious architectural interior"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover rounded-t-[56px] sm:rounded-t-[88px] lg:rounded-t-[120px] rounded-b-2xl"
                />
              </div>

              {/* Secondary Floating Micro-Badge (ClickUp Style Review Card) */}
              <div className="relative mt-3 sm:absolute sm:-bottom-6 sm:-left-6 lg:-left-8 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-xl max-w-full sm:max-w-[280px]">
                <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 font-medium leading-snug">
                  "The wave framing completely transformed our product showcase. Seamless across all screens."
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-200">Sarah Jenkins</span>
                  <span>Principal Architect</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
```

---

### Pattern B: Architectural Bento Grid (Furniture Showcase Inspired)
*Eliminates voids by organizing content into high-density, professional modules.*

```tsx
import React from 'react';
import { ArrowUpRight, Compass, Layers, Shield } from 'lucide-react';

export const ArchitecturalBentoGrid: React.FC = () => {
  return (
    <section className="relative w-full bg-warm-50 dark:bg-obsidian-950 py-16 sm:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Curated Collections
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-warm-900 dark:text-white">
            Designed for tactile{' '}
            <span className="font-serif italic font-normal text-indigo-600 dark:text-sky-400">
              permanence.
            </span>
          </h2>
          <p className="text-base text-warm-700 dark:text-slate-400">
            A cohesive Bento grid architecture delivering content clarity without single-pixel dead zones.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Primary Large Showcase (Desktop 8-col, Tablet/Mobile Full) */}
          <div className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-warm-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between z-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 mb-3">
                  Featured Space
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-warm-900 dark:text-white">
                  Minimalist Studio Environment
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-warm-200 dark:border-slate-700 flex items-center justify-center text-warm-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                alt="Studio furniture collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Secondary Feature (Desktop 4-col, Tablet/Mobile Full) */}
          <div className="lg:col-span-4 rounded-3xl border border-warm-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-warm-900 dark:text-white">
                Architectural Alignment
              </h3>
              <p className="text-sm text-warm-700 dark:text-slate-400 leading-relaxed">
                Precision alignment ensures every card edge syncs seamlessly across viewport breakpoints.
              </p>
            </div>

            <div className="pt-6 border-t border-warm-200 dark:border-slate-800 mt-6 flex items-center justify-between text-xs text-warm-500 dark:text-slate-400">
              <span>Standard 8pt Grid</span>
              <span className="font-semibold text-warm-900 dark:text-slate-200">Active</span>
            </div>
          </div>

          {/* Card 3: Tertiary Tile 1 (Desktop 4-col) */}
          <div className="lg:col-span-4 rounded-3xl border border-warm-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Shield className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-warm-900 dark:text-white">Eye-Comfortable Warmth</h4>
            <p className="text-sm text-warm-700 dark:text-slate-400">
              Balanced contrast ratios prevent harsh black/white glare for continuous viewing comfort.
            </p>
          </div>

          {/* Card 4: Tertiary Tile 2 (Desktop 4-col) */}
          <div className="lg:col-span-4 rounded-3xl border border-warm-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Layers className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-warm-900 dark:text-white">Layered Elevation</h4>
            <p className="text-sm text-warm-700 dark:text-slate-400">
              Multi-stop diffuse ambient shadows create authentic physical depth without harsh edges.
            </p>
          </div>

          {/* Card 5: Tertiary Tile 3 (Desktop 4-col) */}
          <div className="lg:col-span-4 rounded-3xl border border-warm-200 dark:border-slate-800 bg-gradient-to-br from-indigo-900 to-obsidian-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-2">
              <span className="text-xs text-indigo-300 font-mono uppercase tracking-wider">System Metric</span>
              <h4 className="text-2xl font-bold">100% Fluid</h4>
              <p className="text-xs text-indigo-200/80">Every device viewport renders a bespoke, balanced composition.</p>
            </div>
            <div className="mt-4 pt-4 border-t border-indigo-800/60 flex items-center justify-between text-xs text-indigo-300">
              <span>View Guidelines</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
```

---

## 7. Responsive QA Verification Checklist

Before deploying any responsive view:
- [ ] **Viewport Stress Test:** Test layout at 375px (iPhone SE), 768px (iPad Portrait), 1024px (iPad Landscape/Small Laptop), and 1440px+ (Desktop Monitor).
- [ ] **Horizontal Overflow:** Verify `document.documentElement.scrollWidth === window.innerWidth` (no horizontal scrollbar on mobile).
- [ ] **Touch Target Safety:** All clickable pills, buttons, and links satisfy the 44×44px minimum bounding box.
- [ ] **Arch Curvature:** Arch frames scale gracefully (`rounded-t-[64px]` on mobile -> `rounded-t-[96px]` on tablet -> `rounded-t-[140px]` on desktop).
- [ ] **No Floating Confetti / Cutouts:** Avatars and imagery remain structurally framed inside arch containers or Bento cells.
