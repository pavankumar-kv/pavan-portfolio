import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { 
  ArrowUp, 
  Shield, 
  Mail,
  Heart,
  MapPin,
  Terminal
} from 'lucide-react';

export default function Footer() {
  const { profile } = useProfile();
  const { accent } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800/80 bg-white dark:bg-[#060911] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${accent.textGradient} flex items-center justify-center text-white font-bold shadow-sm`}>
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-bold text-gray-900 dark:text-white text-base">
                {profile.personal.name}
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                MCA Student • Bengaluru, India
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills & Path</a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Learning Log</a>
            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={profile.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.personal.email}`}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-xs"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {profile.personal.name}. Built with curiosity in Bengaluru, India.</p>
          <p className="flex items-center justify-center gap-1 font-mono text-[11px]">
            <span>Securing Systems</span> • <span>Architecting AI Agents</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
