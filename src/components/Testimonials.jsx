import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Award, 
  MessageSquareQuote, 
  Star, 
  CheckCircle, 
  ShieldCheck,
  Quote
} from 'lucide-react';

export default function Testimonials() {
  const { profile } = useProfile();
  const { accent } = useTheme();

  return (
    <section id="testimonials" className="py-20 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Social Proof & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Testimonials & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        {/* Certifications Row */}
        {profile.certifications && profile.certifications.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-left flex items-center gap-2">
              <Award className={`w-5 h-5 ${accent.text}`} />
              <span>Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-750 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      ✓ {cert.badge || 'Verified'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        {profile.testimonials && profile.testimonials.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-left flex items-center gap-2">
              <MessageSquareQuote className={`w-5 h-5 ${accent.text}`} />
              <span>What Colleagues & Leaders Say</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profile.testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-750 shadow-sm relative flex flex-col justify-between"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200 dark:text-gray-700 pointer-events-none" />
                  
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 italic text-base leading-relaxed mb-6">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/20"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                        {item.author}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
