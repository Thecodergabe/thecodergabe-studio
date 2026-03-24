<template>
  <main class="page-wrapper">
    <hero />
    <stats-bar />
    <expertise />
    <featured-work />
  </main>
</template>

<script setup lang="ts">
/**
 * @file pages/index.vue
 * @description Landing page composed of four hero-level sections.
 * This script only handles SEO metadata and structured data injection.
 */

useHead({
  /**
   * Inject structured data for SEO.
   * This describes you as a "Person" entity for search engines,
   * improving knowledge panel accuracy and author attribution.
   */
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'TheCoderGabe',
        jobTitle: 'Lead UI Architect',
        url: 'https://thecodergabe.com',
        sameAs: [
          'https://github.com/thecodergabe',
          'https://linkedin.com/in/thecodergabe'
        ]
      })
    }
  ]
})
</script>

<style lang="css" scoped>
/* Ensure the wrapper doesn't break the layout */
.page-wrapper {
  width: 100%;
}

/* Tighten the massive headlines */
h1 {
  line-height: 0.95 !important;
  letter-spacing: -0.04em !important;
  text-transform: uppercase;
}

/* Technical detail text */
.text-caption, .text-body-2 {
  font-family: 'Fira Code', monospace;
  opacity: 0.6;
  letter-spacing: 0.05em;
}

/* Category Tags (The blue text above titles) */
.category-tag {
  color: #3b82f6;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
}
</style>