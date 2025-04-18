import React from 'react';
import { Profile } from '../types/Profile';

interface SidebarProps {
  profile: Profile;
}

export const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
  return (
    <aside className="sidebar">
      <div className="profile-container">
        <img 
          src={profile.photo}
          alt="Profile" 
          className="profile-photo"
        />
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <div className="contact-info">
          <p><i className="fas fa-graduation-cap"></i> {profile.degree}</p>
          <p><i className="fas fa-envelope"></i> {profile.email}</p>
          <p><i className="fas fa-map-marker-alt"></i> {profile.location}</p>
          <div className="social-links">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};