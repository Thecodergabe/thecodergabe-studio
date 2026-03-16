<template>
  <div class="code-viewer-root pa-4">
    <div v-for="(line, i) in tokenizedLines" :key="i" class="code-line">
      <span class="line-number">{{ i + 1 }}</span>
      <span class="line-content">
        <span 
          v-for="(token, j) in line" 
          :key="j" 
          :class="['token', `token-${token.type}`]"
        >{{ token.text }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSyntaxHighlight } from '@/composables/useSyntaxHighlight'

const props = defineProps<{ lines: string[], language: string }>()
const { tokenizeLines } = useSyntaxHighlight()
const tokenizedLines = computed(() => tokenizeLines(props.lines, props.language))
</script>

<style scoped>
.code-viewer-root { font-family: 'Fira Code', monospace; font-size: 13px; line-height: 1.6; }
.code-line { display: flex; white-space: pre; }
.line-number { width: 30px; opacity: 0.3; text-align: right; margin-right: 16px; user-select: none; }

/* Studio Theme Colors */
.token-keyword { color: rgb(var(--v-theme-codeKeyword)); font-weight: 600; }
.token-string { color: rgb(var(--v-theme-codeString)); }
.token-comment { color: rgb(var(--v-theme-codeComment)); }
.token-variable { color: rgb(var(--v-theme-codeComponent)); } /* Teal Keys */
.token-attr { color: rgb(var(--v-theme-codeComponent)); opacity: 0.8; }
.token-function { color: rgb(var(--v-theme-codeFunction)); } 
.token-tag { color: rgb(var(--v-theme-codeKeyword)); opacity: 0.7; }
.token-plain { color: rgb(var(--v-theme-codePlain)); }
</style>