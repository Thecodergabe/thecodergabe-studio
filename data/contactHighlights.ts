export interface ContactHighlight {
  title: string;
  desc: string;
  icon: string;
}

export const contactHighlights: ContactHighlight[] = [
  { 
    title: 'Nuxt / Vue 3 Expert', 
    desc: 'High-velocity frontend migrations.', 
    icon: 'mdi-vuejs' 
  },
  { 
    title: 'Real-Time Systems', 
    desc: 'SignalR and data-streaming interfaces.', 
    icon: 'mdi-pulse' 
  },
  { 
    title: 'Localized Data', 
    desc: 'Geographic and financial logic engines.', 
    icon: 'mdi-map-marker-path' 
  }
];