<template>
  <v-container fluid class="pa-0 overflow-hidden">
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

        <v-btn 
          color="primary" 
          size="large" 
          rounded="pill" 
          class="px-10 font-weight-black shadow-primary"
          @click="$router.push('/contact')"
        >
          START A CONSULTATION <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="5" class="d-none d-md-flex justify-center position-relative">
        <nuxt-img 
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
/**
 * Hero Component 
 * Clean script logic per Studio architecture guidelines.
 */
</script>

<style scoped>
.hero-title { 
  /* clamp prevents the text from becoming too large or too small */
  font-size: clamp(2.4rem, 7vw, 5rem); 
  line-height: 0.9; 
  letter-spacing: -0.03em;
  color: rgb(var(--v-theme-bodyText));
  text-transform: uppercase;
}

.hollow-text { 
  /* Using responsive stroke width to prevent blurriness on small screens */
  -webkit-text-stroke: clamp(1px, 0.15vw, 2px) rgb(var(--v-theme-bodyText)); 
  color: transparent; 
  display: inline-block;
  /* Prevents horizontal overflow by allowing the word to break if absolutely necessary */
  word-break: break-word;
  max-width: 100%;
}

.hero-description {
  max-width: 500px;
  color: rgb(var(--v-theme-bodyTextSecondary));
  line-height: 1.6;
}

.hero-img {
  transform: perspective(1000px) rotateY(-10deg);
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.15));
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hero-img:hover {
  transform: perspective(1000px) rotateY(-5deg) translateY(-10px);
}

.v-theme--studioDark .hero-img {
  filter: drop-shadow(0 20px 60px rgba(0,0,0,0.6));
}

.tracking-widest {
  letter-spacing: 0.2em !important;
}

/* Mobile specific fixes for the "Craftsmanship" overflow */
@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem; /* Forces a safe size for the longest word */
    line-height: 1.0;
  }
  
  .hollow-text {
    -webkit-text-stroke: 1px rgb(var(--v-theme-bodyText));
  }
}
</style>