<template>
  <div 
    class="technical-blueprint d-flex align-center justify-center rounded-xl overflow-hidden" 
    :style="{ height: height + (typeof height === 'number' ? 'px' : '') }"
  >
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
interface Props {
  height?: number | string;
  icon?: string;
  iconSize?: number;
  label?: string;
  secondaryLabel?: string;
}

withDefaults(defineProps<Props>(), {
  height: 400,
  icon: 'mdi-monitor-screenshot',
  iconSize: 64,
  label: 'System Interface',
  secondaryLabel: 'UI_MODULE'
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
}
</style>