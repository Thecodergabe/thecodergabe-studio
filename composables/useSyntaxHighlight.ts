export type TokenType = 'keyword' | 'string' | 'comment' | 'plain' | 'function' | 'component' | 'tag'

export type Token = {
  type: TokenType
  text: string
}

export function useSyntaxHighlight() {
  const keywords = ['export', 'const', 'import', 'from', 'return', 'true', 'false', 'setup', 'lang', 'scoped']
  const functions = ['createSolution', 'useStudio', 'ArchitectProfile']
  const components = ['v-container', 'v-row', 'v-col', 'v-sheet', 'h1']

  function tokenize(line: string, lang: string): Token[] {
    const tokens: Token[] = []
    
    const combinedRegex = new RegExp([
      /(\/\/.*)/.source,                                     // 1: Comments
      /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/.source,         // 2: Strings
      /(&lt;\/?[a-z1-6-]+|&gt;|<\/?[a-z1-6-]+|>)/.source,     // 3: Tags
      `\\b(${keywords.join('|')})\\b`,                       // 4: Keywords
      `\\b(${functions.join('|')})\\b`,                      // 5: Functions
      `\\b(${components.join('|')})\\b`                       // 6: Components
    ].join('|'), 'gi')

    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = combinedRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({ type: 'plain', text: line.slice(lastIndex, match.index) })
      }

      const groups: TokenType[] = ['comment', 'string', 'tag', 'keyword', 'function', 'component']
      
      let matchedType: TokenType = 'plain'
      let matchedText: string = match[0]

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

    if (lastIndex < line.length) {
      tokens.push({ type: 'plain', text: line.slice(lastIndex) })
    }
    return tokens
  }

  return { tokenizeLines: (lines: string[], lang: string) => lines.map(l => tokenize(l, lang)) }
}