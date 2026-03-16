<template>
  <v-card variant="flat" class="project-card mb-12 mb-md-16 bg-transparent">
    <v-row :class="{ 'flex-row-reverse': isEven && $vuetify.display.mdAndUp }" align="center">
      
      <v-col cols="12" md="7">
        <div class="visual-wrapper rounded-xl overflow-hidden border-thin elevation-12">
          <browser-mockup 
            v-if="project.image"
            :image="project.image"
            :image-before="project.imageBefore"
            :url="project.url"
            :alt="`${project.title} interface design by TheCoderGabe`"
            :show-before="project.showBefore"
            @toggle="project.showBefore = !project.showBefore"
          />
          
          <div v-else class="tech-abstract d-flex align-center justify-center pa-8 text-center">
            <div>
              <v-icon size="48" color="primary" class="mb-4">mdi-code-braces</v-icon>
              <div class="text-h6 font-weight-bold text-bodyText">System Architecture</div>
              <div class="text-caption text-bodyTextMuted">Case study visualization pending clearance</div>
            </div>
          </div>

          <div class="commit-badge">
            <span class="text-primary mr-1">●</span> {{ project.commitCount }} COMMITS
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="5" :class="isEven ? 'ps-md-12' : 'pe-md-12'" class="mt-6 mt-md-0">
        <div class="category-tag mb-2">
          {{ project.category }}
        </div>
        
        <h3 class="project-title mb-4">
          {{ project.title }}
        </h3>
        
        <p class="project-description mb-6">
          {{ project.description }}
        </p>
        
        <div class="d-flex ga-2 flex-wrap mb-8">
          <v-chip 
            v-for="tag in project.tags" 
            :key="tag" 
            size="small" 
            variant="tonal" 
            color="primary"
            class="font-weight-bold rounded-sm"
          >
            {{ tag }}
          </v-chip>
        </div>

        <v-btn 
          variant="outlined" 
          color="primary" 
          class="rounded-pill px-8 text-none font-weight-bold" 
          :href="project.url"
          border="sm"
        >
          View Case Study
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project';
import browserMockup from './browserMockup.vue';

defineProps<{
  project: Project;
  isEven: boolean;
}>();
</script>

<style scoped>
.visual-wrapper {
  position: relative;
  height: clamp(300px, 40vh, 480px); /* Responsive height clamp */
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
}

.commit-badge {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(var(--v-theme-background), 0.9);
  backdrop-filter: blur(4px);
  padding: 6px 14px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 10px;
  font-weight: 700;
  color: rgb(var(--v-theme-bodyText));
  z-index: 5;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.tech-abstract {
  height: 100%;
  background: radial-gradient(circle at center, rgb(var(--v-theme-surface-variant)) 0%, rgb(var(--v-theme-background)) 100%);
}

.category-tag {
  color: rgb(var(--v-theme-primary));
  font-weight: 900; /* Maximize weight for 'Boutique' look */
  font-size: 0.7rem;
  letter-spacing: 0.2em; /* More space for that premium feel */
  text-transform: uppercase;
}

.project-title {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 4vw, 2.5rem); /* Better scaling */
  line-height: 1.1;
  /* Explicitly use bodyText to avoid fading in Light Mode */
  color: rgb(var(--v-theme-bodyText));
  text-transform: uppercase;
}

.visual-wrapper {
  position: relative;
  /* Match the height of your browser-content or set to auto */
  height: auto; 
  background: rgb(var(--v-theme-surface));
  border-radius: 24px;
  overflow: visible; /* Let the browser-mockup handle its own internal scrolling */
}
.project-description {
  color: rgb(var(--v-theme-bodyTextSecondary));
  line-height: 1.6;
  font-size: 1.05rem;
}

.v-chip {
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}
/* Mobile Alignment Fix */
@media (max-width: 960px) {
  .project-title {
    font-size: 1.75rem;
  }
}
</style>