<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters align="center" style="min-height: 85vh;">
      <v-col cols="12" md="7" class="pa-6 pa-md-12">
        <div class="text-primary font-weight-bold text-overline mb-3 tracking-widest">
          ESTABLISHED 2026
        </div>
        <h1 class="hero-title font-weight-black mb-6">
          BESPOKE DIGITAL <br />
          <span class="hollow-text">CRAFTSMANSHIP</span>
        </h1>
        <p class="text-body-1 mb-10 hero-description">
          Transforming complex requirements into high-performance web applications. 
          Scalable, secure, and built for growth.
        </p>
        <v-btn color="primary" size="large" rounded="pill" class="px-10 font-weight-black shadow-primary">
          START A CONSULTATION <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="5" class="d-none d-md-flex justify-center position-relative">
        <NuxtImg 
          src="/hero.png" 
          width="600"
          preload
          class="hero-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { heroContent } from '@/data/hero';
const content = heroContent;
</script>

<style scoped>
.hero-title { 
  font-size: clamp(2.5rem, 6vw, 5rem); 
  line-height: 0.85; 
  letter-spacing: -0.03em;
  color: rgb(var(--v-theme-bodyText));
}

.hollow-text { 
  -webkit-text-stroke: 1.5px rgb(var(--v-theme-bodyText)); 
  color: transparent; 
}

.hero-description {
  max-width: 500px;
  color: rgb(var(--v-theme-bodyTextSecondary));
}

.hero-img {
  /* Removed saturation/brightness filters that make it look muddy in light mode */
  transform: perspective(1000px) rotateY(-10deg);
  /* Added a subtle floating drop shadow instead of a mask */
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.1));
}

.v-theme--studioDark .hero-img {
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
}
</style>