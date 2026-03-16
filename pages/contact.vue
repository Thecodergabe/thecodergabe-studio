<template>
  <v-container class="py-10 px-4 inquiry-container d-flex align-center h-md-100">
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" lg="10" xl="8">
        <v-row class="align-center">
          
          <v-col cols="12" md="5" class="pr-md-12 mb-10 mb-md-0 text-left">
            <h1 class="text-h4 text-sm-h2 font-weight-black mb-4 tracking-tighter">
              Let's work together.
            </h1>
            <p class="text-body-2 text-sm-h6 text-grey-darken-1 mb-8">
              Currently available for high-impact UI/UX migrations and bespoke engineering.
            </p>
            
            <div class="d-flex flex-column ga-4">
              <div 
                v-for="skill in contactHighlights" 
                :key="skill.title" 
                class="d-flex align-center ga-3"
              >
                <v-avatar color="primary" variant="tonal" size="32" rounded="lg">
                  <v-icon :icon="skill.icon" size="16" />
                </v-avatar>
                <div>
                  <div class="text-caption font-weight-bold text-uppercase">{{ skill.title }}</div>
                  <div class="text-caption text-grey">{{ skill.desc }}</div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="7" class="d-flex justify-md-end">
            <v-card 
              :variant="$vuetify.display.xs ? 'flat' : 'outlined'" 
              class="form-card pa-2 pa-sm-8 rounded-xl w-100"
              max-width="600"
            >
              <inquiry-form />
            </v-card>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { contactHighlights } from '@/data/contactHighlights'
  import inquiryForm from '../components/inquiryForm.vue'
</script>

<style scoped>
.inquiry-container {
  min-height: 85vh;
}

.form-card {
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
  /* subtle glass effect for desktop */
  background: rgba(var(--v-theme-surface), 0.4) !important;
  backdrop-filter: blur(12px);
}

.tracking-tighter {
  letter-spacing: -1.5px !important;
}

@media (max-width: 600px) {
  .inquiry-container {
    min-height: 100vh;
    padding-top: 100px; /* Space for fixed header */
  }
  .tracking-tighter {
    letter-spacing: -0.8px !important;
  }
}
</style>