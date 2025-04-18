import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

interface FeaturedProjectsProps {
  projects: Project[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="featured-projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <Link to="/portfolio" className="view-all">
          View All Projects →
        </Link>
      </div>
      <div className="featured-projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};