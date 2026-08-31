import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { GithubIcon } from './SocialIcons';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { profile, setSelectedProject } = useProfile();
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'AI & Security'];

  const filteredProjects = filterCategory === 'All'
    ? profile.projects
    : profile.projects.filter(p => (p.category || 'General') === filterCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-zinc-900/40 border-t border-gray-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1 block">
            Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight">
            Security & AI Agent Builds
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 mt-1.5 text-xs sm:text-sm">
            Architectural specifications and open-source implementations built from scratch.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                filterCategory === category
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
                  : 'bg-white dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex flex-col justify-between overflow-hidden shadow-2xs"
            >
              <div>
                {/* Project Image Banner */}
                <div 
                  className="relative h-44 sm:h-48 w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
                  
                  {/* Category & Status Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-zinc-900/90 text-white border border-zinc-700">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-zinc-800 text-zinc-200 border border-zinc-700">
                      {project.stageBadge || 'Building'}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-zinc-300 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <div className="space-y-1 bg-gray-50 dark:bg-zinc-850 p-2.5 rounded-lg text-xs text-gray-600 dark:text-zinc-400 mb-3 border border-gray-100 dark:border-zinc-800">
                      {project.highlights.slice(0, 2).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-zinc-400 font-bold">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-600 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-gray-100 dark:border-zinc-800">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-gray-900 dark:text-zinc-200 inline-flex items-center gap-1 hover:underline"
                  >
                    View Specs
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors text-xs font-medium"
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
