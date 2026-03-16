<template>
  <v-container class="py-8 py-md-16 mt-4 mt-md-10">
    <div class="mb-12 text-center">
      <h1 class="text-h3 text-md-h2 font-weight-black tracking-tighter text-uppercase">
        SELECTED <span class="text-primary">WORKS.</span>
      </h1>
    </div>

    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" sm="6" class="mb-6">
        <v-card 
          :to="`/work/${project.id}`" 
          variant="flat" 
          class="work-card rounded-xl border-thin d-flex flex-column h-100 bg-surface overflow-hidden"
        >
          <div class="media-container d-flex flex-column">
            <v-img 
              v-if="project.image" 
              :src="project.image" 
              height="280" 
              cover
              class="w-100"
            >
              <div class="pa-4">
                <v-chip color="primary" size="x-small" variant="flat" class="font-weight-black px-3">
                  {{ project.commitCount }} COMMITS
                </v-chip>
              </div>
            </v-img>

            <image-placeholder 
              v-else 
              height="280"
              class="flex-grow-1"
              :icon="project.icon || 'mdi-xml'" 
              :label="project.archLabel || 'ARCH_VIEW'" 
              :secondary-label="project.id.toUpperCase()"
            >
              <template #overlay>
                <div class="pa-4 position-absolute top-0 left-0 w-100">
                  <v-chip color="primary" size="x-small" variant="flat" class="font-weight-black px-3">
                    {{ project.commitCount }} COMMITS
                  </v-chip>
                </div>
              </template>
            </image-placeholder>
          </div>

          <v-card-text class="pa-8 d-flex flex-column flex-grow-1">
            <div class="text-overline text-primary font-weight-bold mb-2 tracking-widest text-uppercase">
              {{ project.category }}
            </div>
            <h3 class="text-h4 font-weight-black mb-3 text-none">{{ project.title }}</h3>
            <p class="text-body-1 text-grey-darken-1 line-clamp-2 font-weight-regular mb-6">
              {{ project.description }}
            </p>
            <v-spacer />
            <div class="d-flex flex-wrap ga-2 mt-4">
              <v-chip v-for="tag in project.tags.slice(0, 3)" :key="tag" variant="tonal" size="x-small" class="text-uppercase font-weight-bold">
                {{ tag }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects';
</script>

<style scoped>
.media-container {
  height: 280px;
  min-height: 280px;
  max-height: 280px;
  /* background: transparent; or remove background-color to see blueprint only */
  overflow: hidden;
}

/* Ensure the blueprint inside the card doesn't have extra margins */
.work-card :deep(.technical-blueprint) {
  border: none !important; /* Card already has a border, avoid double-bordering */
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
}
</style>