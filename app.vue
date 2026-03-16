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
// Inside your page or nuxt.config.ts
useSeoMeta({
  title: 'TheCoderGabe Studio | Lead UI Architect & Vue Expert',
  ogTitle: 'TheCoderGabe Studio | Engineering High-Performance Digital Experiences',
  description: 'Specializing in Vue 3, Nuxt, and enterprise-grade frontend systems. Building modular, pixel-perfect UI for high-velocity teams.',
  ogDescription: 'Lead UI Architect specializing in enterprise logic and boutique design.',
  ogImage: '/og-image.png', // Create a 1200x630 share image
  twitterCard: 'summary_large_image',
})
</script>