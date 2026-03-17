interface Dictionary {
  term?: string
}

/**
 * Search dictionaries for a term.
 *
 * @param payload - Term to search for.
 * @returns Dictionary search URL.
 * @example
 * dictionary()
 * // => 'dict://'
 * @example
 * dictionary({ term: 'hello' })
 * // => 'dict://hello'
 */
export function dictionary(payload: Dictionary = {}) {
  const { term = '' } = payload
  return `dict://${term}`
}
