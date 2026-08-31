import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { 
  ArrowUpRight, 
  Calendar, 
  Clock
} from 'lucide-react';

export default function LearningLog() {
  const { profile, setSelectedArticle } = useProfile();

  return (
    <section id="blog" className="py-20 bg-white dark:bg-zinc-950 border-t border-gray-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1 block">
            Technical Writing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight">
            Learning Log & CTF Notes
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 mt-1.5 text-xs sm:text-sm">
            Technical notes covering networking experiments, offensive security concepts, and agent workflows.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profile.articles?.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex flex-col justify-between cursor-pointer hover:border-gray-300 dark:hover:border-zinc-700 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white leading-snug mb-1.5">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-3">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {article.tags?.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono text-gray-500 dark:text-zinc-500 bg-gray-100 dark:bg-zinc-850"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-gray-200/60 dark:border-zinc-800">
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>

                  <span className="text-xs font-semibold text-gray-900 dark:text-zinc-200 inline-flex items-center gap-1">
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
