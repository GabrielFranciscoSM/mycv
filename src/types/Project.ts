export interface Project {
  id: string;
  name: string;
  description: string;
  type: 'project' | 'certificate' | 'course';
  technologies: string[];
  featured?: boolean;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  date: string;
  issuer?: string;        // For certificates
  platform?: string;      // For courses
  url?: string;          // For certificates and courses
  completionDate?: string; // For courses
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Course {
  id: string;
  name: string;
  platform: string;
  completionDate: string;
  url?: string;
}