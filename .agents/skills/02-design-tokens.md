# Design Tokens System & Specifications

> **Status:** Production-Ready Standard  
> **Source of Truth:** Client Taste Dossier (`taste.docx`), Curated Design Archive & Modern Web Standards  
> **Target Stack:** Tailwind CSS v3+, CSS Custom Properties, React 18+, TypeScript  

---

## 1. Overview & Architecture

The design token system translates the client's taste preferences—avoidance of neon harshness and empty voids; embrace of organic waves, architectural arches, warm eye-comfortable tones, and crisp stroke iconography—into immutable, code-first tokens.

Every token is defined via CSS variables for dynamic runtime theming, with first-class mappings in `tailwind.config.js`.

---

## 2. Color Palette System

### 2.1 Eye-Comfortable Dark Mode (Never Harsh Pure Black)
Generic AI templates abuse `#000000` pitch black paired with saturated neon cyan/magenta text that causes severe eye fatigue. Our dark palette employs deep obsidian, slate navy, and warm charcoal undertones with controlled luminance.

| Token Name | Hex Code | Tailwind Class | Semantic Purpose |
| :--- | :--- | :--- | :--- |
| `obsidian-950` | `#0B0F17` | `bg-obsidian-950` | Primary app canvas & background |
| `obsidian-900` | `#111726` | `bg-obsidian-900` | Surface cards, bento modules, navbars |
| `obsidian-800` | `#1B2438` | `bg-obsidian-800` | Inset containers, secondary cards, hover states |
| `obsidian-700` | `#26334D` | `border-obsidian-700` | Crisp structural borders & dividers |
| `obsidian-600` | `#3A4B6E` | `border-obsidian-600` | Muted interactive borders & active rings |
| `text-dark-primary` | `#F8FAFC` | `text-slate-50` | Primary headlines & critical text (98% white) |
| `text-dark-secondary` | `#94A3B8` | `text-slate-400` | Body copy, descriptions & supporting context |
| `text-dark-muted` | `#64748B` | `text-slate-500` | Metadata, pill tags, breadcrumbs & captions |

### 2.2 Warm Editorial Light Mode (Never Blinding Pure White)
Avoid sterile hospital-white backgrounds. Use warm alabaster, oatmeal, and ivory with deep charcoal text.

| Token Name | Hex Code | Tailwind Class | Semantic Purpose |
| :--- | :--- | :--- | :--- |
| `warm-50` | `#FAF9F5` | `bg-warm-50` | Warm alabaster page canvas |
| `warm-100` | `#F4F2EB` | `bg-warm-100` | Subtle background shifts & nested zones |
| `warm-200` | `#E8E5DA` | `border-warm-200` | Architectural card borders & hairline dividers |
| `warm-900` | `#1A1917` | `text-warm-900` | Deep espresso/charcoal text for effortless reading |
| `warm-700` | `#4A4740` | `text-warm-700` | Warm secondary editorial copy |
| `warm-500` | `#7D796F` | `text-warm-500` | Captions, timestamps, disabled indicators |

### 2.3 Brand Accents & Multi-Tone Wave Gradients
Inspired by the ClickUp hero wave divider and Farapi editorial design, gradients are sophisticated multi-stop curves with soft transitions:

```css
/* CSS Custom Properties Preset Gradients */
:root {
  /* Wave Preset 1: Indigo Sky (ClickUp Hero Style) */
  --gradient-wave-indigo: linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%);
  --gradient-wave-indigo-soft: linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%);

  /* Wave Preset 2: Warm Sand & Champagne (MK Kitchens Style) */
  --gradient-wave-warm: linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FCD34D 100%);
  --gradient-wave-warm-soft: linear-gradient(135deg, rgba(217, 119, 6, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%);

  /* Wave Preset 3: Midnight Emerald (Farapi Style) */
  --gradient-wave-emerald: linear-gradient(135deg, #059669 0%, #10B981 50%, #14B8A6 100%);
  
  /* Single-Word Text Accent Gradient (Strictly for 1 word per heading) */
  --gradient-text-accent: linear-gradient(135deg, #818CF8 0%, #38BDF8 50%, #34D399 100%);
}
```

