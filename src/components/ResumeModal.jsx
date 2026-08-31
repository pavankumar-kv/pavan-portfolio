import React, { useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle,
  GraduationCap,
  Briefcase,
  Code2,
  Shield
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ResumeModal() {
  const { profile, isResumeModalOpen, setIsResumeModalOpen, showToast } = useProfile();
  const { accent } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsResumeModalOpen(false);
    };
    if (isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumeModalOpen, setIsResumeModalOpen]);

  if (!isResumeModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resume = profile.resume || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto print:p-0 print:static">
      {/* Backdrop */}
      <div 
        onClick={() => setIsResumeModalOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity print:hidden"
      />

      {/* Modal Container */}
      <div className="relative bg-white text-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 print:shadow-none print:max-h-none print:w-full print:rounded-none animate-in fade-in zoom-in-95 duration-200">
        
        {/* Print & Action Bar Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-gray-900 text-white flex items-center justify-between print:hidden border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm sm:text-base">Pavan Kumar — Curriculum Vitae (Print & Export)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-gray-900">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
                  {resume.fullName || profile.personal.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-emerald-700 mt-1">
                  {resume.title || profile.personal.tagline}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-gray-600 space-y-1 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{resume.location || profile.personal.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <a href={`mailto:${profile.personal.email}`} className="text-emerald-700 hover:underline">
                    {profile.personal.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-2 pt-1">
                  <a 
                    href={profile.personal.socials.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-700 hover:text-black inline-flex items-center gap-1 font-semibold text-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span>•</span>
                  <a 
                    href={profile.personal.socials.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 font-semibold text-xs"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {resume.summary || profile.personal.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-emerald-100 pb-1.5 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="space-y-4">
              {resume.education?.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-xs font-medium text-gray-600">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-xs text-gray-600 mt-1">{edu.details}</p>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-emerald-100 pb-1.5 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills & Competencies</span>
            </h2>

            <div className="space-y-2 text-xs sm:text-sm">
              {resume.technicalSkills && Object.entries(resume.technicalSkills).map(([cat, skills], idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2">
                  <span className="sm:col-span-4 font-bold text-gray-900">{cat}:</span>
                  <span className="sm:col-span-8 text-gray-700">{skills}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Builder Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-emerald-100 pb-1.5 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects & Technical Builds</span>
            </h2>

            <div className="space-y-4">
              {resume.keyProjects?.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-gray-900">{proj.name}</h3>
                    <span className="text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      {proj.tech}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Highlights */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-emerald-100 pb-1.5 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Strengths & Focus Areas</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
              {resume.strengths?.map((st, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                  <span>{st}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
