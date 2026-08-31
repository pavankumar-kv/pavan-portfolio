import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  BookOpen, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  Terminal
} from 'lucide-react';

export default function LearningLog() {
  const { profile, setSelectedArticle } = useProfile();
  const { accent } = useTheme();

  return (
    <section id="blog" className="py-20 relative bg-white dark:bg-[#070a12] border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 block">
            // Knowledge & Notes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight">
            Learning Log & CTF Notes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Technical breakdowns covering networking experiments, offensive security concepts, and agent workflows.
          </p>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.articles?.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group p-5 sm:p-6 rounded-3xl bg-gray-50/70 dark:bg-gray-850/80 border border-gray-200/60 dark:border-gray-750/70 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white group-hover:text-emerald-500 transition-colors leading-snug mb-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags?.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-750"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200/50 dark:border-gray-750">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>

                  <span className={`text-xs font-semibold inline-flex items-center gap-1 ${accent.text}`}>
                    Read Note
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
