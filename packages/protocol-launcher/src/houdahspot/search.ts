import { type HoudahSpotSearchPayload, houdahSpotSearchUrl } from './shared'

/**
 * HoudahSpot search payload definition.
 */
export type Search = HoudahSpotSearchPayload

/**
 * Start a HoudahSpot search.
 *
 * @param payload HoudahSpot search payload.
 * @returns HoudahSpot search URL.
 * @example
 * search({ q: 'Houdah Software' })
 * // => 'houdahspot4://search?q=Houdah%20Software'
 * @link https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf
 */
export function search(payload: Search = {}) {
  return houdahSpotSearchUrl(payload)
}
