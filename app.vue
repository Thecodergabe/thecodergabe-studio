<!-- app.vue -->
<template>
  <v-app>
    <Header />

    <v-main>
      <NuxtPage />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import '@/assets/styles/variables.scss'
import '@/assets/styles/utilities.scss'
</script>