---

## 3. Typography Tokens

We implement an **Editorial Grotesque** typography stack: a crisp geometric sans for functional clarity paired with a high-contrast serif exclusively for single-word emphasis.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TYPOGRAPHY PAIRING MODEL                        │
│                                                                        │
│   "Crafting digital products with [ purpose. ]"                        │
│    ▲                               ▲                                   │
│    │                               │                                   │
│    Primary Sans: Plus Jakarta Sans  Editorial Accent: Playfair Display │
│    Weight: 800 (Extrabold)         Style: Italic Serif                 │
│    Tracking: -0.025em (tight)      Gradient: Indigo -> Sky -> Teal     │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Font Families
* **`font-sans`:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
* **`font-serif-accent`:** `'Playfair Display', 'Newsreader', Georgia, serif`
* **`font-mono`:** `'JetBrains Mono', 'Fira Code', monospace`

### 3.2 Type Scale & Tracking
```css
/* Typography Scale */
--text-xs:   0.75rem;   /* 12px - line-height: 1.0rem  | tracking: 0.02em  */
--text-sm:   0.875rem;  /* 14px - line-height: 1.25rem | tracking: 0       */
--text-base: 1.0rem;    /* 16px - line-height: 1.5rem  | tracking: -0.01em */
--text-lg:   1.125rem;  /* 18px - line-height: 1.75rem | tracking: -0.01em */
--text-xl:   1.25rem;   /* 20px - line-height: 1.75rem | tracking: -0.015em*/
--text-2xl:  1.5rem;    /* 24px - line-height: 2.0rem  | tracking: -0.02em */
--text-3xl:  1.875rem;  /* 30px - line-height: 2.25rem | tracking: -0.025em*/
--text-4xl:  2.25rem;   /* 36px - line-height: 2.5rem  | tracking: -0.03em */
--text-5xl:  3.0rem;    /* 48px - line-height: 1.15    | tracking: -0.035em*/
--text-6xl:  3.75rem;   /* 60px - line-height: 1.1     | tracking: -0.04em */
--text-7xl:  4.5rem;    /* 72px - line-height: 1.05    | tracking: -0.045em*/
```

### 3.3 Rule for Gradient Text
* **ALLOWED:** `<span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent italic font-serif">precision.</span>`
* **FORBIDDEN:** Applying gradient text to multi-word clauses or full sentences. It must remain a surgical highlight.

---

## 4. Architectural Borders & Radii Tokens

Generic squares and uniform squircles lack character. We introduce architectural arches and asymmetric curves (as praised in the MK Kitchens critique).

```
┌────────────────────────┐      ┌────────────────────────┐
│     ROUNDED ARCH       │      │     BENTO SURFACE      │
│  rounded-t-[120px]     │      │      rounded-3xl       │
│  rounded-b-2xl         │      │      (24px curve)      │
│                        │      │                        │
│                        │      │                        │
└────────────────────────┘      └────────────────────────┘
```

| Token | CSS Value | Tailwind Class | Application |
| :--- | :--- | :--- | :--- |
| `radius-pill` | `9999px` | `rounded-full` | Floating navbars, badge tags, primary CTA pills |
| `radius-arch-lg` | `140px 140px 24px 24px` | `rounded-t-[140px] rounded-b-3xl` | Desktop hero architectural showcase frames |
| `radius-arch-md` | `96px 96px 20px 20px` | `rounded-t-[96px] rounded-b-2xl` | Tablet hero & feature showcase frames |
| `radius-arch-sm` | `64px 64px 16px 16px` | `rounded-t-[64px] rounded-b-xl` | Mobile hero architectural frames |
| `radius-bento` | `24px` | `rounded-3xl` | Bento grid cards & section containers |
| `radius-card` | `16px` | `rounded-2xl` | Secondary inset micro-cards & spec pills |

