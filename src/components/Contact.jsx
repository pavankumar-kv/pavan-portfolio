import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
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
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-zinc-900/40 border-t border-gray-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1 block">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 mt-1.5 text-xs sm:text-sm">
            Open for internships, cybersecurity & AI engineering roles, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xs space-y-3.5">
              
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Direct Channels
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                  Reach out directly via email, GitHub, or LinkedIn.
                </p>
              </div>

              <div className="space-y-2">
                
                {/* Email */}
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200/60 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-gray-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-zinc-300">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-gray-400">Email</div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                        {profile.personal.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.personal.email, 'Email')}
                    className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200/60 dark:border-zinc-800 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-gray-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-zinc-300">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400">Location</div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">
                      {profile.personal.location} (IST / UTC+5:30)
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={profile.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200/60 dark:border-zinc-800 flex items-center justify-between hover:border-gray-400 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-gray-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-zinc-300">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-400">GitHub</div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
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
                  className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200/60 dark:border-zinc-800 flex items-center justify-between hover:border-gray-400 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-gray-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-zinc-300">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-400">LinkedIn</div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
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
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xs">
              
              {submitted ? (
                <div className="py-8 text-center space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    Message Sent
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 max-w-xs mx-auto">
                    Thank you! I will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1 font-mono">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1 font-mono">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 text-xs sm:text-sm"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Role / Project Inquiry"
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-zinc-300 mb-1 font-mono">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
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
