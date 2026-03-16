<template>
  <v-container class="py-8 py-md-16 mt-4 mt-md-10">
    <div class="mb-10 text-center text-md-left">
      <h1 class="text-h4 text-md-h2 font-weight-black">SELECTED <span class="text-primary">WORKS.</span></h1>
    </div>

    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" sm="6" class="mb-6">
        <v-card :to="`/work/${project.id}`" variant="flat" class="work-card rounded-xl border-thin h-100 bg-surface">
          
          <v-img v-if="project.image" :src="project.image" height="240" cover>
            <div class="pa-4"><v-chip color="primary" size="x-small" class="font-weight-black">{{ project.commitCount }} COMMITS</v-chip></div>
          </v-img>

            <image-placeholder 
                v-else 
                height="240" 
                :icon="project.id === 'shipstack' ? 'mdi-api' : 'mdi-monitor-screenshot'" 
                :label="project.category" 
                :secondary-label="project.id"
            >
                <template #overlay>
                    <div class="pa-4 position-absolute top-0 left-0">
                    <v-chip color="primary" size="x-small" class="font-weight-black">
                        {{ project.commitCount }} COMMITS
                    </v-chip>
                    </div>
                </template>
            </image-placeholder>

          <v-card-text class="pa-6">
            <div class="text-overline text-primary font-weight-bold mb-1">{{ project.category }}</div>
            <h3 class="text-h5 font-weight-black mb-2">{{ project.title }}</h3>
            <p class="text-body-2 text-bodyTextSecondary line-clamp-2">{{ project.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects';

// Helper to turn "Retail Rebuild 2.0" into "retail-rebuild-2-0" for the URL
const slugify = (text: string) => {
  return text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/\./g, '-')
    .replace(/[^\w-]/g, '');
};
</script>

<style scoped>
.heading-style { letter-spacing: -3px; line-height: 0.9; }
.work-card { 
  background: rgb(var(--v-theme-surface)) !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.work-card:hover {
  transform: translateY(-8px);
  border-color: rgb(var(--v-theme-primary)) !important;
}
.text-outline {
  -webkit-text-stroke: 1.5px rgb(var(--v-theme-primary));
  color: transparent;
}
</style>