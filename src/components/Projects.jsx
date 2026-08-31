import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './SocialIcons';
import { 
  FolderGit2, 
  ArrowUpRight,
  Hammer
} from 'lucide-react';

export default function Projects() {
  const { profile, setSelectedProject } = useProfile();
  const { accent } = useTheme();
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'AI & Security'];

  const filteredProjects = filterCategory === 'All'
    ? profile.projects
    : profile.projects.filter(p => (p.category || 'General') === filterCategory);

  return (
    <section id="projects" className="py-20 relative bg-gray-50/50 dark:bg-[#090d16]/70 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 block">
            // Engineering Builds
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight">
            Security Tools & AI Agent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Architectural specifications and open-source implementations built from scratch.
          </p>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterCategory === category
                  ? `${accent.button} shadow-xs`
                  : 'bg-white dark:bg-gray-850 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-2xs'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-gray-850 border border-gray-200/60 dark:border-gray-750/70 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Image Banner */}
                <div 
                  className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-900 cursor-pointer"
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
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/60 text-white border border-white/20 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-emerald-500/90 text-white shadow-2xs flex items-center gap-1">
                      <Hammer className="w-3 h-3" />
                      {project.stageBadge || 'Building'}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-5 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List Preview */}
                  {project.highlights && (
                    <div className="space-y-1 bg-gray-50 dark:bg-gray-800/60 p-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-xs text-gray-600 dark:text-gray-300 mb-4">
                      {project.highlights.slice(0, 2).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-750">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`text-xs font-semibold inline-flex items-center gap-1 hover:underline ${accent.text}`}
                  >
                    View Specifications
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-xs font-medium"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
