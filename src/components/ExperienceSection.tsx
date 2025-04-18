import React from 'react';
import { Experience } from '../types/Experience';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const formatDate = (experience: Experience) => {
    const endDate = experience.current ? 'Present' : experience.endDate;
    return `${experience.startDate} - ${endDate}`;
  };

  return (
    <section className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.company}</h3>
          <p className="date">{formatDate(exp)}</p>
          <p className="position">{exp.position}</p>
          <ul>
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};