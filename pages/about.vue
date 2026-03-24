<template>
  <main>
    <v-container class="py-8 py-md-16">
      <v-row class="align-center" :no-gutters="$vuetify.display.xs">
        <v-col cols="12" md="6" class="mb-10 mb-md-0">
          <div class="text-overline text-primary mb-2 font-weight-bold tracking-widest">
            STUDIO IDENTITY
          </div>
          
          <h1 class="text-h4 text-sm-h2 font-weight-black mb-6 line-height-tight text-uppercase tracking-tighter">
            The Art of <br />
            <span class="text-primary">Execution.</span>
          </h1>

          <div class="text-body-2 text-sm-body-1 text-grey-lighten-1 mb-8 max-width-prose">
            <p class="mb-4">
              Gabriel Rodriguez is a **Senior UI Architect** specializing in the 
              high-velocity modernization of enterprise ecosystems.
            </p>
            <p class="mb-4">
              With over <span class="text-primary font-weight-black">{{ stats.commits }} production commits</span>, I 
              bridge the gap between complex logic and boutique 
              user experiences.
            </p>
            <p>
              I author **Design Systems** that ensure enterprise applications remain 
              consistent and performant long after the initial ship date.
            </p>
          </div>

          <v-row class="mb-10 ga-y-4" density="comfortable">
            <v-col cols="4">
              <div class="text-h5 text-sm-h4 font-weight-black text-primary">{{ stats.commits }}</div>
              <div class="text-tiny text-grey text-uppercase font-weight-bold tracking-tighter">Commits</div>
            </v-col>
            <v-col cols="4">
              <div class="text-h5 text-sm-h4 font-weight-black text-primary">{{ stats.components }}</div>
              <div class="text-tiny text-grey text-uppercase font-weight-bold tracking-tighter">Lib Components</div>
            </v-col>
            <v-col cols="4">
              <div class="text-h5 text-sm-h4 font-weight-black text-primary">{{ stats.experience }}</div>
              <div class="text-tiny text-grey text-uppercase font-weight-bold tracking-tighter">Years Vue/Nuxt</div>
            </v-col>
          </v-row>

          <div class="d-flex flex-column flex-sm-row ga-4">
            <v-btn 
              color="primary" 
              rounded="lg" 
              size="large" 
              append-icon="mdi-arrow-right" 
              variant="flat"
              class="px-8 font-weight-black"
              to="/work"
            >
              Explore Portfolio
            </v-btn>
            <v-btn 
              variant="tonal" 
              rounded="lg" 
              size="large" 
              class="text-none font-weight-black"
              to="/"
            >
              Studio Home
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-card variant="outlined" class="arch-box pa-6 pa-md-8 rounded-xl border-opacity-25">
            <div class="d-flex justify-space-between align-center mb-8 mb-md-12">
              <span class="text-mono text-grey">Arch_Diagram_V3.ts</span>
              <v-icon icon="mdi-layers-outline" color="primary" />
            </div>
            
            <div class="arch-visual d-flex flex-column align-center justify-center py-8 py-md-12">
               <div class="d-flex flex-wrap justify-center ga-2 mb-4">
                 <v-chip size="small" variant="outlined" color="primary" class="font-weight-bold">Composition API</v-chip>
                 <v-chip size="small" variant="outlined" color="primary" class="font-weight-bold">SignalR Realtime</v-chip>
               </div>
               <v-chip size="small" variant="outlined" color="primary" class="mb-8 font-weight-bold">Pinia State</v-chip>
               
               <div class="text-center text-caption text-grey mt-8 mt-md-16 text-uppercase tracking-widest opacity-50 px-4">
                 Available for high-impact roles
               </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup lang="ts">
/**
 * @file pages/about.vue
 * @description About page showcasing personal/studio identity,
 * experience metrics, and architectural philosophy.
 *
 * This page is intentionally lightweight — all content is static,
 * and no reactive logic is required beyond the stats object.
 */

/**
 * Display metrics used throughout the hero section.
 * These are static values representing experience and output.
 */
const stats = {
  commits: '8K+',
  components: '1.5K+',
  experience: '6+'
}
</script>

<style scoped>
.line-height-tight {
  line-height: 1.1 !important;
}
.tracking-tighter {
  letter-spacing: -1.5px !important;
}
.max-width-prose {
  max-width: 520px;
}
.text-mono {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
}
.text-tiny {
  font-size: 0.65rem;
}

.arch-box {
  background: rgba(var(--v-theme-surface), 0.02);
  min-height: 350px; 
  position: relative;
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
}

@media (min-width: 960px) {
  .arch-box {
    min-height: 500px;
  }
}

.arch-box::before, .arch-box::after {
  position: absolute;
  color: rgba(var(--v-theme-primary), 0.1); 
  font-size: 2.5rem;
}

.arch-box::before { content: '['; top: 15px; left: 15px; }
.arch-box::after { content: ']'; bottom: 15px; right: 15px; }
</style>