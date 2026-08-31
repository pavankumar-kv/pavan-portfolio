import React, { useState, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import TerminalWidget from './TerminalWidget';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  ChevronDown,
  BookOpen,
  ShieldCheck
} from 'lucide-react';

export default function Hero() {
  const { profile, setIsResumeModalOpen } = useProfile();
  const { accent } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = profile.roles && profile.roles.length > 0 
    ? profile.roles 
    : [
        'Cybersecurity & Pentesting Explorer',
        'Autonomous AI Agent Builder',
        'MCA Student @ Bengaluru',
        'Hands-on Systems Tinkerer'
      ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white dark:bg-[#070a12]">
      
      {/* Subtle Background Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-3xl opacity-15 dark:opacity-20 pointer-events-none transition-colors duration-700"
        style={{ background: `radial-gradient(circle, ${accent.color} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Roles, Narrative, and Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.personal.location} • {profile.personal.status}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-mono font-medium text-gray-500 dark:text-gray-400">
                Pavan Kumar
              </h2>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.18]">
                Building at the Intersection of <span className={`bg-gradient-to-r ${accent.textGradient} bg-clip-text text-transparent`}>Security & AI</span>
              </h1>
            </div>

            {/* Typewriter Role Box */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <div className="text-base sm:text-xl font-mono font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <span className="text-emerald-500 mr-2">$</span>
                <span className="text-gray-900 dark:text-gray-100 font-semibold">{text}</span>
                <span className="w-0.5 h-5 bg-emerald-500 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Narrative Subheadline */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              {profile.personal.subheadline || profile.personal.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 w-full">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-sm ${accent.button}`}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-gray-850 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-750 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>View Resume</span>
              </button>

              <a
                href="#blog"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-850 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Learning Log</span>
              </a>
            </div>

            {/* Clean Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-gray-400">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profile.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profile.personal.email}`}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Terminal Widget */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <TerminalWidget />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#about" className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
