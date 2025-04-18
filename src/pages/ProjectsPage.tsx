import React, { useState, useMemo } from 'react';
import { Project } from '../types/Project';
import { ProjectCard } from '../components/ProjectCard';
import projectsData from '../data/projects.json';

interface ProjectsData {
  projects: Project[];
  certificates: [];
  courses: [];
}

export const ProjectsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  
  const allProjects: Project[] = (projectsData as ProjectsData).projects;
  
  // Get unique technologies from all projects
  const technologies = useMemo(() => {
    const techs = new Set<string>();
    allProjects.forEach(project => 
      project.technologies.forEach(tech => techs.add(tech))
    );
    return Array.from(techs).sort();
  }, [allProjects]);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      const techMatch = selectedTech === 'all' || project.technologies.includes(selectedTech);
      return typeMatch && techMatch;
    });
  }, [allProjects, selectedType, selectedTech]);

  return (
    <div className="projects-page">
      <h1>Portfolio</h1>
      
      <div className="filters">
        <div className="filter-group">
          <label>Type:</label>
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="project">Projects</option>
            <option value="certificate">Certificates</option>
            <option value="course">Courses</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Technology:</label>
          <select 
            value={selectedTech} 
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            <option value="all">All</option>
            {technologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};