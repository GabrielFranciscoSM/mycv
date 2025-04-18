import React from 'react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const renderLinks = () => {
    switch (project.type) {
      case 'project':
        return (
          <>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </>
        );
      case 'certificate':
      case 'course':
        return project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View {project.type === 'certificate' ? 'Certificate' : 'Course'}
          </a>
        );
    }
  };

  const renderMeta = () => {
    switch (project.type) {
      case 'certificate':
        return <p className="meta">Issued by {project.issuer}</p>;
      case 'course':
        return <p className="meta">Platform: {project.platform}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="project-card">
      {project.image && (
        <img src={project.image} alt={project.name} className="project-image" />
      )}
      <div className="project-type">{project.type}</div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {renderMeta()}
      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {renderLinks()}
      </div>
    </div>
  );
};