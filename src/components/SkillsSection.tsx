import React from 'react';
import { Skill } from '../types/Profile';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};