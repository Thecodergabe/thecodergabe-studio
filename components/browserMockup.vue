<template>
  <div class="browser-mockup border-thin rounded-xl overflow-hidden shadow-24 studio-card-lift">
    <div class="d-flex align-center pa-3 browser-header border-bottom">
      <div class="d-flex ga-1 mr-4">
        <div class="dot red" />
        <div class="dot yellow" />
        <div class="dot green" />
      </div>
      <div class="browser-address flex-grow-1 text-center py-1 rounded text-uppercase">
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

      <nuxt-img 
        :src="showBefore ? imageBefore : image" 
        :alt="alt || 'Project screenshot'"
        class="project-img"
        :class="{ 'legacy-filter': showBefore }"
        loading="lazy"
        width="1200"
        densities="x1 x2"
        format="webp"
        quality="90"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    image: string;
    imageBefore?: string;
    url: string;
    showBefore: boolean;
    alt?: string;
  }>(),
  {
    alt: 'Project Showcase'
  }
);

defineEmits(['toggle']);
</script>

<style scoped>
.browser-mockup { 
  display: flex; 
  flex-direction: column; 
  background: rgb(var(--v-theme-surface));
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.studio-card-lift:hover {
  transform: translateY(-5px);
}

.browser-header {
  background: rgba(var(--v-theme-surface-variant), 0.5);
  backdrop-filter: blur(8px);
}

.browser-address { 
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-primary));
  opacity: 0.7;
  font-family: 'Fira Code', monospace; 
  font-size: 10px; 
  letter-spacing: 0.1em;
}

.viewport {
  position: relative;
  /* Increased height for better visibility of long-form content */
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(var(--v-theme-background));
  /* Smooth scroll for a more premium feel */
  scroll-behavior: smooth;
}

.project-img {
  width: 100%;
  height: auto;
  display: block;
  /* Longer transition for a more 'cinematic' swap between legacy/modern */
  transition: filter 0.8s ease-in-out;
}

.legacy-filter {
  /* Heavier desaturation as seen in studio previews */
  filter: grayscale(1) contrast(1.1) brightness(0.7);
}

.toggle-zone {
  position: sticky;
  top: 20px;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}

.switch-pill {
  pointer-events: auto;
  background: rgb(var(--v-theme-primary)) !important;
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  font-size: 10px !important;
  letter-spacing: 0.1em;
}

.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } 
.yellow { background: #ffbd2e; } 
.green { background: #27c93f; }

/* Custom Scrollbar: Sleeker for long-scroll content */
.custom-scroll::-webkit-scrollbar { width: 6px; }
.custom-scroll::-webkit-scrollbar-thumb { 
  background: rgba(var(--v-theme-primary), 0.2); 
  border-radius: 10px; 
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--v-theme-primary));
}
</style>