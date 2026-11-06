# Section Skill: Hero Architecture & Design Blueprints

> **Document Type:** Production Section Specification & Implementation Blueprint  
> **Target Audience:** Frontend Developers, UI/UX Engineers, Design System Specialists  
> **Compliance:** Mandatory alignment with Client Taste Dossier (`taste.docx`) and `04-qa-verification.md`  

---

## 1. Core Philosophy & Anti-Pattern Directives

The Hero section is the highest-stakes area of any web application or landing page. It sets the tone, communicates core value, and establishes immediate craft credibility.

### Strict Hero Anti-Patterns (BANNED)
1. **The Vast Empty Void (Pepsi / Sadek):** Never leave wide expanses of blank color between the copy and an isolated graphic. Layouts must be grounded and dynamically connected.
2. **The Floating Circle Avatar with Confetti (Dawood):** No floating headshot circles surrounded by random stars, dots, or confetti flakes.
3. **Childish Clip-Art (Alyasmeen):** Zero cartoon or thick black-outline clip-art icons. Use crisp Lucide-React stroke icons or clean vector drawings.
4. **The Generic "AI Template" Hero (RenderVault / Nabed):** Saturated neon cyan/purple text gradients in mid-sentence, dark backgrounds with isolated 3D isometric squircle renders, and three bold generic stat pills (`10k+ / 50k+ / 4.9*`).

### Approved & Beloved Patterns
- **Organic SVG Wave Dividers:** Fluid multi-tone gradient zones that separate content sections and eliminate empty space.
- **Bento Grid Structures:** Structured modular layout cards that present high-density value cleanly.
- **Architectural Frames:** Arched or pill-shaped photo frames with synchronized floating preview cards.
- **High-End Editorial Minimalism:** Deep atmospheric midnight backdrops, refined sans/italic serif typography pairings, frosted glass pills, and warm amber CTAs.

---

## 2. The 4 Approved Hero Archetypes

```
+----------------------------------------------------------------------------------------------------+
|                                      HERO ARCHETYPE SPECTRUM                                       |
+------------------------------+------------------------------+--------------------------------------+
| Archetype                    | Best Suited For              | Distinctive Design Markers           |
+------------------------------+------------------------------+--------------------------------------+
| 1. The Organic Fluid Wave    | SaaS, Productivity Tools,    | Fluid multi-tone SVG wave divider,   |
|    Divider Hero (ClickUp)    | Modern Tech Platforms        | overlapping UI mockup, floating      |
|                              |                              | review card, animatable vector stars.|
+------------------------------+------------------------------+--------------------------------------+
| 2. The Bento Grid Hero       | E-Commerce, Modern Retail,   | Modular bento layout, asymmetric     |
|    (Modern Furniture)        | Multi-Feature Products       | card weights, micro-stat pills,      |
|                              |                              | clean architectural division.        |
+------------------------------+------------------------------+--------------------------------------+
| 3. The Architectural Framed  | Interior Design, Real Estate,| Arched/pill styled photo frames,     |
|    Hero (MK Kitchens)        | Hospitality, High-End Studio | inset floating preview cards, warm   |
|                              |                              | earth tones, responsive harmony.     |
+------------------------------+------------------------------+--------------------------------------+
| 4. The Editorial Minimalist  | Luxury Brands, Automotive,   | Deep midnight canvas, refined        |
|    Hero (Farapi / Porsche)   | High-Ticket Consultancies    | typography with italic serif accent, |
|                              |                              | frosted glass nav, warm amber CTAs.  |
+------------------------------+------------------------------+--------------------------------------+
```

---

## 3. Archetype 1: The Organic Fluid Wave Divider Hero

Inspired by the client's favorite landing page pattern (ClickUp style), this archetype solves the "empty space" problem by using a continuous multi-tone SVG wave dividing the canvas into two dynamic zones.

### Visual Anatomy
```
+--------------------------------------------------------------------------------+
|  NAVBAR: Frosted Glass Pill [Logo]           [Links]            [Get Started]  |
+--------------------------------------------------------------------------------+
|  LEFT ZONE (Solid/Gradient A)        /~~~~\  RIGHT ZONE (Multi-tone Gradient B)|
|                                     /      \                                   |
|  [Eyebrow Pill Badge]              |        |   +---------------------------+  |
|  Headline: One Platform to        /          \  | Interactive UI Mockup     |  |
|  Replace Them All.               |            | | - Live Workspace Preview  |  |
|                                 /              \| - Task Status Timeline    |  |
|  Subhead: All your tasks, docs, |               | +-------------------------+  |
|  and team in one place.        /                |       \                      |
|                               |                  \       +-------------------+ |
|  [ Primary CTA ] [ Watch Demo]|                   \      | Floating Review   | |
|                               |                    |     | "Saved 12 hrs/wk" | |
|  Animatable SVG Accents (✨)  \                     \     | ★★★★★             | |
|                                \~~~~~~~~~~~~~~~~~~~~~+-----------------------+ |
+--------------------------------------------------------------------------------+
```

