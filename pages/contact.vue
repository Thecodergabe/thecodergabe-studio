<template>
  <v-container class="py-16 inquiry-container d-flex align-center">
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-row class="align-center">
          <v-col cols="12" md="5" class="pr-md-10">
            <h1 class="text-h2 font-weight-black mb-4 tracking-tighter">
              Let's work together.
            </h1>
            <p class="text-h6 text-grey-darken-1 font-weight-regular mb-8">
              Currently available for high-impact UI/UX migrations and bespoke engineering.
            </p>
            
            <div class="d-flex flex-column ga-6">
              <div 
                v-for="skill in contactHighlights" 
                :key="skill.title" 
                class="d-flex align-center ga-4"
              >
                <v-avatar color="primary" variant="tonal" size="42" rounded="lg">
                  <v-icon :icon="skill.icon" size="20" />
                </v-avatar>
                <div>
                  <div class="text-subtitle-1 font-weight-bold">{{ skill.title }}</div>
                  <div class="text-caption text-grey">{{ skill.desc }}</div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-card variant="outlined" class="pa-8 border-opacity-25 rounded-xl">
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
  import inquiryForm from './inquiryForm.vue'
</script>

<style scoped>
.inquiry-container {
  min-height: 85vh;
}

.tracking-tighter {
  letter-spacing: -1.5px !important;
}
</style>