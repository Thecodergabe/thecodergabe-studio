<template>
  <v-footer
    app
    flat
    height="100"
    class="studio-footer px-6 px-md-12 d-flex align-center"
  >
    <v-row align="center" no-gutters>
      <v-col cols="12" md="4" class="text-center text-md-left mb-4 mb-md-0">
        <span class="footer-brand">THECODERGABE STUDIO</span>
        <div class="text-caption text-bodyTextMuted mt-1">
          © {{ new Date().getFullYear() }} — ALL RIGHTS RESERVED
        </div>
      </v-col>

      <v-col cols="12" md="4" class="d-flex justify-center mb-4 mb-md-0">
        <div class="status-indicator d-flex align-center ga-3 px-4 py-2">
          <span class="relative d-flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span class="status-text">AVAILABLE FOR NEW PROJECTS</span>
        </div>
      </v-col>

      <v-col cols="12" md="4" class="d-flex justify-center justify-md-end ga-2">
        <v-btn icon variant="text" size="small" href="https://github.com/thecodergabe" target="_blank">
          <v-icon size="20">mdi-github</v-icon>
        </v-btn>
        <v-btn icon variant="text" size="small" href="https://linkedin.com/in/thecodergabe" target="_blank">
          <v-icon size="20">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon variant="text" size="small" href="mailto:hello@thecodergabe.com">
          <v-icon size="20">mdi-email-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.studio-footer {
  background: rgb(var(--v-theme-background)) !important;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.05) !important;
}

.footer-brand {
  font-weight: 800;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  color: rgb(var(--v-theme-bodyText));
}

.status-indicator {
  background: rgba(var(--v-theme-success), 0.05);
  border: 1px solid rgba(var(--v-theme-success), 0.1);
  border-radius: 100px;
}

.status-text {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgb(var(--v-theme-success));
}

/* Ping Animation for the "Live" dot */
.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% { transform: scale(2.5); opacity: 0; }
}

.relative { position: relative; }
.absolute { position: absolute; }
</style>