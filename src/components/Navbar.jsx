import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProfile } from '../context/ProfileContext';
import { 
  Sun, 
  Moon, 
  Palette, 
  Menu, 
  X, 
  Shield, 
  FileText,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const { isDarkMode, toggleDarkMode, accentKey, setAccentKey, themes, accent } = useTheme();
  const { profile, setIsResumeModalOpen } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills & Path', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning Log', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#070a12]/90 backdrop-blur-md shadow-xs border-b border-gray-200/60 dark:border-gray-800/80 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${accent.textGradient} flex items-center justify-center text-white shadow-xs font-bold transition-transform group-hover:scale-105`}>
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-gray-900 dark:text-white text-base tracking-tight group-hover:text-emerald-500 transition-colors">
                {profile.personal.name}
              </span>
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                MCA • Security + AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Resume Button, Palette, Dark Mode */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Direct Resume Modal Trigger */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </button>

            {/* Accent Color Palette Selector */}
            <div className="relative">
              <button
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Change theme accent"
                aria-label="Theme accent selector"
              >
                <div 
                  className="w-4 h-4 rounded-full ring-2 ring-white dark:ring-gray-900 shadow-xs"
                  style={{ backgroundColor: accent.color }}
                />
              </button>

              {colorPickerOpen && (
                <div 
                  className="absolute right-0 mt-2 p-2.5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex gap-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setColorPickerOpen(false)}
                >
                  {Object.values(themes).map(t => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setAccentKey(t.id);
                        setColorPickerOpen(false);
                      }}
                      className={`w-6 h-6 rounded-full transition-transform hover:scale-110 flex items-center justify-center ${
                        accentKey === t.id ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-300' : ''
                      }`}
                      style={{ backgroundColor: t.color }}
                      title={t.name}
                      aria-label={`Select ${t.name} theme`}
                    >
                      {accentKey === t.id && <Sparkles className="w-3 h-3 text-white" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl md:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex flex-col gap-1.5">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsResumeModalOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>View & Print Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
