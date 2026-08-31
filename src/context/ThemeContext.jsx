import React, { createContext, useContext, useState, useEffect } from 'react';

export const ACCENT_THEMES = {
  indigo: {
    id: 'indigo',
    name: 'Electric Indigo',
    color: '#6366f1',
    badge: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/30 dark:bg-indigo-400/10 dark:text-indigo-400 dark:border-indigo-400/30',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25',
    buttonOutline: 'border-indigo-500/50 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/40',
    text: 'text-indigo-600 dark:text-indigo-400',
    textGradient: 'from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400',
    border: 'border-indigo-500/30',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.25)]',
    bgLight: 'bg-indigo-50 dark:bg-indigo-950/20'
  },
  emerald: {
    id: 'emerald',
    name: 'Cyber Emerald',
    color: '#10b981',
    badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/30',
    button: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25',
    buttonOutline: 'border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40',
    text: 'text-emerald-600 dark:text-emerald-400',
    textGradient: 'from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300',
    border: 'border-emerald-500/30',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/20'
  },
  cyan: {
    id: 'cyan',
    name: 'Neon Cyan',
    color: '#06b6d4',
    badge: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30 dark:bg-cyan-400/10 dark:text-cyan-400 dark:border-cyan-400/30',
    button: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-500/25',
    buttonOutline: 'border-cyan-500/50 text-cyan-600 hover:bg-cyan-50 dark:text-cyan-400 dark:hover:bg-cyan-950/40',
    text: 'text-cyan-600 dark:text-cyan-400',
    textGradient: 'from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400',
    border: 'border-cyan-500/30',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    bgLight: 'bg-cyan-50 dark:bg-cyan-950/20'
  },
  rose: {
    id: 'rose',
    name: 'Sunset Rose',
    color: '#f43f5e',
    badge: 'bg-rose-500/10 text-rose-600 border-rose-500/30 dark:bg-rose-400/10 dark:text-rose-400 dark:border-rose-400/30',
    button: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/25',
    buttonOutline: 'border-rose-500/50 text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40',
    text: 'text-rose-600 dark:text-rose-400',
    textGradient: 'from-rose-600 to-pink-500 dark:from-rose-400 dark:to-pink-400',
    border: 'border-rose-500/30',
    glow: 'shadow-[0_0_30px_rgba(244,63,94,0.25)]',
    bgLight: 'bg-rose-50 dark:bg-rose-950/20'
  },
  amber: {
    id: 'amber',
    name: 'Golden Amber',
    color: '#f59e0b',
    badge: 'bg-amber-500/10 text-amber-600 border-amber-500/30 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/30',
    button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/25',
    buttonOutline: 'border-amber-500/50 text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/40',
    text: 'text-amber-600 dark:text-amber-400',
    textGradient: 'from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400',
    border: 'border-amber-500/30',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.25)]',
    bgLight: 'bg-amber-50 dark:bg-amber-950/20'
  },
  purple: {
    id: 'purple',
    name: 'Royal Purple',
    color: '#a855f7',
    badge: 'bg-purple-500/10 text-purple-600 border-purple-500/30 dark:bg-purple-400/10 dark:text-purple-400 dark:border-purple-400/30',
    button: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/25',
    buttonOutline: 'border-purple-500/50 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-950/40',
    text: 'text-purple-600 dark:text-purple-400',
    textGradient: 'from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-400',
    border: 'border-purple-500/30',
    glow: 'shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    bgLight: 'bg-purple-50 dark:bg-purple-950/20'
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_dark_mode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [accentKey, setAccentKey] = useState(() => {
    return localStorage.getItem('portfolio_accent_color') || 'indigo';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_dark_mode', JSON.stringify(isDarkMode));
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('portfolio_accent_color', accentKey);
  }, [accentKey]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const currentAccent = ACCENT_THEMES[accentKey] || ACCENT_THEMES.indigo;

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      accentKey,
      setAccentKey,
      accent: currentAccent,
      themes: ACCENT_THEMES
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
