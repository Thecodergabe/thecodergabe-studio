import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Retail Rebuild 2.0',
    category: 'E-Commerce / UI Architecture',
    image: '/retail_after.png',
    imageBefore: '/retail_before.png',
    showBefore: false,
    commitCount: '400+',
    description: 'Led the comprehensive migration of the retail tire listing to Vue 3. Focused on component modularity and high-velocity delivery.',
    highlights: [
      'Refactored search logic into composables',
      'JPEG to WebP performance optimization',
      'Type-safe API integration via Kiota'
    ],
    tags: ['Nuxt 3', 'TypeScript', 'Performance'],
    url: 'points-retail.com/tires'
  },
  {
    title: 'AllTrac Vue Platform',
    category: 'Real-Time Systems',
    showBefore: false,
    image: null,
    commitCount: '~1,980',
    description: 'Lead UI Architect for a real-time shop management system. Engineered high-complexity tools like service timers and photo management.',
    highlights: [
      'Real-time Bay Monitor via SignalR',
      'Bespoke Technician Portal architecture',
      'Complex vehicle inspection systems'
    ],
    tags: ['Vue 3', 'SignalR', 'Internal Tools'],
    url: 'internal.alltrac.com'
  }
];