<template>
  <v-container class="py-16">
    <div class="d-flex align-center justify-space-between mb-12">
      <h2 class="text-h3 font-weight-black uppercase-title">Case Studies</h2>
    </div>

    <v-card v-for="(project, index) in projects" :key="index" variant="flat" class="work-card mb-16 bg-transparent">
      <v-row align="center" :flex-row-reverse="index % 2 !== 0">
        <v-col cols="12" md="7">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props" class="visual-container rounded-xl overflow-hidden elevation-24">
              
              <div v-if="project.image" class="browser-mockup">
                <div class="browser-header d-flex align-center pa-2 ga-2">
                  <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                  <div class="browser-address flex-grow-1 text-center py-1 rounded-sm">
                    points-retail.com/tires
                  </div>
                </div>
                
                <div class="browser-content">
                  <div class="comparison-toggle">
                    <v-btn
                      size="small"
                      variant="flat"
                      :class="project.showBefore ? 'legacy-active' : 'modern-active'"
                      class="rounded-lg font-weight-bold boutique-btn"
                      @click="project.showBefore = !project.showBefore"
                    >
                      <v-icon start size="18">
                        {{ project.showBefore ? 'mdi-sparkles' : 'mdi-history' }}
                      </v-icon>
                      {{ project.showBefore ? 'RESTORE MODERN UI' : 'REVEAL LEGACY UI' }}
                    </v-btn>
                  </div>

                  <img 
                    v-show="!project.showBefore"
                    :src="project.image" 
                    class="scroll-image"
                    alt="Modernized Retail Site"
                  />
                  
                  <img 
                    v-show="project.showBefore"
                    :src="project.imageBefore" 
                    class="scroll-image grayscale-legacy"
                    alt="Legacy System"
                  />
                </div>
              </div>
              
              <div v-else class="technical-abstract d-flex align-center justify-center">
                <div class="abstract-content">
                  <div class="d-flex ga-2 mb-4">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                  </div>
                  <code class="code-snippet">
                    <span class="text-primary">// {{ project.category }}</span><br/>
                    <span class="text-secondary">const</span> project = <span class="text-success">"{{ project.title }}"</span>;<br/>
                    <span class="text-secondary">if</span> (commits > 1500) { <br/>
                    &nbsp;&nbsp;Status.<span class="text-info">Architected</span>();<br/>
                    }
                  </code>
                </div>
              </div>

              <div class="commit-badge">
                <span class="text-primary">{{ project.commitCount }}</span> COMMITS
              </div>
            </div>
          </v-hover>
        </v-col>

        <v-col cols="12" md="5" :class="index % 2 === 0 ? 'ps-md-12' : 'pe-md-12'">
          <div class="text-overline text-primary mb-2 tracking-widest">{{ project.category }}</div>
          <h3 class="text-h3 font-weight-black mb-6 uppercase-title">{{ project.title }}</h3>
          <p class="text-body-1 text-bodyTextSecondary mb-6">{{ project.description }}</p>

          <v-list bg-transparent class="pa-0 mb-8 ga-2 d-flex flex-column">
            <v-list-item v-for="(point, i) in project.highlights" :key="i" class="pa-0 min-h-0">
              <template v-slot:prepend>
                <v-icon color="primary" size="18" class="mr-3">mdi-check-circle-outline</v-icon>
              </template>
              <v-list-item-title class="text-body-2">{{ point }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <div class="d-flex ga-3 flex-wrap">
            <v-chip v-for="tag in project.tags" :key="tag" variant="tonal" size="small" class="font-weight-bold">
              {{ tag }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const projects = reactive([
  {
    title: 'Retail Rebuild 2.0',
    category: 'E-Commerce / UI Architecture',
    image: '/retail_after.png', 
    imageBefore: '/retail_before.png', 
    showBefore: false,
    commitCount: '400+', 
    description: 'Led the comprehensive migration of the retail tire listing to Vue 3 and Nuxt. Focused on component modularity and high-velocity delivery.',
    highlights: [
      'Refactored search logic into composables',
      'JPEG to WebP performance optimization',
      'Type-safe API integration via Kiota'
    ],
    tags: ['Nuxt 3', 'TypeScript', 'Performance']
  },
  {
    title: 'AllTrac Vue Platform',
    category: 'Real-Time Systems',
    image: null, 
    commitCount: '~1,980', 
    description: 'Lead UI Architect for a real-time shop management system. Engineered high-complexity tools like service timers and photo management.',
    highlights: [
      'Real-time Bay Monitor via SignalR',
      'Bespoke Technician Portal architecture',
      'Complex vehicle inspection systems'
    ],
    tags: ['Vue 3', 'SignalR', 'Internal Tools']
  }
])

onMounted(() => {
  projects.forEach(p => {
    if (p.imageBefore) {
      const img = new Image()
      img.src = p.imageBefore
    }
  })
})
</script>

<style scoped>
.visual-container {
  position: relative;
  height: 480px; 
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  background: #0d0d0d;
}

.browser-mockup {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.browser-header {
  background: #1a1a1a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.browser-content {
  position: relative;
  overflow-y: auto;
  flex-grow: 1;
  background: #ffffff;
}

/* BOUTIQUE TOGGLE BUTTON */
.comparison-toggle {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
}

.boutique-btn {
  letter-spacing: 1px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
  border: 1px solid rgba(255,255,255,0.2) !important;
  backdrop-filter: blur(10px);
}

.modern-active {
  background: rgba(0, 0, 0, 0.8) !important;
  color: white !important;
}

.legacy-active {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
}

.scroll-image {
  width: 100% !important;
  height: auto !important;
  display: block;
}

.grayscale-legacy {
  filter: grayscale(0.5) contrast(1.1);
}

.technical-abstract {
  height: 100%;
  width: 100%;
  background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 30px 30px;
}

.code-snippet {
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
}

.dot { width: 8px; height: 8px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.commit-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 6px 14px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  z-index: 90;
}

.browser-address {
  background: rgba(0, 0, 0, 0.3);
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
}

.uppercase-title { font-family: 'Syne', sans-serif; }

/* Custom Scrollbar */
.browser-content::-webkit-scrollbar { width: 5px; }
.browser-content::-webkit-scrollbar-thumb { background: rgb(var(--v-theme-primary)); }
</style>