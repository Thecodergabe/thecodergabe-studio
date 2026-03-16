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
        <v-icon 
          size="14" 
          :color="key === activeTab ? 'ideTabsAccent' : 'ideTabsText'"
        >
          {{ file.name.endsWith('.ts') ? 'mdi-language-typescript' : 'mdi-vuejs' }}
        </v-icon>
        <span class="tab-text">{{ file.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { editorFiles } from '../../data/editorFileData'

defineProps<{
  activeTab: string
}>()

defineEmits(['change'])

const files = Object.entries(editorFiles)
</script>

<style scoped>
.tabs-container {
  height: 45px;
  background: rgb(var(--v-theme-ideTabsBg));
  border-bottom: 1px solid rgb(var(--v-theme-ideTabsBorderDark));
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
  color: rgb(var(--v-theme-ideTabsText));
  background: transparent;
  border: none;
  border-right: 1px solid rgb(var(--v-theme-ideTabsBorderLight));
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-item:hover {
  color: rgb(var(--v-theme-ideTabsTextHover));
}

.tab-item.active {
  background: rgb(var(--v-theme-ideTabsBgActive));
  color: rgb(var(--v-theme-bodyText));
  box-shadow: inset 0 2px 0 rgb(var(--v-theme-ideTabsAccent));
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>