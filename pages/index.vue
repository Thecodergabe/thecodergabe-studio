<template>
  <hero />
  <stats-bar />
  <expertise />
  <featured-work />
</template>
<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      // We use innerHTML here because 'children' isn't a recognized property in the Nuxt head type
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'TheCoderGabe',
        'jobTitle': 'Lead UI Architect',
        'url': 'https://thecodergabe.studio',
        'sameAs': [
          'https://github.com/thecodergabe',
          'https://linkedin.com/in/thecodergabe'
        ]
      })
    }
  ]
})
</script>
<style lang="css" scoped>
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