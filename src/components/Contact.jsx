import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const { profile, showToast } = useProfile();
  const { accent } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast(`Thank you, ${formData.name}! Your message has been sent.`);
      
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-gray-50/50 dark:bg-[#090d16]/70 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 block">
            // Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Open for internships, cybersecurity & AI engineering opportunities, and technical discussions.
          </p>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200/60 dark:border-gray-750/70 shadow-2xs space-y-4">
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  Reach out directly via email, GitHub, or LinkedIn.
                </p>
              </div>

              <div className="space-y-2.5">
                
                {/* Email */}
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-gray-400">Email</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {profile.personal.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.personal.email, 'Email')}
                    className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {profile.personal.location}
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={profile.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-400">GitHub</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                        github.com/pavankumar-kv
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-400">LinkedIn</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                        linkedin.com/in/pavan-kumar-kv
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>

              </div>

            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-850 border border-gray-200/60 dark:border-gray-750/70 shadow-2xs">
              
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                    Thanks for reaching out! I will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 font-mono">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 font-mono">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Role / Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 font-mono">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-all ${accent.button}`}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
