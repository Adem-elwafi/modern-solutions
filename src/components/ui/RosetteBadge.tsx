import React from 'react';
import { Check, Sparkles, Award, ShieldCheck, Star } from 'lucide-react';

export type RosetteVariant = 'orange' | 'teal' | 'accent' | 'amber';
export type RosetteIconType = 'check' | 'sparkles' | 'award' | 'shield' | 'star';

interface RosetteBadgeProps {
  variant?: RosetteVariant;
  icon?: RosetteIconType | React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glow?: boolean;
}

const colorConfig: Record<
  RosetteVariant,
  {
    gradientId: string;
    stop1: string;
    stop2: string;
    glowColor: string;
    shadowClass: string;
    innerBorder: string;
  }
> = {
  orange: {
    gradientId: 'rosette-orange',
    stop1: '#FB923C', // orange-400
    stop2: '#EA580C', // orange-600
    glowColor: 'rgba(249, 115, 22, 0.35)',
    shadowClass: 'shadow-orange-500/25',
    innerBorder: 'rgba(255, 255, 255, 0.35)',
  },
  teal: {
    gradientId: 'rosette-teal',
    stop1: '#2DD4BF', // teal-400
    stop2: '#0D9488', // teal-600
    glowColor: 'rgba(13, 148, 136, 0.35)',
    shadowClass: 'shadow-teal-500/25',
    innerBorder: 'rgba(255, 255, 255, 0.35)',
  },
  accent: {
    gradientId: 'rosette-accent',
    stop1: '#FB7185', // rose-400
    stop2: '#E11D48', // rose-600
    glowColor: 'rgba(225, 29, 72, 0.35)',
    shadowClass: 'shadow-rose-500/25',
    innerBorder: 'rgba(255, 255, 255, 0.35)',
  },
  amber: {
    gradientId: 'rosette-amber',
    stop1: '#FBBF24', // amber-400
    stop2: '#D97706', // amber-600
    glowColor: 'rgba(217, 119, 6, 0.35)',
    shadowClass: 'shadow-amber-500/25',
    innerBorder: 'rgba(255, 255, 255, 0.35)',
  },
};

const sizeConfig = {
  sm: {
    box: 'w-9 h-9 min-w-[36px] min-h-[36px]',
    svgSize: 36,
    iconSize: 16,
  },
  md: {
    box: 'w-12 h-12 min-w-[48px] min-h-[48px]',
    svgSize: 48,
    iconSize: 20,
  },
  lg: {
    box: 'w-14 h-14 min-w-[56px] min-h-[56px]',
    svgSize: 56,
    iconSize: 24,
  },
};

// Precision 12-lobed scalloped rosette path in 48x48 viewport
const SCALLOP_PATH =
  'M 24.00 6.50 A 5.2 5.2 0 0 1 32.75 8.84 A 5.2 5.2 0 0 1 39.16 15.25 A 5.2 5.2 0 0 1 41.50 24.00 A 5.2 5.2 0 0 1 39.16 32.75 A 5.2 5.2 0 0 1 32.75 39.16 A 5.2 5.2 0 0 1 24.00 41.50 A 5.2 5.2 0 0 1 15.25 39.16 A 5.2 5.2 0 0 1 8.84 32.75 A 5.2 5.2 0 0 1 6.50 24.00 A 5.2 5.2 0 0 1 8.84 15.25 A 5.2 5.2 0 0 1 15.25 8.84 A 5.2 5.2 0 0 1 24.00 6.50 Z';

export const RosetteBadge: React.FC<RosetteBadgeProps> = ({
  variant = 'orange',
  icon = 'check',
  size = 'md',
  className = '',
  glow = true,
}) => {
  const currentTheme = colorConfig[variant] || colorConfig.orange;
  const currentSize = sizeConfig[size] || sizeConfig.md;

  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    }
    const strokeWidth = 2.4;
    switch (icon) {
      case 'sparkles':
        return <Sparkles size={currentSize.iconSize} strokeWidth={strokeWidth} className="text-white" />;
      case 'award':
        return <Award size={currentSize.iconSize} strokeWidth={strokeWidth} className="text-white" />;
      case 'shield':
        return <ShieldCheck size={currentSize.iconSize} strokeWidth={strokeWidth} className="text-white" />;
      case 'star':
        return <Star size={currentSize.iconSize} strokeWidth={strokeWidth} className="text-white fill-white/30" />;
      case 'check':
      default:
        return <Check size={currentSize.iconSize} strokeWidth={strokeWidth} className="text-white" />;
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-105 ${currentSize.box} ${className}`}
      style={{
        filter: glow ? `drop-shadow(0 6px 14px ${currentTheme.glowColor})` : undefined,
      }}
    >
      <svg
        viewBox="0 0 48 48"
        className="w-full h-full transform transition-transform duration-500 group-hover:rotate-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`${currentTheme.gradientId}-${size}`}
            x1="12"
            y1="6"
            x2="36"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={currentTheme.stop1} />
            <stop offset="1" stopColor={currentTheme.stop2} />
          </linearGradient>
          <filter id={`shadow-${variant}-${size}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* 12-lobed scalloped rosette base */}
        <path
          d={SCALLOP_PATH}
          fill={`url(#${currentTheme.gradientId}-${size})`}
          filter={`url(#shadow-${variant}-${size})`}
        />

        {/* Delicate inner accent ring for medal craftsmanship */}
        <circle
          cx="24"
          cy="24"
          r="14.5"
          fill="none"
          stroke={currentTheme.innerBorder}
          strokeWidth="1.2"
          strokeDasharray="2.5 1.5"
        />

        {/* Inset core medal circle */}
        <circle
          cx="24"
          cy="24"
          r="12.5"
          fill="white"
          fillOpacity="0.12"
        />
      </svg>

      {/* Centered crisp Lucide icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none drop-shadow-sm">
        {renderIcon()}
      </div>
    </div>
  );
};
