import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ProfileProvider } from './context/ProfileContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningLog from './components/LearningLog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfileEditorModal from './components/ProfileEditorModal';
import ProjectModal from './components/ProjectModal';
import ArticleModal from './components/ArticleModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070a12] text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningLog />
        <Contact />
      </main>
      <Footer />
      
      {/* Overlays and Modals */}
      <ProfileEditorModal />
      <ProjectModal />
      <ArticleModal />
      <ResumeModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <PortfolioApp />
      </ProfileProvider>
    </ThemeProvider>
  );
}
