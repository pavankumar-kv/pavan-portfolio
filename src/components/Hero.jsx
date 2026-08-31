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
  Terminal, 
  Sparkles, 
  ShieldCheck,
  ChevronDown,
  BookOpen
} from 'lucide-react';

export default function Hero() {
  const { profile, setIsResumeModalOpen, showToast } = useProfile();
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
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2200);
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
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-[#070a12] dark:via-[#090d16] dark:to-[#070a12]">
      
      {/* Glow Backdrop Highlights */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 dark:opacity-25 pointer-events-none transition-colors duration-700 animate-pulse-glow"
        style={{ background: `radial-gradient(circle, ${accent.color} 0%, transparent 70%)` }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full blur-3xl opacity-15 dark:opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent.color} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Positioning, CTAs & Socials */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${accent.badge} shadow-sm animate-fade-in`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{profile.personal.location} • {profile.personal.status}</span>
            </div>

            {/* Name & Dynamic Headline */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-mono text-gray-500 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                <span>👋 Hi, I am</span>
                <span className="font-bold text-gray-900 dark:text-white">{profile.personal.name}</span>
              </h2>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
                Building at the Intersection of <span className={`bg-gradient-to-r ${accent.textGradient} bg-clip-text text-transparent`}>Security & AI</span>
              </h1>
            </div>

            {/* Typewriter Role Box */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <div className="text-base sm:text-2xl font-mono font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span className="text-emerald-500 dark:text-emerald-400 mr-2">$</span>
                <span className={`underline decoration-2 underline-offset-4 decoration-emerald-500 ${accent.text}`}>
                  {text}
                </span>
                <span className="w-0.5 h-6 bg-emerald-500 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Narrative Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              {profile.personal.subheadline || profile.personal.bio}
            </p>

            {/* Location & Email Details */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{profile.personal.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a href={`mailto:${profile.personal.email}`} className="hover:underline text-gray-700 dark:text-gray-300">
                  {profile.personal.email}
                </a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg ${accent.button}`}
              >
                <span>View Projects & Builds</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Print Resume</span>
              </button>

              <a
                href="#blog"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-100 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Learning Log</span>
              </a>
            </div>

            {/* Prominent Socials Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 font-mono">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={profile.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 transition-transform shadow-xs flex items-center gap-1.5 text-xs font-semibold"
                  title="Pavan Kumar on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                  href={profile.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-110 transition-transform shadow-xs flex items-center gap-1.5 text-xs font-semibold"
                  title="Pavan Kumar on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href={`mailto:${profile.personal.email}`}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-rose-500 hover:scale-110 transition-transform shadow-xs flex items-center gap-1.5 text-xs font-semibold"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Terminal Widget */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <TerminalWidget />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <a href="#about" className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
