export interface Project {
  id: string;
  title: string;
  category: string;
  image: string | null;
  imageBefore?: string;
  showBefore: boolean;
  commitCount: string;
  description: string;
  highlights: string[];
  tags: string[];
  url: string;
  icon?: string;
  featured: boolean;
  features: ProjectFeature[];
  archLabel?: string; // Adding this fixes the TS error
}

interface ProjectFeature {
  title: string;
  icon: string;
  text: string;
}