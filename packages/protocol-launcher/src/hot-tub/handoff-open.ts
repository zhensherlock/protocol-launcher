import { type HotTubHandoffPagePayload, hotTubHandoffUrl } from './shared'

/**
 * Create Hot Tub's documented HTTPS handoff URL for opening a generic page.
 *
 * @param payload Generic-page handoff payload.
 * @returns Hot Tub open HTTPS handoff URL.
 * @example
 * handoffOpen({ baseUrl: 'https://hottubapp.io', url: 'https://example.com/watch/12345' })
 * // => 'https://hottubapp.io/app?action=open&url=https%3A%2F%2Fexample.com%2Fwatch%2F12345'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function handoffOpen(payload: HotTubHandoffPagePayload) {
  const { baseUrl, url } = payload

  return hotTubHandoffUrl(baseUrl, 'open', {
    url,
  })
}
