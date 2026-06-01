import { type HoudahSpotAttributeSearchPayload, houdahSpotSearchUrl } from './shared'

/**
 * HoudahSpot any-text search payload definition.
 */
export type SearchAnyText = HoudahSpotAttributeSearchPayload

/**
 * Start a HoudahSpot search with the search attribute set to Any Text.
 *
 * @param payload HoudahSpot search payload.
 * @returns HoudahSpot search URL.
 * @example
 * searchAnyText({ q: 'tag:orange' })
 * // => 'houdahspot4://search?q=tag:orange&s=anytext'
 * @link https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf
 */
export function searchAnyText(payload: SearchAnyText = {}) {
  return houdahSpotSearchUrl({ ...payload, s: 'anytext' })
}
