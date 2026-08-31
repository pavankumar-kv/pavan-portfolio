import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  ShieldCheck, 
  Bot, 
  Terminal, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Plus,
  Compass,
  Milestone
} from 'lucide-react';

export default function Skills() {
  const { profile, setIsEditorOpen } = useProfile();
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills Matrix & Learning Path
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base">
            Technologies, security concepts, and AI frameworks I actively study, experiment with, and deploy.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === category
                  ? `${accent.button} shadow-md scale-105`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gray-50/70 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-750 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${accent.bgLight} ${accent.text}`}>
                    {skill.category === 'Cybersecurity' ? <ShieldCheck className="w-4 h-4" /> : skill.category === 'AI & ML' ? <Bot className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-gray-400 font-medium">
                      {skill.category || 'General'}
                    </span>
                  </div>
                </div>
                <span className={`text-sm font-bold font-mono ${accent.text}`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Meter */}
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: accent.color,
                    boxShadow: `0 0 10px ${accent.color}80`
                  }}
                />
              </div>
            </div>
          ))}

          {/* Add Skill Card Shortcut */}
          <div
            onClick={() => setIsEditorOpen(true)}
            className="p-5 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:bg-gray-50/50 dark:hover:bg-gray-850/50 group min-h-[100px]"
          >
            <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-emerald-400 mb-1 transition-colors">
              <Plus className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-emerald-400 transition-colors">
              Add New Technical Competency
            </span>
          </div>
        </div>

        {/* Structured Learning Roadmap & Milestones */}
        <div className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Continuous Growth Plan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              My Structured Learning Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.roadmap?.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-750 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase">
                      Stage 0{idx + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      phase.status === 'In Progress' 
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {phase.stage}
                  </h4>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {phase.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accent.text}`} />
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
