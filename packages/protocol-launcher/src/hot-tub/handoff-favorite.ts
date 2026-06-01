import { type HotTubHandoffPagePayload, hotTubHandoffUrl } from './shared'

/**
 * Create Hot Tub's documented HTTPS handoff URL for favoriting a generic page.
 *
 * @param payload Generic-page handoff payload.
 * @returns Hot Tub favorite HTTPS handoff URL.
 * @example
 * handoffFavorite({ baseUrl: 'https://hottubapp.io', url: 'https://example.com/watch/12345' })
 * // => 'https://hottubapp.io/app?action=favorite&url=https%3A%2F%2Fexample.com%2Fwatch%2F12345'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function handoffFavorite(payload: HotTubHandoffPagePayload) {
  const { baseUrl, url } = payload

  return hotTubHandoffUrl(baseUrl, 'favorite', {
    url,
  })
}
