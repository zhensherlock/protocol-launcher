import { type HoudahSpotAttributeSearchPayload, houdahSpotSearchUrl } from './shared'

/**
 * HoudahSpot content search payload definition.
 */
export type SearchContent = HoudahSpotAttributeSearchPayload

/**
 * Start a HoudahSpot search with the search attribute set to Text Content.
 *
 * @param payload HoudahSpot search payload.
 * @returns HoudahSpot search URL.
 * @example
 * searchContent({ q: 'project plan' })
 * // => 'houdahspot4://search?q=project%20plan&s=content'
 * @link https://www.houdah.com/houdahSpot/help/HoudahSpot%20Help%20EN.pdf
 */
export function searchContent(payload: SearchContent = {}) {
  return houdahSpotSearchUrl({ ...payload, s: 'content' })
}
