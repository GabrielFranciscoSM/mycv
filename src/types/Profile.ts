export interface Profile {
  name: string;
  title: string;
  photo: string;
  degree: string;
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface About {
  summary: string;
  markdownPath?: string;
}

export interface Skill {
  name: string;
  category?: string;
}