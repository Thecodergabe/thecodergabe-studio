<template>
  <v-container class="py-16 mt-10">
    <v-row align="start">
      <v-col cols="12" md="7" class="pe-md-12">
        <div class="text-overline text-primary font-weight-bold mb-4 tracking-widest">
          STUDIO IDENTITY
        </div>
        <h1 class="text-h2 font-weight-black mb-8 heading-style">
          THE ART OF <br />
          <span class="text-primary">EXECUTION.</span>
        </h1>
        
        <div class="about-content">
          <p class="text-h6 mb-6 font-weight-regular text-bodyText">
            Gabriel Rodriguez is a Senior UI Architect specializing in 
            the high-velocity modernization of enterprise ecosystems.
          </p>
          
          <p class="mb-6">
            With a career defined by over <strong>8,000 production commits</strong>, I bridge the gap between complex backend logic and boutique user experiences. My tenure as the primary UI architect for the AllTrac platform involved evolving a massive stack from legacy Options API to modern, type-safe <strong>Nuxt 3 & TypeScript</strong> environments.
          </p>

          <p class="mb-10">
            I don’t just build components; I author <strong>Design Systems</strong>. My work on shared Vue libraries ensures that enterprise-scale applications remain consistent, performant, and maintainable long after the initial ship date.
          </p>
        </div>

        <v-row class="mb-12">
          <v-col cols="4">
            <div class="text-h4 font-weight-black text-primary">8K+</div>
            <div class="text-caption font-weight-bold text-bodyTextSecondary uppercase">Commits</div>
          </v-col>
          <v-col cols="4">
            <div class="text-h4 font-weight-black text-primary">1.5K+</div>
            <div class="text-caption font-weight-bold text-bodyTextSecondary uppercase">Lib Components</div>
          </v-col>
          <v-col cols="4">
            <div class="text-h4 font-weight-black text-primary">6+</div>
            <div class="text-caption font-weight-bold text-bodyTextSecondary uppercase">Years Vue/Nuxt</div>
          </v-col>
        </v-row>

        <div class="d-flex ga-4 flex-wrap">
          <v-btn to="/work" color="primary" rounded="pill" size="large" class="px-8 font-weight-black elevation-4">
            EXPLORE PORTFOLIO <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn to="/" variant="text" color="bodyTextSecondary" class="px-6 font-weight-black">
            STUDIO HOME
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="mt-12 mt-md-0">
        <div class="blueprint-card rounded-xl border-thin pa-8 d-flex flex-column justify-space-between elevation-2">
          <div class="blueprint-header d-flex justify-space-between align-center">
            <div class="text-caption font-weight-black opacity-40 uppercase">Arch_Diagram_V3.ts</div>
            <v-icon color="primary" opacity="0.4">mdi-layers-triple-outline</v-icon>
          </div>

          <div class="blueprint-visual text-center py-12">
            <div class="abstract-cg mb-4">
               <span class="text-h1 font-weight-black text-primary opacity-10">CG</span>
            </div>
            <div class="tech-labels d-flex flex-wrap justify-center ga-2">
              <v-chip size="x-small" variant="outlined" color="primary">Composition API</v-chip>
              <v-chip size="x-small" variant="outlined" color="primary">SignalR Realtime</v-chip>
              <v-chip size="x-small" variant="outlined" color="primary">Kiota Typed API</v-chip>
              <v-chip size="x-small" variant="outlined" color="primary">Pinia State</v-chip>
            </div>
          </div>

          <div class="blueprint-footer border-top pt-4">
            <div class="text-caption font-weight-bold text-bodyTextMuted uppercase tracking-widest">
              Available for high-impact roles
            </div>
          </div>
          
          <div class="crosshair top-left"></div>
          <div class="crosshair top-right"></div>
          <div class="crosshair bottom-left"></div>
          <div class="crosshair bottom-right"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.heading-style {
  line-height: 0.9;
  letter-spacing: -3px;
  color: rgb(var(--v-theme-bodyText));
}

.about-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgb(var(--v-theme-bodyTextSecondary));
}

.blueprint-card {
  min-height: 540px;
  background: rgb(var(--v-theme-surface));
  position: relative;
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  overflow: hidden;
}

.abstract-cg {
  letter-spacing: 20px;
  margin-right: -20px;
}

.blueprint-header, .blueprint-footer {
  z-index: 2;
}

/* Decorative Crosshairs for that 'Architect' feel */
.crosshair {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}
.top-left { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
.top-right { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
.bottom-left { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
.bottom-right { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }

@media (max-width: 960px) {
  .heading-style { font-size: 3rem !important; }
}
</style>