export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  status?: string;
}

export interface ExperienceArea {
  name: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  employmentType?: string;
  summary: string;
  areas: ExperienceArea[];
  stack: string[];
  links?: ProjectLink[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    location: string;
    university: string;
    role: string;
    semester: string;
    expectedGraduation: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: { category: string; items: string[] }[];
  projects: Project[];
  experience: Experience[];
  education: {
    degree: string;
    university: string;
    stage: string;
    expectedGraduation: string;
    complementary: string[];
  };
}
