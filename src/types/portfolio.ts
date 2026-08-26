export interface Profile {
  name: string;
  roles: string[];
  tagline: string;
  aboutShort: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  cvLink: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    dribbble: string;
  };
}

export interface StatItem {
  number: string;
  label: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: number;
  iconUrl?: string;
}

export interface SkillCategory {
  category: string;
  title: string;
  iconName: string;
  items: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  category: "all" | "web" | "mobile" | "uiux" | "backend";
  categoryLabel: string;
  featured: boolean;
  image: string;
  description: string;
  fullDescription: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
}

export interface TimelineItem {
  period: string;
  role?: string;
  degree?: string;
  company?: string;
  institution?: string;
  location: string;
  description: string;
  skills?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ContactInfo {
  heading: string;
  subheading: string;
  email: string;
  phone: string;
  location: string;
  workingHours: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: StatItem[];
  about: {
    bio: string[];
    details: { label: string; value: string }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  timeline: {
    experience: TimelineItem[];
    education: TimelineItem[];
  };
  testimonials: Testimonial[];
  contact: ContactInfo;
}
