import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Experience() {
  const { profile } = useProfile();
  const { accent } = useTheme();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base">
            My professional journey, roles held, and educational background.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-800 flex gap-2">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience ({profile.experiences?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education ({profile.education?.length || 0})</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 sm:ml-32 space-y-10">
          
          {activeTab === 'experience' && profile.experiences?.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node Point */}
              <div 
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-gray-950 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: accent.color }}
              />

              {/* Date Tag for Desktop (Left Sidebar Style) */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase">
                  {exp.period}
                </span>
              </div>

              {/* Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-750 shadow-sm hover:shadow-md transition-shadow">
                <div className="sm:hidden mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className={`text-base font-semibold ${accent.text}`}>
                      {exp.company}
                    </div>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 mt-2">
                  {exp.description}
                </p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-750">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Highlights:</div>
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${accent.text}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}

          {activeTab === 'education' && profile.education?.map((edu, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              <div 
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-gray-950 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: accent.color }}
              />

              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase">
                  {edu.period}
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-750 shadow-sm hover:shadow-md transition-shadow">
                <div className="sm:hidden mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold font-mono text-gray-500 dark:text-gray-400 uppercase">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <div className={`text-base font-semibold mb-3 ${accent.text}`}>
                  {edu.institution}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
