import { type DashSearchPayload, dashSearchQuery } from './shared'

export type SearchPayload = DashSearchPayload

/**
 * Search Dash using the documented `dash://?query={query}` URL scheme.
 *
 * @param payload Dash search payload.
 * @returns Dash search URL.
 * @example
 * search({ query: 'string' })
 * // => 'dash://?query=string'
 * @link https://kapeli.com/dash_guide
 */
export function search(payload: SearchPayload) {
  return dashSearchQuery(payload.query)
}
