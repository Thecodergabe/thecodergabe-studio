<template>
  <v-row class="mb-16 align-center project-row"
         :class="{ 'flex-row-reverse': !isEven }">
    <v-col cols="12"
           md="7"
           class="media-col">
      <NuxtLink :to="`/work/${project.id}`"
                class="text-decoration-none">
        <div class="media-container d-flex flex-column rounded-xl border-thin hover-lift bg-surface">
          <browser-mockup v-if="project.image"
                          :image="project.image"
                          :image-before="project.imageBefore"
                          :url="project.url"
                          :show-before="project.showBefore"
                          class="h-100"
                          @toggle="$emit('toggle', project.id)" />

          <image-placeholder v-else
                             :icon="project.icon"
                             :label="project.category"
                             :secondary-label="project.id"
                             class="flex-grow-1">
            <template #overlay>
              <div class="pa-4 position-absolute top-0 left-0 w-100">
                <v-chip color="primary"
                        size="x-small"
                        variant="flat"
                        class="font-weight-black">
                  {{ project.commitCount }}
                </v-chip>
              </div>
            </template>
          </image-placeholder>
        </div>
      </NuxtLink>
    </v-col>

    <v-col cols="12"
           md="5"
           class="pa-md-12">
      <div class="text-overline text-primary font-weight-bold mb-2 tracking-widest text-uppercase">
        // {{ project.category }}
      </div>

      <NuxtLink :to="`/work/${project.id}`"
                class="text-decoration-none text-bodyText">
        <h3 class="text-h3 font-weight-black mb-4 hover-color">{{ project.title }}</h3>
      </NuxtLink>

      <p class="text-body-1 text-grey-darken-1 mb-6 leading-relaxed">
        {{ project.description }}
      </p>

      <div class="d-flex flex-wrap ga-2 mb-8">
        <v-chip v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                variant="tonal"
                size="small"
                class="text-uppercase font-weight-bold">
          {{ tag }}
        </v-chip>
      </div>

      <v-btn :to="`/work/${project.id}`"
             variant="outlined"
             rounded="pill"
             class="px-8 font-weight-black text-none">
        View Case Study
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project';

/**
 * Pro-level documentation: 
 * workCard component renders a featured project block for the index page.
 * Implements alternating layout and deep-linking for SEO optimization.
 */
defineProps<{
  project: Project;
  isEven: boolean;
}>();

defineEmits(['toggle']);
</script>

<style scoped>
.media-container {
  height: 500px;
  min-height: 500px;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  transition: border-color 0.3s ease;
}

.hover-lift {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.media-col:hover .hover-lift {
  transform: translateY(-8px);
}

.hover-color {
  transition: color 0.3s ease;
}

.hover-color:hover {
  color: rgb(var(--v-theme-primary));
}

@media (max-width: 960px) {
  .media-container {
    height: 350px;
    min-height: 350px;
  }
}
</style>