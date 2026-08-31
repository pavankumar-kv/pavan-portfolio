import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { 
  ShieldAlert, 
  Bot, 
  Terminal, 
  Code2, 
  CheckCircle, 
  GraduationCap,
  MapPin
} from 'lucide-react';

export default function About() {
  const { profile } = useProfile();

  const iconMap = {
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />,
    Bot: <Bot className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />,
    Terminal: <Terminal className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />,
    Code2: <Code2 className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
  };

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-zinc-900/40 border-t border-gray-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1 block">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight">
            Background & Technical Focus
          </h2>
        </div>

        {/* Narrative and Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-4 text-gray-600 dark:text-zinc-350 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-gray-900 dark:text-zinc-100">
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
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Metric Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {profile.stats?.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center flex flex-col items-center justify-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="mt-8">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-zinc-100 mb-4 text-left">
            Core Areas of Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.pillars?.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                  {iconMap[pillar.icon] || <Terminal className="w-4 h-4 text-zinc-400" />}
                </div>
                <h4 className="text-sm font-bold text-gray-950 dark:text-white mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic History */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
          <h3 className="text-base font-bold text-gray-950 dark:text-white mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-gray-500" />
            <span>Academic Background</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.journey?.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200/60 dark:border-zinc-800">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-gray-800 dark:text-zinc-300">
                    {item.period}
                  </span>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Bengaluru
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mb-1.5">
                  {item.institution}
                </p>
                <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
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
