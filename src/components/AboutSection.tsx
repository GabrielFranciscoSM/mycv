import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { About } from '../types/Profile';

interface AboutSectionProps {
  about: About;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const basePath = process.env.PUBLIC_URL || '';
    fetch(`${basePath}/content/about.md`)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(err => console.error('Error loading about content:', err));
  }, []);

  return (
    <section className="about">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
};