<template>
  <v-container id="expertise" class="py-16">
    <v-row align="center" justify="center">
      <v-col cols="12" md="5" class="mb-8 mb-md-0">
        <div class="text-overline text-primary font-weight-bold mb-4 tracking-widest">
          TECHNICAL STACK
        </div>
        <h2 class="text-h3 font-weight-black mb-6 heading-style">
          ENTERPRISE <span class="text-primary">LOGIC.</span><br />
          BOUTIQUE <span class="text-outline">UI.</span>
        </h2>
        <p class="text-body-1 text-bodyTextSecondary max-width-p">
          Specializing in the modernization of complex ecosystems. I bridge the gap 
          between high-velocity delivery and pixel-perfect design.
        </p>
      </v-col>

      <v-col cols="12" md="7">
        <expertise-ide />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import expertiseIde from './expertiseIde.vue'
</script>

<style scoped>
.heading-style {
  line-height: 1;
  font-family: 'Inter', sans-serif;
  letter-spacing: -2px;
  /* Ensure title is high contrast */
  color: rgb(var(--v-theme-bodyText));
}

.text-outline {
  /* Using bodyText for the stroke ensures visibility in both Light/Dark modes */
  -webkit-text-stroke: 1.5px rgb(var(--v-theme-bodyText));
  color: transparent;
}

.max-width-p {
  max-width: 450px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .heading-style {
    font-size: 2.5rem !important;
  }
}
</style>