import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProfile } from '../context/ProfileContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText,
  Shield
} from 'lucide-react';

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { profile, setIsResumeModalOpen } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 py-3 shadow-xs' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Brand Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-sm">
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-gray-900 dark:text-zinc-100 text-base tracking-tight">
                {profile.personal.name}
              </span>
              <span className="text-[11px] text-gray-500 dark:text-zinc-400 font-mono">
                MCA • Cybersecurity & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-850 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Resume Button + Dark Mode Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Direct Resume Modal Trigger */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-colors shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-850 hover:text-gray-900 dark:hover:text-white transition-colors"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-zinc-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg md:hidden text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-850 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/98 dark:bg-zinc-900/98 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-xl flex flex-col gap-1.5">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 dark:border-zinc-800 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsResumeModalOpen(true);
                }}
                className="w-full py-2 px-3 rounded-lg text-center text-xs font-semibold flex items-center justify-center gap-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
