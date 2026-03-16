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
  useSeoMeta({
    title: 'TheCoderGabe Studio | Lead UI Architect',
    ogTitle: 'TheCoderGabe Studio | Engineering High-Performance Vue Ecosystems',
    description: 'Senior UI Architect specializing in Vue 3, Nuxt, and Enterprise Design Systems. 8,000+ production commits of high-velocity execution.',
    ogDescription: 'Lead UI Architect specializing in enterprise logic, boutique design, and high-performance Vue 3 environments.',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://thecodergabe.com',
  })
</script>