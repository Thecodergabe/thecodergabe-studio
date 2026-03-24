<template>
  <div class="ide-window rounded-xl overflow-hidden border-thin elevation-2">
    <div class="ide-header d-flex align-center px-4">
      <div class="d-flex ga-1 me-4">
        <div class="dot red" />
        <div class="dot yellow" />
        <div class="dot green" />
      </div>
      <div class="ide-tabs d-flex">
        <div class="ide-tab active px-4 py-2">
          <v-icon start size="14" color="primary">mdi-language-typescript</v-icon>
          Expertise.ts
          <v-icon end size="10" class="ms-2 opacity-50">mdi-close</v-icon>
        </div>
        <div class="ide-tab inactive px-4 py-2 d-none d-sm-flex">
          <v-icon start size="14" color="green-lighten-1">mdi-vuejs</v-icon>
          App.vue
        </div>
      </div>
    </div>

    <div class="ide-content pa-6">
      <div class="line-numbers d-none d-sm-block pe-4 text-right opacity-30">
        1<br>2<br>3<br>4<br>5<br>6<br>7<br>8
      </div>
      <pre class="code-text flex-grow-1"><code><span class="keyword">export const</span> <span class="function">ArchitectProfile</span> = {
  <span class="variable">frameworks</span>: [<span class="string">'Vue 3'</span>, <span class="string">'Nuxt 3'</span>],
  <span class="variable">ui_systems</span>: [<span class="string">'Vuetify'</span>, <span class="string">'Bootstrap'</span>],
  <span class="variable">state</span>: [<span class="string">'Pinia'</span>, <span class="string">'Vuex'</span>],
  <span class="variable">foundation</span>: [<span class="string">'TypeScript'</span>, <span class="string">'HTML5'</span>, <span class="string">'CSS3'</span>],
  <span class="variable">realtime</span>: <span class="keyword">true</span>, 
  <span class="variable">status</span>: <span class="string">'AVAILABLE_FOR_PROJECTS'</span>
};</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ExpertiseIDE Component
 *
 * This component renders a stylized “IDE window” used to showcase
 * technical expertise in a visually familiar developer environment.
 *
 * The content inside the <pre><code> block is intentionally static:
 * it acts as a decorative code snippet rather than executable logic.
 *
 * No props or reactive state are required — the component is purely
 * presentational and relies on scoped CSS for syntax highlighting.
 */
</script>

<style scoped>
.ide-window {
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.ide-header {
  background: rgba(var(--v-theme-surface-variant), 0.5);
  height: 44px;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.05);
  backdrop-filter: blur(10px);
}

.ide-tabs {
  height: 100%;
  align-items: flex-end;
}

.ide-tab {
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: default;
}

.ide-tab.active {
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-primary));
  border-top: 2px solid rgb(var(--v-theme-primary));
  font-weight: 700;
}

.ide-tab.inactive {
  opacity: 0.4;
  color: rgb(var(--v-theme-on-surface));
}

.ide-content {
  display: flex;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  overflow-x: auto;
  background: rgb(var(--v-theme-background));
  line-height: 1.6;
}

.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } 
.yellow { background: #ffbd2e; } 
.green { background: #27c93f; }

.line-numbers {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  user-select: none;
  min-width: 25px;
}

.code-text {
  margin: 0;
  white-space: pre-wrap;
}

/* Syntax Highlighting */
.keyword { color: #c678dd; font-weight: 600; }
.function { color: #61afef; }
.string { color: #98c379; }
.variable { color: #e06c75; }

.ide-content::-webkit-scrollbar { height: 4px; }
.ide-content::-webkit-scrollbar-thumb { 
  background: rgba(var(--v-theme-primary), 0.2); 
  border-radius: 10px; 
}
</style>