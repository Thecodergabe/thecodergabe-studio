interface projectType {
  id: string;
  name: string;
}
export const projectTypes: projectType[] = [
  { id: 'web-dev', name: 'Web Development' },
  { id: 'vue-specialty', name: 'Vue.js Specialty' },
  { id: 'api-dev', name: 'API Development' },
  { id: 'systems-migration', name: 'Systems Migration' }, 
  { id: 'maintenance', name: 'Maintenance' }
];