### Production React + Tailwind Implementation

```tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Star, Sparkles } from "lucide-react";

export const OrganicWaveHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">
      {/* Background Organic Wave Divider */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-[60%] text-indigo-950/40 lg:text-indigo-900/30"
          viewBox="0 0 700 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M200 0C350 200 100 450 300 800H700V0H200Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="200" y1="0" x2="700" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="0.5" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Radial Glow */}
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute -bottom-40 left-10 w-[400px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <motion.div
            className="lg:col-span-6 z-10 space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next-Generation Workflow Engine</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              One structured space to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-200">
                orchestrate
              </span>{" "}
              your entire team.
            </h1>

            {/* Subhead */}
            <p className="text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Eliminate context switching. Plan sprints, manage documents, and automate reporting across every department with fluid speed.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300 hover:brightness-110 shadow-lg shadow-indigo-500/20 transition-all duration-200 active:scale-[0.98]">
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 backdrop-blur-sm">
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                <span>See It in Action (2m)</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex items-center gap-6 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Interactive UI Mockup */}
          <motion.div
            className="lg:col-span-6 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Application Mockup Card */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/60 to-slate-800/40 shadow-2xl backdrop-blur-xl border border-white/10">
              <div className="rounded-[14px] bg-slate-900/90 overflow-hidden">
                {/* Window Controls Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">workspace / active-sprint</div>
                  <div className="w-12" />
                </div>

                {/* Simulated Content Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Q4 Product Launch</h4>
                      <p className="text-xs text-slate-400">84% completed · 12 days remaining</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      On Track
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[84%] rounded-full" />
                  </div>

                  {/* Simulated Task Rows */}
                  <div className="space-y-2 pt-2">
                    {[
                      { title: "Design System Tokens v2.0", status: "Done", tag: "Design" },
                      { title: "Authentication Flow Refactor", status: "In Review", tag: "Security" },
                      { title: "Payment Webhooks Integration", status: "In Progress", tag: "Backend" },
                    ].map((task, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs">
                        <span className="font-medium text-slate-200">{task.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-700/50">{task.tag}</span>
                          <span className="text-[11px] font-medium text-indigo-400">{task.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Review Card (Client Favorite Pattern) */}
            <motion.div
              className="absolute -bottom-6 -left-6 sm:-left-10 p-4 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl max-w-xs space-y-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic">
                “This completely eliminated our dead space and doubled team velocity in our first sprint.”
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                  SK
                </div>
                <div className="text-[11px]">
                  <p className="font-semibold text-white">Sarah Jenkins</p>
                  <p className="text-[10px] text-slate-400">VP of Product, Forma</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
```

---

## 4. Archetype 2: The Bento Grid Hero

Inspired by modern furniture design and high-density editorial layouts, this archetype structures the entire hero as a modular, cohesive bento grid. It completely eradicates dead negative space by providing intentional containers for imagery, value propositions, interactive pills, and secondary features.

### Visual Anatomy
```
+-----------------------------------------------------------------------------------+
| BENTO CONTAINER (max-w-7xl)                                                       |
| +-----------------------------------------------+ +-----------------------------+ |
| | CARD A: Flagship Value Proposition (Col 1-8)  | | CARD B: Hero Lifestyle (4)  | |
| | - Category Tag: "Spring Collection 2026"      | | - Arched/Framed Visual      | |
| | - Big Editorial Headline                      | | - Material Spec Pill        | |
| | - Dual CTAs + Micro Social Proof              | | - "Handcrafted Oak"         | |
| +-----------------------------------------------+ +-----------------------------+ |
| +-------------------------+ +-------------------------+ +-----------------------+ |
| | CARD C: Live Feature    | | CARD D: Dimension Spec  | | CARD E: Quick Action  | |
| | - Micro interactive     | | - Minimalist schematic  | | - "Explore Catalog"   | |
| |   color swatch selector | |   or sustainable badge  | | - Direct Arrow CTA    | |
| +-------------------------+ +-------------------------+ +-----------------------+ |
+-----------------------------------------------------------------------------------+
```

### Production React + Tailwind Implementation

```tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Layers } from "lucide-react";

export const BentoHero: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<string>("Walnut");

  return (
    <section className="bg-stone-100 text-stone-900 py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Row 1: Primary Value Card + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Card (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-8 lg:p-14 border border-stone-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 max-w-xl z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-stone-800" />
                <span>Modern Living Archetype</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-stone-950 leading-[1.08]">
                Furniture sculpted for <span className="italic font-normal">clarity</span> and timeless calm.
              </h1>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
                Engineered with sustainably sourced Nordic hardwood and precision joinery. Zero superfluous clutter, maximum ergonomic comfort.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4 z-10">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 text-stone-50 font-medium hover:bg-stone-800 transition-colors shadow-md">
                <span>View Collection</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3.5 rounded-full bg-stone-100 text-stone-800 font-medium hover:bg-stone-200 transition-colors border border-stone-300">
                Book Showroom Visit
              </button>
            </div>

            {/* Subtle Architectural Grid Lines */}
            <div className="absolute right-0 bottom-0 w-72 h-72 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          {/* Secondary Hero Media Card (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-stone-900 text-white p-8 border border-stone-800 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
            <div className="flex justify-between items-start z-10">
              <span className="text-xs uppercase font-mono tracking-widest text-stone-400">Featured Study</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur-md">Edition 01</span>
            </div>

            {/* Stylized Silhouette Representation */}
            <div className="relative py-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-t-full rounded-b-2xl bg-gradient-to-tr from-amber-700/40 via-stone-700 to-stone-600 border border-white/20 shadow-2xl flex items-center justify-center p-4">
                <span className="text-xs text-stone-300 uppercase tracking-widest font-mono text-center">
                  Nordic Oak<br />Lounge Chair
                </span>
              </div>
            </div>

            <div className="z-10 flex items-center justify-between text-xs text-stone-300 border-t border-stone-800 pt-4">
              <span>Solid FSC® Hardwood</span>
              <span className="font-serif italic text-amber-200">From $1,450</span>
            </div>
          </div>

        </div>

        {/* Row 2: Micro-Interaction Cards (4 + 4 + 4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card C: Interactive Swatch Selector */}
          <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                <Layers className="w-4 h-4 text-stone-500" />
                <span>Wood Tone Finishes</span>
              </div>
              <p className="text-xs text-stone-500">Selected: <strong className="text-stone-800">{selectedSwatch}</strong></p>
            </div>
            
            <div className="flex items-center gap-3 pt-4">
              {[
                { name: "Walnut", color: "bg-amber-950" },
                { name: "White Oak", color: "bg-amber-200" },
                { name: "Smoked Ash", color: "bg-stone-800" },
              ].map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => setSelectedSwatch(swatch.name)}
                  className={`w-8 h-8 rounded-full ${swatch.color} border-2 transition-transform ${
                    selectedSwatch === swatch.name ? "ring-2 ring-stone-900 scale-110" : "border-stone-200"
                  }`}
                  aria-label={swatch.name}
                />
              ))}
            </div>
          </div>

          {/* Card D: Craftsmanship Assurance */}
          <div className="rounded-2xl bg-white p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Lifetime Guarantee</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed pt-2">
              Every joint is backed by a 25-year structural warranty, engineered to pass down across generations.
            </p>
          </div>

          {/* Card E: Quick Catalog Action */}
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6 flex items-center justify-between group cursor-pointer hover:bg-amber-500/15 transition-colors">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Digital Catalog</span>
              <p className="text-sm font-medium text-stone-900">Explore 120+ Curated Pieces</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-stone-900" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
```

---

## 5. Archetype 3: The Architectural Framed Hero

Directly inspired by the MK Kitchens reference, this archetype avoids detached, generic rectangular images by housing photography inside custom architectural arches and pill-shaped frames. Secondary inset floating preview cards provide real contextual depth.

### Visual Anatomy
```
+-------------------------------------------------------------------------------+
|  WARM EARTH BACKDROP (Warm Beige / Soft Charcoal / Wood Tone Accents)        |
|                                                                               |
|  LEFT (Col 1-6)                          RIGHT (Col 7-12)                     |
|  [Eyebrow Pill]                          +----------------------------------+ |
|  Headline: Architectural Bespoke        | ARCHED FRAME (rounded-t-full)    | |
|  Spaces Crafted for Living.              | - High quality architectural shot| |
|                                          | - Soft diffused lighting         | |
|  Subhead: Natural materials and          |                                  | |
|  ergonomic spatial design.               |   +--------------------------+   | |
|                                          |   | Inset Floating Card:     |   | |
|  [ Schedule Design Consultation ]        |   | "Calacatta Gold Marble"  |   | |
|  [ View Portfolio ]                      |   | Grade A Quarry / Matte   |   | |
|                                          |   +--------------------------+   | |
|  Specifications Pill Matrix              +----------------------------------+ |
+-------------------------------------------------------------------------------+
```

### Production React + Tailwind Implementation

```tsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Check } from "lucide-react";

export const ArchitecturalFramedHero: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] text-stone-900 py-16 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Editorial Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/70 border border-stone-300 text-stone-800 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Bespoke Architecture & Cabinetry</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.12]">
              Spaces designed for <span className="italic font-normal text-stone-700">intimacy</span>, light, and culinary craft.
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We merge organic European marble, wire-brushed white oak, and concealed architectural joinery to produce custom residential kitchens that endure.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 shadow-md transition-colors">
                <Calendar className="w-4 h-4 text-stone-300" />
                <span>Book Design Studio Session</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-stone-300 text-stone-800 font-medium hover:bg-stone-50 transition-colors">
                <span>View 2026 Portfolio</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </button>
            </div>

            {/* Quality Tokens */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-xs text-stone-600">
              <div className="space-y-1">
                <p className="font-serif text-lg text-stone-900 font-bold">100%</p>
                <p>Natural Solid Stone</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-lg text-stone-900 font-bold">Custom</p>
                <p>Architectural Millwork</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-lg text-stone-900 font-bold">25 Yrs</p>
                <p>Hardware Guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Arch Frame + Inset Floating Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* The Arched Architectural Frame */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-t-[160px] rounded-b-[36px] overflow-hidden border-8 border-white shadow-2xl bg-stone-200">
              {/* Replace with production next/image or img */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-800/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Bespoke Kitchen with natural stone island"
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="text-xs uppercase tracking-widest font-mono text-stone-300">The Kensington Residence</p>
                <p className="font-serif text-lg italic text-white">Natural Calacatta & Walnut Island</p>
              </div>
            </div>

            {/* Secondary Inset Floating Preview Card (Client Favorite Pattern) */}
            <motion.div
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-stone-200/80 shadow-xl max-w-xs space-y-3 z-30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Material Detail
                </span>
                <span className="text-xs font-mono text-stone-400">Spec #048</span>
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-stone-900">Brushed Brass & Smoked Oak</h4>
                <p className="text-xs text-stone-500">Concealed soft-touch Blum hardware.</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium pt-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Pre-certified architectural fit</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
```

---

## 6. Archetype 4: The High-End Editorial / Minimalist Hero

Directly inspired by Farapi, Porsche 911, and Waha editorial showcases, this archetype delivers understated luxury. It employs a deep midnight teal or obsidian palette, typographic sophistication (clean geometric sans with an italic serif accent word), a frosted glass floating pill navbar, and warm amber CTAs.

### Production React + Tailwind Implementation

```tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";

export const EditorialMinimalistHero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] bg-[#0A1118] text-slate-100 flex items-center justify-center overflow-hidden px-6">
      
      {/* Ambient Vignette & Noise Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto py-24 text-center space-y-10 z-10">
        
        {/* Frosted Glass Pill Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-slate-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Private Wealth & Asset Allocation · 2026</span>
        </motion.div>

        {/* Typographic Headline with Italic Serif Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white leading-[1.08]"
        >
          Institutional rigor for{" "}
          <span className="font-serif italic font-normal text-amber-200/90">sovereign</span>{" "}
          portfolios.
        </motion.h1>

        {/* Nuanced Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Direct market access, multi-custody security, and automated hedging protocols engineered for generational wealth preservation.
        </motion.p>

        {/* Warm Amber CTA + Secondary Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold tracking-wide transition-all shadow-lg shadow-amber-500/20 active:scale-95">
            <span>Inquire for Membership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-medium backdrop-blur-sm transition-colors">
            <span>Review Fiduciary Mandate</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </motion.div>

        {/* Understated Metrics Bar (No generic 3-stat pills) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-left max-w-4xl mx-auto"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">Custody Tier</p>
            <p className="text-lg font-medium text-white pt-1">Tier-1 Swiss Banks</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">Jurisdictions</p>
            <p className="text-lg font-medium text-white pt-1">Zurich / London / SG</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">Execution Speed</p>
            <p className="text-lg font-medium text-white pt-1">&lt; 14ms Direct FIX</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">Compliance</p>
            <div className="flex items-center gap-1.5 pt-1 text-emerald-400 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>FINMA / SEC Reg</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
```

---

## 7. Hero Implementation Checklist for Engineers

Before shipping any hero section, verify against this protocol:

1. [ ] **Layout Anchor:** Is there a wave divider, bento container, or architectural frame anchoring the media to the text? (Zero detached floating assets).
2. [ ] **Icon Audit:** Are all icons using `lucide-react` with 1.5-2px stroke? (Zero cartoon/clip-art icons).
3. [ ] **Typography Audit:** Is the headline clean without mid-sentence neon text? Are line lengths constrained to `< 65` characters?
4. [ ] **Mobile Stacking:** On 375px screens, does the section stack logically with touch-friendly buttons (`>= 48px` height) and zero horizontal overflow?
5. [ ] **Floating Cards:** Are secondary cards (reviews, specs) contextually anchored and animated smoothly with GPU transforms?
