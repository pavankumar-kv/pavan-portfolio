import React, { createContext, useContext, useState, useEffect } from 'react';

export const ACCENT_THEMES = {
  indigo: {
    id: 'indigo',
    name: 'Executive Slate',
    color: '#4f46e5',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60',
    button: 'bg-gray-900 hover:bg-black text-white dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100 shadow-xs',
    buttonSecondary: 'border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800/60 shadow-xs',
    text: 'text-indigo-600 dark:text-indigo-400',
    textGradient: 'from-gray-950 via-gray-800 to-indigo-600 dark:from-white dark:via-zinc-200 dark:to-indigo-300',
    border: 'border-gray-200 dark:border-zinc-800',
    bgLight: 'bg-indigo-50/60 dark:bg-indigo-950/30'
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_dark_mode_v3');
    if (saved !== null) return JSON.parse(saved);
    return true; // default clean dark mode
  });

  useEffect(() => {
    localStorage.setItem('portfolio_dark_mode_v3', JSON.stringify(isDarkMode));
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const currentAccent = ACCENT_THEMES.indigo;

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      accent: currentAccent
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
