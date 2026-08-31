import React, { createContext, useContext, useState, useEffect } from 'react';
import { pavanProfile } from '../data/pavanProfile';

const ProfileContext = createContext();

const STORAGE_KEY = 'pavan_portfolio_custom_data_v2';

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load profile from storage:', e);
    }
    return pavanProfile;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to persist profile:', e);
    }
  }, [profile]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
  };

  const clearToast = () => {
    setToastMessage(null);
  };

  const updateProfile = (updatedFields) => {
    setProfile(prev => ({
      ...prev,
      ...updatedFields
    }));
    showToast('Profile updated successfully!');
  };

  const updatePersonal = (personalFields) => {
    setProfile(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        ...personalFields
      }
    }));
    showToast('Personal info saved!');
  };

  // Projects CRUD
  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: `proj-${Date.now()}`
    };
    setProfile(prev => ({
      ...prev,
      projects: [projectWithId, ...prev.projects]
    }));
    showToast('New project added to showcase!');
  };

  const updateProject = (id, updatedProject) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...updatedProject } : p)
    }));
    showToast('Project updated!');
  };

  const deleteProject = (id) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
    showToast('Project removed', 'info');
  };

  // Skills CRUD
  const addSkill = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
    showToast(`Skill "${skill.name}" added!`);
  };

  const deleteSkill = (skillName) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.name !== skillName)
    }));
    showToast('Skill removed', 'info');
  };

  // Reset & Export/Import
  const resetToDefault = () => {
    setProfile(pavanProfile);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Reset to default Pavan Kumar portfolio profile', 'info');
  };

  const exportProfileJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(profile, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `pavan-kumar-portfolio-config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Portfolio configuration downloaded as JSON!');
  };

  const importProfileJSON = (jsonData) => {
    try {
      if (!jsonData || typeof jsonData !== 'object') {
        throw new Error('Invalid JSON format');
      }
      setProfile(jsonData);
      showToast('Profile imported successfully!');
      return true;
    } catch (err) {
      showToast('Failed to import JSON file. Please check file structure.', 'error');
      return false;
    }
  };

  return (
    <ProfileContext.Provider value={{
      profile,
      updateProfile,
      updatePersonal,
      addProject,
      updateProject,
      deleteProject,
      addSkill,
      deleteSkill,
      resetToDefault,
      exportProfileJSON,
      importProfileJSON,
      isEditorOpen,
      setIsEditorOpen,
      isResumeModalOpen,
      setIsResumeModalOpen,
      selectedProject,
      setSelectedProject,
      selectedArticle,
      setSelectedArticle,
      toastMessage,
      showToast,
      clearToast
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
