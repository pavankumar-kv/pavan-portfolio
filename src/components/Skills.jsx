import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const { profile } = useProfile();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'AI & ML', 'Dev & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? profile.skills
    : profile.skills.filter(s => (s.category || 'General') === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1 block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight">
            Skills & Learning Matrix
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
                  : 'bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clean Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 flex items-center justify-between gap-3"
            >
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-zinc-100 text-xs sm:text-sm">
                  {skill.name}
                </h4>
                <span className="text-[11px] text-gray-500 dark:text-zinc-400">
                  {skill.category || 'General'}
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold text-gray-600 dark:text-zinc-400 bg-gray-200/60 dark:bg-zinc-800 px-2 py-0.5 rounded">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        {/* Clean 3-Stage Learning Roadmap */}
        <div className="mt-14 pt-10 border-t border-gray-200 dark:border-zinc-850">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100">
              Learning Roadmap & Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.roadmap?.map((phase, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">
                      Stage 0{idx + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      phase.status === 'In Progress' 
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' 
                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-gray-900 dark:text-zinc-100 mb-2.5">
                    {phase.stage}
                  </h4>

                  <ul className="space-y-1.5 text-xs text-gray-600 dark:text-zinc-400">
                    {phase.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
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
