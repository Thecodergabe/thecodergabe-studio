
<template>
  <div class="code-viewer">
    <div v-for="(line, i) in displayedLines" :key="i" class="code-line-row d-flex">
      <div class="text-disabled mr-6" style="min-width: 20px;">{{ i + 1 }}</div>
      <div class="code-line">
        <span v-for="(token, j) in line" :key="j" :class="['token', token.type]" :style="{ '--delay': `${j * 0.1}s` }">
          {{ token.text }}
        </span>
        <span v-if="showCaret && i === displayedLines.length - 1" class="caret"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useSyntaxHighlight } from '~/composables/useSyntaxHighlight'

const props = defineProps<{
  lines: string[]
  language: string
  showCaret?: boolean
}>()

const { tokenizeLines } = useSyntaxHighlight()
const displayedLines = ref<{ type: string; text: string }[][]>([])
let typeInterval: any = null

const typeCode = () => {
  // 1. Clear previous state
  clearInterval(typeInterval)
  displayedLines.value = []
  
  const allTokenized = tokenizeLines(props.lines, props.language)
  let lineIndex = 0

  // 2. Start the "typing" process
  typeInterval = setInterval(() => {
    if (lineIndex < allTokenized.length) {
      displayedLines.value.push(allTokenized[lineIndex]!)
      lineIndex++
      
      // Auto-scroll to bottom as it types
      nextTick(() => {
        const container = document.querySelector('.overflow-y-auto')
        if (container) container.scrollTop = container.scrollHeight
      })
    } else {
      clearInterval(typeInterval)
    }
  }, 60) // Adjust speed here (ms per line)
}

onMounted(typeCode)

// Watch for tab changes to restart the animation
watch(() => props.lines, () => {
  typeCode()
})
</script>

<style scoped>
.code-viewer {
  background: rgb(var(--v-theme-codeBg));
  padding: 12px 14px;
  border-radius: 12px;
  font-family: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: rgb(var(--v-theme-codePlain));
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 360px; /* Prevents vertical snapping */
  min-width: 100%;   /* Prevents horizontal snapping */
  display: flex;
  flex-direction: column;
}

.code-line {
  white-space: pre;
}
/* Ensure the line numbers don't shift when text is empty */
.line-number {
  min-width: 32px;
  text-align: right;
  user-select: none;
}

/* Add a smooth fade to the line rows so they don't "pop" */
.code-line-row {
  transition: opacity 0.2s ease;
}
.token.keyword {
  color: rgb(var(--v-theme-codeKeyword));
}

.token.string {
  color: rgb(var(--v-theme-codeString));
}

.token.comment {
  color: rgb(var(--v-theme-codeComment));
}

.token.plain {
  color: rgb(var(--v-theme-codePlain));
}
.token.keyword {
  color: rgb(var(--v-theme-codeKeyword)); /* blue */
}

.token.function {
  color: rgb(var(--v-theme-codeFunction)); /* purple */
}

.token.component {
  color: rgb(var(--v-theme-codeComponent)); /* teal */
}

.token.string {
  color: rgb(var(--v-theme-codeString)); /* orange */
}

.token.comment {
  color: rgb(var(--v-theme-codeComment)); /* green */
}

.token.plain {
  color: rgb(var(--v-theme-codePlain));
}
.caret {
  display: inline-block;
  position: relative;
  top: 5px;
  width: 2px;
  height: 1.3em;
  margin-left: 3px;
  background: rgb(var(--v-theme-codeCaret));
  animation: blink 1s steps(2, start) infinite;
}

/* codeViewer.vue style block */
.token {
  opacity: 0;
  animation: fadeIn 0.05s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Add a delay based on a CSS variable you can inject */
.token {
  animation-delay: var(--delay);
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

@media (min-width: 960px) {
  .code-viewer {
    padding: 16px 18px;
    font-size: 14px;
  }
}
</style>