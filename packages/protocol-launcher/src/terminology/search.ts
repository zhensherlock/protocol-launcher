import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * Query string to search.
   */
  q: string
}

/**
 * Open directly to a word search for a string in Terminology.
 *
 * @param payload Search command payload.
 * @returns Terminology search URL.
 * @example
 * search({ q: 'protocol' })
 * // => 'terminology:///search?q=protocol'
 * @link https://agiletortoise.com/terminology/automation
 */
export function search(payload: Search) {
  const { q } = payload
  const params = qs({ q })

  return `terminology:///search${params}`
}
