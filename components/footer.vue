<template>
  <v-footer class="bg-black py-10 border-t-thin">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center mb-4">
          <v-chip
            variant="outlined"
            color="success"
            size="small"
            class="text-caption font-weight-bold px-4"
            style="letter-spacing: 1px;"
          >
            ● AVAILABLE FOR NEW PROJECTS
          </v-chip>
        </v-col>

        <v-col cols="12" md="6" class="text-center text-md-left">
          <div class="text-subtitle-2 font-weight-black mb-1">THECODERGABE <span class="text-grey-darken-1">STUDIO</span></div>
          <div class="text-caption text-grey">
            © {{ new Date().getFullYear() }} — ALL RIGHTS RESERVED
          </div>
        </v-col>

        <v-col cols="12" md="6" class="text-center text-md-right">
          <div class="d-flex justify-center justify-md-end ga-2">
            <v-btn icon="mdi-github" variant="text" size="small" color="grey-lighten-1" href="https://github.com/thecodergabe"></v-btn>
            <v-btn icon="mdi-linkedin" variant="text" size="small" color="grey-lighten-1" href="#"></v-btn>
            <v-btn icon="mdi-email-outline" variant="text" size="small" color="grey-lighten-1" href="#"></v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.border-t-thin {
  border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
}

/* Ensure icons don't get too small on mobile */
@media (max-width: 600px) {
  .v-btn--icon.v-btn--size-small {
    width: 44px;
    height: 44px;
  }
}
</style>