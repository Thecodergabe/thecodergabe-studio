<template>
  <v-card variant="flat" class="work-card mb-16 bg-transparent">
    <v-row align="center">
      <v-col cols="12" md="7" class="relative">
        <v-hover v-slot="{ isHovering, props }">
          <div v-bind="props" class="image-container rounded-xl overflow-hidden elevation-24">
            <v-img 
              :src="imageAfter" 
              cover 
              class="main-image transition-transform"
              :class="{ 'scale-105': isHovering }"
            />
            <div class="commit-badge">
              <span class="text-primary">{{ commitCount }}</span> COMMITS
            </div>
          </div>
        </v-hover>
      </v-col>

      <v-col cols="12" md="5" class="ps-md-12">
        <div class="text-overline text-primary mb-2 tracking-widest">{{ category }}</div>
        <h3 class="text-h3 font-weight-black mb-6 uppercase-title">{{ title }}</h3>
        
        <p class="text-body-1 text-bodyTextSecondary mb-6">
          {{ description }}
        </p>

        <v-list bg-transparent class="pa-0 mb-8 ga-2 d-flex flex-column">
          <v-list-item v-for="(point, i) in highlights" :key="i" class="pa-0 min-h-0">
            <template v-slot:prepend>
              <v-icon color="primary" size="18" class="mr-3">mdi-check-circle-outline</v-icon>
            </template>
            <v-list-item-title class="text-body-2">{{ point }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <div class="d-flex ga-3 flex-wrap">
          <v-chip v-for="tag in tags" :key="tag" variant="tonal" size="small" class="font-weight-bold">
            {{ tag }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.image-container {
  position: relative;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  background: #000;
}

.scale-105 {
  transform: scale(1.05);
}

.commit-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(var(--v-theme-background), 0.8);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 100px;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.uppercase-title {
  font-family: 'Syne', sans-serif;
  line-height: 1;
}
</style>