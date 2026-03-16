export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  bio: string[];
}

export const stats: Stat[] = [
  { value: '8K+', label: 'Commits' },
  { value: '1.5K+', label: 'Lib Components' },
  { value: '6+', label: 'Years Vue/Nuxt' }
];

export const aboutContent: AboutContent = {
  eyebrow: 'STUDIO IDENTITY',
  title: 'THE ART OF EXECUTION.',
  bio: [
    `Gabriel Rodriguez is a Senior UI Architect specializing in the 
     high-velocity modernization of enterprise ecosystems.`,
    `With a career defined by over 8,000 production commits, I 
     bridge the gap between complex backend logic and boutique 
     user experiences. My tenure as the primary UI architect for the 
     AllTrac platform involved evolving a massive stack from legacy 
     options API to modern, type-safe Nuxt 3 & TypeScript 
     environments.`,
    `I don't just build components; I author Design Systems. My 
     work on shared Vue libraries ensures that enterprise-scale 
     applications remain consistent, performant, and maintainable 
     long after the initial ship date.`
  ]
};