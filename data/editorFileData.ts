export type EditorFile = {
  name: string
  language: string
  lines: string[]
}

export const editorFiles: Record<string, EditorFile> = {
  expertise: {
    name: "Expertise.ts",
    language: "typescript",
    lines: [
      "export const ArchitectProfile = {",
      "  frameworks: ['Vue 3', 'Nuxt 3'],",
      "  ui_systems: ['Vuetify', 'Bootstrap'],",
      "  state: ['Pinia', 'Vuex'],",
      "  foundation: ['TypeScript', 'HTML5', 'CSS3'],",
      "  realtime: true,",
      "  status: 'AVAILABLE_FOR_PROJECTS'",
      "};"
    ]
  },
  studio: {
    name: "createSolution.ts",
    language: "typescript",
    lines: [
      "// studio/engine.ts",
      "import { StudioConfig, Solution } from './types'",
      "",
      "/**",
      " * Generates a high-performance solution instance",
      " */",
      "export const createSolution = (config: StudioConfig): Solution => {",
      "  const defaults: Solution = {",
      "    id: crypto.randomUUID(),",
      "    status: 'operational',",
      "    founded: 2026",
      "  }",
      "",
      "  return {",
      "    ...defaults,",
      "    ...config,",
      "    timestamp: Date.now()",
      "  }",
      "}",
      "",
      "// Logic ready for deployment"
    ],
  },
  home: {
    name: "home.vue",
    language: "vue", 
    lines: [
      "<template>",
      "  <v-container class=\"pa-0\">",
      "    <v-row no-gutters>",
      "      <v-col cols=\"12\">",
      "        <h1 class=\"hero-title\">",
      "          CRAFTSMANSHIP",
      "        </h1>",
      "      </v-col>",
      "    </v-row>",
      "  </v-container>",
      "</template>",
      "",
      "<script setup lang=\"ts\">",
      "import { useStudio } from '@/composables/useStudio'",
      "",
      "const studio = useStudio()",
      "// Initialize Studio environment",
      "</script>",
      "",
      "<style scoped>",
      ".hero-title {",
      "  font-family: 'Syne', sans-serif;",
      "  text-transform: uppercase;",
      "}",
      "</style>"
    ],
  }
}