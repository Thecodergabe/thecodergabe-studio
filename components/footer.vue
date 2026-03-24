<template>
  <v-footer class="bg-black py-10 border-t-thin">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center mb-4">
          <v-chip
            variant="outlined"
            color="success"
            size="small"
            class="status-chip text-caption font-weight-bold px-4 tracking-widest"
          >
            <span class="pulse-dot mr-2">●</span> AVAILABLE FOR NEW PROJECTS
          </v-chip>
        </v-col>

        <v-col cols="12" md="6" class="text-center text-md-left">
          <div class="text-subtitle-2 font-weight-black mb-1 text-uppercase">
            THECODERGABE <span class="text-grey-darken-1">STUDIO</span>
          </div>
          <div class="text-caption text-grey">
            © 2026 — ALL RIGHTS RESERVED
          </div>
        </v-col>

        <v-col cols="12" md="6" class="text-center text-md-right">
          <div class="d-flex justify-center justify-md-end ga-2">
            <v-btn 
              icon="mdi-github" 
              variant="text" 
              size="small" 
              color="grey-lighten-1" 
              href="https://github.com/thecodergabe" 
              target="_blank" 
            />
            <v-btn 
              icon="mdi-linkedin" 
              variant="text" 
              size="small" 
              color="grey-lighten-1" 
              href="https://www.linkedin.com/in/thecodergabe-connect" 
              target="_blank" 
            />
            <v-btn 
              variant="text" 
              to="/inquiry" 
              prepend-icon="mdi-email-outline"
              class="text-none"
            >
              Initialize Inquiry
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
/**
 * Footer Component
 * - Provides a clear and concise status indicator for project availability, using a pulsing dot for visual emphasis.
 * - Displays essential copyright information in a subdued style to maintain focus on the status and contact options
 */
</script>

<style scoped>
.border-t-thin {
  border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.tracking-widest {
  letter-spacing: 1px;
}

.pulse-dot {
  animation: pulse 2.5s infinite cubic-bezier(0.45, 0, 0.55, 1);
  display: inline-block;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.9); }
}

.status-chip {
  border-color: rgba(var(--v-theme-success), 0.2) !important;
  background: rgba(var(--v-theme-success), 0.02);
}

@media (max-width: 600px) {
  .v-btn--icon.v-btn--size-small {
    width: 44px;
    height: 44px;
  }
}
</style>