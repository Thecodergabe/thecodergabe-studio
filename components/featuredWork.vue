<template>
  <v-container class="py-8 py-md-16">
    <div class="d-flex align-center mb-12">
      <h2 class="text-h4 text-md-h3 font-weight-black uppercase-title">Case Studies</h2>
    </div>

    <work-card 
      v-for="(project, index) in localProjects" 
      :key="index" 
      :project="project" 
      :is-even="index % 2 === 0"
    />
  </v-container>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import WorkCard from './workCard.vue'
import { projects } from '@/data/projects'

const localProjects = reactive(projects)

onMounted(() => {
  localProjects.forEach(p => {
    if (p.imageBefore) {
      const img = new Image()
      img.src = p.imageBefore
    }
  })
})
</script>