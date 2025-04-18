import React from 'react';
import { About } from '../types/Profile';

interface AboutSectionProps {
  about: About;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{about.summary}</p>
    </section>
  );
};