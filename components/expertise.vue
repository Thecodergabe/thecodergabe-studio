<template>
  <v-container class="py-16">
    <v-row align="center">
      <v-col cols="12" md="5" class="pr-md-12">
        <div class="category-tag mb-4">Core Expertise</div>
        <h2 class="text-h3 font-weight-black mb-6 uppercase-syne">
          Engineering <br />
          <span class="text-primary">Architecture</span>
        </h2>
        
        <v-list bg-color="transparent" class="ga-4">
          <v-list-item
            v-for="(skill, i) in skills"
            :key="i"
            class="pa-0"
          >
            <template #prepend>
              <v-icon color="primary" class="mr-3">mdi-check-circle-outline</v-icon>
            </template>
            <v-list-item-title class="font-weight-bold">{{ skill.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ skill.desc }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" md="7" class="mt-10 mt-md-0">
        <div class="editor-wrapper">
          <editor-window />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
/**
 * Expertise Component
 * - Combines a descriptive list of core skills with a visually engaging "IDE window" that serves as a metaphor for the technical expertise offered.
 * - The left column uses Vuetify's list components to clearly present key areas of expertise, while the right column features a custom-designed code snippet styled to resemble a developer's IDE.
 * - The component is designed to be fully responsive, with adjustments for mobile layouts that maintain readability and visual interest.
 * - The static code snippet inside the IDE window is purely decorative, showcasing relevant technologies and patterns without any dynamic behavior.
 */
const skills = [
  { 
    title: 'Frontend Architecture', 
    desc: 'Scalable Vue 3/Nuxt systems with modular design patterns.' 
  },
  { 
    title: 'Performance Optimization', 
    desc: 'Core Web Vitals focused engineering with efficient state management.' 
  },
  { 
    title: 'Cloud Solutions', 
    desc: 'Serverless deployments and secure API orchestration.' 
  }
]
</script>

<style scoped>
.uppercase-syne {
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 1.1;
}

.category-tag {
  color: rgb(var(--v-theme-primary));
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
}

.editor-wrapper {
  /* Subtle perspective to make the IDE feel more "physical" in the section */
  transform: perspective(2000px) rotateY(-5deg);
  transition: transform 0.5s ease;
}

.editor-wrapper:hover {
  transform: perspective(2000px) rotateY(0deg);
}

@media (max-width: 960px) {
  .editor-wrapper {
    transform: none;
  }
}
</style>