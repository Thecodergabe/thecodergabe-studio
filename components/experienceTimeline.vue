<template>
  <v-container class="py-16">
    <h2 class="text-h4 text-md-h3 font-weight-black uppercase-title mb-12">Experience</h2>
    
    <v-timeline 
      side="end" 
      align="start"
      :direction="$vuetify.display.smAndDown ? 'vertical' : 'vertical'"
      line-color="rgba(var(--v-theme-primary), 0.2)"
    >
      <v-timeline-item
        v-for="(item, i) in experienceData"
        :key="i"
        :dot-color="item.isCurrent ? 'primary' : 'grey-darken-3'"
        size="small"
      >
        <template v-slot:opposite v-if="$vuetify.display.mdAndUp">
          <span class="text-overline font-weight-bold text-primary tracking-widest">
            {{ item.year }}
          </span>
        </template>

        <div class="mb-10">
          <div class="d-md-none text-overline text-primary mb-2">{{ item.year }}</div>
          
          <h3 class="text-h5 font-weight-bold text-white mb-1">
            {{ item.title }}
          </h3>
          <div class="text-subtitle-1 text-primary font-weight-medium mb-4">
            {{ item.company }}
          </div>
          
          <p class="text-body-2 text-bodyTextSecondary mb-4 max-width-600">
            {{ item.description }}
          </p>

          <div class="d-flex ga-2 flex-wrap">
            <v-chip 
              v-for="skill in item.tech" 
              :key="skill" 
              variant="outlined" 
              size="x-small" 
              class="text-caption font-weight-bold"
            >
              {{ skill }}
            </v-chip>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts">
import { experienceData } from '@/data/experience'

/**
 * ExperienceTimeline Component
 *
 * Renders a vertical timeline of professional roles, highlighting
 * progression, responsibilities, and the technologies used at each stage.
 *
 * The data is sourced from a centralized module (`experienceData`),
 * keeping the component purely presentational and easy to maintain.
 *
 * Responsive behavior:
 * - On mobile, years shift into the main content block for readability.
 * - On desktop, years appear in the opposite slot for a clean left/right layout.
 *
 * Each timeline entry includes:
 *  - year: chronological anchor
 *  - title: role or position
 *  - company: organization name
 *  - description: summary of responsibilities or impact
 *  - tech: supporting technologies rendered as chips
 */
</script>

<style scoped>
.uppercase-title { font-family: 'Syne', sans-serif; }
.max-width-600 { max-width: 600px; }

/* Customizing the timeline dots for that Architect feel */
:deep(.v-timeline-item__dot) {
  box-shadow: 0 0 15px rgba(var(--v-theme-primary), 0.3);
}

:deep(.v-timeline-divider__line) {
  border-width: 1px;
}
</style>