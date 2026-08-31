import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp, Mail, Shield } from 'lucide-react';

export default function Footer() {
  const { profile } = useProfile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-xs">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <span className="font-bold text-gray-900 dark:text-white text-sm">
                {profile.personal.name}
              </span>
              <p className="text-[11px] text-gray-500 dark:text-zinc-400 font-mono">
                MCA Student • Bengaluru, India
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500 dark:text-zinc-400">
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Learning Log</a>
            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={profile.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${profile.personal.email}`}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-rose-500 transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-850/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400 text-center sm:text-left font-mono">
          <p>© {new Date().getFullYear()} {profile.personal.name}. All rights reserved.</p>
          <p>Bengaluru, India</p>
        </div>

      </div>
    </footer>
  );
}
