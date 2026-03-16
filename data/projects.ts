import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'shipstack', // Adding ID for the dynamic route lookup
    title: 'ShipStack',
    category: 'Open Source / Logistics API',
    icon: 'mdi-api',
    image: null, // No image available for this project
    showBefore: false,
    commitCount: 'Pending', 
    description: 'A unified, type-safe shipping API wrapper for USPS, FedEx, and UPS. Normalizes chaotic carrier data into a single, high-performance interface.',
    highlights: [
      'Multi-carrier normalization (USPS, FedEx, UPS)',
      'Auto-generated OpenAPI client architecture',
      'Cross-platform support (Edge, Node, ESM)'
    ],
    tags: ['TypeScript', 'Logistics', 'API Design'],
    url: 'github.com/thecodergabe/shipstack',
    featured: true
  },
  {
    id: 'retail-rebuild',
    title: 'Retail Rebuild 2.0',
    category: 'E-Commerce / UI Architecture',
    image: '/retail_after.png',
    imageBefore: '/retail_before.png',
    showBefore: false,
    commitCount: '400+',
    icon: 'mdi-cart-outline',
    description: 'Led the comprehensive migration of the retail tire listing to Vue 3. Focused on component modularity and high-velocity delivery.',
    highlights: [
      'Refactored search logic into composables',
      'JPEG to WebP performance optimization',
      'Type-safe API integration via Kiota'
    ],
    tags: ['Nuxt 3', 'TypeScript', 'Performance'],
    url: 'https://www.pointstire.com/everettstreet/tire-listing?front=185/65R15&make=Kia&year=2021&model=Rio&trim=15,%20LX',
    featured: true
  },
  { 
    id: 'alltrac-vue',
    title: 'AllTrac Vue Platform',
    category: 'Real-Time Systems',
    showBefore: false,
    image: null,
    icon: 'mdi-monitor-dashboard',
    commitCount: '~1,980',
    description: 'Lead UI Architect for a real-time shop management system. Engineered high-complexity tools like service timers and photo management.',
    highlights: [
      'Real-time Bay Monitor via SignalR',
      'Bespoke Technician Portal architecture',
      'Complex vehicle inspection systems'
    ],
    tags: ['Vue 3', 'SignalR', 'Internal Tools'],
    url: '#', // Placeholder since this is an internal system,
    featured: false
  }
];