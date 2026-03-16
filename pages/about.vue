<template>
  <v-container class="py-16">
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <div class="text-overline text-primary mb-2 font-weight-bold tracking-widest">
          STUDIO IDENTITY
        </div>
        
        <h1 class="text-h2 font-weight-black mb-6 line-height-tight text-uppercase">
          THE ART OF <br />
          <span class="text-primary">EXECUTION.</span>
        </h1>

        <div class="text-body-1 text-grey-lighten-1 mb-6 max-width-prose">
          <p class="mb-4">
            Gabriel Rodriguez is a **Senior UI Architect** specializing in the 
            high-velocity modernization of enterprise ecosystems.
          </p>
          <p class="mb-4">
            With a career defined by over <span class="text-primary font-weight-black">{{ stats.commits }} production commits</span>, I 
            bridge the gap between complex backend logic and boutique 
            user experiences. My tenure as the primary UI architect for the 
            AllTrac platform involved evolving a massive stack from legacy 
            options API to modern, type-safe **Nuxt 3 & TypeScript** environments.
          </p>
          <p>
            I don't just build components; I author **Design Systems**. My 
            work on shared Vue libraries ensures that enterprise-scale 
            applications remain consistent, performant, and maintainable 
            long after the initial ship date.
          </p>
        </div>

        <v-row class="mb-8" density="comfortable">
          <v-col cols="4">
            <div class="text-h4 font-weight-black text-primary">{{ stats.commits }}</div>
            <div class="text-caption text-grey text-uppercase font-weight-bold tracking-tighter">Commits</div>
          </v-col>
          <v-col cols="4">
            <div class="text-h4 font-weight-black text-primary">{{ stats.components }}</div>
            <div class="text-caption text-grey text-uppercase font-weight-bold tracking-tighter">Lib Components</div>
          </v-col>
          <v-col cols="4">
            <div class="text-h4 font-weight-black text-primary">{{ stats.experience }}</div>
            <div class="text-caption text-grey text-uppercase font-weight-bold tracking-tighter">Years Vue/Nuxt</div>
          </v-col>
        </v-row>

        <div class="d-flex ga-4">
          <v-btn 
            color="primary" 
            rounded="xl" 
            size="large" 
            append-icon="mdi-arrow-right" 
            variant="flat"
            class="px-8 font-weight-bold"
            to="/work"
          >
            Explore Portfolio
          </v-btn>
          <v-btn 
            variant="text" 
            rounded="xl" 
            size="large" 
            class="text-none font-weight-bold"
            to="/"
          >
            Studio Home
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-card variant="outlined" class="arch-box pa-8 rounded-xl border-opacity-25">
          <div class="d-flex justify-space-between align-center mb-12">
            <span class="text-mono text-grey">Arch_Diagram_V3.ts</span>
            <v-icon icon="mdi-layers-outline" color="primary" />
          </div>
          
          <div class="arch-visual d-flex flex-column align-center justify-center py-12">
             <div class="d-flex ga-2 mb-4">
               <v-chip size="small" variant="outlined" color="primary" class="font-weight-bold">Composition API</v-chip>
               <v-chip size="small" variant="outlined" color="primary" class="font-weight-bold">SignalR Realtime</v-chip>
             </div>
             <v-chip size="small" variant="outlined" color="primary" class="mb-8 font-weight-bold">Pinia State</v-chip>
             
             <div class="text-caption text-grey mt-16 text-uppercase tracking-widest">
               Available for high-impact roles
             </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const stats = {
  commits: '8K+',
  components: '1.5K+',
  experience: '6+'
};
</script>

<style scoped>
.line-height-tight {
  line-height: 1.1 !important;
}
.max-width-prose {
  max-width: 520px;
}
.text-mono {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
}
.arch-box {
  background: rgba(var(--v-theme-surface), 0.02);
  min-height: 500px;
  position: relative;
}

.arch-box::before {
  content: '[';
  position: absolute;
  top: 20px; left: 20px;
  color: rgba(var(--v-theme-primary), 0.1); 
  font-size: 2.5rem;
}

.arch-box::after {
  content: ']';
  position: absolute;
  bottom: 20px; right: 20px;
  color: rgba(var(--v-theme-primary), 0.1); 
  font-size: 2.5rem;
}
</style>