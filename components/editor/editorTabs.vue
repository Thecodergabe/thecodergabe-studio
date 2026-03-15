<template>
  <div class="tabs-container d-flex align-center px-4">
    <div class="window-controls d-flex ga-2 mr-6">
      <div class="control-dot close" />
      <div class="control-dot minimize" />
      <div class="control-dot maximize" />
    </div>

    <div class="d-flex ga-1 overflow-x-auto no-scrollbar">
      <button
        v-for="[key, file] in files"
        :key="key"
        class="tab-item d-flex align-center ga-2"
        :class="{ active: key === activeTab }"
        @click="$emit('change', key)"
      >
        <v-icon size="14" :color="key === activeTab ? 'primary' : ''">
          {{ file.name.endsWith('.ts') ? 'mdi-language-typescript' : 'mdi-vuejs' }}
        </v-icon>
        {{ file.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { editorFiles } from './editorFileData'

defineProps<{
  activeTab: string
}>()

const files = Object.entries(editorFiles)
</script>

<style scoped>
.tabs-container {
  height: 45px;
  background: rgb(var(--v-theme-surface-variant));
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.control-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27c93f; }

.tab-item {
  height: 45px;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgb(var(--v-theme-bodyTextMuted));
  background: transparent;
  border: none;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-item.active {
  background: rgb(var(--v-theme-codeBg));
  color: rgb(var(--v-theme-primary));
  /* Top highlight bar on the active tab */
  box-shadow: inset 0 2px 0 rgb(var(--v-theme-primary));
}

.no-scrollbar::-webkit-scrollbar { display: none; }
</style>