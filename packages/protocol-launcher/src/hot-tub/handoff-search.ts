import { type HotTubHandoffSearchPayload, hotTubHandoffUrl } from './shared'

/**
 * Create Hot Tub's documented HTTPS handoff URL for a tag/search page.
 *
 * @param payload Search handoff payload.
 * @returns Hot Tub search HTTPS handoff URL.
 * @example
 * handoffSearch({ baseUrl: 'https://hottubapp.io', q: 'nature documentaries' })
 * // => 'https://hottubapp.io/app?action=search&q=nature%20documentaries'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function handoffSearch(payload: HotTubHandoffSearchPayload) {
  const { baseUrl, q } = payload

  return hotTubHandoffUrl(baseUrl, 'search', {
    q,
  })
}
