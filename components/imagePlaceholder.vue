<template>
  <div 
    class="technical-blueprint d-flex align-center justify-center rounded-xl overflow-hidden position-relative w-100 flex-grow-1" 
    :style="{ minHeight: formattedHeight }"
  >
    <slot name="overlay" />

    <div class="text-center px-4">
      <v-icon :size="iconSize" color="primary" class="mb-4 opacity-20">
        {{ icon }}
      </v-icon>
      <div class="text-overline text-primary opacity-30 font-weight-black tracking-widest leading-tight">
        {{ label.toUpperCase() }} // ARCH_VIEW_{{ secondaryLabel.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    height?: number | string;
    icon?: string;
    iconSize?: number | string;
    label?: string;
    secondaryLabel?: string;
  }>(),
  {
    height: '100%',
    icon: 'mdi-monitor-screenshot',
    iconSize: 64,
    label: 'System Interface',
    secondaryLabel: 'UI_MODULE',
  }
);

const formattedHeight = computed(() => {
  return typeof props.height === 'number' ? `${props.height}px` : props.height;
});
</script>

<style scoped>
.technical-blueprint {
  background-color: rgb(var(--v-theme-surface));
  background-image: 
    linear-gradient(rgba(var(--v-theme-primary), 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--v-theme-primary), 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  /* Ensure it takes up all available flex space */
  align-self: stretch;
}
</style>