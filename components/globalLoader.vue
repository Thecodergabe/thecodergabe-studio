<template>
  <div 
    v-show="isLoading" 
    class="global-loader-container"
  >
    <div 
      class="loader-progress" 
      :style="{ width: `${progress}%` }"
    />
    
    <div 
      class="loader-glow" 
      :style="{ left: `${progress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Nuxt 3 loading indicator:
 * Exposes:
 *  - progress: a reactive number (0–100)
 *  - isLoading: boolean indicating active navigation or async work
 *
 * The throttle prevents flicker on fast loads.
 * The duration provides a smooth fill animation when progress is unknown.
 */
const { progress, isLoading } = useLoadingIndicator({
  throttle: 200,   // Only show if loading lasts longer than 200ms
  duration: 2000,  // Estimated fill time for indeterminate progress
})
</script>

<style scoped>
.global-loader-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  background: rgba(var(--v-theme-primary), 0.1);
  pointer-events: none;
}

.loader-progress {
  height: 100%;
  background: rgb(var(--v-theme-primary));
  transition: width 0.3s ease;
  will-change: width;
}

.loader-glow {
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgb(var(--v-theme-primary)), 
    transparent
  );
  filter: blur(4px);
  transform: translateX(-100%);
  transition: left 0.3s ease;
}
</style>