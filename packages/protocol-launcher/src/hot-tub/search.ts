import { type HotTubSearchPayload, hotTubUrl } from './shared'

/**
 * Pre-fill Hot Tub's search field with a query.
 *
 * @param payload Search payload.
 * @returns Hot Tub search URL.
 * @example
 * search({ q: 'funny cats' })
 * // => 'hottub://search?q=funny%20cats'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function search(payload: HotTubSearchPayload) {
  const { q } = payload

  return hotTubUrl('search', {
    q,
  })
}
