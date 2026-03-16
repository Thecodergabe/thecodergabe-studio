<template>
  <v-container fluid class="stats-bar border-y py-8 py-md-12">
    <v-row justify="center" align="center" class="ga-8 ga-md-16 no-gutters">
      <v-col 
        v-for="(stat, i) in metrics" 
        :key="i" 
        cols="6" 
        sm="auto" 
        class="text-center pa-4"
      >
        <div class="stat-value mb-1">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { metrics } from '@/data/metrics'

</script>

<style scoped>
.stats-bar {
  background: rgba(var(--v-theme-surface), 0.2);
  /* Using border-y logic for architectural separation */
  border-top: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
}

.stat-value {
  font-family: 'Syne', sans-serif;
  /* clamp ensures large text doesn't break mobile rows */
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1;
  color: rgb(var(--v-theme-primary));
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgb(var(--v-theme-on-background));
  opacity: 0.5;
}

@media (max-width: 600px) {
  .stat-value {
    /* Slightly smaller on mobile to keep 2-per-row clean */
    font-size: 2.2rem;
  }
  
  .stats-bar {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
}
</style>