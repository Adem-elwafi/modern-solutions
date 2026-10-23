import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { translations, type TranslationSchema } from '../i18n/translations';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export type TFunctionAndSchema = TranslationSchema & {
  (en: string, ar?: string): string;
};

export interface LanguageContextType {
  language: Language;
  dir: Direction;
  isRTL: boolean;
  isRtl: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: TFunctionAndSchema;
  rtlX: (value: number) => number;
}

const STORAGE_KEY = 'app_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'ar' || stored === 'en') {
          return stored;
        }
        if (navigator.language?.startsWith('ar')) {
          return 'ar';
        }
      } catch {
        // Fallback to English if localStorage is inaccessible
      }
    }
    return 'en';
  });

  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('dir', dir);
      root.setAttribute('lang', language);
      if (isRTL) {
        root.classList.add('rtl-mode');
        root.classList.remove('ltr-mode');
      } else {
        root.classList.add('ltr-mode');
        root.classList.remove('rtl-mode');
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore localStorage write errors
    }
  }, [language, dir, isRTL]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Helper for Framer Motion or coordinate translations: inverts horizontal offset when in RTL
  const rtlX = (value: number): number => {
    return isRTL ? -value : value;
  };

  const t = useMemo(() => {
    const fn = ((en: string, ar?: string) => {
      return language === 'ar' ? (ar ?? en) : en;
    }) as unknown as TFunctionAndSchema;
    return Object.assign(fn, translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isRTL,
        isRtl: isRTL,
        toggleLanguage,
        setLanguage,
        t,
        rtlX,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
