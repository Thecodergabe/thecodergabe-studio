<template>
  <v-fade-transition>
    <v-card
      v-if="mounted"
      class="editor-window mx-auto"
      elevation="24"
    >
      <editor-tabs
        :activeTab="activeTab"
        @change="activeTab = $event"
      />

      <v-sheet class="editor-body">
        <code-viewer
          :lines="activeFile.lines"
          :language="activeFile.language"
          show-caret
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
import { ref, onMounted, computed } from 'vue'
import { editorFiles } from './editorFileData'
import codeViewer from './codeViewer.vue'
const mounted = ref(false)
const activeTab = ref<'studio' | 'home'>('studio')

const activeFile = computed(() => editorFiles[activeTab.value]!)

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
  border-radius: 16px !important;
  overflow: hidden;
  /* Thin "shine" on the top edge */
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
}

.editor-body {
  background: rgb(var(--v-theme-codeBg)) !important;
  height: 400px; /* Increased height for better proportions */
  overflow-y: auto;
  /* Custom scrollbar to keep the "Studio" feel */
}

.editor-body::-webkit-scrollbar {
  width: 8px;
}
.editor-body::-webkit-scrollbar-thumb {
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 10px;
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
    margin-inline: 12px;
  }
}
</style>