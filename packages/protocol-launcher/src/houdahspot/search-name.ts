import { type HoudahSpotAttributeSearchPayload, houdahSpotSearchUrl } from './shared'

/**
 * HoudahSpot name search payload definition.
 */
export type SearchName = HoudahSpotAttributeSearchPayload

/**
 * Start a HoudahSpot search with the search attribute set to Name.
 *
 * @param payload HoudahSpot search payload.
 * @returns HoudahSpot search URL.
 * @example
 * searchName({ q: 'invoice' })
 * // => 'houdahspot4://search?q=invoice&s=name'
 * @link https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf
 */
export function searchName(payload: SearchName = {}) {
  return houdahSpotSearchUrl({ ...payload, s: 'name' })
}
