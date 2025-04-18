import React from 'react';
import { Academic } from '../types/Academic';

interface AcademicSectionProps {
  academics: Academic[];
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({ academics }) => {
  const formatDate = (academic: Academic) => {
    const endDate = academic.current ? 'Present' : academic.endDate;
    return `${academic.startDate} - ${endDate}`;
  };

  return (
    <section className="academic">
      <h2>Education</h2>
      {academics.map((academic, index) => (
        <div key={index} className="experience-item">
          <h3>{academic.institution}</h3>
          <p className="date">{formatDate(academic)}</p>
          <p className="position">{academic.degree} in {academic.field}</p>
          {academic.location && <p className="location">{academic.location}</p>}
          {academic.achievements && (
            <ul>
              {academic.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};
