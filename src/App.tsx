import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsPage } from './pages/ProjectsPage';
import profileData from './data/profile.json';
import aboutData from './data/about.json';
import experienceData from './data/experience.json';
import skillsData from './data/skills.json';
import { FeaturedProjects } from './components/FeaturedProjects';
import projectsData from './data/projects.json';
import { Project } from './types/Project';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './components/BlogPost';
import academicData from './data/academic.json';
import { AcademicSection } from './components/AcademicSection';

interface ProjectsData {
  projects: Project[];
  certificates: [];
  courses: [];
}

function App() {
  const typedProjectsData = projectsData as ProjectsData;
  
  return (
    <Router basename="/mycv">
      <div className="App">
        <Sidebar profile={profileData} />
        <main className="main-content">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          
          <Routes>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/portfolio" element={<ProjectsPage />} />
            <Route path="/" element={
              <>
                <AboutSection about={aboutData} />
                <FeaturedProjects projects={typedProjectsData.projects} />
                <ExperienceSection experiences={experienceData.experiences} />
                <AcademicSection academics={academicData.academics} />
                <SkillsSection skills={skillsData.skills} />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

