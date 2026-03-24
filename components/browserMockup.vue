<template>
  <div class="browser-mockup border-thin rounded-xl overflow-hidden shadow-24 studio-card-lift">
    <div class="d-flex align-center pa-3 browser-header border-bottom">
      <div class="d-flex ga-1 mr-4">
        <div class="dot red" />
        <div class="dot yellow" />
        <div class="dot green" />
      </div>
      <div class="browser-address flex-grow-1 text-center py-1 rounded text-uppercase px-4">
        {{ url }}
      </div>
    </div>
    
    <div class="viewport custom-scroll">
      <div v-if="imageBefore" class="toggle-zone">
        <v-btn
          :loading="isImageLoading"
          rounded="pill"
          size="small"
          elevation="8"
          class="switch-pill font-weight-black"
          @click="handleToggle"
        >
          {{ showBefore ? 'SHOW MODERN' : 'SHOW LEGACY' }}
        </v-btn>
      </div>

      <div class="image-stack">
        <nuxt-img 
          ref="modernImg"
          :src="image" 
          :alt="alt || 'Modern Project screenshot'"
          class="project-img modern-layer"
          :class="{ 'fade-out': showBefore }"
          loading="lazy"
          width="1200"
          format="webp"
          quality="90"
          @load="checkLoadingState"
        />

        <nuxt-img 
          v-if="imageBefore"
          ref="legacyImg"
          :src="imageBefore" 
          :alt="alt || 'Legacy Project screenshot'"
          class="project-img legacy-layer"
          :class="{ 'fade-in': showBefore }"
          loading="lazy"
          width="1200"
          format="webp"
          quality="90"
          @load="checkLoadingState"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

/**
 * BrowserMockup Component
 *
 * This component renders a stylized browser frame used to showcase
 * project screenshots. It supports an optional "before/after" mode
 * where legacy and modern versions of a UI can be toggled.
 */
const props = withDefaults(
  defineProps<{
    image: string
    imageBefore?: string
    url: string
    showBefore: boolean
    alt?: string
  }>(),
  {
    alt: 'Project Showcase'
  }
)

const emit = defineEmits(['toggle'])

const isImageLoading = ref(false)
const modernImg = ref<any>(null)
const legacyImg = ref<any>(null)

/**
 * Checks if the currently active image layer is actually loaded.
 */
const checkLoadingState = () => {
  const target = props.showBefore ? legacyImg.value?.$el : modernImg.value?.$el
  if (target && target.complete) {
    isImageLoading.value = false
  }
}

const handleToggle = () => {
  const target = !props.showBefore ? legacyImg.value?.$el : modernImg.value?.$el
  if (target && !target.complete) {
    isImageLoading.value = true
  }
  emit('toggle')
}

watch(() => props.showBefore, () => {
  checkLoadingState()
})

onMounted(() => {
  checkLoadingState()
})
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
  
  /* ELLIPSES & SPACING FIX */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%; /* Ensures it respects the flex-grow container */
}

.viewport {
  position: relative;
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(var(--v-theme-background));
  scroll-behavior: smooth;
}

.image-stack {
  position: relative;
  width: 100%;
}

.project-img {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.4s ease-in-out, filter 0.6s ease-in-out;
}

.modern-layer {
  opacity: 1;
}
.modern-layer.fade-out {
  opacity: 0;
}

.legacy-layer {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  filter: grayscale(1) contrast(1.1) brightness(0.7);
}

.legacy-layer.fade-in {
  opacity: 1;
  pointer-events: auto;
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

.custom-scroll::-webkit-scrollbar { width: 6px; }
.custom-scroll::-webkit-scrollbar-thumb { 
  background: rgba(var(--v-theme-primary), 0.2); 
  border-radius: 10px; 
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--v-theme-primary));
}
</style>