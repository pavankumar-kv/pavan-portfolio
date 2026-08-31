import React, { useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './SocialIcons';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useProfile();
  const { accent } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, setSelectedProject]);

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setSelectedProject(null)} 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-gray-800 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${accent.badge}`}>
                {selectedProject.category || 'Featured Project'}
              </span>
              {selectedProject.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {selectedProject.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-medium mt-1">
              {selectedProject.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Overview
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {selectedProject.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {selectedProject.highlights && selectedProject.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                Key Accomplishments & Features
              </h4>
              <div className="space-y-2.5">
                {selectedProject.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accent.text}`} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-4">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-md ${accent.button}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-750 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            <button
              onClick={() => setSelectedProject(null)}
              className="ml-auto px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
