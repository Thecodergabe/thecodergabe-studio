<template>
  <div class="code-viewer-root">
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
import { useSyntaxHighlight } from '@/composables/useSyntaxHighlight'
const props = defineProps<{ lines: string[], language: string }>()
const { tokenizeLines } = useSyntaxHighlight()
const tokenizedLines = computed(() => tokenizeLines(props.lines, props.language))
</script>

<style scoped>
.code-viewer-root { 
  font-family: 'Fira Code', monospace; 
  font-size: 12px; 
  line-height: 1.6;
  padding: 24px !important; /* This creates the 'Studio' breathing room */
}

.code-line { display: flex; white-space: pre; }

.line-number { 
  width: 25px; 
  opacity: 0.2; 
  text-align: right; 
  margin-right: 16px; 
  user-select: none; 
}

/* Tokens use your existing theme mapping */
.token-keyword { color: rgb(var(--v-theme-codeKeyword)); font-weight: 600; }
.token-string { color: rgb(var(--v-theme-codeString)); }
.token-comment { color: rgb(var(--v-theme-codeComment)); }
.token-variable { color: rgb(var(--v-theme-codeComponent)); }
.token-function { color: rgb(var(--v-theme-codeFunction)); } 
.token-plain { color: rgb(var(--v-theme-codePlain)); }
</style>