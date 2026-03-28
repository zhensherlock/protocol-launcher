import { qs } from '@protocol-launcher/shared'

/**
 * Open search command payload definition.
 */
type OpenSearch = {
  /**
   * The search query.
   *
   * @example '#Important'
   */
  query?: string
  /**
   * Open in a separate window (New in Agenda 18.0).
   */
  separateWindow?: boolean
}

/**
 * Open a search optionally with a query.
 *
 * @param payload Open search command payload.
 * @returns Agenda open search URL.
 * @example
 * openSearch({ query: '#Important' })
 * // => 'agenda://x-callback-url/open-search?query=%23Important'
 * @example
 * openSearch({})
 * // => 'agenda://x-callback-url/open-search'
 * @example
 * openSearch({ query: 'meeting', separateWindow: true })
 * // => 'agenda://x-callback-url/open-search?query=meeting&separate-window=true'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function openSearch(payload: OpenSearch = {}) {
  const { query, separateWindow } = payload
  const params = qs({
    ...(query ? { query } : {}),
    ...(separateWindow !== undefined ? { 'separate-window': separateWindow } : {}),
  })

  return `agenda://x-callback-url/open-search${params}`
}
