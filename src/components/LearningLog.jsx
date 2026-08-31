import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  BookOpen, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  Terminal, 
  Sparkles,
  Shield,
  FileCode2
} from 'lucide-react';

export default function LearningLog() {
  const { profile, setSelectedArticle } = useProfile();
  const { accent } = useTheme();

  return (
    <section id="blog" className="py-20 relative bg-gray-50/50 dark:bg-[#0b0f19]/80 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <Terminal className="w-3.5 h-3.5" />
            <span>Learning Log & Technical Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Documenting the Journey: CTFs, Labs & AI
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base">
            I believe in building in public and writing technical post-mortems to solidify concepts across networking, offensive security, and agentic LLMs.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profile.articles?.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group p-6 sm:p-7 rounded-3xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-750 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${accent.badge}`}>
                    {article.category}
                  </span>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {article.tags?.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-gray-100 dark:bg-gray-750 text-gray-600 dark:text-gray-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-750">
                  <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>

                  <span className={`text-xs font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ${accent.text}`}>
                    Read Note
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Builder Ethos Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-gray-900 via-gray-900 to-gray-950 text-white border border-emerald-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <FileCode2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Have a CTF challenge, lab suggestion, or AI research idea?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                I am always eager to collaborate on security scripts, agent architectures, and technical deep-dives.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap shadow-md ${accent.button}`}
          >
            Connect with Pavan
          </a>
        </div>

      </div>
    </section>
  );
}
