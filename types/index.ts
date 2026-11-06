export type ProjectCategory = "Backend" | "Full-stack" | "Tools & Practice";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  category: ProjectCategory;
  repoUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  intro: string;
  email: string;
  employer: string;
  focusAreas: { title: string; description: string }[];
  socials: SocialLink[];
}
