<template>
  <div class="ide-window rounded-lg overflow-hidden border-thin elevation-2">
    <div class="ide-header d-flex align-center px-4">
      <div class="d-flex ga-1 me-4">
        <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
      </div>
      <div class="ide-tabs d-flex">
        <div class="ide-tab active px-4 py-2 text-caption">
          <v-icon start size="14" color="primary">mdi-language-typescript</v-icon>
          Expertise.ts
          <v-icon end size="10" class="ms-2 opacity-50">mdi-close</v-icon>
        </div>
        <div class="ide-tab inactive px-4 py-2 text-caption d-none d-sm-flex">
          <v-icon start size="14" color="green-lighten-1">mdi-vuejs</v-icon>
          App.vue
        </div>
      </div>
    </div>

    <div class="ide-content pa-6">
      <div class="line-numbers d-none d-sm-block pe-4 text-bodyTextMuted text-right opacity-50">
        1<br>2<br>3<br>4<br>5<br>6
      </div>
      <pre class="code-text"><code><span class="keyword">export const</span> <span class="function">Architect</span> = {
  <span class="variable">core</span>: [<span class="string">'Vue 3'</span>, <span class="string">'Nuxt 3'</span>, <span class="string">'Vuetify'</span>],
  <span class="variable">logic</span>: [<span class="string">'TypeScript'</span>, <span class="string">'State Machines'</span>],
  <span class="variable">realtime</span>: <span class="keyword">true</span>, 
  <span class="variable">status</span>: <span class="string">'Available for high-impact roles'</span>
};</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
// Logic handled by parent expertise.vue
</script>

<style scoped>
.ide-window {
  background: rgb(var(--v-theme-codeBg));
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

.ide-header {
  background: rgb(var(--v-theme-surface-variant));
  height: 40px;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.05);
}

.ide-tabs {
  height: 100%;
  align-items: flex-end;
}

.ide-tab {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: default;
}

.ide-tab.active {
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-bodyText));
  border-top: 2px solid rgb(var(--v-theme-primary));
  font-weight: 700;
}

.ide-tab.inactive {
  background: transparent;
  color: rgb(var(--v-theme-bodyTextMuted));
  opacity: 0.6;
}

.ide-content {
  display: flex;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  background: rgb(var(--v-theme-background));
}

.dot { width: 8px; height: 8px; border-radius: 50%; }
.red { background: #ff5f56; } 
.yellow { background: #ffbd2e; } 
.green { background: #27c93f; }

.line-numbers {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  user-select: none;
}

.code-text {
  color: rgb(var(--v-theme-bodyText));
}

/* Syntax Highlighting */
.keyword { color: rgb(var(--v-theme-codeKeyword)); font-weight: 600; }
.function { color: rgb(var(--v-theme-codeFunction)); }
.string { color: rgb(var(--v-theme-codeString)); }
.variable { color: rgb(var(--v-theme-codePlain)); }

/* Custom Scrollbar for the IDE Content */
.ide-content::-webkit-scrollbar { height: 4px; }
.ide-content::-webkit-scrollbar-thumb { 
  background: rgba(var(--v-theme-primary), 0.3); 
  border-radius: 10px; 
}
</style>