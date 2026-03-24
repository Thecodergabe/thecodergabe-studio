<template>
  <v-container class="py-8 py-md-16">
    <div class="d-flex align-center mb-12">
      <h2 class="text-h4 text-md-h3 font-weight-black uppercase-title">
        Featured <span class="text-primary">Case Studies</span>
      </h2>
    </div>

    <work-card 
      v-for="(project, index) in featuredProjects" 
      :key="project.id" 
      :project="project" 
      :is-even="index % 2 === 0"
    />

    <div class="text-center mt-12">
      <v-btn 
        to="/work" 
        variant="text" 
        color="primary" 
        class="font-weight-black tracking-widest"
      >
        SEE ALL PROJECTS 
        <v-icon end size="20" class="ms-2">mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects'

/**
 * Featured Projects:
 * Pulls from the central project registry and returns only those
 * explicitly marked as `featured`. This keeps the homepage curated
 * and ensures the alternating layout stays visually balanced.
 *
 * The homepage intentionally limits the output to a small set,
 * but the filtering logic remains generic for future expansion.
 */
const featuredProjects = computed(() =>
  projects.filter(p => p.featured)
)
</script>

<style scoped>
.uppercase-title {
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.2;
}

.tracking-widest {
  letter-spacing: 0.15em !important;
}

/* Add a subtle divider between the featured section and footer if needed */
.v-container {
  position: relative;
}
</style>