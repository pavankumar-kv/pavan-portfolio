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
  Sparkles,
  MapPin
} from 'lucide-react';

export default function About() {
  const { profile } = useProfile();
  const { accent } = useTheme();

  const iconMap = {
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Bot: <Bot className="w-6 h-6" />,
    Terminal: <Terminal className="w-6 h-6" />,
    Code2: <Code2 className="w-6 h-6" />,
    Clock: <Clock className="w-6 h-6" />,
    FolderGit2: <FolderGit2 className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />
  };

  return (
    <section id="about" className="py-20 relative bg-gray-50/60 dark:bg-[#0a0e1a]/70 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Pavan Kumar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Curiosity-Driven Builder & Systems Thinker
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        {/* Narrative and Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Detailed Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-gray-800 dark:text-gray-100 text-lg">
              {profile.personal.bio}
            </p>
            <p>
              Based in Bengaluru, India, I am currently pursuing my <strong>Master of Computer Applications (MCA)</strong> following my BCA. My focus is deliberately split across two symbiotic disciplines: understanding how cyber systems are breached and secured (offensive pentesting and network analysis), and building autonomous AI tools that can reason and accelerate incident response.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Hands-on Linux & Networking labs",
                "Offensive security & OWASP Top 10",
                "Tool-calling autonomous AI agents",
                "Clean Python, React & CLI architectures"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${accent.text}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Builder Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profile.stats?.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-750 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${accent.bgLight} ${accent.text}`}>
                  {iconMap[stat.icon] || <Zap className="w-6 h-6" />}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Core Pillars / Focus Areas */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-left">
            Core Areas of Hands-On Exploration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.pillars?.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-750 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${accent.bgLight} ${accent.text}`}>
                  {iconMap[pillar.icon] || <Terminal className="w-6 h-6" />}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Journey Summary */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-750 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className={`w-6 h-6 ${accent.text}`} />
            <span>Academic Journey (BCA → MCA)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.journey?.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700/60">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                    {item.period}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3" />
                    Bengaluru
                  </span>
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {item.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
