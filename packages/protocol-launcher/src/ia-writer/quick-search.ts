import type { IAWriterXCallback } from './shared'
import { iaWriterUrl } from './shared'

/**
 * Quick search command payload definition.
 */
type QuickSearch = IAWriterXCallback & {
  /**
   * Search query.
   */
  query?: string
}

/**
 * Opens Quick Search with a given query.
 *
 * @param payload Quick search command payload.
 * @returns iA Writer quick-search URL.
 * @example
 * quickSearch({ query: 'meeting notes' })
 * // => 'ia-writer://quick-search?query=meeting%20notes'
 * @example
 * quickSearch()
 * // => 'ia-writer://quick-search'
 * @link https://ia.net/writer/support/help/url-commands#quick-search
 */
export function quickSearch(payload: QuickSearch = {}) {
  const { query, xSuccess } = payload

  return iaWriterUrl(
    'quick-search',
    {
      ...(query !== undefined ? { query } : {}),
    },
    xSuccess,
  )
}
