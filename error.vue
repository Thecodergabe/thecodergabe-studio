<template>
  <v-container class="fill-height studio-blueprint d-flex align-center justify-center pa-0" fluid>
    <v-col cols="12" md="10" lg="8" xl="6" class="text-center">
      
      <h1 class="arch-404 mb-6">404</h1>
      
      <h2 class="text-h4 text-uppercase font-weight-black white--text mb-10 tracking-wide">
        PROJECT NOT IN BLUEPRINT.
      </h2>

      <v-sheet 
        color="transparent" 
        max-width="600" 
        class="mx-auto mb-16 text-center border-left-studio pa-6"
      >
        <p class="text-body-1 text-grey-lighten-2 leading-loose">
          The requested coordinate hasn't been engineered yet, or has been relocated within the studio archives. Let’s get you back to active development.
        </p>
      </v-sheet>
      
      <div class="d-flex flex-wrap justify-center gap-6">
        <v-btn
          variant="flat"
          color="primary"
          size="large"
          @click="handleClearError('/')"
          class="px-10 text-none"
        >
          Return Home
        </v-btn>
        
        <v-btn
          variant="outlined"
          color="white"
          size="large"
          @click="handleClearError('/work')"
          class="px-10 text-none"
        >
          View Works
        </v-btn>
      </div>

    </v-col>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 404 })
  }
})

// Ensures the error state is cleared before redirecting
const handleClearError = (path: string) => clearError({ redirect: path })
</script>

<style scoped>
/* 1. The Blueprint Grid: Radial gradient for dots and a small line grid */
.studio-blueprint { 
  background-color: #060606 !important;
  background-image: 
    radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.06) 1.5px, transparent 0),
    linear-gradient(rgba(255, 255, 255, 0.02) .5px, transparent .5px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) .5px, transparent .5px);
  background-size: 30px 30px, 150px 150px, 150px 150px;
  min-height: 100vh;
}

/* 2. Architectural Typography: Massive, Monospace, and subtle pulse */
.arch-404 {
  font-family: 'Fira Code', monospace;
  font-weight: 900;
  font-size: 10rem;
  line-height: 1;
  color: rgb(var(--v-theme-primary));
  letter-spacing: -8px;
  animation: bluePulse 6s ease-in-out infinite;
  user-select: none;
}

/* 3. Studio Spacing and Border Tokens */
.border-left-studio {
  border-left: 2px solid rgb(var(--v-theme-primary)) !important;
  border-radius: 4px;
}

.gap-6 { gap: 24px; }
.tracking-wide { letter-spacing: 2px; }
.leading-loose { line-height: 1.8; }

/* 4. Pulse Animation for the 404 text */
@keyframes bluePulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; text-shadow: 0 0 15px rgba(var(--v-theme-primary), 0.7); }
}

/* 5. Mobile Adjustments */
@media (max-width: 600px) {
  .arch-404 { font-size: 7rem; }
  .text-h4 { font-size: 1.5rem !important; }
}
</style>