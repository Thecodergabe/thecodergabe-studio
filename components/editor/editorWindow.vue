<template>
  <v-fade-transition>
    <v-card v-if="mounted" class="editor-window mx-auto" elevation="24">
      <editor-tabs :active-tab="activeTab" @change="activeTab = $event" />

      <v-sheet class="editor-body">
        <code-viewer
          :lines="activeFile.lines"
          :language="activeFile.language"
        />
      </v-sheet>

      <div class="editor-status-bar d-flex align-center px-4">
        <div class="d-flex align-center ga-4">
          <span class="d-flex align-center ga-1">
            <v-icon size="12" color="primary">mdi-source-branch</v-icon>
            main*
          </span>
          <span class="d-flex align-center ga-1">
            <v-icon size="12" color="success">mdi-check-all</v-icon>
            Prettier
          </span>
        </div>
        <v-spacer />
        <div class="d-flex align-center ga-4 opacity-60">
          <span>UTF-8</span>
          <span class="text-uppercase">{{ activeFile.language }}</span>
        </div>
      </div>
    </v-card>
  </v-fade-transition>
</template>

<script setup lang="ts">
import { editorFiles } from '../../data/editorFileData'
import CodeViewer from './codeViewer.vue'
import EditorTabs from './editorTabs.vue'

/**
 * Controls the fade‑in animation of the editor window.
 * The slight delay creates a smoother entrance when the section
 * scrolls into view, giving the UI a more polished feel.
 */
const mounted = ref(false)

/**
 * Active tab identifier.
 * Tabs map directly to keys inside `editorFiles`, allowing the
 * component to swap between different code samples instantly.
 */
const activeTab = ref('studio')

/**
 * Returns the file object associated with the current tab.
 * Each file contains:
 *  - lines: array of code lines
 *  - language: syntax mode for the viewer
 *
 * The non-null assertion is safe because tabs are controlled.
 */
const activeFile = computed(() => editorFiles[activeTab.value]!)

/**
 * Delayed mount:
 * Adds a small pause before showing the editor so the fade transition
 * feels intentional rather than abrupt.
 */
onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 150)
})
</script>

<style scoped>
.editor-window {
  width: 100%;
  max-width: 900px;
  background: rgb(var(--v-theme-surface)) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  border-radius: 12px !important;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
}

.editor-body {
  background: rgb(var(--v-theme-codeBg)) !important;
  height: 400px; 
  overflow-y: auto;
  overflow-x: auto; /* Essential for mobile swiping of long lines */
}

.editor-status-bar {
  height: 28px;
  background: rgb(var(--v-theme-surface-variant));
  font-family: 'Fira Code', monospace;
  font-size: 10px;
  color: rgb(var(--v-theme-bodyTextMuted));
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}

@media (max-width: 600px) {
  .editor-window {
    /* Gives it a 12px margin on sides so it looks 'placed' */
    width: calc(100% - 24px);
    margin-inline: 12px;
  }
  .editor-body {
    height: 340px;
  }
}
</style>