import { type DashSearchDocsetsPayload, dashKeywordSearchQuery } from './shared'

export type SearchDocsetsPayload = DashSearchDocsetsPayload

/**
 * Search Dash with a documented docset keyword or Search Profile keyword trigger.
 *
 * @param payload Dash keyword search payload.
 * @returns Dash keyword search URL.
 * @example
 * searchDocsets({ keyword: 'php', query: 'printf' })
 * // => 'dash://?query=php:printf'
 * @link https://kapeli.com/dash_guide
 */
export function searchDocsets(payload: SearchDocsetsPayload) {
  return dashKeywordSearchQuery(payload)
}
