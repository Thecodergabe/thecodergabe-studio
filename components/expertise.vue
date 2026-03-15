<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" md="6" class="pr-md-16">
        <h2 class="section-title mb-6">Enterprise Logic.<br/><span class="text-primary">Boutique UI.</span></h2>
        <p class="text-body-1 text-bodyTextSecondary mb-8">
          Specializing in the modernization of complex ecosystems[cite: 15]. 
          I bridge the gap between high-velocity delivery and pixel-perfect design.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <div v-for="skill in coreSkills" :key="skill.title" class="skill-item mb-8">
          <div class="d-flex align-center ga-4 mb-3">
            <span class="skill-number">0{{ skill.id }}</span>
            <h3 class="text-h6 font-weight-bold">{{ skill.title }}</h3>
          </div>
          <p class="text-body-2 text-bodyTextMuted">{{ skill.desc }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const coreSkills = [
  { id: 1, title: 'Real-Time Systems', desc: 'Engineering bay monitors and technician portals using SignalR for live status updates[cite: 16, 24].' },
  { id: 2, title: 'Modular Architecture', desc: 'Leading migrations to Vue 3, Nuxt, and Vuetify with composable logic[cite: 15, 27].' },
  { id: 3, title: 'System Modernization', desc: 'Automating API client generation via Kiota and optimizing frontend performance[cite: 18, 19].' }
]
</script>

<style scoped>
.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
  text-transform: uppercase;
}
.skill-number {
  font-family: 'Fira Code', monospace;
  color: rgb(var(--v-theme-primary));
  font-size: 0.9rem;
  opacity: 0.6;
}
</style>