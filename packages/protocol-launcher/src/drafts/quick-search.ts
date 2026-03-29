import { qs } from '@protocol-launcher/shared'

/**
 * QuickSearch action payload definition.
 */
type QuickSearch = {
  /**
   * Initial text to use in the search.
   */
  query?: string
}

/**
 * Open drafts directly to quick search, if available.
 *
 * @param payload QuickSearch action payload.
 * @returns Drafts quickSearch URL.
 * @example
 * quickSearch({ query: 'QUERY-TEXT' })
 * // => 'drafts:///quickSearch?query=QUERY-TEXT'
 * @example
 * quickSearch()
 * // => 'drafts:///quickSearch'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function quickSearch(payload: QuickSearch = {}) {
  const { query } = payload

  const params = qs({
    ...(query ? { query } : {}),
  })

  return `drafts:///quickSearch${params}`
}
