export interface ProjectLink {
  frontend?: string;
  backend?: string;
  github?: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  links?: ProjectLink;
  status?: string;
  duration?: string;
}

export interface Experience {
  project: string;
  role: string;
  tech: string[];
  duration?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email: string;
    location: string;
    university: string;
    role: string;
  };
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  skills: { category: string; items: string[] }[];
  projects: Project[];
  experience: Experience[];
}
