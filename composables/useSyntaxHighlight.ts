export type Token = {
  type: 'keyword' | 'string' | 'comment' | 'plain' | 'function' | 'component'
  text: string
}

// Base language keywords
const languageKeywords: Record<string, string[]> = {
  javascript: ['const', 'let', 'var', 'return', 'function', 'export', 'import'],
  typescript: [
    'const',
    'let',
    'var',
    'return',
    'function',
    'export',
    'import',
    'type',
    'interface',
  ],
  vue: ['const', 'let', 'return', 'export', 'import', 'template'],
}

// Additional highlight groups
const highlightExtras = {
  functions: ['createSolution'],
  components: ['Hero'],
}

export function useSyntaxHighlight() {
  function tokenize(line: string, language: string): Token[] {
    const tokens: Token[] = []

    const trimmed = line.trim()
    if (trimmed.startsWith('//')) {
      return [{ type: 'comment', text: line }]
    }

    const keywords = languageKeywords[language] || languageKeywords.javascript
    const functionNames = highlightExtras.functions
    const componentNames = highlightExtras.components

    const keywordRegex = new RegExp(`\\b(${(keywords ?? []).join('|')})\\b`, 'g')
    const functionRegex = new RegExp(`\\b(${functionNames.join('|')})\\b`, 'g')
    const componentRegex = new RegExp(`\\b(${componentNames.join('|')})\\b`, 'g')
    const stringRegex = /"([^"]*)"|'([^']*)'/g

    const combined = new RegExp(
      `${keywordRegex.source}|${functionRegex.source}|${componentRegex.source}|${stringRegex.source}`,
      'g'
    )

    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = combined.exec(line)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          type: 'plain',
          text: line.slice(lastIndex, match.index),
        })
      }

      if (match[1]) {
        tokens.push({ type: 'keyword', text: match[1] })
      } else if (match[2]) {
        tokens.push({ type: 'function', text: match[2] })
      } else if (match[3]) {
        tokens.push({ type: 'component', text: match[3] })
      } else if (match[4]) {
        tokens.push({ type: 'string', text: `"${match[4]}"` })
      } else if (match[5]) {
        tokens.push({ type: 'string', text: `'${match[5]}'` })
      }

      lastIndex = combined.lastIndex
    }

    if (lastIndex < line.length) {
      tokens.push({
        type: 'plain',
        text: line.slice(lastIndex),
      })
    }

    return tokens
  }

  function tokenizeLines(lines: string[], language: string): Token[][] {
    return lines.map(line => tokenize(line, language))
  }

  return { tokenizeLines }
}