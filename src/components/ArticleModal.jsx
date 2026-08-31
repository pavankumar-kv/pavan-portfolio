import React, { useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { X, Calendar, Clock, Tag, BookOpen, Share2 } from 'lucide-react';

export default function ArticleModal() {
  const { selectedArticle, setSelectedArticle, showToast } = useProfile();
  const { accent } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle, setSelectedArticle]);

  if (!selectedArticle) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Article link copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setSelectedArticle(null)}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-gray-800 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${accent.badge}`}>
              {selectedArticle.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedArticle(null)}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-6">
          
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-tight">
              {selectedArticle.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mt-4 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedArticle.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedArticle.readTime}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Learning Log Write-Up</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {selectedArticle.tags?.map((t, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Render Markdown-like Content */}
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 whitespace-pre-line text-sm sm:text-base">
            {selectedArticle.content}
          </div>

          {/* Footer Note */}
          <div className="mt-8 p-6 rounded-2xl bg-gray-50 dark:bg-gray-850/80 border border-gray-100 dark:border-gray-800 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              💡
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">Active Exploration Log</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                This write-up is part of my continuous learning journey across cybersecurity and AI agent architectures. More CTF breakdowns and code repositories are published as experiments conclude.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
