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
  ExternalLink,
  MessageSquare, 
  Sparkles,
  Terminal,
  ShieldCheck
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
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-[#070a12] border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3 ${accent.badge}`}>
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base">
            Looking for cybersecurity internships, AI/ML engineering roles, CTF team members, or technical project collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r mx-auto mt-4 rounded-full" style={{ background: accent.color }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gray-50/70 dark:bg-gray-850 border border-gray-100 dark:border-gray-750 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Direct Channels
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Feel free to reach out directly via email, GitHub, or LinkedIn.
                </p>
              </div>

              <div className="space-y-3.5">
                
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-gray-400 font-medium font-mono">Email (Direct)</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {profile.personal.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.personal.email, 'Email')}
                    className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium font-mono">Location</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {profile.personal.location} (IST / UTC+5:30)
                    </div>
                  </div>
                </div>

                {/* GitHub Channel */}
                <a
                  href={profile.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium font-mono">GitHub Profile</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        github.com/pavankumar-kv
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={profile.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accent.bgLight} ${accent.text}`}>
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium font-mono">LinkedIn Profile</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        linkedin.com/in/pavan-kumar-kv
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </a>

              </div>

              {/* Status Notice */}
              <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <div className="text-xs text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Current Status:</span> Actively seeking internships and early-career roles in Bengaluru or Remote.
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gray-50/70 dark:bg-gray-850 border border-gray-100 dark:border-gray-750 shadow-sm relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                    Thanks for reaching out! I have received your message and will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-mono">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Recruiter"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-mono">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Security Role / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-mono">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Pavan, we'd like to talk about an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 ${accent.button}`}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
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
