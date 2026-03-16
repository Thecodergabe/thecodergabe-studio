export interface Project {
  title: string;
  category: string;
  image: string | null;
  imageBefore?: string; // Optional for projects without a legacy view
  showBefore: boolean;
  commitCount: string;
  description: string;
  highlights: string[];
  tags: string[];
  url: string;
}