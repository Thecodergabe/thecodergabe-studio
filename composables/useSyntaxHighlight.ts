/**
 * Token categories used by the syntax highlighter.
 * These map directly to CSS classes in the UI.
 */
export type TokenType =
  | 'keyword'
  | 'string'
  | 'comment'
  | 'plain'
  | 'function'
  | 'component'
  | 'tag'

/**
 * A token represents a classified segment of text.
 * Example: { type: 'keyword', text: 'export' }
 */
export type Token = {
  type: TokenType
  text: string
}

/**
 * Lightweight syntax highlighter for code previews.
 * Designed for Vue/Nuxt UI components, not full language parsing.
 */
export function useSyntaxHighlight() {
  /**
   * Keyword, function, and component lists.
   * These are intentionally small — the goal is aesthetic highlighting,
   * not full language accuracy.
   */
  const keywords = [
    'export',
    'const',
    'import',
    'from',
    'return',
    'true',
    'false',
    'setup',
    'lang',
    'scoped'
  ]

  const functions = ['createSolution', 'useStudio', 'ArchitectProfile']

  const components = ['v-container', 'v-row', 'v-col', 'v-sheet', 'h1']

  /**
   * Tokenizes a single line of code.
   * Uses a combined regex to detect:
   *  - comments
   *  - strings
   *  - HTML-like tags (&lt;tag&gt; or <tag>)
   *  - keywords
   *  - known functions
   *  - known components
   */
  function tokenize(line: string, lang: string): Token[] {
    const tokens: Token[] = []

    // Combined regex for all token types
    const combinedRegex = new RegExp(
      [
        /(\/\/.*)/.source, // 1: Comments
        /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/.source, // 2: Strings
        /(&lt;\/?[a-z1-6-]+|&gt;|<\/?[a-z1-6-]+|>)/.source, // 3: Tags
        `\\b(${keywords.join('|')})\\b`, // 4: Keywords
        `\\b(${functions.join('|')})\\b`, // 5: Functions
        `\\b(${components.join('|')})\\b` // 6: Components
      ].join('|'),
      'gi'
    )

    let lastIndex = 0
    let match: RegExpExecArray | null

    /**
     * Iterate through all matches and classify each segment.
     * Any text between matches is treated as plain text.
     */
    while ((match = combinedRegex.exec(line)) !== null) {
      // Push plain text before the match
      if (match.index > lastIndex) {
        tokens.push({
          type: 'plain',
          text: line.slice(lastIndex, match.index)
        })
      }

      // Map regex group index → token type
      const groups: TokenType[] = [
        'comment',
        'string',
        'tag',
        'keyword',
        'function',
        'component'
      ]

      let matchedType: TokenType = 'plain'
      let matchedText: string = match[0]

      // Determine which capture group matched
      for (let i = 0; i < groups.length; i++) {
        const groupText = match[i + 1]
        if (groupText !== undefined) {
          matchedType = groups[i] as TokenType
          matchedText = groupText
          break
        }
      }

      tokens.push({ type: matchedType, text: matchedText })
      lastIndex = combinedRegex.lastIndex
    }

    // Push any remaining plain text after the last match
    if (lastIndex < line.length) {
      tokens.push({ type: 'plain', text: line.slice(lastIndex) })
    }

    return tokens
  }

  /**
   * Tokenizes multiple lines at once.
   * Useful for rendering multi-line code blocks.
   */
  return {
    tokenizeLines: (lines: string[], lang: string) =>
      lines.map(l => tokenize(l, lang))
  }
}