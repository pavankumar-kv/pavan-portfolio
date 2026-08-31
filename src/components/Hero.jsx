import React, { useState, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import TerminalWidget from './TerminalWidget';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  ChevronDown
} from 'lucide-react';

export default function Hero() {
  const { profile, setIsResumeModalOpen } = useProfile();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Cybersecurity & Pentesting Explorer',
    'Autonomous AI Agent Builder',
    'MCA Student @ Bengaluru',
    'Systems & Network Tinkerer'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2500);
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
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-xs font-medium text-gray-700 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{profile.personal.location} • {profile.personal.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono font-medium text-gray-500 dark:text-zinc-400">
                Pavan Kumar
              </h2>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.15]">
                Building in Cybersecurity & Autonomous AI
              </h1>
            </div>

            {/* Typewriter Role Box */}
            <div className="h-7 flex items-center justify-center lg:justify-start">
              <div className="text-sm sm:text-lg font-mono font-medium text-gray-700 dark:text-zinc-300 flex items-center">
                <span className="text-gray-400 dark:text-zinc-500 mr-2">&gt;</span>
                <span className="text-gray-950 dark:text-zinc-100 font-semibold">{text}</span>
                <span className="w-0.5 h-4 bg-gray-900 dark:bg-zinc-100 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Narrative Subheadline */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              MCA student based in Bengaluru, India. Exploring offensive security, web penetration testing, and tool-using AI agents. Fast learner with a builder's mindset, seeking high-impact internships and early-career roles.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 w-full">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white dark:bg-zinc-900 text-gray-800 dark:text-zinc-200 border border-gray-300 dark:border-zinc-750 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-gray-500" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] font-mono text-gray-400 uppercase">Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profile.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:text-blue-600 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profile.personal.email}`}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:text-rose-500 transition-colors"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Terminal Widget */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <TerminalWidget />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#about" className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
