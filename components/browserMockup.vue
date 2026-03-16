<template>
  <div class="browser-mockup border-thin rounded-xl overflow-hidden shadow-24 studio-card-lift">
    <div class="d-flex align-center pa-3 browser-header border-bottom">
      <div class="d-flex ga-1 mr-4">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="browser-address flex-grow-1 text-center py-1 rounded">
        {{ url }}
      </div>
    </div>
    
    <div class="viewport custom-scroll">
      <div v-if="imageBefore" class="toggle-zone">
        <v-btn
          rounded="pill"
          size="small"
          elevation="8"
          class="switch-pill font-weight-black"
          @click="$emit('toggle')"
        >
          {{ showBefore ? 'SHOW MODERN' : 'SHOW LEGACY' }}
        </v-btn>
      </div>

      <NuxtImg 
        :src="showBefore ? imageBefore : image" 
        class="project-img"
        :class="{ 'legacy-filter': showBefore }"
        loading="lazy"
        width="800" 
        densities="x1 x2"
        format="webp"
        quality="85"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  image: string; 
  imageBefore?: string; 
  url: string; 
  showBefore: boolean; 
  alt?: string; 
}>();

defineEmits(['toggle']);
</script>

<style scoped>
.browser-mockup { 
  display: flex; 
  flex-direction: column; 
  background: rgb(var(--v-theme-surface));
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Subtle Hover Lift */
.studio-card-lift:hover {
  transform: translateY(-5px);
}

.browser-header {
  background: rgb(var(--v-theme-surface-variant));
}

.browser-address { 
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-bodyTextMuted));
  font-family: 'Fira Code', monospace; 
  font-size: 10px; 
  letter-spacing: 0.05em;
}

.viewport {
  position: relative;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(var(--v-theme-background));
}

.project-img {
  width: 100%;
  height: auto;
  display: block;
  transition: filter 0.6s ease;
}

/* Optional: Slight fade/grayscale for legacy images to emphasize the 'Modern' rebuild */
.legacy-filter {
  filter: saturate(0.8) contrast(1.1);
}

.toggle-zone {
  position: sticky;
  top: 15px;
  z-index: 100;
  display: flex;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}

/* ACTION SWITCHER FIX: High contrast in both themes */
.switch-pill {
  pointer-events: auto;
  background: rgb(var(--v-theme-primary)) !important;
  color: #FFFFFF !important; /* Always white text for action visibility */
  border: 2px solid rgba(255, 255, 255, 0.4) !important;
  font-size: 10px !important;
  letter-spacing: 0.1em;
}

/* Dot styles */
.dot { width: 8px; height: 8px; border-radius: 50%; }
.red { background: #ff5f56; } 
.yellow { background: #ffbd2e; } 
.green { background: #27c93f; }

/* Boutique Scrollbar */
.custom-scroll::-webkit-scrollbar { width: 4px; }
.custom-scroll::-webkit-scrollbar-thumb { 
  background: rgb(var(--v-theme-primary)); 
  border-radius: 10px; 
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
</style>