---

## 5. Shadows, Elevation & Glassmorphism

Avoid cartoonish hard shadows or muddy 60px black drop-shadows. Shadows must feel atmospheric and softly diffused.

```css
/* Ambient Elevation Tokens */
--shadow-subtle: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
--shadow-card:   0 4px 24px -4px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.04);
--shadow-arch:   0 20px 48px -12px rgba(0, 0, 0, 0.18), 0 8px 16px -4px rgba(0, 0, 0, 0.08);
--shadow-glow:   0 0 40px -8px rgba(79, 70, 229, 0.25);

/* Dark Mode Shadow Compensation */
--shadow-card-dark: 0 4px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.06);
--shadow-arch-dark: 0 24px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.08);

/* Frosted Glass Specification */
--glass-bg-light:      rgba(255, 255, 255, 0.75);
--glass-bg-dark:       rgba(17, 23, 38, 0.75);
--glass-border-light:  rgba(232, 229, 218, 0.7);
--glass-border-dark:   rgba(255, 255, 255, 0.08);
--glass-blur:          16px;
```

### Tailwind Glass Utility
```tsx
// Floating Nav or Inset Card Glass
const glassClasses = "bg-white/75 dark:bg-obsidian-900/75 backdrop-blur-md border border-neutral-200/60 dark:border-white/10 shadow-sm";
```

---

## 6. Iconography Tokens (Lucide-React Standard)

* **Forbidden:** Multi-color clip-art or cartoon icons with thick black outlines (Alyasmeen anti-pattern).
* **Required:** Precision vector stroke icons (`lucide-react`).

| Usage | Size Class | Stroke Width | Container Class |
| :--- | :--- | :--- | :--- |
| **Badge / Inline Tag** | `w-3.5 h-3.5` | `stroke-[1.75]` | Inline within text, no container |
| **Action Button** | `w-4 h-4` | `stroke-[2]` | Inside pill button alongside text |
| **Micro-Card Icon** | `w-5 h-5` | `stroke-[1.5]` | `p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20` |
| **Section Header Icon**| `w-6 h-6` | `stroke-[1.5]` | `p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20` |
| **Feature Lead Icon** | `w-8 h-8` | `stroke-[1.25]` | `p-4 rounded-3xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100` |

---

## 7. Motion & Micro-Interaction Tokens

Avoid dizzying or abrupt transitions. Interactions must use spring physics or gentle cubic easing.

```js
// Framer Motion Spring Presets
export const transitionSpringSubtle = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.8
};

export const transitionSpringBouncy = {
  type: "spring",
  stiffness: 340,
  damping: 18,
  mass: 0.6
};

// Subtle Star / Particle Twinkle Keyframe
export const twinkleKeyframes = {
  "0%, 100%": { opacity: "0.2", transform: "scale(0.85)" },
  "50%": { opacity: "1", transform: "scale(1.15)" }
};

// Gentle Wave Float Keyframe
export const floatKeyframes = {
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-6px)" }
};
```

---

## 8. Tailwind Configuration (`tailwind.config.js` extension)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0B0F17',
          900: '#111726',
          800: '#1B2438',
          700: '#26334D',
          600: '#3A4B6E',
        },
        warm: {
          50: '#FAF9F5',
          100: '#F4F2EB',
          200: '#E8E5DA',
          500: '#7D796F',
          700: '#4A4740',
          900: '#1A1917',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'arch-lg': '140px 140px 24px 24px',
        'arch-md': '96px 96px 20px 20px',
        'arch-sm': '64px 64px 16px 16px',
        'bento': '24px',
      },
      boxShadow: {
        'arch': '0 20px 48px -12px rgba(0, 0, 0, 0.18), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        'arch-dark': '0 24px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'card-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
};
```
