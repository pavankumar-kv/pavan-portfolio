import React, { useState, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';
import { 
  X, 
  Save, 
  Download, 
  Upload, 
  RotateCcw, 
  User, 
  Wrench, 
  FolderGit2, 
  Share2, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';

export default function ProfileEditorModal() {
  const { 
    profile, 
    updateProfile, 
    updatePersonal, 
    addProject, 
    deleteProject, 
    addSkill, 
    deleteSkill, 
    resetToDefault, 
    exportProfileJSON, 
    importProfileJSON, 
    isEditorOpen, 
    setIsEditorOpen,
    showToast
  } = useProfile();

  const { accent } = useTheme();

  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    bio: '',
    status: '',
    location: '',
    email: '',
    phone: '',
    avatar: '',
    github: '',
    linkedin: '',
    twitter: ''
  });

  // State for new project form
  const [newProject, setNewProject] = useState({
    title: '',
    tagline: '',
    description: '',
    category: 'Full Stack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tech: 'React, Tailwind CSS, Node.js',
    demoUrl: '',
    githubUrl: '',
    highlights: 'Responsive interface, Fast loading performance'
  });

  // State for new skill form
  const [newSkill, setNewSkill] = useState({
    name: '',
    category: 'Frontend',
    level: 85
  });

  useEffect(() => {
    if (profile && profile.personal) {
      setFormData({
        name: profile.personal.name || '',
        tagline: profile.personal.tagline || '',
        bio: profile.personal.bio || '',
        status: profile.personal.status || '',
        location: profile.personal.location || '',
        email: profile.personal.email || '',
        phone: profile.personal.phone || '',
        avatar: profile.personal.avatar || '',
        github: profile.personal.socials?.github || '',
        linkedin: profile.personal.socials?.linkedin || '',
        twitter: profile.personal.socials?.twitter || ''
      });
    }
  }, [profile, isEditorOpen]);

  if (!isEditorOpen) return null;

  const handleSavePersonal = (e) => {
    e.preventDefault();
    updatePersonal({
      name: formData.name,
      tagline: formData.tagline,
      bio: formData.bio,
      status: formData.status,
      location: formData.location,
      email: formData.email,
      phone: formData.phone,
      avatar: formData.avatar,
      socials: {
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter
      }
    });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title) {
      showToast('Please enter a project title', 'error');
      return;
    }
    const techArray = newProject.tech.split(',').map(t => t.trim()).filter(Boolean);
    const highlightsArray = newProject.highlights.split(',').map(h => h.trim()).filter(Boolean);

    addProject({
      ...newProject,
      tech: techArray.length > 0 ? techArray : ['React', 'JavaScript'],
      highlights: highlightsArray
    });

    setNewProject({
      title: '',
      tagline: '',
      description: '',
      category: 'Full Stack',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: 'React, Tailwind CSS, Node.js',
      demoUrl: '',
      githubUrl: '',
      highlights: 'Responsive interface, Fast loading performance'
    });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name) {
      showToast('Please enter skill name', 'error');
      return;
    }
    addSkill({
      name: newSkill.name,
      category: newSkill.category,
      level: parseInt(newSkill.level, 10) || 80
    });
    setNewSkill({
      name: '',
      category: 'Frontend',
      level: 85
    });
  };

  const handleImportFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        importProfileJSON(json);
      } catch (err) {
        showToast('Invalid JSON file format', 'error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setIsEditorOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${accent.button}`}>
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Portfolio Account & Customizer
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${accent.badge}`}>
                  Live Editor
                </span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Personalize your bio, projects, skills, and account details in real-time.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditorOpen(false)}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 dark:border-gray-800 px-6 bg-gray-50/50 dark:bg-gray-850/50 overflow-x-auto gap-2 py-2">
          {[
            { id: 'personal', label: 'Personal Info & Bio', icon: <User className="w-4 h-4" /> },
            { id: 'skills', label: `Skills (${profile.skills?.length || 0})`, icon: <Wrench className="w-4 h-4" /> },
            { id: 'projects', label: `Projects (${profile.projects?.length || 0})`, icon: <FolderGit2 className="w-4 h-4" /> },
            { id: 'backup', label: 'Export & Import', icon: <Share2 className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: PERSONAL INFO */}
          {activeTab === 'personal' && (
            <form onSubmit={handleSavePersonal} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Availability / Status
                  </label>
                  <input
                    type="text"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    placeholder="Available for hire"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Headline / Tagline
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    placeholder="Full-Stack Software Engineer & UI/UX Craftsman"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Bio Summary
                  </label>
                  <textarea
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Avatar Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.avatar}
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <button
                  type="submit"
                  className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-md ${accent.button}`}
                >
                  <Save className="w-4 h-4" />
                  <span>Save Personal Details</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: SKILLS MANAGER */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              {/* Add Skill Form */}
              <form onSubmit={handleAddSkill} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-500" />
                  Add New Skill
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Next.js / Rust / Go"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>
                  <div>
                    <select
                      value={newSkill.category}
                      onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    >
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Databases">Databases</option>
                      <option value="DevOps & Tools">DevOps & Tools</option>
                      <option value="AI / ML">AI / ML</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="50"
                      max="100"
                      value={newSkill.level}
                      onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                      className="w-full"
                    />
                    <span className="text-xs font-bold font-mono w-10 text-right">{newSkill.level}%</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm ${accent.button}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Skill
                </button>
              </form>

              {/* Existing Skills List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Current Skills</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto p-1">
                  {profile.skills?.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">{skill.name}</div>
                        <div className="text-xs text-gray-400">{skill.category} • {skill.level}%</div>
                      </div>
                      <button
                        onClick={() => deleteSkill(skill.name)}
                        className="p-1.5 text-gray-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        title="Delete skill"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS MANAGER */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add Project Form */}
              <form onSubmit={handleAddProject} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-500" />
                  Add New Project
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HyperScale Cloud API"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Category</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    >
                      <option value="Full Stack">Full Stack</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="AI / ML">AI / ML</option>
                      <option value="Mobile">Mobile</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Short Tagline</label>
                    <input
                      type="text"
                      placeholder="One-line elevator pitch"
                      value={newProject.tagline}
                      onChange={(e) => setNewProject({ ...newProject, tagline: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Description</label>
                    <textarea
                      rows={2}
                      placeholder="Overview of project purpose, architecture, and impact"
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Tech Stack (comma separated)</label>
                    <input
                      type="text"
                      placeholder="React, TypeScript, Tailwind, Node.js"
                      value={newProject.tech}
                      onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Image URL</label>
                    <input
                      type="url"
                      value={newProject.image}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Live Demo URL</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={newProject.demoUrl}
                      onChange={(e) => setNewProject({ ...newProject, demoUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">GitHub Repo URL</label>
                    <input
                      type="url"
                      placeholder="https://github.com/..."
                      value={newProject.githubUrl}
                      onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={newProject.featured}
                      onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                      className="rounded text-indigo-600"
                    />
                    Mark as Featured Project
                  </label>

                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm ${accent.button}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Project
                  </button>
                </div>
              </form>

              {/* Current Projects List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Manage Existing Projects</h4>
                <div className="space-y-2 max-h-72 overflow-y-auto p-1">
                  {profile.projects?.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80'; }}
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-gray-900 dark:text-white truncate">{proj.title}</div>
                          <div className="text-xs text-gray-400">{proj.category} • {proj.tech?.slice(0, 3).join(', ')}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteProject(proj.id)}
                        className="p-2 text-gray-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BACKUP, EXPORT & IMPORT */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent.bgLight} ${accent.text}`}>
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Export Profile JSON
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Save a complete backup of your customized portfolio configurations to your computer.
                    </p>
                  </div>
                </div>
                <button
                  onClick={exportProfileJSON}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm ${accent.button}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Config File (.json)</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent.bgLight} ${accent.text}`}>
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                      Import Profile JSON
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Restore or load a previously exported portfolio profile.
                    </p>
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 cursor-pointer shadow-xs">
                  <Upload className="w-4 h-4" />
                  <span>Select JSON File</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportFile}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20 space-y-3">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <RotateCcw className="w-4 h-4" />
                  Reset to Default Sample Data
                </div>
                <p className="text-xs text-rose-700/80 dark:text-rose-300/80">
                  Resetting will restore the default placeholder projects, bio, and skills.
                </p>
                <button
                  onClick={resetToDefault}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-xs"
                >
                  Reset Portfolio Data
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>Changes are automatically saved in local storage</span>
          </div>
          <button
            onClick={() => setIsEditorOpen(false)}
            className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold hover:bg-gray-300 dark:hover:bg-gray-750 transition-colors"
          >
            Done Editing
          </button>
        </div>

      </div>
    </div>
  );
}
