<template>
  <v-container fluid class="stats-bar border-y py-10">
    <v-row justify="center" align="center" class="ga-16">
      <v-col v-for="(stat, i) in metrics" :key="i" cols="auto" class="text-center">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const metrics = [
  { value: '8K+', label: 'Total Commits' }, //
  { value: '6Y+', label: 'Engineering' },   // 
  { value: '2026', label: 'Studio Est.' },
  { value: '99.9%', label: 'Uptime' }
]
</script>

<style scoped>
.stat-value {
  font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  color: rgb(var(--v-theme-primary));
}
.stat-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-top: 8px;
  color: rgb(var(--v-theme-bodyTextMuted));
}
.border-y {
  border-top: 1px solid rgba(var(--v-theme-primary), 0.1);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1);
}
</style>