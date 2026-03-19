import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'shipstack',
    title: 'ShipStack',
    category: 'Open Source / Logistics Orchestration',
    icon: 'mdi-api',
    image: null,
    showBefore: false,
    commitCount: 'v1.0.0-Beta',
    description: 'A framework-agnostic shipping engine that unifies USPS, FedEx, and UPS. Engineered to normalize fragmented carrier data and handle complex API constraints like batching and concurrency at scale.',
    features: [
      {
        title: 'Unified Orchestration',
        icon: 'mdi-api',
        text: 'A single, framework-agnostic interface to manage USPS, FedEx, and UPS. Normalizes fragmented carrier data into a type-safe orchestration layer.'
      },
      {
        title: 'Intelligent Aggregation',
        icon: 'mdi-memory',
        text: 'Handles carrier-specific constraints automatically, including USPS 35-item batch limits and UPS concurrency throttling.'
      }
    ],
    highlights: [
      'Unified Carrier Orchestration (USPS, FedEx, UPS)',
      'Automated Batching for USPS (35-item limit) & FedEx',
      'High-Concurrency Tracking Aggregator with Throttling',
      '100% Type-Safe via OpenAPI Generated Architecture'
    ],
    tags: ['TypeScript', 'Logistics', 'API Design', 'NPM'],
    url: 'https://github.com/thecodergabe/shipstack',
    featured: true
  },
  {
    id: 'loan-estimate-tool',
    title: 'Geo-Financial Engine',
    category: 'Fintech / Data Systems',
    image: '/loan_preview.png',
    showBefore: false,
    commitCount: 'Production',
    icon: 'mdi-calculator-variant',
    description: 'Precision mortgage forecasting engine that bypasses generic averages. Injects hyper-local property tax and insurance data scraped from national databases for ZIP-level accuracy.',
    features: [
      {
        title: 'Hyper-Local ETL',
        icon: 'mdi-database-search',
        text: 'Automated data scraping pipeline using Cheerio and Puppeteer to extract granular tax data from thousands of national government databases.'
      },
      {
        title: 'ZIP-to-County Mapping',
        icon: 'mdi-map-marker-path',
        text: 'Complex data normalization layer correlating 40,000+ ZIP codes to specific county tax jurisdictions with zero-latency lookups.'
      }
    ],
    highlights: [
      'Automated ETL Pipeline (Cheerio / XLSX / Puppeteer)',
      'ZIP-to-County normalization for 40,000+ regions',
      'Dependency-free, server-side PDF generation engine',
      'Real-time reactive financial modeling'
    ],
    tags: ['Nuxt 3', 'Data Scraping', 'Fintech'],
    url: 'https://www.loanestimatetool.com/',
    featured: true
  },
  {
    id: 'retail-rebuild',
    title: 'Retail Rebuild 2.0',
    category: 'E-Commerce / Performance',
    image: '/retail_after.png',
    imageBefore: '/retail_before.png',
    showBefore: false,
    commitCount: 'Enterprise',
    icon: 'mdi-cart-outline',
    description: 'Led the architectural migration of a national tire retail platform to Vue 3. Focused on core performance metrics, SEO discoverability, and component modularity.',
    features: [
      {
        title: 'Headless Search Logic',
        icon: 'mdi-cog-outline',
        text: 'Abstracted complex retail search and filtering logic into reusable Vue composables, separating business rules from UI components.'
      },
      {
        title: 'Edge Performance',
        icon: 'mdi-lightning-bolt',
        text: 'Drastic Core Web Vital improvements through WebP conversion, specialized lazy-loading strategies, and Nuxt hydration optimizations.'
      }
    ],
    highlights: [
      'Refactored search logic into reusable headless composables',
      'Massive WebP & Lazy-loading performance overhaul',
      'Type-safe backend integration via Microsoft Kiota',
      'Micro-frontend component strategy'
    ],
    tags: ['Nuxt 3', 'TypeScript', 'Performance'],
    url: 'https://www.pointstire.com/everettstreet/tire-listing?front=185/65R15&make=Kia&year=2021&model=Rio&trim=15,%20LX',
    featured: false
  },
  {
    id: 'alltrac-vue',
    title: 'AllTrac Vue Platform',
    category: 'Real-Time IoT Systems',
    showBefore: false,
    image: null,
    icon: 'mdi-monitor-dashboard',
    commitCount: 'Lead Architect',
    description: 'Architected a high-throughput shop management system. Engineered real-time technician portals and vehicle inspection tools utilizing live socket data.',
    features: [
      {
        title: 'Real-Time Sync',
        icon: 'mdi-sync',
        text: 'Engineered a low-latency Bay Monitoring system using SignalR hubs to synchronize vehicle status across multiple technician terminals.'
      },
      {
        title: 'Bespoke SVG Mapping',
        icon: 'mdi-vector-rectangle',
        text: 'Created a custom SVG-based inspection tool allowing technicians to pinpoint vehicle damage with persistent coordinate mapping.'
      }
    ],
    highlights: [
      'Real-time Bay Monitor via SignalR Hubs',
      'Low-latency Photo Management & Upload System',
      'Complex SVG-based vehicle damage inspection UI',
      'High-state-complexity technician workflows'
    ],
    tags: ['Vue 3', 'SignalR', 'Real-Time'],
    url: '#',
    featured: false
  }
];