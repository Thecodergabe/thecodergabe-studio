export type EditorFile = {
  name: string
  language: string
  lines: string[]
}

export const editorFiles = {
    studio: {
    name: "createSolution.ts",
    language: "typescript",
    lines: [
      "// studio/createSolution.ts",
      "// Generates a new solution instance for the Studio environment.",
      "",
      "export interface StudioConfig {",
      "  name?: string",
      "  version?: string",
      "  author?: string",
      "}",
      "",
      "type Solution = {",
      "  name: string",
      "  version: string",
      "  author: string",
      "}",
      "",
      "export function createSolution(config: StudioConfig): Solution {",
      "  const defaults: Solution = {",
      "    name: \"Untitled\",",
      "    version: \"1.0.0\",",
      "    author: \"thecodergabe\",",
      "  }",
      "",
      "  const solution: Solution = {",
      "    ...defaults,",
      "    ...config,",
      "  }",
      "",
      "  return solution",
      "}",
      "",
      "// End of file",
    ],
  },
  home: {
    name: "home.vue",
    language: "typescript",
    lines: [
      "// home/index.ts",
      "// Entry point for thecodergabe STUDIO",
      "",
      "import { createSolution } from '@/studio/createSolution'",
      "",
      "const app = createSolution({",
      "  name: \"Studio Home\",",
      "  author: \"thecodergabe\",",
      "})",
      "",
      "app.mount('#app')",
      "",
      "// Ready to build something amazing.",
    ],
  },


}