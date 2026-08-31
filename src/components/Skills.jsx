import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  ShieldCheck, 
  Bot, 
  Code2, 
  CheckCircle2, 
  Compass
} from 'lucide-react';

export default function Skills() {
  const { profile } = useProfile();
  const { accent } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'AI & ML', 'Dev & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? profile.skills
    : profile.skills.filter(s => (s.category || 'General') === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-white dark:bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 block">
            // Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight">
            Skills & Learning Matrix
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === category
                  ? `${accent.button} shadow-xs`
                  : 'bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-gray-50/70 dark:bg-gray-850/80 border border-gray-200/60 dark:border-gray-750/70 shadow-2xs"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${accent.bgLight} ${accent.text}`}>
                    {skill.category === 'Cybersecurity' ? <ShieldCheck className="w-3.5 h-3.5" /> : skill.category === 'AI & ML' ? <Bot className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] text-gray-400">
                      {skill.category || 'General'}
                    </span>
                  </div>
                </div>
                <span className={`text-xs font-bold font-mono ${accent.text}`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Meter */}
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-750 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: accent.color 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Structured Learning Roadmap */}
        <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 block">
              // Continuous Growth
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Learning Roadmap & Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {profile.roadmap?.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/60 dark:border-gray-750 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase">
                      Stage 0{idx + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      phase.status === 'In Progress' 
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                        : 'bg-gray-100 dark:bg-gray-750 text-gray-600 dark:text-gray-300'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                    {phase.stage}
                  </h4>

                  <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    {phase.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${accent.text}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
