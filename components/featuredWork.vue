<template>
  <v-container class="py-8 py-md-16">
    <div class="d-flex align-center mb-12">
      <h2 class="text-h4 text-md-h3 font-weight-black uppercase-title">
        Featured Case Studies
      </h2>
    </div>

    <work-card 
      v-for="(project, index) in featuredProjects" 
      :key="project.id" 
      :project="project" 
      :is-even="index % 2 === 0"
    />

    <div class="text-center mt-12">
      <v-btn to="/work" variant="text" color="primary" class="font-weight-black">
        SEE ALL PROJECTS <v-icon end px-2>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import WorkCard from './workCard.vue'
import { projects } from '@/data/projects'
import { computed } from 'vue'

// Keep the clean filtering logic, but use it with your working UI component
const featuredProjects = computed(() => 
  projects.filter(p => p.featured).slice(0, 2)
)
</script>

<style scoped>
.uppercase-title {
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>