import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  ShieldAlert, 
  Bot, 
  Terminal, 
  Code2, 
  Clock, 
  FolderGit2, 
  Zap, 
  CheckCircle, 
  GraduationCap,
  MapPin
} from 'lucide-react';

export default function About() {
  const { profile } = useProfile();
  const { accent } = useTheme();

  const iconMap = {
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    Bot: <Bot className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    FolderGit2: <FolderGit2 className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />
  };

  return (
    <section id="about" className="py-20 relative bg-gray-50/50 dark:bg-[#090d16]/70 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 block">
            // About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight">
            Curiosity-Driven Systems Builder
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Narrative and Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Detailed Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {profile.personal.bio}
            </p>
            <p>
              Based in Bengaluru, India, I am currently pursuing my <strong>Master of Computer Applications (MCA)</strong> following my BCA. My focus is deliberately split across two symbiotic disciplines: understanding how cyber systems are breached and secured (offensive pentesting and network analysis), and building autonomous AI tools that can reason and accelerate incident response.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                "Hands-on Linux & Networking labs",
                "Offensive security & OWASP Top 10",
                "Tool-calling autonomous AI agents",
                "Clean Python, React & CLI architectures"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${accent.text}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Builder Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {profile.stats?.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200/60 dark:border-gray-750 shadow-2xs text-center flex flex-col items-center justify-center"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${accent.bgLight} ${accent.text}`}>
                  {iconMap[stat.icon] || <Zap className="w-5 h-5" />}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Core Pillars / Focus Areas */}
        <div className="mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-5 text-left">
            Core Areas of Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {profile.pillars?.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-750 shadow-2xs"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 ${accent.bgLight} ${accent.text}`}>
                  {iconMap[pillar.icon] || <Terminal className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Background Summary */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200/60 dark:border-gray-750 shadow-2xs">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <GraduationCap className={`w-5 h-5 ${accent.text}`} />
            <span>Academic Background</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.journey?.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {item.period}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Bengaluru
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {item.institution}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
