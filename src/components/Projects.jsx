import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  Plus, 
  Sparkles, 
  ArrowUpRight,
  Maximize2,
  Hammer,
  Layers,
  ShieldAlert,
  Bot
} from 'lucide-react';

export default function Projects() {
  const { profile, setSelectedProject, setIsEditorOpen } = useProfile();
  const { accent } = useTheme();
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'AI & Security'];

  const filteredProjects = filterCategory === 'All'
    ? profile.projects
    : profile.projects.filter(p => (p.category || 'General') === filterCategory);

  return (
    <section id="projects" className="py-20 relative bg-gray-50/50 dark:bg-[#090d16]/80 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Builder Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Security Tools & AI Agent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base">
            I am building several security tools and LLM agent prototypes from scratch. Explore their architectural specifications and planned features below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                filterCategory === category
                  ? `${accent.button} shadow-md scale-105`
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-xs'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-750 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              <div>
                {/* Project Image Banner */}
                <div 
                  className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-900 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-black/60 text-white border border-white/20 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/90 text-white shadow-md flex items-center gap-1.5">
                      <Hammer className="w-3.5 h-3.5" />
                      {project.stageBadge || 'Building'}
                    </span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List Preview */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-5 bg-gray-50 dark:bg-gray-800/60 p-3.5 rounded-2xl border border-gray-100 dark:border-gray-700/60 text-xs text-gray-600 dark:text-gray-300">
                      <div className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] mb-1">
                        Architecture & Highlights:
                      </div>
                      {project.highlights.slice(0, 2).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-750">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`text-xs font-bold inline-flex items-center gap-1 hover:underline ${accent.text}`}
                  >
                    View Full Specifications
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-xs font-semibold"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Prompt to Add More Projects */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsEditorOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-dashed border-gray-300 dark:border-gray-700 hover:border-emerald-500 text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <Plus className="w-4 h-4 text-emerald-500" />
            <span>Add Another Project Idea or Working Repo</span>
          </button>
        </div>

      </div>
    </section>
  );
}
