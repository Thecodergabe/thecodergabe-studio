<template>
  <div class="tabs-container d-flex align-center px-3 px-sm-4">
    <div class="window-controls d-flex ga-1 ga-sm-2 mr-3 mr-sm-6">
      <div class="control-dot close" />
      <div class="control-dot minimize" />
      <div class="control-dot maximize" />
    </div>

    <div class="d-flex ga-1 overflow-x-auto no-scrollbar flex-grow-1">
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
        <span class="tab-text text-no-wrap">{{ file.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { editorFiles } from '../../data/editorFileData'

/**
 * Props:
 * - activeTab: the currently selected file key
 *
 * The parent component owns the state so this tab bar remains
 * stateless and reusable across different editor configurations.
 */
defineProps<{ activeTab: string }>()

/**
 * Emits:
 * - change: fired when the user selects a different tab
 *
 * The parent listens for this event and updates `activeTab`,
 * keeping the tab bar fully controlled from above.
 */
defineEmits(['change'])

/**
 * Converts the editorFiles object into an iterable array of:
 *   [key, file]
 *
 * This makes it easy to loop through tabs while preserving
 * the original file identifiers used by the editor.
 */
const files = Object.entries(editorFiles)
</script>

<style scoped>
.tabs-container {
  height: 40px; /* Slimmer for mobile density */
  background: rgb(var(--v-theme-ideTabsBg));
  border-bottom: 1px solid rgb(var(--v-theme-ideTabsBorderDark));
}

.control-dot { width: 10px; height: 10px; border-radius: 50%; }
.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27c93f; }

.tab-item {
  height: 40px;
  padding: 0 12px; /* Tighter padding for mobile */
  font-size: 11px;
  color: rgb(var(--v-theme-ideTabsText));
  background: transparent;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.tab-item.active {
  background: rgb(var(--v-theme-ideTabsBgActive));
  color: rgb(var(--v-theme-bodyText));
  box-shadow: inset 0 2px 0 rgb(var(--v-theme-ideTabsAccent));
}

.no-scrollbar::-webkit-scrollbar { display: none; }
</style>